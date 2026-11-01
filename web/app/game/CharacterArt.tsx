'use client';

import { useEffect, useState } from 'react';
import type { ApprovedCharacterAsset } from '../../src/client/avatar-client.ts';

// Public artwork only. Owner and pet sources stay separate; never pass raw photos.
export function CharacterArt({subject,source,className,alt,asset,animation='idle',onAssetUnavailable}:{subject:'owner'|'pet';source?:string;className?:string;alt:string;asset?:ApprovedCharacterAsset;animation?:string;onAssetUnavailable?:(id:string)=>void}){
  const src=source??`/game/${subject}-preset.svg`;
  const [failedSource,setFailedSource]=useState<string|null>(null);
  const [failedAsset,setFailedAsset]=useState(''),[frame,setFrame]=useState(0),[expired,setExpired]=useState(false);
  const sequence=asset?.manifest.animations[animation]??asset?.manifest.animations.idle;
  useEffect(()=>{setFrame(0);setExpired(false);if(!asset)return;const remaining=Date.parse(asset.expiresAt)-Date.now();if(remaining<=0){setExpired(true);onAssetUnavailable?.(asset.assetId);return;}const timeout=setTimeout(()=>{setExpired(true);onAssetUnavailable?.(asset.assetId);},remaining);return()=>clearTimeout(timeout);},[asset?.assetId]);
  useEffect(()=>{setFrame(0);if(!sequence||matchMedia('(prefers-reduced-motion: reduce)').matches)return;const timer=setInterval(()=>setFrame(n=>sequence.loop?(n+1)%sequence.frames.length:Math.min(n+1,sequence.frames.length-1)),1000/sequence.fps);return()=>clearInterval(timer);},[asset?.assetId,animation,sequence]);
  if(asset&&asset.subject===subject&&!expired&&Date.parse(asset.expiresAt)>Date.now()&&failedAsset!==asset.assetId&&sequence){
    const cell=sequence.frames[frame%sequence.frames.length];
    const label=asset.provenance.provider==='openai'?(asset.provenance.inputPolicy==='personal-photo'?'Generated from uploaded photo':'Generated from synthetic reference'):'Fixture sample artwork';
    return <span className={`${className??''} sprite-art`} role="img" aria-label={`${alt} · ${label} · temporary`}><img className="sprite-sheet" src={asset.manifest.sheet} alt="" onError={()=>{setFailedAsset(asset.assetId);onAssetUnavailable?.(asset.assetId);}} style={{position:'absolute',maxWidth:'none',width:`${asset.manifest.width/cell.w*100}%`,height:`${asset.manifest.height/cell.h*100}%`,left:`${-cell.x/cell.w*100}%`,top:`${-cell.y/cell.h*100}%`}}/></span>;
  }
  if(failedSource===src)return <span className={`${className??''} character-fallback`} role="img" aria-label={`${alt} unavailable; preset symbol`}>{subject==='owner'?'●':'♧'}</span>;
  return <img className={className} src={src} alt={`${alt} · Preset`} onError={()=>setFailedSource(src)}/>;
}
