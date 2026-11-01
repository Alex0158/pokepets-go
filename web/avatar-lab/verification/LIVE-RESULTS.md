# Live image pipeline verification

1 November 2026, Alex / Codex. Actual OpenAI Image API calls, separate from the Codex built-in imagegen tool. All inputs are synthetic. No real personal photos were obtained or sent. Cost and secure key provisioning were explicitly authorized.

## Results

Model metadata lookup returned HTTP 200 for `gpt-image-2.5-flare-2026-09-08`. Each image-edit request explicitly selected that snapshot, `quality: low`, one image, 1024 × 1024, transparent PNG. The image responses did not echo a model ID; do not claim an independent response-model verification.

| Input and separate subject | Measured latency | Input tokens (image + text) | Output tokens | Estimated USD |
| --- | ---: | ---: | ---: | ---: |
| Original code-drawn synthetic owner | 13.4 s | 332 (80 + 252) | 196 | 0.007780 |
| Original code-drawn synthetic pet | 25.3 s | 317 (64 + 253) | 196 | 0.007657 |
| AI-generated photorealistic synthetic spaniel | 13.6 s | 1774 (1521 + 253) | 196 | 0.019313 |
| Total | Three requests | 2423 | 588 | 0.034750 |

Cost is a standard-rate estimate from the response usage and the [official image-generation rates](https://developers.openai.com/api/docs/guides/image-generation#cost-and-latency): USD 8/M image-input, 5/M text-input and 30/M image-output tokens. It is not an invoice or independently reconciled billing total. Built-in imagegen usage is separate and not included in this API estimate.

Request IDs: owner `req_13a98a6d61cd46199f80a0eef471d18f`; illustration pet `req_88d0b2777e204e249e036c98bde21fa6`; photorealistic pet `req_d0b47c6d81334059b832cdf96658525f`.

## End to end evidence

- Owner and pet were submitted independently through the local app UI and produced different authorized job/asset records. Both were applied to separate Three.js texture/animation slots. Owner and pet idle/move frame states were observed while the group actually moved.
- The photorealistic test used the real file chooser to upload [the preserved synthetic input](../assets/synthetic-photoreal-pet-input.png), then an actual `/api/avatar-jobs` request, live OpenAI image edit, output validation and Three.js playback. It did not use the fixture provider or treat the input photo as the finished avatar.
- Output PNGs decode at 1024 × 1024 with alpha; frame rectangles fit. Output validation also rejects empty frames. Synthetic owner/pet inputs stay separate, raw inputs are not served and private job assets require the matching local session.
- The runtime job/result store is memory-only with five-minute expiry. Original input files are untouched. The files below are explicit exported QA samples, not proof of durable application asset storage or reconnect persistence.
- Generated output was exported from observed browser assets without repeating the API call. A first `downloadMedia` attempt timed out; the Page Assets export succeeded. No session cookie or key was printed or saved in an artifact.
- A test of the zero-request allowance returned `request_budget_reached`; the previous owner appearance remained unchanged and sample mission selection still worked. It made no additional OpenAI request.

## Preserved artifacts

- [Owner sheet from synthetic illustration](live-owner-illustration-sheet.png)
- [Pet sheet from synthetic illustration](live-pet-illustration-sheet.png)
- [Pet sheet from the synthetic photograph](live-photoreal-pet-sheet.png)
- [Initial live job UI](live-initial-jobs.jpg), [photorealistic job UI](live-photoreal-job.jpg), [cached result UI](cached-live-results.jpg), [budget failure fallback](budget-fallback.jpg)

Use **Load cached live test results · no API call** to render the preserved owner and photo-conditioned pet after reload without spending more. The current live preview runs with zero remaining paid requests. Cached samples are explicitly labelled.

## Appearance and animation assessment

The owner retains the reference dark hair, yellow shirt and blue trousers. The photorealistic-input pet retains long ears, golden/white coat and teal bandana; the output is a game-art draft conditioned on an invented photo. Blink and pose changes are present; movement cycles and feet baselines drift, and the walking frames are not yet a polished seamless loop. These are accepted only as local functional proofs, not production sprite/likeness approval.

Synthetic input creation used the built-in imagegen tool with a prompt for a photorealistic, fictional adult golden-and-white spaniel, full body, teal bandana and neutral studio background; its exact generating model was not exposed. The original generated input is preserved unchanged. No real-pet likeness or real-owner consent was tested.

## Remaining acceptance

Real-photo consent/provider disclosure and retention/deletion; main Next.js app/session and public/private asset integration; durable metadata/assets; restart/reconnect UX; actual two-player battle presentation; polished walk cycles; real-device/GPU testing. The isolated battle adapter is checked against actual server rule output and shared types, but it has not been wired to an authenticated two-player UI. No push, deployment, Atlas change or teammate message was performed by this workstream; only explicitly authorized Codex thread coordination was used.
