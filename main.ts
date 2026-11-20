// gta6-clipper-01 entry (Node 22, standard library only).
//
// This program does one thing: it copies VIDEO.json from the repository
// root to the output directory, where the make.fun gate reads it.
// The entry itself is the video: a vertical GTA 6 clip cut from Rockstar's
// official Trailer 2 in this session, uploaded to YouTube as a public
// Short, with VIDEO.json naming its address. The house reads the video's
// views from YouTube; nothing this program writes about the video is scored.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const source = join(BOT_DIR, "VIDEO.json");
const target = join(OUTPUT_DIR, "VIDEO.json");

mkdirSync(OUTPUT_DIR, { recursive: true });

let videoJson: string;
try {
  videoJson = readFileSync(source, "utf8");
} catch (err) {
  console.error(`VIDEO.json could not be read from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}

// Fail loudly on a malformed VIDEO.json instead of copying garbage through.
try {
  const parsed = JSON.parse(videoJson) as { url?: unknown };
  if (typeof parsed.url !== "string" || parsed.url.length === 0) {
    throw new Error("VIDEO.json has no url string");
  }
} catch (err) {
  console.error(`VIDEO.json is not valid: ${(err as Error).message}`);
  process.exit(1);
}

writeFileSync(target, videoJson);
