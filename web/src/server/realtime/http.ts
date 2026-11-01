import { DomainError } from '../core/battle.ts';
import { localRequest } from '../core/http.ts';
type Deps={identity:(request:Request)=>Promise<string|null>;start:(owner:string,sdp:string)=>Promise<{sdp:string;sessionId:string;expiresAt:number}>;stop:(owner:string,id:string)=>Promise<void>};
async function read(request:Request) {
  const reader=request.body?.getReader();if(!reader)throw new DomainError('invalid_json',400);
  const chunks:Uint8Array[]=[];let bytes=0;
  for(;;){const {done,value}=await reader.read();if(done)break;bytes+=value.length;if(bytes>65536){await reader.cancel();throw new DomainError('body_too_large',413);}chunks.push(value);}
  let value:unknown;try{value=JSON.parse(Buffer.concat(chunks).toString('utf8'));}catch{throw new DomainError('invalid_json',400);}
  if(!value||typeof value!=='object'||Array.isArray(value))throw new DomainError('invalid_fields',400);
  return value as Record<string,unknown>;
}
export function createRealtimeHandler(deps:Deps){return async(request:Request)=>{
  try{
    localRequest(request);
    if(process.env.POKEPET_RUNTIME_MODE==='hosted')throw new DomainError('realtime_hosted_unavailable',503);
    const owner=await deps.identity(request);if(!owner)throw new DomainError('unauthenticated',401);
    const body=await read(request),path=new URL(request.url).pathname;
    if(path==='/api/realtime-session'&&Object.keys(body).join(',')==='sdp'&&typeof body.sdp==='string'&&body.sdp.trim()&&body.sdp.length<=64000)return Response.json(await deps.start(owner,body.sdp),{headers:{'Cache-Control':'no-store'}});
    if(path==='/api/realtime-session/stop'&&Object.keys(body).join(',')==='sessionId'&&typeof body.sessionId==='string'&&/^[0-9a-f-]{36}$/.test(body.sessionId)){await deps.stop(owner,body.sessionId);return Response.json({stopped:true},{headers:{'Cache-Control':'no-store'}});}
    throw new DomainError('invalid_fields',400);
  }catch(error){if(error instanceof DomainError)return Response.json({error:error.code},{status:error.status,headers:{'Cache-Control':'no-store'}});return Response.json({error:'realtime_unavailable'},{status:503,headers:{'Cache-Control':'no-store'}});}
};}
