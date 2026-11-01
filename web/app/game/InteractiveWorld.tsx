'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import type { AvatarAssets, AvatarSubject } from '../../src/client/avatar-client.ts';
import { advanceMovement, mount, type MapPosition, type MapPoint, type NeighborhoodMap } from '../../src/features/map/neighborhood-map.mjs';
import { CharacterArt } from './CharacterArt';
import styles from './InteractiveWorld.module.css';

export type WorldProject=(position:MapPosition)=>MapPoint;
type Props={assets:AvatarAssets;onAssetUnavailable:(subject:AvatarSubject,id:string)=>void;renderOverlay:(project:WorldProject)=>ReactNode};
const START:MapPosition={x:.27,z:.708};
const clamp=(n:number)=>Math.max(0,Math.min(1,n));

/** The backdrop owns only its dedicated canvas; React owns live players and private avatar assets. */
export function InteractiveWorld({assets,onAssetUnavailable,renderOverlay}:Props){
  const host=useRef<HTMLDivElement>(null),world=useRef<NeighborhoodMap|null>(null);
  const target=useRef<MapPosition>(START),current=useRef<MapPosition>(START);
  const [position,setPosition]=useState<MapPosition>(START),[moving,setMoving]=useState(false),[ready,setReady]=useState(false),[version,setVersion]=useState(0),[zoom,setZoom]=useState(1),[paused,setPaused]=useState(false),[show3D,setShow3D]=useState(true);
  const moveTo=(p:MapPosition)=>{
    target.current=p;
    if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){current.current=p;setPosition(p);setMoving(false);}
    else setMoving(true);
  };
  useEffect(()=>{
    if(!host.current)return;
    let alive=true;
    try {
      const renderer=mount(host.current,{onProjectionChange:()=>{if(alive)setVersion(v=>v+1);},onMapClick:moveTo});
      world.current=renderer;setReady(!!renderer);
    } catch { world.current=null;setReady(false); }
    // A null canvas has no camera callback: still render the static fallback and avatars.
    setVersion(v=>v+1);
    return()=>{alive=false;world.current?.dispose();world.current=null;};
  },[]);
  useEffect(()=>{
    if(!moving)return;
    let frame=0,previous=0;
    const step=(now:number)=>{
      const delta=previous?(now-previous)/1000:0;previous=now;
      const next=advanceMovement(current.current,target.current,delta);current.current=next;setPosition(next);
      if(Math.hypot(next.x-target.current.x,next.z-target.current.z)<1e-6){setMoving(false);return;}
      frame=requestAnimationFrame(step);
    };
    frame=requestAnimationFrame(step);return()=>cancelAnimationFrame(frame);
  },[moving]);
  void version;
  const project:WorldProject=(p)=>(show3D?world.current?.project(p):null)??(host.current&&Number.isFinite(p.x)&&Number.isFinite(p.z)&&p.x>=0&&p.x<=1&&p.z>=0&&p.z<=1?{left:p.x*host.current.clientWidth,top:p.z*host.current.clientHeight,visible:true}:{left:0,top:0,visible:false});
  const own=project(position);
  const adjust=(dx:number,dz:number)=>moveTo({x:clamp(current.current.x+dx),z:clamp(current.current.z+dz)});
  const zoomTo=(v:number)=>{const next=Math.max(.7,Math.min(1.4,v));setZoom(next);world.current?.setZoom(next);};
  return <div className={styles.world} aria-label="Fictional interactive neighborhood map">
    <div className={styles.scene}>
    {(!ready||!show3D)&&<img className={styles.fallback} src="/game/moonrise.svg" alt="Illustrated fictional neighborhood map"/>}
    <div className={styles.canvasHost} ref={host} style={!show3D?{visibility:'hidden'}:undefined}/>
    <div className={styles.overlay}>
      {own.visible&&<div className={styles.duo} style={{left:own.left,top:own.top}}>
        <CharacterArt className={styles.owner} subject="owner" asset={assets.owner} animation={moving?'move':'idle'} onAssetUnavailable={id=>onAssetUnavailable('owner',id)} alt="Your owner avatar"/>
        <CharacterArt className={styles.pet} subject="pet" asset={assets.pet} animation={moving?'move':'idle'} onAssetUnavailable={id=>onAssetUnavailable('pet',id)} alt="Your pet avatar"/>
      </div>}
      {renderOverlay(project)}
      <div className={styles.hint}>{ready&&show3D?'Fictional map · Tap to walk · Drag to rotate':'Fictional map · Static fallback'}</div>
    </div>
    </div>
      <div className={styles.controls} role="group" aria-label="Map controls">
        <button type="button" aria-label="Zoom out" disabled={!ready||!show3D} onClick={()=>zoomTo(zoom-.2)}>−</button><button type="button" aria-label="Zoom in" disabled={!ready||!show3D} onClick={()=>zoomTo(zoom+.2)}>+</button><button type="button" disabled={!ready||!show3D} onClick={()=>world.current?.recenter()}>Recenter</button>
        <button type="button" disabled={!ready||!show3D} onClick={()=>{const next=!paused;setPaused(next);world.current?.setPaused(next);}}>{paused?'Resume':'Pause'}</button>
        <button type="button" disabled={!ready} onClick={()=>{const next=!show3D;setShow3D(next);world.current?.setPaused(!next||paused);}}>{show3D?'Static map':'3D map'}</button>
        <button type="button" aria-label="Walk left" onClick={()=>adjust(-.1,0)}>←</button><button type="button" aria-label="Walk right" onClick={()=>adjust(.1,0)}>→</button>
        <button type="button" aria-label="Walk up" onClick={()=>adjust(0,-.1)}>↑</button><button type="button" aria-label="Walk down" onClick={()=>adjust(0,.1)}>↓</button>
      </div>
  </div>;
}
