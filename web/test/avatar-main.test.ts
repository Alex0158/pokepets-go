import test from 'node:test';
import assert from 'node:assert/strict';
import { randomUUID } from 'node:crypto';
import sharp from 'sharp';
import { createAvatarHandler } from '../src/server/avatar/http.ts';
import { AvatarJobs } from '../avatar-lab/service/jobs.mjs';
import { fixtureProvider, syntheticInput } from '../avatar-lab/service/fixture-provider.mjs';

const origin='http://127.0.0.1:4194';
const request=(path:string,method='GET',value?:unknown,cookie='player-a',extra:Record<string,string>={})=>new Request(origin+path,{method,headers:{Host:'127.0.0.1:4194',Origin:origin,'Content-Type':'application/json',Cookie:`pokepet_session=${cookie}`,...extra},...(value?{body:JSON.stringify(value)}:{})});
const input=async(subject='owner',requestId=randomUUID())=>({requestId,subject,mimeType:'image/png',imageBase64:(await syntheticInput(subject)).toString('base64'),inputPolicy:'synthetic-only'});
function setup(mode='fixture',personalPhotos=false) {
  let calls=0;
  const jobs=new AvatarJobs({provider:async args=>{calls++;return fixtureProvider(args);},mode,allowedInputPolicies:personalPhotos&&mode==='openai'?['synthetic-only','personal-photo']:['synthetic-only']});
  const handler=createAvatarHandler({jobs,mode,personalPhotos,resolvePlayer:async req=>{
    const c=req.headers.get('cookie');if(c==='pokepet_session=player-a')return 'a';if(c==='pokepet_session=player-b')return 'b';return null;
  }});
  return {jobs,handler,calls:()=>calls};
}
async function done(handler:ReturnType<typeof createAvatarHandler>,id:string) {
  for(let n=0;n<100;n++){const r=await handler(request(`/api/avatars/jobs/${id}`));const j=await r.json();if(!['queued','running'].includes(j.status))return j;await new Promise(r=>setTimeout(r,10));}throw Error('Job timeout');
}

test('same-origin jobs use main session identity and private same-origin output descriptors',async()=>{
  const s=setup();
  try {
    assert.equal((await s.handler(request('/api/avatars/config','GET',undefined,'invalid'))).status,401);
    assert.equal((await s.handler(request('/api/avatars/jobs','POST',await input(),'player-a',{Origin:'https://foreign.invalid'}))).status,403);
    assert.equal((await s.handler(request('/api/avatars/jobs','POST',{...await input(),playerId:'b'}))).status,400);
    const body=await input('owner'),created=await s.handler(request('/api/avatars/jobs','POST',body));assert.equal(created.status,202);const a=await created.json();
    assert.equal((await (await s.handler(request('/api/avatars/jobs','POST',body))).json()).jobId,a.jobId);
    assert.equal((await s.handler(request(`/api/avatars/jobs/${a.jobId}`,'GET',undefined,'player-b'))).status,404);
    const job=await done(s.handler,a.jobId);assert.equal(job.status,'succeeded');assert.equal(job.asset.subject,'owner');assert.equal(s.calls(),1);
    assert.equal(job.asset.imageUrl,`/api/avatars/assets/${a.jobId}/image`);
    const manifest=await s.handler(request(job.asset.manifestUrl));assert.equal(manifest.status,200);assert.equal((await manifest.json()).sheet,job.asset.imageUrl);
    assert.equal((await s.handler(request(job.asset.imageUrl))).status,200);
    assert.equal((await s.handler(request(job.asset.imageUrl,'GET',undefined,'player-b'))).status,404);
    assert.equal((await s.handler(request(`/api/avatars/jobs/${a.jobId}`,'DELETE'))).status,200);
    assert.equal((await s.handler(request(job.asset.imageUrl))).status,404);
  }finally{s.jobs.close();}
});

test('personal-photo policy, explicit consent and disabled mode reject before provider work',async()=>{
  const s=setup();
  try {
    const body={...await input('pet'),inputPolicy:'personal-photo',consent:{authorizedImage:true,sendToOpenAI:true,temporaryStorage:true}};
    assert.equal((await s.handler(request('/api/avatars/jobs','POST',body))).status,409);assert.equal(s.calls(),0);
  }finally{s.jobs.close();}
  const disabled=setup('disabled');try{const cfg=await (await disabled.handler(request('/api/avatars/config'))).json();assert.equal(cfg.available,false);assert.equal((await disabled.handler(request('/api/avatars/jobs','POST',await input()))).status,503);assert.equal(disabled.calls(),0);}finally{disabled.jobs.close();}
  const enabled=setup('openai',true);
  try {
    const b={...await input('pet'),inputPolicy:'personal-photo'};
    assert.equal((await enabled.handler(request('/api/avatars/jobs','POST',b))).status,400);assert.equal(enabled.calls(),0);
    const acknowledged={...b,consent:{authorizedImage:true,sendToOpenAI:true,temporaryStorage:true}};
    const r=await enabled.handler(request('/api/avatars/jobs','POST',acknowledged));assert.equal(r.status,202);
    const j=await done(enabled.handler,(await r.json()).jobId);assert.equal(j.asset.provenance.inputPolicy,'personal-photo');assert.equal(j.asset.subject,'pet');
    // Bytes are an original synthetic PNG; injected fixture provider makes no external request.
  }finally{enabled.jobs.close();}
});
test('oversized hosted-compatible uploads are rejected before decoding or provider work',async()=>{
  const s=setup();try {
    const body={requestId:randomUUID(),subject:'owner',mimeType:'image/png',imageBase64:'A'.repeat(3*1024*1024/3*4+4),inputPolicy:'synthetic-only'};
    assert.equal((await s.handler(request('/api/avatars/jobs','POST',body))).status,413);assert.equal(s.calls(),0);
    const config=await (await s.handler(request('/api/avatars/config'))).json();assert.equal(config.maxInputBytes,3*1024*1024);
  }finally{s.jobs.close();}
});
