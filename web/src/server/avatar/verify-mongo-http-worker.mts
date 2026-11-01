import { createServer } from 'node:http';
import { handleAvatarRequest } from './runtime.ts';
import { handleLocalRequest } from '../db/local-runtime.ts';
// QA bridge for unbundled handlers only. The parent supplies an isolated local DB.
const server=createServer(async(req,res)=>{
  const parts:Buffer[]=[];let size=0;
  try {
    for await(const chunk of req){const b=Buffer.from(chunk);size+=b.length;if(size>4300000){res.writeHead(413);res.end();return;}parts.push(b);}
    const headers=new Headers();for(const [k,v]of Object.entries(req.headers))if(v!==undefined)headers.set(k,Array.isArray(v)?v.join(','):v);
    const request=new Request(`http://127.0.0.1:${(server.address() as any).port}${req.url}`,{method:req.method,headers,...(parts.length?{body:Buffer.concat(parts)}:{})});
    const result=await(req.url?.startsWith('/api/avatars/')?handleAvatarRequest(request):handleLocalRequest(request));
    res.writeHead(result.status,Object.fromEntries(result.headers));res.end(Buffer.from(await result.arrayBuffer()));
  }catch{res.writeHead(503,{'Content-Type':'application/json'});res.end('{"error":"qa_bridge_unavailable"}');}
  finally{for(const p of parts)p.fill(0);}
});
server.listen(0,'127.0.0.1',()=>process.send?.({port:(server.address() as any).port}));
process.once('SIGTERM',()=>server.close(()=>process.exit(0)));
