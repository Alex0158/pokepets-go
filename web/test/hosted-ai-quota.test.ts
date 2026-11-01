import test from 'node:test';
import assert from 'node:assert/strict';
import {randomUUID} from 'node:crypto';
import {MongoClient} from 'mongodb';
import {reserveHostedAICall,configuredHostedAICap} from '../src/server/hosted/ai-call-quota.ts';

test('hosted quota configuration defaults closed and rejects invalid limits',()=>{
 for(const value of [undefined,'','0','-1','2.5','999999','abc'])assert.equal(configuredHostedAICap(value),0);
 assert.equal(configuredHostedAICap('12'),12);
});
const uri=process.env.POKEPET_TEST_MONGODB_URI;
test('shared database enforces one daily call limit across concurrent instances',{skip:!uri},async t=>{
 assert.match(uri!,/^mongodb:\/\/127\.0\.0\.1:\d+$/);
 const client=new MongoClient(uri!);await client.connect();t.after(()=>client.close());
 const name=`pokepet_local_quota_${Date.now()}_${randomUUID().slice(0,8)}`;const db=client.db(name);
 const now=new Date('2026-11-01T14:30:00Z');const results=await Promise.all(Array.from({length:20},()=>reserveHostedAICall(db,3,now)));
 assert.equal(results.filter(Boolean).length,3);assert.equal(results.filter(x=>!x).length,17);
 assert.equal(await reserveHostedAICall(db,3,new Date('2026-11-02T00:00:01Z')),true);
 console.log(`Hosted quota test retained isolated database: ${name}`);
});
