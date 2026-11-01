import test from 'node:test';
import assert from 'node:assert/strict';
import { GameClient, newerSnapshot, newerProgression } from '../src/client/game-client.ts';
import { MAP_MISSIONS } from '../src/client/missions.ts';
import { MISSIONS } from '../src/server/progression/rules.ts';

const storage=()=>{const values=new Map<string,string>();return {getItem:(k:string)=>values.get(k)??null,setItem:(k:string,v:string)=>{values.set(k,v);},removeItem:(k:string)=>{values.delete(k);}};};
const id='11111111-1111-4111-8111-111111111111';
test('map mission IDs and displayed reward values match the authoritative backend catalogue',()=>{
  assert.deepEqual(Object.fromEntries(MAP_MISSIONS.map(m=>[m.id,m.points])),MISSIONS);
});
test('uncertain command survives reload and retries identical payload before another mutation',async()=>{
  const store=storage(),requests:string[]=[];
  const failing=async(_url:string,init?:RequestInit)=>{requests.push(String(init?.body));throw Error('offline');};
  const first=new GameClient('player-a',store,failing,()=>id);
  await assert.rejects(first.command('/api/progression/upgrade',{stat:'attack'}),/retry/i);
  const second=new GameClient('player-a',store,async(_url,init)=>{requests.push(String(init?.body));return Response.json({snapshot:{version:2},duplicate:true});},()=> '22222222-2222-4222-8222-222222222222');
  await assert.rejects(second.command('/api/progression/mission',{missionId:'quiet-company',confirmed:true}),/pending/i);
  await second.retry();
  assert.equal(requests[0],requests[1]);assert.equal(second.pending(),null);
});
test('pending commands are player scoped and definitive errors release the command',async()=>{
  const store=storage();const a=new GameClient('a',store,async()=>Response.json({error:'database_unavailable'},{status:503}),()=>id);
  await assert.rejects(a.command('/api/progression/upgrade',{stat:'attack'}));
  const b=new GameClient('b',store,async()=>Response.json({error:'insufficient_points'},{status:409}),()=>id);
  assert.equal(b.pending(),null);await assert.rejects(b.command('/api/progression/upgrade',{stat:'attack'}),/insufficient_points/);assert.equal(b.pending(),null);assert.ok(a.pending());
});
test('storage failure prevents an unsafe mutation and older snapshots never roll state back',async()=>{
  let calls=0;const client=new GameClient('a',{getItem:()=>null,setItem:()=>{throw Error('blocked');},removeItem:()=>{}},async()=>{calls++;return Response.json({});},()=>id);
  await assert.rejects(client.command('/api/progression/upgrade',{stat:'attack'}),/storage/i);assert.equal(calls,0);
  const current={version:5,points:15};assert.equal(newerSnapshot(current,{version:4,points:20}),current);assert.equal(newerSnapshot(current,{version:5,points:15}),current);assert.equal(newerSnapshot(current,{version:6,points:10}).points,10);
});
test('a new server day resets daily care even when progression revision is unchanged',()=>{
  const before={version:4,dailyMissions:{date:'2026-11-01',completedMissionIds:['daily-feed']}};
  const after={version:4,dailyMissions:{date:'2026-11-02',completedMissionIds:[]}};
  assert.equal(newerProgression(before,after),after);
  assert.equal(newerProgression(after,before),after);
});
