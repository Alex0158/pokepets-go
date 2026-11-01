import { validateManifest } from '../../avatar-lab/core.mjs';
export type AvatarSubject='owner'|'pet';
export type InputPolicy='synthetic-only'|'personal-photo';
export type SpriteFrame={x:number;y:number;w:number;h:number};
export type SpriteAnimation={fps:number;loop:boolean;frames:SpriteFrame[]};
export type AvatarManifest={schemaVersion:1;sheet:string;width:number;height:number;animations:Record<string,SpriteAnimation>};
export type AvatarProvenance={provider:string;inputPolicy:InputPolicy;inputConditioned?:boolean;[key:string]:unknown};
export type ApprovedCharacterAsset={subject:AvatarSubject;assetId:string;manifest:AvatarManifest;expiresAt:string;provenance:AvatarProvenance};
export type AvatarAssets={owner?:ApprovedCharacterAsset;pet?:ApprovedCharacterAsset};
export type AvatarDescriptor=Omit<ApprovedCharacterAsset,'manifest'>&{imageUrl:string;manifestUrl:string};
export type AvatarJob={jobId:string;subject:AvatarSubject;status:'queued'|'running'|'succeeded'|'failed'|'canceled';expiresAt:string;asset?:AvatarDescriptor;error?:string};
export type AvatarConfig={available:boolean;provider:string;personalPhotos:boolean;syntheticOnly:boolean;maxInputBytes:number;expiresAfterSeconds:number;liveRequestsRemaining:number|null;persistence:string;storage?:'memory'|'mongo';submission?:'background-local'|'request-bound'};
export type AvatarInput={requestId:string;subject:AvatarSubject;mimeType:string;imageBase64:string;inputPolicy:InputPolicy;consent?:{authorizedImage:boolean;sendToOpenAI:boolean;temporaryStorage:boolean}};
type Transport=(path:string,init?:RequestInit)=>Promise<Response>;
function validateDescriptor(descriptor:AvatarDescriptor,subject:AvatarSubject) {
  const id=descriptor?.assetId;
  if(!/^[0-9a-f-]{36}$/.test(id??'')||descriptor.subject!==subject||descriptor.imageUrl!==`/api/avatars/assets/${id}/image`||descriptor.manifestUrl!==`/api/avatars/assets/${id}/manifest`||!Number.isFinite(Date.parse(descriptor.expiresAt))||Date.parse(descriptor.expiresAt)<=Date.now())throw Error('Avatar asset is invalid or expired. Keep your preset.');
  if(!descriptor.provenance||typeof descriptor.provenance.provider!=='string'||!['synthetic-only','personal-photo'].includes(descriptor.provenance.inputPolicy))throw Error('Missing avatar provenance.');
}
export function validateCharacterAsset(descriptor:AvatarDescriptor,manifest:AvatarManifest,subject:AvatarSubject):ApprovedCharacterAsset {
  validateDescriptor(descriptor,subject);
  if(manifest?.sheet!==descriptor.imageUrl)throw Error('Avatar image location is invalid. Keep your preset.');
  validateManifest({...manifest,sheet:'assets/validated.png'});
  return {subject,assetId:descriptor.assetId,manifest,expiresAt:descriptor.expiresAt,provenance:descriptor.provenance};
}
export async function fileBase64(file:File):Promise<string> {
  if(!['image/png','image/jpeg'].includes(file.type)||file.size>3*1024*1024||file.size===0)throw Error('Choose a PNG or JPEG up to 3 MiB.');
  const bytes=new Uint8Array(await file.arrayBuffer()),parts:string[]=[];
  for(let n=0;n<bytes.length;n+=32768)parts.push(String.fromCharCode(...bytes.subarray(n,n+32768)));
  bytes.fill(0);return btoa(parts.join(''));
}
export class AvatarClient {
  private pending=new Map<AvatarSubject,AvatarInput>();
  private transport:Transport;
  constructor(transport:Transport=fetch){this.transport=transport;}
  private async request<T>(path:string,init:RequestInit={},timeoutMs=15000):Promise<T> {
    const transport=this.transport;
    const response=await transport(path,{...init,credentials:'same-origin',cache:'no-store',signal:AbortSignal.timeout(timeoutMs),headers:{'Content-Type':'application/json',...init.headers}});
    const data=await response.json();if(!response.ok)throw Error(data.error??'Avatar request failed.');return data as T;
  }
  config(){return this.request<AvatarConfig>('/api/avatars/config');}
  hasPending(subject:AvatarSubject){return this.pending.has(subject);}
  async submit(input:AvatarInput) {
    if(this.pending.has(input.subject))throw Error('Retry or discard the pending avatar submission first.');
    this.pending.set(input.subject,input);return this.retry(input.subject);
  }
  async retry(subject:AvatarSubject):Promise<AvatarJob> {
    const input=this.pending.get(subject);if(!input)throw Error('No pending avatar request.');
    try {const job=await this.request<AvatarJob>('/api/avatars/jobs',{method:'POST',body:JSON.stringify(input)},150000);this.pending.delete(subject);return job;}
    catch(e){throw e;}
  }
  discard(subject:AvatarSubject){this.pending.delete(subject);}
  status(id:string){return this.request<AvatarJob>(`/api/avatars/jobs/${id}`);}
  cancel(id:string){return this.request<AvatarJob>(`/api/avatars/jobs/${id}`,{method:'DELETE'});}
  async resolve(job:AvatarJob):Promise<ApprovedCharacterAsset> {
    if(job.status!=='succeeded'||!job.asset)throw Error('Avatar is not ready.');
    validateDescriptor(job.asset,job.subject);
    const manifest=await this.request<AvatarManifest>(job.asset.manifestUrl);return validateCharacterAsset(job.asset,manifest,job.subject);
  }
}
