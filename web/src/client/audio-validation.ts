export const MAX_AUDIO_BYTES=1048576;
export async function validateAudioInput(blob:Blob):Promise<string>{
  const mime=blob.type.split(';')[0];
  if(!blob.size||blob.size>MAX_AUDIO_BYTES)throw Error('Choose audio up to 1 MiB.');
  if(!['audio/webm','audio/mp4','audio/wav'].includes(mime))throw Error('Use WebM, MP4 or WAV audio.');
  if(mime==='audio/wav'){
    const bytes=new Uint8Array(await blob.arrayBuffer()),view=new DataView(bytes.buffer);
    try{
      const text=(start:number)=>String.fromCharCode(...bytes.slice(start,start+4));
      if(bytes.length<44||text(0)!=='RIFF'||text(8)!=='WAVE')throw Error('Choose a valid WAV recording with audio samples.');
      for(let offset=12;offset+8<=bytes.length;){const size=view.getUint32(offset+4,true);if(text(offset)==='data'){if(size>0&&offset+8+size<=bytes.length)return mime;break;}offset+=8+size+(size%2);}
      throw Error('This WAV contains no audio samples. Record again or choose another file.');
    }finally{bytes.fill(0);}
  }
  return mime;
}
