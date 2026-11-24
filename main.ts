// laugh-lab — One-Liner Laugh Lab entry.
// Writes one short funny line (1-200 chars) to entry.txt.
// Deterministic: no network, no clock, no randomness.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "It identified as a dust bunny. I don't make the rules; I just follow the suction.";

const len = [...ENTRY].length;
if (len < 1 || len > 200) {
  throw new Error(`entry must be 1-200 characters, got ${len}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`wrote entry.txt (${len} chars)`);
