import assert from 'node:assert/strict';
import { randomUUID } from 'node:crypto';
import { MongoClient } from 'mongodb';
import { databaseConfig } from '../src/server/db/local-runtime.ts';
import { MongoRepository } from '../src/server/db/mongo-repository.ts';
import { BackboneService } from '../src/server/core/service.ts';
import { ProgressionService } from '../src/server/progression/service.ts';
import { GET, POST } from '../app/api/voice-mission/route.ts';

async function main(){
  assert.equal(process.env.POKEPET_RUNTIME_MODE,'hosted');assert.equal(process.env.POKEPET_HOSTED_VOICE_ENABLED,'1');assert.equal(process.env.POKEPET_HOSTED_ORIGIN,'https://pokepet-voice-test.example');
  process.env.POKEPET_ATLAS_DATABASE=`pokepet_atlas_v_${randomUUID().replaceAll('-','').slice(0,12)}`;
  const cfg=databaseConfig();assert.equal(cfg.kind,'atlas');assert.ok(Buffer.byteLength(cfg.name)<=38);
  const client=new MongoClient(cfg.uri,{tls:true,serverSelectionTimeoutMS:10000});await client.connect();
  try {
    const existing=await client.db('admin').admin().listDatabases({nameOnly:true});assert.ok(!existing.databases.some(x=>x.name===cfg.name));
    const db=client.db(cfg.name),repo=new MongoRepository(db);await repo.initialize();const backbone=new BackboneService(repo),p=await backbone.bootstrap(undefined,'Voice quota test');
    const progression=new ProgressionService(db,backbone),before=await progression.get(p.token!);
    const base=process.env.POKEPET_HOSTED_ORIGIN!,cookie=`pokepet_session=${p.token}`,headers={host:'pokepet-voice-test.example',origin:base,'content-type':'application/json',cookie};
    const input={commandId:randomUUID(),text:'I played with my dog with a soft toy for five minutes.'};
    const call=()=>POST(new Request(`${base}/api/voice-mission`,{method:'POST',headers,body:JSON.stringify(input)}));
    const first=await call();assert.equal(first.status,200);const result=await first.json();assert.equal(result.duplicate,false);assert.ok(Number.isInteger(result.points)&&result.points>=0&&result.points<=20);
    const retry=await call();assert.equal(retry.status,200);const replay=await retry.json();assert.equal(replay.duplicate,true);assert.equal(replay.points,result.points);
    const read=await GET(new Request(`${base}/api/voice-mission?commandId=${input.commandId}`,{headers:{host:'pokepet-voice-test.example',cookie}}));assert.equal(read.status,200);assert.equal((await read.json()).status,'committed');
    const after=await progression.get(p.token!);assert.equal(after.points,before.points+result.points);
    const quotas=await db.collection('hosted_ai_daily_quota').find().toArray();assert.equal(quotas.length,1);assert.equal(quotas[0].used,1);
    console.log(JSON.stringify({status:'passed',provider:'live',points:result.points,quotaCalls:quotas[0].used,retryDuplicate:true,database:cfg.name}));
  }finally{await client.close();}
}
try{await main();process.exit(0);}catch(error){console.error(JSON.stringify({status:'failed',kind:error instanceof Error?error.name:'unknown'}));process.exit(1);}
