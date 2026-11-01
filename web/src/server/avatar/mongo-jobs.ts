import { createHash, randomUUID } from 'node:crypto';
import { setTimeout as pause } from 'node:timers/promises';
import type { Collection, Db } from 'mongodb';
import { AvatarJobs, decodeInput, JobError } from '../../../avatar-lab/service/jobs.mjs';
type Input={requestId:string;subject:string;mimeType:string;imageBase64:string;inputPolicy:string};
type Provider=NonNullable<ConstructorParameters<typeof AvatarJobs>[0]>['provider'];
type Output={imageBase64:string;manifest:any;provenance:any};
type RecordJob={_id:string;owner:string;requestId:string;signature:string;subject:string;inputPolicy:string;status:string;createdAt:Date;expiresAt:Date;deadlineAt:Date;error?:string;output?:Output};
type Budget={_id:string;limit:number;used:number;claims:string[]};
const BUDGET='main-avatar-v1',MAX_INPUT=3*1024*1024,MAX_OUTPUT=4*1024*1024;
function fail(code:string,status=400):never {throw new JobError(code,status);}

// Generation is awaited by POST. Only receipts/generated output cross instances.
export class MongoAvatarJobs {
  private records:Collection<RecordJob>;
  private budgets:Collection<Budget>;
  private ready?:Promise<void>;
  private generate:Provider;
  private mode:string;
  private maxRequests:number;
  private clock:()=>number;
  private policies:string[];
  readonly provider:{remaining:()=>Promise<number>};
  constructor({db,provider,mode='fixture',maxRequests=2,clock=Date.now,allowedInputPolicies=['synthetic-only']}:{db:Db;provider:Provider;mode?:string;maxRequests?:number;clock?:()=>number;allowedInputPolicies?:string[]}) {
    if(typeof provider!=='function'||!Number.isSafeInteger(maxRequests)||maxRequests<0||maxRequests>2)fail('avatar_invalid_request_allowance',503);
    this.records=db.collection<RecordJob>('avatar_jobs_v1');this.budgets=db.collection<Budget>('avatar_budget_v1');
    this.generate=provider;this.mode=mode;this.maxRequests=maxRequests;this.clock=clock;this.policies=allowedInputPolicies;
    this.provider={remaining:()=>this.remaining()};
  }
  initialize():Promise<void> {
    this.ready??=(async()=>{
      await this.records.createIndexes([{key:{owner:1,requestId:1},unique:true,name:'owner_request_unique'},{key:{expiresAt:1},expireAfterSeconds:0,name:'expires_ttl'}]);
      try{await this.budgets.updateOne({_id:BUDGET},{$setOnInsert:{limit:2,used:0,claims:[]}},{upsert:true});}catch(e){if((e as {code?:number}).code!==11000)throw e;}
    })().catch(error=>{this.ready=undefined;throw error;});return this.ready;
  }
  signature(input:Input) {return createHash('sha256').update(JSON.stringify([input?.subject,input?.mimeType,input?.inputPolicy,input?.imageBase64])).digest('hex');}
  private claim(owner:string,id:string) {return createHash('sha256').update(JSON.stringify([owner,id])).digest('hex');}
  private async remaining() {await this.initialize();const b=await this.budgets.findOne({_id:BUDGET});if(!b)fail('avatar_service_unavailable',503);return Math.max(0,Math.min(b.limit,this.maxRequests)-b.used);}
  private view(j:RecordJob) {
    return {jobId:j._id,subject:j.subject,inputPolicy:j.inputPolicy,status:j.status,mode:this.mode,createdAt:+j.createdAt,expiresAt:+j.expiresAt,...(j.error?{error:j.error}:{}),...(j.status==='succeeded'&&j.output?{asset:{assetId:j._id,subject:j.subject,manifestUrl:`/api/avatar-assets/${j._id}/manifest`,expiresAt:+j.expiresAt,provenance:{...j.output.provenance,inputPolicy:j.inputPolicy}}}:{})};
  }
  private async require(owner:string,id:string,includeImage=false) {
    await this.initialize();let j=await this.records.findOne({_id:id,owner,expiresAt:{$gt:new Date(this.clock())}},includeImage?{}:{projection:{'output.imageBase64':0}});
    if(!j)fail('not_found',404);
    if(j.status==='running'&&+j.deadlineAt<=this.clock()) {
      await this.records.updateOne({_id:id,owner,status:'running'},{$set:{status:'failed',error:'generation_timeout'},$unset:{output:''}});
      j=await this.records.findOne({_id:id,owner,expiresAt:{$gt:new Date(this.clock())}},includeImage?{}:{projection:{'output.imageBase64':0}});if(!j)fail('not_found',404);
    }return j;
  }
  async status(owner:string,id:string) {return this.view(await this.require(owner,id));}
  async asset(owner:string,id:string) {const j=await this.require(owner,id,true);if(j.status!=='succeeded'||!j.output)fail('not_found',404);return {bytes:Buffer.from(j.output.imageBase64,'base64'),manifest:j.output.manifest,provenance:j.output.provenance};}
  async cancel(owner:string,id:string) {await this.require(owner,id);await this.records.updateOne({_id:id,owner,expiresAt:{$gt:new Date(this.clock())}},{$set:{status:'canceled'},$unset:{output:'',error:''}});return this.status(owner,id);}
  private async prior(owner:string,input:Input,signature:string) {
    const j=await this.records.findOne({owner,requestId:input?.requestId},{projection:{'output.imageBase64':0}});
    if(!j)return null;if(j.signature!==signature)fail('request_conflict',409);if(+j.expiresAt<=this.clock())fail('request_expired',410);return this.status(owner,j._id);
  }
  async submit(owner:string,input:Input) {
    await this.initialize();const signature=this.signature(input),prior=await this.prior(owner,input,signature);if(prior)return prior;
    const claim=this.claim(owner,input?.requestId),budget=await this.budgets.findOne({_id:BUDGET});
    if(budget?.claims.includes(claim)){const again=await this.prior(owner,input,signature);if(again)return again;fail('request_expired',410);}
    if(await this.remaining()===0)fail('request_budget_reached',429);
    if(typeof input?.imageBase64!=='string'||input.imageBase64.length>MAX_INPUT/3*4)fail('image_too_large',413);
    const decoded=await decodeInput(input,{allowedInputPolicies:this.policies});if(!decoded)fail('invalid_image');decoded.fill(0);
    const now=this.clock(),id=randomUUID();
    const record:RecordJob={_id:id,owner,requestId:input.requestId,signature,subject:input.subject,inputPolicy:input.inputPolicy,status:'running',createdAt:new Date(now),expiresAt:new Date(now+300000),deadlineAt:new Date(now+120000)};
    try{await this.records.insertOne(record);}catch(error){if((error as {code?:number}).code!==11000)throw error;const again=await this.prior(owner,input,signature);if(again)return again;fail('request_expired',410);}
    const reserved=await this.budgets.updateOne({_id:BUDGET,used:{$lt:this.maxRequests},claims:{$ne:claim}},{$inc:{used:1},$push:{claims:claim}});
    if(reserved.modifiedCount!==1){await this.records.updateOne({_id:id,status:'running'},{$set:{status:'failed',error:'request_budget_reached'}});return this.status(owner,id);}
    if((await this.require(owner,id)).status!=='running')return this.status(owner,id);
    const local=new AvatarJobs({provider:this.generate,mode:this.mode,allowedInputPolicies:this.policies,maxJobs:1,maxPerSession:1,concurrency:1});
    try {
      let state=await local.submit(owner,input);
      while(['queued','running'].includes(state.status)){await pause(20);state=local.status(owner,state.jobId);}
      if(state.status!=='succeeded')await this.records.updateOne({_id:id,status:'running'},{$set:{status:'failed',error:state.error??'generation_failed'}});
      else {
        const output=local.asset(owner,state.jobId);if(output.bytes.length>MAX_OUTPUT)fail('invalid_output');
        await this.records.updateOne({_id:id,owner,status:'running',expiresAt:{$gt:new Date(this.clock())},deadlineAt:{$gt:new Date(this.clock())}},{$set:{status:'succeeded',output:{imageBase64:output.bytes.toString('base64'),manifest:output.manifest,provenance:output.provenance}}});
      }
    }catch{await this.records.updateOne({_id:id,status:'running'},{$set:{status:'failed',error:'generation_failed'},$unset:{output:''}});}
    finally{local.close();}
    return this.status(owner,id);
  }
}
