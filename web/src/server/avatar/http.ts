import { localRequest } from '../core/http.ts';
import { DomainError } from '../core/battle.ts';
import { JobError } from '../../../avatar-lab/service/jobs.mjs';
import type { AvatarJobs } from '../../../avatar-lab/service/jobs.mjs';
import { reportAvatarFailure } from './diagnostics.ts';

type View=ReturnType<AvatarJobs['status']>;
export type AvatarJobStore={provider:{remaining?:()=>number|Promise<number>};submit:(owner:string,input:any)=>Promise<View>;status:(owner:string,id:string)=>View|Promise<View>;cancel:(owner:string,id:string)=>View|Promise<View>;asset:(owner:string,id:string)=>ReturnType<AvatarJobs['asset']>|Promise<ReturnType<AvatarJobs['asset']>>};
type Options={jobs:AvatarJobStore;mode:string;personalPhotos:boolean;storage?:'memory'|'mongo';resolvePlayer:(request:Request)=>Promise<string|null>};
const json=(value:unknown,status=200)=>Response.json(value,{status,headers:{'Cache-Control':'private, no-store','X-Content-Type-Options':'nosniff'}});
async function body(request:Request) {
  const reader=request.body?.getReader();if(!reader)throw new JobError('invalid_json');
  const parts:Uint8Array[]=[];let size=0;
  for(;;){const chunk=await reader.read();if(chunk.done)break;size+=chunk.value.length;if(size>4300000){await reader.cancel();throw new JobError('body_too_large',413);}parts.push(chunk.value);}
  let v:Record<string,unknown>;
  try{v=JSON.parse(Buffer.concat(parts).toString('utf8'));}catch{throw new JobError('invalid_json');}
  if(!v||typeof v!=='object'||Array.isArray(v)||Object.keys(v).some(k=>!['requestId','subject','mimeType','imageBase64','inputPolicy','consent'].includes(k)))throw new JobError('invalid_fields');
  return v;
}
export function createAvatarHandler({jobs,mode,personalPhotos,storage='memory',resolvePlayer}:Options) {
  const paths=(id:string)=>({imageUrl:`/api/avatars/assets/${id}/image`,manifestUrl:`/api/avatars/assets/${id}/manifest`});
  const transport=(j:ReturnType<AvatarJobs['status']>)=>({...j,expiresAt:new Date(j.expiresAt).toISOString(),...(j.asset?{asset:{...j.asset,...paths(j.asset.assetId),expiresAt:new Date(j.asset.expiresAt).toISOString()}}:{})});
  return async(request:Request):Promise<Response>=>{
    try {
      localRequest(request);
      const owner=await resolvePlayer(request);if(!owner)throw new JobError('unauthenticated',401);
      const path=new URL(request.url).pathname;
      if(path==='/api/avatars/config'&&request.method==='GET')return json({available:mode!=='disabled',provider:mode,personalPhotos:mode==='openai'&&personalPhotos,syntheticOnly:mode!=='openai'||!personalPhotos,maxInputBytes:3*1024*1024,expiresAfterSeconds:300,liveRequestsRemaining:await jobs.provider.remaining?.()??null,storage,submission:storage==='mongo'?'request-bound':'background-local',persistence:storage==='mongo'?'temporary-private-database':'temporary-memory-only'});
      if(path==='/api/avatars/jobs'&&request.method==='POST') {
        if(mode==='disabled')throw new JobError('avatar_generation_unavailable',503);
        const v=await body(request);
        if(typeof v.imageBase64==='string'&&v.imageBase64.length>3*1024*1024/3*4)throw new JobError('image_too_large',413);
        if(v.inputPolicy==='personal-photo') {
          if(mode!=='openai'||!personalPhotos)throw new JobError('personal_photo_policy_required',409);
          const c=v.consent as Record<string,unknown>|undefined;
          if(!c||c.authorizedImage!==true||c.sendToOpenAI!==true||c.temporaryStorage!==true)throw new JobError('photo_consent_required',400);
        }else if(v.inputPolicy!=='synthetic-only')throw new JobError('invalid_input_policy');
        return json(transport(await jobs.submit(owner,v)),202);
      }
      const j=/^\/api\/avatars\/jobs\/([0-9a-f-]{36})$/.exec(path);
      if(j&&request.method==='GET')return json(transport(await jobs.status(owner,j[1])));
      if(j&&request.method==='DELETE')return json(transport(await jobs.cancel(owner,j[1])));
      const a=/^\/api\/avatars\/assets\/([0-9a-f-]{36})\/(manifest|image)$/.exec(path);
      if(a&&request.method==='GET') {
        const asset=await jobs.asset(owner,a[1]);
        if(a[2]==='manifest')return json({...asset.manifest,sheet:paths(a[1]).imageUrl});
        return new Response(new Uint8Array(asset.bytes),{headers:{'Content-Type':'image/png','Cache-Control':'private, no-store','X-Content-Type-Options':'nosniff'}});
      }
      return json({error:'not_found'},404);
    }catch(e){if(e instanceof JobError||e instanceof DomainError){if(e.status>=500)reportAvatarFailure('http',e);return json({error:e.code},e.status);}reportAvatarFailure('http',e);return json({error:'avatar_service_unavailable'},503);}
  };
}
