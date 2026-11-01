import test from 'node:test';
import assert from 'node:assert/strict';
import { createIntentHandler } from '../src/server/game-intent/http.ts';
const base='http://127.0.0.1:4123';
const make=(data:unknown)=>new Request(`${base}/api/game-intent`,{method:'POST',headers:{host:'127.0.0.1:4123',origin:base,'content-type':'application/json'},body:JSON.stringify(data)});
test('authenticated text help is an intent only and never awards points',async()=>{
  const handler=createIntentHandler({session:async()=>true,transcribe:async()=>{throw Error('unexpected audio');},classify:async()=>({intent:'points_help',stat:null,targetName:null,battleMode:null,view:null})});
  const response=await handler(make({text:'How do I use points?'}));assert.equal(response.status,200);
  const out=await response.json();assert.equal(out.intent,'points_help');assert.equal(out.transcript,'How do I use points?');assert.equal(Object.hasOwn(out,'points'),false);
});
test('unauthenticated and malformed requests never call provider',async()=>{
  let called=0;const handler=createIntentHandler({session:async()=>false,transcribe:async()=>{called++;return '';},classify:async()=>{called++;throw Error('unexpected');}});
  assert.equal((await handler(make({text:'hello'}))).status,401);assert.equal(called,0);
  const allowed=createIntentHandler({session:async()=>true,transcribe:async()=>{called++;return '';},classify:async()=>{called++;throw Error('unexpected');}});
  assert.equal((await allowed(make({text:'hello',path:'/api/anything'}))).status,400);assert.equal(called,0);
});
test('audio is transcribed, then classified without executing a game action',async()=>{
  const wav=Buffer.alloc(46);wav.write('RIFF',0);wav.writeUInt32LE(38,4);wav.write('WAVE',8);wav.write('data',36);wav.writeUInt32LE(2,40);wav.writeUInt16LE(1,44);
  let observed='';
  const handler=createIntentHandler({session:async()=>true,transcribe:async()=>{observed+='transcribe,';return 'Select Jamie';},classify:async(text)=>{observed+=`classify:${text}`;return {intent:'select_player',stat:null,targetName:'Jamie',battleMode:null,view:null};}});
  const response=await handler(make({audioBase64:wav.toString('base64'),mimeType:'audio/wav'}));assert.equal(response.status,200);
  const out=await response.json();assert.equal(out.intent,'select_player');assert.equal(out.targetName,'Jamie');assert.equal(observed,'transcribe,classify:Select Jamie');
});
test('hosted mode denies the endpoint before any provider call',async()=>{
  const priorMode=process.env.POKEPET_RUNTIME_MODE,priorOrigin=process.env.POKEPET_HOSTED_ORIGIN;let calls=0;
  try {
    process.env.POKEPET_RUNTIME_MODE='hosted';process.env.POKEPET_HOSTED_ORIGIN='https://example.com';
    const handler=createIntentHandler({session:async()=>{calls++;return true;},transcribe:async()=>{calls++;return '';},classify:async()=>{calls++;throw Error('unexpected');}});
    const req=new Request('https://example.com/api/game-intent',{method:'POST',headers:{host:'example.com',origin:'https://example.com','content-type':'application/json'},body:JSON.stringify({text:'help'})});
    assert.equal((await handler(req)).status,503);assert.equal(calls,0);
    const enabled=createIntentHandler({hostedEnabled:()=>true,session:async()=>true,transcribe:async()=>{throw Error('unexpected');},classify:async()=>({intent:'points_help',stat:null,targetName:null,battleMode:null,view:null})});
    const allowed=new Request('https://example.com/api/game-intent',{method:'POST',headers:{host:'example.com',origin:'https://example.com','content-type':'application/json'},body:JSON.stringify({text:'help'})});
    assert.equal((await enabled(allowed)).status,200);
  }finally{if(priorMode===undefined)delete process.env.POKEPET_RUNTIME_MODE;else process.env.POKEPET_RUNTIME_MODE=priorMode;if(priorOrigin===undefined)delete process.env.POKEPET_HOSTED_ORIGIN;else process.env.POKEPET_HOSTED_ORIGIN=priorOrigin;}
});
