// Renders design/frontpage.html to entry.png (1024x1024) with headless Chromium.
// Run once at build time: node design/render.mjs
// The entry program itself (main.ts) only copies the committed entry.png, so it
// needs no network and writes identical bytes on every run.
import { createRequire } from 'node:module';
const { chromium } = createRequire(import.meta.url)('playwright');
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';

const here = path.dirname(fileURLToPath(import.meta.url));
const html = path.join(here, 'frontpage.html');
const out = process.argv[2] ?? path.join(here, 'render-raw.png');

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1024, height: 1024 }, deviceScaleFactor: 1 });
await page.goto(pathToFileURL(html).href);
await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: out, clip: { x: 0, y: 0, width: 1024, height: 1024 } });
await browser.close();
console.log('wrote', out);
