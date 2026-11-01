import { createHash, randomUUID } from 'node:crypto';
import { DomainError } from '../core/battle.ts';
type Session={owner:string;callId:string;timer:ReturnType<typeof setTimeout>;expiresAt:number};
const shared=globalThis as typeof globalThis&{__pokepetRealtimeLocal?:{sessions:Map<string,Session>;starting:Set<string>}};
shared.__pokepetRealtimeLocal??={sessions:new Map(),starting:new Set()};
const {sessions,starting}=shared.__pokepetRealtimeLocal;
const LIMIT_MS=60000;
async function endCall(callId:string) {
  const key=process.env.OPENAI_API_KEY;if(!key)throw Error('provider_unavailable');
  const response=await fetch(`https://api.openai.com/v1/realtime/calls/${encodeURIComponent(callId)}/hangup`,{method:'POST',headers:{Authorization:`Bearer ${key}`},signal:AbortSignal.timeout(10000)});
  if(!response.ok&&response.status!==404)throw Error('hangup_failed');
}
export async function stop(owner:string,id:string) {
  const session=sessions.get(id);if(!session)return;
  if(session.owner!==owner)throw new DomainError('forbidden',403);
  await endCall(session.callId);
  clearTimeout(session.timer);if(sessions.get(id)===session)sessions.delete(id);
}
function scheduleStop(owner:string,id:string,delay:number) {
  const timer=setTimeout(()=>{void stop(owner,id).catch(()=>{const session=sessions.get(id);if(session)session.timer=scheduleStop(owner,id,5000);});},delay);
  timer.unref?.();return timer;
}
export async function start(owner:string,sdp:string) {
  if(starting.has(owner)||[...sessions.values()].some(x=>x.owner===owner))throw new DomainError('realtime_already_active',409);
  if(sessions.size+starting.size>=3)throw new DomainError('realtime_capacity',429);
  const key=process.env.OPENAI_API_KEY;if(!key)throw Error('provider_unavailable');starting.add(owner);
  try {
    const form=new FormData();form.set('sdp',sdp);form.set('session',JSON.stringify({type:'realtime',model:'gpt-realtime-2.1',instructions:'You are a concise, friendly pet game voice companion. Speak naturally and briefly. Do not claim a game action has occurred; all actions require user review in the game UI. Never execute game actions or tools. Avoid medical advice.',audio:{input:{transcription:{model:'gpt-4o-mini-transcribe'},turn_detection:{type:'server_vad'}},output:{voice:'marin'}},output_modalities:['audio']}));
    const response=await fetch('https://api.openai.com/v1/realtime/calls',{method:'POST',headers:{Authorization:`Bearer ${key}`,'OpenAI-Safety-Identifier':createHash('sha256').update(owner).digest('hex')},body:form,signal:AbortSignal.timeout(20000)});
    if(!response.ok)throw Error(`realtime_http_${response.status}`);
    const location=response.headers.get('location');let url:URL;try{url=new URL(location??'','https://api.openai.com');}catch{throw Error('realtime_location_missing');}
    const match=url.origin==='https://api.openai.com'?/^\/v1\/realtime\/calls\/((?:call|rtc)_[A-Za-z0-9_-]+)$/.exec(url.pathname):null;
    if(!match)throw Error('realtime_location_missing');
    let answer:string;try{answer=await response.text();if(!answer||answer.length>64000)throw Error('invalid_sdp_answer');}catch(e){await endCall(match[1]).catch(()=>{});throw e;}
    const sessionId=randomUUID(),expiresAt=Date.now()+LIMIT_MS;
    const timer=scheduleStop(owner,sessionId,LIMIT_MS);
    sessions.set(sessionId,{owner,callId:match[1],timer,expiresAt});
    return {sdp:answer,sessionId,expiresAt};
  }finally{starting.delete(owner);}
}
