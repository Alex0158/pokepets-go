# Separate owner and pet image jobs

Alex / Codex local implementation, 1 November 2026. Extends the existing avatar lab only. The parallel progression/shared/backend files, main app entry and dependency manifests are outside this workstream.

## Scope and authority

Alex has authorized reasonable actual OpenAI API usage for this avatar work. Cost is not a blocker. The secure OpenAI Developers workflow created key Codex in the user-selected ATM COMMERCE LTD / Pokepet go project after explicit new-key and local-destination confirmation. The key exists only in the approved Git-ignored env file; no plaintext was exposed.

The independently testable local job boundary uses synthetic images only. Its fixture provider returns explicitly labelled sample assets and does not claim to derive a likeness from the submitted input. Three live API requests have now passed with synthetic references, including an AI-generated photorealistic pet image; see verification/LIVE-RESULTS.md. No real personal photos, deployment, Atlas changes or another paid service are authorized by these local decisions.

## Minimal contract

- `POST /api/avatar-jobs`: `{requestId, subject: 'owner' | 'pet', mimeType, imageBase64, inputPolicy: 'synthetic-only'}`. A local session cookie identifies the caller. The same request ID/payload returns the same job; conflicting reuse is rejected. No file name or user-controlled URL is accepted.
- `GET /api/avatar-jobs/:jobId`: owner-scoped status `queued | running | succeeded | failed | canceled`; exposes provider mode, bounded expiry and an approved asset descriptor only after validation.
- `DELETE /api/avatar-jobs/:jobId`: cancels pending work and revokes that job's in-memory result. This does not delete original user files. Both mutations require same-origin requests to the loopback server.
- Approved result: `{assetId, subject, manifestUrl, expiresAt, provenance}`. Manifest uses the existing game frame schema and a server-controlled local image URL. Raw inputs are never publicly served, logged, returned in snapshots or written to disk.
- Renderer keeps separate owner/pet asset slots and independent frame clocks. A failed/canceled/expired job must not replace a prior usable asset or affect mission/match state.

## Bounded local lifecycle

Only PNG/JPEG, at most 4 MiB each and 4096 × 4096 pixels, decoded before acceptance. Two concurrent jobs, at most eight retained jobs globally and four per local session. Each job has a hard timeout, no automatic provider retries and a five-minute in-memory lifetime. Raw request bytes are cleared after completion, failure, cancellation or expiry; results expire in memory and disappear on server restart. No durable image/asset persistence is claimed. Browser input previews remain local until an explicit submit action and are not put in localStorage.

These are local synthetic-test mechanics, not an agreed production photo policy. Real-photo consent, provider disclosure, authorized subjects, access/revocation, durable storage and retention/deletion require product decisions before enabling personal-photo uploads. Existing input files remain untouched.

## Verification gates

Tests first: distinct owner/pet routing and authorization, PNG/JPEG/body validation, bounded queue/timeout, exact retry/conflict, raw-byte disposal, canceled/late-output suppression, invalid manifest rejection and preserved prior display. Then real localhost HTTP, two cookie jars, renderer and mobile checks. A minimum live test uses two separate synthetic inputs and records exact requested/returned model evidence, latency, usage and qualified cost. Generated sheet geometry is validated; image identity/animation quality still requires visual inspection. No successful fixture job counts as live photo generation.
