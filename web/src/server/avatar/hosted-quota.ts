import type { Db } from 'mongodb';
import { reserveHostedAICall } from '../hosted/ai-call-quota.ts';
export function avatarHostedQuotaGate(db:Db,cap:number) {
  return async()=>{try{return await reserveHostedAICall(db,cap);}catch{return false;}};
}
