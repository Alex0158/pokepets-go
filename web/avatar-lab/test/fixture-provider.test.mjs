import test from 'node:test';
import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';
import { createFixtureProvider } from '../service/fixture-provider.mjs';

test('server fixture reads from an explicit filesystem root independent of bundled module URLs',async()=>{
  const provider=createFixtureProvider({root:fileURLToPath(new URL('../',import.meta.url))});
  for(const subject of ['owner','pet']){
    const output=await provider({subject,signal:new AbortController().signal});
    assert.ok(Buffer.isBuffer(output.bytes)&&output.bytes.length>100);
    assert.equal(output.provenance.subject,subject);
    assert.equal(output.provenance.inputConditioned,false);
    assert.ok(output.manifest.animations.idle.frames.length>0);
  }
});
