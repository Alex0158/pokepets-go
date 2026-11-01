export function validateAudio(value:unknown,mime:unknown):Buffer {
  if(typeof value!=='string'||typeof mime!=='string'||!['audio/webm','audio/mp4','audio/wav'].includes(mime)||!value||value.length>1398104||!/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(value)) throw Error('invalid_audio');
  const bytes=Buffer.from(value,'base64');
  if(!bytes.length||bytes.length>1048576||bytes.toString('base64')!==value)throw Error('invalid_audio');
  if(mime==='audio/wav') {
    if(bytes.length<44||bytes.toString('ascii',0,4)!=='RIFF'||bytes.toString('ascii',8,12)!=='WAVE')throw Error('invalid_audio');
    let pos=12,hasAudio=false;
    while(pos+8<=bytes.length) {
      const tag=bytes.toString('ascii',pos,pos+4),size=bytes.readUInt32LE(pos+4),end=pos+8+size;
      if(end>bytes.length)throw Error('invalid_audio');
      if(tag==='data'&&size>0)hasAudio=true;
      pos=end+(size%2);
    }
    if(!hasAudio)throw Error('invalid_audio');
  }
  return bytes;
}
export function validateText(value:unknown):string {
  if(typeof value!=='string'||!value.trim()||value.trim().length>4000)throw Error('invalid_text');
  return value.trim();
}
export function parseScore(text:string):{points:number;reason:string} {
  let data:unknown;try{data=JSON.parse(text);}catch{throw Error('invalid_ai_result');}
  if(!data||typeof data!=='object')throw Error('invalid_ai_result');
  const item=data as Record<string,unknown>;
  if(!Number.isInteger(item.points)||Number(item.points)<0||Number(item.points)>20||typeof item.reason!=='string'||!item.reason.trim()||item.reason.length>200)throw Error('invalid_ai_result');
  return {points:Number(item.points),reason:item.reason.trim()};
}
