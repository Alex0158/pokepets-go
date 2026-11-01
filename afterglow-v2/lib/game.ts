export const missions = [
 {id:'canal',title:'Moonlight by the canal',kind:'Outdoor',minutes:15,xp:60,icon:'☾',description:'Take a gentle walk together and discover one new scent.'},
 {id:'play',title:'A little living-room magic',kind:'Indoor',minutes:5,xp:40,icon:'✦',description:'Spend five minutes with your companion’s favourite toy.'},
 {id:'quiet',title:'The art of doing nothing',kind:'Indoor',minutes:10,xp:50,icon:'♡',description:'Find a comfortable spot and enjoy a quiet moment together.'}
];
export type Stats = {health:number;attack:number;defence:number;speed:number};
export type Player = {id:string;name:string;pet:string;xp:number;earned:number;stats:Stats;memories:{missionId:string;title:string;caption:string;date:string}[]};
export type Match = {id:string;version:number;status:'waiting'|'active'|'finished';players:string[];hp:number[];stats:Stats[];guard:boolean[];turn:number;log:string[];winner:string|null};
export type World = {version:number;players:Player[];matches:Match[];receipts:Record<string,string>};
export type Command = {commandId:string;action:string;expectedVersion?:number;matchId?:string;missionId?:string;confirmed?:boolean;caption?:string;stat?:keyof Stats;move?:string;name?:string;pet?:string};
export function apply(world:World, id:string, c:Command):World {
 const w=structuredClone(world), p=w.players.find(p=>p.id===id); if(!p) throw Error('Session expired. Please start again.');
 const key=id+':'+c.commandId, fingerprint=JSON.stringify(c); if(w.receipts[key]) {if(w.receipts[key]!==fingerprint)throw Error('Command ID already used.');return w;}
 if(c.action==='mission') { const m=missions.find(m=>m.id===c.missionId); if(!m||c.confirmed!==true)throw Error('Confirm a valid activity first.'); if(!p.memories.some(x=>x.missionId===m.id)){p.xp+=m.xp;p.earned+=m.xp;p.memories.push({missionId:m.id,title:m.title,caption:(c.caption||'').slice(0,240),date:new Date().toISOString()});} }
 else if(c.action==='upgrade') {if(!c.stat||!['health','attack','defence','speed'].includes(c.stat)||p.xp<40)throw Error('An upgrade needs 40 XP.');p.xp-=40;p.stats[c.stat]+=c.stat==='health'?10:2;}
 else if(c.action==='profile'){p.name=(c.name||p.name).trim().slice(0,30);p.pet=(c.pet||p.pet).trim().slice(0,30);}
 else if(c.action==='create'){if(w.matches.some(m=>m.status!=='finished'&&m.players.includes(id)))throw Error('Finish your current match first.');w.matches.push({id:crypto.randomUUID(),version:0,status:'waiting',players:[id],hp:[],stats:[],guard:[false,false],turn:0,log:['Waiting for a challenger.'],winner:null});}
 else {const m=w.matches.find(m=>m.id===c.matchId);if(!m)throw Error('Match not found.');if(m.version!==c.expectedVersion)throw Error('Match changed. Refresh and try again.');
 if(c.action==='join'){if(m.status!=='waiting'||m.players.includes(id))throw Error('Cannot join this match.');if(w.matches.some(x=>x.id!==m.id&&x.status!=='finished'&&x.players.includes(id)))throw Error('Finish your current match first.');m.players.push(id);m.stats=m.players.map(pid=>({...w.players.find(p=>p.id===pid)!.stats}));m.hp=m.stats.map(s=>s.health);m.status='active';m.turn=m.stats[1].speed>m.stats[0].speed?1:0;m.log=['The adventure begins.'];}
 else if(c.action==='move'){const i=m.players.indexOf(id),other=1-i;if(m.status!=='active'||i!==m.turn)throw Error('Wait for your turn.');if(c.move==='defend'){m.guard[i]=true;m.log.push(p.pet+' takes a defensive stance.');}else if(c.move==='attack'){const damage=Math.max(1,Math.round((m.stats[i].attack-m.stats[other].defence/2)*(m.guard[other]?.5:1)));m.hp[other]=Math.max(0,m.hp[other]-damage);m.guard[other]=false;m.log.push(p.pet+' attacks for '+damage+' damage.');}else throw Error('Invalid move.');m.turn=other;if(m.hp[other]===0||m.log.length>40){m.status='finished';m.winner=m.hp[other]===0?id:null;m.log.push(m.winner?p.pet+' wins!':'A friendly draw.');}}
 else throw Error('Unknown action.');m.version++;}
 w.receipts[key]=fingerprint;w.version++;return w;
}
