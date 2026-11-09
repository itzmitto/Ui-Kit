import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const page = readFileSync(resolve("src/app/ui-lab/page.tsx"), "utf8");
const data = page.match(/const experiments: Feature\[\] = (\[[\s\S]*?\]);/);
const experiments = data ? JSON.parse(data[1]) : [];

test("catalog lists all 39 unique route slugs", () => {
  assert.equal(experiments.length, 39);
  assert.equal(new Set(experiments.map((item) => item.slug)).size, 39);
});

test("catalog has filtering, searching and working route links", () => {
  assert.match(page, /useMemo/);
  assert.match(page, /setCategory/);
  assert.match(page, /setSearch/);
  assert.match(page, /href=\{`\/ui-lab\/\$\{item.slug\}`\}/);
});
