import type { CommentInput, PublishInput } from '../../shared/community.ts';
import { DomainError, fail } from '../core/battle.ts';
import { localRequest, SESSION_COOKIE } from '../core/http.ts';
import type { CommunityService } from './service.ts';
const headers={'Cache-Control':'private, no-store','X-Content-Type-Options':'nosniff'};
const json=(value:unknown,status=200)=>Response.json(value,{status,headers});
async function body(request:Request,keys:string[]){
 const reader=request.body?.getReader();if(!reader)fail('invalid_json',400);const chunks:Uint8Array[]=[];let size=0;
 for(;;){const {value,done}=await reader.read();if(done)break;size+=value.length;if(size>710000){await reader.cancel();fail('body_too_large',413);}chunks.push(value);}
 let parsed;try{parsed=JSON.parse(Buffer.concat(chunks).toString('utf8'));}catch{fail('invalid_json',400);}
 if(!parsed||typeof parsed!=='object'||Array.isArray(parsed)||Object.keys(parsed).length!==keys.length||keys.some(k=>!Object.hasOwn(parsed,k)))fail('invalid_fields',400);return parsed;
}
export function createCommunityHandler(service:CommunityService){return async(request:Request):Promise<Response>=>{
 try{
  localRequest(request);const cookies=(request.headers.get('cookie')??'').split(';').map(c=>c.trim()).filter(c=>c.startsWith(`${SESSION_COOKIE}=`));if(cookies.length>1)fail('unauthenticated',401);
  const token=cookies[0]?.slice(SESSION_COOKIE.length+1),path=new URL(request.url).pathname;
  if(path==='/api/community/leaderboard'&&request.method==='GET')return json(await service.leaderboard(token));
  if(path==='/api/community/posts'){
   if(request.method==='GET')return json(await service.feed(token));
   if(request.method==='POST')return json(await service.publish(token,await body(request,['commandId','caption','mimeType','imageBase64','shareConsent']) as PublishInput));
  }
  const match=/^\/api\/community\/posts\/([a-f0-9]{64})\/(image|comments|withdraw)$/.exec(path);
  if(match){
   if(match[2]==='image'&&request.method==='GET')return new Response(new Uint8Array(await service.image(token,match[1])),{headers:{...headers,'Content-Type':'image/jpeg','Content-Security-Policy':"default-src 'none'; sandbox",'Content-Disposition':'inline; filename="community.jpg"'}});
   if(match[2]==='comments'&&request.method==='POST')return json(await service.comment(token,match[1],await body(request,['commandId','text','shareConsent']) as CommentInput));
   if(match[2]==='withdraw'&&request.method==='POST'){await body(request,[]);return json(await service.withdraw(token,match[1]));}
  }
  return json({error:'route_not_found'},404);
 }catch(e){if(e instanceof DomainError)return json({error:e.code},e.status);return json({error:'community_unavailable',message:'Community unavailable. Your adventure is still available. Retry the same request.'},503);}
};}
