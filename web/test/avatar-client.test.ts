import test from 'node:test';
import assert from 'node:assert/strict';
import { AvatarClient, fileBase64, validateCharacterAsset } from '../src/client/avatar-client.ts';
import type { AvatarDescriptor, AvatarManifest } from '../src/client/avatar-client.ts';
const id='11111111-1111-4111-8111-111111111111';
const descriptor:AvatarDescriptor={assetId:id,subject:'owner',imageUrl:`/api/avatars/assets/${id}/image`,manifestUrl:`/api/avatars/assets/${id}/manifest`,expiresAt:new Date(Date.now()+60000).toISOString(),provenance:{provider:'fixture',inputPolicy:'synthetic-only'}};
const manifest:AvatarManifest={schemaVersion:1,sheet:descriptor.imageUrl,width:64,height:64,animations:Object.fromEntries(['idle','move','attack','hurt'].map(s=>[s,{fps:4,loop:s==='idle',frames:[{x:0,y:0,w:16,h:16}]}]))};
test('approved map callback contains only validated same-origin output, never raw input',()=>{
  const asset=validateCharacterAsset(descriptor,manifest,'owner');assert.equal(asset.manifest.sheet,descriptor.imageUrl);assert.equal(asset.expiresAt,descriptor.expiresAt);
  assert.throws(()=>validateCharacterAsset({...descriptor,subject:'pet'},manifest,'owner'));
  assert.throws(()=>validateCharacterAsset({...descriptor,imageUrl:'https://external.invalid/image.png'},manifest,'owner'));
  assert.throws(()=>validateCharacterAsset(descriptor,{...manifest,sheet:'data:image/png;base64,raw'},'owner'));
  assert.throws(()=>validateCharacterAsset({...descriptor,expiresAt:'2000-01-01'},manifest,'owner'));
});
test('ambiguous submission retries the exact in-memory request and never persists a photo',async()=>{
  const bodies:string[]=[];let fail=true;
  const client=new AvatarClient(async(path,init)=>{bodies.push(String(init?.body));if(fail){fail=false;throw Error('network');}return Response.json({jobId:id,subject:'owner',status:'queued'});});
  const body={requestId:id,subject:'owner' as const,mimeType:'image/png',imageBase64:'synthetic-only-test',inputPolicy:'synthetic-only' as const};
  await assert.rejects(client.submit(body));assert.equal(client.hasPending('owner'),true);
  const result=await client.retry('owner');assert.equal(result.jobId,id);assert.equal(bodies[0],bodies[1]);assert.equal(client.hasPending('owner'),false);
});
test('an untrusted manifest location is rejected before transport',async()=>{
  let calls=0;
  const client=new AvatarClient(async()=>{calls++;return Response.json(manifest);});
  await assert.rejects(client.resolve({jobId:id,subject:'owner',status:'succeeded',expiresAt:descriptor.expiresAt,asset:{...descriptor,manifestUrl:'https://external.invalid/manifest'}}));
  assert.equal(calls,0);
});
test('main upload limit fits a base64 JSON request under the hosted payload cap',async()=>{
  const bytes=3*1024*1024;
  const encoded=await fileBase64(new File([new Uint8Array(bytes)],'synthetic.png',{type:'image/png'}));
  const payload=JSON.stringify({requestId:id,subject:'owner',mimeType:'image/png',inputPolicy:'synthetic-only',imageBase64:encoded});
  assert.ok(Buffer.byteLength(payload)<4300000);
  await assert.rejects(fileBase64(new File([new Uint8Array(bytes+1)],'too-large.png',{type:'image/png'})));
});
test('transport is detached so browser fetch never receives the AvatarClient as its receiver',async()=>{
  let called=false;
  const client=new AvatarClient(function(this:unknown){assert.equal(this,undefined);called=true;return Promise.resolve(Response.json({available:false}));});
  assert.equal((await client.config()).available,false);assert.equal(called,true);
});
