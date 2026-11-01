const codes=new Set(['openai_key_missing','avatar_invalid_provider','avatar_invalid_request_allowance','avatar_storage_unavailable','avatar_hosted_quota_unavailable','main_session_unavailable','main_profile_invalid','database_unavailable','hosted_feature_unavailable','main_boundary_rejected']);
type Environment=Record<string,string|undefined>;
export function reportAvatarFailure(stage:'runtime'|'session'|'http',error:unknown,env:Environment=process.env,write:(line:string)=>void=console.error) {
  if(env.POKEPET_AVATAR_DIAGNOSTICS!=='1')return;
  const code=(error as {code?:unknown}|null)?.code;
  const provider=env.POKEPET_AVATAR_PROVIDER??(env.OPENAI_API_KEY?'openai':'disabled');
  const runtime=env.POKEPET_RUNTIME_MODE??'local';
  write(JSON.stringify({feature:'avatar',stage,code:typeof code==='string'&&codes.has(code)?code:'unexpected_error',provider:['openai','fixture','disabled'].includes(provider)?provider:'invalid',runtime:['local','hosted'].includes(runtime)?runtime:'invalid',keyPresent:Boolean(env.OPENAI_API_KEY)}));
}
export function avatarRuntimeError(code:string) {return Object.assign(Error('Avatar runtime unavailable'),{code});}
