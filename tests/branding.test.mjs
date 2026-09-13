import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

test("Kardy branding and legacy network redirect stay configured", () => {
  const docs = JSON.parse(
    readFileSync(new URL("../docs.json", import.meta.url), "utf8"),
  );
  assert.equal(docs.name, "Kardy Docs");
  assert.ok(
    docs.redirects.some(
      (item) =>
        item.source === "/features/brown-network" &&
        item.destination === "/features/kardy-network",
    ),
  );
});
