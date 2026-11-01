import assert from 'node:assert/strict';
import { randomUUID } from 'node:crypto';
import { spawn } from 'node:child_process';
import { setTimeout as delay } from 'node:timers/promises';
import { fileURLToPath } from 'node:url';

const uri=process.env.POKEPET_TEST_MONGODB_URI;
if(!uri||!/^mongodb:\/\/127\.0\.0\.1:\d+$/.test(uri))throw Error('Explicit isolated localhost MongoDB required');
const port=32000+Math.floor(Math.random()*10000),origin=`http://127.0.0.1:${port}`;
const database=`pokepet_local_http_progression_${Date.now()}_${randomUUID().slice(0,8)}`;
const cwd=fileURLToPath(new URL('..',import.meta.url));
const child=spawn(process.execPath,['node_modules/next/dist/bin/next','start','--hostname','127.0.0.1','--port',String(port)],{cwd,env:{...process.env,POKEPET_LOCAL_MONGODB_URI:uri,POKEPET_LOCAL_DATABASE:database},stdio:'ignore'});
try {
  let ready=false;
  for(let i=0;i<100;i++) {
    if(child.exitCode!==null)throw Error('Owned Next server exited before readiness');
    try { if((await fetch(`${origin}/api/health`)).ok){ready=true;break;} }catch{}
    await delay(100);
  }
  if(!ready)throw Error('Owned Next server did not become ready');
  const post=(path:string,value:unknown,cookie?:string)=>fetch(`${origin}${path}`,{method:'POST',headers:{origin,'content-type':'application/json',...(cookie?{cookie}:{})},body:JSON.stringify(value)});
  const sess=await post('/api/session',{displayName:'Progression demo'});assert.equal(sess.status,200);
  const cookie=sess.headers.get('set-cookie')?.split(';')[0];assert.ok(cookie);
  const command={commandId:randomUUID(),missionId:'sniff-safari',confirmed:true};
  const completion=await post('/api/progression/mission',command,cookie);assert.equal(completion.status,200);assert.equal((await completion.json()).snapshot.points,20);
  const retry=await post('/api/progression/mission',command,cookie);assert.equal((await retry.json()).duplicate,true);
  const upgrade=await post('/api/progression/upgrade',{commandId:randomUUID(),stat:'attack'},cookie);assert.equal((await upgrade.json()).snapshot.points,15);
  const loaded=await fetch(`${origin}/api/progression`,{headers:{cookie}});assert.equal((await loaded.json()).stats.attack,11);
  const anonymous=await fetch(`${origin}/api/progression`);assert.equal(anonymous.status,401);
  console.log(`Local Next HTTP progression smoke passed; isolated database retained: ${database}`);
} finally {
  child.kill('SIGTERM');
}
