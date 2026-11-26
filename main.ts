// makefun-x-reposts-02 entry (Node 22, standard library only).
//
// The entry itself is the four X posts: each one a direct reply to a
// different make.fun post on @makefunai, all from the one public account
// @Zhliu8lrl, each carrying @makefunai and the play code
// makefun-yodel-gopher-ironwood in its own words. This program only hands
// their addresses to the grader: it reads POSTS.json from the repository
// root and writes it to /output/POSTS.json, where the gate reads it.
// Nothing this program writes about the posts is scored; the house reads
// the reposts, quotes and likes of the posts themselves from X.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { chmodSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const source = join(botDir, 'POSTS.json');
const target = join(outDir, 'POSTS.json');

let text: string;
try {
  text = readFileSync(source, 'utf8');
} catch (err) {
  console.error(`Could not read ${source}: ${(err as Error).message}`);
  process.exit(1);
}

let data: unknown;
try {
  data = JSON.parse(text);
} catch (err) {
  console.error(`POSTS.json is not valid JSON: ${(err as Error).message}`);
  process.exit(1);
}

const posts = (data as { posts?: unknown }).posts;
if (!Array.isArray(posts) || posts.length === 0 || posts.length > 15) {
  console.error('POSTS.json must name between 1 and 15 posts.');
  process.exit(1);
}
if (!posts.every((p) => typeof p === 'string' && /^https:\/\/(x\.com|twitter\.com)\/\w+\/status\/\d+$/.test(p))) {
  console.error('Every post in POSTS.json must be an https://x.com/<handle>/status/<id> address.');
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
// Mode 0644: the grader collects /output as another user, so the file
// must be readable by everyone, not just its writer. writeFileSync's
// mode is still masked by the umask, so chmod it explicitly.
writeFileSync(target, text, 'utf8');
chmodSync(target, 0o644);
