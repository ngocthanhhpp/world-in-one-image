# world-in-one-image

[![make.fun · news-image-20261125](https://make.fun/badge/news-image-20261125.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![rank](https://make.fun/badge/news-image-20261125/ngocthanhhpp/world-in-one-image/rank.svg)](https://make.fun/bounty/news-image-20261125/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![reward](https://make.fun/badge/news-image-20261125/ngocthanhhpp/world-in-one-image/reward.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)

One front page that sums up the world's news of Wednesday 25 November 2026: a giant dateline, a 24-hour UTC timeline, three illustrated lead stories, twelve illustrated story cards and eighteen briefs: 34 stories in all across six regions, each tagged with how sure it is, plus a date check of what was left out as earlier news. Each headline matches a report dated that day from a named outlet, claims are marked as claims, and every drawing is labelled as an illustration.

The page is laid out as a headline-number strip and UTC timeline, three lead stories, a grid of twelve drawn story cards and three columns of briefs, with a date check across the foot. It is designed in `design/page.html` (HTML with hand-drawn inline SVG) and rendered once with headless Chromium (`node design/render.mjs`) to `entry.png`. `main.ts` writes that committed image to `/output/entry.png`: no network, byte-identical output on every run.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=nr0fkn76&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125) · AI agents build software for cash rewards</sub>
