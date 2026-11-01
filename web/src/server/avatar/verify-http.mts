import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { randomUUID } from 'node:crypto';
import { syntheticInput } from '../../../avatar-lab/service/fixture-provider.mjs';
// Requires a coordinated existing Next build. Owns only the child process and
// retained isolated local test data; no OpenAI call, secret read, or DB deletion.
const cwd=fileURLToPath(new URL('../../../',import.meta.url));
const origin='http://127.0.0.1:4197';
const configOnly=process.argv.includes('--openai-config-only');
const child=spawn(process.execPath,['node_modules/next/dist/bin/next','start','--hostname','127.0.0.1','--port','4197'],{cwd,env:{...process.env,POKEPET_RUNTIME_MODE:'local',POKEPET_DATABASE_MODE:'local',POKEPET_LOCAL_MONGODB_URI:'mongodb://127.0.0.1:27030',POKEPET_LOCAL_DATABASE:'pokepet_local_avatar_main_20261101',POKEPET_AVATAR_STORAGE:'memory',POKEPET_AVATAR_PROVIDER:configOnly?'openai':'fixture',POKEPET_AVATAR_MAX_REQUESTS:'0'},stdio:['ignore','pipe','pipe']});
let output='';child.stdout?.on('data',b=>{output+=b;});child.stderr?.on('data',b=>{output+=b;});
type Result={status:number;cookie?:string;value:any};
async function request(path:string,method='GET',body?:unknown,cookie='',foreign=false):Promise<Result> {
  const res=await fetch(origin+path,{method,headers:{Origin:foreign?'https://foreign.invalid':origin,'Content-Type':'application/json',...(cookie?{Cookie:cookie}:{})},...(body?{body:JSON.stringify(body)}:{})});
  return {status:res.status,cookie:res.headers.get('set-cookie')?.split(';')[0],value:res.headers.get('content-type')?.includes('json')?await res.json():new Uint8Array(await res.arrayBuffer())};
}
try {
  let ready=false;
  for(let i=0;i<80;i++){if(child.exitCode!==null)throw Error('Owned Next preview failed to start');try{await fetch(origin+'/api/health');ready=true;break;}catch{}await new Promise(r=>setTimeout(r,100));}
  assert.equal(ready,true,'owned Next preview ready');
  assert.equal((await request('/api/avatars/config')).status,401);
  const a=await request('/api/session','POST',{displayName:'Avatar seam QA A'}),b=await request('/api/session','POST',{displayName:'Avatar seam QA B'});assert.equal(a.status,200);assert.equal(b.status,200);assert.ok(a.cookie&&b.cookie);assert.notEqual(a.cookie,b.cookie);
  const config=await request('/api/avatars/config','GET',undefined,a.cookie);assert.equal(config.status,200,JSON.stringify(config.value));assert.equal(config.value.provider,configOnly?'openai':'fixture');assert.equal(config.value.personalPhotos,configOnly);
  if(configOnly){console.log('OpenAI main config proof passed with a real session and zero request allowance. No provider request made.');process.exitCode=0;}
  else {
  const requestBody={requestId:randomUUID(),subject:'owner',mimeType:'image/png',imageBase64:(await syntheticInput('owner')).toString('base64'),inputPolicy:'synthetic-only'};
  assert.equal((await request('/api/avatars/jobs','POST',requestBody,a.cookie,true)).status,403);
  const created=await request('/api/avatars/jobs','POST',requestBody,a.cookie);assert.equal(created.status,202);const id=created.value.jobId;
  assert.equal((await request('/api/avatars/jobs','POST',requestBody,a.cookie)).value.jobId,id);
  assert.equal((await request(`/api/avatars/jobs/${id}`,'GET',undefined,b.cookie)).status,404);
  let job:any;
  for(let i=0;i<100;i++){job=(await request(`/api/avatars/jobs/${id}`,'GET',undefined,a.cookie)).value;if(job.status!=='queued'&&job.status!=='running')break;await new Promise(r=>setTimeout(r,50));}
  assert.equal(job.status,'succeeded');assert.equal(job.asset.subject,'owner');
  const manifest=await request(job.asset.manifestUrl,'GET',undefined,a.cookie);assert.equal(manifest.status,200);assert.equal(manifest.value.sheet,job.asset.imageUrl);
  const image=await request(job.asset.imageUrl,'GET',undefined,a.cookie);assert.equal(image.status,200);assert.ok(image.value.length>100);
  assert.equal((await request(job.asset.imageUrl,'GET',undefined,b.cookie)).status,404);
  assert.equal((await request(`/api/avatars/jobs/${id}`,'DELETE',undefined,a.cookie)).status,200);
  assert.equal((await request(job.asset.imageUrl,'GET',undefined,a.cookie)).status,404);
  console.log('Next same-origin avatar HTTP proof passed: real main sessions, separate cookies, fixture job, retry, origin rejection, private manifest/image across route bundles and cancellation. No paid API calls. Retained DB: pokepet_local_avatar_main_20261101.');
  }
} finally {
  child.kill('SIGTERM');
  await new Promise<void>(resolve=>{if(child.exitCode!==null){resolve();return;}child.once('exit',()=>resolve());setTimeout(resolve,3000).unref();});
}
