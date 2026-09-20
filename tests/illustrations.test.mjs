import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

test("referral docs use the current bento in both themes and screen sizes", () => {
  const page = readFileSync(
    new URL("../features/referrals.mdx", import.meta.url),
    "utf8",
  );
  assert.doesNotMatch(page, /referrals-landing-/);
  for (const size of ["desktop", "mobile"]) {
    for (const theme of ["light", "dark"]) {
      const name = `referrals-bento-${size}-${theme}.png`;
      assert.ok(page.includes(name));
      assert.ok(
        readFileSync(new URL(`../images/features/${name}`, import.meta.url))
          .length > 1000,
      );
    }
  }
});

test("desktop install reuses glass chrome with a square icon and theme-aware stage", () => {
  const jsx = readFileSync(
    new URL("../snippets/desktop-install.jsx", import.meta.url),
    "utf8",
  );
  const css = readFileSync(
    new URL("../feature-illustrations.css", import.meta.url),
    "utf8",
  );
  assert.match(jsx, /className="bf-safari"/);
  assert.match(jsx, /bf-safari-address/);
  assert.match(jsx, /Illustrative browser UI/);
  assert.match(jsx, /Chrome or Edge/);
  assert.match(css, /\.desktop-install-icon\s*\{[^}]*aspect-ratio: 1/);
  assert.match(css, /\.dark \.kardy-desktop-install/);
  assert.match(css, /@container \(max-width: 420px\)/);
});

test("wallet overview keeps essential artwork independent of SVG filters", () => {
  const svg = readFileSync(
    new URL("../images/wallet-overview.svg", import.meta.url),
    "utf8",
  );
  assert.doesNotMatch(svg, /<filter\b|\bfilter\s*=/);
  for (const label of [
    "Sunday Coffee",
    "Good Company",
    "Your wallet",
    "7 / 10 stamps",
  ]) {
    assert.ok(svg.includes(label), `Missing illustration content: ${label}`);
  }
  assert.doesNotMatch(
    svg,
    /Separate rewards\. Separate progress\.|Illustrative memberships/,
  );
  assert.ok(svg.includes("Apple Wallet &amp; Google Wallet"));
});
