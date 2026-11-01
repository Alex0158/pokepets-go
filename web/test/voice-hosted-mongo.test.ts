import test from 'node:test';
import assert from 'node:assert/strict';
import { randomUUID } from 'node:crypto';
import { MongoClient } from 'mongodb';
import { MongoRepository } from '../src/server/db/mongo-repository.ts';
import { BackboneService } from '../src/server/core/service.ts';
import { ProgressionService } from '../src/server/progression/service.ts';
import { VoiceService } from '../src/server/voice/service.ts';
const uri=process.env.POKEPET_TEST_MONGODB_URI;
test('hosted quota limits real voice service provider calls without awarding on exhaustion',{skip:!uri},async t=>{
  assert.match(uri!,/^mongodb:\/\/127\.0\.0\.1:\d+$/);
  const client=new MongoClient(uri!);await client.connect();t.after(()=>client.close());
  const db=client.db(`pokepet_local_voice_quota_${Date.now()}_${randomUUID().slice(0,8)}`),repo=new MongoRepository(db);await repo.initialize();
  const backbone=new BackboneService(repo),person=await backbone.bootstrap(undefined,'Quota tester'),progress=new ProgressionService(db,backbone),svc=new VoiceService(db,backbone);
  const previous={mode:process.env.POKEPET_RUNTIME_MODE,cap:process.env.POKEPET_HOSTED_OPENAI_CALLS_PER_DAY,key:process.env.OPENAI_API_KEY},fetchBefore=globalThis.fetch;let calls=0;
  try {
    process.env.POKEPET_RUNTIME_MODE='hosted';process.env.POKEPET_HOSTED_OPENAI_CALLS_PER_DAY='1';process.env.OPENAI_API_KEY='test-key';
    globalThis.fetch=async(input)=>{calls++;return String(input).endsWith('/audio/transcriptions')?Response.json({text:'I played with my dog'}):Response.json({output:[{content:[{type:'output_text',text:'{"points":12,"reason":"Play"}'}]}]});};
    const body={commandId:randomUUID(),audioBase64:Buffer.from('synthetic').toString('base64'),mimeType:'audio/webm'};
    await assert.rejects(svc.report(person.token!,body),/hosted_ai_quota_exhausted/);assert.equal(calls,1);assert.equal((await progress.get(person.token!)).points,0);
    process.env.POKEPET_HOSTED_OPENAI_CALLS_PER_DAY='3';
    const success=await svc.report(person.token!,body) as {points:number};assert.equal(success.points,12);assert.equal(calls,3);
    const retry=await svc.report(person.token!,body) as {duplicate:boolean};assert.equal(retry.duplicate,true);assert.equal(calls,3);
    delete process.env.POKEPET_HOSTED_OPENAI_CALLS_PER_DAY;
    await assert.rejects(svc.reportText(person.token!,{commandId:randomUUID(),text:'I fed my dog'}),/hosted_ai_quota_exhausted/);assert.equal(calls,3);
  }finally{
    globalThis.fetch=fetchBefore;for(const [name,value] of Object.entries({POKEPET_RUNTIME_MODE:previous.mode,POKEPET_HOSTED_OPENAI_CALLS_PER_DAY:previous.cap,OPENAI_API_KEY:previous.key})){if(value===undefined)delete process.env[name];else process.env[name]=value;}
  }
});
