// Reports unverified claims and missing sources across site content.
// Warns only — the human decides what blocks publishing (brief §4.6).
import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const ROOTS = ['src/content', 'src/data'];
const PATTERNS = [
  { name: '[VERIFY] badges (<Verify> / verify flags)', re: /<Verify[\s>]|"verify":\s*true/g },
  { name: 'SOURCE-NEEDED placeholders', re: /SOURCE-NEEDED/g },
  { name: 'TODO: human prose markers', re: /TODO: human prose/g },
];

const walk = (dir) =>
  readdirSync(dir).flatMap((name) => {
    const p = join(dir, name);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });

const files = ROOTS.filter(existsSync).flatMap(walk);
if (files.length === 0) {
  console.log('verify-check: no content files found yet.');
  process.exit(0);
}

let total = 0;
const perFile = new Map();
for (const file of files) {
  const text = readFileSync(file, 'utf8');
  for (const { name, re } of PATTERNS) {
    const count = (text.match(re) ?? []).length;
    if (count > 0) {
      total += count;
      const list = perFile.get(file) ?? [];
      list.push(`${count}× ${name}`);
      perFile.set(file, list);
    }
  }
}

console.log('── verify-check ────────────────────────────────');
for (const [file, hits] of perFile) {
  console.log(`  ${file}`);
  for (const h of hits) console.log(`    ${h}`);
}
console.log(`  TOTAL: ${total} unresolved item(s) across ${perFile.size} file(s)`);
if (total > 0) {
  console.log('  ⚠ resolve each against a primary source before publishing.');
}
process.exit(0);
