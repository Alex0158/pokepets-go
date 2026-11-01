import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { randomUUID } from 'node:crypto';
import { MongoClient } from 'mongodb';
import { MongoRepository } from '../src/server/db/mongo-repository.ts';
import { BackboneService } from '../src/server/core/service.ts';
import { GET, POST } from '../app/api/voice-mission/route.ts';
const uri=process.env.POKEPET_LOCAL_MONGODB_URI,name=process.env.POKEPET_LOCAL_DATABASE,audioFile=process.env.POKEPET_SYNTHETIC_AUDIO_FILE;
assert.match(uri??'',/^mongodb:\/\/127\.0\.0\.1:\d+$/);assert.match(name??'',/^pokepet_local_voice_[a-zA-Z0-9_]+$/);assert.ok(process.env.OPENAI_API_KEY);assert.ok(audioFile);
const client=new MongoClient(uri!);await client.connect();
try {
  const repo=new MongoRepository(client.db(name));await repo.initialize();const user=await new BackboneService(repo).bootstrap(undefined,'Voice smoke');
  const input={commandId:randomUUID(),audioBase64:(await readFile(audioFile!)).toString('base64'),mimeType:'audio/wav'};
  const base='http://127.0.0.1:4204';const cookie=`pokepet_session=${user.token}`;
  const headers={host:'127.0.0.1:4204',origin:base,'content-type':'application/json',cookie};
  const call=()=>POST(new Request(`${base}/api/voice-mission`,{method:'POST',headers,body:JSON.stringify(input)}));
  const result=await call();assert.equal(result.status,200);const first=await result.json();assert.equal(first.duplicate,false);assert.ok(first.transcript);assert.ok(first.points>=0&&first.points<=20);assert.equal(first.snapshot.points,first.points);
  const second=await call();assert.equal(second.status,200);const again=await second.json();assert.equal(again.duplicate,true);assert.equal(again.points,first.points);assert.equal(again.snapshot.points,first.points);assert.equal(again.transcript,null);
  const read=await GET(new Request(`${base}/api/voice-mission?commandId=${input.commandId}`,{headers:{host:'127.0.0.1:4204',cookie}}));assert.equal(read.status,200);assert.equal((await read.json()).status,'committed');
  console.log(JSON.stringify({status:'passed',source:'synthetic_audio',points:first.points,duplicateSafe:true,lookup:'committed',database:name}));
} finally {await client.close();}
process.exit(0);
