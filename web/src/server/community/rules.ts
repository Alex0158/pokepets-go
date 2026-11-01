import sharp from 'sharp';
import { fail } from '../core/battle.ts';
export const MAX_IMAGE_BYTES=512*1024;
export const RETENTION_MS=7*86400000;
export function commandId(value:unknown):asserts value is string {
 if(typeof value!=='string'||! /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(value))fail('invalid_command_id',400);
}
export function validateComment(value:unknown) {
 if(typeof value!=='string'||!value.trim()||value.trim().length>280)fail('invalid_comment',400);
 return value.trim();
}
export function validateCaption(value:unknown) {
 if(typeof value!=='string'||!value.trim()||value.trim().length>180)fail('invalid_caption',400);
 return value.trim();
}
export async function normalizeImage(mime:unknown,base64:unknown):Promise<Buffer> {
 if(mime!=='image/png'&&mime!=='image/jpeg')fail('unsupported_image_type',415);
 if(typeof base64!=='string'||base64.length>Math.ceil(MAX_IMAGE_BYTES/3)*4)fail('image_too_large',413);
 if(!base64.length||base64.length%4!==0||!/^[A-Za-z0-9+/]+={0,2}$/.test(base64))fail('invalid_image',400);
 const bytes=Buffer.from(base64,'base64');if(bytes.length>MAX_IMAGE_BYTES)fail('image_too_large',413);
 if(bytes.toString('base64')!==base64)fail('invalid_image',400);
 try {
  const image=sharp(bytes,{limitInputPixels:12_000_000,failOn:'warning'}),meta=await image.metadata();
  if(meta.format!==(mime==='image/png'?'png':'jpeg')||(meta.pages??1)>1)fail('invalid_image',400);
  // A full decode/re-encode removes EXIF/GPS, ancillary chunks and appended input.
  const safe=await image.rotate().resize({width:1280,height:1280,fit:'inside',withoutEnlargement:true}).jpeg({quality:80}).toBuffer();
  if(safe.length>MAX_IMAGE_BYTES)fail('image_too_large',413);return safe;
 }catch{ return fail('invalid_image',400); }
}
