'use client';

import { useEffect, useRef, useState } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import type { Profile } from '../../src/client/game-client.ts';
import { newerSnapshot, request } from '../../src/client/game-client.ts';
import type { MatchSnapshot, MatchEvent } from '../../src/shared/multiplayer.ts';
import { CharacterArt } from './CharacterArt';
import type { ApprovedCharacterAsset } from '../../src/client/avatar-client.ts';
import { GameBattlePresentation } from '../../src/client/battle-presentation.ts';

type Props={onMap:()=>void;profile:Profile|null;match:MatchSnapshot|null;setMatch:Dispatch<SetStateAction<MatchSnapshot|null>>;mutate:(path:string,payload:Record<string,unknown>)=>Promise<boolean>;blocked:boolean;refresh:()=>Promise<void>;mode:'face'|'practice';setMode:Dispatch<SetStateAction<'face'|'practice'>>;lastPractice:string|null;developer:boolean;decisionSource:'decisions'|'fallback'|null;ownPetAsset?:ApprovedCharacterAsset;events:MatchEvent[]};
export function BattlePanel({onMap,profile,match,setMatch,mutate,blocked,refresh,mode,setMode,lastPractice,developer,decisionSource,ownPetAsset,events}:Props){
  const [opponent,setOpponent]=useState(''),[invitation,setInvitation]=useState(''),[syncError,setSyncError]=useState('');
  const presentation=useRef(new GameBattlePresentation());
  const [effects,setEffects]=useState<{petId:string;state:string;eventId:string}[]>([]);
  const [autoOn,setAutoOn]=useState(true);
  const autoAttempt=useRef('');
  useEffect(()=>{
    if(!autoOn||blocked||syncError||!profile||!match||match.status!=='active'||match.turnPlayerId!==profile.player._id)return;
    const key=`${mode}:${match.matchId}:${match.version}`;if(autoAttempt.current===key)return;
    const timer=setTimeout(()=>{autoAttempt.current=key;void mutate('/api/auto-move',{mode,matchId:match.matchId,expectedVersion:match.version}).then(saved=>{if(!saved)setAutoOn(false);});},1000);
    return()=>clearTimeout(timer);
  },[autoOn,blocked,syncError,profile?.player._id,match?.matchId,match?.version,match?.status,match?.turnPlayerId,mode,mutate]);
  useEffect(()=>{
    if(!match)return;
    const result=presentation.current.apply(match);setEffects(result.actions);
    if(!result.actions.length)return;
    const timer=setTimeout(()=>setEffects([]),650);return()=>clearTimeout(timer);
  },[match]);
  useEffect(()=>{
    if(!match)return;let cancelled=false;
    const poll=async()=>{try{const saved=await request<MatchSnapshot>(`/api/${mode==='practice'?'practice':'matches'}/${match.matchId}`);if(!cancelled){setMatch(current=>current?.matchId===saved.matchId?newerSnapshot(current,saved):current);setSyncError('');}}catch{if(!cancelled)setSyncError('Battle sync is unavailable. Your adventure remains saved; reconnect before moving.');}};
    void poll();const timer=setInterval(poll,2500);return()=>{cancelled=true;clearInterval(timer);};
  },[match?.matchId,setMatch,mode]);
  const self=match?.participants.find(p=>p.playerId===profile?.player._id),other=match?.participants.find(p=>p.playerId!==profile?.player._id);
  const yourTurn=match?.status==='active'&&match.turnPlayerId===profile?.player._id;
  const savedMatches=profile?.matches??[];
  const roundEvents=match?(events.some(e=>e.matchId===match.matchId&&e.version===match.version)?events.filter(e=>e.matchId===match.matchId):match.lastEvent?[match.lastEvent]:[]):[];
  const moveName=(move:string)=>({attack:'Small attack',small_attack:'Small attack',big_attack:'Big attack',heal:'Heal',defend:'Defend',flee:'Flee'}[move]??move);
  const movesPath=match?`/api/${mode==='practice'?'practice':'matches'}/${match.matchId}/moves`:'';
  return <section className="feature-panel battle-panel"><p className="eyebrow">FRIENDLY RIVALRIES</p><h2>{mode==='practice'?'Sneak attack · Automatic opponent':'Face-to-face challenge'}</h2><p>{mode==='practice'?'You control your pet. The server controls a frozen copy of the selected pet with a deterministic bot. Their owner does not participate, and their progress is unchanged.':'Choose a shared player on the map and send a challenge. Both owners control their own pet after the invitation is accepted.'}</p>
    <button onClick={onMap}>Find a player on the map →</button>
    <details className="battle-setup" open={!match}><summary>Restore a saved battle</summary>
    {profile?<>{developer&&<div className="developer-test"><p className="eyebrow">TEMPORARY DEVELOPER TEST · MANUAL IDS</p><label className="player-id">Your player ID<input readOnly value={profile.player._id} onFocus={e=>e.target.select()}/></label><form className="invite-form" onSubmit={e=>{e.preventDefault();void mutate('/api/matches',{petId:profile.pet._id,opponentPlayerId:opponent.trim()});}}><label>Other player ID<input required value={opponent} onChange={e=>setOpponent(e.target.value)} maxLength={80}/></label><button className="primary" disabled={blocked||!opponent.trim()}>Send battle invitation</button></form>
    <form className="invite-form" onSubmit={e=>{e.preventDefault();void mutate(`/api/matches/${invitation.trim()}/join`,{petId:profile.pet._id,expectedVersion:0});}}><label>Match ID from your invitation<input required value={invitation} onChange={e=>setInvitation(e.target.value)} maxLength={80} pattern="[a-zA-Z0-9-]{1,80}"/></label><button disabled={blocked||!invitation.trim()}>Join invited match</button></form>
    </div>}<div className="battle-list"><h3>Your saved challenges</h3><button disabled={blocked} onClick={()=>refresh().then(()=>setSyncError('')).catch(()=>setSyncError('Could not refresh saved matches. Try again.'))}>Refresh saved matches</button>{savedMatches.length?savedMatches.map((item,index)=><button className="match-entry" key={item.matchId} onClick={()=>{setMode('face');setMatch(item);setSyncError('');}}>Challenge {savedMatches.length-index} · {item.status}</button>):<p className="muted">No saved challenges yet.</p>}{lastPractice&&<button disabled={blocked} onClick={async()=>{try{const saved=await request<MatchSnapshot>(`/api/practice/${lastPractice}`);setMode('practice');setMatch(saved);setSyncError('');}catch{setSyncError('This saved Sneak attack could not be restored.');}}}>Resume last Sneak attack</button>}</div></>:<p>Create a player session before joining a battle.</p>}
    </details>
    {syncError&&<p className="error" role="alert">{syncError}</p>}
    {match&&profile&&<div className="match-card"><div className="match-heading"><h3>{match.status==='waiting'?'Waiting for the invited player':match.status==='finished'?match.result==='escape'?'Battle ended · A pet fled':match.result==='draw'?'A friendly draw':match.winnerPlayerId===profile.player._id?'Your pet wins!':'A good adventure. Try again!':yourTurn?'Your turn':'Other player’s turn'}</h3><small>Saved revision {match.version}</small></div>
      <div className="combatants">{match.participants.map(p=><div key={p.petId} className={`combatant ${effects.find(e=>e.petId===p.petId)?.state??''}`}><CharacterArt subject="pet" asset={p.playerId===profile.player._id?ownPetAsset:undefined} animation={effects.find(e=>e.petId===p.petId)?.state??'idle'} alt={p.playerId===profile.player._id?'Your pet character':'Opponent preset pet'}/><h4>{p.playerId===profile.player._id?profile.pet.name:mode==='practice'?'Automatic opponent':'Other player’s pet'}</h4><meter value={p.hp} min={0} max={p.stats.health} aria-label={`${p.playerId===profile.player._id?'Your':'Opponent'} health`}/><p>{p.hp} / {p.stats.health} HP {p.guarding?'· Guarding':''}</p><small>Attack {p.stats.attack} · Defence {p.stats.defence}</small></div>)}</div>
      {match.status==='waiting'&&!self&&<button className="primary" disabled={blocked||Boolean(syncError)} onClick={()=>mutate(`/api/matches/${match.matchId}/join`,{petId:profile.pet._id,expectedVersion:match.version})}>Join this battle</button>}
      {match.status==='waiting'&&self&&<p>Your challenge is waiting on the other owner’s map. They choose whether to accept.</p>}
      {match.status==='waiting'&&<p className="muted">Waiting stats are provisional. Both pets’ saved upgrades are loaded when the invited player joins.</p>}
      {match.status==='active'&&self&&other&&<><label className="auto-toggle"><input type="checkbox" checked={autoOn} onChange={e=>setAutoOn(e.target.checked)}/> Auto · Choose my pet’s moves</label><p className="muted">Auto acts only on your legal turn while this battle is open. Switch it off to choose moves yourself.{decisionSource?` Last move source: ${decisionSource==='decisions'?'OpenAI Decisions':'deterministic fallback'}.`:''}</p><div className="move-buttons"><button className="primary" disabled={blocked||autoOn||!yourTurn||Boolean(syncError)} onClick={()=>mutate(movesPath,{expectedVersion:match.version,move:'small_attack',targetPetId:other.petId})}>Small attack</button><button className="primary" disabled={blocked||autoOn||!yourTurn||Boolean(syncError)||(self.bigAttacksUsed??0)>=3} onClick={()=>mutate(movesPath,{expectedVersion:match.version,move:'big_attack',targetPetId:other.petId})}>Big attack · {3-(self.bigAttacksUsed??0)} left</button><button disabled={blocked||autoOn||!yourTurn||Boolean(syncError)||(self.healsUsed??0)>=1||self.hp>=self.stats.health} onClick={()=>mutate(movesPath,{expectedVersion:match.version,move:'heal',targetPetId:self.petId})}>Heal · +10 HP</button><button disabled={blocked||autoOn||!yourTurn||Boolean(syncError)} onClick={()=>mutate(movesPath,{expectedVersion:match.version,move:'defend',targetPetId:self.petId})}>Defend</button><button className="flee-button" disabled={blocked||autoOn||!yourTurn||Boolean(syncError)} onClick={()=>mutate(movesPath,{expectedVersion:match.version,move:'flee',targetPetId:self.petId})}>Flee</button></div></>}
      {roundEvents.length>0&&<ol className="turn-events" aria-label="Saved turn events">{roundEvents.map(event=><li key={event.id}>{event.actorPlayerId===profile.player._id?'Your pet':mode==='practice'?'Automatic opponent':'Other player’s pet'} · {moveName(event.move)}{event.move!=='flee'?` → ${event.targetPetId===profile.pet._id?'Your pet':'Opponent'} HP ${event.resultingHp}`:' → Battle ended'}</li>)}</ol>}
      {decisionSource&&<p className="muted">Last Auto move: {decisionSource==='decisions'?'OpenAI Decisions':'deterministic fallback'}</p>}
      <p className="muted">Server-authoritative HP · No battle points awarded · Preset artwork</p>
    </div>}
  </section>;
}
