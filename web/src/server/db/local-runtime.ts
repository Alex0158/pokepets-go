import { MongoClient } from 'mongodb';
import { MongoRepository } from './mongo-repository.ts';
import { BackboneService } from '../core/service.ts';
import { createLocalApi, errorResponse, localRequest } from '../core/http.ts';
let active:Promise<ReturnType<typeof createLocalApi>>|undefined;
export function localDatabaseConfig() {
  const uri=process.env.POKEPET_LOCAL_MONGODB_URI;
  const name=process.env.POKEPET_LOCAL_DATABASE??'pokepet_local_demo';
  if(!uri||!/^mongodb:\/\/(127\.0\.0\.1|localhost|\[::1\]):\d+$/.test(uri)||!/^pokepet_local_[a-zA-Z0-9_]+$/.test(name))throw Error('Explicit local MongoDB configuration required');
  return {uri,name};
}
export function databaseConfig() {
  const mode=process.env.POKEPET_DATABASE_MODE??'local';
  if(mode==='local') return {kind:'local' as const,...localDatabaseConfig()};
  if(mode!=='atlas') throw Error('Invalid database mode');
  const uri=process.env.POKEPET_ATLAS_MONGODB_URI;
  const name=process.env.POKEPET_ATLAS_DATABASE;
  if(!uri||!name||!/^pokepet_atlas_[a-zA-Z0-9_]+$/.test(name)) throw Error('Explicit isolated Atlas configuration required');
  let parsed:URL;
  try { parsed=new URL(uri); } catch { throw Error('Invalid Atlas configuration'); }
  if(parsed.protocol!=='mongodb+srv:'||!parsed.hostname.endsWith('.mongodb.net')||!parsed.username||!parsed.password||parsed.port) throw Error('Invalid Atlas configuration');
  return {kind:'atlas' as const,uri,name};
}
async function connect() {
  const {uri,name,kind}=databaseConfig();
  const client=new MongoClient(uri,{directConnection:kind==='local',maxPoolSize:5,serverSelectionTimeoutMS:kind==='local'?1500:10000,connectTimeoutMS:kind==='local'?1500:10000,socketTimeoutMS:kind==='local'?2500:10000,timeoutMS:kind==='local'?3000:15000,writeConcern:{w:'majority',journal:true},...(kind==='atlas'?{tls:true}:{})});
  try {
    await client.connect();
    const repo=new MongoRepository(client.db(name));await repo.initialize();
    return createLocalApi(new BackboneService(repo));
  } catch(error) { await client.close();throw error; }
}
export async function handleLocalRequest(request:Request) {
  try {
    localRequest(request);
    active??=connect().catch(error=>{active=undefined;throw error;});
    return await (await active)(request);
  } catch(error) { return errorResponse(error); }
}
