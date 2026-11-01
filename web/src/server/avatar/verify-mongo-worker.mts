import { MongoClient } from 'mongodb';
import { createHash } from 'node:crypto';
import { createFixtureProvider } from '../../../avatar-lab/service/fixture-provider.mjs';
import { MongoAvatarJobs } from './mongo-jobs.ts';
const name=process.argv[2];
if(!/^pokepet_local_avatar_multi_[a-zA-Z0-9_]+$/.test(name??''))throw Error('Isolated local DB required');
let source='';for await(const chunk of process.stdin)source+=chunk;
const command=JSON.parse(source);
const client=new MongoClient('mongodb://127.0.0.1:27030',{directConnection:true,serverSelectionTimeoutMS:1500});
let providerCalls=0;
try {
  await client.connect();const db=client.db(name),fixture=createFixtureProvider();
  const provider=async(input:any)=>{providerCalls++;if(command.provider==='fail')throw Error('private provider message');if(command.provider==='slow')await new Promise(r=>setTimeout(r,1000));return fixture(input);};
  const jobs=new MongoAvatarJobs({db,provider,mode:'fixture',maxRequests:2,clock:()=>Date.now()+(command.clockOffset??0)});
  await jobs.initialize();let value:any;
  if(command.action==='submit')value=await jobs.submit(command.owner,command.input);
  else if(command.action==='status')value=await jobs.status(command.owner,command.id);
  else if(command.action==='cancel')value=await jobs.cancel(command.owner,command.id);
  else if(command.action==='asset'){const a=await jobs.asset(command.owner,command.id);value={sha256:createHash('sha256').update(a.bytes).digest('hex'),subject:a.provenance.subject};}
  else if(command.action==='lookup'){const record=await db.collection('avatar_jobs_v1').findOne({owner:command.owner,requestId:command.input.requestId});value={jobId:record?._id};}
  else if(command.action==='seed-expired-claim') {
    const claim=createHash('sha256').update(JSON.stringify([command.owner,command.input.requestId])).digest('hex');
    await db.collection('avatar_budget_v1').updateOne({_id:'main-avatar-v1'} as any,{$inc:{used:1},$push:{claims:claim}} as any);value={seeded:true};
  }
  else if(command.action==='seed-abandoned') {
    const now=new Date();await db.collection('avatar_jobs_v1').insertOne({_id:command.id,owner:command.owner,requestId:command.input.requestId,signature:jobs.signature(command.input),subject:'owner',inputPolicy:'synthetic-only',status:'running',createdAt:now,expiresAt:new Date(+now+300000),deadlineAt:new Date(+now-1)} as any);
    value=await jobs.status(command.owner,command.id);
  }else throw Error('Unknown QA action');
  const record=value?.jobId?await db.collection('avatar_jobs_v1').findOne({_id:value.jobId} as any):null;
  const ttl=(await db.collection('avatar_jobs_v1').listIndexes().toArray()).find(i=>i.name==='expires_ttl');
  console.log(JSON.stringify({ok:true,value,providerCalls,remaining:await jobs.provider.remaining(),storedKeys:record?Object.keys(record):[],ttlSeconds:ttl?.expireAfterSeconds,logicalExpiryMs:record?+record.expiresAt-+record.createdAt:null,containsSource:record&&command.input?JSON.stringify(record).includes(command.input.imageBase64):false}));
}catch(error){console.log(JSON.stringify({ok:false,code:(error as any)?.code??'unexpected_error',providerCalls}));}
finally{await client.close();}
