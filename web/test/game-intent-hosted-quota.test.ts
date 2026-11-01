import test from 'node:test';
import assert from 'node:assert/strict';
import { classify, transcribe } from '../src/server/game-intent/provider.ts';
test('intent provider reserves before transcription and classification',async()=>{
  const original=globalThis.fetch;let calls=0;
  try{
    globalThis.fetch=async()=>{calls++;throw Error('unexpected');};
    await assert.rejects(transcribe(Buffer.from('synthetic'),'audio/webm','test-key',async()=>{throw Error('quota_exhausted');}),/quota_exhausted/);
    await assert.rejects(classify('What is attack?','test-key',async()=>{throw Error('quota_exhausted');}),/quota_exhausted/);
    assert.equal(calls,0);
  }finally{globalThis.fetch=original;}
});
