export type WorldPlayer={playerId:string;displayName:string;petId:string;petName:string;position:{x:number;z:number}};
export type WorldInvitation={matchId:string;creatorPlayerId:string;creatorDisplayName:string;expectedVersion:number};
export type WorldSnapshot={source:'live';players:WorldPlayer[];invitations:WorldInvitation[]};

export function mapPosition(player:WorldPlayer){
  return {left:`${Math.max(10,Math.min(90,player.position.x*100))}%`,top:`${Math.max(10,Math.min(77,player.position.z*100))}%`};
}

export type WorldProjection=(position:WorldPlayer['position'])=>{left:number;top:number;visible?:boolean}|null;
export function projectedMapPosition(player:WorldPlayer,project?:WorldProjection){
  if(project)try{
    const point=project(player.position);
    if(point&&Number.isFinite(point.left)&&Number.isFinite(point.top)&&(point.visible===undefined||typeof point.visible==='boolean'))return {left:point.left,top:point.top,visibility:point.visible===false?'hidden' as const:'visible' as const};
  }catch{/* The optional renderer must not remove player selection. */}
  return mapPosition(player);
}
