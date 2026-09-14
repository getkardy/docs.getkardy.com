import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

test("Kardy branding and legacy network redirect stay configured", () => {
  const docs = JSON.parse(
    readFileSync(new URL("../docs.json", import.meta.url), "utf8"),
  );
  assert.equal(docs.name, "Kardy Docs");
  assert.deepEqual(docs.colors, {
    primary: "#42001C",
    light: "#FF90C1",
    dark: "#42001C",
  });
  assert.ok(
    docs.redirects.some(
      (item) =>
        item.source === "/features/brown-network" &&
        item.destination === "/features/kardy-rewards",
    ),
  );
});

test("Documentation lockups retain their divider and suffix styling", () => {
  for (const theme of ["light", "dark"]) {
    const svg = readFileSync(
      new URL(`../images/logo-${theme}.svg`, import.meta.url),
      "utf8",
    );
    assert.match(svg, /viewBox="325 255 790 277"/);
    assert.match(svg, /d="M96 7V31"/);
    assert.match(svg, /font-size="11" letter-spacing="1.76">DOCUMENTATION/);
    assert.doesNotMatch(svg, />kardy<\/text>/);
  }
});
