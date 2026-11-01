# Pokepet Go — Afterglow

Fresh Next.js / React / TypeScript implementation with Three.js neighbourhood rendering and a MongoDB-backed authoritative game API. The two source specs are preserved in `docs/`. UI colours, layout and mood follow the supplied mock; implementation is new.

## Run

Install dependencies with `npm install`, then run `npm run dev`. Open http://127.0.0.1:3000.

Provide `MONGODB_URI` through your runtime environment to enable persistent sessions, missions, upgrades, community and multiplayer. Optional `MONGODB_DB` defaults to `pokepets_go_v2`. No credentials are bundled. Without a database the UI remains inspectable but saved actions explicitly fail. No local simulation is presented as multiplayer.

Use two separate browser profiles to create two owners. Create a match in one, join from the other, then alternate attack and defend. Polling runs every three seconds. Reload restores the session using an HTTP-only cookie.

## Implemented

- Mobile-first Afterglow UI, fictional Three.js canal map and accessible mission list.
- Separate owner and companion names, curated indoor/outdoor missions, captions and saved memories.
- Exactly-once per-mission XP and 40 XP stat upgrades, with stats snapshotted when a match activates.
- Server-issued session identity, membership and turn validation, match versions, command retry deduplication, atomic MongoDB compare-and-swap writes.
- Shared community totals and ranked saved progression.

## Boundaries

This is a development implementation, not a deployed production service. The current world is deliberately one MongoDB document so rewards, receipts and battle activation are atomic; shard into bounded aggregates before scaling. Receipts, players and match history currently grow without retention and must be bounded before public deployment. Sessions are anonymous, with no account recovery. Add rate limits before opening registration publicly.

The map is illustrative, not GPS. Character artwork reuses labelled owner/mooncat SVG presets from the supplied mock; Hatch Pet sheets, live owner/pet photo generation, attack/hit sprite animation, AI adapters and production photo retention are not implemented. No live image-provider access is assumed. The app currently needs MongoDB to verify the full shared flow.

## Verification

`npm test`, `npm run typecheck`, `npm run lint`, `npm run format`, `npm run build`.

Pure-rule tests cover rewards, duplicate commands, insufficient balance, membership, turn order and stale versions. These do not establish database or two-browser acceptance; that requires a configured database and manual end-to-end verification.

## Current verification result

Three rule tests passed using Node 24 native TypeScript stripping. npm and Bun dependency resolution stalled in this environment; installers were stopped. Formatting, lint, typecheck and build could not run because their executables were not installed. Browser and MongoDB integration remain unverified.
