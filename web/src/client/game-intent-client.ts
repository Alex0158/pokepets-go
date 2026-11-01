import type { WorldPlayer } from './world.ts';
import type { Stats } from '../shared/multiplayer.ts';

export type IntentResult={transcript:string;intent:'points_help'|'open_view'|'upgrade'|'select_player'|'challenge'|'activity_report'|'unknown';stat:keyof Stats|null;targetName:string|null;battleMode:'sneak'|'face'|null;view:'map'|'pet'|'battle'|'activity'|'community'|null};
const stats=['attack','health','defence','speed'];
export function readIntent(value:unknown):IntentResult {
  if(!value||typeof value!=='object')throw Error('Invalid command interpretation');
  const v=value as Record<string,unknown>;
  if(typeof v.transcript!=='string'||!v.transcript.trim()||v.transcript.length>4000||!['points_help','open_view','upgrade','select_player','challenge','activity_report','unknown'].includes(String(v.intent))||!(v.stat===null||stats.includes(String(v.stat)))||!(v.battleMode===null||['sneak','face'].includes(String(v.battleMode)))||!(v.view===null||['map','pet','battle','activity','community'].includes(String(v.view)))||!(v.targetName===null||(typeof v.targetName==='string'&&v.targetName.trim().length>0&&v.targetName.length<=80)))throw Error('Invalid command interpretation');
  return {transcript:v.transcript,intent:v.intent as IntentResult['intent'],stat:v.stat as IntentResult['stat'],targetName:v.targetName as string|null,battleMode:v.battleMode as IntentResult['battleMode'],view:v.view as IntentResult['view']};
}
export function matchingPlayers(players:WorldPlayer[],name:string|null){
  if(!name?.trim())return [];
  const query=name.trim().toLocaleLowerCase('en-GB');
  return players.filter(p=>[p.displayName,p.petName].some(n=>n.trim().toLocaleLowerCase('en-GB')===query));
}
export function confirmedCommand(kind:string,choice:{stat?:string;targetId?:string;mode?:string},players:WorldPlayer[],ownPetId:string):{path:string;payload:Record<string,unknown>}|null {
  if(kind==='upgrade'&&stats.includes(choice.stat??''))return {path:'/api/progression/upgrade',payload:{stat:choice.stat}};
  if(kind==='challenge'&&players.some(p=>p.playerId===choice.targetId)){
    if(choice.mode==='face')return {path:'/api/matches',payload:{petId:ownPetId,opponentPlayerId:choice.targetId}};
    if(choice.mode==='sneak')return {path:'/api/practice',payload:{opponentPlayerId:choice.targetId}};
  }
  return null;
}
