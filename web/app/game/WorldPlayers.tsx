'use client';

import { useEffect, useState } from 'react';
import type { Profile } from '../../src/client/game-client.ts';
import { request } from '../../src/client/game-client.ts';
import type { WorldPlayer, WorldSnapshot } from '../../src/client/world.ts';
import { mapPosition } from '../../src/client/world.ts';
import { CharacterArt } from './CharacterArt';
import { MissionDialog } from './MissionDialog';

type Props={profile:Profile|null;blocked:boolean;mutate:(path:string,payload:Record<string,unknown>)=>Promise<boolean>;onBattle:()=>void};
export function WorldPlayers({profile,blocked,mutate,onBattle}:Props){
  const [world,setWorld]=useState<WorldSnapshot|null>(null),[error,setError]=useState(''),[selected,setSelected]=useState<WorldPlayer|null>(null),[actionError,setActionError]=useState('');
  useEffect(()=>{if(!profile)return;let canceled=false;const poll=async()=>{try{const next=await request<WorldSnapshot>('/api/world');if(!canceled){setWorld(next);setError('');}}catch{if(!canceled)setError('Shared players are unavailable. Missions still work.');}};void poll();const timer=setInterval(poll,5000);return()=>{canceled=true;clearInterval(timer);};},[profile?.player._id]);
  const others=world?.players.filter(p=>p.playerId!==profile?.player._id)??[];
  return <>
    {others.map(player=><button className="player-marker" key={player.playerId} style={mapPosition(player)} onClick={()=>{setSelected(player);setActionError('');}} aria-label={`Meet ${player.displayName} and ${player.petName}`}><CharacterArt subject="owner" alt="Preset owner"/><CharacterArt subject="pet" alt="Preset pet"/><span>{player.displayName}<small>Shared player · fictional position</small></span></button>)}
    <div className="world-people-status"><span>REGISTERED PLAYERS · {others.length}</span><small>All registered players appear automatically. Fictional positions · No GPS · Online status unknown.</small>{error&&<p role="status">{error}</p>}{world?.invitations.map(invite=><div className="map-invitation" key={invite.matchId}><p>{invite.creatorDisplayName} invites you to a Face-to-face challenge.</p><button disabled={blocked} onClick={async()=>{const saved=await mutate(`/api/matches/${invite.matchId}/join`,{petId:profile?.pet._id,expectedVersion:invite.expectedVersion});if(saved)onBattle();}}>Accept challenge</button></div>)}</div>
    {selected&&<MissionDialog onClose={()=>setSelected(null)}><section className="mission-dialog"><button className="close-dialog" aria-label="Close player actions" onClick={()=>setSelected(null)}>×</button><p className="eyebrow">SHARED PLAYER · FICTIONAL POSITION</p><h2 id="mission-title">{selected.displayName} + {selected.petName}</h2><div className="onboarding-duo"><CharacterArt subject="owner" alt="Preset owner character"/><CharacterArt subject="pet" alt="Preset pet character"/></div><h3>Choose your friendly rivalry</h3>{actionError&&<p className="error" role="alert">{actionError}</p>}<p><strong>Sneak attack</strong> · Battle an automatic copy of this pet. No live input from its owner; no changes to their progress.</p><button disabled={blocked} onClick={async()=>{const saved=await mutate('/api/practice',{opponentPlayerId:selected.playerId});if(saved){setSelected(null);onBattle();}else setActionError('Could not start this Sneak attack. Your saved progress is unchanged.');}}>Start Sneak attack · Automatic opponent</button><p><strong>Face-to-face challenge</strong> · Send an invitation. Both owners control their own pet after acceptance.</p><button className="primary" disabled={blocked} onClick={async()=>{const saved=await mutate('/api/matches',{petId:profile?.pet._id,opponentPlayerId:selected.playerId});if(saved){setSelected(null);onBattle();}else setActionError('Could not send this challenge. The other owner may need to return with an active session.');}}>Invite to Face-to-face challenge</button><button onClick={()=>setSelected(null)}>Back to map</button></section></MissionDialog>}
  </>;
}
