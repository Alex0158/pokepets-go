import test from 'node:test';
import assert from 'node:assert/strict';
import { parseScore, validateAudio, validateText } from '../src/server/voice/rules.ts';

test('voice scoring accepts only bounded whole-number awards',()=>{
  assert.deepEqual(parseScore('{"points":12,"reason":"Nice play"}'),{points:12,reason:'Nice play'});
  for(const s of ['{"points":21,"reason":"x"}','{"points":-1,"reason":"x"}','{"points":1.5,"reason":"x"}','{}','not-json']) assert.throws(()=>parseScore(s));
});
test('typed pet activity is required and length bounded',()=>{
  assert.equal(validateText('  I played with my dog.  '),'I played with my dog.');
  assert.throws(()=>validateText('  '));assert.throws(()=>validateText('x'.repeat(4001)));assert.throws(()=>validateText(1));
});
test('audio must be a supported, bounded canonical base64 recording',()=>{
  assert.equal(validateAudio('YWJj','audio/webm').toString(),'abc');
  for(const [value,mime] of [['','audio/webm'],['%%%','audio/webm'],['YWJj','text/html'],['YQ','audio/webm']]) assert.throws(()=>validateAudio(value,mime));
  assert.throws(()=>validateAudio(Buffer.alloc(1024*1024+1).toString('base64'),'audio/wav'));
  const empty=Buffer.alloc(44);empty.write('RIFF',0);empty.writeUInt32LE(36,4);empty.write('WAVE',8);empty.write('data',36);
  assert.throws(()=>validateAudio(empty.toString('base64'),'audio/wav'));
});
