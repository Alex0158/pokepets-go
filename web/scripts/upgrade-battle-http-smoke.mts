import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { randomUUID } from 'node:crypto';
import { setTimeout as pause } from 'node:timers/promises';
import { fileURLToPath } from 'node:url';

// Exercise real Next.js HTTP routes and MongoDB; retain credentials only in memory.
const uri=process.env.POKEPET_TEST_MONGODB_URI;
if(!uri||!/^mongodb:\/\/127\.0\.0\.1:\d+$/.test(uri))throw Error('An explicit isolated local replica set is required');
const port=33000+Math.floor(Math.random()*10000),origin=`http://127.0.0.1:${port}`;
const database=`pokepet_local_upgrade_http_${Date.now()}_${randomUUID().slice(0,8)}`;
const cwd=fileURLToPath(new URL('..',import.meta.url));
let server:ReturnType<typeof spawn>|undefined;
async function start() {
  let log='';
  server=spawn(process.execPath,['node_modules/next/dist/bin/next','start','--hostname','127.0.0.1','--port',String(port)],{cwd,env:{...process.env,POKEPET_LOCAL_MONGODB_URI:uri,POKEPET_LOCAL_DATABASE:database},stdio:['ignore','pipe','pipe']});
  server.stdout?.on('data',chunk=>{log+=chunk;});server.stderr?.on('data',chunk=>{log+=chunk;});
  for(let i=0;i<100;i++) {
    if(server.exitCode!==null)throw Error(`Owned Next server exited: ${log}`);
    if(log.includes('Ready in')) {assert.equal((await fetch(`${origin}/api/health`)).status,200);return;}
    await pause(100);
  }
  throw Error('Owned Next server readiness timed out');
}
async function stop() {
  if(!server||server.exitCode!==null)return;
  const child=server,closed=new Promise<void>(resolve=>child.once('exit',()=>resolve()));
  child.kill('SIGTERM');await closed;server=undefined;
}
class SessionJar {
  cookie='';
  async request(method:string,path:string,value?:unknown,expected=200) {
    const res=await fetch(`${origin}${path}`,{method,headers:{origin,'content-type':'application/json',...(this.cookie?{cookie:this.cookie}:{})},...(value===undefined?{}:{body:JSON.stringify(value)})});
    const cookie=res.headers.get('set-cookie');if(cookie)this.cookie=cookie.split(';')[0];
    const body=await res.json();assert.equal(res.status,expected,expected===200?JSON.stringify(body):'Unexpected HTTP status');
    assert.equal(res.headers.get('cache-control'),'no-store');return body;
  }
}
try {
  await start();
  const a=new SessionJar(),b=new SessionJar(),other=new SessionJar();
  const pa=await a.request('POST','/api/session',{displayName:'Upgraded battle A'});
  const pb=await b.request('POST','/api/session',{displayName:'Upgraded battle B'});
  await other.request('POST','/api/session',{displayName:'Unauthorized observer'});
  assert.notEqual(pa.player._id,pb.player._id);
  const create=()=>a.request('POST','/api/matches',{commandId:randomUUID(),petId:pa.pet._id,opponentPlayerId:pb.player._id});
  const waiting=await create(),id=waiting.snapshot.matchId;
  const mission=(jar:SessionJar)=>jar.request('POST','/api/progression/mission',{commandId:randomUUID(),missionId:'sniff-safari',confirmed:true});
  await mission(a);await mission(b);
  const attackUpgrade={commandId:randomUUID(),stat:'attack'};
  const upgraded=await a.request('POST','/api/progression/upgrade',attackUpgrade);
  await b.request('POST','/api/progression/upgrade',{commandId:randomUUID(),stat:'health'});
  const join={commandId:randomUUID(),petId:pb.pet._id,expectedVersion:0};
  const joined=await Promise.all([b.request('POST',`/api/matches/${id}/join`,join),b.request('POST',`/api/matches/${id}/join`,join)]);
  assert.deepEqual(joined[0].receipt,joined[1].receipt);
  assert.equal(joined[0].snapshot.participants[0].stats.attack,11);assert.equal(joined[0].snapshot.participants[1].hp,31);
  assert.equal(joined[0].snapshot.participants[0].progressionVersion,upgraded.snapshot.version+1);
  await other.request('GET',`/api/matches/${id}`,undefined,403);
  await a.request('POST','/api/progression/upgrade',{commandId:randomUUID(),stat:'attack'});
  const beforeRetry=await a.request('GET','/api/progression');
  const repeated=await b.request('POST',`/api/matches/${id}/join`,join);
  assert.equal(repeated.duplicate,true);assert.equal(repeated.snapshot.participants[0].stats.attack,11);
  const move={commandId:randomUUID(),expectedVersion:1,move:'attack',targetPetId:pb.pet._id};
  const moved=await a.request('POST',`/api/matches/${id}/moves`,move);
  assert.equal(moved.snapshot.participants[1].hp,22);
  const seenA=await a.request('GET',`/api/matches/${id}`),seenB=await b.request('GET',`/api/matches/${id}`);
  assert.deepEqual(seenA,seenB);
  await stop();await start();
  assert.deepEqual(await a.request('GET','/api/progression'),beforeRetry);
  assert.deepEqual(await b.request('GET',`/api/matches/${id}`),seenB);
  const retryAfterRestart=await b.request('POST',`/api/matches/${id}/join`,join);
  assert.deepEqual(retryAfterRestart.receipt,joined[0].receipt);assert.equal(retryAfterRestart.duplicate,true);
  assert.deepEqual(await a.request('GET','/api/progression'),beforeRetry);
  const retryUpgrade=await a.request('POST','/api/progression/upgrade',attackUpgrade);
  assert.deepEqual(retryUpgrade.receipt,upgraded.receipt);assert.equal(retryUpgrade.snapshot.points,10);
  const retryMove=await a.request('POST',`/api/matches/${id}/moves`,move);
  assert.equal(retryMove.duplicate,true);assert.equal(retryMove.snapshot.participants[1].hp,22);
  const next=await create();const nextStarted=await b.request('POST',`/api/matches/${next.snapshot.matchId}/join`,{...join,commandId:randomUUID()});
  assert.equal(nextStarted.snapshot.participants[0].stats.attack,12);
  assert.equal((await a.request('GET','/api/progression')).points,10);
  console.log(`PASS: mission → upgrade → activation snapshots both players → immutable active battle → two-session shared HP → real Next restart/retry → next match gets newer upgrade. Local DB retained: ${database}`);
  console.log('This is HTTP plus real MongoDB, not a two-browser game UI or Atlas test.');
}finally {await stop();}
