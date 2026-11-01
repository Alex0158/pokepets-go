# Initial local verification

Earlier local fixture checkpoint, 1 November 2026, Alex / Codex. Superseded for live image generation by LIVE-RESULTS.md; retained as the initial visual proof evidence. No push or deployment.

## Automated evidence

- Focused tests were written before implementation; the initial run failed because `core.mjs` was absent. They then passed after implementation.
- Focused suite verifies PNG/manifest dimensions, malformed sheets and bounds, looping/non-looping frame timing, top-left-to-UV conversion, bounded movement without overshoot, stale/duplicate battle-event filtering and initial/reconnect baseline behavior.
- Localhost HTTP smoke passed for the page, manifest, generated PNG and two Three.js modules; API/config routes and POST are unavailable.
- Syntax checks pass for `app.mjs`, `renderer.mjs` and `server.mjs`.
- The root `npm test` run during this work passed 20 tests, skipped one opt-in MongoDB integration test, failed zero. It included concurrent database/mission tests as present at that moment; this is not independent live-database acceptance. Root `npm run check` passed. The database workstream records its own real-DB/HTTP evidence separately.

## Chrome browser evidence

- Separate owner and pet are visibly present in the tilted Three.js scene. Owner SVG initially failed to appear as a WebGL texture; explicit SVG width/height fixed it and the result was visually verified.
- Idle frame labels change; **Walk together** changes state to `move`, advances frames and world position, then returns to idle at the destination. **Idle** stops walking.
- Fixture action produced `attack` and then `hurt` frames. These display a scripted local event, not combat acceptance.
- **Simulate missing sheet** returns the expected missing-asset failure, visibly switches both map and portrait to a labelled preset and retains walking and sample mission selection. **Restore sample** reloads the generated atlas.
- `?webgl=off` displays both static preset characters. Selecting the sample mission works without importing Three.js. This tests the disabled/unavailable renderer path, not a physical GPU context loss.
- At a 390 × 844 viewport, the scene and controls reflow; measured document width and viewport width both equal 390. Three.js walking works; static fallback was also inspected at this width. This is desktop Chrome responsive emulation, not real-device acceptance.
- Screenshots: [desktop](desktop.jpg), [mobile](mobile.jpg). Browser viewport override was reset after verification.

## Remaining gates

Live owner/pet uploads and likeness, account-specific Image 2.5 API access, photo lifecycle, production animation alignment, actual server-event/UI wiring, two-player battle visuals, persistence/reconnect through the integrated UI, real mobile/GPU testing and hosted deployment are unverified. Real input/generation/Atlas/deployment work needs the relevant authority. Existing main app has not been replaced by this proof.
