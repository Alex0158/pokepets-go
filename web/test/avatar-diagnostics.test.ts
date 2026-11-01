import test from 'node:test';
import assert from 'node:assert/strict';
import { reportAvatarFailure } from '../src/server/avatar/diagnostics.ts';

test('avatar diagnostic logs are opt-in and never include arbitrary error data or credential values',()=>{
  const logs:string[]=[];
  const error=Object.assign(Error('private request body'),{code:'openai_key_missing',cookie:'private cookie',requestBody:'private image'});
  const env={OPENAI_API_KEY:'private key',POKEPET_AVATAR_PROVIDER:'openai',POKEPET_RUNTIME_MODE:'local'};
  reportAvatarFailure('runtime',error,env,line=>logs.push(line));assert.equal(logs.length,0);
  reportAvatarFailure('runtime',error,{...env,POKEPET_AVATAR_DIAGNOSTICS:'1'},line=>logs.push(line));
  assert.deepEqual(JSON.parse(logs[0]),{feature:'avatar',stage:'runtime',code:'openai_key_missing',provider:'openai',runtime:'local',keyPresent:true});
  for(const value of ['private request body','private cookie','private image','private key'])assert.equal(logs[0].includes(value),false);
  reportAvatarFailure('http',Object.assign(Error('private'),{code:'private_dynamic_code'}),{POKEPET_AVATAR_DIAGNOSTICS:'1'},line=>logs.push(line));
  assert.equal(JSON.parse(logs[1]).code,'unexpected_error');
});
