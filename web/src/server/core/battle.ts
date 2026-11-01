import type { Match, Participant, Pet, MoveCommand } from '../../shared/multiplayer.ts';
export const MAX_MOVES=20;
export const MATCH_LIFETIME_MS=24*60*60*1000;
export class DomainError extends Error {
  code: string;
  status: number;
  constructor(code: string, status=409) { super(code); this.code=code; this.status=status; }
}
export function fail(code:string,status=409): never { throw new DomainError(code,status); }
export function alive(match:Match,now:Date) { if(match.expiresAt<=now) fail('match_expired',410); }
function participant(actor:string,pet:Pet): Participant {
  if(pet.ownerId!==actor) fail('pet_not_owned',403);
  const stats=pet.baseStats;
  for(const [key,value] of Object.entries(stats)) if(!Number.isSafeInteger(value)||value<1||value>100) fail(`invalid_stat_${key}`,400);
  return {playerId:actor,petId:pet._id,hp:stats.health,guarding:false,stats:{...stats}};
}
export function waitingMatch(id:string,actor:string,invitee:string,pet:Pet,now:Date):Match {
  if(actor===invitee) fail('distinct_players_required',400);
  return {_id:id,creatorId:actor,createCommandId:'',invitedPlayerId:invitee,status:'waiting',participants:[participant(actor,pet)],turnPlayerId:null,version:0,moveCount:0,result:null,winnerPlayerId:null,acceptedCommands:[],createdAt:now,updatedAt:now,expiresAt:new Date(now.getTime()+MATCH_LIFETIME_MS)};
}
export function joinMatch(match:Match,actor:string,pet:Pet,expectedVersion:number,now:Date):Match {
  alive(match,now);
  if(actor!==match.invitedPlayerId||actor===match.creatorId) fail('forbidden',403);
  if(expectedVersion!==match.version) fail('stale_version');
  if(match.status!=='waiting'||match.participants.length!==1) fail('match_not_waiting');
  return {...match,participants:[...match.participants,participant(actor,pet)],status:'active',version:match.version+1,turnPlayerId:match.creatorId,updatedAt:now};
}
export function moveMatch(match:Match,actor:string,command:MoveCommand,now:Date):Match {
  alive(match,now);
  const actorIndex=match.participants.findIndex(p=>p.playerId===actor);
  if(actorIndex<0) fail('forbidden',403);
  if(command.expectedVersion!==match.version) fail('stale_version');
  if(match.status!=='active') fail('match_finished');
  if(match.turnPlayerId!==actor) fail('invalid_turn');
  if(command.move!=='attack'&&command.move!=='defend') fail('invalid_move',400);
  const targetIndex=command.move==='attack'?1-actorIndex:actorIndex;
  if(command.targetPetId!==match.participants[targetIndex].petId) fail('invalid_target',400);
  const participants=match.participants.map(p=>({...p,stats:{...p.stats}}));
  const self=participants[actorIndex],other=participants[1-actorIndex];
  if(command.move==='defend') self.guarding=true;
  else {
    const damage=Math.max(1,self.stats.attack-other.stats.defence);
    other.hp=Math.max(0,other.hp-(other.guarding?Math.max(1,Math.floor(damage/2)):damage));
    other.guarding=false;
  }
  const moveCount=match.moveCount+1;
  const knockout=other.hp===0;
  const finished=knockout||moveCount>=MAX_MOVES;
  const version=match.version+1;
  const event={id:`${match._id}:${command.commandId}`,matchId:match._id,commandId:command.commandId,version,actorPlayerId:actor,move:command.move,targetPetId:command.targetPetId,resultingHp:participants[targetIndex].hp};
  return {...match,participants,version,moveCount,status:finished?'finished':'active',turnPlayerId:finished?null:other.playerId,result:knockout?'knockout':finished?'draw':null,winnerPlayerId:knockout?actor:null,lastEvent:event,updatedAt:now};
}
