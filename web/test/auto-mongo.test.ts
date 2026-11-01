import test from 'node:test';
import assert from 'node:assert/strict';
import {randomUUID} from 'node:crypto';
import {MongoClient} from 'mongodb';
import {MongoRepository} from '../src/server/db/mongo-repository.ts';
import {BackboneService} from '../src/server/core/service.ts';
import {WorldService} from '../src/server/world/service.ts';
import {AutoService} from '../src/server/auto/service.ts';
import {createLocalApi} from '../src/server/core/http.ts';
const uri=process.env.POKEPET_TEST_MONGODB_URI;
test('auto uses only current player, persists decisions across retries and validates stale turns',{skip:!uri},async t=>{
 assert.match(uri!,/^mongodb:\/\/127\.0\.0\.1:\d+$/);const client=new MongoClient(uri!,{serverSelectionTimeoutMS:2000});await client.connect();t.after(()=>client.close());const db=client.db(`pokepet_local_auto_${Date.now()}_${randomUUID().slice(0,8)}`),repo=new MongoRepository(db);await repo.initialize();const core=new BackboneService(repo),world=new WorldService(db,core);let calls=0;const auto=new AutoService(db,core,world,async()=>{calls++;return 'small_attack';});
 const a=await core.bootstrap(undefined,'A'),b=await core.bootstrap(undefined,'B'),c=await core.bootstrap(undefined,'C');const made=await core.create(a.token,{commandId:randomUUID(),petId:a.pet._id,opponentPlayerId:b.player._id});await core.join(b.token,made.snapshot.matchId,{commandId:randomUUID(),expectedVersion:0,petId:b.pet._id});
 const command={commandId:randomUUID(),matchId:made.snapshot.matchId,expectedVersion:1,mode:'face' as const};
 await assert.rejects(auto.move(c.token,command));await assert.rejects(auto.move(b.token,command));assert.equal(calls,0);
 const result=await auto.move(a.token,command);assert.equal(result.decision.source,'decisions');assert.equal(result.snapshot.version,2);assert.equal(result.snapshot.participants[1].hp,22);
 const retried=await auto.move(a.token,command);assert.equal(retried.duplicate,true);assert.equal(calls,1);await assert.rejects(auto.move(a.token,{...command,expectedVersion:2}));
 const practice=await world.practiceCreate(a.token,{commandId:randomUUID(),opponentPlayerId:b.player._id});const before=await db.collection('pets').findOne({_id:b.pet._id} as never);
 const autoPractice=await auto.move(a.token,{commandId:randomUUID(),matchId:practice.snapshot.matchId,expectedVersion:1,mode:'practice'});assert.equal(autoPractice.snapshot.version,3);assert.equal((autoPractice as {events?:unknown[]}).events?.length,2);assert.deepEqual(await db.collection('pets').findOne({_id:b.pet._id} as never),before);
 const fallback=new AutoService(db,core,world,async()=>{throw Error('unavailable');});const resultFallback=await fallback.move(b.token,{commandId:randomUUID(),matchId:made.snapshot.matchId,expectedVersion:2,mode:'face'});assert.equal(resultFallback.decision.source,'fallback');assert.equal(resultFallback.decision.move,'small_attack');
 const httpBattle=await world.practiceCreate(a.token,{commandId:randomUUID(),opponentPlayerId:b.player._id});const api=createLocalApi(core);const request=new Request('http://127.0.0.1:3018/api/auto-move',{method:'POST',headers:{cookie:`pokepet_session=${a.token}`,origin:'http://127.0.0.1:3018','content-type':'application/json'},body:JSON.stringify({commandId:randomUUID(),mode:'practice',matchId:httpBattle.snapshot.matchId,expectedVersion:1})});
 const oldKey=process.env.OPENAI_API_KEY;delete process.env.OPENAI_API_KEY;try{const response=await api(request);assert.equal(response.status,200);const body=await response.json();assert.equal(body.decision.source,'fallback');assert.equal(body.snapshot.version,3);}finally{if(oldKey!==undefined)process.env.OPENAI_API_KEY=oldKey;}
 console.log(`Retained isolated local test database ${db.databaseName}`);
});

test('auto executes five-move decisions with server-enforced health and escape state',{skip:!uri},async t=>{
 assert.match(uri!,/^mongodb:\/\/127\.0\.0\.1:\d+$/);const client=new MongoClient(uri!,{serverSelectionTimeoutMS:2000});await client.connect();t.after(()=>client.close());const db=client.db(`pokepet_local_auto_moves_${Date.now()}_${randomUUID().slice(0,8)}`),repo=new MongoRepository(db);await repo.initialize();const core=new BackboneService(repo),world=new WorldService(db,core);const a=await core.bootstrap(undefined,'A'),b=await core.bootstrap(undefined,'B');const p=await world.practiceCreate(a.token,{commandId:randomUUID(),opponentPlayerId:b.player._id});let selected:'big_attack'|'heal'|'flee'='big_attack';const auto=new AutoService(db,core,world,async()=>selected);
 const run=(expectedVersion:number)=>auto.move(a.token,{commandId:randomUUID(),matchId:p.snapshot.matchId,expectedVersion,mode:'practice'});
 const first=await run(1);assert.equal(first.decision.move,'big_attack');assert.equal(first.snapshot.participants[1].hp,17);assert.equal(first.snapshot.participants[0].hp,22);
 selected='heal';const second=await run(3);assert.equal(second.decision.move,'heal');assert.equal(second.snapshot.participants[0].healsUsed,1);assert.equal(second.snapshot.participants[0].hp,22);
 selected='flee';const third=await run(5);assert.equal(third.decision.move,'flee');assert.equal(third.snapshot.result,'escape');assert.equal(third.snapshot.winnerPlayerId,null);assert.equal((third as {events?:unknown[]}).events?.length,1);
 console.log(`Retained isolated local test database ${db.databaseName}`);
});

test('hosted auto reserves shared AI quota and safely falls back after exhaustion',{skip:!uri},async t=>{
 assert.match(uri!,/^mongodb:\/\/127\.0\.0\.1:\d+$/);const client=new MongoClient(uri!,{serverSelectionTimeoutMS:2000});await client.connect();t.after(()=>client.close());const db=client.db(`pokepet_local_auto_quota_${Date.now()}_${randomUUID().slice(0,8)}`),repo=new MongoRepository(db);await repo.initialize();const core=new BackboneService(repo),world=new WorldService(db,core);const a=await core.bootstrap(undefined,'A'),b=await core.bootstrap(undefined,'B');const match=await world.practiceCreate(a.token,{commandId:randomUUID(),opponentPlayerId:b.player._id});let calls=0;const auto=new AutoService(db,core,world,async()=>{calls++;return 'defend';});
 const priorMode=process.env.POKEPET_RUNTIME_MODE,priorCap=process.env.POKEPET_HOSTED_OPENAI_CALLS_PER_DAY;process.env.POKEPET_RUNTIME_MODE='hosted';process.env.POKEPET_HOSTED_OPENAI_CALLS_PER_DAY='1';
 try{const firstInput={commandId:randomUUID(),matchId:match.snapshot.matchId,expectedVersion:1,mode:'practice' as const};const first=await auto.move(a.token,firstInput);assert.equal(first.decision.source,'decisions');assert.equal(calls,1);assert.equal((await auto.move(a.token,firstInput)).duplicate,true);assert.equal(calls,1);const second=await auto.move(a.token,{...firstInput,commandId:randomUUID(),expectedVersion:3});assert.equal(second.decision.source,'fallback');assert.equal(second.decision.move,'small_attack');assert.equal(calls,1);const rec=await db.collection<{_id:string;used:number}>('hosted_ai_daily_quota').findOne({_id:new Date().toISOString().slice(0,10)});assert.equal(rec?.used,1);delete process.env.POKEPET_HOSTED_OPENAI_CALLS_PER_DAY;const third=await auto.move(a.token,{...firstInput,commandId:randomUUID(),expectedVersion:5});assert.equal(third.decision.source,'fallback');assert.equal(calls,1);}finally{if(priorMode===undefined)delete process.env.POKEPET_RUNTIME_MODE;else process.env.POKEPET_RUNTIME_MODE=priorMode;if(priorCap===undefined)delete process.env.POKEPET_HOSTED_OPENAI_CALLS_PER_DAY;else process.env.POKEPET_HOSTED_OPENAI_CALLS_PER_DAY=priorCap;}
 console.log(`Retained isolated local test database ${db.databaseName}`);
});
