# Kardy documentation

This is the standalone Mintlify documentation repository. `docs.json` is at the
repository root; configure Mintlify's docs directory as the root, not `/docs`.
The public host is `docs.getkardy.com`. Consumer and merchant apps live separately
at `getkardy.com` and `merchants.getkardy.com`.

Run `pnpm install`, `pnpm dev` (port 3002), and `pnpm check`. Before committing,
Husky runs staged formatting/lint fixes, TypeScript checks, branding tests and
Mintlify build/link validation. Commit generated `navigation-progress.js` whenever
its TypeScript source changes. Do not edit the generated bundle directly.

Mintlify supplies React hooks to JSX snippets; keep their global declarations.
Do not add Next.js, app auth, backend credentials, migrations or app runtime code.
Use clearly labelled fictional illustrations. Distinguish implemented behaviour
from deployment gates and concepts; never infer a live service from a preview.
Keep internal implementation notes in the app repository, not the published docs.
Kardy's approved palette is light pink (#FF90C1), soft violet (#AF79F3),
burgundy (#42001C) and soft white (#FFF0EE). Use burgundy text on pink/violet,
not white. Keep the outlined wordmark and existing DOCUMENTATION suffix styling.
The logo lockup places the slightly enlarged mascot to the right of the wordmark,
before the divider and DOCUMENTATION label. Keep both light and dark SVGs aligned.
Preserve merchant-owned colours
and third-party logos. The full design source of truth is the app's DESIGN.md.
Use `apply_patch` for edits and preserve other uncommitted work.
