import { fail } from './battle.ts';

type Config={POKEPET_RUNTIME_MODE?:string;POKEPET_HOSTED_ORIGIN?:string;POKEPET_HOSTED_AVATAR_ENABLED?:string;POKEPET_HOSTED_VOICE_ENABLED?:string};
export function validateRequestBoundary(request:Request,config:Config) {
  const url=new URL(request.url), mode=config.POKEPET_RUNTIME_MODE??'local';
  if(mode==='local') {
    if(!['127.0.0.1','localhost','[::1]'].includes(url.hostname))fail('local_only',403);
    const host=request.headers.get('host')??url.host;
    if(!/^(127\.0\.0\.1|localhost|\[::1\])(?::\d+)?$/.test(host))fail('local_only',403);
    if(request.method!=='GET') {
      if(request.headers.get('origin')!==`${url.protocol}//${host}`)fail('origin_rejected',403);
      if(request.headers.get('content-type')?.split(';')[0].trim()!=='application/json')fail('json_required',415);
    }
    return;
  }
  if(mode!=='hosted')fail('hosted_config_invalid',503);
  const origin=config.POKEPET_HOSTED_ORIGIN;
  let expected:URL;
  try { expected=new URL(origin??''); } catch { return fail('hosted_config_invalid',503); }
  if(expected.protocol!=='https:'||expected.username||expected.password||expected.pathname!=='/'||expected.search||expected.hash||expected.origin!==origin)fail('hosted_config_invalid',503);
  const host=request.headers.get('host');
  if(!host||host.toLowerCase()!==expected.host.toLowerCase())fail('host_rejected',403);
  if(url.protocol!=='https:'&&request.headers.get('x-forwarded-proto')!=='https')fail('https_required',403);
  if((url.pathname==='/api/voice-mission'||url.pathname.startsWith('/api/voice-mission/'))&&config.POKEPET_HOSTED_VOICE_ENABLED!=='1')fail('hosted_feature_unavailable',503);
  if((url.pathname==='/api/avatars'||url.pathname.startsWith('/api/avatars/'))&&config.POKEPET_HOSTED_AVATAR_ENABLED!=='1')fail('hosted_feature_unavailable',503);
  if(request.method!=='GET') {
    if(request.headers.get('origin')!==expected.origin)fail('origin_rejected',403);
    if(request.headers.get('content-type')?.split(';')[0].trim()!=='application/json')fail('json_required',415);
  }
}
