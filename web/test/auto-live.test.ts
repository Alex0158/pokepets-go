import test from 'node:test';
import assert from 'node:assert/strict';
import {randomUUID} from 'node:crypto';
import {MongoClient} from 'mongodb';
import {MongoRepository} from '../src/server/db/mongo-repository.ts';
import {BackboneService} from '../src/server/core/service.ts';
import {WorldService} from '../src/server/world/service.ts';
import {AutoService} from '../src/server/auto/service.ts';
import {createDecisionProvider} from '../src/server/auto/decisions.ts';
test('one live Decisions-selected move against real local MongoDB',{skip:process.env.POKEPET_RUN_LIVE_DECISIONS!=='1'},async t=>{
 const uri=process.env.POKEPET_TEST_MONGODB_URI,key=process.env.OPENAI_API_KEY;assert.ok(key);assert.match(uri??'',/^mongodb:\/\/127\.0\.0\.1:\d+$/);const client=new MongoClient(uri!,{serverSelectionTimeoutMS:2000});await client.connect();t.after(()=>client.close());const db=client.db(`pokepet_local_auto_live_${Date.now()}_${randomUUID().slice(0,8)}`),repo=new MongoRepository(db);await repo.initialize();const core=new BackboneService(repo),world=new WorldService(db,core),auto=new AutoService(db,core,world,createDecisionProvider(key));const a=await core.bootstrap(undefined,'Synthetic A'),b=await core.bootstrap(undefined,'Synthetic B');const match=await world.practiceCreate(a.token,{commandId:randomUUID(),opponentPlayerId:b.player._id});const command={commandId:randomUUID(),mode:'practice' as const,matchId:match.snapshot.matchId,expectedVersion:1};const result=await auto.move(a.token,command);assert.equal(result.decision.source,'decisions');assert.ok(['small_attack','big_attack','defend','flee'].includes(result.decision.move));assert.equal(result.snapshot.version,result.decision.move==='flee'?2:3);const again=await auto.move(a.token,command);assert.equal(again.duplicate,true);assert.equal(again.decision.move,result.decision.move);console.log(`Live Decisions result accepted; requested model gpt-6-luna; move ${result.decision.move}; retained isolated DB ${db.databaseName}`);
});
