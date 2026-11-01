import assert from 'node:assert/strict';
import { randomUUID } from 'node:crypto';
import { createLabServer } from '../server.mjs';
const server=createLabServer();
await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
const origin=`http://127.0.0.1:${server.address().port}`;
async function call(path,method='GET',value,jar='',extra={}) {
  const r=await fetch(origin+path,{method,headers:{Origin:origin,'Content-Type':'application/json',...(jar?{Cookie:jar}:{}),...extra},...(value?{body:JSON.stringify(value)}:{})});
  return {status:r.status,cookie:r.headers.get('set-cookie')?.split(';')[0],value:r.headers.get('content-type')?.includes('json')?await r.json():new Uint8Array(await r.arrayBuffer())};
}
try {
  const a=await call('/api/avatar-config'),b=await call('/api/avatar-config');assert.ok(a.cookie);assert.ok(b.cookie);assert.notEqual(a.cookie,b.cookie);
  const input=await (await fetch(origin+'/synthetic/owner.png')).arrayBuffer();
  const body={requestId:randomUUID(),subject:'owner',inputPolicy:'synthetic-only',mimeType:'image/png',imageBase64:Buffer.from(input).toString('base64')};
  const created=await call('/api/avatar-jobs','POST',body,a.cookie);assert.equal(created.status,202);const id=created.value.jobId;
  assert.equal((await call('/api/avatar-jobs','POST',body,a.cookie)).value.jobId,id);
  assert.equal((await call(`/api/avatar-jobs/${id}`,'GET',null,b.cookie)).status,404);
  assert.equal((await call('/api/avatar-jobs','POST',body,a.cookie,{Origin:'https://example.invalid'})).status,403);
  let done;for(let n=0;n<100;n++){done=await call(`/api/avatar-jobs/${id}`,'GET',null,a.cookie);if(done.value.status==='succeeded')break;await new Promise(r=>setTimeout(r,20));}
  assert.equal(done.value.status,'succeeded');assert.equal(done.value.asset.subject,'owner');
  const manifest=await call(done.value.asset.manifestUrl,'GET',null,a.cookie);assert.equal(manifest.status,200);
  assert.equal((await call('/'+manifest.value.sheet,'GET',null,a.cookie)).status,200);
  assert.equal((await call('/'+manifest.value.sheet,'GET',null,b.cookie)).status,404);
  assert.equal((await call(`/api/avatar-jobs/${id}`,'DELETE',null,a.cookie)).value.status,'canceled');
  assert.equal((await call('/'+manifest.value.sheet,'GET',null,a.cookie)).status,404);
  assert.equal((await call('/.env.local')).status,404);
  console.log('Local HTTP smoke passed: bootstrap, separate sessions, synthetic upload, retry, origin rejection, private validated asset and cancellation/revocation. Fixture provider only; zero live API calls.');
} finally {await new Promise(resolve=>server.close(resolve));}
