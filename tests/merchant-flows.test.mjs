import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { transform } from "esbuild";

const source = readFileSync(
  new URL("../snippets/merchant-flow.jsx", import.meta.url),
  "utf8",
);
const data = source.slice(
  source.indexOf("const merchantFlows ="),
  source.indexOf("const flow = merchantFlows[type]"),
);
const compiled = await transform(`export ${data.trim()}`, {
  loader: "jsx",
  format: "esm",
});
const { merchantFlows } = await import(
  `data:text/javascript;base64,${Buffer.from(compiled.code).toString("base64")}`
);

test("every lifecycle has valid lanes, readable steps and explicit guardrails", () => {
  assert.deepEqual(Object.keys(merchantFlows), [
    "mcp-read",
    "mcp-connect",
    "billing",
    "outlets",
    "counter",
    "notifications",
  ]);
  for (const flow of Object.values(merchantFlows)) {
    assert.equal(flow.lanes.length, 3);
    for (const scenario of flow.scenarios) {
      assert.ok(scenario.note.length > 30);
      assert.ok(scenario.steps.length >= 4);
      for (const [lane, title, detail] of scenario.steps) {
        assert.ok(Number.isInteger(lane) && lane >= 0 && lane < 3);
        assert.ok(title.length <= 38, `Label too long: ${title}`);
        assert.ok(detail.length > 20);
      }
    }
  }
});
test("flows preserve payment, redemption and rollout distinctions", () => {
  const text = JSON.stringify(merchantFlows);
  for (const phrase of [
    "Returning from checkout alone",
    "does not buy paid capacity",
    "next renewal",
    "does not spend stamps",
    "excess stamps carry forward",
    "production rollout is separate",
    "Pending rollout",
  ])
    assert.ok(text.includes(phrase), phrase);
});
test("billing explains subscription outcomes and reversing cancellation", () => {
  const billing = merchantFlows.billing;
  assert.deepEqual(billing.lanes, [
    "Business Owner",
    "Subscription",
    "Customers",
  ]);
  assert.ok(billing.scenarios.some((s) => s.label === "Undo cancellation"));
  const text = JSON.stringify(billing);
  for (const phrase of [
    "Programme paused",
    "Paid access resumes",
    "paid period ends",
    "Store inactive",
    "before the subscription ends",
  ])
    assert.ok(text.includes(phrase), phrase);
  assert.doesNotMatch(
    text,
    /sends the payment outcome|Confirm payment to Kardy/,
  );
});
test("merchant guides embed the reusable flow and retain readable instructions", () => {
  for (const [file, type] of [
    ["mcp/overview.mdx", "mcp-read"],
    ["mcp/connect.mdx", "mcp-connect"],
    ["guides/billing.mdx", "billing"],
    ["features/outlets.mdx", "outlets"],
    ["guides/scanning.mdx", "counter"],
    ["features/merchant-notifications.mdx", "notifications"],
  ]) {
    const mdx = readFileSync(new URL(`../${file}`, import.meta.url), "utf8");
    assert.ok(mdx.includes("import { MerchantFlow }"));
    assert.ok(mdx.includes(`<MerchantFlow type="${type}" />`));
    assert.ok(mdx.length > 1500);
  }
});

test("all maps share a static canvas with only navigation controls inside", () => {
  const map = source.slice(
    source.indexOf('<div className="kardy-flow-map">'),
    source.indexOf('<ol className="kardy-flow-text">'),
  );
  assert.equal((map.match(/<button\b/g) || []).length, 0);
  assert.doesNotMatch(
    map,
    /aria-pressed|setSelected|Read as steps|Choose a scenario/,
  );
  assert.match(map, /data-kardy-flow/);
  const runtime = readFileSync(
    new URL("../runtime/merchant-flow.jsx", import.meta.url),
    "utf8",
  );
  assert.match(runtime, /<Background\s+variant=\{BackgroundVariant.Dots\}/);
  assert.match(runtime, /showInteractive=\{false\}/);
  assert.match(runtime, /elementsSelectable=\{false\}/);
});
