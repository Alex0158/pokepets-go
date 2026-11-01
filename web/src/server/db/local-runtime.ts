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
async function connect() {
  const {uri,name}=localDatabaseConfig();
  const client=new MongoClient(uri,{directConnection:true,maxPoolSize:5,serverSelectionTimeoutMS:1500,connectTimeoutMS:1500,socketTimeoutMS:2500,timeoutMS:3000,writeConcern:{w:'majority',journal:true}});
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
