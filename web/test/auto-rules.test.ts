import test from 'node:test';
import assert from 'node:assert/strict';
import { chooseAutoMove, createDecisionProvider } from '../src/server/auto/decisions.ts';
const state={self:{hp:10,maxHp:30,attack:10,defence:2,guarding:false},opponent:{hp:15,maxHp:30,attack:10,defence:2,guarding:false}};
test('only valid decisions are accepted; provider errors fall back safely',async()=>{
 assert.deepEqual(await chooseAutoMove(state,async()=> 'defend'),{move:'defend',source:'decisions'});
 assert.deepEqual(await chooseAutoMove(state,async()=> 'teleport' as never),{move:'small_attack',source:'fallback'});
 assert.deepEqual(await chooseAutoMove(state,async()=>{throw Error('offline');}),{move:'small_attack',source:'fallback'});
});
test('Decisions provider uses official choice format and validates returned answer',async()=>{
 let body:Record<string,unknown>={};const mock=async (_url:unknown,init?:RequestInit)=>{body=JSON.parse(String(init?.body));return Response.json({answers:[{type:'choice',name:'battle_move',choice:'defend'}]});};
 const provider=createDecisionProvider('test-key',mock as typeof fetch);assert.equal(await provider(state),'defend');assert.equal(body.model,'gpt-6-luna');assert.deepEqual((body.questions as Array<{choices:Array<{value:string}>}>)[0].choices.map(x=>x.value),['small_attack','big_attack','heal','defend','flee']);
});
