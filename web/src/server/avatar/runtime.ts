import { AvatarJobs } from '../../../avatar-lab/service/jobs.mjs';
import { createFixtureProvider } from '../../../avatar-lab/service/fixture-provider.mjs';
import { join } from 'node:path';
import { createOpenAIProvider } from '../../../avatar-lab/service/openai-provider.mjs';
import { databaseConfig, handleLocalRequest } from '../db/local-runtime.ts';
import { MongoClient } from 'mongodb';
import { MongoAvatarJobs } from './mongo-jobs.ts';
import { createAvatarHandler } from './http.ts';
import { avatarRuntimeError, reportAvatarFailure } from './diagnostics.ts';
import { localRequest } from '../core/http.ts';
import { DomainError } from '../core/battle.ts';
import { configuredHostedAICap } from '../hosted/ai-call-quota.ts';
import { avatarHostedQuotaGate } from './hosted-quota.ts';

export async function resolveMainPlayer(request:Request):Promise<string|null> {
  const url=new URL(request.url);url.pathname='/api/session';url.search='';
  const result=await handleLocalRequest(new Request(url,{method:'GET',headers:request.headers}));
  if(result.status===401)return null;
  if(!result.ok){
    const code=result.status===503?'main_session_unavailable':'main_boundary_rejected';
    const error=avatarRuntimeError(code);reportAvatarFailure('session',error);throw error;
  }
  const profile=await result.json() as {player?:{_id?:unknown}};
  if(typeof profile.player?._id!=='string')throw avatarRuntimeError('main_profile_invalid');
  return profile.player._id;
}
async function createRuntime() {
  const hosted=process.env.POKEPET_RUNTIME_MODE==='hosted';
  const mode=process.env.POKEPET_AVATAR_PROVIDER??(!hosted&&process.env.OPENAI_API_KEY?'openai':'disabled');
  const storage=process.env.POKEPET_AVATAR_STORAGE??'memory';
  if(!['disabled','fixture','openai'].includes(mode))throw avatarRuntimeError('avatar_invalid_provider');
  if(!['memory','mongo'].includes(storage)||hosted&&mode!=='disabled'&&(storage!=='mongo'||mode!=='openai'))throw avatarRuntimeError('avatar_storage_unavailable');
  const hostedCap=hosted&&mode==='openai'?configuredHostedAICap(process.env.POKEPET_HOSTED_OPENAI_CALLS_PER_DAY):0;
  if(hosted&&mode==='openai'&&hostedCap===0)throw avatarRuntimeError('avatar_hosted_quota_unavailable');
  const maxRequests=Number(process.env.POKEPET_AVATAR_MAX_REQUESTS??'2');
  if(!Number.isSafeInteger(maxRequests)||maxRequests<0||maxRequests>8)throw avatarRuntimeError('avatar_invalid_request_allowance');
  const personalPhotos=mode==='openai'&&process.env.POKEPET_AVATAR_PERSONAL_PHOTOS!=='0';
  if(storage==='mongo') {
    const config=databaseConfig();
    const client=new MongoClient(config.uri,{directConnection:config.kind==='local',maxPoolSize:3,serverSelectionTimeoutMS:6000,connectTimeoutMS:6000,socketTimeoutMS:10000,...(config.kind==='atlas'?{tls:true}:{})});
    try {
      await client.connect();
      const db=client.db(config.name);
      const provider=mode==='openai'?createOpenAIProvider({maxRequests,beforeRequest:hosted?avatarHostedQuotaGate(db,hostedCap):undefined}):createFixtureProvider({root:join(process.cwd(),'avatar-lab')});
      const jobs=new MongoAvatarJobs({db,provider,mode,maxRequests,allowedInputPolicies:personalPhotos?['synthetic-only','personal-photo']:['synthetic-only']});
      await jobs.initialize();
      return createAvatarHandler({jobs,mode,personalPhotos,storage:'mongo',resolvePlayer:resolveMainPlayer});
    }catch(error){await client.close();throw error;}
  }
  const provider=mode==='openai'?createOpenAIProvider({maxRequests}):createFixtureProvider({root:join(process.cwd(),'avatar-lab')});
  const jobs=new AvatarJobs({provider,mode,allowedInputPolicies:personalPhotos?['synthetic-only','personal-photo']:['synthetic-only']});
  return createAvatarHandler({jobs,mode,personalPhotos,resolvePlayer:resolveMainPlayer});
}
// One bounded memory store across Next route bundles in this process; restart loses it.
const local=globalThis as typeof globalThis & {__pokepetAvatarMainV2?:ReturnType<typeof createRuntime>};
export async function handleAvatarRequest(request:Request) {
  try {localRequest(request);local.__pokepetAvatarMainV2??=createRuntime().catch(error=>{local.__pokepetAvatarMainV2=undefined;throw error;});return await (await local.__pokepetAvatarMainV2)(request);}
  catch(error){reportAvatarFailure('runtime',error);return Response.json({error:error instanceof DomainError?error.code:'avatar_service_unavailable'},{status:error instanceof DomainError?error.status:503,headers:{'Cache-Control':'private, no-store'}});}
}
