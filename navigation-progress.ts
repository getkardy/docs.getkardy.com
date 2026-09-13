import { BProgress, css } from "@bprogress/core";

// Mintlify loads root JavaScript globally. Bundle this source with build:progress.
const root = document.documentElement;
if (!document.getElementById("kardy-navigation-progress")) {
  const style = document.createElement("style");
  style.id = "kardy-navigation-progress";
  style.textContent = `${css({ color: "#ca1c67", height: "2px" })}
    html.dark { --bprogress-color: #ff8fbe; }
    @media (prefers-reduced-motion: reduce) {
      .bprogress, .bprogress * { transition: none !important; animation: none !important; }
    }`;
  document.head.appendChild(style);
  const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
  let timeout: ReturnType<typeof setTimeout> | undefined;
  let pendingPath: string | undefined;
  let currentPath = location.pathname;
  const finish = () => {
    clearTimeout(timeout);
    pendingPath = undefined;
    currentPath = location.pathname;
    BProgress.done();
  };
  const start = (path: string) => {
    clearTimeout(timeout);
    pendingPath = path;
    BProgress.configure({
      showSpinner: false,
      trickle: !reducedMotion.matches,
      speed: reducedMotion.matches ? 0 : 200,
    });
    BProgress.start();
    // Cancelled navigation and failed pages must never leave a stuck indicator.
    timeout = setTimeout(finish, 15000);
  };
  document.addEventListener(
    "click",
    (event) => {
      if (
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      )
        return;
      const anchor =
        event.target instanceof Element
          ? event.target.closest("a[href]")
          : null;
      if (
        !(anchor instanceof HTMLAnchorElement) ||
        anchor.hasAttribute("download") ||
        (anchor.target && anchor.target !== "_self")
      )
        return;
      const target = new URL(anchor.href, location.href);
      if (
        target.origin !== location.origin ||
        target.pathname === location.pathname
      )
        return;
      start(target.pathname);
    },
    true,
  );
  // Mintlify exposes this attribute when the new page is rendered.
  new MutationObserver(() => {
    if (pendingPath && root.dataset.currentPath === pendingPath) finish();
  }).observe(root, {
    attributes: true,
    attributeFilter: ["data-current-path"],
  });
  window.addEventListener("popstate", () => {
    if (location.pathname !== currentPath) start(location.pathname);
  });
  window.addEventListener("pagehide", finish);
  window.addEventListener("pageshow", finish);
}
