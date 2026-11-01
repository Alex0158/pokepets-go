import { request } from './game-client.ts';
import type { ProgressSnapshot } from './game-client.ts';
export type VoiceResult={snapshot:ProgressSnapshot;receipt:{commandId:string};duplicate:boolean;transcript:string|null;points:number;reason:string};
type Lookup={status:'committed'}&VoiceResult|{status:'pending'|'not_found'};
type StorageLike=Pick<Storage,'getItem'|'setItem'|'removeItem'>;
type Transport=(path:string,init?:RequestInit)=>Promise<Response>;
type Recording={commandId:string;audioBase64:string;mimeType:string}|{commandId:string;text:string};
export class VoiceClient {
  key:string;store:StorageLike;transport:Transport;uuid:()=>string;
  recording:Recording|null=null;lastStatus:string|null=null;
  constructor(playerId:string,store:StorageLike,transport:Transport=fetch,uuid=()=>crypto.randomUUID()){this.key=`pokepet-voice-pending-v1:${playerId}`;this.store=store;this.transport=transport;this.uuid=uuid;}
  pending():{commandId:string}|null{const raw=this.store.getItem(this.key);if(!raw)return null;const value=JSON.parse(raw);if(!/^[0-9a-f-]{36}$/.test(value?.commandId??''))throw Error('Pending report metadata is invalid. Preserve it for recovery.');return {commandId:value.commandId};}
  async submit(audioBase64:string,mimeType:string){if(this.pending())throw Error('A pending report must be resolved first.');const commandId=this.uuid();this.store.setItem(this.key,JSON.stringify({commandId}));this.recording={commandId,audioBase64,mimeType};return this.send();}
  async submitText(text:string){if(this.pending())throw Error('A pending report must be resolved first.');const commandId=this.uuid();this.store.setItem(this.key,JSON.stringify({commandId}));this.recording={commandId,text};return this.send();}
  async retry(){if(!this.recording)throw Error('The recording was lost on reload. Check the saved result before restoring the recording.');return this.send();}
  async restore(audioBase64:string,mimeType:string){const pending=this.pending();if(!pending||this.lastStatus!=='not_found')throw Error('A pending report must be checked before restoring audio.');this.recording={commandId:pending.commandId,audioBase64,mimeType};return this.send();}
  async restoreText(text:string){const pending=this.pending();if(!pending||this.lastStatus!=='not_found')throw Error('A pending report must be checked before restoring text.');this.recording={commandId:pending.commandId,text};return this.send();}
  async lookup():Promise<Lookup>{const pending=this.pending();if(!pending)return {status:'not_found'};const result=await request<Lookup>(`/api/voice-mission?commandId=${encodeURIComponent(pending.commandId)}`,{},this.transport);this.lastStatus=result.status;if(result.status==='committed'){this.store.removeItem(this.key);this.recording=null;}return result;}
  private async send(){if(!this.recording)throw Error('No recording');const result=await request<VoiceResult>('/api/voice-mission',{method:'POST',body:JSON.stringify(this.recording),signal:AbortSignal.timeout(70000)},this.transport);if(!result.snapshot||!Number.isInteger(result.points)||result.points<0||result.points>20)throw Error('Invalid report response; check the saved result.');this.store.removeItem(this.key);this.recording=null;return result;}
}
