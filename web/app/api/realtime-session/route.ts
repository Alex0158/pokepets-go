import { createRealtimeHandler } from '../../../src/server/realtime/http.ts';
import { start, stop } from '../../../src/server/realtime/service.ts';
import { handleLocalRequest } from '../../../src/server/db/local-runtime.ts';
export const runtime='nodejs';export const dynamic='force-dynamic';
export const POST=createRealtimeHandler({start,stop,identity:async(request)=>{
  const url=new URL(request.url);url.pathname='/api/session';url.search='';
  const response=await handleLocalRequest(new Request(url,{method:'GET',headers:request.headers}));
  if(response.status===401)return null;if(!response.ok)throw Error('session_unavailable');
  const profile=await response.json() as {player?:{_id?:unknown}};
  return typeof profile.player?._id==='string'?profile.player._id:null;
}});
