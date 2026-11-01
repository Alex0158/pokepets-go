# Avatar lab

Locally runnable visual proof: a separate original preset owner and text-generated sample puppy on a fictional Three.js map. Idle/move animate from a validated atlas. A fixture button previews attack and hurt poses. Missing artwork switches to a labelled preset; unavailable WebGL retains separate static characters and mission controls.

## Run

From `web/`, with the skeleton's existing `node_modules/three` installed:

```sh
node avatar-lab/server.mjs
```

Open [http://127.0.0.1:4186](http://127.0.0.1:4186). This preview binds only to localhost and serves an explicit file allowlist. It is independent of Next.js and the parallel database server; it does not change the main application entry. Override the port with `AVATAR_LAB_PORT=4187` if needed.

```sh
node --test avatar-lab/test/core.test.mjs
```

Use **Walk together**, **Idle**, **Play fixture attack + hurt**, or click the ground. The gold map marker and mission button select a sample mission; they award nothing. Expand **Asset provenance and failure checks** for a missing-sheet simulation and [disabled-WebGL preview](http://127.0.0.1:4186/?webgl=off).

## Boundaries and handoff

- All additions are in `web/avatar-lab/`. No app entry, backend, package/lockfile, shared types or existing docs are edited by this workstream. Preserve concurrent database/mission changes.
- The puppy is an original generated sample, not an uploaded pet. The owner is a code-drawn preset. No upload controls, photos, credentials, external API usage, GPS, rewards, persistence or multiplayer are implemented.
- The custom 4 × 4 manifest is not a Hatch Pet/Codex package. Codex Pets Web is researched, not installed. Exact source/license/revisions and the complete generation prompt are in [GENERATION.md](GENERATION.md).
- App integration is pending. Extract or bundle the renderer and pass the installed Three.js import through the app build; the proof currently uses its localhost server's `/vendor/three.module.js` route. Agree ownership before adding a Next.js route or editing the app shell.
- The event cursor accepts `matchId`, `commandId` and `version`; production UI must adapt the actual shared `MatchEvent`, hydrate the current snapshot first, then play only fresh accepted events. Attack/hurt here are a pose demonstration on one pet; there is no real opponent or damage engine. Use authoritative `resultingHp` for UI and never compute outcomes in this renderer.
- Proposed future generation boundary: `{subject: 'owner' | 'pet', inputAssetId}` → server-validated generation → `{status, approvedAssetId, manifest?}`. Keep subjects and asset references independent. Consent, retention/deletion, upload limits, authentication, cost and timeout/retry behavior must be agreed before real uploads; a failure preserves the previous approved asset. No runtime endpoint exists in this proof.

The [Space roadmap](https://chatgpt.com/space/page_6ae7456c281c81918228989bd2cbf4d6) and [avatar checkpoint](https://chatgpt.com/space/page_6ae740255a908191b675c589a93bc207) track local proof separately from integrated/live acceptance. See [verification](verification/RESULTS.md).
