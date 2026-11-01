import test from 'node:test';
import assert from 'node:assert/strict';
import { BattlePresentation } from '../battle-adapter.mjs';
import { waitingMatch, joinMatch, moveMatch } from '../../src/server/core/battle.ts';
const now=new Date('2026-11-01T14:00:00Z');
const pet=(ownerId)=>({_id:`pet-${ownerId}`,ownerId,name:ownerId,baseStats:{health:30,attack:10,defence:2,speed:5},createdAt:now,updatedAt:now});
const asSnapshot=({_id,acceptedCommands,creatorId,createCommandId,invitedPlayerId,...rest})=>({matchId:_id,...rest});
const active=()=>joinMatch(waitingMatch('match','a','b',pet('a'),now),'b',pet('b'),0,now);

test('actual backend attack/defend events project authoritative HP and distinct animation targets',()=>{
  const view=new BattlePresentation();let m=active();assert.deepEqual(view.apply(asSnapshot(m)).actions,[]);
  m=moveMatch(m,'a',{commandId:'attack-1',expectedVersion:1,move:'attack',targetPetId:'pet-b'},now);
  const attack=view.apply(asSnapshot(m));
  assert.equal(attack.snapshot.participants[1].hp,22);
  assert.deepEqual(attack.actions.map(a=>[a.petId,a.state]),[['pet-a','attack'],['pet-b','hurt']]);
  assert.deepEqual(view.apply(asSnapshot(m)).actions,[]);
  m=moveMatch(m,'b',{commandId:'defend-1',expectedVersion:2,move:'defend',targetPetId:'pet-b'},now);
  const defend=view.apply(asSnapshot(m));assert.deepEqual(defend.actions.map(a=>[a.petId,a.state]),[['pet-b','defend']]);assert.equal(defend.snapshot.participants[1].hp,22);
});

test('hydrate, stale reads, duplicate commands and skipped polling never fabricate or replay damage',()=>{
  const view=new BattlePresentation();const before=active();
  const attack=moveMatch(before,'a',{commandId:'a',expectedVersion:1,move:'attack',targetPetId:'pet-b'},now);
  assert.deepEqual(view.apply(asSnapshot(attack),{hydrate:true}).actions,[]);
  assert.equal(view.apply(asSnapshot(before)).snapshot.version,2);
  const defend=moveMatch(attack,'b',{commandId:'b',expectedVersion:2,move:'defend',targetPetId:'pet-b'},now);
  const next=moveMatch(defend,'a',{commandId:'c',expectedVersion:3,move:'attack',targetPetId:'pet-b'},now);
  const skipped=view.apply(asSnapshot(next));assert.equal(skipped.snapshot.participants[1].hp,18);assert.equal(skipped.actions.length,2);
  assert.deepEqual(view.apply(asSnapshot(next),{hydrate:true}).actions,[]);
  const invalid=structuredClone(next);invalid.version++;invalid.lastEvent={...invalid.lastEvent,version:invalid.version,resultingHp:999};
  assert.deepEqual(view.apply(asSnapshot(invalid)).actions,[]);
});

test('new authoritative moves animate attacks without inventing damage for heal or flee',()=>{
  const view=new BattlePresentation();let m=active();view.apply(asSnapshot(m));
  for(const [actor,move,target] of [['a','small_attack','pet-b'],['b','big_attack','pet-a']]){
    m=moveMatch(m,actor,{commandId:move,expectedVersion:m.version,move,targetPetId:target},now);
    const result=view.apply(asSnapshot(m));
    assert.deepEqual(result.actions.map(a=>a.state),['attack','hurt']);
    assert.equal(result.snapshot.lastEvent.resultingHp,result.snapshot.participants.find(p=>p.petId===target).hp);
    assert.deepEqual(view.apply(asSnapshot(m)).actions,[]);
  }
  m=moveMatch(m,'a',{commandId:'heal',expectedVersion:m.version,move:'heal',targetPetId:'pet-a'},now);
  const healed=view.apply(asSnapshot(m));assert.deepEqual(healed.actions,[]);assert.equal(healed.snapshot.participants[0].hp,m.participants[0].hp);
  m=moveMatch(m,'b',{commandId:'flee',expectedVersion:m.version,move:'flee',targetPetId:'pet-b'},now);
  const fled=view.apply(asSnapshot(m));assert.deepEqual(fled.actions,[]);assert.equal(fled.snapshot.result,'escape');
  assert.deepEqual(view.apply(asSnapshot(m)).actions,[]);
});
