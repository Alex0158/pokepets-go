import { MongoClient } from 'mongodb';
import type { Db } from 'mongodb';
import { databaseConfig } from '../db/local-runtime.ts';
import { reserveVoiceProviderCall } from '../voice/hosted-quota.ts';
let active:Promise<Db>|undefined;
async function quotaDb() {
  const cfg=databaseConfig();
  if(cfg.kind!=='atlas')throw Error('hosted_database_required');
  const client=new MongoClient(cfg.uri,{maxPoolSize:2,serverSelectionTimeoutMS:10000,tls:true});
  try{await client.connect();return client.db(cfg.name);}catch(e){await client.close();throw e;}
}
export async function reserveIntentProviderCall() {
  if(process.env.POKEPET_RUNTIME_MODE!=='hosted')return;
  active??=quotaDb().catch(e=>{active=undefined;throw e;});
  await reserveVoiceProviderCall(await active);
}
