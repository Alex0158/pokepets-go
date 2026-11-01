import { MongoClient } from 'mongodb';
import { databaseConfig } from '../../../src/server/db/local-runtime.ts';
import { MongoRepository } from '../../../src/server/db/mongo-repository.ts';
import { BackboneService } from '../../../src/server/core/service.ts';
import { DomainError } from '../../../src/server/core/battle.ts';
import { localRequest, SESSION_COOKIE } from '../../../src/server/core/http.ts';
import { VoiceService } from '../../../src/server/voice/service.ts';
export const runtime='nodejs';
export const dynamic='force-dynamic';
let active:Promise<VoiceService>|undefined;
async function service() {
  const cfg=databaseConfig();
  const client=new MongoClient(cfg.uri,{directConnection:cfg.kind==='local',maxPoolSize:3,serverSelectionTimeoutMS:cfg.kind==='local'?1500:10000,...(cfg.kind==='atlas'?{tls:true}:{})});
  try{await client.connect();const repo=new MongoRepository(client.db(cfg.name));return new VoiceService(repo.db,new BackboneService(repo));}catch(e){await client.close();throw e;}
}
async function readBody(req:Request) {
  const reader=req.body?.getReader();if(!reader)throw new DomainError('invalid_json',400);
  const parts:Uint8Array[]=[];let total=0;
  for(;;){const r=await reader.read();if(r.done)break;total+=r.value.length;if(total>1400000){await reader.cancel();throw new DomainError('body_too_large',413);}parts.push(r.value);}
  let value:unknown;try{value=JSON.parse(Buffer.concat(parts).toString('utf8'));}catch{throw new DomainError('invalid_json',400);}
  if(!value||typeof value!=='object'||Array.isArray(value)||!['audioBase64,commandId,mimeType','commandId,text'].includes(Object.keys(value).sort().join(',')))throw new DomainError('invalid_fields',400);
  return value as {commandId:string;audioBase64:string;mimeType:string}|{commandId:string;text:string};
}
export async function POST(req:Request) {
  try {
    localRequest(req);
    const cookies=(req.headers.get('cookie')??'').split(';').map(x=>x.trim()).filter(x=>x.startsWith(`${SESSION_COOKIE}=`));
    if(cookies.length!==1)throw new DomainError('unauthenticated',401);
    const body=await readBody(req);
    active??=service().catch(e=>{active=undefined;throw e;});
    const svc=await active,token=cookies[0].slice(SESSION_COOKIE.length+1);
    const result='text' in body?await svc.reportText(token,body):await svc.report(token,body);
    return Response.json(result,{headers:{'Cache-Control':'no-store'}});
  }catch(e) {
    if(e instanceof DomainError)return Response.json({error:e.code},{status:e.status,headers:{'Cache-Control':'no-store'}});
    const code=e instanceof Error&&/^(?:provider_unavailable|invalid_transcript|invalid_ai_result|transcription_http_\d{3}|scoring_http_\d{3})$/.test(e.message)?e.message:'voice_service_error';
    console.error('voice_mission_failure',code);
    return Response.json({error:'voice_mission_unavailable',message:'Voice scoring or persistence is unavailable. Outcome may be uncertain; retry the same recording and command.'},{status:503,headers:{'Cache-Control':'no-store'}});
  }
}
export async function GET(req:Request) {
  try {
    localRequest(req);
    const cookies=(req.headers.get('cookie')??'').split(';').map(x=>x.trim()).filter(x=>x.startsWith(`${SESSION_COOKIE}=`));
    if(cookies.length!==1)throw new DomainError('unauthenticated',401);
    active??=service().catch(e=>{active=undefined;throw e;});
    const result=await (await active).lookup(cookies[0].slice(SESSION_COOKIE.length+1),new URL(req.url).searchParams.get('commandId')??'');
    return Response.json(result,{headers:{'Cache-Control':'no-store'}});
  }catch(e) {
    if(e instanceof DomainError)return Response.json({error:e.code},{status:e.status,headers:{'Cache-Control':'no-store'}});
    return Response.json({error:'voice_mission_unavailable'},{status:503,headers:{'Cache-Control':'no-store'}});
  }
}
