import test from 'node:test';
import assert from 'node:assert/strict';
import { start,stop } from '../src/server/realtime/service.ts';
test('session is owner-scoped, bounded, and invokes provider hangup',async()=>{
  const old=globalThis.fetch,key=process.env.OPENAI_API_KEY;let created=0,hungup=0;
  try{
    process.env.OPENAI_API_KEY='test-key';
    globalThis.fetch=async(input,options)=>{
      if(String(input).endsWith('/hangup')){hungup++;return new Response(null,{status:200});}
      created++;const form=options?.body as FormData,settings=JSON.parse(String(form.get('session')));assert.equal(settings.model,'gpt-realtime-2.1');assert.equal(settings.type,'realtime');assert.equal(form.get('sdp'),'test-offer');
      return new Response('test-answer',{status:201,headers:{location:'https://api.openai.com/v1/realtime/calls/rtc_test123'}});
    };
    const result=await start('owner-a','test-offer');assert.equal(result.sdp,'test-answer');assert.ok(result.expiresAt>Date.now()&&result.expiresAt<=Date.now()+60000);assert.equal(created,1);
    await assert.rejects(start('owner-a','test-offer'),/realtime_already_active/);
    await assert.rejects(stop('owner-b',result.sessionId),/forbidden/);assert.equal(hungup,0);
    await stop('owner-a',result.sessionId);assert.equal(hungup,1);await stop('owner-a',result.sessionId);assert.equal(hungup,1);
  }finally{globalThis.fetch=old;if(key===undefined)delete process.env.OPENAI_API_KEY;else process.env.OPENAI_API_KEY=key;}
});
test('failed hangup keeps the session available for a safe retry',async()=>{
  const old=globalThis.fetch,key=process.env.OPENAI_API_KEY;let hungup=0;
  try{
    process.env.OPENAI_API_KEY='test-key';
    globalThis.fetch=async(input)=>{if(String(input).endsWith('/hangup')){hungup++;return new Response(null,{status:hungup===1?503:200});}return new Response('answer',{status:201,headers:{location:'https://api.openai.com/v1/realtime/calls/call_retry123'}});};
    const result=await start('retry-owner','offer');await assert.rejects(stop('retry-owner',result.sessionId),/hangup_failed/);
    await assert.rejects(start('retry-owner','offer'),/realtime_already_active/);
    await stop('retry-owner',result.sessionId);assert.equal(hungup,2);
  }finally{globalThis.fetch=old;if(key===undefined)delete process.env.OPENAI_API_KEY;else process.env.OPENAI_API_KEY=key;}
});
