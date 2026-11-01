import type { Db } from 'mongodb';
import { configuredHostedAICap, reserveHostedAICall } from '../hosted/ai-call-quota.ts';
export async function reserveVoiceProviderCall(db:Db) {
  if(process.env.POKEPET_RUNTIME_MODE!=='hosted')return;
  const cap=configuredHostedAICap(process.env.POKEPET_HOSTED_OPENAI_CALLS_PER_DAY);
  if(!cap||!await reserveHostedAICall(db,cap))throw Error('hosted_ai_quota_exhausted');
}
