import test from 'node:test';
import assert from 'node:assert/strict';
import { MongoClient } from 'mongodb';
import type { Db } from 'mongodb';
import { randomUUID } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import { avatarHostedQuotaGate } from '../src/server/avatar/hosted-quota.ts';
import { createOpenAIProvider } from '../avatar-lab/service/openai-provider.mjs';
test('avatar quota gate fails closed on unavailable storage',async()=>{
  const unavailable={collection(){throw Error('private connection detail');}} as unknown as Db;
  assert.equal(await avatarHostedQuotaGate(unavailable,2)(),false);
});
test('actual shared Mongo quota composes before mocked image HTTP and counts provider errors',{skip:process.env.POKEPET_TEST_AVATAR_MONGO!=='1'},async()=>{
  const client=new MongoClient('mongodb://127.0.0.1:27030',{directConnection:true,serverSelectionTimeoutMS:1500});
  try {
    await client.connect();const db=client.db(`pokepet_local_avatar_quota_${Date.now()}_${randomUUID().slice(0,8)}`),png=await readFile(new URL('../avatar-lab/assets/sample-puppy-sheet.png',import.meta.url));
    let calls=0;
    const provider=createOpenAIProvider({apiKey:'unit-test-only',maxRequests:2,beforeRequest:avatarHostedQuotaGate(db,1),fetchImpl:async()=>{calls++;return Response.json({error:{code:'insufficient_quota'}},{status:429});}});
    const input={subject:'pet',bytes:png,mimeType:'image/png',signal:new AbortController().signal};
    await assert.rejects(provider(input),(e:any)=>e.code==='openai_429_insufficient_quota');assert.equal(calls,1);
    await assert.rejects(provider(input),(e:any)=>e.code==='request_budget_hosted_quota_reached');assert.equal(calls,1);
    assert.equal(await avatarHostedQuotaGate(db,0)(),false);
    assert.equal((await db.collection('hosted_ai_daily_quota').findOne({}))?.used,1);
  }finally{await client.close();}
});
