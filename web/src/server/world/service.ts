import { createHash } from 'node:crypto';
import type { Db } from 'mongodb';
import { MongoServerError } from 'mongodb';
import type { BackboneService } from '../core/service.ts';
import { snapshot } from '../core/service.ts';
import { fail, participant, MATCH_LIFETIME_MS } from '../core/battle.ts';
import type { Match, MoveCommand, Pet, Player, Stats, MatchEvent } from '../../shared/multiplayer.ts';
import type { Progression } from '../progression/rules.ts';
import { worldPosition, practiceTurn } from './rules.ts';
const uuid=(value:unknown)=>{if(typeof value!=='string'||!/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(value))fail('invalid_command_id',400);};
const validId=(value:unknown)=>{if(typeof value!=='string'||!/^[a-zA-Z0-9-]{1,80}$/.test(value))fail('invalid_id',400);};
const hash=(value:unknown)=>createHash('sha256').update(JSON.stringify(value)).digest('hex');
const practiceSnapshot=(match:Match)=>({...snapshot(match),mode:'practice' as const});
type PracticeReceipt={commandId:string;digest:string;kind:'create'|'move';version:number;events?:MatchEvent[]};
type Practice=Match&{practiceReceipts:PracticeReceipt[];opponentPlayerId:string};
export class WorldService {
  readonly db:Db;
  readonly backbone:BackboneService;
  constructor(db:Db,backbone:BackboneService){this.db=db;this.backbone=backbone;}
  async world(token:string|undefined){
    const actor=await this.backbone.actor(token),now=this.backbone.clock();
    const players=await this.db.collection<Player>('players').find({_id:{$ne:actor._id}},{projection:{displayName:1},maxTimeMS:2000}).toArray();
    const pets=await this.db.collection<Pet>('pets').find({ownerId:{$in:players.map(p=>p._id)}},{projection:{name:1,ownerId:1},maxTimeMS:2000}).toArray();
    const visible=players.flatMap(p=>{const pet=pets.find(x=>x.ownerId===p._id);return pet?[{playerId:p._id,displayName:p.displayName,petId:pet._id,petName:pet.name,position:worldPosition(p._id)}]:[];});
    const waiting=await this.db.collection<Match>('matches').find({invitedPlayerId:actor._id,status:'waiting',expiresAt:{$gt:now}},{maxTimeMS:2000}).sort({createdAt:-1}).limit(20).toArray();
    const creators=await this.db.collection<Player>('players').find({_id:{$in:waiting.map(m=>m.creatorId)}},{projection:{displayName:1},maxTimeMS:2000}).toArray();
    return {source:'live' as const,players:visible,invitations:waiting.map(m=>({matchId:m._id,creatorPlayerId:m.creatorId,creatorDisplayName:creators.find(p=>p._id===m.creatorId)?.displayName??'Player',expectedVersion:m.version}))};
  }
  async practiceCreate(token:string|undefined,input:{commandId:string;opponentPlayerId:string}){
    uuid(input.commandId);validId(input.opponentPlayerId);
    const actor=await this.backbone.actor(token),now=this.backbone.clock(),col=this.db.collection<Practice>('practice_matches');
    const id=hash([actor._id,input.commandId]).slice(0,48),digest=hash(['create',input.opponentPlayerId]);
    const existing=await col.findOne({_id:id});
    if(existing){const receipt=existing.practiceReceipts[0];if(receipt.digest!==digest)fail('command_conflict');return {snapshot:practiceSnapshot(existing),receipt,duplicate:true};}
    if(actor._id===input.opponentPlayerId)fail('distinct_players_required',400);
    const opponent=await this.db.collection<Player>('players').findOne({_id:input.opponentPlayerId},{maxTimeMS:2000});
    if(!opponent)fail('opponent_unavailable',400);
    const own=await this.backbone.repo.ensurePet(actor),other=await this.db.collection<Pet>('pets').findOne({ownerId:opponent._id},{maxTimeMS:2000});
    if(!other)fail('opponent_unavailable',400);
    const progress=await this.db.collection<Progression>('progressions').find({_id:{$in:[own._id,other._id]}},{maxTimeMS:2000}).toArray();
    const stats=(pet:Pet):Stats=>progress.find(p=>p._id===pet._id&&p.ownerId===pet.ownerId)?.stats??pet.baseStats;
    const botId=`bot-${opponent._id}`,botPet={...other,ownerId:botId,baseStats:stats(other)};
    const receipt:PracticeReceipt={commandId:input.commandId,digest,kind:'create',version:1};
    const match:Practice={_id:id,creatorId:actor._id,createCommandId:input.commandId,invitedPlayerId:botId,opponentPlayerId:opponent._id,status:'active',participants:[participant(actor._id,{...own,baseStats:stats(own)}),participant(botId,botPet)],turnPlayerId:actor._id,version:1,moveCount:0,result:null,winnerPlayerId:null,acceptedCommands:[],practiceReceipts:[receipt],createdAt:now,updatedAt:now,expiresAt:new Date(now.getTime()+MATCH_LIFETIME_MS)};
    try{await col.insertOne(match);}catch(e){if(!(e instanceof MongoServerError&&e.code===11000))throw e;const saved=await col.findOne({_id:id});if(!saved||saved.practiceReceipts[0].digest!==digest)fail('command_conflict');return {snapshot:practiceSnapshot(saved),receipt:saved.practiceReceipts[0],duplicate:true};}
    return {snapshot:practiceSnapshot(match),receipt,duplicate:false};
  }
  async practiceRead(token:string|undefined,id:string){validId(id);const actor=await this.backbone.actor(token),match=await this.db.collection<Practice>('practice_matches').findOne({_id:id},{maxTimeMS:2000});if(!match)fail('match_not_found',404);if(match.creatorId!==actor._id)fail('forbidden',403);if(match.expiresAt<=this.backbone.clock())fail('match_expired',410);return practiceSnapshot(match);}
  async practiceMove(token:string|undefined,id:string,cmd:MoveCommand){
    validId(id);uuid(cmd.commandId);if(!Number.isSafeInteger(cmd.expectedVersion)||cmd.expectedVersion<0)fail('invalid_version',400);
    const actor=await this.backbone.actor(token),col=this.db.collection<Practice>('practice_matches'),digest=hash(['move',cmd.expectedVersion,cmd.move,cmd.targetPetId]);
    for(let i=0;i<4;i++){
      const previous=await col.findOne({_id:id},{maxTimeMS:2000});if(!previous)fail('match_not_found',404);if(previous.creatorId!==actor._id)fail('forbidden',403);
      const now=this.backbone.clock();if(previous.expiresAt<=now)fail('match_expired',410);
      const prior=previous.practiceReceipts.find(r=>r.commandId===cmd.commandId);if(prior){if(prior.digest!==digest)fail('command_conflict');return {snapshot:practiceSnapshot(previous),receipt:prior,duplicate:true,events:prior.events??[]};}
      const {match,events}=practiceTurn(previous,actor._id,cmd,now);
      const receipt:PracticeReceipt={commandId:cmd.commandId,digest,kind:'move',version:match.version,events};
      const next:Practice={...previous,...match,practiceReceipts:[...previous.practiceReceipts,receipt]};
      const write=await col.replaceOne({_id:id,creatorId:actor._id,version:previous.version,expiresAt:{$gt:now}},next,{maxTimeMS:2000});
      if(write.modifiedCount===1)return {snapshot:practiceSnapshot(next),receipt,duplicate:false,events};
    }
    fail('concurrent_update',409);
  }
}
