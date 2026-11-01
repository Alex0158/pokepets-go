import { randomUUID, createHash } from 'node:crypto';
import sharp from 'sharp';
import { validateManifest } from '../core.mjs';

export class JobError extends Error {
  constructor(code, status = 400) { super(code); this.code = code; this.status = status; }
}
const fail = (code, status) => { throw new JobError(code, status); };
const MAX_INPUT = 4 * 1024 * 1024;
export async function decodeInput(input,{allowedInputPolicies=['synthetic-only']}={}) {
  if (!input || !['owner','pet'].includes(input.subject) || !allowedInputPolicies.includes(input.inputPolicy) || !/^[0-9a-f-]{36}$/i.test(input.requestId ?? '')) fail('invalid_input');
  if (!['image/png','image/jpeg'].includes(input.mimeType)) fail('unsupported_image',415);
  const s = input.imageBase64;
  if (typeof s !== 'string' || s.length > Math.ceil(MAX_INPUT / 3) * 4 || s.length%4!==0 || /[^A-Za-z0-9+/=]/.test(s)) fail('invalid_image');
  const bytes = Buffer.from(s,'base64');
  try {
    if (!bytes.length || bytes.length > MAX_INPUT) fail('image_too_large',413);
    if(bytes.toString('base64')!==s)fail('invalid_image');
    const format = input.mimeType === 'image/png' ? 'png' : 'jpeg';
    const image = sharp(bytes,{limitInputPixels:4096*4096,failOn:'warning'});
    const meta = await image.metadata();
    if (meta.format !== format || meta.pages > 1 || !meta.width || !meta.height || meta.width > 4096 || meta.height > 4096) fail('invalid_image');
    await image.raw().toBuffer(); // Full decode rejects truncated or disguised files.
    return bytes;
  } catch (e) { bytes.fill(0); if(e instanceof JobError)throw e;fail('invalid_image'); }
}

export class AvatarJobs {
  /** @param {{provider?:((input:{subject:string,inputPolicy?:string,bytes:Buffer,mimeType:string,signal:AbortSignal})=>Promise<{bytes:Buffer,manifest:any,provenance:any}>) & {remaining?:()=>number},mode?:string,clock?:()=>number,timeoutMs?:number,ttlMs?:number,maxJobs?:number,maxPerSession?:number,concurrency?:number,allowedInputPolicies?:string[]}} options */
  constructor({provider,mode='fixture',clock=Date.now,timeoutMs=120000,ttlMs=300000,maxJobs=8,maxPerSession=4,concurrency=2,allowedInputPolicies=['synthetic-only']}={}) {
    if(typeof provider!=='function')throw Error('Explicit provider required');
    this.provider=provider;
    Object.assign(this,{provider,mode,clock,timeoutMs,ttlMs,maxJobs,maxPerSession,concurrency,allowedInputPolicies});
    this.jobs=new Map();this.running=0;this.closed=false;
  }
  sweep() {
    for(const [id,j] of this.jobs)if(j.expiresAt<=this.clock()) {
      this.stop(j,'expired');j.output?.bytes.fill(0);clearTimeout(j.expiryTimer);this.jobs.delete(id);
    }
  }
  async submit(owner,input) {
    if(this.closed)fail('service_closed',503);
    this.sweep();
    // Check capacity before decoding large images; exact retries still work at capacity.
    const prior=[...this.jobs.values()].find(j=>j.owner===owner&&j.requestId===input?.requestId);
    const signature=createHash('sha256').update(JSON.stringify([input?.subject,input?.mimeType,input?.inputPolicy,input?.imageBase64])).digest('hex');
    if(prior){if(prior.signature!==signature)fail('request_conflict',409);return this.view(prior);}
    if(this.jobs.size>=this.maxJobs||[...this.jobs.values()].filter(j=>j.owner===owner).length>=this.maxPerSession)fail('capacity_reached',429);
    const bytes=await decodeInput(input,{allowedInputPolicies:this.allowedInputPolicies});
    if(this.closed){bytes.fill(0);fail('service_closed',503);}
    // Decoding is asynchronous: recheck reservations to avoid concurrent over-allocation.
    const again=[...this.jobs.values()].find(j=>j.owner===owner&&j.requestId===input.requestId);
    if(again){bytes.fill(0);if(again.signature!==signature)fail('request_conflict',409);return this.view(again);}
    if(this.jobs.size>=this.maxJobs||[...this.jobs.values()].filter(j=>j.owner===owner).length>=this.maxPerSession){bytes.fill(0);fail('capacity_reached',429);}
    const j={jobId:randomUUID(),owner,requestId:input.requestId,signature,subject:input.subject,inputPolicy:input.inputPolicy,mimeType:input.mimeType,bytes,status:'queued',createdAt:this.clock(),expiresAt:this.clock()+this.ttlMs,controller:new AbortController()};
    j.expiryTimer=setTimeout(()=>this.sweep(),this.ttlMs+1);j.expiryTimer.unref?.();
    this.jobs.set(j.jobId,j);queueMicrotask(()=>this.drain());return this.view(j);
  }
  require(owner,id) { this.sweep();const j=this.jobs.get(id);if(!j||j.owner!==owner)fail('not_found',404);return j; }
  view(j) {
    return {jobId:j.jobId,subject:j.subject,inputPolicy:j.inputPolicy,status:j.status,mode:this.mode,createdAt:j.createdAt,expiresAt:j.expiresAt,...(j.error?{error:j.error}:{}),...(j.output?{asset:{assetId:j.jobId,subject:j.subject,manifestUrl:`/api/avatar-assets/${j.jobId}/manifest`,expiresAt:j.expiresAt,provenance:{...j.output.provenance,inputPolicy:j.inputPolicy}}}:{})};
  }
  status(owner,id) { return this.view(this.require(owner,id)); }
  asset(owner,id) { const j=this.require(owner,id);if(j.status!=='succeeded'||!j.output)fail('not_found',404);return j.output; }
  stop(j,status='canceled') {
    if(!['queued','running'].includes(j.status))return;
    j.status=status;j.controller.abort();j.bytes?.fill(0);j.bytes=null;j.cancelRun?.();
  }
  cancel(owner,id) {
    const j=this.require(owner,id);this.stop(j);j.output?.bytes.fill(0);j.output=undefined;j.status='canceled';this.drain();return this.view(j);
  }
  drain() {
    if(this.closed)return;
    this.sweep();
    for(const j of this.jobs.values()) {
      if(this.running>=this.concurrency)break;
      if(j.status!=='queued')continue;
      j.status='running';this.running++;this.run(j).finally(()=>{this.running--;this.drain();});
    }
  }
  async run(j) {
    let timeout,candidate;
    const deadlineAt=this.clock()+this.timeoutMs;
    try {
      const canceled=new Promise((_,reject)=>{j.cancelRun=()=>reject(new JobError('canceled'));});
      const deadline=new Promise((_,reject)=>{timeout=setTimeout(()=>{j.controller.abort();reject(new JobError('generation_timeout'));},this.timeoutMs);});
      const generated=Promise.resolve().then(()=>this.provider({subject:j.subject,inputPolicy:j.inputPolicy,bytes:j.bytes,mimeType:j.mimeType,signal:j.controller.signal}));
      // Late providers cannot publish after timeout/cancel. Clear abandoned binary results.
      generated.then(out=>{if(j.status!=='running')out?.bytes?.fill(0);},()=>{});
      const out=candidate=await Promise.race([generated,deadline,canceled]);
      if(j.status!=='running')return;
      if(!Buffer.isBuffer(out?.bytes)||out.bytes.length>8*1024*1024||!out.provenance||out.provenance.subject!==j.subject)fail('invalid_output');
      const m=validateManifest({...out.manifest,sheet:`assets/job-${j.jobId}.png`});
      const image=sharp(out.bytes,{limitInputPixels:8192*8192,failOn:'warning'}),meta=await image.metadata();
      if(meta.format!=='png'||meta.width!==m.width||meta.height!==m.height||!meta.hasAlpha||meta.pages>1)fail('invalid_output');
      const pixels=await image.toColourspace('srgb').ensureAlpha().raw().toBuffer();
      try {
        for(const a of Object.values(m.animations))for(const f of a.frames) {
          let visible=0;
          for(let y=f.y;y<f.y+f.h&&visible<16;y++)for(let x=f.x;x<f.x+f.w&&visible<16;x++)if(pixels[(y*m.width+x)*4+3]>32)visible++;
          if(visible<16)fail('invalid_output');
        }
      } finally {pixels.fill(0);}
      if(j.status!=='running'){out.bytes.fill(0);return;}
      if(this.clock()>deadlineAt)throw new JobError('generation_timeout');
      j.output={bytes:out.bytes,manifest:m,provenance:out.provenance};j.status='succeeded';
    } catch(e) {
      if(j.status==='running'){j.status='failed';j.error=e?.code==='generation_timeout'?'generation_timeout':/^(openai_|request_budget_)[a-zA-Z0-9_-]+$/.test(e?.code??'')?e.code:'generation_failed';}
    } finally { clearTimeout(timeout);j.cancelRun=null;j.bytes?.fill(0);j.bytes=null;if(candidate?.bytes!==j.output?.bytes)candidate?.bytes?.fill(0); }
  }
  close() { this.closed=true;for(const j of this.jobs.values()){this.stop(j);j.output?.bytes.fill(0);clearTimeout(j.expiryTimer);}this.jobs.clear(); }
}
