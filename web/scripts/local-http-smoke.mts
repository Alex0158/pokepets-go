import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { randomUUID } from 'node:crypto';
import { setTimeout as pause } from 'node:timers/promises';
import { fileURLToPath } from 'node:url';

// Real Next.js server + MongoDB, two independent cookie jars. No credentials are printed or saved.
const origin='http://127.0.0.1:3023';
const cwd=fileURLToPath(new URL('..',import.meta.url));
const next=fileURLToPath(new URL('../node_modules/next/dist/bin/next',import.meta.url));
let server:ReturnType<typeof spawn>|undefined;
async function start() {
  let output='';
  server=spawn(process.execPath,[next,'start','--hostname','127.0.0.1','--port','3023'],{cwd,env:process.env,stdio:['ignore','pipe','pipe']});
  const child=server;
  child.stdout?.on('data',chunk=>{output+=chunk;});child.stderr?.on('data',chunk=>{output+=chunk;});
  for(let i=0;i<80;i++) {
    if(child.exitCode!==null)throw Error(`Local Next.js failed to start: ${output}`);
    // Wait for this process's ready message; never test an unrelated server on an occupied port.
    if(output.includes('Ready in')) {
      assert.equal((await fetch(`${origin}/api/health`)).status,200);return;
    }
    await pause(100);
  }
  throw Error(`Local Next.js startup timed out: ${output}`);
}
async function stop() {
  if(!server||server.exitCode!==null)return;
  const child=server;
  const closed=new Promise<void>(resolve=>child.once('exit',()=>resolve()));
  child.kill('SIGTERM');await closed;server=undefined;
}
class BrowserSession {
  cookie='';
  async call(method:string,path:string,body?:unknown) {
    const res=await fetch(`${origin}${path}`,{method,headers:{origin,'Content-Type':'application/json',...(this.cookie?{cookie:this.cookie}:{})},...(body===undefined?{}:{body:JSON.stringify(body)})});
    const cookie=res.headers.get('set-cookie');if(cookie)this.cookie=cookie.split(';')[0];
    assert.equal(res.headers.get('cache-control'),'no-store');
    return {status:res.status,value:await res.json()};
  }
}
try {
  await start();
  const a=new BrowserSession(),b=new BrowserSession(),outsider=new BrowserSession();
  const pa=await a.call('POST','/api/session',{displayName:'HTTP player A'});
  const pb=await b.call('POST','/api/session',{displayName:'HTTP player B'});
  await outsider.call('POST','/api/session',{displayName:'HTTP outsider'});
  assert.equal(pa.status,200,JSON.stringify(pa.value));assert.equal(pb.status,200,JSON.stringify(pb.value));assert.notEqual(pa.value.player._id,pb.value.player._id);
  const create={commandId:randomUUID(),petId:pa.value.pet._id,opponentPlayerId:pb.value.player._id};
  const created=await a.call('POST','/api/matches',create);assert.equal(created.status,200);
  const id=created.value.snapshot.matchId;
  assert.equal((await outsider.call('GET',`/api/matches/${id}`)).status,403);
  const join={commandId:randomUUID(),expectedVersion:0,petId:pb.value.pet._id};
  const joined=await b.call('POST',`/api/matches/${id}/join`,join);assert.equal(joined.status,200);
  const move={commandId:randomUUID(),expectedVersion:1,move:'attack',targetPetId:pb.value.pet._id};
  const [first,retry]=await Promise.all([a.call('POST',`/api/matches/${id}/moves`,move),a.call('POST',`/api/matches/${id}/moves`,move)]);
  assert.equal(first.status,200);assert.equal(retry.status,200);assert.deepEqual(first.value.receipt,retry.value.receipt);
  assert.equal(first.value.snapshot.participants[1].hp,22);
  const seenA=await a.call('GET',`/api/matches/${id}`),seenB=await b.call('GET',`/api/matches/${id}`);
  assert.deepEqual(seenA.value,seenB.value);
  await stop();await start();
  const restored=await a.call('GET','/api/session');assert.equal(restored.value.player._id,pa.value.player._id);
  assert.ok(restored.value.matches.some((match:{matchId:string})=>match.matchId===id));
  assert.deepEqual((await b.call('GET',`/api/matches/${id}`)).value,seenA.value);
  const recovered=await a.call('POST',`/api/matches/${id}/moves`,move);
  assert.equal(recovered.status,200);assert.equal(recovered.value.duplicate,true);assert.deepEqual(recovered.value.receipt,first.value.receipt);
  assert.deepEqual((await a.call('POST','/api/matches',create)).value.receipt,created.value.receipt);
  assert.equal((await b.call('POST',`/api/matches/${id}/join`,join)).value.duplicate,true);
  console.log('PASS: actual Next.js routes, two independent cookie jars, unauthorized reader, concurrent retry, shared HP/version, real server restart and durable command recovery.');
  console.log('Browser rendering, map, animation and Atlas were not exercised.');
} finally { await stop(); }
