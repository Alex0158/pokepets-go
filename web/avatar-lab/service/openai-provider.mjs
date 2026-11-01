import sharp from 'sharp';
import { gridManifest } from './fixture-provider.mjs';
const MODEL='gpt-image-2.5-flare-2026-09-08';
export class ProviderError extends Error {constructor(code){super(code);this.code=code;}}
function promptFor(subject,inputPolicy='synthetic-only') {
  const identity=subject==='owner'?'human owner character, preserving the reference hair, skin tone and clothing':'pet character, preserving the reference species, coat colors, markings and silhouette';
  const context=inputPolicy==='personal-photo'?'The supplied image was selected by an authorized uploader for this avatar request.':'The supplied image is an invented synthetic reference, not a real personal photo.';
  return `Create one animated game sprite atlas of the ${identity}. ${context} Use only this reference for this character; do not add another owner or pet. Exact layout: 4 columns by 4 rows of equal cells, 1024x1024 transparent PNG. Exactly one full-body character per cell, consistent size and facing right in three-quarter view. Keep all artwork inside each cell with generous transparent margins, centered with a shared feet baseline. Row 1: four subtle idle breathing/blink frames. Row 2: four distinct walking cycle frames with alternating legs/paws. Row 3: four playful anticipation, lean/pounce, recover and rest frames. Row 4: four surprised/flinch, recover and calm reaction frames. Clean small game illustration, same face, outfit/markings and proportions across every frame. Transparent background, no grid lines, text, labels, environment, shadows outside cells, props or watermark. Do not infer a real identity. The output is a draft sprite sheet for visual QA, not a finished Codex pet package.`;
}
function usageOf(value) {
  if(!value||typeof value!=='object')return null;
  const number=n=>Number.isFinite(n)&&n>=0&&n<1e8?n:null;
  return {inputTokens:number(value.input_tokens),outputTokens:number(value.output_tokens),totalTokens:number(value.total_tokens),imageInputTokens:number(value.input_tokens_details?.image_tokens),textInputTokens:number(value.input_tokens_details?.text_tokens)};
}
export function createOpenAIProvider({apiKey=process.env.OPENAI_API_KEY,fetchImpl=fetch,maxRequests=2,beforeRequest=async()=>true}={}) {
  if(!apiKey)throw new ProviderError('openai_key_missing');
  let requests=0;
  const provider=async({subject,bytes,mimeType,signal,inputPolicy='synthetic-only'})=>{
    if(!['owner','pet'].includes(subject))throw new ProviderError('invalid_subject');
    if(requests>=maxRequests)throw new ProviderError('request_budget_reached');
    requests++;
    const started=performance.now();
    let res;
    let normalized;
    try {
      // Normalize without metadata before transmission; original upload files are untouched.
      normalized=await sharp(bytes,{limitInputPixels:4096*4096}).rotate().resize({width:1024,height:1024,fit:'inside',withoutEnlargement:true}).png().toBuffer();
      if(signal.aborted)throw new ProviderError('generation_canceled');
      if(!await beforeRequest())throw new ProviderError('request_budget_hosted_quota_reached');
      res=await fetchImpl('https://api.openai.com/v1/images/edits',{method:'POST',headers:{'Authorization':`Bearer ${apiKey}`,'Content-Type':'application/json'},body:JSON.stringify({model:MODEL,images:[{image_url:`data:image/png;base64,${normalized.toString('base64')}`}],prompt:promptFor(subject,inputPolicy),n:1,size:'1024x1024',quality:'low',background:'transparent',output_format:'png'}),signal:AbortSignal.any([signal,AbortSignal.timeout(110000)])});
    }catch(error){if(error instanceof ProviderError)throw error;throw new ProviderError(signal.aborted?'generation_canceled':'openai_network_or_timeout');}finally{normalized?.fill(0);}
    let length=0;const chunks=[];
    for await(const chunk of res.body){length+=chunk.byteLength;if(length>16*1024*1024)throw new ProviderError('openai_response_too_large');chunks.push(chunk);}
    let data;try{data=JSON.parse(Buffer.concat(chunks).toString('utf8'));}catch{throw new ProviderError('openai_invalid_response');}
    if(!res.ok){const code=/^[a-zA-Z0-9_-]{1,60}$/.test(data.error?.code??'')?data.error.code:'request_failed';throw new ProviderError(`openai_${res.status}_${code}`);}
    const b64=data.data?.[0]?.b64_json;
    if(typeof b64!=='string'||b64.length>12*1024*1024)throw new ProviderError('openai_missing_image');
    const output=Buffer.from(b64,'base64');
    const meta=await sharp(output,{limitInputPixels:4096*4096}).metadata();
    const usage=usageOf(data.usage);
    const estimate=usage&&[usage.imageInputTokens,usage.textInputTokens,usage.outputTokens].every(n=>n!==null)
      ?(usage.imageInputTokens*8+usage.textInputTokens*5+usage.outputTokens*30)/1e6:null;
    return {bytes:output,manifest:gridManifest(meta.width,meta.height,`${subject}-openai-draft`),provenance:{provider:'openai',subject,inputPolicy,inputConditioned:true,modelRequested:MODEL,modelReturned:typeof data.model==='string'?data.model:null,requestId:res.headers.get('x-request-id'),latencyMs:Math.round(performance.now()-started),usage,estimatedCostUsd:estimate,costBasis:estimate===null?'usage unavailable or incomplete':'standard token-rate estimate; not an invoice',quality:'low',label:`Live OpenAI API output from ${inputPolicy==='personal-photo'?'an uploader-selected photo':'a synthetic input'}; visual quality unapproved`}};
  };
  provider.remaining=()=>maxRequests-requests;
  return provider;
}
