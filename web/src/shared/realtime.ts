export type RealtimeState='idle'|'connecting'|'listening'|'stopped'|'error';
export type RealtimeTranscript={turnId:string;text:string;final:boolean};
export type RealtimeCallbacks={onState:(state:RealtimeState)=>void;onUserTranscript:(value:RealtimeTranscript)=>void;onAssistantTranscript:(value:RealtimeTranscript)=>void;onRemoteStream:(stream:MediaStream)=>void;onError:(message:string)=>void};
export type RealtimeSession={start:()=>Promise<void>;stop:()=>void};
