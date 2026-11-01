import type { RealtimeCallbacks, RealtimeSession } from '../shared/realtime.ts';

// Only displays provider events; never dispatches game mutations or tools.
export function createRealtimeSession(callbacks:RealtimeCallbacks):RealtimeSession {
  let generation=0,stream:MediaStream|null=null,peer:RTCPeerConnection|null=null,sessionId:string|null=null,timer:ReturnType<typeof setTimeout>|null=null,working=false;
  const userParts=new Map<string,string>(),assistantParts=new Map<string,string>(),finished=new Set<string>();
  const postStop=(id:string)=>{void fetch('/api/realtime-session/stop',{method:'POST',credentials:'same-origin',keepalive:true,headers:{'Content-Type':'application/json'},body:JSON.stringify({sessionId:id})}).catch(()=>{});};
  const hidden=()=>{if(document.visibilityState==='hidden')stop();};
  const unload=()=>stop();
  function cleanup(){
    if(timer)clearTimeout(timer);timer=null;
    stream?.getTracks().forEach(track=>track.stop());stream=null;
    peer?.close();peer=null;
    if(sessionId)postStop(sessionId);sessionId=null;
    if(typeof document!=='undefined')document.removeEventListener('visibilitychange',hidden);
    if(typeof window!=='undefined')window.removeEventListener('pagehide',unload);
    userParts.clear();assistantParts.clear();finished.clear();
  }
  function stop(){generation++;working=false;cleanup();callbacks.onState('stopped');}
  async function start(){
    if(working)throw Error('Realtime session already active');
    const current=++generation;working=true;callbacks.onState('connecting');
    if(typeof document!=='undefined')document.addEventListener('visibilitychange',hidden);
    if(typeof window!=='undefined')window.addEventListener('pagehide',unload);
    try{
      if(!navigator.mediaDevices?.getUserMedia||!globalThis.RTCPeerConnection)throw Error('Realtime audio is unavailable in this browser.');
      const media=await navigator.mediaDevices.getUserMedia({audio:true});
      if(current!==generation){media.getTracks().forEach(track=>track.stop());return;}
      stream=media;const connection=new RTCPeerConnection();peer=connection;
      for(const track of media.getAudioTracks())connection.addTrack(track,media);
      connection.ontrack=event=>{if(current===generation&&event.streams[0])callbacks.onRemoteStream(event.streams[0]);};
      connection.onconnectionstatechange=()=>{if(current===generation&&['failed','closed'].includes(connection.connectionState)){generation++;cleanup();working=false;callbacks.onState('error');callbacks.onError('Realtime connection closed.');}};
      const channel=connection.createDataChannel('oai-events');
      channel.onopen=()=>{if(current===generation)callbacks.onState('listening');};
      channel.onmessage=event=>{
        if(current!==generation||typeof event.data!=='string'||event.data.length>65536)return;
        let message:Record<string,unknown>;try{message=JSON.parse(event.data);}catch{return;}
        const type=message.type,id=message.item_id??message.response_id;
        if(typeof id!=='string'||!/^[A-Za-z0-9_-]{1,128}$/.test(id))return;
        const user=type==='conversation.item.input_audio_transcription.delta'||type==='conversation.item.input_audio_transcription.completed';
        const assistant=type==='response.output_audio_transcript.delta'||type==='response.output_audio_transcript.done';
        if(!user&&!assistant)return;
        const final=type==='conversation.item.input_audio_transcription.completed'||type==='response.output_audio_transcript.done';
        const key=`${user?'u':'a'}:${id}`;if(finished.has(key))return;
        const parts=user?userParts:assistantParts,delta=typeof message.delta==='string'?message.delta:'',full=typeof message.transcript==='string'?message.transcript:'';
        const text=(final?full:((parts.get(id)??'')+delta)).slice(0,4000);parts.set(id,text);
        if(final)finished.add(key);
        (user?callbacks.onUserTranscript:callbacks.onAssistantTranscript)({turnId:id,text,final});
      };
      const offer=await connection.createOffer();await connection.setLocalDescription(offer);
      if(current!==generation)return;
      const response=await fetch('/api/realtime-session',{method:'POST',credentials:'same-origin',headers:{'Content-Type':'application/json'},body:JSON.stringify({sdp:offer.sdp})});
      if(!response.ok)throw Error('Realtime session is unavailable.');
      const result=await response.json() as {sdp?:unknown;sessionId?:unknown;expiresAt?:unknown};
      if(typeof result.sessionId!=='string'||!/^[0-9a-f-]{36}$/.test(result.sessionId)||typeof result.sdp!=='string'||typeof result.expiresAt!=='number')throw Error('Invalid realtime session.');
      if(current!==generation){postStop(result.sessionId);return;}
      sessionId=result.sessionId;timer=setTimeout(stop,Math.max(0,Math.min(60000,result.expiresAt-Date.now())));
      await connection.setRemoteDescription({type:'answer',sdp:result.sdp});
    }catch(error){if(current!==generation)return;cleanup();working=false;callbacks.onState('error');callbacks.onError(error instanceof Error?error.message:'Realtime session unavailable.');}
  }
  return {start,stop};
}
