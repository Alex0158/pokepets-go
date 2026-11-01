import {createHash} from 'node:crypto';
import type {Db} from 'mongodb';
import {MongoServerError} from 'mongodb';
import type {BackboneService} from '../core/service.ts';
import {fail} from '../core/battle.ts';
import type {WorldService} from '../world/service.ts';
import {chooseAutoMove} from './decisions.ts';
import type {DecisionProvider,Move} from './decisions.ts';
import {configuredHostedAICap,reserveHostedAICall} from '../hosted/ai-call-quota.ts';
const hash=(value:unknown)=>createHash('sha256').update(JSON.stringify(value)).digest('hex');
type AutoInput={commandId:string;matchId:string;expectedVersion:number;mode:'practice'|'face'};
type Selection={_id:string;digest:string;move:Move;source:'decisions'|'fallback';targetPetId:string;createdAt:Date};
export class AutoService {
 readonly db:Db; readonly core:BackboneService; readonly world:WorldService;readonly provider?:DecisionProvider;
 constructor(db:Db,core:BackboneService,world:WorldService,provider?:DecisionProvider){this.db=db;this.core=core;this.world=world;this.provider=provider;}
 async move(token:string|undefined,input:AutoInput){
  if(typeof input.commandId!=='string'||!/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(input.commandId))fail('invalid_command_id',400);
  if(typeof input.matchId!=='string'||!/^[a-zA-Z0-9-]{1,80}$/.test(input.matchId))fail('invalid_id',400);
  if(!Number.isSafeInteger(input.expectedVersion)||input.expectedVersion<0)fail('invalid_version',400);
  if(input.mode!=='practice'&&input.mode!=='face')fail('invalid_mode',400);
  const actor=await this.core.actor(token),col=this.db.collection<Selection>('auto_selections'),id=hash([actor._id,input.commandId]),digest=hash([input.mode,input.matchId,input.expectedVersion]);
  let selected=await col.findOne({_id:id},{maxTimeMS:2000});if(selected&&selected.digest!==digest)fail('command_conflict');
  if(!selected){
   const snap=input.mode==='practice'?await this.world.practiceRead(token,input.matchId):await this.core.read(token,input.matchId);
   if(snap.version!==input.expectedVersion)fail('stale_version');if(snap.status!=='active')fail('match_finished');if(snap.turnPlayerId!==actor._id)fail('invalid_turn');
   const self=snap.participants.find(p=>p.playerId===actor._id),other=snap.participants.find(p=>p.playerId!==actor._id);if(!self||!other)fail('forbidden',403);
   const summary=(p:typeof self)=>({hp:p.hp,maxHp:p.stats.health,attack:p.stats.attack,defence:p.stats.defence,guarding:p.guarding,bigAttacksUsed:p.bigAttacksUsed??0,healsUsed:p.healsUsed??0});
   const provider=this.provider;
   const boundedProvider:DecisionProvider|undefined=provider&&process.env.POKEPET_RUNTIME_MODE==='hosted'
    ?async state=>{const cap=configuredHostedAICap(process.env.POKEPET_HOSTED_OPENAI_CALLS_PER_DAY);if(!await reserveHostedAICall(this.db,cap))throw Error('hosted_ai_quota_unavailable');return provider(state);}
    :provider;
   const choice=await chooseAutoMove({self:summary(self),opponent:summary(other)},boundedProvider);
   const candidate:Selection={_id:id,digest,move:choice.move,source:choice.source,targetPetId:['attack','small_attack','big_attack'].includes(choice.move)?other.petId:self.petId,createdAt:this.core.clock()};
   try{await col.updateOne({_id:id},{$setOnInsert:candidate},{upsert:true,maxTimeMS:2000});}catch(e){if(!(e instanceof MongoServerError&&e.code===11000))throw e;}
   selected=await col.findOne({_id:id},{maxTimeMS:2000});if(!selected||selected.digest!==digest)fail('command_conflict');
  }
  const cmd={commandId:input.commandId,expectedVersion:input.expectedVersion,move:selected.move,targetPetId:selected.targetPetId};
  const result=input.mode==='practice'?await this.world.practiceMove(token,input.matchId,cmd):await this.core.move(token,input.matchId,cmd);
  return {...result,decision:{move:selected.move,source:selected.source}};
 }
}
