import test from 'node:test';
import assert from 'node:assert/strict';
import { randomUUID } from 'node:crypto';
import { MongoClient } from 'mongodb';
import { classify, transcribe } from '../src/server/game-intent/provider.ts';
import { reserveVoiceProviderCall } from '../src/server/voice/hosted-quota.ts';
const uri=process.env.POKEPET_TEST_MONGODB_URI;
test('hosted intent shares Mongo quota across separate provider calls',{skip:!uri},async t=>{
  assert.match(uri!,/^mongodb:\/\/127\.0\.0\.1:\d+$/);
  const client=new MongoClient(uri!);await client.connect();t.after(()=>client.close());
  const db=client.db(`pokepet_local_intent_quota_${Date.now()}_${randomUUID().slice(0,8)}`),original=globalThis.fetch,mode=process.env.POKEPET_RUNTIME_MODE,cap=process.env.POKEPET_HOSTED_OPENAI_CALLS_PER_DAY;let calls=0;
  try{
    process.env.POKEPET_RUNTIME_MODE='hosted';process.env.POKEPET_HOSTED_OPENAI_CALLS_PER_DAY='2';
    globalThis.fetch=async(input)=>{calls++;return String(input).endsWith('/audio/transcriptions')?Response.json({text:'How do I use points?'}):Response.json({output:[{content:[{type:'output_text',text:JSON.stringify({intent:'points_help',stat:null,targetName:null,battleMode:null,view:null})}]}]});};
    const reserve=()=>reserveVoiceProviderCall(db),text=await transcribe(Buffer.from('synthetic'),'audio/webm','test-key',reserve);
    assert.equal((await classify(text,'test-key',reserve)).intent,'points_help');assert.equal(calls,2);
    await assert.rejects(classify(text,'test-key',reserve),/hosted_ai_quota_exhausted/);assert.equal(calls,2);
  }finally{globalThis.fetch=original;if(mode===undefined)delete process.env.POKEPET_RUNTIME_MODE;else process.env.POKEPET_RUNTIME_MODE=mode;if(cap===undefined)delete process.env.POKEPET_HOSTED_OPENAI_CALLS_PER_DAY;else process.env.POKEPET_HOSTED_OPENAI_CALLS_PER_DAY=cap;}
});
