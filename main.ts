// gta6-meme-x-01 entry — make.fun "Post a GTA 6 meme on X".
// The entry itself is the X post: a GTA 6 meme whose picture shows the
// make.fun ghost driving a pink convertible through Vice City with an
// alligator passenger, captioned "WAITED 13 YEARS FOR GTA 6 /
// MY AGENT GOT PAID FIRST". The post is read by the house straight
// from X, so this program does nothing about the post at all.
// Its only job is to hand POST.json over to the grader: copy the
// repository's POST.json (which names the post's X address) into
// the output directory. Node 22, standard library only, no network,
// no clock, no files outside the repository — the two grader runs
// therefore write the same bytes every time.
//
// Run it locally the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });

try {
  // Fail loudly on a placeholder or malformed POST.json instead of
  // handing the grader a file it can only refuse: the url must be a
  // real X post address, not the starter's <handle>/<id> placeholder.
  const raw = readFileSync(join(BOT_DIR, 'POST.json'), 'utf8');
  const parsed: unknown = JSON.parse(raw);
  if (
    typeof parsed !== 'object' ||
    parsed === null ||
    typeof (parsed as { url?: unknown }).url !== 'string' ||
    !/^https:\/\/(www\.|mobile\.)?(x\.com|twitter\.com)\//.test((parsed as { url: string }).url) ||
    (parsed as { url: string }).url.includes('<handle>')
  ) {
    console.error('POST.json does not name a real X post yet — replace the placeholder url first.');
    process.exit(1);
  }
  copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
