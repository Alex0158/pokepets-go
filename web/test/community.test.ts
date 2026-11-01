import test from 'node:test';
import assert from 'node:assert/strict';
import sharp from 'sharp';
import { normalizeImage, validateComment } from '../src/server/community/rules.ts';

test('community images are genuinely decoded, bounded and stripped of metadata',async()=>{
 const png=await sharp({create:{width:20,height:10,channels:3,background:'#bada55'}}).withExif({IFD0:{ImageDescription:'Private metadata'}}).png().toBuffer();
 assert.ok((await sharp(png).metadata()).exif);
 const image=await normalizeImage('image/png',png.toString('base64'));
 const meta=await sharp(image).metadata();assert.equal(meta.format,'jpeg');assert.equal(meta.width,20);assert.equal(meta.exif,undefined);
 await assert.rejects(normalizeImage('image/svg+xml',png.toString('base64')));
 await assert.rejects(normalizeImage('image/jpeg',png.toString('base64')));
 await assert.rejects(normalizeImage('image/png',Buffer.from('<script>bad</script>').toString('base64')));
 await assert.rejects(normalizeImage('image/png',Buffer.alloc(512*1024+1).toString('base64')));
});
test('comments are plain bounded text',()=>{
 assert.equal(validateComment('  Hello <b>friend</b>  '),'Hello <b>friend</b>');
 assert.throws(()=>validateComment(' '));assert.throws(()=>validateComment('a'.repeat(281)));assert.throws(()=>validateComment({text:'spoof'}));
});
