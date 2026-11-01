import test from 'node:test';
import assert from 'node:assert/strict';
import { pendingWrite, prepareWrite, submitWrite } from '../src/features/community/client.ts';
test('uncertain Community writes retain exact IDs and payload across panel remount; success clears',async()=>{
 const payload={commandId:'same-id',caption:'Caption',mimeType:'image/png',imageBase64:'sensitive-image-memory-only',shareConsent:true};
 prepareWrite('a',{path:'/api/community/posts',payload});let first='';
 await assert.rejects(submitWrite('a',async(_path,init)=>{first=String(init?.body);throw Error('ack lost');}));
 assert.deepEqual(pendingWrite('a')?.payload,payload);assert.throws(()=>prepareWrite('a',{path:'/other',payload:{}}));
 await submitWrite('a',async(path,init)=>{assert.equal(path,'/api/community/posts');assert.equal(init?.body,first);return Response.json({postId:'saved'});});assert.equal(pendingWrite('a'),undefined);
});
test('definitive input errors release the pending write for correction',async()=>{
 prepareWrite('validation',{path:'/api/community/posts',payload:{}});
 await assert.rejects(submitWrite('validation',async()=>Response.json({error:'invalid_image'},{status:400})));
 assert.equal(pendingWrite('validation'),undefined);
});
