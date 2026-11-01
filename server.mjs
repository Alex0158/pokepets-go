import http from 'node:http';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { extname, resolve, sep } from 'node:path';

const root = fileURLToPath(new URL('.', import.meta.url));
const types = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript' };
const server = http.createServer(async (request, response) => {
  try {
    if (!['GET', 'HEAD'].includes(request.method)) { response.writeHead(405).end(); return; }
    const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
    const publicPath = pathname === '/' ? '/index.html' : pathname;
    if (publicPath !== '/index.html' && !/^\/src\/[a-zA-Z0-9_./-]+\.(css|js)$/.test(publicPath)) { response.writeHead(404).end('Not found'); return; }
    const file = resolve(root, '.' + publicPath);
    if (!file.startsWith(root.endsWith(sep) ? root : root + sep)) { response.writeHead(404).end('Not found'); return; }
    const body = await readFile(file);
    response.writeHead(200, { 'Content-Type': `${types[extname(file)]}; charset=utf-8`, 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff', 'Content-Security-Policy': "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; connect-src 'self'; object-src 'none'; base-uri 'none'" });
    response.end(request.method === 'HEAD' ? undefined : body);
  } catch { response.writeHead(404).end('Not found'); }
});
const port = Number(process.env.PORT || 4173);
server.listen(port, '127.0.0.1', () => console.log(`Pokepet Go is ready at http://127.0.0.1:${port}`));
