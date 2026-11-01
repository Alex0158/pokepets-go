import test from 'node:test';
import assert from 'node:assert/strict';
import { fork } from 'node:child_process';
import { randomUUID } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { syntheticInput } from '../avatar-lab/service/fixture-provider.mjs';
const enabled=process.env.POKEPET_TEST_AVATAR_MONGO==='1';
async function instance(name:string){
  const child=fork(fileURLToPath(new URL('../src/server/avatar/verify-mongo-http-worker.mts',import.meta.url)),[],{cwd:fileURLToPath(new URL('../',import.meta.url)),execArgv:[],env:{NODE_ENV:'test',NODE_NO_WARNINGS:'1',POKEPET_RUNTIME_MODE:'local',POKEPET_DATABASE_MODE:'local',POKEPET_LOCAL_MONGODB_URI:'mongodb://127.0.0.1:27030',POKEPET_LOCAL_DATABASE:name,POKEPET_AVATAR_STORAGE:'mongo',POKEPET_AVATAR_PROVIDER:'fixture',POKEPET_AVATAR_MAX_REQUESTS:'2'},stdio:['ignore','ignore','pipe','ipc']});
  child.stderr?.resume();
  const port=await new Promise<number>((resolve,reject)=>{child.once('message',m=>resolve((m as {port:number}).port));child.once('exit',()=>reject(Error('QA HTTP worker exited before ready')));child.once('error',reject);});
  return {origin:`http://127.0.0.1:${port}`,stop:async()=>{if(child.exitCode!==null)return;child.kill('SIGTERM');await new Promise<void>(resolve=>child.once('exit',()=>resolve()));}};
}
test('real main sessions and private avatar HTTP survive switching independent server processes',{skip:!enabled,timeout:20000},async()=>{
  const name=`pokepet_local_avatar_multi_http_${Date.now()}_${randomUUID().slice(0,8)}`;
  const a=await instance(name),b=await instance(name);
  async function request(origin:string,path:string,cookie='',method='GET',body?:unknown){return fetch(origin+path,{method,headers:{Origin:origin,'Content-Type':'application/json',...(cookie?{Cookie:cookie}:{})},...(body?{body:JSON.stringify(body)}:{})});}
  try {
    const sa=await request(a.origin,'/api/session','','POST',{displayName:'Avatar multi HTTP A'}),sb=await request(b.origin,'/api/session','','POST',{displayName:'Avatar multi HTTP B'});
    assert.equal(sa.status,200);assert.equal(sb.status,200);const ca=sa.headers.get('set-cookie')!.split(';')[0],cb=sb.headers.get('set-cookie')!.split(';')[0];
    const cfg=await(await request(a.origin,'/api/avatars/config',ca)).json();assert.equal(cfg.storage,'mongo');assert.equal(cfg.submission,'request-bound');assert.equal(cfg.maxInputBytes,3*1024*1024);
    const input={requestId:randomUUID(),subject:'owner',mimeType:'image/png',imageBase64:(await syntheticInput('owner')).toString('base64'),inputPolicy:'synthetic-only'};
    const created=await request(a.origin,'/api/avatars/jobs',ca,'POST',input);assert.equal(created.status,202);const job=await created.json();assert.equal(job.status,'succeeded');
    await a.stop();
    const read=await request(b.origin,`/api/avatars/jobs/${job.jobId}`,ca);assert.equal(read.status,200);assert.equal((await read.json()).status,'succeeded');
    const manifest=await request(b.origin,job.asset.manifestUrl,ca);assert.equal(manifest.status,200);assert.equal((await manifest.json()).sheet,job.asset.imageUrl);
    const image=await request(b.origin,job.asset.imageUrl,ca);assert.equal(image.status,200);assert.equal(image.headers.get('cache-control'),'private, no-store');assert.ok((await image.arrayBuffer()).byteLength>100);
    assert.equal((await request(b.origin,job.asset.imageUrl,cb)).status,404);
    assert.equal((await(await request(b.origin,'/api/avatars/jobs',ca,'POST',input)).json()).jobId,job.jobId);
    assert.equal((await(await request(b.origin,'/api/avatars/config',ca)).json()).liveRequestsRemaining,1);
    assert.equal((await request(b.origin,`/api/avatars/jobs/${job.jobId}`,ca,'DELETE')).status,200);
    assert.equal((await request(b.origin,job.asset.imageUrl,ca)).status,404);
  }finally{await a.stop();await b.stop();}
});
