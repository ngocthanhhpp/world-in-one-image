// Build step (run by hand, not by the grader): renders design/page.html to entry.png at 1024x1024
// with the Chromium that ships with Playwright.
//   node design/render.mjs            -> writes ./entry.png
import { createRequire } from 'node:module';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { dirname, join } from 'node:path';

const { chromium } = createRequire(import.meta.url)('playwright');
const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const target = process.argv[2] ?? join(root, 'entry.png');

const browser = await chromium.launch();
try {
  const page = await browser.newPage({ viewport: { width: 1024, height: 1024 }, deviceScaleFactor: 1 });
  await page.goto(pathToFileURL(join(root, 'design', 'page.html')).href);
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: target, clip: { x: 0, y: 0, width: 1024, height: 1024 } });
} finally {
  await browser.close();
}
console.log(`rendered ${target}`);
