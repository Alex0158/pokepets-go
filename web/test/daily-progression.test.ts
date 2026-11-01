import test from 'node:test';
import assert from 'node:assert/strict';
import { DomainError } from '../src/server/core/battle.ts';
import { initialProgression, applyProgression, dailyMissionSnapshot } from '../src/server/progression/rules.ts';

const pet={_id:'pet-1',ownerId:'player-1',name:'Companion',baseStats:{health:30,attack:10,defence:2,speed:5},createdAt:new Date(0),updatedAt:new Date(0)};
const feed={kind:'mission' as const,missionId:'daily-feed',confirmed:true};
const play={kind:'mission' as const,missionId:'daily-play',confirmed:true};
const code=(f:()=>unknown,c:string)=>assert.throws(f,e=>e instanceof DomainError&&e.code===c);

test('daily care awards once per London calendar day and preserves one-time missions',()=>{
  const day=new Date('2026-11-01T12:00:00Z');
  const original=initialProgression(pet,day);
  const fed=applyProgression(original,feed,day);
  assert.equal(fed.points,15);assert.deepEqual(fed.completedMissionIds,[]);
  assert.deepEqual(dailyMissionSnapshot(fed,day),{date:'2026-11-01',completedMissionIds:['daily-feed']});
  code(()=>applyProgression(fed,feed,day),'mission_already_completed');
  const played=applyProgression(fed,play,day);
  assert.equal(played.points,30);
  const upgraded=applyProgression(played,{kind:'upgrade',stat:'health'},day);
  assert.equal(upgraded.points,25);assert.equal(upgraded.stats.health,31);
  const tomorrow=new Date('2026-11-02T00:00:00Z');
  assert.deepEqual(dailyMissionSnapshot(upgraded,tomorrow),{date:'2026-11-02',completedMissionIds:[]});
  assert.equal(applyProgression(upgraded,feed,tomorrow).points,40);
  code(()=>applyProgression(original,{...feed,confirmed:false},day),'confirmation_required');
});

test('London reset handles daylight saving and old records without daily state',()=>{
  const before=new Date('2026-06-01T22:59:59Z');
  const after=new Date('2026-06-01T23:00:00Z');
  const initial=initialProgression(pet,before);
  const fed=applyProgression(initial,feed,before);
  assert.equal(dailyMissionSnapshot(fed,before).date,'2026-06-01');
  assert.deepEqual(dailyMissionSnapshot(fed,after),{date:'2026-06-02',completedMissionIds:[]});
  assert.equal(applyProgression(fed,feed,after).points,30);
});
