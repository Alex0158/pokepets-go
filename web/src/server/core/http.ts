import type { BackboneService } from './service.ts';
import type { CreateCommand, JoinCommand, MoveCommand } from '../../shared/multiplayer.ts';
import { DomainError, fail } from './battle.ts';
import { ProgressionService } from '../progression/service.ts';
import { WorldService } from '../world/service.ts';
import { validateRequestBoundary } from './request-boundary.ts';
import { AutoService } from '../auto/service.ts';
import { createDecisionProvider } from '../auto/decisions.ts';
export const SESSION_COOKIE='pokepet_session';
const response=(value:unknown,status=200,headers:Record<string,string>={})=>Response.json(value,{status,headers:{'Cache-Control':'no-store',...headers}});
export function localRequest(request:Request) {
  validateRequestBoundary(request,{POKEPET_RUNTIME_MODE:process.env.POKEPET_RUNTIME_MODE,POKEPET_HOSTED_ORIGIN:process.env.POKEPET_HOSTED_ORIGIN});
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
      const world=new WorldService(service.repo.db,service);
      if(path==='/api/auto-move'&&request.method==='POST'){
        const input=await body(request,['commandId','mode','matchId','expectedVersion']);
        const provider=process.env.OPENAI_API_KEY?createDecisionProvider(process.env.OPENAI_API_KEY):undefined;
        return response(await new AutoService(service.repo.db,service,world,provider).move(token,input as {commandId:string;mode:'face'|'practice';matchId:string;expectedVersion:number}));
      }
      if(path==='/api/world'&&request.method==='GET')return response(await world.world(token));
      if(path==='/api/practice'&&request.method==='POST')return response(await world.practiceCreate(token,await body(request,['commandId','opponentPlayerId']) as {commandId:string;opponentPlayerId:string}));
      const practice=/^\/api\/practice\/([a-zA-Z0-9-]{1,80})(?:\/(moves))?$/.exec(path);
      if(practice){
        if(!practice[2]&&request.method==='GET')return response(await world.practiceRead(token,practice[1]));
        if(practice[2]==='moves'&&request.method==='POST')return response(await world.practiceMove(token,practice[1],await body(request,['commandId','expectedVersion','move','targetPetId']) as MoveCommand));
      }
      if(path==='/api/progression'&&request.method==='GET')return response(await new ProgressionService(service.repo.db,service,service.clock).get(token));
      if(path==='/api/progression/mission'&&request.method==='POST') {
        const input=await body(request,['commandId','missionId','confirmed']);
        return response(await new ProgressionService(service.repo.db,service,service.clock).command(token,input.commandId,{kind:'mission',missionId:input.missionId,confirmed:input.confirmed}));
      }
      if(path==='/api/progression/upgrade'&&request.method==='POST') {
        const input=await body(request,['commandId','stat']);
        return response(await new ProgressionService(service.repo.db,service,service.clock).command(token,input.commandId,{kind:'upgrade',stat:input.stat}));
      }
      if(path==='/api/session') {
        if(request.method==='GET')return response(await service.profile(token));
        if(request.method==='POST') {
          const input=await body(request,['displayName']);
          const result=await service.bootstrap(token,input.displayName);
          const {token:issued,...profile}=result;
          const cookie:Record<string,string>=issued?{ 'Set-Cookie':`${SESSION_COOKIE}=${issued}; Path=/; HttpOnly; SameSite=Strict; Max-Age=604800${process.env.POKEPET_RUNTIME_MODE==='hosted'||new URL(request.url).protocol==='https:'?'; Secure':''}` }:{};
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
