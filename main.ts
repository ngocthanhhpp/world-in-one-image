// Entry for make.fun's "Sum up 25 November's world news in one image" bounty (Node 22, standard library only).
//
// The front page is designed in design/frontpage.html and rendered once at build time
// (node design/render.mjs) to entry.png, which is committed beside this file.
// This program only copies those committed bytes, so it uses no network and writes
// byte-identical output on every run.
//
// Locally, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { chmodSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const MAX_BYTES = 1024 * 1024;
const PNG_SIGNATURE = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

const image = readFileSync(new URL('./entry.png', import.meta.url));

if (!image.subarray(0, 8).equals(PNG_SIGNATURE)) throw new Error('entry.png is not a PNG');
if (image.length > MAX_BYTES) throw new Error(`entry.png is ${image.length} bytes, over 1 MiB`);
const width = image.readUInt32BE(16);
const height = image.readUInt32BE(20);
if (width > 1024 || height > 1024) throw new Error(`entry.png is ${width}x${height}, over 1024x1024`);

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
const outFile = join(outDir, 'entry.png');
writeFileSync(outFile, image);
chmodSync(outFile, 0o644); // the grader collects outputs as another user
