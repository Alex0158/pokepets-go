import {createHash,randomBytes} from 'node:crypto';
export function identity(token:string){return createHash('sha256').update(token).digest('hex');}
import { MongoClient } from 'mongodb';
import { apply, type World, type Command } from './game';
let connection:Promise<MongoClient>|undefined;
export async function collection(){const uri=process.env.MONGODB_URI;if(!uri)throw Error('MongoDB is not configured. Set MONGODB_URI to enable saved play.');connection??=new MongoClient(uri,{serverSelectionTimeoutMS:4000}).connect().catch(error=>{connection=undefined;throw error;});return (await connection).db(process.env.MONGODB_DB||'pokepets_go_v2').collection<World & {_id:string}>('worlds');}
export async function read(){const col=await collection();await col.updateOne({_id:'neighbourhood'},{$setOnInsert:{version:0,players:[],matches:[],receipts:{}}},{upsert:true});return (await col.findOne({_id:'neighbourhood'}))!;}
export async function command(id:string,c:Command){for(let n=0;n<8;n++){const w=await read();const next=apply(w,id,c);if(next.version===w.version)return next;if((await (await collection()).replaceOne({_id:w._id,version:w.version},{...next,_id:w._id})).modifiedCount)return next;}throw Error('World is busy. Retry your action.');}
export async function register(name:string,pet:string){const token=randomBytes(32).toString('hex');const id=identity(token);const col=await collection();await read();await col.updateOne({_id:'neighbourhood'},{$push:{players:{id,name,pet,xp:0,earned:0,stats:{health:100,attack:22,defence:12,speed:10},memories:[]}},$inc:{version:1}});return {id,token};}
