import { createHash } from 'node:crypto';
import { Binary, MongoServerError } from 'mongodb';
import type { Db } from 'mongodb';
import type { Pet } from '../../shared/multiplayer.ts';
import type { CommentInput, CommunityFeed, Leaderboard, PublicationResult, PublishInput } from '../../shared/community.ts';
import type { BackboneService } from '../core/service.ts';
import { fail } from '../core/battle.ts';
import { commandId, normalizeImage, RETENTION_MS, validateCaption, validateComment } from './rules.ts';
type SavedComment={commentId:string;authorId:string;authorName:string;text:string;digest:string;createdAt:Date};
type SavedPost={_id:string;authorId:string;authorName:string;digest:string;caption?:string;image?:Binary;comments?:SavedComment[];withdrawn:boolean;createdAt:Date;expiresAt:Date};
const hash=(v:unknown)=>createHash('sha256').update(JSON.stringify(v)).digest('hex');
const visible=(now:Date)=>({withdrawn:false,expiresAt:{$gt:now}});
export class CommunityService {
 readonly db:Db;readonly core:BackboneService;
 constructor(db:Db,core:BackboneService){this.db=db;this.core=core;}
 collection(){return this.db.collection<SavedPost>('communityPosts');}
 async initialize(){await this.collection().createIndex({expiresAt:1},{expireAfterSeconds:0});await this.collection().createIndex({createdAt:-1,_id:1});}
 async leaderboard(token:string|undefined):Promise<Leaderboard>{
  await this.core.actor(token);
  const entries=await this.db.collection<Pet>('pets').aggregate<{playerId:string;displayName:string;score:number}>([
   {$lookup:{from:'players',localField:'ownerId',foreignField:'_id',as:'player'}},{$unwind:'$player'},
   {$lookup:{from:'progressions',localField:'_id',foreignField:'_id',as:'progress'}},
   {$set:{stats:{$ifNull:[{$arrayElemAt:['$progress.stats',0]},'$baseStats']}}},
   {$project:{_id:0,playerId:'$ownerId',displayName:'$player.displayName',score:{$add:['$stats.health','$stats.attack','$stats.defence','$stats.speed']}}},
   {$sort:{score:-1,playerId:1}},{$limit:20}
  ],{maxTimeMS:2000}).toArray();
  return {metric:'saved_pet_stat_total',label:'Saved pet stat total',entries:entries.map((e,i)=>({...e,position:i+1}))};
 }
 async feed(token:string|undefined):Promise<CommunityFeed>{
  await this.core.actor(token);
  const posts=await this.collection().find(visible(this.core.clock()),{projection:{image:0,digest:0,'comments.digest':0},maxTimeMS:2000}).sort({createdAt:-1,_id:1}).limit(20).toArray();
  return {posts:posts.map(p=>({postId:p._id,authorId:p.authorId,authorName:p.authorName,caption:p.caption!,imageUrl:`/api/community/posts/${p._id}/image`,createdAt:p.createdAt.toISOString(),expiresAt:p.expiresAt.toISOString(),comments:(p.comments??[]).map(c=>({commentId:c.commentId,authorId:c.authorId,authorName:c.authorName,text:c.text,createdAt:c.createdAt.toISOString()}))}))};
 }
 async publish(token:string|undefined,input:PublishInput):Promise<PublicationResult>{
  const actor=await this.core.actor(token);commandId(input.commandId);if(input.shareConsent!==true)fail('share_consent_required',400);
  const caption=validateCaption(input.caption);if(typeof input.imageBase64!=='string')fail('invalid_image',400);
  const digest=hash([caption,input.mimeType,input.imageBase64]),_id=hash([actor._id,input.commandId]),col=this.collection();
  const prior=await col.findOne({_id},{maxTimeMS:2000});
  const result=(post:SavedPost)=>{if(post.digest!==digest)fail('command_conflict',409);return {postId:post._id,withdrawn:post.withdrawn};};
  if(prior)return result(prior);
  const image=await normalizeImage(input.mimeType,input.imageBase64),now=this.core.clock();
  const post:SavedPost={_id,authorId:actor._id,authorName:actor.displayName,digest,caption,image:new Binary(image),comments:[],withdrawn:false,createdAt:now,expiresAt:new Date(now.getTime()+RETENTION_MS)};
  try{await col.insertOne(post);return result(post);}catch(e){if(!(e instanceof MongoServerError&&e.code===11000))throw e;const saved=await col.findOne({_id});if(!saved)throw e;return result(saved);}
 }
 async image(token:string|undefined,postId:string){
  await this.core.actor(token);const post=await this.collection().findOne({_id:postId,...visible(this.core.clock())},{projection:{image:1},maxTimeMS:2000});
  if(!post?.image)fail('post_not_found',404);return Buffer.from(post.image.buffer);
 }
 async comment(token:string|undefined,postId:string,input:CommentInput){
  const actor=await this.core.actor(token);commandId(input.commandId);if(input.shareConsent!==true)fail('share_consent_required',400);const text=validateComment(input.text);
  const id=hash([actor._id,input.commandId]),digest=hash(text),col=this.collection();
  const comment:SavedComment={commentId:id,authorId:actor._id,authorName:actor.displayName,text,digest,createdAt:this.core.clock()};
  const post=await col.findOneAndUpdate({_id:postId,...visible(this.core.clock()),'comments.commentId':{$ne:id},'comments.99':{$exists:false}},{$push:{comments:comment}},{returnDocument:'after',projection:{image:0},maxTimeMS:2000});
  if(post)return {postId,commentId:id};
  const existing=await col.findOne({_id:postId,...visible(this.core.clock())},{projection:{comments:1},maxTimeMS:2000});
  if(!existing)fail('post_not_found',404);const prior=existing.comments?.find(c=>c.commentId===id);
  if(prior){if(prior.digest!==digest)fail('command_conflict',409);return {postId,commentId:id};}return fail('comment_limit_reached',409);
 }
 async withdraw(token:string|undefined,postId:string){
  const actor=await this.core.actor(token),col=this.collection();
  const post=await col.findOne({_id:postId},{projection:{authorId:1},maxTimeMS:2000});if(!post)fail('post_not_found',404);if(post.authorId!==actor._id)fail('forbidden',403);
  await col.updateOne({_id:postId,authorId:actor._id},{$set:{withdrawn:true},$unset:{image:'',caption:'',comments:''}},{maxTimeMS:2000});return {postId,withdrawn:true};
 }
}
