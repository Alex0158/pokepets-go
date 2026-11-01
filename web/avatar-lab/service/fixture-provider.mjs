import { readFile } from 'node:fs/promises';
import sharp from 'sharp';
import { setTimeout as pause } from 'node:timers/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

export function gridManifest(width,height,id='fixture') {
  const animations={};
  for(const [row,state] of ['idle','move','attack','hurt'].entries()) {
    animations[state]={fps:state==='idle'?3:8,loop:['idle','move'].includes(state),frames:Array.from({length:4},(_,col)=>({x:Math.floor(col*width/4),y:Math.floor(row*height/4),w:Math.floor((col+1)*width/4)-Math.floor(col*width/4),h:Math.floor((row+1)*height/4)-Math.floor(row*height/4)}))};
  }
  return {schemaVersion:1,id,sheet:'assets/fixture.png',width,height,animations};
}
const defaultRoot=join(dirname(fileURLToPath(import.meta.url)),'..');
const cached=new Map();
async function fixtures(root=defaultRoot) {
  if(!cached.has(root))cached.set(root,(async()=>{
    const owner=await readFile(join(root,'assets','owner-preset.svg'),'utf8');
    const pet=await readFile(join(root,'assets','pet-preset.svg'));
    // Original vector fixture artwork only; no submitted image is transformed.
    const inner=owner.replace(/^<svg[^>]*>/,'').replace(/<\/svg>\s*$/,'');
    const cells=[];
    for(let row=0;row<4;row++)for(let col=0;col<4;col++) {
      const bob=row===1?[0,-5,0,5][col]:row===0?[0,-1,0,1][col]:[0,-3,2,0][col];
      cells.push(`<g transform="translate(${col*192+32},${row*208+24+bob})">${inner}</g>`);
    }
    const atlas=await sharp(Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="768" height="832">${cells.join('')}</svg>`)).png().toBuffer();
    return {owner:{bytes:atlas,manifest:gridManifest(768,832,'owner-preset-fixture')},pet:{bytes:await readFile(join(root,'assets','sample-puppy-sheet.png')),manifest:JSON.parse(await readFile(join(root,'manifest.json')))},inputs:{owner:await sharp(Buffer.from(owner)).png().toBuffer(),pet:await sharp(pet).png().toBuffer()}};
  })());return cached.get(root);
}
export async function syntheticInput(subject) { return Buffer.from((await fixtures()).inputs[subject]); }
/** @param {{root?:string}} options */
export function createFixtureProvider({root=defaultRoot}={}) {
  return async({subject,signal})=>{
    await pause(250,undefined,{signal});
    const sample=(await fixtures(root))[subject];
    return {bytes:Buffer.from(sample.bytes),manifest:structuredClone(sample.manifest),provenance:{provider:'fixture',subject,inputConditioned:false,source:subject==='pet'?'built-in-imagegen-synthetic-sample':'original-code-drawn-preset',model:null,label:'Fixture output — not derived from uploaded input'}};
  };
}
export const fixtureProvider=createFixtureProvider();
