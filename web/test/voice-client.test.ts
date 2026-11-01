import test from 'node:test';
import assert from 'node:assert/strict';
import { VoiceClient } from '../src/client/voice-client.ts';
const storage=()=>{const data=new Map<string,string>();return {data,getItem:(k:string)=>data.get(k)??null,setItem:(k:string,v:string)=>{data.set(k,v);},removeItem:(k:string)=>{data.delete(k);}};};
const id='11111111-1111-4111-8111-111111111111';
test('voice retry retains identical audio and ID but stores only command metadata',async()=>{
 const store=storage(),bodies:string[]=[];let call=0;
 const client=new VoiceClient('a',store,async(_path,init)=>{bodies.push(String(init?.body));if(call++===0)throw Error('offline');return Response.json({points:10,snapshot:{version:1},receipt:{commandId:id},duplicate:true,transcript:null,reason:'Play together'});},()=>id);
 await assert.rejects(client.submit('c3ludGhldGlj','audio/wav'));
 assert.equal([...store.data.values()].join(''),JSON.stringify({commandId:id}));
 await client.retry();assert.equal(bodies[0],bodies[1]);assert.equal(client.pending(),null);
});
test('reload reconciles a committed score without storing or resending audio',async()=>{
 const store=storage();store.setItem('pokepet-voice-pending-v1:a',JSON.stringify({commandId:id}));let path='';
 const client=new VoiceClient('a',store,async url=>{path=url;return Response.json({status:'committed',points:10,snapshot:{version:2},duplicate:true,transcript:null});},()=>id);
 const result=await client.lookup();assert.equal(result.status,'committed');assert.match(path,/commandId=/);assert.equal(client.pending(),null);
});
test('pending server work cannot be cleared to create a fresh command',async()=>{
 const store=storage();store.setItem('pokepet-voice-pending-v1:a',JSON.stringify({commandId:id}));
 const client=new VoiceClient('a',store,async()=>Response.json({status:'pending'}),()=>id);
 assert.equal((await client.lookup()).status,'pending');await assert.rejects(client.restore('c3ludGhldGlj','audio/wav'),/pending/i);await assert.rejects(client.submit('c3ludGhldGlj','audio/wav'),/pending/i);
});
test('not_found preserves the report identity and restored audio cannot create a new reward command',async()=>{
 const store=storage();store.setItem('pokepet-voice-pending-v1:a',JSON.stringify({commandId:id}));let body='';
 const client=new VoiceClient('a',store,async(_url,init)=>{if(!init?.body)return Response.json({status:'not_found'});body=String(init.body);return Response.json({points:0,snapshot:{version:2},duplicate:false,transcript:'Test',reason:'No activity'});},()=> '22222222-2222-4222-8222-222222222222');
 await client.lookup();assert.equal(client.pending()?.commandId,id);await client.restore('c3ludGhldGlj','audio/wav');assert.equal(JSON.parse(body).commandId,id);
});
test('typed fallback retries the same text and persists no raw report',async()=>{
 const store=storage(),bodies:string[]=[];let count=0;
 const client=new VoiceClient('a',store,async(_url,init)=>{bodies.push(String(init?.body));if(count++===0)throw Error('offline');return Response.json({points:5,snapshot:{version:3},reason:'Play',transcript:null,duplicate:true});},()=>id);
 await assert.rejects(client.submitText('We played together.'));
 assert.equal([...store.data.values()].join(''),JSON.stringify({commandId:id}));await client.retry();assert.equal(bodies[0],bodies[1]);assert.equal(JSON.parse(bodies[0]).text,'We played together.');
});
