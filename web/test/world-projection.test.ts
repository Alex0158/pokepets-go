import test from 'node:test';
import assert from 'node:assert/strict';
import { projectedMapPosition, mapPosition } from '../src/client/world.ts';
const player={playerId:'p',petId:'pet',displayName:'Player',petName:'Pet',position:{x:.3,z:.4}};
test('real roster coordinates pass through the optional camera projection',()=>{
  let observed;const style=projectedMapPosition(player,p=>{observed=p;return {left:412,top:208,visible:true};});
  assert.deepEqual(observed,player.position);assert.deepEqual(style,{left:412,top:208,visibility:'visible'});
});
test('offscreen projected markers are hidden instead of pinned at a false location',()=>{
  assert.deepEqual(projectedMapPosition(player,()=>({left:-20,top:50,visible:false})),{left:-20,top:50,visibility:'hidden'});
});
test('absent, failed or invalid optional projection preserves the usable static map placement',()=>{
  for(const project of [undefined,()=>null,()=>{throw Error('renderer unavailable');},()=>({left:NaN,top:0,visible:true})])assert.deepEqual(projectedMapPosition(player,project),mapPosition(player));
});
