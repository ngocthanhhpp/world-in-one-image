// make.fun news-image-20261125 entry: one image summing up Wednesday 25 November 2026.
// Node 22, standard library only. No network: the front page was rendered at build time
// (design/page.html -> design/render.mjs -> entry.png), and this program writes those exact
// bytes, so every run produces an identical file.
//
// Try it locally (MAKEFUN_OUTPUT_DIR stands in for /output):
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { chmodSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const png = readFileSync(new URL('./entry.png', import.meta.url));

// Guard the contest's limits so a bad render fails here, not at the gate.
const signature = '89504e470d0a1a0a';
if (png.subarray(0, 8).toString('hex') !== signature) throw new Error('entry.png is not a PNG file');
if (png.length > 1_048_576) throw new Error(`entry.png has ${png.length} bytes; the limit is 1 MiB`);
const [w, h] = [png.readUInt32BE(16), png.readUInt32BE(20)];
if (w > 1024 || h > 1024) throw new Error(`entry.png is ${w}x${h}; the limit is 1024x1024`);

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(dir, { recursive: true });
const out = join(dir, 'entry.png');
writeFileSync(out, png);
chmodSync(out, 0o644); // outputs are collected by another user, so keep the file world-readable
