import test from 'node:test';
import assert from 'node:assert/strict';
import { saveCharacterRefs,readCharacterRefs } from '../src/client/character-cache.ts';
import type { AvatarAssets } from '../src/client/avatar-client.ts';
test('character cache retains only player-scoped references, never sheets or uploaded content',()=>{
 const values=new Map<string,string>(),store={getItem:(k:string)=>values.get(k)??null,setItem:(k:string,v:string)=>{values.set(k,v);}};
 const assets={pet:{subject:'pet',assetId:'11111111-1111-4111-8111-111111111111',expiresAt:'2026-11-01T18:00:00Z',provenance:{provider:'openai',inputPolicy:'synthetic-only'},manifest:{sheet:'private.png',width:1024,height:1024,animations:{}}}} as AvatarAssets;
 saveCharacterRefs(store,'a',assets);assert.ok(![...values.values()].join('').includes('private.png'));assert.equal(readCharacterRefs(store,'a',0)[0].subject,'pet');assert.deepEqual(readCharacterRefs(store,'b',0),[]);assert.deepEqual(readCharacterRefs(store,'a',Date.parse('2026-11-02')),[]);
});
