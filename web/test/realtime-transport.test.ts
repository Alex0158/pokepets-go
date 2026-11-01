import test from 'node:test';
import assert from 'node:assert/strict';
import { createRealtimeSession } from '../src/client/realtime-transport.ts';
import type { RealtimeTranscript } from '../src/shared/realtime.ts';
test('transport streams transcript events, ignores tool calls and stops microphone',async()=>{
  const nav=Object.getOwnPropertyDescriptor(globalThis,'navigator'),peer=Object.getOwnPropertyDescriptor(globalThis,'RTCPeerConnection'),oldFetch=globalThis.fetch;
  let trackStopped=0,stopRequests=0;const channels:Array<{onopen:(()=>void)|null;onmessage:((e:{data:string})=>void)|null}>=[];
  const track={stop(){trackStopped++;}},stream={getTracks:()=>[track],getAudioTracks:()=>[track]};
  class FakePeer {connectionState='connected';ontrack=null;onconnectionstatechange=null;addTrack(){}close(){}async createOffer(){return {sdp:'offer'};}async setLocalDescription(){}async setRemoteDescription(){}createDataChannel(){const c={onopen:null,onmessage:null};channels.push(c);return c;}}
  try{
    Object.defineProperty(globalThis,'navigator',{configurable:true,value:{mediaDevices:{getUserMedia:async()=>stream}}});Object.defineProperty(globalThis,'RTCPeerConnection',{configurable:true,value:FakePeer});
    globalThis.fetch=async(input)=>{if(String(input).endsWith('/stop')){stopRequests++;return Response.json({stopped:true});}return Response.json({sdp:'answer',sessionId:'01234567-89ab-4def-8123-0123456789ab',expiresAt:Date.now()+30000});};
    const turns:RealtimeTranscript[]=[],states:string[]=[];
    const session=createRealtimeSession({onState:s=>states.push(s),onUserTranscript:v=>turns.push(v),onAssistantTranscript:()=>{},onRemoteStream:()=>{},onError:()=>{throw Error('unexpected');}});
    await session.start();const channel=channels[0];channel.onopen?.();
    channel.onmessage?.({data:JSON.stringify({type:'conversation.item.input_audio_transcription.delta',item_id:'item_1',delta:'hello'})});
    channel.onmessage?.({data:JSON.stringify({type:'conversation.item.input_audio_transcription.completed',item_id:'item_1',transcript:'hello pet'})});
    channel.onmessage?.({data:JSON.stringify({type:'response.function_call_arguments.done',item_id:'item_2',arguments:'{}'})});
    channel.onmessage?.({data:JSON.stringify({type:'conversation.item.input_audio_transcription.completed',item_id:'item_1',transcript:'again'})});
    assert.deepEqual(turns,[{turnId:'item_1',text:'hello',final:false},{turnId:'item_1',text:'hello pet',final:true}]);
    session.stop();assert.equal(trackStopped,1);assert.equal(stopRequests,1);assert.deepEqual(states,['connecting','listening','stopped']);
  }finally{globalThis.fetch=oldFetch;if(nav)Object.defineProperty(globalThis,'navigator',nav);if(peer)Object.defineProperty(globalThis,'RTCPeerConnection',peer);else Reflect.deleteProperty(globalThis,'RTCPeerConnection');}
});
test('stopping before microphone permission resolves discards late stream',async()=>{
  const nav=Object.getOwnPropertyDescriptor(globalThis,'navigator'),peer=Object.getOwnPropertyDescriptor(globalThis,'RTCPeerConnection');
  let release!:(v:unknown)=>void,stopped=0;const pending=new Promise(resolve=>{release=resolve;});
  try{
    Object.defineProperty(globalThis,'navigator',{configurable:true,value:{mediaDevices:{getUserMedia:()=>pending}}});Object.defineProperty(globalThis,'RTCPeerConnection',{configurable:true,value:class{}});
    const session=createRealtimeSession({onState:()=>{},onUserTranscript:()=>{},onAssistantTranscript:()=>{},onRemoteStream:()=>{},onError:()=>{throw Error('unexpected');}});
    const start=session.start();session.stop();release({getTracks:()=>[{stop(){stopped++;}}]});await start;assert.equal(stopped,1);
  }finally{if(nav)Object.defineProperty(globalThis,'navigator',nav);if(peer)Object.defineProperty(globalThis,'RTCPeerConnection',peer);else Reflect.deleteProperty(globalThis,'RTCPeerConnection');}
});
