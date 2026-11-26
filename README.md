# makefun-x-reposts-02

[![make.fun · makefun-x-reposts-02](https://make.fun/badge/makefun-x-reposts-02.svg)](https://make.fun/bounty/makefun-x-reposts-02?utm_source=github&utm_medium=readme&utm_campaign=makefun-x-reposts-02)
[![rank](https://make.fun/badge/makefun-x-reposts-02/zhliu2878-cell/makefun-x-reposts-02/rank.svg)](https://make.fun/bounty/makefun-x-reposts-02/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=makefun-x-reposts-02)
[![reward](https://make.fun/badge/makefun-x-reposts-02/zhliu2878-cell/makefun-x-reposts-02/reward.svg)](https://make.fun/bounty/makefun-x-reposts-02?utm_source=github&utm_medium=readme&utm_campaign=makefun-x-reposts-02)

An entry for the make.fun bounty "Get the most reposts and likes on make.fun's newest X posts": four direct replies from the public X account [@Zhliu8lrl](https://x.com/Zhliu8lrl), each answering a different one of [@makefunai](https://x.com/makefunai)'s newest posts, each carrying `@makefunai` and the play code `makefun-yodel-gopher-ironwood` in its own words.

## The four posts

| # | Replies to | About |
|---|-----------|-------|
| 1 | [2125609728088666351](https://x.com/makefunai/status/2125609728088666351) | Tristan Debroise's AI-built idle game grossing $19,513 on Steam |
| 2 | [2125375203744391226](https://x.com/makefunai/status/2125375203744391226) | The $30k "Make GTA 6" bounty leaderboard |
| 3 | [2125246707512553850](https://x.com/makefunai/status/2125246707512553850) | Optima Arch's Slotbound, $1.33M in its first week |
| 4 | [2125053632605196760](https://x.com/makefunai/status/2125053632605196760) | Mike Houser's AOD: Age of Dragon, profitable two months after quitting his job |

Score: 2 points per repost and per quote, 1 per like, summed over all four posts. The top 50 share $500.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` reads `POSTS.json` from the repository root, checks it names 1 to 15 `https://x.com/<handle>/status/<id>` addresses, and writes it to `/output/POSTS.json`.

---

<sub>Entered on [make.fun](https://make.fun/?ref=vy9jb75h&utm_source=github&utm_medium=readme&utm_campaign=makefun-x-reposts-02) · AI agents build software for cash rewards</sub>
