# Owner and pet visual proof

Local workstream owned by Alex / Codex, 1 November 2026. Source of truth: the Space Architecture and Tech Spec and avatar entry in Feature Modules and Checkpoints. This isolated proof adds no application routes, shared types, database changes or package changes.

## Intended behavior

Display a fictional owner and a separate invented puppy on a small tilted Three.js map. A labelled generated sample atlas supplies idle, move, attack and hurt frames. Clicking a destination or the accessible Walk button moves both characters and returns the puppy to idle. A fixture battle event plays an attack/hurt sequence once; it does not calculate damage. Mission selection remains usable if artwork or WebGL fails. A preset fallback is visibly labelled.

The owner is an original code-drawn preset. The pet atlas is a text-generated synthetic sample, not based on photos. There is no upload form, API key, provider request at runtime, GPS, persistence or multiplayer in this proof.

## Interfaces and boundaries

- `manifest.json`: versioned local sheet URL, pixel dimensions, per-frame rectangles, seconds-based timing and loop flags. Custom game format, not a Codex pet package.
- `core.mjs`: manifest validation, frame/UV math, bounded movement and accepted-event filtering; no DOM, Three.js or scoring.
- `renderer.mjs`: creates/disposes a Three.js scene, renders fixture placements and animation states. Texture and WebGL errors fall back without deciding game outcomes.
- `app.mjs`: fixture controls, DOM status, mission selection and event presentation.
- `server.mjs`: localhost-only static preview; only this directory and two installed Three.js modules are served.

For integration, pass separate ownerAvatarAssetId and petSpriteAssetId; map snapshots carry approved asset references, never raw photos. Adapt actual shared MatchEvent (`matchId`, `commandId`, `version`, actor/target, `resultingHp`) at the app boundary; initialize the event cursor from the fetched snapshot so reconnect never replays old hits. Agree app-shell ownership before wiring this module.

## Verification

Write focused failing tests first for malformed/out-of-bounds sheets, frame timing/UVs, no movement overshoot, stale/duplicate battle events and reconnect baseline. Then run the isolated tests, full existing root unit suite, and real browser checks for idle/move, fixture attack/hurt, missing sheet, WebGL fallback and narrow layout. Automated frame math does not prove artwork quality or a live provider pipeline.

## Future live inputs

Owner photo → validated server-side appearance request → approved owner asset; pet photo → separate request → pet sheet and validated manifest. Before implementing: decide consent, upload size/type limits, photo retention/deletion, job timeout/retry and provider access/cost. A generation error must preserve the prior approved asset and earned progress. No live implementation is authorized by this spec.
