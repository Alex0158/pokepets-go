'use client';
import { useEffect, useRef, useState } from 'react';
import { AvatarClient, fileBase64 } from '../../client/avatar-client.ts';
import type { AvatarAssets, AvatarConfig, AvatarSubject, ApprovedCharacterAsset } from '../../client/avatar-client.ts';

type Props={onAssets:(assets:AvatarAssets)=>void;onContinue:()=>void;ownerName?:string};
const subjects:AvatarSubject[]=['owner','pet'];
const wait=(ms:number)=>new Promise(resolve=>setTimeout(resolve,ms));
function Preview({asset,subject}:{asset?:ApprovedCharacterAsset;subject:AvatarSubject}) {
  const [failed,setFailed]=useState<string|null>(null),[frame,setFrame]=useState(0);
  useEffect(()=>{
    setFrame(0);if(!asset||matchMedia('(prefers-reduced-motion: reduce)').matches)return;
    const a=asset.manifest.animations.idle;
    const timer=setInterval(()=>setFrame(n=>(n+1)%a.frames.length),1000/a.fps);return()=>clearInterval(timer);
  },[asset]);
  if(!asset||failed===asset.assetId||Date.parse(asset.expiresAt)<=Date.now())return <img src={`/game/${subject}-preset.svg`} alt={`${subject} preset`} style={{width:96,height:96,objectFit:'contain'}}/>;
  const a=asset.manifest.animations.idle,f=a.frames[frame%a.frames.length],scale=96/Math.max(f.w,f.h);
  return <div role="img" aria-label={`${subject} generated preview`} style={{width:96,height:96,position:'relative',overflow:'hidden'}}><img src={asset.manifest.sheet} alt="" onError={()=>setFailed(asset.assetId)} style={{position:'absolute',maxWidth:'none',width:asset.manifest.width*scale,height:asset.manifest.height*scale,left:-f.x*scale,top:-f.y*scale}}/></div>;
}
export function AvatarSetup({onAssets,onContinue,ownerName}:Props) {
  const [client]=useState(()=>new AvatarClient());
  const [config,setConfig]=useState<AvatarConfig|null>(null),[configError,setConfigError]=useState('');
  const [files,setFiles]=useState<Partial<Record<AvatarSubject,File>>>({}),[consent,setConsent]=useState<Record<AvatarSubject,boolean>>({owner:false,pet:false});
  const [busy,setBusy]=useState<Record<AvatarSubject,boolean>>({owner:false,pet:false}),[message,setMessage]=useState<Record<AvatarSubject,string>>({owner:'',pet:''}),[assets,setAssets]=useState<AvatarAssets>({});
  const generation=useRef({owner:0,pet:0}),jobs=useRef<Partial<Record<AvatarSubject,string>>>({});
  useEffect(()=>{let active=true;client.config().then(c=>{if(active)setConfig(c);}).catch(()=>{if(active)setConfigError('Photo generation is unavailable. Your presets are ready.');});return()=>{active=false;for(const s of subjects){generation.current[s]++;client.discard(s);const id=jobs.current[s];if(id)void client.cancel(id).catch(()=>{});}};},[client]);
  async function generate(subject:AvatarSubject,retry=false) {
    if(busy[subject]||!config)return;
    const revision=++generation.current[subject];setBusy(v=>({...v,[subject]:true}));
    try {
      const file=files[subject];if(!file||!consent[subject])throw Error('Choose a photo and confirm permission first.');
      setMessage(v=>({...v,[subject]:'Submitting your selected image…'}));
      const knownJob=jobs.current[subject];
      let job=knownJob?await client.status(knownJob):retry?await client.retry(subject):await client.submit({requestId:crypto.randomUUID(),subject,mimeType:file.type,imageBase64:await fileBase64(file),inputPolicy:config.personalPhotos?'personal-photo':'synthetic-only',...(config.personalPhotos?{consent:{authorizedImage:true,sendToOpenAI:true,temporaryStorage:true}}:{})});
      if(generation.current[subject]!==revision){void client.cancel(job.jobId).catch(()=>{});return;}
      jobs.current[subject]=job.jobId;
      const start=Date.now();
      while(job.status==='queued'||job.status==='running') {
        if(generation.current[subject]!==revision){void client.cancel(job.jobId).catch(()=>{});return;}
        if(Date.now()-start>125000)throw Error('Generation is taking too long. Keep your preset or try later.');
        setMessage(v=>({...v,[subject]:job.status==='queued'?'Waiting to generate…':'Creating your character…'}));
        await wait(400);job=await client.status(job.jobId);
      }
      if(generation.current[subject]!==revision)return;
      if(job.status!=='succeeded'){jobs.current[subject]=undefined;throw Error(job.error??'Generation did not finish.');}
      const asset=await client.resolve(job);
      if(generation.current[subject]!==revision)return;
      jobs.current[subject]=undefined;
      setAssets(v=>({...v,[subject]:asset}));onAssets({[subject]:asset});
      setMessage(v=>({...v,[subject]:asset.provenance.provider==='openai'?'Generated preview ready. Temporary artwork; check how it looks.':'Demo sample ready; this fixture is not derived from your image.'}));
      void client.config().then(setConfig).catch(()=>{});
    }catch(e){if(generation.current[subject]===revision)setMessage(v=>({...v,[subject]:`${e instanceof Error?e.message:'Generation unavailable'} Your previous character is unchanged.`}));}
    finally{if(generation.current[subject]===revision)setBusy(v=>({...v,[subject]:false}));}
  }
  function skip() {
    for(const s of subjects){generation.current[s]++;client.discard(s);const id=jobs.current[s];if(id)void client.cancel(id).catch(()=>{});jobs.current[s]=undefined;}
    onContinue();
  }
  const available=config?.available&&config.liveRequestsRemaining!==0;
  return <section className="feature-panel avatar-onboarding" aria-labelledby="avatar-setup-title"><p className="eyebrow">YOUR ADVENTURE DUO</p><h2 id="avatar-setup-title">A character for you. A character for your pet.</h2><p>{ownerName?`${ownerName}, choose`:'Choose'} separate owner and pet photos, or explore with presets now.</p>
    {configError&&<p role="status">{configError}</p>}{!config&&<p>Checking generation availability…</p>}
    {config?.available&&!config.personalPhotos&&<p role="status">Synthetic test mode only. Use invented images; sample output is not a likeness of your input.</p>}
    {config?.personalPhotos&&<p>Generate sends only the selected image to OpenAI for that character. The upload stays in request memory until completion or timeout and is never saved to our database. {config.storage==='mongo'?'Generated artwork is stored privately in our database and expires from access after five minutes; database cleanup may happen later. Hashed request claims do not automatically expire and prevent duplicate charges.':'Generated artwork stays in server memory, expires after five minutes and is lost on restart.'} Cancel stops delivery; an upstream request may continue and be billed. Nothing is added to your public profile. OpenAI retention follows the API account policy; this is not an instant-deletion guarantee. Your original file stays untouched.</p>}
    {config&&(!available)&&<p role="status">Photo generation is unavailable for this preview. Continue with presets or already generated artwork.</p>}
    <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:20}}>{subjects.map(subject=><article key={subject}><h3>{subject==='owner'?'Your owner avatar':'Your pet character'}</h3><Preview asset={assets[subject]} subject={subject}/><p>{assets[subject]?'Temporary generated/sample preview':'Preset character'}</p>
      {available&&<><label htmlFor={`avatar-${subject}-file`}>{config.personalPhotos?'Photo':'Synthetic test image'} · PNG or JPEG, up to 3 MiB</label><input id={`avatar-${subject}-file`} type="file" accept="image/png,image/jpeg" disabled={busy[subject]||client.hasPending(subject)||Boolean(jobs.current[subject])} onChange={e=>{const file=e.target.files?.[0];setFiles(v=>({...v,[subject]:file}));setConsent(v=>({...v,[subject]:false}));setMessage(v=>({...v,[subject]:''}));}}/>
        <label className="confirmation"><input type="checkbox" disabled={busy[subject]} checked={consent[subject]} onChange={e=>setConsent(v=>({...v,[subject]:e.target.checked}))}/>{config.personalPhotos?'I have permission to use this image and agree to send it to OpenAI under the temporary-storage disclosure above.':'I confirm this is an invented test image, not a real personal photo.'}</label>
        <button type="button" className="primary" disabled={!files[subject]||!consent[subject]||busy[subject]||client.hasPending(subject)} onClick={()=>void generate(subject)}>{busy[subject]?'Generating…':jobs.current[subject]?'Check current generation':`Generate ${subject==='owner'?'owner avatar':'pet character'}`}</button>
        {client.hasPending(subject)&&!busy[subject]&&<button type="button" onClick={()=>void generate(subject,true)}>Retry the same submission</button>}</>}
      <p role="status">{message[subject]}</p></article>)}</div>
    <p>Image generation may take a little while. Skipping keeps the adventure usable; an upstream request already sent may still be billed. These are draft sprites, so check the appearance before continuing.</p>
    {(assets.owner||assets.pet)&&<button type="button" className="primary" onClick={skip}>Continue with these characters →</button>}<button type="button" onClick={skip}>{assets.owner||assets.pet?'Skip further generation · Continue':'Skip generation · Explore with presets →'}</button>
  </section>;
}
