import type { Pet, Stats } from '../../shared/multiplayer.ts';
import { fail } from '../core/battle.ts';

export type ProgressionAction = {kind:'mission';missionId:string;confirmed:boolean}|{kind:'upgrade';stat:keyof Stats};
export type ProgressionReceipt = {commandId:string;digest:string;version:number;kind:ProgressionAction['kind'];pointsAfter:number;statsAfter:Stats};
export type DailyMissions = {date:string;completedMissionIds:string[]};
export type Progression = {_id:string;ownerId:string;points:number;stats:Stats;completedMissionIds:string[];dailyMissions?:DailyMissions;version:number;receipts:ProgressionReceipt[];createdAt:Date;updatedAt:Date};
export const MISSIONS:Readonly<Record<string,number>>=Object.freeze({'sniff-safari':20,'living-room-play':15,'quiet-company':10});
export const DAILY_MISSIONS:Readonly<Record<string,number>>=Object.freeze({'daily-feed':15,'daily-play':15});
export const MAX_RECEIPTS=64;
const londonDate=new Intl.DateTimeFormat('en-GB',{timeZone:'Europe/London',year:'numeric',month:'2-digit',day:'2-digit'});
export function dailyMissionSnapshot(progress:Progression,now:Date):DailyMissions {
  const parts=Object.fromEntries(londonDate.formatToParts(now).map(part=>[part.type,part.value]));
  const date=`${parts.year}-${parts.month}-${parts.day}`;
  return {date,completedMissionIds:progress.dailyMissions?.date===date?[...progress.dailyMissions.completedMissionIds]:[]};
}
export function initialProgression(pet:Pet,now:Date):Progression {
  return {_id:pet._id,ownerId:pet.ownerId,points:0,stats:{...pet.baseStats},completedMissionIds:[],version:0,receipts:[],createdAt:now,updatedAt:now};
}
export function applyProgression(previous:Progression,action:ProgressionAction,now:Date):Progression {
  if(previous.receipts.length>=MAX_RECEIPTS)fail('progression_limit_reached');
  let points=previous.points,stats={...previous.stats},completedMissionIds=[...previous.completedMissionIds],dailyMissions=previous.dailyMissions;
  if(action.kind==='mission') {
    if(action.confirmed!==true)fail('confirmation_required',400);
    if(Object.hasOwn(DAILY_MISSIONS,action.missionId)) {
      const today=dailyMissionSnapshot(previous,now);
      if(today.completedMissionIds.includes(action.missionId))fail('mission_already_completed');
      points+=DAILY_MISSIONS[action.missionId];dailyMissions={...today,completedMissionIds:[...today.completedMissionIds,action.missionId]};
    } else {
      if(!Object.hasOwn(MISSIONS,action.missionId))fail('unknown_mission',400);
      if(completedMissionIds.includes(action.missionId))fail('mission_already_completed');
      points+=MISSIONS[action.missionId];completedMissionIds.push(action.missionId);
    }
  } else if(action.kind==='upgrade') {
    if(!['health','attack','defence','speed'].includes(action.stat))fail('invalid_stat',400);
    if(points<5)fail('insufficient_points');
    if(stats[action.stat]>=100)fail('stat_limit_reached');
    points-=5;stats[action.stat]++;
  } else fail('invalid_action',400);
  return {...previous,points,stats,completedMissionIds,...(dailyMissions?{dailyMissions}:{}),version:previous.version+1,updatedAt:now};
}
