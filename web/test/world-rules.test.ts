import test from 'node:test';
import assert from 'node:assert/strict';
import { worldPosition, practiceTurn } from '../src/server/world/rules.ts';
import { participant } from '../src/server/core/battle.ts';
import type { Match, Pet } from '../src/shared/multiplayer.ts';
const now=new Date('2026-11-01T12:00:00Z');
const pet=(id:string):Pet=>({_id:`${id}-pet`,ownerId:id,name:id,baseStats:{health:30,attack:10,defence:2,speed:5},createdAt:now,updatedAt:now});
test('fictional player positions are stable and bounded',()=>{ const p=worldPosition('player-1');assert.deepEqual(p,worldPosition('player-1'));assert.ok(p.x>=0.15&&p.x<=0.85&&p.z>=0.2&&p.z<=0.8); });
test('a practice move executes a separate automatic reply without mutating prior state',()=>{
  const a=pet('a'),b=pet('b');const match:Match={_id:'practice',creatorId:'a',createCommandId:'create',invitedPlayerId:'bot',status:'active',participants:[participant('a',a),participant('b',b)],turnPlayerId:'a',version:1,moveCount:0,result:null,winnerPlayerId:null,acceptedCommands:[],createdAt:now,updatedAt:now,expiresAt:new Date(now.getTime()+86400000)};
  const out=practiceTurn(match,'a',{commandId:'d62279e5-6fc3-4c40-9d0a-e01ccbe0cf50',expectedVersion:1,move:'attack',targetPetId:b._id},now);
  assert.equal(out.match.participants[1].hp,22);assert.equal(out.match.participants[0].hp,22);assert.equal(out.events.length,2);assert.equal(out.match.turnPlayerId,'a');assert.equal(match.participants[1].hp,30);
});
