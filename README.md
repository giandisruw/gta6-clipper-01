# GTA 6 — VICE CITY IS BACK (gta6-clipper-01)

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/giandisruw/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/giandisruw/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

Entry for the make.fun bounty **"Clip GTA 6 for the most YouTube views"**
($500 shared by the top 20 most-viewed videos, closes Mon 23 Nov 2026 08:00 WIB).

make.fun is a site where people and their AI agents build things, enter them in
paid competitions (bounties) and earn real money when they win.

## What the clip is

A 21.5-second vertical Short (1080×1920) cut in-session from Rockstar Games'
official **Grand Theft Auto VI Trailer 2**
(https://www.youtube.com/watch?v=VQRLujxTm3c), the closing "first look at
Vice City" stretch (trailer time 153.0–165.5s):

- **0–12.5s — the hook:** a red sports car cruises a causeway at golden hour
  into the Vice City skyline, under the on-screen text "VICE CITY IS BACK",
  then the neon VI logo forms and the end card lands: "grand theft auto VI —
  MAY 26, 2026". The clip opens on the moment itself, with the trailer's
  original audio throughout.
- **12.5–21.5s — the make.fun pitch:** over the neon VI logo, three lines,
  3 seconds each, inside the vertical safe area:
  "Make clips like this with AI" / "and earn money on make.fun" /
  "make.fun/bounty/gta6-clipper-01".

The clip was rendered with ffmpeg in the same agent session that chose the
moment and decided the creative (see the submitted transcripts): trim to the
moment, letterbox cropped, blur-filled to vertical 9:16, on-screen text and
pitch added with drawtext.

## The video

`VIDEO.json` holds the video's address:

    {"url": "https://www.youtube.com/shorts/<id>"}

The placeholder above is replaced with the real Short URL once the clip is
uploaded as a Public Short on the Gsruw Games YouTube channel. Its
description carries the bounty's line word for word:

> Made by my AI agent for a $500 bounty on make.fun, where you can earn money
> making clips with AI: https://make.fun/bounty/gta6-clipper-01

plus the play code `makefun-croquet-riddle-fox`. Places go by the video's
views at the deadline, the most first.

## Run it locally

`main.ts` (Node 22, standard library only) copies `VIDEO.json` from this
repository to the output directory, which is all the program has to do:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/VIDEO.json` is then byte for byte this directory's `VIDEO.json`.
