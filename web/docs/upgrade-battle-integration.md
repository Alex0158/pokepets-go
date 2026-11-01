# Upgrade to next battle snapshot integration

Alex / Codex local scope, 1 November 2026. This extends the [local database backbone](local-backbone.md) using the existing [progression contract](local-progression.md). It does not change the progression rules, cost/reward policy, avatar code, UI, Atlas or hosted deployment.

## Independent review and decision

Before this integration, code stored immutable starting stats in `pets.baseStats`, upgrades in separate per-pet `progressions`, and immutable combat stats inside `matches.participants`. `BackboneService.create/join` read only base stats. A plain read of progression followed by match CAS would not serialize a concurrent upgrade with match activation, and reading each participant separately could produce stats from different database moments. A transaction that only reads progression also permits snapshot staleness relative to a concurrent write.

**Chosen local semantics:** creating a waiting match reserves identities and pets; its displayed preset stats are provisional. Joining activates the match and re-snapshots *both* participants from saved progression (or the immutable base stats when no progression exists). Start each pet at its snapshotted full health. Include all four stats with the existing backend `defence` spelling. Record the source progression version in each participant. No client-supplied stat or reward is trusted.

**Ordering:** activation and upgrades serialize on both progression documents. A completed upgrade before a fresh join is included. When upgrade and join overlap, either may win: an upgrade before activation commit is included; an upgrade serialized after activation applies only to future matches. Activation pins one pair of stats and commits the join receipt, participants, version, turn and status together. Existing active/finished match snapshots never refresh after later upgrades, polling or join retries.

**Mechanism:** use a MongoDB transaction with snapshot reads, primary read preference and majority write concern. Within the transaction, ensure missing progression baselines using the existing pure initializer, then increment each progression's `version` with a conditional write. That is a real write fence against the existing progression service's version-CAS replacement; it does not spend points, alter stats, award missions or append progression receipts. The progression version is a state revision, so a battle-start fence can advance it without a reward/upgrade receipt. Versions may therefore contain gaps between progression command receipts, which already return the original receipt plus latest state on retry.

Pin both documents in stable pet-ID order to reduce contention. Concurrent upgrades force a transaction retry or wait behind the fence. A stale progression replacement that read before activation fails its existing version filter, re-reads and retries. Missing baseline creation and match activation roll back together on failure. Use the driver's bounded transaction retry API; unknown commit results are resolved by retrying the same join command ID and payload. Idempotent join retry checks the stored receipt first, never re-fences or refreshes the pair. Invalid/non-member joins cannot touch either progression.

**Infrastructure requirement:** upgraded activation requires transaction support. Keep the existing standalone MongoDB at port 27028 untouched. A separate task-created single-node local replica set at `127.0.0.1:27030` supplies transaction semantics for development; it is not a highly available deployment. Unsupported standalone activation fails explicitly rather than quietly using stale base stats. Existing single-document commands and already-active matches keep their rules. Atlas access and deployment are separate gates.

Sources: [MongoDB transaction atomicity](https://www.mongodb.com/docs/manual/core/transactions/), [transaction stale reads and write conflicts](https://www.mongodb.com/docs/manual/core/transactions-production-consideration/#in-progress-transactions-and-stale-reads), and [Node transaction retry API](https://www.mongodb.com/docs/drivers/node/current/crud/transactions/). This design uses these guarantees with real local tests; unit stubs are not persistence evidence.

## File boundary

Preserve all existing dirty files. This integration owns additions under `web/src/server/db/` and new focused tests/HTTP proof, plus minimal edits to the existing battle service, shared participant type and backbone handoff. Do not edit `web/src/server/progression/`, progression routes/tests/docs/smoke, mission-lab, avatar-lab or shared app-shell files. Document the progression-version fence here and in the shared interface checklist; do not rewrite another workstream's files.

## Required verification

- Upgrade both players after match creation but before join: activation sees the latest stats and source versions, damage follows them, base stats remain unchanged.
- Upgrade after activation: current HP/stats and retry receipt remain unchanged; the next match sees the upgrade.
- Concurrent same-ID join, different-ID join and upgrade/activation races; exactly one activation and no duplicate fences/rewards.
- Controlled interleavings on both sides of a progression fence, transaction rollback after writes, ambiguous committed response and restart recovery.
- Missing progression baseline and ownership failures. Existing pure rules, full root suite, TypeScript/build, real DB and actual two-session HTTP proof.
- Real two-browser game UI, animation and Atlas remain separate acceptance gates unless exercised here.

## Verified implementation and run

The integration changes only `web/src/shared/multiplayer.ts`, `web/src/server/core/battle.ts`, `web/src/server/core/service.ts` and `web/src/server/db/mongo-repository.ts`, plus the backbone handoff and this report. New tests: `web/test/upgrade-battle-mongo.test.ts` and `web/test/activation-standalone.test.ts`; actual HTTP proof: `web/scripts/upgrade-battle-http-smoke.mts`. Progression, mission, avatar and app-shell files were not edited by this task.

- Focused TDD reproduced the actual old behavior (saved attack 11 still started as 10; no progression fence) after replica-set setup. The new behavior passed seven focused real-transaction cases plus one standalone compatibility case.
- Controlled interleavings verify an upgrade committed after the transaction snapshot forces fresh capture, and a progression replacement read before activation retries its version CAS. Tests verify both existing progression fence rollback and rollback of newly inserted baselines, unauthorized activation with no progression writes, concurrent same-ID join with one fence per pet, and same receipt after simulated response loss **following a real transaction commit**. The fault injection controls acknowledgement or operation ordering; persistence remains real MongoDB.
- Latest full root suite: **38/38 passed, zero skipped**, using `POKEPET_TEST_MONGODB_URI=mongodb://127.0.0.1:27030 POKEPET_STANDALONE_TEST_MONGODB_URI=mongodb://127.0.0.1:27028 npm test`.
- `npm run typecheck` and `npm run build` in `web/`, root `npm run check` and `git diff --check` passed.
- Actual production Next.js HTTP proof passed: two independent cookie jars, waiting match → missions and attack/health upgrades → concurrent identical join → A attack 11 and B HP 31 → later A attack 12 leaves this match at attack 11 → accepted hit leaves B HP 22 on both sessions → server process restart → original join/upgrade/move receipts reused without duplicate spending/fences/damage → next match starts with attack 12. The original backbone HTTP/restart smoke and unmodified progression HTTP smoke also passed on the replica set.

Run the proof from the repo root after building:

```sh
POKEPET_TEST_MONGODB_URI=mongodb://127.0.0.1:27030 node web/scripts/upgrade-battle-http-smoke.mts
```

Runtime app configuration: `POKEPET_LOCAL_MONGODB_URI=mongodb://127.0.0.1:27030`, a database name matching `pokepet_local_*`, and `npm run dev -- --hostname 127.0.0.1 --port 3018` in `web/`. The dedicated container is `pokepet-battle-replica-20261101`, a single-node `pokepetLocal` replica set with matching internal/external port 27030. The unused initial setup container `pokepet-battle-snapshots-20261101` was stopped and retained, not deleted. The original standalone container/database remains running at port 27028 and was not reconfigured. All test databases are retained under distinct `pokepet_local_*` names; there is no migration or deletion.

## Remaining boundaries

The local progression service's `version` now advances for successful battle activation fences as well as progression commands; do not interpret it as a receipt count. An old command receipt remains stable while its accompanying latest snapshot may have a newer version. A participant's `progressionVersion` identifies the activation revision; legacy active matches may omit it. Waiting-match preset HP/stats remain provisional until activation.

Under contention, the driver retries transactions within a 5-second budget; progression retains its existing bounded CAS retries. Timeout, unavailable replica set or exhausted retries can return an explicit error. Retry the same command ID and payload to resolve uncertain outcomes; do not create a new command to repair an ambiguous success. Single-node local transactions establish neither high availability, multi-node failover, heavy-load latency nor Atlas behavior. No production claim is made.

This is verified two-session HTTP and real database integration. Real two-browser game UI/event animation, mobile usability and app-shell wiring remain open. No live avatar/photo generation, battle rewards, Atlas mutation, hosted permission change, push, deployment or teammate message was performed. Existing dirty work and the independent progression/avatar workstreams remain preserved.
