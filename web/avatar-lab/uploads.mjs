import { validateManifest } from './core.mjs';
const $=id=>document.getElementById(id);
const slots={owner:{job:null,request:null,asset:null,generation:0},pet:{job:null,request:null,asset:null,generation:0}};
const pause=ms=>new Promise(resolve=>setTimeout(resolve,ms));
function portrait(subject,manifest,label) {
  const el=document.getElementById(subject==='owner'?'owner-portrait':'pet-portrait');
  el.style.backgroundImage=`url("/${manifest.sheet}")`;el.style.backgroundSize='400% 400%';el.style.backgroundPosition='0 0';
  document.getElementById(subject==='owner'?'owner-source':'asset-status').textContent=label;
}
async function api(path,options={}) {
  const res=await fetch(path,{...options,headers:{'Content-Type':'application/json',...options.headers},signal:AbortSignal.timeout(10000)});
  const value=await res.json();if(!res.ok)throw Error(value.error??'Request failed');return value;
}
function asBase64(bytes) {let s='';for(const b of bytes)s+=String.fromCharCode(b);return btoa(s);}
export function setupUploads(getMap) {
  let mode='fixture';
  $('load-cached').addEventListener('click',async()=>{
    try {
      const cache=await api('/cached-assets.json');const map=getMap();if(!map)throw Error('3D map unavailable; cached files remain available in verification.');
      for(const subject of ['owner','pet']){
        const a=cache[subject];await map.setCharacterAsset(subject,validateManifest(a.manifest),a.provenance);
        portrait(subject,a.manifest,'Cached live API output · synthetic input');
        $(`${subject}-job-status`).textContent='Cached result from recorded live API test; no new generation call.';
      }
      $('notice').textContent='Cached live API owner and photo-conditioned pet samples. No new request or upload. Battle events are fixtures.';
    }catch(e){$('notice').textContent=e.message;}
  });
  const ready=api('/api/avatar-config').then(config=>{
    mode=config.mode;
    $('provider-mode').textContent=mode==='openai'?'LIVE OPENAI API · SYNTHETIC INPUTS ONLY':'FIXTURE PROVIDER · NO LIVE API';
    $('provider-disclosure').textContent=mode==='openai'
      ?`Submitting sends only the selected synthetic test image to OpenAI for a separate owner or pet sprite request. ${config.liveRequestsRemaining} live request(s) remain, with no automatic retries. Raw local inputs are kept in server memory until terminal status; private result URLs expire after five minutes. OpenAI provider retention follows your API account policy, which has not been independently audited. Do not upload personal photos.`
      :'Fixture jobs validate a synthetic image and return sample artwork, without deriving appearance from the input. No external image API is called. Raw local inputs are held in memory until terminal status; private result URLs expire after five minutes. Do not upload personal photos.';
    for(const subject of ['owner','pet'])$(`${subject}-upload`).textContent=mode==='openai'?`Generate ${subject} with OpenAI`:`Submit ${subject} fixture job`;
  }).catch(()=>{$('provider-mode').textContent='Provider status unavailable · no submission';throw Error('Provider unavailable');});
  for(const subject of ['owner','pet']) {
    const slot=slots[subject],status=$(`${subject}-job-status`),file=$(`${subject}-image`),check=$(`${subject}-synthetic`);
    async function submit(useSynthetic=false) {
      const generation=++slot.generation;
      try {
        await ready;
        if(!check.checked)throw Error('Confirm synthetic-only input before submitting.');
        let mimeType,bytes;
        if(useSynthetic){const r=await fetch(`/synthetic/${subject}.png`);bytes=new Uint8Array(await r.arrayBuffer());mimeType='image/png';}
        else {const f=file.files?.[0];if(!f)throw Error('Choose a synthetic PNG/JPEG first.');if(f.size>4*1024*1024)throw Error('Maximum input size is 4 MiB.');mimeType=f.type;bytes=new Uint8Array(await f.arrayBuffer());}
        slot.request={requestId:crypto.randomUUID(),subject,mimeType,imageBase64:asBase64(bytes),inputPolicy:'synthetic-only'};
        status.textContent='Submitting synthetic input…';
        if(mode==='openai')$('notice').textContent='Live OpenAI API job using only a synthetic reference. Map and mission controls remain usable.';
        let j=await api('/api/avatar-jobs',{method:'POST',body:JSON.stringify(slot.request)});slot.request=null;bytes.fill(0);slot.job=j.jobId;
        const started=performance.now();
        while(['queued','running'].includes(j.status)) {
          if(generation!==slot.generation)return;
          status.textContent=`${j.status} · ${j.mode==='openai'?'live OpenAI API':'fixture provider · no live AI call'}`;
          if(performance.now()-started>125000)throw Error('Polling timed out. Existing appearance retained.');
          await pause(300);j=await api(`/api/avatar-jobs/${slot.job}`);
        }
        if(generation!==slot.generation)return;
        if(j.status!=='succeeded')throw Error(j.error??j.status);
        const manifest=validateManifest(await api(j.asset.manifestUrl));
        const map=getMap();
        if(map)await map.setCharacterAsset(subject,manifest,j.asset.provenance);
        else status.textContent='Asset validated; static map fallback remains active.';
        slot.asset=j.asset;
        $(`${subject}-asset-proof`).textContent=`${j.asset.assetId.slice(0,8)} · ${manifest.width}×${manifest.height} · expires in 5 minutes`;
        const p=j.asset.provenance;
        portrait(subject,manifest,p.provider==='openai'?'Live API output · synthetic input':'Fixture output · not input-conditioned');
        status.textContent=p.provider==='openai'?`Live API ${subject} result · ${(p.latencyMs/1000).toFixed(1)}s · ${p.modelRequested} · visual quality unapproved${map?' · applied to map':' · static map'}`:`Fixture ready · ${subject} asset · not derived from submitted image${map?' · applied to map':' · static map'}`;
        $(`${subject}-metrics`).textContent=p.provider==='openai'?`Usage: ${JSON.stringify(p.usage)}; estimated USD: ${p.estimatedCostUsd??'unavailable'} (${p.costBasis}); request ${p.requestId??'unreported'}. Model echo: ${p.modelReturned??'not returned'}.`:'Fixture provider; no live request or token usage.';
        const link=$(`${subject}-sheet-link`);link.href=`/${manifest.sheet}`;link.hidden=false;
        $('map').dataset[`${subject}Asset`]=j.asset.assetId;
      } catch(e) {status.textContent=`${e.message}. Previous appearance retained.`;}
      finally {slot.request=null;}
    }
    $(`${subject}-upload`).addEventListener('click',()=>submit(false));
    $(`${subject}-sample`).addEventListener('click',()=>submit(true));
    $(`${subject}-cancel`).addEventListener('click',async()=>{
      slot.generation++;if(!slot.job){status.textContent='No pending job.';return;}
      try{await api(`/api/avatar-jobs/${slot.job}`,{method:'DELETE'});status.textContent='Job canceled; in-memory result revoked. Existing on-screen texture remains a local preview.';}catch(e){status.textContent=e.message;}
    });
  }
}
