import test from 'node:test';
import assert from 'node:assert/strict';
import { handleAvatarRequest } from '../src/server/avatar/runtime.ts';
test('avatar request boundary rejects before Mongo runtime setup',async()=>{
  const values={POKEPET_RUNTIME_MODE:'local',POKEPET_AVATAR_STORAGE:'mongo',POKEPET_AVATAR_PROVIDER:'fixture',POKEPET_DATABASE_MODE:'local',POKEPET_LOCAL_MONGODB_URI:'invalid-unused-test-config'};
  const prior=Object.fromEntries(Object.keys(values).map(k=>[k,process.env[k]]));
  try {
    Object.assign(process.env,values);
    const r=await handleAvatarRequest(new Request('http://foreign.invalid/api/avatars/config'));
    assert.equal(r.status,403);assert.equal((await r.json()).error,'local_only');
  }finally{for(const[k,v]of Object.entries(prior)){if(v===undefined)delete process.env[k];else process.env[k]=v;}}
});
