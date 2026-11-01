import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { MongoClient } from 'mongodb';
import { MongoRepository } from '../src/server/db/mongo-repository.ts';
import { BackboneService } from '../src/server/core/service.ts';
import { ProgressionService } from '../src/server/progression/service.ts';
import { POST } from '../app/api/game-intent/route.ts';
const uri=process.env.POKEPET_LOCAL_MONGODB_URI,name=process.env.POKEPET_LOCAL_DATABASE,audio=process.env.POKEPET_SYNTHETIC_AUDIO_FILE;
assert.equal(process.env.POKEPET_DATABASE_MODE,'local');assert.match(uri??'',/^mongodb:\/\/127\.0\.0\.1:\d+$/);assert.match(name??'',/^pokepet_local_intent_[a-zA-Z0-9_]+$/);assert.ok(process.env.OPENAI_API_KEY);assert.ok(audio);
const client=new MongoClient(uri!);await client.connect();
try {
  const repo=new MongoRepository(client.db(name));await repo.initialize();const backbone=new BackboneService(repo),player=await backbone.bootstrap(undefined,'Intent smoke');const progress=new ProgressionService(repo.db,backbone);
  const base='http://127.0.0.1:4209',headers={host:'127.0.0.1:4209',origin:base,'content-type':'application/json',cookie:`pokepet_session=${player.token}`};
  const make=(input:unknown)=>POST(new Request(`${base}/api/game-intent`,{method:'POST',headers,body:JSON.stringify(input)}));
  const initial=await progress.get(player.token!);
  const help=await make({text:'How do I use my points?'});assert.equal(help.status,200);assert.equal((await help.json()).intent,'points_help');
  const recorded=await make({audioBase64:(await readFile(audio!)).toString('base64'),mimeType:'audio/wav'});assert.equal(recorded.status,200);const result=await recorded.json();assert.equal(result.intent,'activity_report');
  const final=await progress.get(player.token!);assert.equal(final.points,initial.points);assert.equal(final.version,initial.version);
  console.log(JSON.stringify({status:'passed',text:'points_help',audio:'activity_report',balanceUnchanged:true,database:name}));
} finally {await client.close();}
process.exit(0);
