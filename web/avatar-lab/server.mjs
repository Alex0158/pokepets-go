import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const files = ['index.html', 'style.css', 'app.mjs', 'renderer.mjs', 'core.mjs', 'manifest.json', 'assets/sample-puppy-sheet.png', 'assets/owner-preset.svg', 'assets/pet-preset.svg'];
const routes = new Map(files.map(p => [`/${p}`, new URL(p, import.meta.url)]));
routes.set('/', new URL('index.html', import.meta.url));
for (const name of ['three.module.js', 'three.core.js']) routes.set(`/vendor/${name}`, new URL(`../node_modules/three/build/${name}`, import.meta.url));
const types = { html: 'text/html; charset=utf-8', css: 'text/css', mjs: 'text/javascript', js: 'text/javascript', json: 'application/json', png: 'image/png', svg: 'image/svg+xml' };
export const server = createServer(async (req, res) => {
  const path = new URL(req.url, 'http://127.0.0.1').pathname;
  const file = routes.get(path);
  if (!file || !['GET', 'HEAD'].includes(req.method)) { res.writeHead(404); res.end(); return; }
  try {
    const body = await readFile(file);
    res.writeHead(200, { 'Content-Type': types[fileURLToPath(file).split('.').at(-1)] ?? 'application/octet-stream', 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff', 'Content-Security-Policy': "default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; connect-src 'self'; object-src 'none'; base-uri 'none'" });
    res.end(req.method === 'HEAD' ? undefined : body);
  } catch { res.writeHead(404); res.end('Local asset unavailable'); }
});
if (process.argv[1] === fileURLToPath(import.meta.url)) server.listen(Number(process.env.AVATAR_LAB_PORT ?? 4186), '127.0.0.1', () => console.log(`Avatar lab: http://127.0.0.1:${server.address().port}`));
