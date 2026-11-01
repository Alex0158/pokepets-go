import { MongoServerError } from 'mongodb';
import type { Db } from 'mongodb';
import type { Match, Player, Pet } from '../../shared/multiplayer.ts';
export class MongoRepository {
  readonly db: Db;
  constructor(db:Db) { this.db=db; }
  async initialize() {
    await this.db.collection<Player>('players').createIndex({sessionHash:1},{unique:true});
    await this.db.collection<Pet>('pets').createIndex({ownerId:1},{unique:true});
    await this.db.collection<Match>('matches').createIndex({creatorId:1,createCommandId:1},{unique:true});
    await this.db.collection<Match>('matches').createIndex({'participants.playerId':1,createdAt:-1});
  }
  playerBySession(sessionHash:string) { return this.db.collection<Player>('players').findOne({sessionHash},{maxTimeMS:2000}); }
  player(id:string) { return this.db.collection<Player>('players').findOne({_id:id},{maxTimeMS:2000}); }
  async insertPlayer(player:Player) { await this.db.collection<Player>('players').insertOne(player); }
  async ensurePet(player:Player):Promise<Pet> {
    const pet:Pet={_id:`${player._id}-pet`,ownerId:player._id,name:'Companion',baseStats:{health:30,attack:10,defence:2,speed:5},createdAt:player.createdAt,updatedAt:player.createdAt};
    try { await this.db.collection<Pet>('pets').updateOne({_id:pet._id},{$setOnInsert:pet},{upsert:true}); }
    catch(error) { if(!(error instanceof MongoServerError&&error.code===11000)) throw error; }
    const saved=await this.pet(pet._id);
    if(!saved||saved.ownerId!==player._id) throw Error('Preset pet invariant failed');
    return saved;
  }
  pet(id:string) { return this.db.collection<Pet>('pets').findOne({_id:id},{maxTimeMS:2000}); }
  match(id:string) { return this.db.collection<Match>('matches').findOne({_id:id},{maxTimeMS:2000}); }
  createdBy(actor:string,commandId:string) { return this.db.collection<Match>('matches').findOne({creatorId:actor,createCommandId:commandId},{maxTimeMS:2000}); }
  async insertMatch(match:Match):Promise<Match> {
    try { await this.db.collection<Match>('matches').insertOne(match); return match; }
    catch(error) {
      if(!(error instanceof MongoServerError&&error.code===11000)) throw error;
      const existing=await this.createdBy(match.creatorId,match.createCommandId);
      if(!existing) throw error;
      return existing;
    }
  }
  async compareAndSwap(previous:Match,next:Match,actor:string,commandId:string,kind:'join'|'move',now:Date) {
    const filter={_id:previous._id,version:previous.version,status:previous.status,expiresAt:{$gt:now},'acceptedCommands.commandId':{$ne:commandId},...(kind==='move'?{turnPlayerId:actor,'participants.playerId':actor}:{invitedPlayerId:actor,participants:{$size:1}})};
    const result=await this.db.collection<Match>('matches').replaceOne(filter,next,{maxTimeMS:2000});
    return result.modifiedCount===1;
  }
  recentMatches(playerId:string,now:Date) {
    return this.db.collection<Match>('matches').find({'participants.playerId':playerId,expiresAt:{$gt:now}},{maxTimeMS:2000}).sort({createdAt:-1,_id:-1}).limit(20).toArray();
  }
}
