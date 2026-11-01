# Community module

Owner: Alex / Codex. Scope: separate image posts, comments and a saved pet stat leaderboard. Sean's private journal, shared-memory feed and paw reactions remain separate. No progression, battle, session or map writes.

- Ranking: health + attack + defence + speed from saved progression, falling back to immutable pet base stats. Descending total, then ascending player ID. This is fictional pet strength, not lifetime earnings or verified care. Top 20 registered players; tied scores use deterministic positions.
- Image posts: authenticated players only, never anonymous image URLs. Anyone with app access can create a player session and view posts; this is not a private team or trusted-members boundary. Explicit sharing consent; JPEG/PNG input up to 512 KiB and 12 million pixels; decode, rotate, resize to 1280px and re-encode JPEG without metadata. Store bounded binary inside MongoDB, never repository/public disk or serverless filesystem. A private preview stays in browser memory until Publish. Never reuse avatar photos automatically.
- Retention: visible for 7 days, then inaccessible immediately by query and eventually removed by Mongo TTL. Owner withdrawal immediately removes stored image/caption/comments and retains only a retry tombstone until expiry. This does not remove other people's screenshots/downloads or database backups.
- Comments: authenticated plain text, 280 characters, at most 100 per visible post. Every write is a fixed command ID/payload; identical retries return the existing result, changed payloads conflict. Withdrawal prevents subsequent reads/comments. No HTML rendering, external image URL fetch, location, real names requirement, AI scoring or fixtures.
- Failure: Community errors stay within its component; no game state changes. Existing core host/origin/session rules apply, including the deployment owner's exact configured HTTPS origin contract. Hosted operation is not verified by local tests.

API: `GET /api/community/leaderboard`, `GET/POST /api/community/posts`, `GET /api/community/posts/:id/image`, `POST /api/community/posts/:id/comments`, `POST /api/community/posts/:id/withdraw`. All reads require the existing HttpOnly session. POST JSON requires same origin. Responses are private/no-store.

UI seam: `CommunityPanel({playerId: string})` from `src/features/community/CommunityPanel.tsx`; CSS is scoped in its own module. Map owner mounts it without changing backend/runtime ownership.

Runtime uses the installed Next.js dependency `sharp` for real image decoding; an unavailable decoder returns a module error and never stores unvalidated content. Independent Mongo connection reuses `databaseConfig()` and existing backbone authentication; it initializes only its own collection indexes.

Verification: Community focused tests **5/5 passed**. Full project snapshot: **80 tests, 78 passed, zero failed, two skipped** (standalone activation URI and paid live Decisions opt-in absent). The previously skipped standalone activation check then passed **1/1** against the existing isolated local standalone on port27028. Paid live Decisions was not run by this workstream. Typecheck and diff checks passed. Atlas and hosted operation remain unverified by this workstream.

## Main app browser evidence

The map owner mounted `CommunityPanel` in the Community tab and keeps it mounted across navigation. Tested the coordinated Next.js 16.4.3 Webpack production build on separate loopback processes `127.0.0.1:4203` and `[::1]:4204`, with fresh isolated database `pokepet_local_community_ui_01a197b8`, no API key and no live provider calls.

- Independent A and B browser sessions load the same backend-derived ranking. Both start at 47 fictional stat points, ordered deterministically.
- A selects a synthetic 640×400 PNG. Only a private local preview appears; Publish remains disabled until explicit consent. Publishing creates a database-backed JPEG that B loads at its real dimensions.
- B publishes `Hello <b>friend</b> — literal text from session B`. A sees literal angle-bracket tags as plain text; no HTML executes. B has no owner withdrawal control.
- A reload, then an actual restart of only the owned port4203 process, preserves the image and comment through MongoDB; no filesystem upload store is involved.
- A's main-app daily meal awards 15 points, then an Attack upgrade spends 5. Both Community views update A from 47 to 48 stat points and rank A first while the spendable balance is 10.
- A withdraws the synthetic post; both sessions show an empty feed after refresh. Unit/API tests additionally verify bytes/caption/comments are removed and future authenticated image reads return 404.

Screenshots before withdrawal: [Shared post and literal comment](community-browser-proof.jpg), [Updated ranking after process restart](community-browser-rank-proof.jpg). All image content is a deliberately flat synthetic test fixture, not a real pet/photo or seeded participation.

The browser-verified build preceded the final connection-timeout-only adjustment in `community/runtime.ts`; the adjustment passed TypeScript and a current-source actual-runtime smoke using fresh isolated local database `pokepet_local_community_runtime_01a197b8`: authenticated leaderboard/feed both 200, wrong host 403. It uses explicit Mongo connection/socket/queue/write-concern timeouts instead of deprecated `timeoutMS`; include it in the next coordinated build. No game/session/progression/Atlas config files were changed by this workstream.

Limits: current session identities do not provide account recovery, trusted membership, moderation or abuse protection. Pending write bytes remain in tab memory across panel navigation; closing/reloading the tab loses them. Reload the feed before publishing again after an interrupted request. Existing post/comment receipts persist in MongoDB; a withdrawn tombstone cannot republish on retry during its retention window. Do not treat this hackathon feature as a public production upload service.
