import test from 'node:test';
import assert from 'node:assert/strict';
import { readIntent, matchingPlayers, confirmedCommand } from '../src/client/game-intent-client.ts';

const a={playerId:'a',displayName:'Jamie',petId:'pa',petName:'Pip',position:{x:.2,z:.3}};
const b={...a,playerId:'b',petId:'pb',displayName:'jamie'};
const result={transcript:'Upgrade attack',intent:'upgrade',stat:'attack',targetName:null,battleMode:null,view:null};
test('intent response is bounded and cannot inject an arbitrary operation',()=>{
  assert.equal(readIntent(result).stat,'attack');
  for(const bad of [{...result,intent:'award_points'},{...result,stat:'admin'},{...result,view:'settings'},{...result,transcript:''}])assert.throws(()=>readIntent(bad));
});
test('name resolution preserves duplicate names and never guesses from a partial name',()=>{
  assert.equal(matchingPlayers([a,b],' Jamie ').length,2);
  assert.deepEqual(matchingPlayers([a,b],'Jam'),[]);
  assert.deepEqual(matchingPlayers([a,b],null),[]);
});
test('only explicit supported confirmation produces an existing game command',()=>{
  assert.deepEqual(confirmedCommand('upgrade',{stat:'attack'},[a],'self'),{path:'/api/progression/upgrade',payload:{stat:'attack'}});
  assert.deepEqual(confirmedCommand('challenge',{targetId:'a',mode:'face'},[a],'self'),{path:'/api/matches',payload:{petId:'self',opponentPlayerId:'a'}});
  assert.deepEqual(confirmedCommand('challenge',{targetId:'a',mode:'sneak'},[a],'self'),{path:'/api/practice',payload:{opponentPlayerId:'a'}});
  for(const kind of ['points_help','open_view','activity_report','unknown'])assert.equal(confirmedCommand(kind,{},[a],'self'),null);
  assert.equal(confirmedCommand('upgrade',{},[a],'self'),null);
  assert.equal(confirmedCommand('challenge',{targetId:'a'},[a],'self'),null);
  assert.equal(confirmedCommand('challenge',{targetId:'gone',mode:'face'},[a],'self'),null);
});
