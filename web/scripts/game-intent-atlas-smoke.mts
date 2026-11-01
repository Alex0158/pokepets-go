import assert from 'node:assert/strict';
import { MongoClient } from 'mongodb';
import { databaseConfig } from '../src/server/db/local-runtime.ts';
import { MongoRepository } from '../src/server/db/mongo-repository.ts';
import { BackboneService } from '../src/server/core/service.ts';
import { ProgressionService } from '../src/server/progression/service.ts';
import { POST } from '../app/api/game-intent/route.ts';

async function main() {
  assert.equal(process.env.POKEPET_RUNTIME_MODE,'hosted');assert.equal(process.env.POKEPET_HOSTED_GAME_INTENT_ENABLED,'1');
  assert.equal(process.env.POKEPET_HOSTED_ORIGIN,'https://pokepet-intent-test.example');
  const cfg=databaseConfig();assert.equal(cfg.kind,'atlas');assert.match(cfg.name,/^pokepet_atlas_intent_test_/);
  const client=new MongoClient(cfg.uri,{tls:true,serverSelectionTimeoutMS:10000});await client.connect();
  try {
    const db=client.db(cfg.name),repo=new MongoRepository(db);await repo.initialize();const backbone=new BackboneService(repo),p=await backbone.bootstrap(undefined,'Intent Atlas test');
    const progression=new ProgressionService(db,backbone),before=await progression.get(p.token!);
    const req=new Request(`${process.env.POKEPET_HOSTED_ORIGIN}/api/game-intent`,{method:'POST',headers:{host:'pokepet-intent-test.example',origin:process.env.POKEPET_HOSTED_ORIGIN!,'content-type':'application/json',cookie:`pokepet_session=${p.token}`},body:JSON.stringify({text:'How do I use my points?'})});
    const res=await POST(req);assert.equal(res.status,200);const result=await res.json();assert.equal(result.intent,'points_help');
    const after=await progression.get(p.token!);assert.equal(after.points,before.points);assert.equal(after.version,before.version);
    const quotas=await db.collection('hosted_ai_daily_quota').find().toArray();assert.equal(quotas.length,1);assert.equal(quotas[0].used,1);
    console.log(JSON.stringify({status:'passed',provider:'live',intent:result.intent,quotaCalls:quotas[0].used,balanceUnchanged:true,database:cfg.name}));
  }finally{await client.close();}
}
try{await main();process.exit(0);}catch(error){console.error(JSON.stringify({status:'failed',kind:error instanceof Error?error.name:'unknown'}));process.exit(1);}
