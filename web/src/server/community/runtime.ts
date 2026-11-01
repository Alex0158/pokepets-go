import { MongoClient } from 'mongodb';
import { databaseConfig } from '../db/local-runtime.ts';
import { MongoRepository } from '../db/mongo-repository.ts';
import { BackboneService } from '../core/service.ts';
import { localRequest } from '../core/http.ts';
import { DomainError } from '../core/battle.ts';
import { createCommunityHandler } from './http.ts';
import { CommunityService } from './service.ts';
const state=globalThis as typeof globalThis & {__pokepetCommunityV1?:Promise<ReturnType<typeof createCommunityHandler>>};
async function connect(){
 const {uri,name,kind}=databaseConfig(),client=new MongoClient(uri,{directConnection:kind==='local',maxPoolSize:3,serverSelectionTimeoutMS:3000,connectTimeoutMS:3000,socketTimeoutMS:5000,waitQueueTimeoutMS:3000,writeConcern:{w:'majority',journal:true,wtimeoutMS:5000},...(kind==='atlas'?{tls:true}:{})});
 try{await client.connect();const db=client.db(name),service=new CommunityService(db,new BackboneService(new MongoRepository(db)));await service.initialize();return createCommunityHandler(service);}catch(e){await client.close();throw e;}
}
export async function handleCommunityRequest(request:Request){
 try{localRequest(request);state.__pokepetCommunityV1??=connect().catch(e=>{state.__pokepetCommunityV1=undefined;throw e;});return (await state.__pokepetCommunityV1)(request);}
 catch(e){return Response.json({error:e instanceof DomainError?e.code:'community_unavailable'},{status:e instanceof DomainError?e.status:503,headers:{'Cache-Control':'private, no-store'}});}
}
