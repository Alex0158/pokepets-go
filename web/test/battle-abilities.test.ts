import test from 'node:test';
import assert from 'node:assert/strict';
import {waitingMatch,joinMatch,moveMatch} from '../src/server/core/battle.ts';
import type {Pet,MoveCommand} from '../src/shared/multiplayer.ts';
import {legalAutoMoves} from '../src/server/auto/decisions.ts';
const now=new Date('2026-11-01T14:00:00Z');
const pet=(id:string):Pet=>({_id:`pet-${id}`,ownerId:id,name:id,baseStats:{health:30,attack:10,defence:2,speed:5},createdAt:now,updatedAt:now});
const active=()=>joinMatch(waitingMatch('m','a','b',pet('a'),now),'b',pet('b'),0,now);
function act(match:ReturnType<typeof active>,actor:string,move:MoveCommand['move']){const target=move==='small_attack'||move==='big_attack'||move==='attack'?(actor==='a'?'pet-b':'pet-a'):`pet-${actor}`;return moveMatch(match,actor,{commandId:`id-${match.version}`,expectedVersion:match.version,move,targetPetId:target},now);}
test('small, big, heal and flee obey caps and preserve legacy matches',()=>{
 let m=active();m=act(m,'a','big_attack');assert.equal(m.participants[1].hp,17);assert.equal(m.participants[0].bigAttacksUsed,1);
 m=act(m,'b','heal');assert.equal(m.participants[1].hp,27);assert.equal(m.participants[1].healsUsed,1);
 m=act(m,'a','small_attack');assert.equal(m.participants[1].hp,19);assert.throws(()=>act(m,'b','heal'),/heal_unavailable/);
 m=act(m,'b','flee');assert.equal(m.status,'finished');assert.equal(m.result,'escape');assert.equal(m.winnerPlayerId,null);assert.equal(m.lastEvent?.move,'flee');
});
test('heals require damage and big attack limit is enforced for each player',()=>{
 let m=active();assert.throws(()=>act(m,'a','heal'),/heal_unavailable/);
 m.participants[0].bigAttacksUsed=3;assert.throws(()=>act(m,'a','big_attack'),/big_attack_unavailable/);
 const choices=legalAutoMoves(m.participants[0]);assert.deepEqual(choices,['small_attack','defend','flee']);
});
