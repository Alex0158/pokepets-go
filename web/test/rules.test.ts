import test from 'node:test';
import assert from 'node:assert/strict';
import { waitingMatch, joinMatch, moveMatch, DomainError, MAX_MOVES } from '../src/server/core/battle.ts';
import type { Pet, Match } from '../src/shared/multiplayer.ts';
const now = new Date('2026-11-01T14:00:00Z');
const pet = (id: string): Pet => ({ _id: `pet-${id}`, ownerId: id, name: id, baseStats: {health:30, attack:10, defence:2, speed:5}, createdAt:now, updatedAt:now });
const command = (id: string, version: number, move: 'attack'|'defend'='attack', target='pet-b') => ({commandId:id,expectedVersion:version,move,targetPetId:target});
const active = () => joinMatch(waitingMatch('match','a','b',pet('a'),now), 'b',pet('b'),0,now);
const rejects = (fn: () => unknown, code: string) => assert.throws(fn, e => e instanceof DomainError && e.code===code);

test('two distinct owners, immutable snapshots, creator first and deterministic turns', () => {
  const original=pet('a');
  const waiting=waitingMatch('match','a','b',original,now);
  original.baseStats.attack=99;
  assert.equal(waiting.participants[0].stats.attack,10);
  rejects(()=>joinMatch(waiting,'a',pet('a'),0,now),'forbidden');
  rejects(()=>joinMatch(waiting,'c',pet('c'),0,now),'forbidden');
  rejects(()=>joinMatch(waiting,'b',pet('a'),0,now),'pet_not_owned');
  const match=joinMatch(waiting,'b',pet('b'),0,now);
  assert.equal(match.version,1);
  assert.equal(match.turnPlayerId,'a');
  const result=moveMatch(match,'a',command('one',1),now);
  assert.equal(result.participants[1].hp,22);
  assert.equal(result.version,2);
  assert.equal(result.turnPlayerId,'b');
  assert.equal(match.participants[1].hp,30);
});

test('nonmembers, wrong turns, stale versions and bad moves do not mutate input', () => {
  const match=active();const before=structuredClone(match);
  rejects(()=>moveMatch(match,'c',command('x',1),now),'forbidden');
  rejects(()=>moveMatch(match,'b',command('x',1,'attack','pet-a'),now),'invalid_turn');
  rejects(()=>moveMatch(match,'a',command('x',0),now),'stale_version');
  rejects(()=>moveMatch(match,'a',command('x',1,'attack','pet-a'),now),'invalid_target');
  rejects(()=>moveMatch(match,'a',{...command('x',1),move:'teleport'} as never,now),'invalid_move');
  assert.deepEqual(match,before);
});

test('defend reduces one incoming attack and knockout ends without rewards', () => {
  let match=moveMatch(active(),'a',command('d',1,'defend','pet-a'),now);
  match=moveMatch(match,'b',command('a',2,'attack','pet-a'),now);
  assert.equal(match.participants[0].hp,26);
  assert.equal(match.participants[0].guarding,false);
  while(match.status==='active') {
    const actor=match.turnPlayerId!;
    match=moveMatch(match,actor,command(`m${match.version}`,match.version,'attack',actor==='a'?'pet-b':'pet-a'),now);
  }
  assert.equal(match.result,'knockout');
  assert.equal(match.participants.some(p=>p.hp===0),true);
  rejects(()=>moveMatch(match,'a',command('late',match.version),now),'match_finished');
});

test('twentieth move is a bounded draw; expiry never invents a winner', () => {
  let match: Match=active();
  for(let i=0;i<MAX_MOVES;i++) {
    const actor=match.turnPlayerId!;
    match=moveMatch(match,actor,command(`d${i}`,match.version,'defend',`pet-${actor}`),now);
  }
  assert.equal(match.moveCount,20); assert.equal(match.result,'draw'); assert.equal(match.winnerPlayerId,null);
  rejects(()=>moveMatch(active(),'a',command('expired',1),new Date(now.getTime()+86400000)),'match_expired');
});
