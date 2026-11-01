import type { CommentInput, PublishInput } from '../../shared/community.ts';
export type PendingWrite={path:string;payload:PublishInput|CommentInput|Record<string,never>};
export type Transport=(input:string,init?:RequestInit)=>Promise<Response>;
export class CommunityError extends Error {readonly status:number;constructor(code:string,status:number){super(code);this.status=status;}}
export async function communityRequest<T>(path:string,init:RequestInit={},transport:Transport=fetch):Promise<T>{
 const response=await transport(path,{signal:AbortSignal.timeout(10000),...init,credentials:'same-origin',cache:'no-store',headers:{'Content-Type':'application/json',...init.headers}});
 const value=await response.json();if(!response.ok)throw new CommunityError(typeof value.error==='string'?value.error:'community_unavailable',response.status);return value as T;
}
// Retain an uncertain payload in browser memory even if the parent unmounts this
// optional panel. Never persist photos or their base64 in browser storage.
const pending=new Map<string,PendingWrite>();
export const pendingWrite=(playerId:string)=>pending.get(playerId);
export function prepareWrite(playerId:string,write:PendingWrite){if(pending.has(playerId))throw Error('pending_request_exists');pending.set(playerId,write);}
export async function submitWrite(playerId:string,transport:Transport=fetch){
 const write=pending.get(playerId);if(!write)throw Error('no_pending_request');
 try{const result=await communityRequest(write.path,{method:'POST',body:JSON.stringify(write.payload)},transport);pending.delete(playerId);return result;}
 catch(error){if(error instanceof CommunityError&&error.status<500)pending.delete(playerId);throw error;}
}
