import { createIntentHandler } from '../../../src/server/game-intent/http.ts';
import { classify, transcribe } from '../../../src/server/game-intent/provider.ts';
import { handleLocalRequest } from '../../../src/server/db/local-runtime.ts';
import { reserveIntentProviderCall } from '../../../src/server/game-intent/quota.ts';
export const runtime='nodejs';
export const dynamic='force-dynamic';
export const POST=createIntentHandler({
  session:async(request)=>{
    const url=new URL(request.url);url.pathname='/api/session';url.search='';
    const res=await handleLocalRequest(new Request(url,{method:'GET',headers:request.headers}));
    if(res.status===401)return false;if(!res.ok)throw Error('session_unavailable');return true;
  },
  hostedEnabled:()=>process.env.POKEPET_HOSTED_GAME_INTENT_ENABLED==='1',
  transcribe:(bytes,mime)=>transcribe(bytes,mime,process.env.OPENAI_API_KEY??'',reserveIntentProviderCall),
  classify:(text)=>classify(text,process.env.OPENAI_API_KEY??'',reserveIntentProviderCall),
});
