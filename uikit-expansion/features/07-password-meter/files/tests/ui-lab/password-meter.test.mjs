import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const page = readFileSync(resolve("src/app/ui-lab/password-meter/page.tsx"), "utf8");

// Extract a JSON-formatted TypeScript string so we can validate the actual
// HTML fragment copied by the component, not a hand-maintained test fixture.
const match = page.match(/^const snippet = (.+);$/m);
const markup = match ? JSON.parse(match[1]) : "";

test("Password Strength: page exports a functional React route", () => {
  assert.match(page, /export default function Page/);
  assert.match(page, /useState/);
  assert.match(page, /onClick|onChange|onFocus|onMouseEnter/);
  assert.match(page, /navigator\.clipboard\.writeText\(snippet\)/);
});

test("Password Strength: copyable snippet contains semantic HTML and Tailwind styling", () => {
  assert.ok(markup.startsWith("<"), "snippet must begin with HTML markup");
  assert.match(markup, /class="[^"]+"/);
  assert.ok(markup.length > 80, "snippet must be a real example");
  assert.doesNotMatch(markup, /<script|javascript:/i, "copied HTML must not ship scripts");
});

test("Password Strength: page links to kit system without modifying it", () => {
  assert.match(page, /href="\/starter-kits"/);
  assert.match(page, /aria-label="Interactive component preview"/);
});
