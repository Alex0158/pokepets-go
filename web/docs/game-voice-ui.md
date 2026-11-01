# Cross-game voice UI and navigation handoff

Alex / Codex — Local browser integration verified, 1 November 2026. Built after release snapshot `0247443`; this workstream did not push or deploy the changes.

## Experience and boundaries

The persistent **Talk to your game** panel accepts typed text or local audio after OpenAI disclosure. Interpretation returns a proposed intent, never a reward or mutation. Help shows current saved points and actual rules. Screen navigation, stat upgrades, player selection, challenges and activity drafts require a visible confirmation. Unknown requests remain non-executable.

- Upgrade confirmation names the stat and 5-point cost, then calls the existing `GameClient` mutation/retry path. A missing stat requires selection.
- Player names and pet names resolve by exact case-insensitive match against the authenticated world roster. Duplicate/absent matches require an explicit player choice. The roster is refreshed before confirmation. Selection opens the existing map action dialog; it never silently invites someone.
- Challenges require a current target and explicit Sneak/Face mode. Face-to-face creates the normal waiting invitation; the actual other owner still accepts. The preview explains default Auto on entry to Battle.
- An activity intent copies its transcript into **Tell your story** as an in-memory draft. Scoring consent resets; a separate explicit submit is required. Existing voice reward IDs/recovery remain unchanged.
- Uncertain core writes recover through **Retry pending request** with the same ID and payload. New voice actions do not bypass a pending core or activity write. Raw command audio/text is never put in browser storage; closing/reloading loses it.
- Recording is explicit, limited to 30 seconds/1 MiB, and stops when the panel closes. An outstanding microphone permission result is discarded after close/unmount. Provider errors preserve manual controls. A disabled hosted route shows an unavailable message; hosted enablement/quota and Vercel acceptance belong to the backend/release owners.

## Navigation corrections

**Challenge another player** now opens Explore with instructions to click an owner/pet marker. Battle also provides **Find a player on the map**. **Daily care** is in primary navigation and the home duo card, alongside the voice-first activity entry. It remains usable without OpenAI. A later integrated 2.5D map adds local-only own-avatar walking; other-player positions remain fictional, with no GPS or shared movement. See the release follow-up in `map-gameplay-integration.md` for current map browser evidence.

## Actual local evidence

Chrome used the existing retained local session/database and live OpenAI:

- Points question returned the current 61-point balance and rules; no reward was awarded.
- Explicit Attack upgrade showed a proposal with 61 points unchanged. Confirmation committed the normal 5-point purchase to 56; reload/process restart retained 56.
- A challenge naming Map Explorer B showed the real roster target, missing mode, and disabled confirmation. Choosing Face-to-face and confirming created the real waiting invitation at revision 0; balance remained 56.
- Selecting Map Explorer B and confirming opened the existing two-mode map dialog without sending another invitation.
- Final-build request to select a pet named Companion found three real roster matches, left the player selection empty and disabled confirmation. Cancel closed the proposal without a game command; balance stayed 56.
- A valid synthetic WAV was transcribed as a five-minute dog-play report. Review copied the transcript into the activity textarea, reset scoring consent, and left the balance at 56. No activity-scoring request was sent by interpretation or draft transfer. Microphone capture was not exercised.
- Final-build navigation: home challenge CTA stayed on the player map with guidance; clicking B opened the two-mode dialog. Daily care opened directly from primary navigation; A showed saved completions, independent B showed both unfinished tasks with confirmation checkboxes/buttons. Battle's map-return button worked.

Proof images: `game-voice-help-proof.jpg`, `game-voice-mode-choice-proof.jpg`, `game-voice-activity-draft-proof.jpg`, `game-voice-ambiguous-player-proof.jpg`, `map-challenge-navigation-proof.jpg`, `daily-care-navigation-proof.jpg`, and `daily-care-open-tasks-proof.jpg`.

## Verification and ownership

Focused client tests were written failing first, then passed: bounded response parsing, duplicate/partial-name handling, and explicit allowed command mapping. Existing retry tests remain in force. Final required local suite: **125 total, 124 passed, zero failed, one deliberately gated paid Decisions test skipped**. Web TypeScript and shared production `next build --webpack` passed after the hosted intent quota changes and final UI guards. Root syntax and diff checks passed.

UI owns `GameVoicePanel`, `game-intent-client`, its focused test, and minimal `GameShell` / `WorldPlayers` / `VoiceActivity` / `BattlePanel` / CSS hooks. Backend intent/provider/quota files retain their separate owner. `game-voice-intents.md` describes that contract. Local proof does not establish Vercel HTTP voice access, public-guest abuse controls, real-device acceptance or physical map movement.
