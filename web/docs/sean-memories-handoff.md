# Memories and community handoff

Owner: **Sean / Codex**. Integration branch: `codex/sean-memories-integration`, based on `codex/map-core` at `0247443`, with standalone Memories commit `edd41af` cherry-picked as `c115e52`. The original `codex/nextjs-skeleton` remains at `c1e569b`; it does not contain the current host UI/runtime. Ownership follows [Feature Modules and Checkpoints](https://chatgpt.com/space/page_6ae740255a908191b675c589a93bc207).

## Scope

- `/memories`: responsive Afterglow-style journal and community feed, private by default, explicit sharing confirmation, make-private control and paw reactions.
- Authenticated owners can write a journal entry. This records a self-reported story and never awards points.
- New committed curated missions, daily care and voice/text activity reports produce private keepsakes when the owner opens or refreshes Memories. Repeated delivery returns the same entry.
- Community contains only explicitly shared entries. `/memories?player=PLAYER_ID` filters a player's shared memories, linked from the map player card's **View shared memories** action. This is not GPS-based nearby discovery.
- Preset decorative artwork uses CSS/SVG. No live AI imagery, upload storage or extra API credentials are needed.

The host integration makes narrow changes to the shell/player-card navigation and adds completion metadata to existing progression and voice receipts. Reward rules, session identity, battle logic, avatar generation and hosted AI guards are unchanged. Alex's separate Community posts/leaderboard remain in their original tab. The earlier deferred battle draft is not part of this branch.

## Run the integrated app

In `web`, use the existing dependencies and database configuration:

```sh
npm ci
POKEPET_DATABASE_MODE=local POKEPET_RUNTIME_MODE=local POKEPET_LOCAL_MONGODB_URI=mongodb://127.0.0.1:27139 POKEPET_LOCAL_DATABASE=pokepet_local_memories_demo npm run dev -- --hostname 127.0.0.1 --port 3038
```

Open `http://127.0.0.1:3038` and use the main **Memories** tab. `/memories` remains available as a standalone journal. Both reuse `pokepet_session`; clearing the cookie does not recover the previous identity.

For a no-paid-API demo, open **Tell your story → Manual activities if voice or AI reporting is unavailable → Earlier adventures**, confirm an activity, then open **Memories**. The private card shows the awarded game points. Share it explicitly; another signed-in player can see it through the shared feed or map player card. Making it private removes access on the next request.

## Host connections

### Database and sessions

`src/server/memories/local-runtime.ts` now uses the host's `databaseConfig()` selection for local MongoDB or Atlas, with the same database name, session records and request guard. No separate credentials or configuration are introduced. Atlas selection is implemented; this integration was verified only against local MongoDB. Hosted/live-Atlas acceptance is still outstanding.

### Durable activity capture

`completionMemory()` creates stable, server-derived completion metadata. Progression and voice/text services store it in the same atomic update as the earned reward receipt. The reward path makes no call to the memories collection.

When the owner lists their journal, `syncCompletedActivities()` projects missing committed receipts through `recordMissionCompletion()`. IDs deduplicate by owner and command; ownership is checked and sharing/reactions are preserved. A failed journal write can be retried by refreshing, without rerunning the activity or awarding points again. Keepsakes use the original completion time and awarded amount. No raw voice audio, transcript or typed report is copied into the memory.

This is on-demand delivery, not a background worker. Historical receipts created before this integration lack completion metadata and are not backfilled. Existing progression limits still apply. Voice/text keepsakes use the generic title “A moment together”; live provider calls were not made during verification.

### Navigation

The main shell mounts `MemoriesExperience` with `embedded`, `active` and `playerId` props. It refreshes when opened and remains mounted to preserve unsaved drafts. The existing map player dialog opens that player's shared memories. The original Community posts/leaderboard and battle flows retain their ownership and behavior.

## API and storage

| Request                                         | Behavior                                                                  |
| ----------------------------------------------- | ------------------------------------------------------------------------- |
| `GET /api/memories?cursor=…`                    | Current player's private and shared journal, 24 entries per page          |
| `POST /api/memories`                            | `{commandId, title, note, kind}`; server-derived owner/pet, private entry |
| `GET /api/memories/:id`                         | Owner or authenticated reader of a shared entry                           |
| `PATCH /api/memories/:id/sharing`               | Owner-only `{shared, expectedVersion}`; stale changes rejected            |
| `GET /api/community/memories?player=…&cursor=…` | Shared entries, optionally filtered by player                             |
| `PUT /api/community/memories/:id/paw`           | `{active}` explicitly adds/removes current player's reaction              |

The `memories` collection is owned by this module. Saved names are snapshots, not live profile references. Public responses omit reaction participant IDs and internal deduplication fields. One atomic document holds visibility and reactions; reactions are capped at 1,000 distinct players per entry for this demo. Share and reaction changes are serialized in the UI; the server enforces privacy independently. Artwork is decorative and does not affect persistence or rewards.

## Minimal verification

```sh
POKEPET_TEST_MONGODB_URI=mongodb://127.0.0.1:27139 node --test test/memories.test.ts test/memories-integration.test.ts
npm run typecheck
npm run build
```

The focused integration test uses real isolated MongoDB records and leaves its named test database intact. It checks concurrent duplicate saves, mission retries, owner isolation, sharing/unsharing, stale privacy updates, reactions, pagination and reconnect persistence. It must not be pointed at Atlas or a shared production database.

Verified locally on 1 November 2026: production build and TypeScript passed; nine focused memory/progression/daily/voice tests passed with zero skips, including concurrent retries, restart recovery and failed memory delivery with earned points intact. Production HTTP smoke verified two sessions, completion/retry → one private keepsake → sharing → player-filtered feed → paw → unsharing, with points unchanged. Voice/text providers were stubbed; no paid requests were made. Changed module files passed Prettier; the project has no configured TypeScript lint command.

The integrated root page loaded in Safari with the existing player and registered players. The original standalone journal's save/share/reload and desktop/390px layouts were previously browser-verified. Full click-through of the newly integrated shell/player-card path remains a manual acceptance item: Safari was in active use for the user's mock, so testing did not interrupt that work. No live Atlas verification or deployment was performed by this integration.
