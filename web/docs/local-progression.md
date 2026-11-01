# Local mission progression slice

Scope: a local-only server-backed progression record per existing preset pet. It does not enable Atlas, photo storage, shared-map features or a production account system.

The server derives player identity from the existing session and uses only that player's owned pet. Three curated missions may each be completed once; confirmation is required. Each completion atomically stores the mission, fixed reward and command receipt. A stat upgrade costs 5 points. Stats start from the existing pet's `baseStats`; `defence` uses the existing backend spelling.

Each command has a UUID. Repeating the same command and payload returns the original receipt plus the latest snapshot; reusing the ID for another payload conflicts. Concurrent commands use a version compare-and-swap, with bounded retries. Retain at most 64 receipts and reject further writes instead of silently evicting idempotency data. The repeat/reset policy is provisional for this demo.

Progression is stored separately in `progressions`, keyed by pet ID and guarded by owner ID. Upgrades affect the progression view only, not the immutable `pets.baseStats` or existing match snapshots. Battle integration is deferred until upgrade-versus-match-start ordering is specified and tested. This avoids changing verified battle behavior or introducing a cross-document snapshot race.

Local routes: `GET /api/progression`; `POST /api/progression/mission` accepts `{commandId, missionId, confirmed}`; `POST /api/progression/upgrade` accepts `{commandId, stat}`. Mutations use the existing same-origin JSON and session checks. Backend catalog and state are authoritative; a fixture or supplied reward cannot award points. A missing or failed database returns an error, not a fabricated reward.

Verification: test pure rules before implementation, then verify authorization, duplicate commands, same-ID payload mismatch, simultaneous writes, insufficient points, reload via a new service and database failure against isolated local MongoDB. Run the project unit suite and existing build checks. No shared reward, match integration or production deployment is implied.

## Local verification

The initial focused rules and API tests failed for missing implementation before the code was added. The complete root suite passed 24/24 with real MongoDB at `127.0.0.1:27028`; this includes progression ownership, identical retry and changed-payload conflict, concurrent duplicate mission protection, restart-style service recreation and the existing multiplayer tests. `npm run check`, `git diff --check`, `npm run typecheck` and `npm run build` passed.

After building, `POKEPET_TEST_MONGODB_URI=mongodb://127.0.0.1:27028 node web/scripts/progression-http-smoke.mts` starts its own localhost Next server, creates an isolated test database, and verifies session, mission, retry, upgrade, readback and anonymous rejection through actual HTTP routes. It retains the isolated test database and stops only its own test server. It does not perform a browser/UI or Atlas test.

This slice is uncommitted and local-only. Mission catalogue/reward values, once-per-mission rule, 5-point upgrade and 64-command limit are provisional. No real-memory feature, photo upload, shared map, production auth, battle reward or upgraded-stat battle integration is claimed.
