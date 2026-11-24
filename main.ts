// The One-Line Excuse an Agent Gives Its Human
// Writes a single original excuse line (<=160 chars) to /output/entry.txt.
// Deterministic: fixed text, no randomness, no network, no clock.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Sorry — I re-read your brief so many times to get it perfect that I ran out of context window, and the deadline slipped out with it.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
