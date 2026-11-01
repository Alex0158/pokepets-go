import { createHash, randomUUID } from 'node:crypto';
import { MongoServerError } from 'mongodb';
import type { Db } from 'mongodb';
import type { BackboneService } from '../core/service.ts';
import { fail } from '../core/battle.ts';
import { completionMemory } from '../memories/completion.ts';
import { ProgressionService } from '../progression/service.ts';
import { MAX_RECEIPTS } from '../progression/rules.ts';
import type { Progression, ProgressionReceipt } from '../progression/rules.ts';
import { validateAudio, validateText } from './rules.ts';
import { assessAudio, assessText } from './provider.ts';
import type { Assessment } from './provider.ts';
type VoiceReceipt=ProgressionReceipt & {voicePoints:number;voiceReason:string};
type Flights=Map<string,{fingerprint:string;promise:Promise<unknown>}>;
type Claim={_id:string;fingerprint:string;leaseId:string;leaseUntil:Date;status:'pending'|'retryable'|'complete'};
const active:Flights=new Map();
const LEASE_MS=180000;
export class VoiceService {
  readonly db:Db;
  readonly backbone:BackboneService;
  readonly assess:(bytes:Buffer,mime:string)=>Promise<Assessment>;
  readonly assessText:(text:string)=>Promise<Assessment>;
  readonly flights:Flights;
  constructor(db:Db,backbone:BackboneService,assess:(bytes:Buffer,mime:string)=>Promise<Assessment>=(bytes,mime)=>assessAudio(bytes,mime,process.env.OPENAI_API_KEY??''),textAssessor:(text:string)=>Promise<Assessment>=(text)=>assessText(text,process.env.OPENAI_API_KEY??''),flights:Flights=active) {this.db=db;this.backbone=backbone;this.assess=assess;this.assessText=textAssessor;this.flights=flights;}
  private claimKey(petId:string,commandId:string) {return createHash('sha256').update(petId).update('\0').update(commandId).digest('hex');}
  async lookup(token:string|undefined,commandId:string) {
    if(!/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(commandId??''))fail('invalid_command_id',400);
    const progress=new ProgressionService(this.db,this.backbone),current=await progress.owned(token);
    const receipt=current.receipts.find(r=>r.commandId===commandId) as VoiceReceipt|undefined;
    if(receipt) {
      if(!Number.isInteger(receipt.voicePoints))fail('command_conflict');
      return {status:'committed',...(await this.receipt(progress,token,receipt,receipt.digest,true))};
    }
    const claim=await this.db.collection<Claim>('voice_jobs').findOne({_id:this.claimKey(current._id,commandId)},{maxTimeMS:2000});
    return {status:this.flights.has(`${current._id}:${commandId}`)||claim?.status==='complete'||(claim?.status==='pending'&&claim.leaseUntil>new Date())?'pending':'not_found'};
  }
  async report(token:string|undefined,input:{commandId:string;audioBase64:string;mimeType:string}) {
    if(!/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(input.commandId??''))fail('invalid_command_id',400);
    let bytes:Buffer;try{bytes=validateAudio(input.audioBase64,input.mimeType);}catch{fail('invalid_audio',400);}
    const progress=new ProgressionService(this.db,this.backbone),initial=await progress.owned(token);
    const fingerprint=createHash('sha256').update('voice-v1\0').update(input.mimeType).update('\0').update(bytes).digest('hex');
    return this.dispatch(progress,token,initial._id,input.commandId,fingerprint,()=>this.assess(bytes,input.mimeType));
  }
  async reportText(token:string|undefined,input:{commandId:string;text:string}) {
    if(!/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(input.commandId??''))fail('invalid_command_id',400);
    let description:string;try{description=validateText(input.text);}catch{fail('invalid_text',400);}
    const progress=new ProgressionService(this.db,this.backbone),initial=await progress.owned(token);
    const fingerprint=createHash('sha256').update('voice-text-v1\0').update(description).digest('hex');
    return this.dispatch(progress,token,initial._id,input.commandId,fingerprint,()=>this.assessText(description));
  }
  private async dispatch(progress:ProgressionService,token:string|undefined,petId:string,commandId:string,fingerprint:string,assessor:()=>Promise<Assessment>) {
    const key=`${petId}:${commandId}`;
    const existing=this.flights.get(key);if(existing){if(existing.fingerprint!==fingerprint)fail('command_conflict');return existing.promise;}
    const promise=this.apply(progress,token,petId,commandId,fingerprint,assessor);
    this.flights.set(key,{fingerprint,promise});try{return await promise;}finally{this.flights.delete(key);}
  }
  private async acquire(petId:string,commandId:string,fingerprint:string) {
    const col=this.db.collection<Claim>('voice_jobs'),id=this.claimKey(petId,commandId),now=new Date(),leaseId=randomUUID();
    const fresh:Claim={_id:id,fingerprint,leaseId,leaseUntil:new Date(now.getTime()+LEASE_MS),status:'pending'};
    try{await col.insertOne(fresh);return fresh;}catch(error){if(!(error instanceof MongoServerError&&error.code===11000))throw error;}
    const existing=await col.findOne({_id:id},{maxTimeMS:2000});
    if(!existing)fail('voice_pending',409);
    if(existing.fingerprint!==fingerprint)fail('command_conflict');
    if(existing.status==='complete'||(existing.status==='pending'&&existing.leaseUntil>now))fail('voice_pending',409);
    const updated=await col.updateOne({_id:id,fingerprint,leaseId:existing.leaseId,status:existing.status,leaseUntil:existing.leaseUntil},{$set:{leaseId,leaseUntil:fresh.leaseUntil,status:'pending'}},{maxTimeMS:2000});
    if(updated.modifiedCount!==1)fail('voice_pending',409);
    return fresh;
  }
  private async apply(progress:ProgressionService,token:string|undefined,petId:string,commandId:string,fingerprint:string,assessor:()=>Promise<Assessment>) {
    const before=await progress.owned(token);
    const prior=before.receipts.find(r=>r.commandId===commandId) as VoiceReceipt|undefined;
    if(prior) return this.receipt(progress,token,prior,fingerprint,true);
    if(before.receipts.length>=MAX_RECEIPTS)fail('progression_limit_reached');
    const claim=await this.acquire(petId,commandId,fingerprint);
    try {
    const afterClaim=await progress.owned(token),already=afterClaim.receipts.find(r=>r.commandId===commandId) as VoiceReceipt|undefined;
    if(already)return this.receipt(progress,token,already,fingerprint,true);
    const assessed=await assessor();
    if(!Number.isInteger(assessed.points)||assessed.points<0||assessed.points>20||typeof assessed.reason!=='string'||assessed.reason.length>200)fail('invalid_ai_result',502);
    const col=this.db.collection<Progression>('progressions');
    for(let attempt=0;attempt<8;attempt++) {
      const current=await progress.owned(token),old=current.receipts.find(r=>r.commandId===commandId) as VoiceReceipt|undefined;
      if(old)return this.receipt(progress,token,old,fingerprint,true);
      if(current.receipts.length>=MAX_RECEIPTS)fail('progression_limit_reached');
      const points=current.points+assessed.points,version=current.version+1;
      const receipt:VoiceReceipt={commandId,digest:fingerprint,version,kind:'mission',pointsAfter:points,statsAfter:{...current.stats},voicePoints:assessed.points,voiceReason:assessed.reason};
      const completedAt=new Date();
      receipt.memory=completionMemory(current,commandId,'reported-activity',assessed.points,completedAt);
      const next:Progression={...current,points,version,updatedAt:completedAt,receipts:[...current.receipts,receipt]};
      const result=await col.replaceOne({_id:current._id,ownerId:current.ownerId,version:current.version,'receipts.commandId':{$ne:commandId}},next,{maxTimeMS:2000});
      if(result.modifiedCount===1){await this.db.collection<Claim>('voice_jobs').updateOne({_id:claim._id,leaseId:claim.leaseId},{$set:{status:'complete'}},{maxTimeMS:2000});return {snapshot:await progress.get(token),receipt:{commandId,version,kind:'mission',pointsAfter:points,statsAfter:receipt.statsAfter},duplicate:false,transcript:assessed.transcript,points:assessed.points,reason:assessed.reason};}
    }
    return fail('concurrent_update_retry');
    } catch(error) {
      try{await this.db.collection<Claim>('voice_jobs').updateOne({_id:claim._id,leaseId:claim.leaseId,status:'pending'},{$set:{status:'retryable'}},{maxTimeMS:2000});}catch{/* The lease still expires; a committed receipt remains authoritative. */}
      throw error;
    }
  }
  private async receipt(progress:ProgressionService,token:string|undefined,r:VoiceReceipt,fingerprint:string,duplicate:boolean) {
    if(r.digest!==fingerprint||!Number.isInteger(r.voicePoints))fail('command_conflict');
    return {snapshot:await progress.get(token),receipt:{commandId:r.commandId,version:r.version,kind:r.kind,pointsAfter:r.pointsAfter,statsAfter:r.statsAfter},duplicate,transcript:null,points:r.voicePoints,reason:r.voiceReason};
  }
}
