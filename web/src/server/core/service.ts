import { createHash, randomBytes, randomUUID } from 'node:crypto';
import type { CommandResult, CreateCommand, JoinCommand, Match, MatchSnapshot, MoveCommand, Player, Receipt } from '../../shared/multiplayer.ts';
import type { MongoRepository } from '../db/mongo-repository.ts';
import { alive, fail, joinMatch, moveMatch, waitingMatch } from './battle.ts';
const SESSION_MS=7*86400000;
const sha=(text:string)=>createHash('sha256').update(text).digest('hex');
export const snapshot=(match:Match):MatchSnapshot=>({matchId:match._id,status:match.status,participants:match.participants,turnPlayerId:match.turnPlayerId,version:match.version,moveCount:match.moveCount,result:match.result,winnerPlayerId:match.winnerPlayerId,...(match.lastEvent?{lastEvent:match.lastEvent}:{}),createdAt:match.createdAt,updatedAt:match.updatedAt,expiresAt:match.expiresAt});
const publicPlayer=(player:Player)=>({_id:player._id,displayName:player.displayName,createdAt:player.createdAt,updatedAt:player.updatedAt});
const digest=(kind:string,payload:unknown)=>sha(JSON.stringify([kind,payload]));
const uuid=(id:unknown)=>{if(typeof id!=='string'||!/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(id)) fail('invalid_command_id',400);};
const id=(value:unknown)=>{if(typeof value!=='string'||!/^[a-zA-Z0-9-]{1,80}$/.test(value)) fail('invalid_id',400);};
const version=(value:unknown)=>{if(!Number.isSafeInteger(value)||Number(value)<0) fail('invalid_version',400);};
export class BackboneService {
  readonly repo: MongoRepository;
  readonly clock:()=>Date;
  constructor(repo:MongoRepository,clock=()=>new Date()) { this.repo=repo; this.clock=clock; }
  async actor(token:string|undefined):Promise<Player> {
    if(!token||!/^[a-f0-9]{64}$/.test(token)) fail('unauthenticated',401);
    const player=await this.repo.playerBySession(sha(token));
    if(!player||player.sessionExpiresAt<=this.clock()) fail('unauthenticated',401);
    return player;
  }
  async bootstrap(token:string|undefined,name:string) {
    if(token!==undefined) { const profile=await this.profile(token);return {...profile,token:undefined}; }
    if(typeof name!=='string'||!name.trim()||name.trim().length>40) fail('invalid_display_name',400);
    const now=this.clock(),newToken=randomBytes(32).toString('hex');
    const player:Player={_id:randomUUID(),displayName:name.trim(),sessionHash:sha(newToken),sessionExpiresAt:new Date(now.getTime()+SESSION_MS),createdAt:now,updatedAt:now};
    await this.repo.insertPlayer(player);
    const pet=await this.repo.ensurePet(player);
    return {player:publicPlayer(player),pet,matches:[],token:newToken};
  }
  async profile(token:string|undefined) {
    const player=await this.actor(token),pet=await this.repo.ensurePet(player);
    return {player:publicPlayer(player),pet,matches:(await this.repo.recentMatches(player._id,this.clock())).map(snapshot)};
  }
  async ownedPet(playerId:string,petId:string) {
    id(petId);const pet=await this.repo.pet(petId);
    if(!pet||pet.ownerId!==playerId) fail('pet_not_owned',403);
    return pet;
  }
  retry(match:Match,actor:string,commandId:string,hash:string,now:Date):CommandResult|undefined {
    alive(match,now);
    const receipt=match.acceptedCommands.find(r=>r.commandId===commandId);
    if(!receipt) return;
    if(receipt.actorPlayerId!==actor||receipt.digest!==hash) fail('command_conflict');
    return {snapshot:snapshot(match),receipt,duplicate:true};
  }
  async create(token:string|undefined,command:CreateCommand):Promise<CommandResult> {
    const actor=await this.actor(token);uuid(command.commandId);id(command.petId);id(command.opponentPlayerId);
    const hash=digest('create',[command.petId,command.opponentPlayerId]),now=this.clock();
    const existing=await this.repo.createdBy(actor._id,command.commandId);
    if(existing) return this.retry(existing,actor._id,command.commandId,hash,now)!;
    const pet=await this.ownedPet(actor._id,command.petId);
    const opponent=await this.repo.player(command.opponentPlayerId);
    if(!opponent||opponent.sessionExpiresAt<=now) fail('opponent_unavailable',400);
    const match=waitingMatch(randomUUID(),actor._id,opponent._id,pet,now);
    match.createCommandId=command.commandId;
    const receipt:Receipt={commandId:command.commandId,actorPlayerId:actor._id,digest:hash,kind:'create',version:0};
    match.acceptedCommands=[receipt];
    const saved=await this.repo.insertMatch(match);
    if(saved._id!==match._id) return this.retry(saved,actor._id,command.commandId,hash,now)!;
    return {snapshot:snapshot(saved),receipt,duplicate:false};
  }
  async read(token:string|undefined,matchId:string) {
    const actor=await this.actor(token);id(matchId);
    const match=await this.repo.match(matchId);
    if(!match) fail('match_not_found',404);
    if(!match.participants.some(p=>p.playerId===actor._id)) fail('forbidden',403);
    alive(match,this.clock());return snapshot(match);
  }
  async join(token:string|undefined,matchId:string,command:JoinCommand):Promise<CommandResult> {
    const actor=await this.actor(token);id(matchId);uuid(command.commandId);version(command.expectedVersion);id(command.petId);
    const now=this.clock(),hash=digest('join',[command.expectedVersion,command.petId]);
    const match=await this.repo.match(matchId);
    if(!match) fail('match_not_found',404);
    if(match.invitedPlayerId!==actor._id) fail('forbidden',403);
    const prior=this.retry(match,actor._id,command.commandId,hash,now);if(prior)return prior;
    const pet=await this.ownedPet(actor._id,command.petId);
    const next=joinMatch(match,actor._id,pet,command.expectedVersion,now);
    const receipt:Receipt={commandId:command.commandId,actorPlayerId:actor._id,digest:hash,kind:'join',version:next.version};
    next.acceptedCommands=[...match.acceptedCommands,receipt];
    if(await this.repo.compareAndSwap(match,next,actor._id,command.commandId,'join',now))return {snapshot:snapshot(next),receipt,duplicate:false};
    const current=await this.repo.match(matchId);if(!current)fail('match_not_found',404);
    const retried=this.retry(current,actor._id,command.commandId,hash,this.clock());if(retried)return retried;
    joinMatch(current,actor._id,pet,command.expectedVersion,this.clock());
    return fail('stale_version');
  }
  async move(token:string|undefined,matchId:string,command:MoveCommand):Promise<CommandResult> {
    const actor=await this.actor(token);id(matchId);uuid(command.commandId);version(command.expectedVersion);id(command.targetPetId);
    if(command.move!=='attack'&&command.move!=='defend')fail('invalid_move',400);
    const now=this.clock(),hash=digest('move',[command.expectedVersion,command.move,command.targetPetId]);
    const match=await this.repo.match(matchId);if(!match)fail('match_not_found',404);
    if(!match.participants.some(p=>p.playerId===actor._id))fail('forbidden',403);
    const prior=this.retry(match,actor._id,command.commandId,hash,now);if(prior)return prior;
    const next=moveMatch(match,actor._id,command,now);
    const receipt:Receipt={commandId:command.commandId,actorPlayerId:actor._id,digest:hash,kind:'move',version:next.version,event:next.lastEvent};
    next.acceptedCommands=[...match.acceptedCommands,receipt];
    if(await this.repo.compareAndSwap(match,next,actor._id,command.commandId,'move',now))return {snapshot:snapshot(next),receipt,duplicate:false};
    const current=await this.repo.match(matchId);if(!current)fail('match_not_found',404);
    const retried=this.retry(current,actor._id,command.commandId,hash,this.clock());if(retried)return retried;
    moveMatch(current,actor._id,command,this.clock());
    return fail('stale_version');
  }
}
