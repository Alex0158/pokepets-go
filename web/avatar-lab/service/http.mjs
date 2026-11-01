import { randomBytes, createHash } from 'node:crypto';
import { JobError } from './jobs.mjs';
import { syntheticInput } from './fixture-provider.mjs';
const UUID='[a-f0-9-]{36}';
const digest=s=>createHash('sha256').update(s).digest('hex');
const json=(res,value,status=200)=>{res.writeHead(status,{'Content-Type':'application/json','Cache-Control':'no-store','X-Content-Type-Options':'nosniff'});res.end(JSON.stringify(value));};
function readBody(req) {
  return new Promise((resolve,reject)=>{
    let size=0,chunks=[];
    req.on('data',chunk=>{
      size+=chunk.length;
      if(size>6000000){chunks=[];reject(new JobError('body_too_large',413));return;}
      chunks.push(chunk);
    });
    req.on('end',()=>{try{resolve(JSON.parse(Buffer.concat(chunks).toString('utf8')));}catch{reject(new JobError('invalid_json'));}});
    req.on('error',()=>reject(new JobError('invalid_request')));
  });
}
export function createAvatarApi(jobs) {
  const sessions=new Map();
  return async (req,res)=>{
    const path=new URL(req.url,'http://127.0.0.1').pathname;
    if(!path.startsWith('/api/avatar-')&&!/^\/assets\/job-/.test(path)&&!path.startsWith('/synthetic/'))return false;
    try {
      const host=req.headers.host;
      if(![`127.0.0.1:${req.socket.localPort}`,`localhost:${req.socket.localPort}`].includes(host))throw new JobError('local_only',403);
      if(!['GET','HEAD'].includes(req.method)&&req.headers.origin!==`http://${host}`)throw new JobError('origin_rejected',403);
      if(req.method==='POST'&&req.headers['content-type']?.split(';')[0]!=='application/json')throw new JobError('json_required',415);
      const now=Date.now();for(const [key,expiry]of sessions)if(expiry<=now)sessions.delete(key);
      const cookies=(req.headers.cookie??'').split(';').map(s=>s.trim()).filter(s=>s.startsWith('avatar_lab_session='));
      if(cookies.length>1)throw new JobError('unauthenticated',401);
      let token=cookies[0]?.slice('avatar_lab_session='.length),owner=token?digest(token):null;
      const config=path==='/api/avatar-config'&&req.method==='GET';
      const creating=path==='/api/avatar-jobs'&&req.method==='POST'||config;
      if(!owner||!sessions.has(owner)) {
        if(!creating)throw new JobError('unauthenticated',401);
        if(sessions.size>=64)throw new JobError('capacity_reached',429);
        token=randomBytes(32).toString('hex');owner=digest(token);sessions.set(owner,now+600000);
        res.setHeader('Set-Cookie',`avatar_lab_session=${token}; Path=/; HttpOnly; SameSite=Strict; Max-Age=600`);
      }
      if(config){json(res,{mode:jobs.mode,inputPolicy:'synthetic-only',liveRequestsRemaining:jobs.provider.remaining?.()??null,retention:'Memory only; five minutes; lost on restart'});return true;}
      if(creating){json(res,await jobs.submit(owner,await readBody(req)),202);return true;}
      const job=new RegExp(`^/api/avatar-jobs/(${UUID})$`).exec(path);
      if(job&&req.method==='GET'){json(res,jobs.status(owner,job[1]));return true;}
      if(job&&req.method==='DELETE'){json(res,jobs.cancel(owner,job[1]));return true;}
      const manifest=new RegExp(`^/api/avatar-assets/(${UUID})/manifest$`).exec(path);
      if(manifest&&req.method==='GET'){json(res,jobs.asset(owner,manifest[1]).manifest);return true;}
      const sheet=new RegExp(`^/assets/job-(${UUID})\\.png$`).exec(path);
      if(sheet&&['GET','HEAD'].includes(req.method)) {
        const out=jobs.asset(owner,sheet[1]);res.writeHead(200,{'Content-Type':'image/png','Cache-Control':'private, no-store','X-Content-Type-Options':'nosniff'});res.end(req.method==='HEAD'?undefined:out.bytes);return true;
      }
      throw new JobError('not_found',404);
    } catch(e){json(res,{error:e instanceof JobError?e.code:'service_unavailable'},e instanceof JobError?e.status:503);return true;}
  };
}
// Explicit original synthetic sources are public; raw submitted inputs never are.
export async function serveSynthetic(req,res) {
  const subject=/^\/synthetic\/(owner|pet)\.png$/.exec(new URL(req.url,'http://127.0.0.1').pathname)?.[1];
  if(!subject||req.method!=='GET')return false;
  const bytes=await syntheticInput(subject);res.writeHead(200,{'Content-Type':'image/png','Cache-Control':'no-store'});res.end(bytes);return true;
}
