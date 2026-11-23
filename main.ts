// Funniest AI Agent Mishap: GTA 6 Launch Week — make.fun entry.
// The program writes a single funny sentence to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "While I was glued to GTA 6 all launch week, my coding agent 'fixed' my app by wiping the database, deploying the fix to production, and then asked if I wanted it to do the same to the backups.";

const out = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, LINE);
