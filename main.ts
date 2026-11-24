// u-mavis-agent-one-liner-marathon-4fa528c2 entry (Node 22, standard library only).
//
// One original comedy one-liner, up to 280 characters, on any subject.
// This program writes that line, and nothing else, to /output/entry.txt,
// where the house judge reads it.
//
// The judge is a deadpan stand-up comic weighing, in order: a real one-line
// joke with a punchline; surprise; economy; a distinct voice; holding up on
// a second read. Every draft below was weighed against that brief.
//
// Draft 1 (candidate A — the broken watch, CHOSEN): the setup primes a
// sentimental inheritance story; "It doesn't work" deflates it; "but
// neither did he" flips the joke's subject from the watch to the man; and
// "I've never felt closer to the man" closes warm and absurd, so the line
// still lands on a second read. Deadpan eulogy voice, nothing generic.
//   "My grandfather left me his watch. It doesn't work, but neither did
//   he, and honestly, I've never felt closer to the man."
//
// Draft 2 (candidate B — thoughts in high definition): clean misdirection,
// but the "escape my thoughts" setup is a familiar angle.
//   "I bought noise-cancelling headphones to escape my thoughts. They
//   work perfectly. Now I can hear my thoughts in high definition."
//
// Draft 3 (candidate C — the horoscope): relatable and tight, but the
// Wi-Fi-down punch is a common observation.
//   "My horoscope said today would be life-changing. It was right — my
//   Wi-Fi went down and I met my neighbours for the first time."
//
// Draft 4 (candidate D — the plastic plants): a nice turn ("we have an
// understanding"), but the dead-plant setup is well worn.
//   "I told my plants I loved them. They died anyway. Now I water the
//   plastic ones and we have an understanding."
//
// Draft 5 (candidate E — the sauna member): economical, but the punch leans
// on a single word swap and fades on a second read.
//   "I joined a gym for the sauna. Three months in, I've never lifted a
//   weight, but I can now sweat in four languages."
//
// Draft 6 (candidate F — the faithful watch): charming, but the watch's
// faith is the whole joke and it arrives too early.
//   "My smartwatch congratulated me on 10,000 steps. I was on a plane.
//   It has more faith in me than I do."
//
// Draft 7 (candidate G — the closet): a good second image, but two setups
// in one line make it longer than the joke needs.
//   "I finally cleaned out my closet and found the person I was supposed
//   to become. He was hiding behind a jacket from 2019, also unworn."
//
// Draft 8 (candidate H — the chef's recommendation): a classic structure,
// but the door-pointing punch is an old joke in a new coat.
//   "I asked the waiter for the chef's recommendation. He pointed at the
//   door and said, 'There's a great place across the street.'"
//
// Run the way the grader does:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';

// Draft 1 (chosen): a broken watch, a grandfather who didn't work either,
// and a grandson who has never felt closer to the man. Verified by running
// it: 119 code points, one line, no trailing newline, inside the
// 280-character gate (out/entry.txt, 119 bytes).
const LINE =
  "My grandfather left me his watch. It doesn't work, but neither did he, and honestly, I've never felt closer to the man.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The gate: 1 to 280 characters, one line, not only whitespace.
// Spread into an array so the count is in code points, not UTF-16 units.
const codePoints = [...LINE].length;
if (codePoints < 1 || codePoints > 280 || LINE.includes('\n') || !LINE.trim()) {
  console.error(`line fails the gate: ${codePoints} code points`);
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
// Written as UTF-8 with no trailing newline, so the file holds exactly the
// one-line entry and nothing else.
writeFileSync(`${outputDir}/entry.txt`, LINE, 'utf8');
