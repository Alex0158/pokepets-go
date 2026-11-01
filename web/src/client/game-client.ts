import type { Stats, MatchSnapshot } from '../shared/multiplayer.ts';

export type ProgressSnapshot={petId:string;points:number;stats:Stats;completedMissionIds:string[];dailyMissions?:{date:string;completedMissionIds:string[]};version:number;updatedAt:string};
export type Profile={player:{_id:string;displayName:string};pet:{_id:string;name:string;baseStats:Stats};matches:MatchSnapshot[]};
type Store=Pick<Storage,'getItem'|'setItem'|'removeItem'>;
type Transport=(path:string,init?:RequestInit)=>Promise<Response>;
type Pending={path:string;body:Record<string,unknown>};
export class ApiError extends Error { status:number; constructor(message:string,status:number){super(message);this.status=status;} }
export async function request<T>(path:string,init:RequestInit={},transport:Transport=fetch):Promise<T> {
  const response=await transport(path,{...init,credentials:'same-origin',cache:'no-store',signal:init.signal??AbortSignal.timeout(20000),headers:{'Content-Type':'application/json',...init.headers}});
  const data=await response.json();
  if(!response.ok)throw new ApiError(data.error??'request_failed',response.status);
  return data;
}
const allowed=(path:string)=>path==='/api/auto-move'||/^\/api\/progression\/(mission|upgrade)$/.test(path)||/^\/api\/matches(?:\/[a-zA-Z0-9-]{1,80}\/(join|moves))?$/.test(path)||/^\/api\/practice(?:\/[a-zA-Z0-9-]{1,80}\/moves)?$/.test(path);
export class GameClient {
  key:string;store:Store;transport:Transport;uuid:()=>string;
  constructor(playerId:string,store:Store,transport:Transport=fetch,uuid=()=>crypto.randomUUID()) {this.key=`pokepet-pending-v1:${playerId}`;this.store=store;this.transport=transport;this.uuid=uuid;}
  pending():Pending|null {
    const saved=this.store.getItem(this.key);if(!saved)return null;
    let value:Pending;try{value=JSON.parse(saved);}catch{throw Error('Pending request storage is invalid. Keep this data and ask for recovery.');}
    if(!value||!allowed(value.path)||!value.body||typeof value.body.commandId!=='string')throw Error('Pending request storage is invalid. Keep this data and ask for recovery.');
    return value;
  }
  async command<T>(path:string,payload:Record<string,unknown>):Promise<T> {
    if(!allowed(path))throw Error('Unsupported command');
    const pending=this.pending();
    if(pending)throw Error('A pending request must be retried before another action.');
    const command={path,body:{commandId:this.uuid(),...payload}};
    try{this.store.setItem(this.key,JSON.stringify(command));}catch{throw Error('Browser storage is unavailable. Enable storage before saving an action.');}
    return this.send<T>(command);
  }
  async retry<T>():Promise<T>{const pending=this.pending();if(!pending)throw Error('No pending request');return this.send<T>(pending);}
  private async send<T>(pending:Pending):Promise<T> {
    try{
      const result=await request<T>(pending.path,{method:'POST',body:JSON.stringify(pending.body)},this.transport);
      this.store.removeItem(this.key);return result;
    }catch(error){
      if(error instanceof ApiError&&error.status>=400&&error.status<500&&![408,429].includes(error.status)){this.store.removeItem(this.key);throw error;}
      throw Error('Connection interrupted. Retry the pending request to check its saved result.');
    }
  }
}
export function newerSnapshot<T extends {version:number}>(current:T|null,next:T):T {return !current||next.version>current.version?next:current;}
export function newerProgression<T extends {version:number;dailyMissions?:{date:string;completedMissionIds:string[]}}>(current:T|null,next:T):T {
  if(!current||next.version>current.version)return next;
  if(next.version===current.version&&next.dailyMissions&&(next.dailyMissions.date>(current.dailyMissions?.date??'')))return next;
  return current;
}
