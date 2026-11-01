import { createHash } from 'node:crypto';
import { MongoServerError } from 'mongodb';
import type { Db } from 'mongodb';
import type { BackboneService } from '../core/service.ts';
import { fail } from '../core/battle.ts';
import { completionMemory } from '../memories/completion.ts';
import { applyProgression, dailyMissionSnapshot, initialProgression } from './rules.ts';
import type { Progression, ProgressionAction, ProgressionReceipt } from './rules.ts';

const snapshot=(p:Progression,now:Date)=>({petId:p._id,points:p.points,stats:p.stats,completedMissionIds:p.completedMissionIds,dailyMissions:dailyMissionSnapshot(p,now),version:p.version,updatedAt:p.updatedAt});
const publicReceipt=(r:ProgressionReceipt)=>({commandId:r.commandId,version:r.version,kind:r.kind,pointsAfter:r.pointsAfter,statsAfter:r.statsAfter});
const hashAction=(action:ProgressionAction)=>createHash('sha256').update(JSON.stringify(action.kind==='mission'?['mission',action.missionId,action.confirmed]:['upgrade',action.stat])).digest('hex');
export class ProgressionService {
  readonly db:Db;
  readonly backbone:BackboneService;
  readonly clock:()=>Date;
  constructor(db:Db,backbone:BackboneService,clock=()=>new Date()) { this.db=db;this.backbone=backbone;this.clock=clock; }
  async owned(token:string|undefined) {
    const actor=await this.backbone.actor(token);
    const pet=await this.backbone.repo.ensurePet(actor);
    if(pet.ownerId!==actor._id)fail('pet_not_owned',403);
    const col=this.db.collection<Progression>('progressions');
    try { await col.updateOne({_id:pet._id,ownerId:actor._id},{$setOnInsert:initialProgression(pet,this.clock())},{upsert:true,maxTimeMS:2000}); }
    catch(error) { if(!(error instanceof MongoServerError&&error.code===11000))throw error; }
    const progress=await col.findOne({_id:pet._id,ownerId:actor._id},{maxTimeMS:2000});
    if(!progress)fail('progression_not_found',404);
    return progress;
  }
  async get(token:string|undefined) { return snapshot(await this.owned(token),this.clock()); }
  async command(token:string|undefined,commandId:string,action:ProgressionAction) {
    if(typeof commandId!=='string'||!/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(commandId))fail('invalid_command_id',400);
    if(!action||!['mission','upgrade'].includes(action.kind))fail('invalid_action',400);
    const fingerprint=hashAction(action),col=this.db.collection<Progression>('progressions');
    for(let attempt=0;attempt<8;attempt++) {
      const current=await this.owned(token),existing=current.receipts.find(r=>r.commandId===commandId);
      if(existing) {
        if(existing.digest!==fingerprint)fail('command_conflict');
        return {snapshot:snapshot(current,this.clock()),receipt:publicReceipt(existing),duplicate:true};
      }
      const next=applyProgression(current,action,this.clock());
      const receipt:ProgressionReceipt={commandId,digest:fingerprint,version:next.version,kind:action.kind,pointsAfter:next.points,statsAfter:{...next.stats}};
      if(action.kind==='mission')receipt.memory=completionMemory(current,commandId,action.missionId,next.points-current.points,next.updatedAt);
      next.receipts=[...current.receipts,receipt];
      const result=await col.replaceOne({_id:current._id,ownerId:current.ownerId,version:current.version,'receipts.commandId':{$ne:commandId}},next,{maxTimeMS:2000});
      if(result.modifiedCount===1)return {snapshot:snapshot(next,this.clock()),receipt:publicReceipt(receipt),duplicate:false};
    }
    return fail('concurrent_update_retry');
  }
}
