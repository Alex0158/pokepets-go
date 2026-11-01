'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import type { FormEvent } from 'react';
import { ApiError, GameClient, newerSnapshot, newerProgression, request } from '../../src/client/game-client.ts';
import type { Profile, ProgressSnapshot } from '../../src/client/game-client.ts';
import type { CommandResult, MatchSnapshot, MatchEvent, Stats } from '../../src/shared/multiplayer.ts';
import { MAP_MISSIONS } from '../../src/client/missions.ts';
import { BattlePanel } from './BattlePanel';
import { CharacterArt } from './CharacterArt';
import { MissionDialog } from './MissionDialog';
import { AvatarOnboarding } from './AvatarOnboarding';
import { WorldPlayers } from './WorldPlayers';
import { InteractiveWorld } from './InteractiveWorld';
import { DailyCare } from './DailyCare';
import { VoiceActivity } from './VoiceActivity';
import { GameVoicePanel } from './GameVoicePanel';
import { GameIcon } from './GameIcon';
import { CommunityPanel } from '../../src/features/community/CommunityPanel';
import { validateCharacterAsset } from '../../src/client/avatar-client.ts';
import type { AvatarAssets, AvatarManifest, AvatarSubject } from '../../src/client/avatar-client.ts';
import { readCharacterRefs, saveCharacterRefs } from '../../src/client/character-cache.ts';
import './game.css';
import './polish.css';

type Result=({snapshot:ProgressSnapshot}|CommandResult)&{decision?:{source:'decisions'|'fallback';move:string};events?:MatchEvent[];duplicate?:boolean};
const friendly=(error:unknown)=>error instanceof Error?error.message.replaceAll('_',' '):'The request could not be completed.';

export default function GameShell(){
  const [profile,setProfile]=useState<Profile|null>(null),[progress,setProgress]=useState<ProgressSnapshot|null>(null);
  const [selected,setSelected]=useState<string>(MAP_MISSIONS[0].id),[missionOpen,setMissionOpen]=useState(false),[confirmed,setConfirmed]=useState(false);
  const [onboarding,setOnboarding]=useState(false),[voicePending,setVoicePending]=useState(false);
  const [voiceSelection,setVoiceSelection]=useState<{id:string;nonce:number}|null>(null),[activityDraft,setActivityDraft]=useState<{text:string;nonce:number}|null>(null);
  const [view,setView]=useState('explore'),[name,setName]=useState('Explorer'),[busy,setBusy]=useState(false),[loading,setLoading]=useState(true);
  const [error,setError]=useState(''),[notice,setNotice]=useState(''),[pending,setPending]=useState(false),[match,setMatch]=useState<MatchSnapshot|null>(null);
  const client=useRef<GameClient|null>(null);
  const [assets,setAssets]=useState<AvatarAssets>({});
  const [assetCacheReady,setAssetCacheReady]=useState(false);
  const [battleEvents,setBattleEvents]=useState<MatchEvent[]>([]);
  const [battleMode,setBattleMode]=useState<'face'|'practice'>('face'),[lastPractice,setLastPractice]=useState<string|null>(null),[developer,setDeveloper]=useState(false),[decisionSource,setDecisionSource]=useState<'decisions'|'fallback'|null>(null);
  useEffect(()=>{setDeveloper(new URLSearchParams(location.search).get('developer')==='1');},[]);
  useEffect(()=>{if(!profile)return;let canceled=false;setAssetCacheReady(false);try{const refs=readCharacterRefs(localStorage,profile.player._id);void Promise.all(refs.map(async descriptor=>{try{const manifest=await request<AvatarManifest>(descriptor.manifestUrl);const asset=validateCharacterAsset(descriptor,manifest,descriptor.subject);if(!canceled)setAssets(current=>({...current,[asset.subject]:asset}));}catch{/* Expired/private assets fall back to presets. */}})).finally(()=>{if(!canceled)setAssetCacheReady(true);});}catch{setAssetCacheReady(true);}return()=>{canceled=true;};},[profile?.player._id]);
  useEffect(()=>{if(!profile||!assetCacheReady||!Object.values(assets).some(Boolean))return;try{saveCharacterRefs(localStorage,profile.player._id,assets);}catch{/* Artwork metadata cache is optional. */}},[assets,assetCacheReady,profile?.player._id]);
  const clearAsset=(subject:AvatarSubject,id:string)=>setAssets(current=>current[subject]?.assetId===id?{...current,[subject]:undefined}:current);
  const assetLabel=(subject:AvatarSubject)=>!assets[subject]?'preset':assets[subject]!.provenance.provider==='openai'?(assets[subject]!.provenance.inputPolicy==='personal-photo'?'generated photo · temporary':'generated synthetic · temporary'):'fixture sample';
  const mission=MAP_MISSIONS.find(m=>m.id===selected)!;
  const refresh=useCallback(async()=>{
    const loaded=await request<Profile>('/api/session');
    setProfile(loaded);
    if(!client.current||client.current.key!==`pokepet-pending-v1:${loaded.player._id}`){setAssets({});client.current=new GameClient(loaded.player._id,localStorage);}
    setPending(Boolean(client.current.pending()));
    try{setLastPractice(localStorage.getItem(`pokepet-last-practice:${loaded.player._id}`));}catch{/* Optional restore pointer only. */}
    const saved=await request<ProgressSnapshot>('/api/progression');
    setProgress(current=>current?.petId===saved.petId?newerProgression(current,saved):saved);
  },[]);
  useEffect(()=>{refresh().catch(e=>{if(!(e instanceof ApiError&&e.status===401))setError(friendly(e));}).finally(()=>setLoading(false));},[refresh]);
  const accept=(result:Result,path='')=>{
    const saved=result.snapshot;
    setDecisionSource(result.decision?.source??null);
    if('petId' in saved)setProgress(current=>newerProgression(current,saved));
    else {setBattleEvents(result.duplicate?[]:(result.events??(saved.lastEvent?[saved.lastEvent]:[])));const practice=path.startsWith('/api/practice')||(path==='/api/auto-move'&&'mode' in saved&&saved.mode==='practice')||(path==='/api/auto-move'&&battleMode==='practice');setBattleMode(practice?'practice':'face');setMatch(current=>current?.matchId===saved.matchId?newerSnapshot(current,saved):saved);if(practice){setLastPractice(saved.matchId);try{localStorage.setItem(`pokepet-last-practice:${profile?.player._id}`,saved.matchId);}catch{/* Server remains authoritative. */}}}
  };
  const mutate=async(path:string,payload:Record<string,unknown>)=>{
    if(!client.current||busy)return false;
    let saved=false;
    setBusy(true);setError('');setNotice('');
    try{const result=await client.current.command<Result>(path,payload);accept(result,path);saved=true;setNotice('Saved. Your progress is up to date.');setMissionOpen(false);await refresh();}
    catch(e){setError(friendly(e));try{await refresh();}catch{/* Preserve the visible saved snapshot. */}}
    finally{try{setPending(Boolean(client.current?.pending()));}catch(e){setError(friendly(e));}setBusy(false);}
    return saved;
  };
  async function retry(){
    if(!client.current||busy)return;setBusy(true);setError('');
    try{const path=client.current.pending()?.path??'';accept(await client.current.retry<Result>(),path);setNotice('Saved result recovered.');setMissionOpen(false);await refresh();}catch(e){setError(friendly(e));}
    finally{try{setPending(Boolean(client.current.pending()));}catch(e){setError(friendly(e));}setBusy(false);}
  }
  async function start(event:FormEvent){event.preventDefault();setBusy(true);setError('');try{await request('/api/session',{method:'POST',body:JSON.stringify({displayName:name})});await refresh();setOnboarding(true);}catch(e){setError(friendly(e));}finally{setBusy(false);}}
  const blocked=busy||pending||!progress;
  const complete=Boolean(progress?.completedMissionIds.includes(mission.id));
  const findPlayers=()=>{setOnboarding(false);setView('explore');setNotice('Choose another owner and pet on the map to start a Sneak attack or send a Face-to-face invitation.');};
  const choose=(id:string)=>{setSelected(id);setConfirmed(false);setMissionOpen(true);};
  return <div className="game-shell">
    <header className="game-header"><a className="game-brand" href="/">pokepet<span>go</span><small>AFTERGLOW</small></a>{profile&&<p className="header-session"><span><strong>{profile.player.displayName}</strong> & {profile.pet.name}</span><button aria-label="Refresh saved state" title="Refresh saved state" disabled={busy} onClick={()=>{setError('');refresh().catch(e=>setError(friendly(e)));}}><GameIcon name="refresh"/></button></p>}<div className="game-balance"><span>✦</span> <strong>{progress?.points??'—'}</strong> points to spend</div></header>
    <nav className="game-nav" aria-label="Main navigation"><a className="rail-brand" href="/" aria-label="Pokepet Go home"><GameIcon name="pet"/></a>{[['explore','Explore'],['activity','Tell your story'],['daily','Daily care'],['pet','My pet'],['memories','Memories'],['avatar','Characters'],['community','Community'],['battle','Battle']].map(([id,label])=><button key={id} title={label} aria-current={(id==='avatar'?onboarding:!onboarding&&view===id)?'page':undefined} onClick={()=>{setOnboarding(id==='avatar');setView(id==='avatar'?'explore':id);}}><GameIcon name={id}/><span>{label}</span></button>)}</nav>
    <main className="game-main">
      <div className="game-intro"><div><p className="eyebrow">THE CITY IS YOUR PLAYGROUND</p><h1>Small paws. <span>Big adventures.</span></h1></div><p className="world-label">☾ Haggerston neighbourhood<small>Fictional positions · Preset / generated artwork</small></p></div>
      <div aria-live="polite" className="game-status">{loading&&<p>Connecting to your saved adventure…</p>}{notice&&<p className="success">{notice}</p>}{error&&<p className="error" role="alert">{error}</p>}{pending&&<p className="error">An action is waiting for a confirmed result. <button disabled={busy} onClick={retry}>Retry pending request</button></p>}</div>
      {!profile&&!loading&&<form className="session-card" onSubmit={start}><div><h2>Meet your adventure duo</h2><p>Create a player session to save missions and upgrades to the database.</p></div><label>Owner name <input value={name} onChange={e=>setName(e.target.value)} required maxLength={40}/></label><button className="primary" disabled={busy}>Start exploring</button></form>}
      {voicePending&&view!=='activity'&&<p className="session-note">Your activity report is awaiting a saved result. <button onClick={()=>{setOnboarding(false);setView('activity');}}>Open activity report</button></p>}
      {profile&&<div hidden={onboarding||view!=='community'}><CommunityPanel playerId={profile.player._id}/></div>}
      {profile&&<GameVoicePanel key={profile.player._id} profile={profile} progress={progress} blocked={blocked||voicePending} mutate={mutate} onView={next=>{setOnboarding(false);setView(next==='map'?'explore':next);}} onPlayer={id=>{setVoiceSelection({id,nonce:Date.now()});setOnboarding(false);setView('explore');}} onActivity={text=>{setActivityDraft({text,nonce:Date.now()});setOnboarding(false);setView('activity');}}/>}
      {profile&&<VoiceActivity playerId={profile.player._id} active={!onboarding&&view==='activity'} blocked={blocked} draft={activityDraft} onPending={setVoicePending} onSaved={result=>{setProgress(current=>newerProgression(current,result.snapshot));setNotice(`Activity saved · +${result.points} points`);}}/>}
      {onboarding&&profile?<AvatarOnboarding ownerName={profile.player.displayName} onAssets={partial=>setAssets(current=>({...current,...partial}))} onContinue={()=>setOnboarding(false)}/>:null}
      {!onboarding&&view==='explore'&&<>
        <div className="world-layout"><section className="world-card" aria-label="Explore the illustrated neighbourhood"><InteractiveWorld assets={assets} onAssetUnavailable={clearAsset} renderOverlay={project=><WorldPlayers profile={profile} blocked={blocked} mutate={mutate} onBattle={()=>setView('battle')} selection={voiceSelection} onSelectionHandled={()=>setVoiceSelection(null)} project={project}/>}/><div className="selected-adventure"><div><p className="eyebrow">YOUR PET’S STORY</p><h2>A little moment worth sharing</h2><p>Describe your interaction by voice or text. <strong>AI-assessed game points</strong></p></div><button className="primary" onClick={()=>setView('activity')}>Share your pet moment →</button></div></section>
        <aside className="adventure-sidebar"><section className="duo-card"><div className="duo-title"><p className="eyebrow">YOUR ADVENTURE DUO</p><button className="duo-edit" aria-label="Customize your characters" onClick={()=>setOnboarding(true)}><GameIcon name="arrow"/></button></div><div className="duo-art"><CharacterArt subject="pet" asset={assets.pet} onAssetUnavailable={id=>clearAsset('pet',id)} alt="Pet character"/></div><span className="duo-badge">YOUR COMPANION</span><h2>{profile?.pet.name??'Your companion'}</h2><p className="duo-provenance">Pet · {assetLabel('pet')}</p><dl className="duo-stats">{(['health','attack','defence','speed'] as (keyof Stats)[]).map(stat=><div key={stat}><dt>{stat}</dt><dd>{progress?.stats[stat]??'—'}</dd></div>)}</dl><button className="duo-upgrades" onClick={()=>setView('pet')}>View stats and upgrades <GameIcon name="arrow"/></button><div className="duo-owner"><CharacterArt subject="owner" asset={assets.owner} onAssetUnavailable={id=>clearAsset('owner',id)} alt="Owner character"/><div><strong>{profile?.player.displayName??'You'}</strong><small>Owner · {assetLabel('owner')}</small></div></div><p className="asset-retention">Generated previews are private and expire after five minutes.</p></section><button className="sidebar-action challenge-action" onClick={findPlayers}><GameIcon name="battle"/><span><small>FRIENDLY RIVALRIES</small><strong>Meet your match</strong><em>Challenge another player</em></span><GameIcon name="arrow"/></button><button className="sidebar-action daily-action" onClick={()=>setView('daily')}><GameIcon name="daily"/><span><small>EVERYDAY ADVENTURES</small><strong>A little care, every day</strong><em>Open Daily care</em></span><GameIcon name="arrow"/></button></aside></div>
        </>}
      {!onboarding&&view==='legacy'&&<><p className="muted">Earlier curated adventures · Manual owner-confirmed fallback</p><div className="section-title"><p className="eyebrow">EARLIER ADVENTURES</p><h2>Your next chapter</h2></div><div className="mission-list">{MAP_MISSIONS.map(m=><button key={m.id} onClick={()=>choose(m.id)}><span className="quest-icon">{m.icon}</span><h3>{m.title}</h3><p>{m.minutes} min · +{m.points} points</p><span>{progress?.completedMissionIds.includes(m.id)?'Completed ✓':'Explore adventure →'}</span></button>)}</div>
      </>}
      {!onboarding&&(view==='activity'||view==='daily'||view==='legacy')&&<details className="fallback-activities"><summary>Manual activities if voice or AI reporting is unavailable</summary><p className="muted">These use the earlier fixed rules and your confirmation, without OpenAI assessment.</p><button onClick={()=>setView('daily')}>Daily care fallback</button><button onClick={()=>setView('legacy')}>Earlier adventures</button></details>}
      {!onboarding&&view==='daily'&&<DailyCare progress={progress} blocked={blocked} mutate={mutate}/>}
      {!onboarding&&view==='pet'&&<section className="feature-panel"><p className="eyebrow">GROW TOGETHER</p><h2>{profile?.pet.name??'Your pet'}</h2><p>Each upgrade costs 5 saved points. New stats apply when your next battle activates; a battle already underway keeps its starting stats.</p><div className="stats-grid">{(['health','attack','defence','speed'] as (keyof Stats)[]).map(stat=><div key={stat}><span>{stat}</span><strong>{progress?.stats[stat]??'—'}</strong><button disabled={blocked||(progress?.points??0)<5||(progress?.stats[stat]??100)>=100} onClick={()=>mutate('/api/progression/upgrade',{stat})}>Upgrade {stat} · 5 points</button></div>)}</div><p className="muted">Stats are fictional game values. Speed is saved for future use; the current battle alternates turns. Health, attack and defence affect combat.</p></section>}
      {!onboarding&&view==='memories'&&<section className="feature-panel"><p className="eyebrow">THE MOMENTS WE KEEP</p><h2>Earlier completed adventures</h2><p>These are your saved curated activities. Raw voice reports and transcripts are not retained. Share a new memory in Community.</p><button onClick={()=>setView('community')}>Open Community →</button>{progress?.completedMissionIds.length?MAP_MISSIONS.filter(m=>progress.completedMissionIds.includes(m.id)).map(m=><article className="memory" key={m.id}><span>{m.icon}</span><div><h3>{m.title}</h3><p>{m.description}</p><small>Owner-confirmed · Completed ✓</small></div></article>):<p>No adventures completed yet. Choose a map marker to begin.</p>}</section>}
      {!onboarding&&view==='battle'&&<BattlePanel onMap={findPlayers} profile={profile} match={match} setMatch={setMatch} mutate={mutate} blocked={blocked} refresh={refresh} mode={battleMode} setMode={setBattleMode} lastPractice={lastPractice} developer={developer} decisionSource={decisionSource} ownPetAsset={assets.pet} events={battleEvents}/>}
      <footer>Fictional map · No location tracking · Owner-confirmed activities · Real saved progression</footer>
    </main>
    {missionOpen&&<MissionDialog onClose={()=>setMissionOpen(false)}><section className="mission-dialog"><button className="close-dialog" aria-label="Close mission" onClick={()=>setMissionOpen(false)}>×</button><p className="eyebrow">YOUR ADVENTURE, YOUR PACE</p><h2 id="mission-title">{mission.title}</h2><div className="dialog-icon">{mission.icon}</div><p>{mission.description}</p><p>{mission.place} · {mission.minutes} min · <strong>+{mission.points} points once</strong></p>{complete?<p className="success">This adventure is already completed and saved.</p>:<><label className="confirmation"><input type="checkbox" checked={confirmed} onChange={e=>setConfirmed(e.target.checked)}/> I confirm we enjoyed this activity together.</label><p className="muted">No timer or GPS verification. Follow your pet’s pace.</p><button className="primary" disabled={blocked||!confirmed} onClick={()=>mutate('/api/progression/mission',{missionId:mission.id,confirmed:true})}>{profile?'We did it! Save adventure':'Create a player session first'}</button></>}<button onClick={()=>setMissionOpen(false)}>{complete?'Back to map':'Skip for now'}</button></section></MissionDialog>}
  </div>;
}
