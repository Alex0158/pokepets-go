'use client';

import { useEffect, useRef, useState } from 'react';
import { createRealtimeSession } from '../../src/client/realtime-transport.ts';
import type { RealtimeSession, RealtimeState, RealtimeTranscript } from '../../src/shared/realtime.ts';

type Turn=RealtimeTranscript&{role:'user'|'assistant'};
type Props={active:boolean;disabled:boolean;onActive:(active:boolean)=>void;onReview:(text:string)=>void};
export function RealtimeConversation({active,disabled,onActive,onReview}:Props){
  const [local,setLocal]=useState(false),[consent,setConsent]=useState(false),[state,setState]=useState<RealtimeState>('idle'),[error,setError]=useState(''),[turns,setTurns]=useState<Turn[]>([]),[hasAudio,setHasAudio]=useState(false);
  const session=useRef<RealtimeSession|null>(null),audio=useRef<HTMLAudioElement|null>(null),alive=useRef(true),activeCallback=useRef(onActive);activeCallback.current=onActive;
  const clearAudio=()=>{if(audio.current){audio.current.pause();audio.current.srcObject=null;}if(alive.current)setHasAudio(false);};
  const stop=()=>{session.current?.stop();clearAudio();};
  useEffect(()=>{alive.current=true;setLocal(['localhost','127.0.0.1','[::1]'].includes(location.hostname));return()=>{alive.current=false;session.current?.stop();clearAudio();activeCallback.current(false);};},[]);
  useEffect(()=>{if(!active)stop();},[active]);
  const update=(role:Turn['role'],value:RealtimeTranscript)=>{if(!alive.current)return;setTurns(current=>{const next=current.filter(t=>!(t.role===role&&t.turnId===value.turnId));return [...next,{...value,role}].slice(-8);});};
  async function start(){
    if(!active||disabled||!local||!consent||state==='connecting'||state==='listening')return;
    setError('');setTurns([]);
    session.current=createRealtimeSession({
      onState:next=>{if(!alive.current)return;setState(next);activeCallback.current(next==='connecting'||next==='listening');if(next==='stopped'||next==='error')clearAudio();},
      onUserTranscript:value=>update('user',value),onAssistantTranscript:value=>update('assistant',value),
      onRemoteStream:stream=>{if(!alive.current||!audio.current)return;setHasAudio(true);audio.current.srcObject=stream;void audio.current.play().catch(()=>{if(alive.current)setError('Use the audio play control to hear the conversation.');});},
      onError:message=>{if(alive.current)setError(message);},
    });
    await session.current.start();
  }
  const connected=state==='connecting'||state==='listening';
  return <section className="realtime-conversation" aria-labelledby="realtime-title"><div className="realtime-heading"><h3 id="realtime-title">Have a conversation</h3><span className={connected?'mic-state live':'mic-state'} role="status">{state==='listening'?'● Microphone active':state==='connecting'?'Connecting…':state==='error'?'Connection unavailable':'Microphone off'}</span></div>
    <p>Talk and hear replies as you go. Conversation alone never spends points or starts a battle. Use a finished request below to review a game action.</p>
    <p className="muted">Local preview only. While connected, your microphone audio goes to OpenAI and model audio plays here. Sessions stop after about one minute, on Stop, on panel close or when this page is hidden. Transcripts stay in this tab.</p>
    {!local?<p className="realtime-unavailable">Live conversation is unavailable on this hosted demo. Typed and recorded game commands work only when enabled for this demo. Use the main navigation and normal game controls if they are unavailable.</p>:<label className="confirmation"><input type="checkbox" checked={consent} disabled={connected} onChange={e=>setConsent(e.target.checked)}/> I agree to a live microphone conversation with OpenAI.</label>}
    <div className="realtime-controls"><button className="primary" disabled={!local||!consent||disabled||connected||!active} onClick={()=>void start()}>Start conversation</button><button disabled={!connected} onClick={stop}>Stop conversation</button></div>
    <audio ref={audio} autoPlay controls hidden={!hasAudio} aria-label="Live conversation audio"/>
    {error&&<p role="alert" className="error">{error} You can return to the normal game controls.</p>}
    {turns.length>0&&<ol className="realtime-transcript" aria-live="polite" aria-label="Live conversation transcript">{turns.map(turn=><li key={`${turn.role}:${turn.turnId}`}><strong>{turn.role==='user'?'You':'Game companion'}{!turn.final?' · speaking…':''}</strong><p>{turn.text}</p>{turn.role==='user'&&turn.final&&turn.text.trim()&&<button disabled={disabled} onClick={()=>{stop();onReview(turn.text);}}>Use this as a game request</button>}</li>)}</ol>}
  </section>;
}
