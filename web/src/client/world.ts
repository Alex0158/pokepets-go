export type WorldPlayer={playerId:string;displayName:string;petId:string;petName:string;position:{x:number;z:number}};
export type WorldInvitation={matchId:string;creatorPlayerId:string;creatorDisplayName:string;expectedVersion:number};
export type WorldSnapshot={source:'live';players:WorldPlayer[];invitations:WorldInvitation[]};

export function mapPosition(player:WorldPlayer){
  return {left:`${Math.max(10,Math.min(90,player.position.x*100))}%`,top:`${Math.max(10,Math.min(77,player.position.z*100))}%`};
}
