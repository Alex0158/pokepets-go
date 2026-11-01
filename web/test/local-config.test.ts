import test from 'node:test';
import assert from 'node:assert/strict';
import { localDatabaseConfig } from '../src/server/db/local-runtime.ts';
import { createLocalApi } from '../src/server/core/http.ts';
import type { BackboneService } from '../src/server/core/service.ts';

test('local runtime rejects missing, hosted or non-local database configuration before connecting',()=>{
  const originalUri=process.env.POKEPET_LOCAL_MONGODB_URI,originalName=process.env.POKEPET_LOCAL_DATABASE;
  try {
    delete process.env.POKEPET_LOCAL_MONGODB_URI;
    assert.throws(()=>localDatabaseConfig());
    process.env.POKEPET_LOCAL_MONGODB_URI='mongodb+srv://example.mongodb.net';
    assert.throws(()=>localDatabaseConfig());
    process.env.POKEPET_LOCAL_MONGODB_URI='mongodb://127.0.0.1:27028';
    process.env.POKEPET_LOCAL_DATABASE='production';
    assert.throws(()=>localDatabaseConfig());
    process.env.POKEPET_LOCAL_DATABASE='pokepet_local_demo';
    assert.deepEqual(localDatabaseConfig(),{uri:'mongodb://127.0.0.1:27028',name:'pokepet_local_demo'});
  }finally {
    if(originalUri===undefined)delete process.env.POKEPET_LOCAL_MONGODB_URI;else process.env.POKEPET_LOCAL_MONGODB_URI=originalUri;
    if(originalName===undefined)delete process.env.POKEPET_LOCAL_DATABASE;else process.env.POKEPET_LOCAL_DATABASE=originalName;
  }
});

test('non-loopback Host and cross-origin writes fail before invoking services',async()=>{
  const api=createLocalApi(new Proxy({} as BackboneService,{get(){throw Error('Service must not be invoked');}}));
  const foreignHost=new Request('http://localhost:3018/api/session',{headers:{host:'example.com'}});
  assert.equal((await api(foreignHost)).status,403);
  const foreignOrigin=new Request('http://127.0.0.1:3018/api/session',{method:'POST',headers:{origin:'http://evil.example','content-type':'application/json'},body:'{}'});
  assert.equal((await api(foreignOrigin)).status,403);
});
