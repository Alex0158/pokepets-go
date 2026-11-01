# Owner and pet visual proof

Local workstream owned by Alex / Codex, 1 November 2026. Source of truth: the Space Architecture and Tech Spec and avatar entry in Feature Modules and Checkpoints. The later authorized image-job scope is specified in [PIPELINE.md](PIPELINE.md). All routes added here belong to the isolated lab server; no main Next.js routes, shared types, database files or package files changed.

## Intended behavior

Display a fictional owner and a separate invented puppy on a small tilted Three.js map. A labelled generated sample atlas supplies idle, move, attack and hurt frames. Clicking a destination or the accessible Walk button moves both characters and returns the puppy to idle. A fixture battle event plays an attack/hurt sequence once; it does not calculate damage. Mission selection remains usable if artwork or WebGL fails. A preset fallback is visibly labelled.

Initial owner/pet presets remain available. Separate synthetic owner/pet file inputs now drive bounded server jobs and either labelled fixture assets or a real OpenAI image edit, then independently update the renderer. Live references include an original AI-generated photorealistic pet image. GPS, durable persistence and multiplayer remain outside this module. No real personal photos were used.

## Interfaces and boundaries

- `manifest.json`: versioned local sheet URL, pixel dimensions, per-frame rectangles, seconds-based timing and loop flags. Custom game format, not a Codex pet package.
- `core.mjs`: manifest validation, frame/UV math, bounded movement and accepted-event filtering; no DOM, Three.js or scoring.
- `renderer.mjs`: creates/disposes a Three.js scene, renders fixture placements and animation states. Texture and WebGL errors fall back without deciding game outcomes.
- `app.mjs`: fixture controls, DOM status, mission selection and event presentation.
- `server.mjs` / `service/`: loopback-only preview and private job/asset routes, injectable fixture/OpenAI providers, input/output validation, no automatic retries, timeout, cancellation and bounded in-memory lifecycle. Only explicitly allowlisted static files and synthetic QA results are served publicly.

For integration, pass separate ownerAvatarAssetId and petSpriteAssetId; map snapshots carry approved asset references, never raw photos. Adapt actual shared MatchEvent (`matchId`, `commandId`, `version`, actor/target, `resultingHp`) at the app boundary; initialize the event cursor from the fetched snapshot so reconnect never replays old hits. Agree app-shell ownership before wiring this module.

## Verification

Write focused failing tests first for malformed/out-of-bounds sheets, frame timing/UVs, no movement overshoot, stale/duplicate battle events and reconnect baseline. Then run the isolated tests, full existing root unit suite, and real browser checks for idle/move, fixture attack/hurt, missing sheet, WebGL fallback and narrow layout. Automated frame math does not prove artwork quality or a live provider pipeline.

## Future live inputs

The synthetic-only path is implemented and live-tested. Before personal-photo adoption: decide consent/provider disclosure, authorized subjects, durable ownership/storage and retention/deletion, and connect the real app session. Reasonable API cost and secure key setup were explicitly authorized by Alex; no deployment/Atlas operation is included. A generation error preserves the prior usable character and unrelated mission/match progress.
