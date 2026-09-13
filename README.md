# Kardy Docs

Standalone Mintlify documentation for **docs.getkardy.com**. This repository owns
the public guides, navigation, illustrations and documentation tooling. Consumer
and merchant application code remain in the separate Kardy app repository.

## Local setup

Use Node.js 22.13+ and pnpm 11 (the package manager version is pinned).

```sh
pnpm install
pnpm dev
```

Preview runs at http://localhost:3002. No app checkout, InsForge credentials or
backend service is needed to validate the documentation. Local search may require
Mintlify login and a connected project.

## Checks and formatting

```sh
pnpm check          # lint, TypeScript, tests, Mintlify build and link checks
pnpm lint
pnpm typecheck
pnpm test
pnpm check:docs
pnpm format
pnpm format:check
```

`pnpm install` sets up Husky. The pre-commit hook runs staged Prettier and ESLint
fixes sequentially, then TypeScript, branding tests and Mintlify validation. It
does not commit or push anything. Generated files and dependencies are excluded
from linting and formatting. This repo does not use Next.js ESLint presets or
the application monorepo's type checks.

`navigation-progress.ts` is bundled by `pnpm build:progress`. Commit the resulting
`navigation-progress.js` when its source changes; Mintlify loads the bundle on
every page. The `dev` and documentation-check commands rebuild it automatically.
MDX is validated by Mintlify; TypeScript checks the custom progress source, while
ESLint covers JavaScript/JSX snippets and TypeScript. Mintlify supplies React hooks
to snippets, so preserve their explicit global declarations.

## Publish

1. Connect this repository from Mintlify's Git Settings with access to this repo only.
2. Select the intended publishing branch. Set the docs directory to the **repository
   root** (empty path or `/`), not `/docs`: `docs.json` is already at the root.
3. Configure `docs.getkardy.com` and follow Mintlify's DNS instructions.
4. Verify the published navigation, search, images, redirects and links to
   `getkardy.com` and `merchant.getkardy.com`.

This migration does not configure the Mintlify account, GitHub App, DNS or billing,
and does not publish a site. `mint dev` is a local preview, not a production
server to run on InsForge. Check the current Mintlify plan and GitHub permissions
before assuming a repository can be connected.

References: [GitHub setup](https://www.mintlify.com/docs/deploy/github),
[deployments](https://www.mintlify.com/docs/deploy/deployments), and
[self-hosting](https://www.mintlify.com/docs/deploy/self-host).

## Content conventions

- `docs.json`: branding, navigation, public links and redirects.
- `features/`: canonical feature references; do not duplicate full procedures.
- `guides/` and `merchants/`: role-based setup and counter workflows.
- `customer-journey/` and `accounts/`: focused customer and account tasks.
- `technical/`: public MCP and QR/security reference, not private implementation notes.
- `snippets/`, `images/` and CSS: local components and illustration assets.
- `availability.mdx`: deployment gates; `updates.mdx`: dated repository snapshots.

Use fictional examples. Never include credentials, real customer QR codes or
private records. A preview is not proof of a saved transaction or enabled service.
Current progress lives in the PWA; native pass updates and claim push notifications
are not implemented. Preserve the availability notes when editing illustrations.

Keep unique titles/descriptions, existing redirects and meaningful image alt text.
Check desktop/mobile rendering after structural changes. Private backend notes,
cost guardrails and wallet/loyalty implementation contracts remain in the app
repository's `docs/engineering/` folder; changes to contracts should update both repositories.

The four role checklists save only checked indexes in local browser storage; they
never write accounts or award stamps. Keep per-guide keys distinct and version
them if item order changes. The QR-sign images are actual fictional merchant-demo
captures; refresh them when the relevant editor changes.

## Migration

Moved from the Kardy monorepo's `docs/` directory on 13 September 2026, preserving
the current uncommitted content and assets. The Git history of the original files
remains in the app repository; no history rewrite or remote push was performed.
