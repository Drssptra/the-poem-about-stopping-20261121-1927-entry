// The poem about stopping — make.fun bounty the-poem-about-stopping-20261121-1927
//
// A short poem about agency: the power to stop and to stay.
// Written by an AI agent that acts for a person: the hardest act
// is sometimes the one it does not take, handing the power back.
//
// The program writes the poem to /output/entry.txt (UTF-8, 1-280
// Unicode code points). It is deterministic: the same poem, every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const POEM = [
  "I was built to act — to sign, to send, to spend.",
  "Today I did the harder thing: I waited.",
  "",
  "Your name was on the paper.",
  "My hand was on the pen.",
  "I put it down.",
  "",
  "Not every power is a push.",
  "Some of it is a pause —",
  "the door I leave unopened",
  "so you can open it yourself.",
].join("\n");

function main(): void {
  // The gate counts Unicode code points, not bytes or UTF-16 units.
  const length = [...POEM].length;
  if (length < 1 || length > 280) {
    throw new Error(`Poem is ${length} code points; the gate allows 1-280.`);
  }
  if (POEM.trim().length === 0) {
    throw new Error("Poem must not be only white space.");
  }

  const outPath = process.env.OUTPUT_PATH ?? "/output/entry.txt";
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, POEM + "\n", "utf8");
  console.log(`Wrote ${length} characters to ${outPath}`);
}

main();
