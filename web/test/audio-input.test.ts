import test from 'node:test';
import assert from 'node:assert/strict';
import { validateAudioInput } from '../src/client/audio-validation.ts';
function wav(samples:number){const b=Buffer.alloc(44+samples);b.write('RIFF');b.writeUInt32LE(36+samples,4);b.write('WAVEfmt ',8);b.writeUInt32LE(16,16);b.writeUInt16LE(1,20);b.writeUInt16LE(1,22);b.writeUInt32LE(16000,24);b.writeUInt32LE(32000,28);b.writeUInt16LE(2,32);b.writeUInt16LE(16,34);b.write('data',36);b.writeUInt32LE(samples,40);return new Blob([b],{type:'audio/wav'});}
test('header-only WAV is rejected before provider transmission; WAV with samples is allowed',async()=>{await assert.rejects(validateAudioInput(wav(0)),/samples/i);assert.equal(await validateAudioInput(wav(32)),'audio/wav');});
test('unsupported and oversized audio is rejected locally',async()=>{await assert.rejects(validateAudioInput(new Blob(['x'],{type:'text/plain'})));await assert.rejects(validateAudioInput(new Blob([new Uint8Array(1048577)],{type:'audio/webm'})));});
