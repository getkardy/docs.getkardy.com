// Optional visual check: PLAYWRIGHT_MODULE, CHROMIUM_PATH and REACT_NODE_MODULES
// point to an existing local test runtime. No customer data or remote requests.
import assert from "node:assert/strict";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import { readFile } from "node:fs/promises";
import http from "node:http";
import { build } from "esbuild";
const require = createRequire(import.meta.url);
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || "playwright");
const bundle = await build({
  stdin: {
    contents: `import React,{useState,useRef} from 'react';import {createRoot} from 'react-dom/client';import {MerchantFlow} from './snippets/merchant-flow.jsx';globalThis.useState=useState;globalThis.useRef=useRef;createRoot(document.getElementById('root')).render(<MerchantFlow type="billing"/>);`,
    resolveDir: fileURLToPath(new URL("../", import.meta.url)),
    loader: "jsx",
  },
  bundle: true,
  write: false,
  jsx: "automatic",
  nodePaths: process.env.REACT_NODE_MODULES
    ? [process.env.REACT_NODE_MODULES]
    : [],
});
const css = await readFile(
  new URL("../merchant-flows.css", import.meta.url),
  "utf8",
);
const runtime = await readFile(
  new URL("../merchant-flow-runtime.js", import.meta.url),
  "utf8",
);
const nativeCss = await readFile(
  new URL("../merchant-flow-runtime.css", import.meta.url),
  "utf8",
);
const server = http.createServer((req, res) => {
  res.setHeader(
    "Content-Type",
    req.url === "/bundle.js" ? "text/javascript" : "text/html",
  );
  res.end(
    req.url === "/bundle.js"
      ? bundle.outputFiles[0].text + "\n" + runtime
      : `<html><meta name="viewport" content="width=device-width, initial-scale=1"><style>body{margin:20px;font-family:Arial,sans-serif}main{max-width:800px;margin:auto}html.dark{background:#100e12}${nativeCss}${css}</style><main id="root"></main><script src="/bundle.js"></script></html>`,
  );
});
await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
const browser = await chromium.launch({
  executablePath: process.env.CHROMIUM_PATH || undefined,
  headless: true,
});
try {
  const page = await browser.newPage({
    viewport: { width: 1100, height: 1100 },
  });
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto(`http://127.0.0.1:${server.address().port}`);
  await page.locator(".react-flow__background").waitFor();
  assert.equal(await page.locator("button.kardy-flow-node").count(), 0);
  assert.match(
    await page.locator(".kardy-flow-text").innerText(),
    /Complete payment/,
  );
  await page
    .getByRole("button", { name: "Failed renewal", exact: true })
    .click();
  await page.waitForFunction(
    () => document.querySelectorAll(".kardy-flow-node").length === 5,
  );
  const pattern = page.locator(".react-flow__background pattern");
  const getPattern = () =>
    pattern.evaluate((el) =>
      [
        el.getAttribute("x"),
        el.getAttribute("y"),
        el.getAttribute("width"),
      ].join(","),
    );
  const initialPattern = await getPattern();
  const pane = page.locator(".react-flow__pane");
  const bounds = await pane.boundingBox();
  await page.mouse.move(bounds.x + 50, bounds.y + 60);
  await page.mouse.down();
  await page.mouse.move(bounds.x + 133, bounds.y + 107, { steps: 5 });
  await page.mouse.up();
  assert.notEqual(
    await getPattern(),
    initialPattern,
    "native dots must move with the viewport",
  );
  const beforeZoom = await pattern.getAttribute("width");
  await page.getByRole("button", { name: "Zoom in", exact: true }).click();
  await page.waitForTimeout(300);
  assert.notEqual(
    await pattern.getAttribute("width"),
    beforeZoom,
    "native dots must scale with zoom",
  );
  await page.getByRole("button", { name: "Reset view", exact: true }).click();
  await page.screenshot({
    path: "/tmp/kardy-merchant-flow-desktop.png",
    fullPage: true,
  });
  await page.evaluate(() => document.documentElement.classList.add("dark"));
  await page.screenshot({
    path: "/tmp/kardy-merchant-flow-dark.png",
    fullPage: true,
  });
  await page.setViewportSize({ width: 390, height: 844 });
  assert.equal(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth,
    ),
    true,
    "page must not overflow on mobile",
  );
  assert.equal(await page.locator(".kardy-flow-text li").count(), 5);
  await page.screenshot({
    path: "/tmp/kardy-merchant-flow-mobile.png",
    fullPage: true,
  });
  await page.locator(".kardy-flow-canvas").focus();
  await page.keyboard.press("Tab");
  assert.equal(
    await page.evaluate(() =>
      document.activeElement.getAttribute("aria-label"),
    ),
    "Zoom in",
  );
  assert.deepEqual(errors, []);
  console.log(
    "Passed: static nodes, scenario change, zoom/reset, dark mode, mobile overflow, visible steps and keyboard access.",
  );
} finally {
  await browser.close();
  await new Promise((resolve) => server.close(resolve));
}
