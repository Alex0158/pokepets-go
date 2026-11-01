# Teammate map integration

The neighborhood backdrop adapts `mock/map.js` from teammate commit `7ba16a3e528e58301294044679f0c041b2f69d68`. It is an original Canvas 2D projection of an illustrative Hoxton-area scene, not GPS, a map service, or surveyed geometry. Original map references and provenance remain in `mock/README.md`.

`src/features/map/neighborhood-map.mjs` owns only a dedicated canvas and exposes normalized-position projection, inverse projection and lifecycle controls. `app/game/InteractiveWorld.tsx` owns local-only owner/pet movement and uses existing private `CharacterArt` assets. Real registered-player buttons, sessions, missions and battle commands remain with the existing app and backend; world positions are fictional. Camera rotation, zoom and resize notify the React overlay so displayed players stay anchored. Player-marker clicks never start a walk. No movement is persisted or shared.

Map rendering is optional: a failed canvas mount leaves the SVG backdrop and React controls usable. Static map mode, zoom, recenter, pause, keyboard walking, reduced-motion behavior, hidden-tab throttling and teardown are implemented. Existing owner/pet asset expiry and fallback continue unchanged.

Focused TDD initially failed for the absent module; subsequent projection roundtrips, invalid input, bounded movement, camera interaction, sibling preservation and partial-mount cleanup tests pass. The separate `world-projection.test.ts` verifies actual roster placement and safe fallback. Browser and full-suite evidence must be recorded after the final coordinated build; no GPS, hosted deployment or real-device result is implied.
