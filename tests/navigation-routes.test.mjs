import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import test from "node:test";

const config = JSON.parse(
  readFileSync(new URL("../docs.json", import.meta.url), "utf8"),
);
const pages = (node) =>
  typeof node === "string"
    ? [node]
    : Array.isArray(node)
      ? node.flatMap(pages)
      : pages(node.pages || node.groups || []);

test("section URLs match their navigation and resolve to real pages", () => {
  const prefixes = {
    Features: "features/",
    Guides: "guides/",
    Customers: "customer-journey/",
    MCP: "mcp/",
    Technical: "technical/",
  };
  const seen = new Set();
  for (const tab of config.navigation.tabs) {
    for (const route of pages(tab)) {
      if (prefixes[tab.tab])
        assert.ok(route.startsWith(prefixes[tab.tab]), `${tab.tab}: ${route}`);
      assert.ok(existsSync(new URL(`../${route}.mdx`, import.meta.url)), route);
      assert.ok(!seen.has(route), `Duplicate navigation page: ${route}`);
      seen.add(route);
    }
  }
});

test("redirects resolve directly and preserve all relocated pages", () => {
  const redirects = new Map(
    config.redirects.map((r) => [r.source, r.destination]),
  );
  assert.equal(redirects.size, config.redirects.length);
  for (const [from, to] of redirects) {
    assert.ok(!redirects.has(to), `Redirect chain from ${from}`);
    if (to.startsWith("/"))
      assert.ok(existsSync(new URL(`..${to}.mdx`, import.meta.url)), to);
  }
  for (const source of [
    "/merchants/setup",
    "/merchants/scanning",
    "/merchants/billing",
    "/accounts/overview",
    "/features/merchant-mcp",
    "/technical/merchant-mcp",
    "/technical/mcp-reference",
    "/technical/mcp-errors",
  ])
    assert.ok(redirects.has(source), source);
});
