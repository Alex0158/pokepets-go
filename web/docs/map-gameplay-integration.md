# Main map and gameplay integration

Alex / Codex — Local UI integration verified, 1 November 2026. Source is stable for the coordinated release snapshot. Deployment and hosted acceptance belong to the main/release workstream.

## Current experience

- Cookie-backed player onboarding, separate owner/pet characters, and the teammate's procedural Haggerston 2.5D map with retained SVG fallback. All registered players appear automatically at fictional coordinates; no GPS or online-status claim. Own walking is local presentation only.
- Selecting a player offers Sneak attack against an isolated deterministic copy, or Face-to-face invitation with explicit acceptance and independent owner control. Normal navigation requires no manual IDs.
- Auto is on by default only while Battle is open and on the authenticated player’s legal turn. Manual off exposes small attack, big attack, heal, defend and flee. The UI shows Decisions versus deterministic fallback and uses authoritative HP, caps and escape results.
- Voice or typed activity is the primary report flow: explicit provider disclosure, OpenAI transcription/evaluation, server-saved rewards bounded to 0–20 points, and visible transcript/reason. Activities are self-reported. Daily feed/play and legacy missions remain an explicit manual fallback. Upgrades cost 5 points.
- Photo generation uses the avatar-owned consent/upload module. Owner and pet assets stay separate, private and temporary (five-minute access). Validated generated sprites appear on the map and own battle pet; presets remain labelled fallbacks. Community posts/comments/strength leaderboard are mounted from the Community-owned module.

## Boundaries and recovery

The server owns identity, points, upgrades, match participants and outcomes. Activation freezes both pets’ saved stats; later upgrades never refresh an active match. Practice and face battles award no points and do not alter the target owner’s progression.

Core commands persist their exact pending ID/payload in player-scoped browser storage before transmission. Uncertain retry/reload reuses it, blocks competing core writes, and ignores older snapshots. Voice retains input only in memory and persists command metadata only; an unresolved lookup never silently clears the ID. Audio input is bounded to 1 MiB/30 seconds, supports WebM/MP4/WAV, and rejects header-only WAV before provider work. Optional service errors remain visible without fabricating points or blocking unrelated navigation.

Character reload cache contains only player-scoped asset references, expiry and provenance categories, never raw photos, image bytes, manifests or credentials. Restoration re-fetches the authenticated manifest. Expiry/access failure returns to presets. Combat effects apply only to new authoritative events; hydration, stale reads and duplicate replies never replay damage.

## Actual local browser evidence

Two independent Chrome cookie sessions used `127.0.0.1:4194` and `localhost:4194` on retained local database `pokepet_local_map_ui_20261101`.

- Confirmed mission: 20 points → Attack purchase → 15 / Attack 11 → reload preserved. While the owned server was stopped, another upgrade stayed pending with unchanged balance. Restart/reload/retry committed exactly once: 10 / Attack 12; the existing match retained Attack 11.
- Registered-player map selection → isolated Sneak attack completed without B input; map invitation → B acceptance → both actual players attacked and agreed on HP/version.
- Daily meal and play added 15 each; Health purchase and reload retained 35 points. A valid synthetic WAV then passed actual OpenAI transcription/scoring and awarded 12 (35→47); typed synthetic interaction awarded 14 (47→61). Reload retained 61. The initial failed audio fixture had no samples; this was not a key, bundler or provider-access failure.
- Manual practice exercised all five moves: small damage; heal capped to maximum with a single use; big attack charge consumption; defend reduction; flee as escape with no winner/reward. Saved ordered events explain heal followed by the bot counterattack.
- Final-build Auto completed a fresh practice battle; visible final source was **OpenAI Decisions**. Final face challenge: B accepted, A Auto selected big attack (B 30→14), both switched Auto off, B fled, and both browsers showed escape / revision 3 with balances unchanged at 61 and 0.
- Exactly two actual OpenAI image generations succeeded using synthetic owner/pet inputs through the consent UI. Both distinct generated assets restored after browser reload and an actual process restart. B’s cookie could not read A’s private image (`not_found`). No personal photo was used for verification. The shared two-attempt budget is exhausted; do not regenerate this demo. Assets expire after five minutes.
- Fresh independent guest onboarding → labelled preset duo → Skip → registered-player map passed. Community’s separate owner verified publication, comments, leaderboard, restart and withdrawal in its isolated browser/database proof; see `community.md`.

Proof images: `map-ui-report-proof.jpg`, `map-ui-avatar-proof.jpg`, `map-ui-avatar-restart-proof.jpg`, `map-ui-auto-proof.jpg`, and `map-ui-face-escape-a-proof.jpg` / `map-ui-face-escape-b-proof.jpg`.

## Verification snapshot

- Required root suite with local replica set 27030, standalone 27028 and avatar Mongo opt-in: **106 total, 105 passed, zero failed, one deliberately gated paid Decisions test skipped**. Actual provider Auto was separately observed in Chrome. A sandboxed rerun could not connect to loopback; the corrected authorized run passed.
- The shared `next build --webpack` passed including TypeScript and all routes after the avatar owner’s cancellation/manifest-retry safeguard. A later hosted-only shared-quota hook requires the release owner’s next coordinated build; the local browser proof is unaffected. Focused failing-then-passing tests cover command recovery, ordering, voice retries, audio validation, asset-reference privacy and battle presentation.
- Avatar owner independently replayed the final production build through two Next processes on 4197/4198: main-session private asset access after process exit, owner isolation, idempotent receipt/shared budget and cancellation passed with synthetic fixtures and zero paid calls.
- Local preview is explicitly configured with BOTH `POKEPET_RUNTIME_MODE=local` and `POKEPET_DATABASE_MODE=local`. Atlas credentials in `.env.local` must not be printed or committed. This lane performed no Git push or deployment.

## Ownership and release limits

UI-owned: `app/page.tsx`, `app/game/`, the game/voice/world/presentation/audio/character-cache client adapters, focused tests, `public/game/`, and this handoff. Backend/shared types, avatar service/setup and Community modules retain their separate owners. Existing dirty files, teammate mock/reference work and databases were preserved.

This evidence proves local browser plus live-provider integration. It does not prove Atlas-backed UI, hosted proxy/network/key configuration, public-guest abuse controls or real-device acceptance. A browser viewport override did not change the actual 1200px viewport and was reset; mobile CSS is implemented but not accepted from that attempt. Hosted voice/avatar policy and release configuration must be verified by the release owner. The shell’s Memories view remains a legacy-completion list; Sean’s separate journal/feed handoff is not integrated here.

## Artwork provenance

Afterglow artwork/wording reused from teammate remote `main/mock/` without changing refs: `app.js` blob `1dc7684214a0de02f298bc37b9b9fc77879cf912`, `index.html` blob `26efe4daabf55eda61b9cf9c6aad8c642c31597a`. Extracted the background and distinct owner/pet presets. Simulated rewards, balances, fixture community and the incompatible four-move controller were not imported. No third-party arena bundle was copied.

## Interactive map release follow-up

The isolated renderer/wrapper workstream adapted teammate `mock/map.js` at commit `7ba16a3e528e58301294044679f0c041b2f69d68`; see `teammate-map-integration.md`. This UI workstream connected it through `GameShell` and a tested optional world-projection adapter. Existing real-player selection, invitations, voice, Daily care and private `CharacterArt` remain connected. A registered-player chooser keeps crowded/offscreen markers accessible. The mock's fixture players, local economy and simulated battle controller were not imported.

Actual Chrome local proof: Walk right moved the owner/pet duo from pixel `(283.9,220.5)` to `(313.6,236.3)`; a background click subsequently reached `(414,346.8)`. Camera rotation moved B's projected marker from `(489.2,281.2)` to `(481.4,283.9)`. Selecting B opened the existing two-mode dialog without changing own position. Walking neither awards points nor sends a world-position mutation; balance stayed 56. Position is not shared or retained through remount/reload.

The final browser viewport was genuinely **375×844** (DOM measured). An observed toolbar/status overlap was corrected by placing the toolbar below the scene. Final canvas bottom and toolbar top both measured 632.5 px; the status ended at 626.5 px. Pause/Resume, zoom, SVG → real-roster chooser → B's dialog, and SVG → 3D restoration passed. The viewport was reset to 1200×829. This supersedes the earlier ineffective viewport attempt, but does not establish real-device acceptance.

Final current required DB-enabled suite: **134 total, 133 passed, zero failed, one paid Decisions test skipped**; production webpack build including TypeScript and root syntax/diff checks passed after the mobile correction. Renderer/projection focused tests are 8/8. New map screenshots use labelled presets; this lane made no new paid avatar calls. Earlier live-avatar proof remains separately scoped. Proofs: `interactive-map-mobile-proof.jpg`, `interactive-map-desktop-proof.jpg`, `interactive-map-first-movement-proof.jpg`. Code is frozen for the release owner; this lane did not push or deploy.
