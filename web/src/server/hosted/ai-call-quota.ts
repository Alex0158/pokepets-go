import {MongoServerError} from 'mongodb';
import type {Db} from 'mongodb';

type DailyQuota={_id:string;used:number};

// A missing, malformed, or zero limit disables hosted paid calls. This is a
// provider-call count, not a currency budget or a guarantee of exactly-once.
export function configuredHostedAICap(value:string|undefined):number {
  if(!value||!/^[1-9]\d{0,3}$/.test(value))return 0;
  const cap=Number(value);return cap<=1000?cap:0;
}
export async function reserveHostedAICall(db:Db,cap:number,now:Date=new Date()):Promise<boolean> {
  if(!Number.isSafeInteger(cap)||cap<1||cap>1000||!Number.isFinite(now.getTime()))return false;
  const id=now.toISOString().slice(0,10),col=db.collection<DailyQuota>('hosted_ai_daily_quota');
  try { await col.updateOne({_id:id},{$setOnInsert:{used:0}},{upsert:true,maxTimeMS:2000}); }
  catch(error){if(!(error instanceof MongoServerError&&error.code===11000))throw error;}
  const updated=await col.findOneAndUpdate({_id:id,used:{$lt:cap}},{$inc:{used:1}},{returnDocument:'after',maxTimeMS:2000});
  return updated!==null;
}
