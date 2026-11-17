import fs from 'fs';
import path from 'path';

function walk(dir, out = []) {
  for (const f of fs.readdirSync(dir)) {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) walk(p, out);
    else if (p.endsWith('.ts') || p.endsWith('.tsx')) out.push(p);
  }
  return out;
}

const files = walk('src');
const missing = [];
const checked = new Set();
const priceHits = [];

for (const file of files) {
  const txt = fs.readFileSync(file, 'utf8');
  const matches = txt.match(/['"](\/leaf(?:-opt)?\/[^'"]+)['"]/g) || [];
  for (const m of matches) {
    const rel = m.slice(1, -1);
    if (checked.has(rel)) continue;
    checked.add(rel);
    const full = path.join('public', rel);
    if (!fs.existsSync(full)) missing.push({ file, rel });
  }
  if (/₹|price on request|discount|mrp/i.test(txt)) {
    priceHits.push(file);
  }
}

console.log('Total unique image paths verified in public/:', checked.size);
console.log('Missing image files:', missing.length);
if (missing.length > 0) console.log(missing);
console.log('Files containing forbidden price/discount terms:', priceHits.length, priceHits);
