# Memories and community handoff

Owner: **Sean / Codex**. Branch: `codex/sean-memories-community`, based on `origin/codex/nextjs-skeleton` at `c1e569b`. Ownership follows [Feature Modules and Checkpoints](https://chatgpt.com/space/page_6ae740255a908191b675c589a93bc207).

## Scope

- `/memories`: responsive Afterglow-style journal and community feed, private by default, explicit sharing confirmation, make-private control and paw reactions.
- Authenticated owners can write a journal entry. This records a self-reported story and never awards points.
- Server-confirmed mission occurrences can produce a private keepsake through `MemoriesService.recordMissionCompletion`. Repeated delivery returns the same entry.
- Community contains only explicitly shared entries. `/memories?player=PLAYER_ID` filters a player's shared memories, ready for a link from Alex's player card. This is not GPS-based nearby discovery.
- Preset decorative artwork uses CSS/SVG. No live AI imagery, upload storage or extra API credentials are needed.

All changes are additive. Alex's map, sessions, missions, progression, battle logic, avatar generation and Atlas configuration remain untouched. The earlier deferred battle draft is in a different worktree and is not part of this branch.

## Run against the skeleton

In `web`, use the skeleton's existing dependencies and local MongoDB configuration:

```sh
npm ci
POKEPET_LOCAL_MONGODB_URI=mongodb://127.0.0.1:27139 POKEPET_LOCAL_DATABASE=pokepet_local_memories_demo npm run dev -- --hostname 127.0.0.1 --port 3037
```

Open `http://127.0.0.1:3037/memories`. An existing Pokepet cookie is reused. Otherwise, the explicit start-journal form uses the existing `/api/session` endpoint. This retains the skeleton's browser-session identity limitations; clearing the cookie does not recover the previous identity.

Use a second browser session to see shared entries and react. Private entries must be absent. Making an entry private removes it on the next feed refresh; previously viewed content cannot be recalled from another person's memory or screenshots.

## Alex integration points

### Use the app's database and sessions

`src/server/memories/local-runtime.ts` is a thin adapter for the skeleton's local-only configuration. At integration, replace only its connection adapter with Alex's existing runtime. The reusable factory accepts the existing services:

```ts
const memories = new MemoriesService(existingDb);
await memories.initialize(); // indexes on the memories collection only
const handler = createMemoriesApi(
  memories,
  existingBackboneService,
  existingRequestGuard,
);
```

The guard must validate host/origin and JSON content type for mutations. Authentication still resolves the existing `pokepet_session` cookie through `actor()`. No client-submitted owner ID is trusted for writes. Atlas is an integration dependency owned by Alex; this branch does not create a second configuration or claim Atlas verification.

### Record a completed mission

After the existing progression handler durably commits a reward, pass its canonical completion data to the server-only method:

```ts
await memories.recordMissionCompletion({
  ownerId: authenticatedPlayer._id,
  petId: savedPet._id,
  completionId: committedCompletion.id,
  missionId: committedCompletion.missionId,
  title: committedCompletion.title,
  kind: "play",
  completedAt: committedCompletion.completedAt,
  rewardPoints: committedCompletion.awardedPoints,
});
```

These variable names illustrate the mapping, not a claim about Alex's unpushed schema. `completionId` must identify one occurrence, including the canonical day for daily missions; all payload fields must be stable across retries. The method checks owner/pet association, deduplicates by owner and completion, records the awarded amount without changing progression, and rejects conflicting replays. There is no browser endpoint accepting mission/reward claims.

If the keepsake write fails after a mission commit, keep the earned reward and retry this hook using the saved completion. A durable outbox or backfill from confirmed completion records is the host integration's responsibility. Automatic mission capture is not connected in this older skeleton because Alex's authoritative completion code is not pushed yet.

### Mount the UI

Link the existing shell to `/memories`, or import `src/features/memories/MemoriesExperience.tsx`. Styling is scoped with a CSS module. Link a selected player to `/memories?player=${encodeURIComponent(playerId)}`; only that player's public entries are returned. No shared shell or map file has been edited.

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
POKEPET_TEST_MONGODB_URI=mongodb://127.0.0.1:27139 node --test test/memories.test.ts
npm run typecheck
npm run build
```

The focused integration test uses real isolated MongoDB records and leaves its named test database intact. It checks concurrent duplicate saves, mission retries, owner isolation, sharing/unsharing, stale privacy updates, reactions, pagination and reconnect persistence. It must not be pointed at Atlas or a shared production database.

Verified locally on 1 November 2026: the focused real-MongoDB test passed; production Next build and TypeScript check passed; production HTTP routes passed a two-session private-save/share/paw/unshare check. Safari verified session creation, journal creation, explicit sharing, reload persistence and community display, with desktop and 390px responsive layout inspection. Formatting was checked with Prettier; the skeleton has no configured TypeScript lint command. No Atlas writes, live location discovery, live AI requests or deployment were performed. Alex's mission-completion/runtime/shell wiring remains the integration handoff.
