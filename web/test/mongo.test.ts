import test from 'node:test';
import assert from 'node:assert/strict';
import { randomUUID } from 'node:crypto';
import { MongoClient } from 'mongodb';
import { MongoRepository } from '../src/server/db/mongo-repository.ts';
import { BackboneService } from '../src/server/core/service.ts';
import { createLocalApi } from '../src/server/core/http.ts';
import { DomainError } from '../src/server/core/battle.ts';
const uri=process.env.POKEPET_TEST_MONGODB_URI;
const rejects=(promise:Promise<unknown>,code:string)=>assert.rejects(promise,e=>e instanceof DomainError&&e.code===code);

test('real MongoDB: identity, atomic matches, retry, authorization, restart recovery and HTTP', {skip:!uri}, async t=>{
  if(!/^mongodb:\/\/127\.0\.0\.1:\d+$/.test(uri!)) throw Error('Tests require explicit isolated localhost MongoDB');
  const dbName=`pokepet_local_test_${Date.now()}_${randomUUID().slice(0,8).replaceAll('-','')}`;
  const client=new MongoClient(uri!,{serverSelectionTimeoutMS:1500});await client.connect();
  t.after(()=>client.close());
  const repo=new MongoRepository(client.db(dbName));await repo.initialize();
  const service=new BackboneService(repo);
  const a=await service.bootstrap(undefined,'Alex');const b=await service.bootstrap(undefined,'Blair');const c=await service.bootstrap(undefined,'Casey');
  assert.notEqual(a.player._id,b.player._id);
  assert.equal(a.pet.ownerId,a.player._id);
  assert.equal('sessionHash' in a.player,false);
  const make=()=>({commandId:randomUUID(),petId:a.pet._id,opponentPlayerId:b.player._id});
  const input=make();
  const [created,again]=await Promise.all([service.create(a.token!,input),service.create(a.token!,input)]);
  assert.equal(created.snapshot.matchId,again.snapshot.matchId);
  assert.deepEqual(created.receipt,again.receipt);
  const id=created.snapshot.matchId;
  await rejects(service.create(a.token!,{...input,opponentPlayerId:c.player._id}),'command_conflict');
  await rejects(service.read(c.token!,id),'forbidden');
  await rejects(service.join(c.token!,id,{commandId:randomUUID(),expectedVersion:0,petId:c.pet._id}),'forbidden');
  await rejects(service.join(b.token!,id,{commandId:randomUUID(),expectedVersion:0,petId:a.pet._id}),'pet_not_owned');
  const join={commandId:randomUUID(),expectedVersion:0,petId:b.pet._id};
  const joins=await Promise.all([service.join(b.token!,id,join),service.join(b.token!,id,join)]);
  assert.deepEqual(joins[0].receipt,joins[1].receipt);
  assert.equal((await service.read(a.token!,id)).participants.length,2);
  const move={commandId:randomUUID(),expectedVersion:1,move:'attack' as const,targetPetId:b.pet._id};
  const moved=await Promise.all([service.move(a.token!,id,move),service.move(a.token!,id,move)]);
  assert.deepEqual(moved[0].receipt,moved[1].receipt);
  assert.equal(moved[0].snapshot.participants[1].hp,22);
  assert.equal((await service.read(b.token!,id)).version,2);
  await rejects(service.move(a.token!,id,{...move,move:'defend',targetPetId:a.pet._id}),'command_conflict');
  await rejects(service.move(a.token!,id,{...move,commandId:randomUUID()}),'stale_version');
  const bMove={commandId:randomUUID(),expectedVersion:2,move:'attack' as const,targetPetId:a.pet._id};
  const race=await Promise.allSettled([service.move(b.token!,id,bMove),service.move(b.token!,id,{...bMove,commandId:randomUUID()})]);
  assert.equal(race.filter(r=>r.status==='fulfilled').length,1);
  assert.equal((await service.read(a.token!,id)).version,3);
  const late=await service.move(a.token!,id,move);
  assert.deepEqual(late.receipt,moved[0].receipt);assert.equal(late.snapshot.version,3);

  // A new connection and service simulate process restart; all authority stays in MongoDB.
  const freshClient=new MongoClient(uri!,{serverSelectionTimeoutMS:1500});await freshClient.connect();t.after(()=>freshClient.close());
  const fresh=new BackboneService(new MongoRepository(freshClient.db(dbName)));
  assert.deepEqual(await fresh.read(a.token!,id),await service.read(b.token!,id));
  const profile=await fresh.profile(a.token!);assert.equal(profile.player._id,a.player._id);assert.equal(profile.matches[0].matchId,id);
  await rejects(fresh.profile('not-a-valid-session'),'unauthenticated');
  const expired=new BackboneService(repo,()=>new Date(Date.now()+8*86400000));
  await rejects(expired.read(a.token!,id),'unauthenticated');
  const expiredMatch=new BackboneService(repo,()=>new Date(Date.now()+2*86400000));
  await rejects(expiredMatch.move(a.token!,id,move),'match_expired');
  await rejects(expiredMatch.read(a.token!,id),'match_expired');

  const contested=await service.create(a.token!,make());
  const contestedId=contested.snapshot.matchId;
  const joinRace=await Promise.allSettled([0,1].map(()=>service.join(b.token!,contestedId,{commandId:randomUUID(),expectedVersion:0,petId:b.pet._id})));
  assert.equal(joinRace.filter(r=>r.status==='fulfilled').length,1);
  assert.equal((await service.read(a.token!,contestedId)).participants.length,2);

  // Inject a lost acknowledgement only after the real MongoDB CAS committed.
  class LostAcknowledgementRepository extends MongoRepository {
    once=true;
    override async compareAndSwap(...args:Parameters<MongoRepository['compareAndSwap']>) {
      const committed=await super.compareAndSwap(...args);
      if(committed&&this.once) { this.once=false;throw Error('Simulated acknowledgement loss after real commit'); }
      return committed;
    }
  }
  const uncertainService=new BackboneService(new LostAcknowledgementRepository(client.db(dbName)));
  const uncertainMove={commandId:randomUUID(),expectedVersion:1,move:'attack' as const,targetPetId:b.pet._id};
  await assert.rejects(uncertainService.move(a.token!,contestedId,uncertainMove),/acknowledgement loss/);
  const recoveredMove=await service.move(a.token!,contestedId,uncertainMove);
  assert.equal(recoveredMove.duplicate,true);assert.equal(recoveredMove.snapshot.participants[1].hp,22);assert.equal(recoveredMove.snapshot.version,2);

  const draw=await service.create(a.token!,make());const drawId=draw.snapshot.matchId;
  await service.join(b.token!,drawId,{commandId:randomUUID(),expectedVersion:0,petId:b.pet._id});
  let last;
  for(let i=0;i<20;i++) {
    const actor=i%2===0?a:b;
    last=await service.move(actor.token!,drawId,{commandId:randomUUID(),expectedVersion:i+1,move:'defend',targetPetId:actor.pet._id});
  }
  assert.equal(last!.snapshot.result,'draw');
  const stored=await client.db(dbName).collection('matches').findOne({_id:drawId} as never);
  assert.equal(stored!.acceptedCommands.length,22);
  const finalReceipt=stored!.acceptedCommands.at(-1);
  const finalActor=finalReceipt.actorPlayerId===a.player._id?a:b;
  const finalRetry=await service.move(finalActor.token!,drawId,{commandId:finalReceipt.commandId,expectedVersion:20,move:'defend',targetPetId:finalActor.pet._id});
  assert.equal(finalRetry.duplicate,true);

  const api=createLocalApi(service);
  const normalized=new Request('http://localhost:3018/api/session',{method:'POST',headers:{host:'127.0.0.1:3018',origin:'http://127.0.0.1:3018','content-type':'application/json'},body:JSON.stringify({displayName:'Normalized Next URL'})});
  assert.equal((await api(normalized)).status,200,'Next internal hostname must not reject the actual same-origin Host');
  const request=(method:string,path:string,body?:unknown,token?:string,origin='http://127.0.0.1:3018')=>new Request(`http://127.0.0.1:3018${path}`,{method,headers:{origin,'content-type':'application/json',...(token?{cookie:`pokepet_session=${token}`}:{})},...(body===undefined?{}:{body:JSON.stringify(body)})});
  const session=await api(request('POST','/api/session',{displayName:'Drew'}));
  assert.equal(session.status,200);assert.match(session.headers.get('set-cookie')!,/HttpOnly/);assert.match(session.headers.get('set-cookie')!,/SameSite=Strict/);
  assert.equal(session.headers.get('cache-control'),'no-store');
  const payload=await session.json();assert.equal('token' in payload,false);assert.equal('sessionHash' in payload.player,false);
  assert.equal((await api(request('GET',`/api/matches/${id}`,undefined,c.token!))).status,403);
  assert.equal((await api(request('GET',`/api/matches/${id}`,undefined,a.token!))).status,200);
  assert.equal((await api(request('POST','/api/matches',{...make(),playerId:b.player._id},a.token!))).status,400);
  assert.equal((await api(request('POST','/api/session',{displayName:'evil'},undefined,'https://evil.example'))).status,403);
  assert.equal((await api(request('POST','/api/session',{displayName:'x'.repeat(5000)}))).status,413);
  assert.equal((await api(request('POST','/api/session',{displayName:'bad'},'bad-cookie'))).status,401);
  // Failure is exercised against a real closed driver, never an in-memory stand-in.
  await freshClient.close();
  const failed=await createLocalApi(fresh)(request('GET',`/api/matches/${id}`,undefined,a.token!));
  assert.equal(failed.status,503);assert.deepEqual(await failed.json(),{error:'database_unavailable',message:'Database unavailable. Retry the same command ID and payload after reconnecting.'});
  console.log(`Real MongoDB verification retained isolated database: ${dbName}`);
});
