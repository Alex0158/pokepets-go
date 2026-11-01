import type { AvatarAssets, AvatarDescriptor, AvatarSubject } from './avatar-client.ts';
type Store=Pick<Storage,'getItem'|'setItem'>;
const key=(playerId:string)=>`pokepet-character-refs-v1:${playerId}`;
export function saveCharacterRefs(store:Store,playerId:string,assets:AvatarAssets){
  const refs=Object.values(assets).filter(Boolean).map(asset=>({subject:asset!.subject,assetId:asset!.assetId,expiresAt:asset!.expiresAt,provider:asset!.provenance.provider,inputPolicy:asset!.provenance.inputPolicy}));
  store.setItem(key(playerId),JSON.stringify(refs));
}
export function readCharacterRefs(store:Store,playerId:string,now=Date.now()):AvatarDescriptor[]{
  let refs:unknown;try{refs=JSON.parse(store.getItem(key(playerId))??'[]');}catch{return [];}
  if(!Array.isArray(refs))return [];
  return refs.filter(r=>r&&['owner','pet'].includes(r.subject)&&/^[0-9a-f-]{36}$/.test(r.assetId)&&Date.parse(r.expiresAt)>now&&typeof r.provider==='string'&&['personal-photo','synthetic-only'].includes(r.inputPolicy)).slice(0,2).map(r=>({subject:r.subject as AvatarSubject,assetId:r.assetId,expiresAt:r.expiresAt,imageUrl:`/api/avatars/assets/${r.assetId}/image`,manifestUrl:`/api/avatars/assets/${r.assetId}/manifest`,provenance:{provider:r.provider,inputPolicy:r.inputPolicy}}));
}
