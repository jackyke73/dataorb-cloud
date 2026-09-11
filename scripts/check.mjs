// Static consistency checks. No dependencies; runs before every build.
// These guard couplings that are invisible at runtime: a drifted string here
// fails silently in the browser, with no console error and no visual cue.
import { readFile, readdir, stat } from 'node:fs/promises';

const root = new URL('../', import.meta.url);
const read = path => readFile(new URL(path, root), 'utf8');
const decode = s => s.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
  .replace(/&quot;/g, '"').replace(/&#39;/g, "'");

const [html, js, css] = await Promise.all([
  read('src/index.html'), read('src/app.js'), read('src/styles.css'),
]);
const errors = [];
const fail = msg => errors.push(msg);

// 1. Project type: every data-project target must be a real option that actually
//    reveals the conditional fields. A drifted label silently blanks the select.
const projectSelect = html.match(/<select id="project"[\s\S]*?<\/select>/)?.[0];
if (!projectSelect) fail('no #project select found in src/index.html');
else {
  const options = [...projectSelect.matchAll(/<option([^>]*)>([\s\S]*?)<\/option>/g)].map(m => ({
    label: decode(m[2]).trim(),
    value: /value="([^"]*)"/.exec(m[1])?.[1] ?? decode(m[2]).trim(),
    extended: /\bdata-extended\b/.test(m[1]),
  }));
  const extended = options.filter(o => o.extended);
  if (!extended.length) fail('no <option data-extended> — the conditional fields can never reveal');

  for (const m of html.matchAll(/data-project="([^"]*)"/g)) {
    const target = decode(m[1]);
    const opt = options.find(o => o.value === target);
    if (!opt) fail(`data-project="${target}" matches no <option> in #project`);
    else if (!opt.extended) fail(`data-project="${target}" is not data-extended, so the CTA reveals nothing`);
  }

  // The reveal is driven by data-extended, so app.js must not reintroduce a
  // hard-coded list of label strings.
  if (/EXTENDED_PROJECTS/.test(js)) fail('app.js reintroduced EXTENDED_PROJECTS; the markup owns this');
}

// 2. Draft labels: a missing key renders "undefined: value" to the customer.
//    A stale key means a field was renamed or removed.
const formBlock = html.match(/<form id="quote-form"[\s\S]*?<\/form>/)?.[0] ?? '';
const names = new Set([...formBlock.matchAll(/<(?:input|select|textarea)[^>]*\bname="([^"]+)"/g)].map(m => m[1]));
const labelsSrc = js.match(/const labels=\{([\s\S]*?)\};/)?.[1];
if (!labelsSrc) fail('could not locate the labels map in src/app.js');
else {
  const keys = new Set([...labelsSrc.matchAll(/(?:^|,)\s*([A-Za-z_$][\w$]*)\s*:/g)].map(m => m[1]));
  for (const n of names) if (!keys.has(n)) fail(`form field "${n}" has no entry in the labels map`);
  for (const k of keys) if (!names.has(k)) fail(`labels map has stale key "${k}" with no matching form field`);
}

// 3. In-page anchors: a dangling href="#x" is completely silent.
const ids = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]));
for (const m of html.matchAll(/href="#([^"]+)"/g)) {
  if (!ids.has(m[1])) fail(`href="#${m[1]}" has no matching id`);
}

// 4. The mobile drawer breakpoint lives in two files and must stay in step, or
//    an open menu fails to close on resize.
const cssBp = Number(/@media \(max-width: (\d+)px\) \{\s*\n\s*\.menu-toggle \{ display: inline-flex/.exec(css)?.[1]);
const jsBp = Number(/matchMedia\('\(min-width: (\d+)px\)'\)/.exec(js)?.[1]);
if (!cssBp) fail('could not find the .menu-toggle drawer breakpoint in styles.css');
else if (!jsBp) fail('could not find the matchMedia breakpoint in app.js');
else if (jsBp !== cssBp + 1) fail(`drawer breakpoint mismatch: styles.css max-width ${cssBp}px vs app.js min-width ${jsBp}px (expected ${cssBp + 1}px)`);

// 5. Asset budget. The logo PNG, favicon and font were once 2.7 MB combined — a
//    1254px bitmap painted at 32px, an SVG wrapping a base64 copy of it, and the
//    full Inter variable font. Keep them from creeping back.
const BUDGET_PER_FILE = 150 * 1024;
const BUDGET_TOTAL = 220 * 1024;
const assetDirs = ['src/assets', 'src/fonts'];
let assetTotal = 0;
for (const dir of assetDirs) {
  let entries = [];
  try { entries = await readdir(new URL(dir + '/', root)); } catch { continue; }
  for (const name of entries) {
    const { size } = await stat(new URL(`${dir}/${name}`, root));
    assetTotal += size;
    if (size > BUDGET_PER_FILE) fail(`${dir}/${name} is ${(size / 1024).toFixed(0)} KB, over the ${BUDGET_PER_FILE / 1024} KB per-file budget`);
  }
}
try {
  const { size } = await stat(new URL('src/favicon.png', root));
  assetTotal += size;
  if (size > BUDGET_PER_FILE) fail(`src/favicon.png is ${(size / 1024).toFixed(0)} KB, over budget`);
} catch { fail('src/favicon.png is missing'); }
if (assetTotal > BUDGET_TOTAL) fail(`shipped assets total ${(assetTotal / 1024).toFixed(0)} KB, over the ${BUDGET_TOTAL / 1024} KB budget`);

if (errors.length) {
  console.error('Consistency check failed:');
  for (const e of errors) console.error(`  - ${e}`);
  process.exit(1);
}
console.log('Consistency checks passed.');
