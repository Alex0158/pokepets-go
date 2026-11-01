# Local multiplayer backbone

Alex / Codex scoped review and implementation, 1 November 2026. Source: [schema review decisions](https://chatgpt.com/space/page_da74cc1494e88191995af37ede1d5082), [architecture](https://chatgpt.com/space/page_98ac47d66d4c8191b83289c286f522bc) and [checkpoints](https://chatgpt.com/space/page_6ae740255a908191b675c589a93bc207). This is a local database/API slice, not Atlas or a completed game UI.

## Review and decisions before implementation

- The match aggregate and versioned single-document CAS are appropriate. Identity, authorized joining, create/join idempotency and exact command retention were underspecified. These are required for two usable sessions and ambiguous network recovery.
- Three collections: players with hashed seven-day random sessions; one immutable preset pet per player; matches with embedded participants, frozen stats, accepted command receipts and event. IDs are opaque strings. The raw session token lives only in the HttpOnly SameSite Strict cookie. Browser JSON never receives session hashes.
- Creator names an existing invited player ID. Only that player may join; only actual participants read. Exchange player IDs manually for this harness; no discovery or public profile API is introduced.
- Create/join/move require UUID command IDs. Identical retries return the same receipt/event plus the latest snapshot. Payload changes under the same ID conflict. Keep expectedVersion unchanged on retry; after an actual stale conflict, fetch state and use a new command ID for a new intent. Request actors always come from the cookie.
- Attack/defend alternate; creator starts. Damage is max(1, attack minus defence), halved by one active guard. Base HP 30, attack 10, defence 2, speed 5. A guard is consumed by the next incoming attack. Zero HP finishes; move 20 finishes as a draw otherwise. No rewards. No pet edits/transfers in this slice, removing a cross-document ownership/stat race.
- Retain every receipt (create + join + at most 20 moves). Match lifetime is 24 hours; expiry is logical and checked by every command/read, with no TTL/deletion. Disconnect does not forfeit. Session lifetime is seven days without sliding refresh. Reload recovery requires the original cookie; cookie loss is unrecoverable in this demo.
- Player creation and pet upsert are separate writes. An established session repairs a missing deterministic pet; an initial lost bootstrap response can leave an unused profile. No partial match/reward is claimed. Production account recovery, rate limits, auth and retention require a later decision.
- DB errors return 503 and an explicit retry instruction. There is no memory/localStorage persistence adapter. Same-origin JSON mutations, bounded bodies and participant authorization apply. DB connection configuration rejects non-loopback addresses and non-local database names.

## Ownership and local state

The activity folder is not a Git repo. Its child `pokepets-go` is a single dirty worktree on `codex/map-core`, HEAD `65e44cc`. Only README is tracked; root prototype and the `web/` skeleton already existed uncommitted. The skeleton branch documented in Space is absent from local refs. Do not reset, checkout over, stage, push or move those files. Add only shared/server modules, session/match routes, tests and this document. One additive `allowImportingTsExtensions` compiler option supports native Node TypeScript tests; no package/dependency changes are required. UI, existing core and teammate assets remain untouched. This is local ownership for this task, not assignment of Builder A/B or integration-branch ownership.

## API contract

All responses are `Cache-Control: no-store`. Mutation requests require `Origin` matching the localhost URL and `Content-Type: application/json`. Maximum body: 4096 bytes. Use a cookie jar per player.

| Route | Body / response |
| --- | --- |
| `POST /api/session` | `{displayName}` creates cookie and separate player/pet, or resumes an existing valid cookie. Invalid/expired cookie returns 401 rather than silently replacing identity. |
| `GET /api/session` | Own `{player, pet, matches}`; recent participant matches allow recovery after losing a create response. |
| `POST /api/matches` | `{commandId, petId, opponentPlayerId}` → `{snapshot, receipt, duplicate}` |
| `POST /api/matches/:matchId/join` | `{commandId, petId, expectedVersion:0}` → command result |
| `GET /api/matches/:matchId` | Participant-only snapshot |
| `POST /api/matches/:matchId/moves` | `{commandId, expectedVersion, move:'attack'|'defend', targetPetId}` → command result |

Poll the snapshot endpoint; ignore responses older than the displayed version. Animate each event ID once. A retry returns its original receipt/event; `snapshot` can be newer. This slice exposes that contract without implementing animation or the map.

## Run and verify

Use only a dedicated local MongoDB, never Atlas. Set `POKEPET_LOCAL_MONGODB_URI=mongodb://127.0.0.1:27028` and `POKEPET_LOCAL_DATABASE=pokepet_local_demo` before running `npm run dev -- --hostname 127.0.0.1 --port 3018` in `web/`. Missing/invalid configuration makes the new API unavailable; the home and health routes remain independent.

From the repo root: `node --test web/test/rules.test.ts`; `POKEPET_TEST_MONGODB_URI=mongodb://127.0.0.1:27028 node --test web/test/mongo.test.ts`. Integration tests retain a uniquely named local test database and never drop other data. Run `npm test`, `npm run check`, then `npm run typecheck` and `npm run build` in `web/`. Verification results and remaining gates are recorded below after execution.

## Verified result

- TDD: rules and real-DB tests first failed for missing implementation. A regression test reproduced Next.js's internal `Request.url` hostname mismatch before correcting Host/Origin validation.
- Real MongoDB 8.0.34, dedicated Docker container `pokepet-backbone-review-20261101`, published only at `127.0.0.1:27028`. No Atlas connection/configuration was used. The container remains running for local integration; test databases are retained, not deleted. Test name prefixes are `pokepet_local_test_*`; HTTP smoke data is in `pokepet_local_http_smoke`.
- Original core plus owned backbone tests: **13/13 passed**, including actual MongoDB persistence, simultaneous create and join, same-ID move retries, competing commands on one version, payload reuse conflicts, outsider rejection, logical/session expiry, bounded receipt retention through a draw, and retry after simulated acknowledgement loss following a real DB commit. The acknowledgement-loss injection is a test condition; storage is still MongoDB.
- Latest complete root `POKEPET_TEST_MONGODB_URI=mongodb://127.0.0.1:27028 npm test`: **17/17 passed**, zero skipped. This includes the concurrently added avatar-lab tests. That work initially had a missing implementation while its TDD was active; no avatar files were edited to resolve it.
- Actual production Next.js HTTP smoke passed using two independent cookie jars and the real local DB: distinct identities, authorized create/join, outsider read rejection, concurrent duplicate move, identical HP/version, server process stop/restart, own-profile recovery and same receipt on retries after restart. Run `POKEPET_LOCAL_MONGODB_URI=mongodb://127.0.0.1:27028 POKEPET_LOCAL_DATABASE=pokepet_local_http_smoke node web/scripts/local-http-smoke.mts` from the repo root after building. The script starts/stops only its own localhost Next server at port 3023 and never prints or persists cookie credentials.
- `npm run typecheck` and `npm run build` in `web/`, root `npm run check`, and `git diff --check` passed. Native Node TypeScript emits a module-type detection warning because the existing web package has no `type`; no dependency/package changes were made for this warning.
- Baseline hash comparison: no pre-existing source file was changed except the single additive TypeScript compiler option in `web/tsconfig.json`. The compiler updated its existing ignored `web/tsconfig.tsbuildinfo` cache. No baseline file was removed. The original README/prototype/UI were preserved; concurrent `web/avatar-lab/` additions belong to the other workstream.

## Remaining integration gates

This is a usable local database/API backbone. Real browser contexts, game UI wiring, mobile usability, map/sprites and event playback have not been exercised by this slice. The two-cookie-jar HTTP harness is not a two-browser UI test. The concurrently added sprite helper accepts matchId/commandId/version compatible with these events, but no live wiring is claimed. Do not mark the end-to-end multiplayer checkpoint complete yet.

The teammate's Atlas invitation, reviewed environment/credentials, hosted auth/security/retention decisions, and deployment/push approval remain separate gates. No Git staging, commit, push, deployment, hosted permission change or teammate message was performed. This work remains uncommitted in the existing dirty checkout.

Verified runtime: Node.js 26.5.0 with native TypeScript execution and the skeleton's existing MongoDB driver 7.8.0 / Next.js 16.4.3. Use a Node release with native TypeScript support for these test commands. The database container is task-created local test infrastructure, not a hosted deployment.
