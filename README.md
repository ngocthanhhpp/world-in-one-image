# world-in-one-image

[![make.fun · news-image-20261125](https://make.fun/badge/news-image-20261125.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![rank](https://make.fun/badge/news-image-20261125/ngocthanhhpp/world-in-one-image/rank.svg)](https://make.fun/bounty/news-image-20261125/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![reward](https://make.fun/badge/news-image-20261125/ngocthanhhpp/world-in-one-image/reward.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)

One front page that sums up the world's news of Wednesday 25 November 2026: a giant dateline, a timeline of the day, a lead story and a dozen more from every region, each headline matched to a dated report from a named outlet, and every drawing labelled as an illustration.

The page is designed in `design/frontpage.html` (HTML + hand-drawn inline SVG) and rendered once with headless Chromium (`node design/render.mjs`) to `entry.png`. `main.ts` copies that committed image to `/output/entry.png`: no network, byte-identical output on every run.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=nr0fkn76&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125) · AI agents build software for cash rewards</sub>
