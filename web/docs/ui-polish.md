# Afterglow UI polish handoff

Alex / Codex — Presentation complete and locally browser-verified, 1 November 2026. No push or deployment from this workstream.

## Reference and design

Compared the actual canonical live homepage with the teammate's latest mock homepage at `main` commit `6e1f3c8f59a080a422c82b5dc7cfb354a9672462`. The pinned homepage reference was served read-only on local port 4196; teammate source files were preserved. The main difference was composition: stacked navigation, identity and voice rows pushed our map to about 445 px, while the mock used a narrow rail and compact header.

- Palette follows the requested mock: midnight `#11131c`, panel `#191c28`, line `#2b2f3e`, text `#f2f2f5`, muted `#9095aa`, lime `#d5fb78`, with the existing lavender accent.
- Arial/Helvetica is retained deliberately to match the actual reference; no font download or new dependency.
- Desktop uses an 88 px navigation rail, compact saved-identity header, smaller hero, compact voice disclosure, map and pet-led sidebar. The map begins at about 263 px while keeping the cross-game voice entry visible.
- Mobile keeps all eight text-and-icon navigation actions in a four-column grid. The verified map toolbar stays below its scene. Focus indicators and reduced-motion handling remain.

```text
Desktop: [rail] [header / hero / voice entry                ]
                [interactive map       ][pet + actual stats]
                [activity action       ][challenge / daily]
Mobile:  [header] [4 × 2 navigation] [hero / voice / map]
```

The portrait card uses the real saved stats and a separate owner row with existing `CharacterArt`; it does not import the mock's fictional levels, XP, friends, missions or battle controller. Existing challenge, Daily care, upgrades, Community and avatar callbacks are retained. Characters now correctly marks its navigation item as current while onboarding is open.

## Verification

Actual Chrome local checks at 1200×829 and 375×844 verified the homepage composition and mobile navigation. Daily care retained saved completions; an existing active face match retained revision 3 / authoritative HP with Auto switched off and all five manual actions visible; Community retained the real strength leaderboard and publication controls. Characters retained separate owner/pet presets and explicit fallback. No game reward or battle command was executed by these presentation checks; the local balance remained 56.

Final production webpack build including TypeScript passed. Required DB-enabled suite: **140 total, 139 passed, zero failed, one deliberately gated paid Decisions test skipped**. Root syntax and diff checks passed. The final CSS-only correction hides the idle Realtime audio element despite an earlier display rule; actual DOM verified `hidden=true`, `display=none`, and no remote stream.

Proofs: `ui-polish-desktop-proof.jpg`, `ui-polish-mobile-proof.jpg`, `ui-polish-battle-mobile-proof.jpg`, and `realtime-ui-idle-proof.jpg`.

## Realtime UI seam

`RealtimeConversation.tsx` consumes the separately owned local WebRTC transport. It provides explicit consent, Start/Stop, microphone state, in-memory live transcripts and remote audio. Closing the panel, hiding the page, or unmounting stops the session. Buffered recording is disabled during a live session; typed/recorded fallback remains.

A finalized user turn can only be copied into the existing command field. The user must still choose Interpret and confirm the normal game action; model function events never execute game mutations. Hosted start is disabled in the component and backend until separately enabled/accepted. This UI workstream checked idle/consent controls without starting a real microphone session. The transport owner's separate synthetic-speech WebRTC proof is not main-UI conversation acceptance.

## Release boundary

Owned source is frozen: `GameShell.tsx`, `GameVoicePanel.tsx`, new `GameIcon.tsx`, `polish.css`, and `RealtimeConversation.tsx`. The renderer, Community and backend modules retain their owners. Durable saved/shared avatars are a separate pending contract; this cosmetic slice preserves the existing temporary-asset behavior and makes no new sharing claim. Real microphone, hosted Realtime UI and durable-avatar acceptance remain separate.
