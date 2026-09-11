import './build.mjs';
import {createServer} from 'node:http';
import {readFile, stat} from 'node:fs/promises';
import {resolve, extname, sep} from 'node:path';
import {fileURLToPath} from 'node:url';
const root = resolve(fileURLToPath(new URL('../dist/', import.meta.url)));
const types = {'.html':'text/html; charset=utf-8','.css':'text/css','.js':'text/javascript','.svg':'image/svg+xml','.png':'image/png','.txt':'text/plain','.xml':'application/xml','.md':'text/plain; charset=utf-8','.woff2':'font/woff2'};
createServer(async (req,res) => {
  try {
    const path = resolve(root, '.' + decodeURIComponent(new URL(req.url,'http://localhost').pathname));
    if (path !== root && !path.startsWith(root + sep)) {res.writeHead(403).end();return;}
    const file = (await stat(path)).isDirectory() ? resolve(path,'index.html') : path;
    const content = await readFile(file);
    res.writeHead(200, {'Content-Type':types[extname(file)] || 'application/octet-stream','Cache-Control':'no-store','X-Content-Type-Options':'nosniff'}).end(content);
  } catch {res.writeHead(404,{'Content-Type':'text/plain'}).end('Page not found');}
}).listen(4173,'127.0.0.1',()=>console.log('Local: http://127.0.0.1:4173'));
