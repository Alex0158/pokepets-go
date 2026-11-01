import test from 'node:test';
import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { randomUUID } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { syntheticInput } from '../avatar-lab/service/fixture-provider.mjs';
const enabled=process.env.POKEPET_TEST_AVATAR_MONGO==='1';
const worker=fileURLToPath(new URL('../src/server/avatar/verify-mongo-worker.mts',import.meta.url));
function call(database:string,command:unknown):Promise<any>{return new Promise((resolve,reject)=>{
  const child=spawn(process.execPath,[worker,database],{env:{NODE_ENV:'test',NODE_NO_WARNINGS:'1'},stdio:['pipe','pipe','pipe']});
  let out='';child.stdout.on('data',b=>out+=b);child.stderr.resume();
  child.once('error',reject);child.once('exit',code=>{try{if(code!==0)throw Error('QA worker failed');resolve(JSON.parse(out));}catch(e){reject(e);}});
  child.stdin.end(JSON.stringify(command));
});}
test('independent processes share one generation, private assets, budget and cancellation without source storage',{skip:!enabled},async()=>{
  const db=`pokepet_local_avatar_multi_${Date.now()}_${randomUUID().slice(0,8)}`;
  const input={requestId:randomUUID(),subject:'owner',mimeType:'image/png',imageBase64:(await syntheticInput('owner')).toString('base64'),inputPolicy:'synthetic-only'};
  const command={action:'submit',owner:'qa-owner-a',input};
  const [a,b]=await Promise.all([call(db,command),call(db,command)]);
  assert.equal(a.ok,true);assert.equal(b.ok,true);assert.equal(a.value.jobId,b.value.jobId);assert.equal(a.providerCalls+b.providerCalls,1);
  const id=a.value.jobId,read=await call(db,{action:'status',owner:'qa-owner-a',id});
  assert.equal(read.value.status,'succeeded');assert.equal(read.remaining,1);
  assert.equal(read.ttlSeconds,0);assert.equal(read.logicalExpiryMs,300000);
  assert.equal(a.containsSource||b.containsSource,false);
  for(const key of ['input','bytes','imageBase64','mimeType'])assert.equal(read.storedKeys.includes(key),false,key);
  assert.equal((await call(db,{action:'asset',owner:'qa-owner-a',id})).value.sha256.length,64);
  assert.equal((await call(db,{action:'asset',owner:'qa-owner-b',id})).code,'not_found');
  assert.equal((await call(db,{...command,input:{...input,subject:'pet'}})).code,'request_conflict');
  assert.equal((await call(db,{action:'cancel',owner:'qa-owner-a',id})).value.status,'canceled');
  assert.equal((await call(db,{action:'asset',owner:'qa-owner-a',id})).code,'not_found');
  const second=await call(db,{...command,input:{...input,requestId:randomUUID()}});assert.equal(second.value.status,'succeeded');assert.equal(second.remaining,0);
  assert.equal((await call(db,{...command,input:{...input,requestId:randomUUID()}})).code,'request_budget_reached');
  assert.equal((await call(db,command)).providerCalls,0);
  assert.equal((await call(db,{action:'status',owner:'qa-owner-a',id:second.value.jobId,clockOffset:300001})).code,'not_found');
});
test('failed and abandoned request receipts cannot automatically regenerate',{skip:!enabled},async()=>{
  const db=`pokepet_local_avatar_multi_${Date.now()}_${randomUUID().slice(0,8)}`;
  const input={requestId:randomUUID(),subject:'owner',mimeType:'image/png',imageBase64:(await syntheticInput('owner')).toString('base64'),inputPolicy:'synthetic-only'};
  const failed=await call(db,{action:'submit',owner:'qa-owner',input,provider:'fail'});assert.equal(failed.value.status,'failed');assert.equal(failed.providerCalls,1);
  const retry=await call(db,{action:'submit',owner:'qa-owner',input});assert.equal(retry.value.status,'failed');assert.equal(retry.providerCalls,0);
  const abandoned={...input,requestId:randomUUID()},id=randomUUID();
  const status=await call(db,{action:'seed-abandoned',owner:'qa-owner',input:abandoned,id});assert.equal(status.value.status,'failed');assert.equal(status.value.error,'generation_timeout');
  assert.equal((await call(db,{action:'submit',owner:'qa-owner',input:abandoned})).providerCalls,0);
  const expired={...input,requestId:randomUUID()};
  await call(db,{action:'seed-expired-claim',owner:'qa-owner',input:expired});
  const replay=await call(db,{action:'submit',owner:'qa-owner',input:expired});assert.equal(replay.code,'request_expired');assert.equal(replay.providerCalls,0);
});
test('canceling in another process prevents a late generation from publishing',{skip:!enabled},async()=>{
  const db=`pokepet_local_avatar_multi_${Date.now()}_${randomUUID().slice(0,8)}`;
  const input={requestId:randomUUID(),subject:'owner',mimeType:'image/png',imageBase64:(await syntheticInput('owner')).toString('base64'),inputPolicy:'synthetic-only'};
  const command={action:'submit',owner:'qa-owner',input,provider:'slow'},pending=call(db,command);
  let id:string|undefined;
  for(let n=0;n<10&&!id;n++){await new Promise(r=>setTimeout(r,80));id=(await call(db,{action:'lookup',owner:'qa-owner',input})).value?.jobId;}
  assert.ok(id);assert.equal((await call(db,{action:'cancel',owner:'qa-owner',id})).value.status,'canceled');
  const ended=await pending;assert.equal(ended.value.status,'canceled');assert.equal(ended.providerCalls,1);
  assert.equal((await call(db,{action:'asset',owner:'qa-owner',id})).code,'not_found');
});
