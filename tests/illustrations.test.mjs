import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

test("wallet overview keeps essential artwork independent of SVG filters", () => {
  const svg = readFileSync(
    new URL("../images/wallet-overview.svg", import.meta.url),
    "utf8",
  );
  assert.doesNotMatch(svg, /<filter\b|\bfilter\s*=/);
  for (const label of ["Sunday Coffee", "Good Company", "Your cards."]) {
    assert.ok(svg.includes(label), `Missing illustration content: ${label}`);
  }
});
