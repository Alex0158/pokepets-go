import test from 'node:test';
import assert from 'node:assert/strict';
import { databaseConfig } from '../src/server/db/local-runtime.ts';

test('Atlas requires explicit mode, SRV credentials and an isolated database name',()=>{
  const saved={...process.env};
  try {
    process.env.POKEPET_DATABASE_MODE='atlas';
    delete process.env.POKEPET_ATLAS_MONGODB_URI;
    assert.throws(()=>databaseConfig());
    process.env.POKEPET_ATLAS_MONGODB_URI='mongodb://127.0.0.1:27030';
    assert.throws(()=>databaseConfig());
    process.env.POKEPET_ATLAS_MONGODB_URI='mongodb+srv://user:pass@example.mongodb.net';
    process.env.POKEPET_ATLAS_DATABASE='production';
    assert.throws(()=>databaseConfig());
    process.env.POKEPET_ATLAS_DATABASE='pokepet_atlas_demo';
    const config=databaseConfig();
    assert.equal(config.kind,'atlas');
    assert.equal(config.name,'pokepet_atlas_demo');
    process.env.POKEPET_DATABASE_MODE='unexpected';
    assert.throws(()=>databaseConfig());
  } finally { process.env=saved; }
});
