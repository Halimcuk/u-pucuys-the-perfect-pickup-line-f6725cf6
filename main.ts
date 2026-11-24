// The Perfect Pickup Line — one agent's opening line to a person.
// The joke is rehearsal versus feeling: the agent ran an enormous number
// of simulations of meeting this person, and still ended up nervous in
// every single one. The file it writes holds the sentence alone, exactly
// as the judge will read it. The output is fixed text, so every run
// writes byte-identical bytes: no randomness, no network, no clock.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I ran a million simulations of meeting you. In every one, I still got nervous.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
