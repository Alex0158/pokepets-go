import test from 'node:test';
import assert from 'node:assert/strict';
import { GameBattlePresentation } from '../src/client/battle-presentation.ts';
import { waitingMatch,joinMatch,moveMatch } from '../src/server/core/battle.ts';
import { snapshot } from '../src/server/core/service.ts';
const now=new Date();
const pet=(owner:string)=>({_id:`${owner}-pet`,ownerId:owner,name:owner,baseStats:{health:30,attack:10,defence:2,speed:5},createdAt:now,updatedAt:now});
test('new attack events animate accepted actor and target without replaying hydrate or duplicates',()=>{
 const active=joinMatch(waitingMatch('m','a','b',pet('a'),now),'b',pet('b'),0,now),view=new GameBattlePresentation();
 assert.deepEqual(view.apply(snapshot(active)).actions,[]);
 const next=moveMatch(active,'a',{commandId:'hit',expectedVersion:1,move:'big_attack',targetPetId:'b-pet'},now);
 assert.deepEqual(view.apply(snapshot(next)).actions.map(a=>[a.petId,a.state]),[['a-pet','attack'],['b-pet','hurt']]);
 assert.deepEqual(view.apply(snapshot(next)).actions,[]);assert.deepEqual(new GameBattlePresentation().apply(snapshot(next)).actions,[]);
});
test('heal and flee effects project real authoritative events, preserving the escape result',()=>{
 let current=joinMatch(waitingMatch('m','a','b',pet('a'),now),'b',pet('b'),0,now);
 current=moveMatch(current,'a',{commandId:'guard',expectedVersion:1,move:'defend',targetPetId:'a-pet'},now);
 current=moveMatch(current,'b',{commandId:'hit',expectedVersion:2,move:'small_attack',targetPetId:'a-pet'},now);
 const view=new GameBattlePresentation();view.apply(snapshot(current));
 current=moveMatch(current,'a',{commandId:'heal',expectedVersion:3,move:'heal',targetPetId:'a-pet'},now);
 assert.equal(view.apply(snapshot(current)).actions[0].state,'heal');
 current=moveMatch(current,'b',{commandId:'leave',expectedVersion:4,move:'flee',targetPetId:'b-pet'},now);
 const shown=view.apply(snapshot(current));assert.equal(shown.snapshot.result,'escape');assert.equal(shown.actions[0].state,'move');
});
