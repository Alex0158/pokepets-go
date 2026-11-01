import type { BackboneService } from './service.ts';
import type { CreateCommand, JoinCommand, MoveCommand } from '../../shared/multiplayer.ts';
import { DomainError, fail } from './battle.ts';
export const SESSION_COOKIE='pokepet_session';
const response=(value:unknown,status=200,headers:Record<string,string>={})=>Response.json(value,{status,headers:{'Cache-Control':'no-store',...headers}});
export function localRequest(request:Request) {
  const url=new URL(request.url);
  if(!['127.0.0.1','localhost','[::1]'].includes(url.hostname))fail('local_only',403);
  // Next constructs Request.url using its internal hostname. Validate the actual
  // Host independently and never trust forwarded-host headers for this local API.
  const host=request.headers.get('host')??url.host;
  if(!/^(127\.0\.0\.1|localhost|\[::1\])(?::\d+)?$/.test(host))fail('local_only',403);
  if(request.method!=='GET') {
    if(request.headers.get('origin')!==`${url.protocol}//${host}`)fail('origin_rejected',403);
    if(request.headers.get('content-type')?.split(';')[0].trim()!=='application/json')fail('json_required',415);
  }
}
function sessionToken(request:Request) {
  const tokens=(request.headers.get('cookie')??'').split(';').map(s=>s.trim()).filter(s=>s.startsWith(`${SESSION_COOKIE}=`));
  if(tokens.length>1)fail('unauthenticated',401);
  return tokens.length?tokens[0].slice(SESSION_COOKIE.length+1):undefined;
}
async function body(request:Request,keys:string[]) {
  const reader=request.body?.getReader();if(!reader)fail('invalid_json',400);
  const chunks:Uint8Array[]=[];let size=0;
  for(;;) {
    const {done,value}=await reader.read();if(done)break;
    size+=value.byteLength;
    if(size>4096) { await reader.cancel();fail('body_too_large',413); }
    chunks.push(value);
  }
  let value;
  try { value=JSON.parse(Buffer.concat(chunks).toString('utf8')); }catch { fail('invalid_json',400); }
  if(!value||typeof value!=='object'||Array.isArray(value)||Object.keys(value).length!==keys.length||keys.some(k=>!Object.hasOwn(value,k)))fail('invalid_fields',400);
  return value;
}
export function errorResponse(error:unknown) {
  if(error instanceof DomainError)return response({error:error.code},error.status);
  return response({error:'database_unavailable',message:'Database unavailable. Retry the same command ID and payload after reconnecting.'},503);
}
export function createLocalApi(service:BackboneService) {
  return async (request:Request):Promise<Response>=>{
    try {
      localRequest(request);
      const token=sessionToken(request),path=new URL(request.url).pathname;
      if(path==='/api/session') {
        if(request.method==='GET')return response(await service.profile(token));
        if(request.method==='POST') {
          const input=await body(request,['displayName']);
          const result=await service.bootstrap(token,input.displayName);
          const {token:issued,...profile}=result;
          const cookie:Record<string,string>=issued?{ 'Set-Cookie':`${SESSION_COOKIE}=${issued}; Path=/; HttpOnly; SameSite=Strict; Max-Age=604800${new URL(request.url).protocol==='https:'?'; Secure':''}` }:{};
          return response(profile,200,cookie);
        }
      }
      if(path==='/api/matches'&&request.method==='POST')return response(await service.create(token,await body(request,['commandId','petId','opponentPlayerId']) as CreateCommand));
      const match=/^\/api\/matches\/([a-zA-Z0-9-]{1,80})(?:\/(join|moves))?$/.exec(path);
      if(match) {
        if(!match[2]&&request.method==='GET')return response(await service.read(token,match[1]));
        if(match[2]==='join'&&request.method==='POST')return response(await service.join(token,match[1],await body(request,['commandId','petId','expectedVersion']) as JoinCommand));
        if(match[2]==='moves'&&request.method==='POST')return response(await service.move(token,match[1],await body(request,['commandId','expectedVersion','move','targetPetId']) as MoveCommand));
      }
      return response({error:'route_not_found'},404);
    } catch(error) { return errorResponse(error); }
  };
}
