# Documentation audit · 13 September 2026

Scope: local consumer and merchant source, existing feature guides, and the recent
Kardy rebrand and public-preview changes. No production deployment or authenticated
backend acceptance testing was performed as part of this documentation update.

## Source-to-guide coverage

| Area                                       | Source checked                                                                                                                      | Canonical documentation                                                                           |
| ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| Signup and phone entry                     | `consumers/src/components/auth-form.tsx`, `consumers/src/lib/phone-validation.ts`, `consumers/src/app/actions/auth.ts`              | `accounts/overview.mdx`, `customer-journey/join.mdx`                                              |
| Public discovery and identity              | `consumers/src/components/marketplace.tsx`, `landing-merchant-features.tsx`, `kardy-wordmark.tsx`                                   | `features/kardy-rewards.mdx`, `customer-journey/discovery.mdx`                                    |
| PWA, coffee claim and notification concept | `consumers/src/components/member-home.tsx`, `landing-pass-demo.tsx`, `landing-wallet-journey.tsx`                                   | `features/browser-wallet.mdx`, `customer-journey/rewards.mdx`, `customer-journey/home-screen.mdx` |
| Native pass boundaries                     | Existing `technical/wallet-implementation.md` and `features/native-wallets.mdx`; current consumer wallet routes                     | `features/native-wallets.mdx`, `availability.mdx`                                                 |
| Dashboard filtering and live activity      | `merchants/src/components/merchant-overview.tsx`, `merchant-activities.tsx`, `merchants/src/app/actions/overview-report.ts`         | `features/analytics.mdx`, `features/activities.mdx`, `features/live-view.mdx`                     |
| Other established features                 | Existing reference pages for rewards, referrals, branding, QR signs, members, outlets, teams, MCP, broadcasts, billing and capacity | Linked from `features/overview.mdx`; existing detailed contracts retained                         |
| Domain and deployment handoff              | `docs/kardy-rebrand.md`, `docs/package.json`, `docs/docs.json`, `consumers/src/lib/site-config.ts`                                  | `portals.mdx`, `README.md`, `availability.mdx`                                                    |

## Changes

- Added a dated product snapshot and navigation entry without claiming a production release.
- Documented country-specific phone validation, two-step signup and read-only signup previews.
- Clarified that the PWA owns current reward progress, while native passes do not auto-update.
- Identified the iPhone-style claim notification as a concept, not enabled push delivery.
- Documented Kardy Rewards branding and empty published-data states.
- Corrected portal text that described public URLs as local services.
- Replaced stale publishing guidance claiming no domains had been chosen.
- Kept existing security, billing, usage and delivery gates intact. Historical QR and
  consent identifiers remain compatibility contracts, not missed display-brand replacements.

## Follow-up verification at release

Validate docs and internal links locally, inspect changed pages at desktop and mobile
widths, then verify domains, redirects and authenticated workflows on the actual
deployment. Review account email delivery, subscription gates, wallet issuer setup
and broadcast allowances separately. A passing docs check does not verify these services.
