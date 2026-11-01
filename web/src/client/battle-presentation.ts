import { BattlePresentation } from '../../avatar-lab/battle-adapter.mjs';
import type { MatchSnapshot } from '../shared/multiplayer.ts';

// Extend the existing tested legacy adapter; server HP/results remain authoritative.
export class GameBattlePresentation extends BattlePresentation {
  apply(next:MatchSnapshot,options:{hydrate?:boolean}={}){
    const previous=this.current as MatchSnapshot|null;
    const previouslySeen=next.lastEvent?this.commands.has(`${next.lastEvent.matchId}:${next.lastEvent.commandId}`):false;
    const shown=super.apply(next,options);
    if(shown.actions.length||!next.lastEvent)return shown;
    const event=next.lastEvent,actor=next.participants.find(p=>p.playerId===event.actorPlayerId),target=next.participants.find(p=>p.petId===event.targetPetId);
    if(!actor||!target||event.matchId!==next.matchId||event.version!==next.version||event.id!==`${event.matchId}:${event.commandId}`||event.resultingHp!==target.hp||!['small_attack','big_attack','heal','flee'].includes(event.move))return shown;
    const key=`${event.matchId}:${event.commandId}`;this.commands.add(key);
    if(!previous||previous.matchId!==next.matchId||next.version<=previous.version||options.hydrate||previouslySeen)return shown;
    return {...shown,actions:['small_attack','big_attack'].includes(event.move)?[{petId:actor.petId,state:'attack',eventId:key},{petId:target.petId,state:'hurt',eventId:key}]:[{petId:actor.petId,state:event.move==='heal'?'heal':'move',eventId:key}]};
  }
}
