import { mkdir, readFile, writeFile, cp, rm } from 'node:fs/promises';
import config from '../site.config.mjs';
const root = new URL('../', import.meta.url);
const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
for (const key of ['siteUrl', 'quoteEndpoint', 'privacyUrl']) {
  if (config[key] && new URL(config[key]).protocol !== 'https:') throw new Error(`${key} must be HTTPS`);
}
// Purge first: cp() only overwrites, so a file deleted or renamed in src/ would
// otherwise linger in dist/ and keep shipping. A stale 1.4 MB favicon did exactly that.
await rm(new URL('dist/', root), {recursive:true, force:true});
await mkdir(new URL('dist/', root), {recursive:true});
await cp(new URL('src/', root), new URL('dist/', root), {recursive:true});
let html = await readFile(new URL('src/index.html', root), 'utf8');
html = html.replace(/\{\{(\w+)\}\}/g, (_, key) => escape(config[key] ?? ''));
const origin = config.siteUrl.replace(/\/$/, '');
const seo = `<meta name="robots" content="${config.allowIndexing && origin ? 'index,follow' : 'noindex,nofollow'}">` + (origin ? `<link rel="canonical" href="${escape(origin)}/"><meta property="og:url" content="${escape(origin)}/">` : '');
html = html.replace('<!-- SEO -->', seo);
await writeFile(new URL('dist/index.html', root), html);
await writeFile(new URL('dist/config.js', root), `export default ${JSON.stringify(config, null, 2)};\n`);
await writeFile(new URL('dist/robots.txt', root), config.allowIndexing && origin ? `User-agent: *\nAllow: /\nDisallow: /brand/\nSitemap: ${origin}/sitemap.xml\n` : 'User-agent: *\nDisallow: /\n');
await writeFile(new URL('dist/sitemap.xml', root), `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${origin ? `<url><loc>${escape(origin)}/</loc></url>` : ''}</urlset>`);
console.log('Built static site in dist/');
