'use client';
import { useCallback, useEffect, useRef, useState } from 'react';
import type { CommunityFeed, CommunityPost, Leaderboard } from '../../shared/community.ts';
import { communityRequest, pendingWrite, prepareWrite, submitWrite } from './client.ts';
import styles from './community.module.css';

function CommentForm({post,disabled,onPost}:{post:CommunityPost;disabled:boolean;onPost:(id:string,text:string)=>Promise<void>}){
 const [text,setText]=useState('');return <form onSubmit={async e=>{e.preventDefault();await onPost(post.postId,text);setText('');}}>
  <label className={styles.label}>Comment on {post.authorName}&apos;s post<input value={text} onChange={e=>setText(e.target.value)} maxLength={280} required disabled={disabled} placeholder="Say something kind"/></label>
  <button disabled={disabled||!text.trim()} type="submit">Publish comment to members</button>
 </form>;
}
export function CommunityPanel({playerId}:{playerId:string}){
 const [board,setBoard]=useState<Leaderboard|null>(null),[feed,setFeed]=useState<CommunityFeed|null>(null);
 const [boardError,setBoardError]=useState(''),[feedError,setFeedError]=useState(''),[message,setMessage]=useState('');
 const [caption,setCaption]=useState(''),[file,setFile]=useState<File|null>(null),[preview,setPreview]=useState(''),[consent,setConsent]=useState(false);
 const [busy,setBusy]=useState(false),[pending,setPending]=useState(()=>Boolean(pendingWrite(playerId)));const inFlight=useRef(false),fileInput=useRef<HTMLInputElement>(null);
 const refresh=useCallback(async()=>{
  const results=await Promise.allSettled([communityRequest<Leaderboard>('/api/community/leaderboard'),communityRequest<CommunityFeed>('/api/community/posts')]);
  const [ranking,posts]=results;
  if(ranking.status==='fulfilled'){setBoard(ranking.value);setBoardError('');}else setBoardError('Leaderboard unavailable. Your adventure is still available.');
  if(posts.status==='fulfilled'){setFeed(posts.value);setFeedError('');}else setFeedError('Posts unavailable. Your adventure is still available.');
 },[]);
 useEffect(()=>{void refresh();const timer=setInterval(()=>void refresh(),10000);return()=>clearInterval(timer);},[refresh]);
 useEffect(()=>{if(!file){setPreview('');return;}const url=URL.createObjectURL(file);setPreview(url);return()=>URL.revokeObjectURL(url);},[file]);
 useEffect(()=>{const warn=(event:BeforeUnloadEvent)=>{if(pendingWrite(playerId)){event.preventDefault();event.returnValue='';}};window.addEventListener('beforeunload',warn);return()=>window.removeEventListener('beforeunload',warn);},[playerId]);
 async function save(){
  if(inFlight.current)return;inFlight.current=true;setBusy(true);
  try{await submitWrite(playerId);setPending(false);setMessage('Saved to Community.');setFile(null);setCaption('');setConsent(false);if(fileInput.current)fileInput.current.value='';await refresh();}
  catch(error){setPending(Boolean(pendingWrite(playerId)));setMessage(`${error instanceof Error?error.message:'community_unavailable'}. ${pendingWrite(playerId)?'The exact request is retained in this tab. Retry to confirm it; keep the tab open.':'Please check the input and try again.'}`);}
  finally{setBusy(false);inFlight.current=false;}
 }
 async function publish(){
  if(!file||!consent||inFlight.current||pendingWrite(playerId))return;
  inFlight.current=true;setBusy(true);
  try{
   if(!['image/jpeg','image/png'].includes(file.type)||file.size>512*1024)throw Error('Choose a JPEG or PNG up to 512 KiB');
   const bytes=new Uint8Array(await file.arrayBuffer());let binary='';for(const byte of bytes)binary+=String.fromCharCode(byte);
   prepareWrite(playerId,{path:'/api/community/posts',payload:{commandId:crypto.randomUUID(),caption,mimeType:file.type,imageBase64:btoa(binary),shareConsent:true}});setPending(true);
  }catch(error){setMessage(error instanceof Error?error.message:'Unable to read image');}
  finally{setBusy(false);inFlight.current=false;}
  if(pendingWrite(playerId))await save();
 }
 async function comment(id:string,text:string){if(busy||pendingWrite(playerId))return;prepareWrite(playerId,{path:`/api/community/posts/${id}/comments`,payload:{commandId:crypto.randomUUID(),text,shareConsent:true}});setPending(true);await save();}
 async function withdraw(id:string){if(busy||pendingWrite(playerId))return;prepareWrite(playerId,{path:`/api/community/posts/${id}/withdraw`,payload:{}});setPending(true);await save();}
 return <section className={styles.panel} aria-label="Community">
  <header><p className={styles.eyebrow}>Shared adventures</p><h2>Community</h2><p>Real member posts from this server. Fictional pet stats; no care verification or real location.</p><button type="button" onClick={()=>void refresh()}>Refresh Community</button></header>
  <section className={styles.card} aria-label="Leaderboard"><h3>Pet strength leaderboard</h3><p>Saved health + attack + defence + speed. Ties use player ID order. Top 20 registered players.</p>
   {boardError&&<p role="status">{boardError}{board?' Showing the last loaded ranking.':''}</p>}
   {board?<ol className={styles.ranking}>{board.entries.map(e=><li key={e.playerId}><span>{e.position}. {e.displayName}{e.playerId===playerId?' (you)':''}</span><strong>{e.score} stats</strong></li>)}</ol>:!boardError&&<p>Loading ranking…</p>}
  </section>
  <form className={styles.card} onSubmit={e=>{e.preventDefault();void publish();}}><h3>Share an adventure photo</h3><p>Anyone with app access can create a player session and view these posts. Images expire after 7 days. You can withdraw your post; others may already have saved a copy.</p>
   <label className={styles.label}>JPEG or PNG, up to 512 KiB<input ref={fileInput} type="file" accept="image/jpeg,image/png" disabled={busy||pending} onChange={e=>{const next=e.target.files?.[0]??null;if(next&&(!['image/jpeg','image/png'].includes(next.type)||next.size>512*1024)){setMessage('Choose a JPEG or PNG up to 512 KiB.');e.target.value='';setFile(null);return;}setFile(next);setConsent(false);}}/></label>
   {preview&&<div><img className={styles.photo} src={preview} alt="Private local preview"/><p>Private preview — uploaded only when you publish.</p></div>}
   <label className={styles.label}>Caption<input value={caption} onChange={e=>setCaption(e.target.value)} maxLength={180} required disabled={busy||pending}/></label>
   <label className={styles.consent}><input type="checkbox" checked={consent} disabled={busy||pending} onChange={e=>setConsent(e.target.checked)}/><span>I am allowed to share this image and caption with members for 7 days. Avoid sensitive photos; avatar photos are never shared automatically.</span></label>
   <button type="submit" disabled={busy||pending||!file||!consent||!caption.trim()}>Publish photo to members</button>
  </form>
  {message&&<p role="status" className={styles.message}>{message}</p>}
  {pending&&<button disabled={busy} onClick={()=>void save()}>{busy?'Saving…':'Retry the same pending request'}</button>}
  <section aria-label="Member photo posts"><h3>Member photo posts</h3><p>Comments publish to members as plain text. Keep them kind and avoid personal details.</p>{feedError&&<p role="status">{feedError}{feed?' Showing the last loaded posts; hidden or expired photos may no longer load.':''}</p>}
   {feed&&!feed.posts.length&&<p>No shared photos yet. Publish the first adventure.</p>}
   {feed?.posts.map(post=><article key={post.postId} className={styles.card}><header><strong>{post.authorName}{post.authorId===playerId?' (you)':''}</strong><p><time dateTime={post.createdAt}>{new Date(post.createdAt).toLocaleString('en-GB')}</time> · expires {new Date(post.expiresAt).toLocaleDateString('en-GB')}</p></header>
    <img className={styles.photo} src={post.imageUrl} alt={post.caption} loading="lazy"/><p className={styles.text}>{post.caption}</p>
    {post.authorId===playerId&&<button disabled={busy||pending} onClick={()=>void withdraw(post.postId)}>Withdraw my post and its comments</button>}
    <ul className={styles.comments}>{post.comments.map(c=><li key={c.commentId}><strong>{c.authorName}: </strong><span className={styles.text}>{c.text}</span></li>)}</ul>
    {post.comments.length<100?<CommentForm post={post} disabled={busy||pending} onPost={comment}/>:<p>Comment limit reached.</p>}
   </article>)}
  </section>
 </section>;
}
