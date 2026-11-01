# Avatar lab

Local owner/pet image-job feature with separate inputs, private bounded server jobs, validated sprite manifests and independent Three.js characters. Three actual OpenAI API requests passed with synthetic references, including an AI-generated photorealistic pet photograph. See [live evidence and measured usage](verification/LIVE-RESULTS.md). The [same-origin main-app seam](../docs/avatar-main-seam.md) has authenticated routes, an optional onboarding component, prior-build Next HTTP proof and new independent-process Mongo/HTTP source evidence. Current packaged/browser acceptance and real-photo likeness remain separate gates.

## Run

From `web/`, with existing Three.js 0.187.0 and Sharp 0.35.5 installed by the skeleton. No dependency/package files were changed.

```sh
node avatar-lab/server.mjs
```

Open [http://127.0.0.1:4186](http://127.0.0.1:4186). This preview binds only to localhost and serves an explicit file allowlist. It is independent of Next.js and the parallel database server; it does not change the main application entry. Override the port with `AVATAR_LAB_PORT=4187` if needed.

Default mode uses the labelled fixture provider with zero external calls. **Load cached live test results · no API call** displays the preserved real API outputs after reload. The current review preview is [http://127.0.0.1:4188](http://127.0.0.1:4188), running with zero remaining paid requests. To explicitly start another bounded synthetic live session with the already approved ignored env file:

```sh
AVATAR_PROVIDER=openai AVATAR_MAX_REQUESTS=2 AVATAR_LAB_PORT=4188 node --env-file=avatar-lab/.env.local avatar-lab/server.mjs
```

Select a synthetic PNG/JPEG (max 4 MiB) independently for owner or pet, confirm the synthetic-only declaration, and submit. The selected input goes only to that subject's request. No automatic API retries. A two-request allowance is the default; the configured maximum is 0–4. Cancellation/timeout stops local delivery/waiting but does not guarantee that an upstream request is unbilled. This standalone lab remains synthetic-only. The main-app seam separately implements authorized uploader consent and disclosure for personal-photo mode.

```sh
node --test avatar-lab/test/*.test.mjs
node avatar-lab/verification/http-smoke.mjs
```

Use **Walk together**, **Idle**, **Play fixture attack + hurt**, or click the ground. The gold map marker and mission button select a sample mission; they award nothing. Expand **Asset provenance and failure checks** for a missing-sheet simulation and [disabled-WebGL preview](http://127.0.0.1:4186/?webgl=off).

## Boundaries and handoff

- The standalone lab stays in `web/avatar-lab/`. Main-app additions are limited to avatar routes, server/client/component files, focused tests and the linked seam document. App entry, backend, package/lockfile and shared runtime stay with their owners. Preserve concurrent database/mission changes.
- Presets, fixture outputs, cached live outputs and fresh OpenAI outputs are labelled separately. Synthetic input upload, real image-edit API requests and runtime rendering are verified; this is not real-owner/pet likeness acceptance. GPS, rewards and multiplayer are not part of this module.
- The custom 4 × 4 manifest is not a Hatch Pet/Codex package. Codex Pets Web is researched, not installed. Exact source/license/revisions and the complete generation prompt are in [GENERATION.md](GENERATION.md).
- The main UI owner mounts `AvatarSetup` and consumes `ApprovedCharacterAsset` for separate owner/pet slots. These use normal private same-origin image URLs, not the lab's `/vendor/` routes. Check the main seam document for current evidence; the standalone renderer remains an independent preview.
- `battle-adapter.mjs` consumes the actual shared `MatchSnapshot`/`MatchEvent`, including `resultingHp`, legacy/small/big attacks, defend, heal and flee. Attacks map to existing attack/hurt sprites; heal/flee update the authoritative snapshot without fabricating attack effects. Tests use the actual backend pure-rule output and check stale/duplicate/hydration and skipped polling. It is not wired to the authenticated two-player UI. The renderer never computes damage or rewards.
- `POST /api/avatar-jobs`, owner-scoped status, cancellation and private asset/manifest routes are implemented on this isolated server; see [PIPELINE.md](PIPELINE.md). Local raw buffers are disposed at terminal status, results expire after five minutes and restart loses jobs/assets. Explicitly exported synthetic QA files are preserved separately. This is not durable application persistence or a production photo-retention policy.

The [Space roadmap](https://chatgpt.com/space/page_6ae7456c281c81918228989bd2cbf4d6) and [avatar checkpoint](https://chatgpt.com/space/page_6ae740255a908191b675c589a93bc207) track local proof separately from integrated/live acceptance. See [verification](verification/RESULTS.md).
