import test from 'node:test';
import assert from 'node:assert/strict';
import { createRealtimeHandler } from '../src/server/realtime/http.ts';
const base='http://127.0.0.1:4123';
const req=(path:string,payload:unknown)=>new Request(`${base}${path}`,{method:'POST',headers:{host:'127.0.0.1:4123',origin:base,'content-type':'application/json'},body:JSON.stringify(payload)});
test('start and stop require identity and never expose provider credentials',async()=>{
  let starts=0,stops=0;const h=createRealtimeHandler({identity:async()=>null,start:async()=>{starts++;return {sdp:'answer',sessionId:'id',expiresAt:1};},stop:async()=>{stops++;}});
  assert.equal((await h(req('/api/realtime-session',{sdp:'offer'}))).status,401);assert.equal(starts,0);assert.equal(stops,0);
  const sessionId='01234567-89ab-4def-8123-0123456789ab';
  const valid=createRealtimeHandler({identity:async()=> 'player',start:async()=>{starts++;return {sdp:'answer',sessionId,expiresAt:1};},stop:async()=>{stops++;}});
  const response=await valid(req('/api/realtime-session',{sdp:'offer'}));assert.equal(response.status,200);assert.deepEqual(await response.json(),{sdp:'answer',sessionId,expiresAt:1});
  assert.equal((await valid(req('/api/realtime-session/stop',{sessionId}))).status,200);assert.equal(stops,1);
});
test('invalid or hosted requests fail before session creation',async()=>{
  let calls=0;const h=createRealtimeHandler({identity:async()=>{calls++;return 'player';},start:async()=>{calls++;throw Error('unexpected');},stop:async()=>{calls++;}});
  assert.equal((await h(req('/api/realtime-session',{sdp:'',extra:'x'}))).status,400);assert.equal(calls,1);
  const mode=process.env.POKEPET_RUNTIME_MODE,origin=process.env.POKEPET_HOSTED_ORIGIN;
  try{process.env.POKEPET_RUNTIME_MODE='hosted';process.env.POKEPET_HOSTED_ORIGIN='https://example.com';const request=new Request('https://example.com/api/realtime-session',{method:'POST',headers:{host:'example.com',origin:'https://example.com','content-type':'application/json'},body:JSON.stringify({sdp:'offer'})});assert.equal((await h(request)).status,503);assert.equal(calls,1);}
  finally{if(mode===undefined)delete process.env.POKEPET_RUNTIME_MODE;else process.env.POKEPET_RUNTIME_MODE=mode;if(origin===undefined)delete process.env.POKEPET_HOSTED_ORIGIN;else process.env.POKEPET_HOSTED_ORIGIN=origin;}
});
