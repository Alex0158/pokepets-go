import test from 'node:test';
import assert from 'node:assert/strict';
import { parseIntent } from '../src/server/game-intent/rules.ts';
const entry={intent:'challenge',stat:null,targetName:'Jamie',battleMode:'sneak',view:null};
test('valid intents preserve only an allowed structured action',()=>{
  assert.deepEqual(parseIntent(JSON.stringify(entry)),entry);
  assert.equal(parseIntent(JSON.stringify({...entry,intent:'points_help'})).intent,'points_help');
});
test('invalid intent shapes and fabricated action types fail closed',()=>{
  for(const input of [{...entry,intent:'award_points'},{...entry,stat:'admin'}, {...entry,battleMode:'unknown'},{...entry,view:'arbitrary'},{...entry,targetName:'x'.repeat(81)},{...entry,extra:'x'},null])assert.throws(()=>parseIntent(JSON.stringify(input)));
  assert.throws(()=>parseIntent('not-json'));
});
