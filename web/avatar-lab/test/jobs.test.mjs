import test from 'node:test';
import assert from 'node:assert/strict';
import { randomUUID } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import sharp from 'sharp';
import { AvatarJobs, JobError } from '../service/jobs.mjs';

const image = await sharp({create:{width:32,height:32,channels:4,background:'#348a70'}}).png().toBuffer();
const sheet = await readFile(new URL('../assets/sample-puppy-sheet.png', import.meta.url));
const manifest = JSON.parse(await readFile(new URL('../manifest.json', import.meta.url)));
const input = (subject = 'owner', requestId = randomUUID()) => ({requestId,subject,mimeType:'image/png',imageBase64:image.toString('base64'),inputPolicy:'synthetic-only'});
const output = subject => ({bytes:Buffer.from(sheet),manifest:structuredClone(manifest),provenance:{provider:'fixture',inputConditioned:false,subject}});
const tick = () => new Promise(resolve => setImmediate(resolve));
async function terminal(service, owner, id) { for(let n=0;n<100;n++){await new Promise(resolve=>setTimeout(resolve,5));const j=service.status(owner,id);if(['succeeded','failed','canceled'].includes(j.status))return j;} throw Error('job did not finish'); }

test('separate subjects are routed, private, validated, and exact retries cannot pay twice', async () => {
  let calls=0;const captured=[];
  const jobs=new AvatarJobs({provider:async ({subject,bytes})=>{calls++;captured.push(bytes);return output(subject);}});
  const a=input('owner'),b=input('pet');
  const owner=await jobs.submit('session-a',a),pet=await jobs.submit('session-a',b);
  assert.notEqual(owner.jobId,pet.jobId);
  assert.equal((await jobs.submit('session-a',a)).jobId,owner.jobId);
  await assert.rejects(jobs.submit('session-a',{...a,subject:'pet'}),e=>e.code==='request_conflict');
  assert.throws(()=>jobs.status('session-b',owner.jobId),e=>e.status===404);
  const oa=await terminal(jobs,'session-a',owner.jobId),pa=await terminal(jobs,'session-a',pet.jobId);
  assert.equal(oa.status,'succeeded');assert.equal(pa.status,'succeeded');assert.equal(calls,2);
  assert.equal(oa.asset.subject,'owner');assert.equal(pa.asset.subject,'pet');
  assert.equal(oa.asset.provenance.inputConditioned,false);
  assert.throws(()=>jobs.asset('session-b',oa.asset.assetId),e=>e.status===404);
  assert.equal(jobs.asset('session-a',oa.asset.assetId).manifest.sheet,`assets/job-${oa.asset.assetId}.png`);
  assert.ok(captured.every(b=>b.every(v=>v===0)),'raw bytes are cleared after terminal status');
  assert.equal(JSON.stringify(oa).includes(a.imageBase64),false);
  jobs.close();
});

test('bad input is rejected before provider work; original caller bytes are untouched', async () => {
  let calls=0;const jobs=new AvatarJobs({provider:async ()=>{calls++;return output('owner');}});
  for(const change of [{subject:'other'},{inputPolicy:'real-photo'},{mimeType:'image/svg+xml'},{imageBase64:'not base64'},{imageBase64:Buffer.from('not PNG').toString('base64')},{imageBase64:Buffer.alloc(4*1024*1024+1).toString('base64')}]) {
    await assert.rejects(jobs.submit('a',{...input(),...change}),JobError);
  }
  assert.equal(calls,0);assert.equal(image.subarray(1,4).toString(),'PNG');jobs.close();
});

test('timeouts/cancel suppress late output and bounded queue rejects extra work', async () => {
  const resolvers=[];const jobs=new AvatarJobs({timeoutMs:25,maxJobs:3,maxPerSession:3,concurrency:1,provider:({bytes})=>new Promise(resolve=>resolvers.push({resolve,bytes}))});
  const a=await jobs.submit('a',input()),b=await jobs.submit('a',input()),c=await jobs.submit('a',input());
  await assert.rejects(jobs.submit('a',input()),e=>e.code==='capacity_reached');
  await tick();assert.equal(jobs.status('a',a.jobId).status,'running');
  jobs.cancel('a',b.jobId);assert.equal(jobs.status('a',b.jobId).status,'canceled');
  await new Promise(resolve=>setTimeout(resolve,40));
  assert.equal(jobs.status('a',a.jobId).error,'generation_timeout');
  resolvers[0].resolve(output('owner'));await tick();assert.equal(jobs.status('a',a.jobId).status,'failed');
  assert.ok(resolvers[0].bytes.every(v=>v===0));jobs.cancel('a',c.jobId);jobs.close();
});

test('invalid outputs fail closed; expiry revokes results without durable persistence', async () => {
  let now=1000;
  const jobs=new AvatarJobs({clock:()=>now,ttlMs:100,provider:async ({subject})=>output(subject)});
  const j=await jobs.submit('a',input());const done=await terminal(jobs,'a',j.jobId);assert.equal(done.status,'succeeded');
  now+=101;assert.throws(()=>jobs.status('a',j.jobId),e=>e.status===404);assert.throws(()=>jobs.asset('a',done.asset.assetId),e=>e.status===404);jobs.close();
  const bad=new AvatarJobs({provider:async ()=>({...output('pet'),manifest:{...manifest,width:10}})});
  const failed=await terminal(bad,'a',(await bad.submit('a',input('pet'))).jobId);
  assert.equal(failed.status,'failed');assert.equal(failed.asset,undefined);bad.close();
});
