import test from 'node:test';
import assert from 'node:assert/strict';
import { assessAudio, assessText } from '../src/server/voice/provider.ts';
test('audio reserves before each paid call and fails closed before scoring if quota is exhausted',async()=>{
  const original=globalThis.fetch;let reserved=0,calls=0;
  try {
    globalThis.fetch=async()=>{calls++;return Response.json({text:'I played with my pet'});};
    await assert.rejects(assessAudio(Buffer.from('synthetic'),'audio/webm','test-key',async()=>{reserved++;if(reserved===2)throw Error('quota_exhausted');}),/quota_exhausted/);
    assert.equal(reserved,2);assert.equal(calls,1);
  }finally{globalThis.fetch=original;}
});
test('text scoring does not contact provider when quota is exhausted',async()=>{
  const original=globalThis.fetch;let calls=0;
  try{globalThis.fetch=async()=>{calls++;throw Error('unexpected');};await assert.rejects(assessText('I fed my pet','test-key',async()=>{throw Error('quota_exhausted');}),/quota_exhausted/);assert.equal(calls,0);}finally{globalThis.fetch=original;}
});
