import { DomainError } from '../core/battle.ts';
import { localRequest } from '../core/http.ts';
import { validateAudio, validateText } from '../voice/rules.ts';
import type { GameIntent } from './rules.ts';
type Deps={session:(request:Request)=>Promise<boolean>;transcribe:(bytes:Buffer,mime:string)=>Promise<string>;classify:(text:string)=>Promise<GameIntent>;hostedEnabled?:()=>boolean};
async function readInput(request:Request) {
  const reader=request.body?.getReader();if(!reader)throw new DomainError('invalid_json',400);
  const chunks:Uint8Array[]=[];let size=0;
  for(;;){const {done,value}=await reader.read();if(done)break;size+=value.length;if(size>1400000){await reader.cancel();throw new DomainError('body_too_large',413);}chunks.push(value);}
  let parsed:unknown;try{parsed=JSON.parse(Buffer.concat(chunks).toString('utf8'));}catch{throw new DomainError('invalid_json',400);}
  if(!parsed||typeof parsed!=='object'||Array.isArray(parsed))throw new DomainError('invalid_fields',400);
  const obj=parsed as Record<string,unknown>,keys=Object.keys(obj).sort().join(',');
  try {
    if(keys==='text')return {text:validateText(obj.text)};
    if(keys==='audioBase64,mimeType')return {audio:validateAudio(obj.audioBase64,obj.mimeType),mime:String(obj.mimeType)};
  }catch{throw new DomainError('invalid_input',400);}
  throw new DomainError('invalid_fields',400);
}
export function createIntentHandler(deps:Deps) {
  return async(request:Request):Promise<Response>=>{
    try {
      localRequest(request);
      if(process.env.POKEPET_RUNTIME_MODE==='hosted'&&!deps.hostedEnabled?.())throw new DomainError('game_intent_hosted_unavailable',503);
      if(!await deps.session(request))throw new DomainError('unauthenticated',401);
      const input=await readInput(request);
      const transcript='text' in input?input.text:await deps.transcribe(input.audio!,input.mime!);
      const intent=await deps.classify(transcript!);
      return Response.json({transcript,...intent},{headers:{'Cache-Control':'no-store'}});
    }catch(error){
      if(error instanceof DomainError)return Response.json({error:error.code},{status:error.status,headers:{'Cache-Control':'no-store'}});
      const code=error instanceof Error&&/^(?:provider_unavailable|invalid_transcript|invalid_intent|transcription_http_\d{3}|intent_http_\d{3})$/.test(error.message)?error.message:'game_intent_error';
      console.error('game_intent_failure',code);
      return Response.json({error:'game_intent_unavailable'},{status:503,headers:{'Cache-Control':'no-store'}});
    }
  };
}
