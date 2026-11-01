import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { randomUUID } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { syntheticInput } from '../../../avatar-lab/service/fixture-provider.mjs';
const cwd=fileURLToPath(new URL('../../../',import.meta.url));
const database=`pokepet_local_avatar_next_${Date.now()}`;
const children:ReturnType<typeof spawn>[]=[];
async function stop(child:ReturnType<typeof spawn>){
  if(child.exitCode!==null||child.signalCode!==null)return;
  child.kill('SIGTERM');await new Promise<void>((resolve,reject)=>{const timer=setTimeout(()=>reject(Error('Owned Next process did not exit')),4000);child.once('exit',()=>{clearTimeout(timer);resolve();});});
}
async function start(port:number){
  const child=spawn(process.execPath,['node_modules/next/dist/bin/next','start','--hostname','127.0.0.1','--port',String(port)],{cwd,env:{...process.env,POKEPET_RUNTIME_MODE:'local',POKEPET_DATABASE_MODE:'local',POKEPET_LOCAL_MONGODB_URI:'mongodb://127.0.0.1:27030',POKEPET_LOCAL_DATABASE:database,POKEPET_AVATAR_STORAGE:'mongo',POKEPET_AVATAR_PROVIDER:'fixture',POKEPET_AVATAR_MAX_REQUESTS:'2'},stdio:'ignore'});
  children.push(child);const origin=`http://127.0.0.1:${port}`;
  for(let i=0;i<80;i++){if(child.exitCode!==null)throw Error('Owned Next process failed to start');try{const r=await fetch(origin+'/api/health');if(r.ok)return {child,origin};}catch{}await new Promise(r=>setTimeout(r,100));}throw Error('Owned Next process unavailable');
}
async function request(origin:string,path:string,cookie='',method='GET',body?:unknown){return fetch(origin+path,{method,headers:{Origin:origin,'Content-Type':'application/json',...(cookie?{Cookie:cookie}:{})},...(body?{body:JSON.stringify(body)}:{})});}
try {
  const a=await start(4197),b=await start(4198);
  const sa=await request(a.origin,'/api/session','','POST',{displayName:'Avatar Next multi A'}),sb=await request(b.origin,'/api/session','','POST',{displayName:'Avatar Next multi B'});
  assert.equal(sa.status,200);assert.equal(sb.status,200);const ca=sa.headers.get('set-cookie')!.split(';')[0],cb=sb.headers.get('set-cookie')!.split(';')[0];
  assert.equal((await request(a.origin,'/api/avatars/config')).status,401);
  const config=await(await request(a.origin,'/api/avatars/config',ca)).json();assert.equal(config.storage,'mongo');assert.equal(config.submission,'request-bound');assert.equal(config.maxInputBytes,3*1024*1024);
  const input={requestId:randomUUID(),subject:'owner',mimeType:'image/png',imageBase64:(await syntheticInput('owner')).toString('base64'),inputPolicy:'synthetic-only'};
  const created=await request(a.origin,'/api/avatars/jobs',ca,'POST',input);assert.equal(created.status,202);const job=await created.json();assert.equal(job.status,'succeeded',job.error??'fixture generation');
  await stop(a.child);
  assert.equal((await(await request(b.origin,`/api/avatars/jobs/${job.jobId}`,ca)).json()).status,'succeeded');
  const manifest=await request(b.origin,job.asset.manifestUrl,ca);assert.equal(manifest.status,200);assert.equal((await manifest.json()).sheet,job.asset.imageUrl);
  const image=await request(b.origin,job.asset.imageUrl,ca);assert.equal(image.status,200);assert.equal(image.headers.get('cache-control'),'private, no-store');assert.ok((await image.arrayBuffer()).byteLength>100);
  assert.equal((await request(b.origin,job.asset.imageUrl,cb)).status,404);
  assert.equal((await(await request(b.origin,'/api/avatars/jobs',ca,'POST',input)).json()).jobId,job.jobId);
  assert.equal((await(await request(b.origin,'/api/avatars/config',ca)).json()).liveRequestsRemaining,1);
  assert.equal((await request(b.origin,`/api/avatars/jobs/${job.jobId}`,ca,'DELETE')).status,200);
  assert.equal((await request(b.origin,job.asset.imageUrl,ca)).status,404);
  console.log(`Next production Mongo avatar proof passed across independent processes and after A exited. Real main sessions, private fixture asset/manifest, exact retry/shared budget and cancellation. Zero paid calls/Atlas access. Retained local DB: ${database}.`);
}finally{const results=await Promise.allSettled(children.map(stop));if(results.some(r=>r.status==='rejected'))throw Error('An owned preview did not exit cleanly');}
