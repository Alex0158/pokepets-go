'use client';

import { useEffect, useRef, useState } from 'react';
import { ApiError, request } from '../../src/client/game-client.ts';
import type { Profile, ProgressSnapshot } from '../../src/client/game-client.ts';
import { confirmedCommand, matchingPlayers, readIntent } from '../../src/client/game-intent-client.ts';
import type { IntentResult } from '../../src/client/game-intent-client.ts';
import type { WorldPlayer, WorldSnapshot } from '../../src/client/world.ts';
import { validateAudioInput } from '../../src/client/audio-validation.ts';

type View=NonNullable<IntentResult['view']>;
type Props={profile:Profile;progress:ProgressSnapshot|null;blocked:boolean;mutate:(path:string,payload:Record<string,unknown>)=>Promise<boolean>;onView:(view:View)=>void;onPlayer:(id:string)=>void;onActivity:(text:string)=>void};
const encode=(blob:Blob)=>new Promise<string>((resolve,reject)=>{const reader=new FileReader();reader.onload=()=>resolve(String(reader.result).split(',')[1]);reader.onerror=()=>reject(Error('Could not read recording'));reader.readAsDataURL(blob);});

export function GameVoicePanel({profile,progress,blocked,mutate,onView,onPlayer,onActivity}:Props){
  const [open,setOpen]=useState(false),[text,setText]=useState(''),[consent,setConsent]=useState(false),[audio,setAudio]=useState<Blob|null>(null),[audioUrl,setAudioUrl]=useState('');
  const [recording,setRecording]=useState(false),[busy,setBusy]=useState(false),[error,setError]=useState(''),[unavailable,setUnavailable]=useState(false),[message,setMessage]=useState('');
  const [result,setResult]=useState<IntentResult|null>(null),[players,setPlayers]=useState<WorldPlayer[]>([]),[target,setTarget]=useState(''),[stat,setStat]=useState(''),[mode,setMode]=useState(''),[view,setView]=useState<View>('map');
  const recorder=useRef<MediaRecorder|null>(null),stream=useRef<MediaStream|null>(null),timer=useRef<ReturnType<typeof setTimeout>|null>(null),inFlight=useRef(false),recordRequest=useRef(0);
  useEffect(()=>()=>{recordRequest.current++;if(recorder.current?.state==='recording')recorder.current.stop();stream.current?.getTracks().forEach(t=>t.stop());if(timer.current)clearTimeout(timer.current);},[]);
  useEffect(()=>{if(!audio){setAudioUrl('');return;}const url=URL.createObjectURL(audio);setAudioUrl(url);return()=>URL.revokeObjectURL(url);},[audio]);
  async function choose(blob:Blob){try{await validateAudioInput(blob);setAudio(blob);setResult(null);setError('');}catch(e){setError(e instanceof Error?e.message:'Invalid audio');}}
  async function record(){
    if(recording){recorder.current?.stop();return;}
    setError('');setResult(null);
    try{
      if(!navigator.mediaDevices||!window.MediaRecorder)throw Error('Microphone recording is unavailable. Type or choose audio instead.');
      const requestId=++recordRequest.current;const media=await navigator.mediaDevices.getUserMedia({audio:true});
      if(requestId!==recordRequest.current){media.getTracks().forEach(t=>t.stop());return;}stream.current=media;
      const mime=['audio/webm;codecs=opus','audio/mp4','audio/webm'].find(m=>MediaRecorder.isTypeSupported(m));
      if(!mime){media.getTracks().forEach(t=>t.stop());throw Error('No supported recording format.');}
      const chunks:Blob[]=[];const r=new MediaRecorder(media,{mimeType:mime,audioBitsPerSecond:64000});recorder.current=r;
      r.ondataavailable=e=>{if(e.data.size)chunks.push(e.data);};
      r.onstop=()=>{setRecording(false);media.getTracks().forEach(t=>t.stop());if(timer.current)clearTimeout(timer.current);void choose(new Blob(chunks,{type:mime.split(';')[0]}));};
      r.start();setRecording(true);timer.current=setTimeout(()=>{if(r.state==='recording')r.stop();},30000);
    }catch(e){stream.current?.getTracks().forEach(t=>t.stop());setError(e instanceof Error?e.message:'Microphone unavailable.');}
  }
  async function roster(){const world=await request<WorldSnapshot>('/api/world');return world.players.filter(p=>p.playerId!==profile.player._id);}
  async function interpret(useAudio:boolean){
    if(inFlight.current||!consent)return;inFlight.current=true;setBusy(true);setError('');setMessage('');setResult(null);
    try{
      const payload=useAudio?{audioBase64:await encode(audio!),mimeType:audio!.type.split(';')[0]}:{text:text.trim()};
      const next=readIntent(await request('/api/game-intent',{method:'POST',body:JSON.stringify(payload),signal:AbortSignal.timeout(70000)}));
      const list=['select_player','challenge'].includes(next.intent)?await roster():[];
      const exact=matchingPlayers(list,next.targetName);setPlayers(list);setTarget(exact.length===1?exact[0].playerId:'');setStat(next.stat??'');setMode(next.battleMode??'');setView(next.view??'map');setResult(next);
    }catch(e){
      if(e instanceof ApiError&&e.message==='game_intent_hosted_unavailable'){setUnavailable(true);setError('Game voice commands are unavailable on this hosted demo. Use the normal navigation, upgrades and map challenge buttons.');}
      else setError(e instanceof Error?e.message:'Could not interpret this request. Manual controls remain available.');
    }finally{inFlight.current=false;setBusy(false);}
  }
  async function confirm(){
    if(!result||busy||blocked)return;
    setError('');setBusy(true);
    try{
      if(result.intent==='open_view'){onView(view);setOpen(false);setResult(null);return;}
      if(result.intent==='activity_report'){onActivity(result.transcript);setOpen(false);setResult(null);setMessage('Draft copied to your activity report. Review it and explicitly submit for scoring.');return;}
      const list=['select_player','challenge'].includes(result.intent)?await roster():players;
      if(result.intent==='select_player'){
        if(!list.some(p=>p.playerId===target))throw Error('Choose a current registered player first.');
        onPlayer(target);setOpen(false);setResult(null);return;
      }
      const command=confirmedCommand(result.intent,{stat,targetId:target,mode},list,profile.pet._id);
      if(!command)throw Error('Choose a specific stat, player and battle mode before confirming.');
      const saved=await mutate(command.path,command.payload);
      setResult(null);
      if(saved){if(result.intent==='challenge'){onView('battle');setOpen(false);}setMessage('Saved using the normal game action.');}
      else setMessage('No success assumed. Use the game status and Retry pending request to recover the same command; do not create another request.');
    }catch(e){setError(e instanceof Error?e.message:'Could not complete this request.');}finally{setBusy(false);}
  }
  const playerAction=result?.intent==='challenge'||result?.intent==='select_player';
  const exact=result?matchingPlayers(players,result.targetName):[];
  const invalid=!result||result.intent==='upgrade'&&(!stat||!progress||progress.points<5||progress.stats[stat as keyof typeof progress.stats]>=100)||Boolean(playerAction&&!target)||result.intent==='challenge'&&!mode;
  return <details className="game-voice-panel" open={open} onToggle={e=>{setOpen(e.currentTarget.open);if(!e.currentTarget.open){recordRequest.current++;if(recorder.current?.state==='recording')recorder.current.stop();}}}>
    <summary>Talk to your game · Voice or text</summary>
    <div className="game-voice-content"><h2>What would you like to do?</h2><p>Ask about points, open a screen, upgrade a stat, select a player, start a challenge, or report a pet activity. Interpretation never spends or awards points.</p>
    <p className="muted">Audio or text is sent to OpenAI only when you choose Interpret. Audio and transcripts stay in this tab and are lost on reload. No automatic speaking or background microphone.</p>
    <label className="confirmation"><input type="checkbox" checked={consent} disabled={busy||recording} onChange={e=>setConsent(e.target.checked)}/> I agree to send this command to OpenAI for transcription and intent interpretation.</label>
    {!unavailable&&<><label>Game command<textarea value={text} maxLength={4000} rows={2} disabled={busy||recording} placeholder="How do points work? / Upgrade attack / Challenge Jamie" onChange={e=>{setText(e.target.value);setResult(null);}}/></label>
    <div className="voice-controls"><button disabled={!consent||busy||recording||!text.trim()} onClick={()=>void interpret(false)}>Interpret text command</button><button disabled={!recording&&(!consent||busy)} onClick={()=>void record()}>{recording?'Stop command recording':'Record game command'}</button><label className="audio-upload">Choose command audio<input type="file" accept="audio/webm,audio/mp4,audio/wav" disabled={busy||recording} onChange={e=>{const file=e.target.files?.[0];if(file)void choose(file);}}/></label></div>
    <p className="muted">Recording up to 30 seconds · WebM, MP4 or WAV · Maximum 1 MiB</p>
    {audioUrl&&<audio controls src={audioUrl} aria-label="Listen to your game command"/>}{audio&&<button disabled={!consent||busy||recording} onClick={()=>void interpret(true)}>Interpret audio command</button>}</>}
    {busy&&<p role="status">Working… No action is assumed saved.</p>}{error&&<p role="alert" className="error">{error}</p>}{message&&<p role="status">{message}</p>}
    {result&&<article className="intent-preview"><p className="eyebrow">INTERPRETED REQUEST · REVIEW FIRST</p><blockquote>{result.transcript}</blockquote>
      {result.intent==='points_help'?<p>You have <strong>{progress?.points??'—'} saved points</strong>. Each stat upgrade costs 5 points. Owner-reported activity can earn 0–20 AI-assessed points; battles award no points. Upgrades affect the next activated battle; active battles keep their starting stats.</p>:result.intent==='unknown'?<p>I could not identify a clear game request. Try a specific question or use the normal controls.</p>:<>
      {result.intent==='upgrade'&&<><label>Stat to upgrade<select value={stat} onChange={e=>setStat(e.target.value)}><option value="">Choose a stat</option>{['attack','health','defence','speed'].map(s=><option key={s} value={s}>{s}</option>)}</select></label><p>Spend 5 of your {progress?.points??'—'} saved points on one upgrade. Active battle stats stay unchanged.</p></>}
      {playerAction&&<><p>{exact.length>1?'Several players match. Choose the exact owner and pet.':!exact.length?'No unique exact name match. Choose a registered player.':'Review the selected registered player.'} Fictional positions; online status unknown.</p><label>Registered player<select value={target} onChange={e=>setTarget(e.target.value)}><option value="">Choose a player</option>{players.map((p,i)=><option key={p.playerId} value={p.playerId}>{p.displayName} + {p.petName} · Player {i+1}</option>)}</select></label></>}
      {result.intent==='challenge'&&<><label>Battle mode<select value={mode} onChange={e=>setMode(e.target.value)}><option value="">Choose a mode</option><option value="sneak">Sneak attack · Automatic copy</option><option value="face">Face-to-face · Invite actual owner</option></select></label><p>Sneak attack leaves their progress unchanged. Face-to-face requires their acceptance. Your Auto starts ON when Battle opens; turn it off for manual moves.</p></>}
      {result.intent==='open_view'&&<><label>Open screen<select value={view} onChange={e=>setView(e.target.value as View)}>{['map','pet','battle','activity','community'].map(v=><option key={v} value={v}>{v}</option>)}</select></label>{view==='battle'&&<p>Opening Battle starts Auto ON for your legal turns in an active match. You can switch Auto off in Battle.</p>}</>}
      {result.intent==='activity_report'&&<p>Copy this as an activity draft. It earns no points until you review and explicitly submit it in Tell your story.</p>}
      <button className="primary" disabled={busy||blocked||invalid} onClick={()=>void confirm()}>{result.intent==='upgrade'?'Confirm upgrade · Spend 5 points':result.intent==='challenge'?'Confirm battle request':result.intent==='activity_report'?'Review activity draft':'Confirm selection'}</button>
      </>}
      <button disabled={busy} onClick={()=>{setResult(null);setMessage('Cancelled. No game action was sent.');}}>Cancel request</button>
    </article>}
    {blocked&&<p className="muted">A game action is pending or loading. Resolve it before confirming another action; questions and interpretation remain available.</p>}
    </div>
  </details>;
}
