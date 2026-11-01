import test from 'node:test';
import assert from 'node:assert/strict';
import { DomainError } from '../src/server/core/battle.ts';
import { initialProgression, applyProgression } from '../src/server/progression/rules.ts';

const now=new Date('2026-11-01T12:00:00Z');
const pet={_id:'pet-1',ownerId:'player-1',name:'Companion',baseStats:{health:30,attack:10,defence:2,speed:5},createdAt:now,updatedAt:now};
const expectCode=(f:()=>unknown,code:string)=>assert.throws(f,e=>e instanceof DomainError&&e.code===code);

test('a confirmed mission awards fixed points once without mutating its prior state',()=>{
  const initial=initialProgression(pet,now);
  const next=applyProgression(initial,{kind:'mission',missionId:'sniff-safari',confirmed:true},now);
  assert.equal(initial.points,0);assert.equal(next.points,20);assert.equal(next.version,1);
  assert.deepEqual(next.completedMissionIds,['sniff-safari']);
  expectCode(()=>applyProgression(next,{kind:'mission',missionId:'sniff-safari',confirmed:true},now),'mission_already_completed');
  expectCode(()=>applyProgression(initial,{kind:'mission',missionId:'sniff-safari',confirmed:false},now),'confirmation_required');
  expectCode(()=>applyProgression(initial,{kind:'mission',missionId:'unknown',confirmed:true},now),'unknown_mission');
});

test('stat upgrades spend five points and leave immutable battle base stats unchanged',()=>{
  const initial=initialProgression(pet,now);
  expectCode(()=>applyProgression(initial,{kind:'upgrade',stat:'attack'},now),'insufficient_points');
  const earned=applyProgression(initial,{kind:'mission',missionId:'sniff-safari',confirmed:true},now);
  const upgraded=applyProgression(earned,{kind:'upgrade',stat:'attack'},now);
  assert.equal(upgraded.points,15);assert.equal(upgraded.stats.attack,11);assert.equal(pet.baseStats.attack,10);
  expectCode(()=>applyProgression(earned,{kind:'upgrade',stat:'magic' as 'attack'},now),'invalid_stat');
});
