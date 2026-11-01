# Map adventure core

Local implementation proposal, 1 November 2026. This does not assign teammate ownership or approve the wider roadmap.

## Sources and scope

- [Gameplay and Concept](https://chatgpt.com/space/page_6ae737e8939c819182db0903037dd8b5), read at sequence 5.
- [Initial Idea Draft](https://chatgpt.com/space/page_dea405f342fc81918daab7e603d81404), read at sequence 19: adventures, memories and community lead; battles are optional.
- Final sync: Gameplay and Concept sequence 9 retains the same text. [Open Source Stack Research and Demo Recommendation](https://chatgpt.com/space/page_6ae73d6627c4819199c9f1b801afe501), sequence 0, proposes retaining this native-module core; it does not assign team ownership.
- Parent activity `AGENTS.md` and Builders Guide checklist. Submission deadline: 17:00 GMT today. No submission or deployment is authorized here.
- Remote `main` at `65e44ccfefca3b21f5f058a6289a01ba21f35cf3` contains only the original README. No other remote branches or PRs were observed before implementation. No stack or owner assignment is recorded in the read Pages.

## Intended demo

Choose a preset companion and name → select a mission on a fictional neighborhood map → owner confirms completion → receive fixed points and a journal memory → spend points on a fictional attribute → reload with progress retained.

- Three fixed missions cover outdoor exploration, at-home play and quiet bonding. Owners choose what suits their pet. No activity tracking, nutrition scoring or location collection.
- Each mission awards points once per local demo profile. Confirmation is required; selecting or cancelling a mission earns nothing.
- One completion event updates points, the journal and the local contribution to a clearly labeled simulated community goal. Fictional stats cost five points per upgrade; balances cannot go negative.
- Store validated versioned state in browser localStorage. If unavailable, continue in memory with a visible persistence warning. Preserve unreadable stored data; do not silently overwrite it.
- Display local preset art. Optional future artwork adapters must time out and fall back without blocking or undoing rewards. No live AI call, credential, external map, geolocation, multiplayer, battle, voice or Three.js is included.

## Small backbone and interfaces

- `game.js`: immutable state transitions; profile, completion and allocation rules.
- `missions.js`: curated sample catalogue and map positions.
- `storage.js`: versioned persistence and validation; failures return status rather than throwing into UI.
- `memory-art.js`: optional artwork boundary; local badge fallback.
- `map.js`: static map surface and accessible mission buttons.
- `app.js`: renders state and connects explicit user actions to the modules.

Assumed stack: native browser ES modules, CSS, inline SVG map and Node built-in server/test runner. No package installation or external runtime requests are needed. Keep API credentials server-side if live integrations are authorized later.

## Acceptance and verification

Focused tests first: confirm-before-reward, duplicate prevention, point allocation, reload preservation, corrupted/blocked storage, optional provider rejection and timeout. Run the full unit suite and syntax checks. Verify the actual browser flow, reload, mobile layout and fallback behavior. Automated checks do not establish real-owner usability or live-provider behavior.

## Visual direction

Map as a playable park board, with compact pet and mission side panels. Left-aligned text; rounded system sans headings, native sans body. Palette: park green `#daedcf`, deep forest `#183d34`, river blue `#96cee8`, path white `#ffffff`, reward yellow `#f7ce63`, lilac `#c8b7ed`. Use a single clear selected destination and responsive stacked layout. The map is the distinctive element; avoid extra dashboard decoration. Review against the brief: no marketing hero or oversized metric cards; the first screen is already playable.

## Integration handoff

This branch is local only. Shared Pages remain unchanged. Recheck remote branches, PRs and Space changes before any later integration or push; preserve teammates' work. Current work owns only this local prototype, not the team's overall implementation.
