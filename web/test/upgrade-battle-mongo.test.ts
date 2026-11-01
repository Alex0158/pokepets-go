import test from 'node:test';
import assert from 'node:assert/strict';
import { randomUUID } from 'node:crypto';
import { MongoClient } from 'mongodb';
import type { ClientSession } from 'mongodb';
import { MongoRepository } from '../src/server/db/mongo-repository.ts';
import { BackboneService } from '../src/server/core/service.ts';
import { ProgressionService } from '../src/server/progression/service.ts';
import type { Progression } from '../src/server/progression/rules.ts';
import type { Match } from '../src/shared/multiplayer.ts';
const uri=process.env.POKEPET_TEST_MONGODB_URI;

async function fixture(t:test.TestContext) {
  assert.match(uri!,/^mongodb:\/\/127\.0\.0\.1:\d+$/);
  const client=new MongoClient(uri!,{serverSelectionTimeoutMS:2000});await client.connect();t.after(()=>client.close());
  assert.ok((await client.db('admin').command({hello:1})).setName,'Activation verification requires real replica-set transactions');
  const name=`pokepet_local_upgrade_battle_${Date.now()}_${randomUUID().slice(0,8)}`;
  const db=client.db(name),repo=new MongoRepository(db);await repo.initialize();
  const battle=new BackboneService(repo),progress=new ProgressionService(db,battle);
  const a=await battle.bootstrap(undefined,'Upgrade A'),b=await battle.bootstrap(undefined,'Upgrade B');
  const create=()=>battle.create(a.token!,{commandId:randomUUID(),petId:a.pet._id,opponentPlayerId:b.player._id});
  const mission=(token:string)=>progress.command(token,randomUUID(),{kind:'mission',missionId:'sniff-safari',confirmed:true});
  const upgrade=(token:string,stat:'attack'|'health'|'defence'|'speed'='attack',commandId=randomUUID())=>progress.command(token,commandId,{kind:'upgrade',stat});
  const joinInput=()=>({commandId:randomUUID(),petId:b.pet._id,expectedVersion:0});
  console.log(`Real transaction test retains isolated database: ${name}`);
  return {client,db,repo,battle,progress,a,b,create,mission,upgrade,joinInput};
}

test('activation pins both latest saved stats; later upgrade/retry cannot refresh an active battle',{skip:!uri},async t=>{
  const f=await fixture(t),{a,b,battle,progress,repo}=f;
  const waiting=await f.create(),id=waiting.snapshot.matchId;
  await f.mission(a.token!);await f.mission(b.token!);
  await f.upgrade(a.token!);await f.upgrade(b.token!,'health');
  const input=f.joinInput();const joined=await battle.join(b.token!,id,input);
  assert.equal(joined.snapshot.participants[0].stats.attack,11);
  assert.equal(joined.snapshot.participants[1].hp,31);
  assert.equal(joined.snapshot.participants[1].stats.health,31);
  const sourceA=joined.snapshot.participants[0].progressionVersion;
  assert.equal(sourceA,(await progress.get(a.token!)).version);
  assert.equal((await progress.get(a.token!)).points,15,'activation must not spend/award points');
  assert.equal((await repo.pet(a.pet._id))!.baseStats.attack,10);
  await f.upgrade(a.token!);
  const replay=await battle.join(b.token!,id,input);
  assert.equal(replay.duplicate,true);assert.deepEqual(replay.receipt,joined.receipt);
  assert.deepEqual(replay.snapshot.participants,joined.snapshot.participants);
  assert.equal((await progress.get(a.token!)).version,sourceA!+1,'duplicate join must not fence again');
  const moved=await battle.move(a.token!,id,{commandId:randomUUID(),expectedVersion:1,move:'attack',targetPetId:b.pet._id});
  assert.equal(moved.snapshot.participants[1].hp,22,'damage uses pinned attack 11 minus defence 2');
  const next=await f.create();const activated=await battle.join(b.token!,next.snapshot.matchId,f.joinInput());
  assert.equal(activated.snapshot.participants[0].stats.attack,12);
  assert.equal((await progress.get(a.token!)).stats.attack,12);
});

test('same-ID concurrent join fences each pet once; a different join ID cannot activate again',{skip:!uri},async t=>{
  const f=await fixture(t),{a,b,battle,progress}=f;
  const waiting=await f.create(),id=waiting.snapshot.matchId,input=f.joinInput();
  const results=await Promise.all([battle.join(b.token!,id,input),battle.join(b.token!,id,input)]);
  assert.deepEqual(results[0].receipt,results[1].receipt);
  assert.equal(results.filter(r=>r.duplicate===false).length,1);
  assert.equal((await progress.get(a.token!)).version,1);
  assert.equal((await progress.get(b.token!)).version,1);
  await assert.rejects(battle.join(b.token!,id,f.joinInput()),/stale_version/);
  assert.equal((await progress.get(a.token!)).version,1);
});

test('real transaction rolls back both progression fences and match on failed CAS',{skip:!uri},async t=>{
  const f=await fixture(t),{a,b,battle,progress,db}=f;
  await f.mission(a.token!);await f.mission(b.token!);
  const beforeA=await progress.get(a.token!),beforeB=await progress.get(b.token!);
  const waiting=await f.create(),id=waiting.snapshot.matchId;
  let observedFences=false;
  class RejectedActivationRepository extends MongoRepository {
    override async compareAndSwap(previous:Match,next:Match,actor:string,commandId:string,kind:'join'|'move',now:Date,session?:ClientSession) {
      if(kind==='join') {
        const fenced=await this.db.collection<Progression>('progressions').findOne({_id:a.pet._id},{session});
        observedFences=!!fenced&&fenced.version===beforeA.version+1;
        return false;
      }
      return super.compareAndSwap(previous,next,actor,commandId,kind,now,session);
    }
  }
  const rejected=new BackboneService(new RejectedActivationRepository(db));
  await assert.rejects(rejected.join(b.token!,id,f.joinInput()),/stale_version/);
  assert.equal(observedFences,true,'failure must occur after real transactional progression writes');
  assert.deepEqual(await progress.get(a.token!),beforeA);assert.deepEqual(await progress.get(b.token!),beforeB);
  assert.equal((await battle.read(a.token!,id)).status,'waiting');
});

test('lost activation acknowledgement retries its committed receipt without another fence',{skip:!uri},async t=>{
  const f=await fixture(t),{a,b,db,battle,progress}=f;
  await f.mission(a.token!);
  const upgradeId=randomUUID();const upgrade=await f.upgrade(a.token!,'attack',upgradeId);
  const waiting=await f.create(),id=waiting.snapshot.matchId,input=f.joinInput();
  class LostCommitAcknowledgementRepository extends MongoRepository {
    override async transaction<T>(work:(session:ClientSession)=>Promise<T>):Promise<T> {
      const result=await super.transaction(work);
      assert.ok(result);throw Error('Simulated response loss after real transaction commit');
    }
  }
  const uncertain=new BackboneService(new LostCommitAcknowledgementRepository(db));
  await assert.rejects(uncertain.join(b.token!,id,input),/response loss/);
  const before=await progress.get(a.token!);
  const recovered=await battle.join(b.token!,id,input);
  assert.equal(recovered.duplicate,true);assert.equal(recovered.snapshot.participants[0].stats.attack,11);
  assert.deepEqual(await progress.get(a.token!),before);
  const retriedUpgrade=await f.upgrade(a.token!,'attack',upgradeId);
  assert.equal(retriedUpgrade.duplicate,true);assert.deepEqual(retriedUpgrade.receipt,upgrade.receipt);
  assert.equal(retriedUpgrade.snapshot.version,upgrade.receipt.version+1);
});

test('failed or unauthorized activation leaves absent progression baselines absent',{skip:!uri},async t=>{
  const f=await fixture(t),{a,b,db,battle}=f;
  const waiting=await f.create(),id=waiting.snapshot.matchId;
  class AbortRepository extends MongoRepository {
    override async compareAndSwap(...args:Parameters<MongoRepository['compareAndSwap']>) {
      if(args[4]==='join')throw Error('Simulated activation failure after baseline/fence writes');
      return super.compareAndSwap(...args);
    }
  }
  const aborting=new BackboneService(new AbortRepository(db));
  await assert.rejects(aborting.join(b.token!,id,f.joinInput()),/activation failure/);
  assert.equal(await db.collection('progressions').countDocuments(),0);
  await assert.rejects(battle.join(a.token!,id,f.joinInput()),/forbidden/);
  assert.equal(await db.collection('progressions').countDocuments(),0);
  assert.equal((await battle.read(a.token!,id)).status,'waiting');
});

test('upgrade committed after transaction snapshot but before fence forces fresh stat capture',{skip:!uri},async t=>{
  const f=await fixture(t),{a,b,db,progress}=f;
  await f.mission(a.token!);await f.mission(b.token!);
  const waiting=await f.create(),id=waiting.snapshot.matchId;
  class BeforeFenceUpgradeRepository extends MongoRepository {
    once=true;
    override async pinProgression(pet:Parameters<MongoRepository['pinProgression']>[0],session:ClientSession,now:Date) {
      if(this.once) {this.once=false;await f.upgrade(a.token!);}
      return super.pinProgression(pet,session,now);
    }
  }
  const racing=new BackboneService(new BeforeFenceUpgradeRepository(db));
  const joined=await racing.join(b.token!,id,f.joinInput());
  assert.equal(joined.snapshot.participants[0].stats.attack,11,'stale transaction must retry against committed upgrade');
  assert.equal((await progress.get(a.token!)).points,15);
});

test('upgrade replacement read before activation cannot overwrite its fence or active stats',{skip:!uri},async t=>{
  const f=await fixture(t),{a,b,db,battle,progress}=f;
  await f.mission(a.token!);const waiting=await f.create(),id=waiting.snapshot.matchId;
  class PausedUpgradeService extends ProgressionService {
    once=true;
    override async owned(token:string|undefined) {
      const stale=await super.owned(token);
      if(this.once) { this.once=false;await battle.join(b.token!,id,f.joinInput()); }
      return stale;
    }
  }
  const upgrade=new PausedUpgradeService(db,battle);
  const result=await upgrade.command(a.token!,randomUUID(),{kind:'upgrade',stat:'attack'});
  assert.equal(result.snapshot.stats.attack,11);assert.equal(result.snapshot.points,15);
  const current=await battle.read(a.token!,id);
  assert.equal(current.participants[0].stats.attack,10,'activation won ordering and must stay immutable');
  assert.equal(result.snapshot.version,current.participants[0].progressionVersion!+1);
  const next=await f.create();const started=await battle.join(b.token!,next.snapshot.matchId,f.joinInput());
  assert.equal(started.snapshot.participants[0].stats.attack,11);
});
