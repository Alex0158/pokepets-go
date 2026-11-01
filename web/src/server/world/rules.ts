import { createHash } from 'node:crypto';
import type { Match, MatchEvent, MoveCommand } from '../../shared/multiplayer.ts';
import { moveMatch } from '../core/battle.ts';
export function worldPosition(id:string) {
  const hash=createHash('sha256').update(id).digest();
  return {x:Number((0.15+0.70*hash.readUInt16BE(0)/65535).toFixed(4)),z:Number((0.2+0.60*hash.readUInt16BE(2)/65535).toFixed(4))};
}
export function practiceTurn(match:Match,actor:string,cmd:MoveCommand,now:Date):{match:Match;events:MatchEvent[]} {
  const first=moveMatch(match,actor,cmd,now), events:MatchEvent[]=[first.lastEvent!];
  if(first.status==='finished')return {match:first,events};
  const bot=first.participants[1],target=first.participants[0];
  const second=moveMatch(first,bot.playerId,{commandId:`bot-${cmd.commandId}`,expectedVersion:first.version,move:'attack',targetPetId:target.petId},now);
  events.push(second.lastEvent!);return {match:second,events};
}
