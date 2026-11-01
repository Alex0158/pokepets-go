import test from 'node:test';
import assert from 'node:assert/strict';
import {validateRequestBoundary} from '../src/server/core/request-boundary.ts';
const hosted={POKEPET_RUNTIME_MODE:'hosted',POKEPET_HOSTED_ORIGIN:'https://game.example'};
const req=(url:string,method='GET',headers:Record<string,string>={})=>new Request(url,{method,headers});
function rejects(fn:()=>void,code:string){assert.throws(fn,(e:unknown)=>!!e&&typeof e==='object'&&'code' in e&&e.code===code)}
test('local default still requires loopback host and same origin JSON writes',()=>{
 validateRequestBoundary(req('http://localhost:3000/api/session'),{});
 rejects(()=>validateRequestBoundary(req('http://localhost:3000/api/session','GET',{host:'attacker.example'}),{}),'local_only');
 rejects(()=>validateRequestBoundary(req('http://localhost:3000/api/session','POST',{origin:'http://evil.example','content-type':'application/json'}),{}),'origin_rejected');
});
test('hosted requests require exact configured HTTPS host and same-origin JSON writes',()=>{
 validateRequestBoundary(req('https://game.example/api/session','POST',{host:'game.example',origin:'https://game.example','content-type':'application/json'}),hosted);
 validateRequestBoundary(req('http://internal/api/session','POST',{host:'game.example',origin:'https://game.example','x-forwarded-proto':'https','content-type':'application/json'}),hosted);
 rejects(()=>validateRequestBoundary(req('https://game.example/api/session','GET',{host:'evil.example','x-forwarded-host':'game.example'}),hosted),'host_rejected');
 rejects(()=>validateRequestBoundary(req('https://game.example/api/session','POST',{host:'game.example',origin:'https://evil.example','content-type':'application/json'}),hosted),'origin_rejected');
 rejects(()=>validateRequestBoundary(req('http://internal/api/session','GET',{host:'game.example','x-forwarded-proto':'http'}),hosted),'https_required');
 rejects(()=>validateRequestBoundary(req('https://game.example/api/session','POST',{host:'game.example',origin:'https://game.example','content-type':'text/plain'}),hosted),'json_required');
});
test('hosted config fails closed; process-local voice and avatar are disabled',()=>{
 for(const origin of ['http://game.example','https://user:pass@game.example','https://game.example/path','https://game.example?x=1','']) rejects(()=>validateRequestBoundary(req('https://game.example/api/session'),{POKEPET_RUNTIME_MODE:'hosted',POKEPET_HOSTED_ORIGIN:origin}),'hosted_config_invalid');
 rejects(()=>validateRequestBoundary(req('https://game.example/api/voice-mission','GET',{host:'game.example'}),hosted),'hosted_feature_unavailable');
 rejects(()=>validateRequestBoundary(req('https://game.example/api/avatars/config','GET',{host:'game.example'}),hosted),'hosted_feature_unavailable');
});

test('hosted session sets Secure cookie even when framework URL is internal HTTP',async()=>{
 const {createLocalApi}=await import('../src/server/core/http.ts');
 const previousMode=process.env.POKEPET_RUNTIME_MODE,previousOrigin=process.env.POKEPET_HOSTED_ORIGIN;
 try{
  process.env.POKEPET_RUNTIME_MODE='hosted';process.env.POKEPET_HOSTED_ORIGIN='https://game.example';
  const api=createLocalApi({repo:{db:{}},bootstrap:async()=>({token:'opaque-test-token',player:{},pet:{},matches:[]})} as never);
  const r=await api(new Request('http://internal/api/session',{method:'POST',headers:{host:'game.example',origin:'https://game.example','x-forwarded-proto':'https','content-type':'application/json'},body:JSON.stringify({displayName:'Guest'})}));
  assert.equal(r.status,200);assert.match(r.headers.get('set-cookie')??'',/; Secure/);
 }finally{
  if(previousMode===undefined)delete process.env.POKEPET_RUNTIME_MODE;else process.env.POKEPET_RUNTIME_MODE=previousMode;
  if(previousOrigin===undefined)delete process.env.POKEPET_HOSTED_ORIGIN;else process.env.POKEPET_HOSTED_ORIGIN=previousOrigin;
 }
});

test('hosted avatar remains disabled unless explicitly enabled, with origin and content guards intact',()=>{
 const request=req('https://game.example/api/avatars/config','GET',{host:'game.example'});
 rejects(()=>validateRequestBoundary(request,hosted),'hosted_feature_unavailable');
 validateRequestBoundary(request,{...hosted,POKEPET_HOSTED_AVATAR_ENABLED:'1'});
 rejects(()=>validateRequestBoundary(req('https://game.example/api/avatars/jobs','POST',{host:'game.example',origin:'https://evil.example','content-type':'application/json'}),{...hosted,POKEPET_HOSTED_AVATAR_ENABLED:'1'}),'origin_rejected');
});

test('hosted voice remains disabled unless explicitly enabled, with origin guards intact',()=>{
 const request=req('https://game.example/api/voice-mission','GET',{host:'game.example'});
 rejects(()=>validateRequestBoundary(request,hosted),'hosted_feature_unavailable');
 validateRequestBoundary(request,{...hosted,POKEPET_HOSTED_VOICE_ENABLED:'1'});
 rejects(()=>validateRequestBoundary(req('https://game.example/api/voice-mission','POST',{host:'game.example',origin:'https://evil.example','content-type':'application/json'}),{...hosted,POKEPET_HOSTED_VOICE_ENABLED:'1'}),'origin_rejected');
});
