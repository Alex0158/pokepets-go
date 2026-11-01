# Daily care missions

Alex / Codex — In progress, 1 November 2026. This local slice extends the existing progression API; it does not own the main UI, Atlas, or the battle backend.

## Behavior

- The owner may confirm feeding a meal (`daily-feed`) or playing with their pet for five minutes (`daily-play`). Each awards 15 points once per pet per Europe/London calendar day. The server uses its own clock; this is an owner confirmation, not proof that the activity occurred.
- Existing one-time mission IDs and completion state remain unchanged. Points buy an existing 5-point stat upgrade; changes affect a later battle snapshot, never an active battle.
- Continue using `POST /api/progression/mission {commandId, missionId, confirmed}`. Identical command retries retain the original receipt. Different requests for the same mission and day cannot award twice, including concurrent requests.
- Progression snapshots add `dailyMissions: {date, completedMissionIds}`. The date is the current server-side London date; the completion list is empty on a new day. Old records lacking this field are treated as empty and are not destructively migrated.
- Existing receipt limits still apply. This is a bounded hackathon implementation, not a long-term reward ledger. UI integration and end-to-end testing are separate.

## Verification

Test daily rollover including UK daylight-saving transition, same-day repeat rejection, next-day eligibility, legacy record compatibility, reward/spend, idempotent retry, concurrent different requests and existing mission behavior. Use isolated local MongoDB only; do not touch Atlas.

## Local result

Focused rules and real MongoDB tests passed, including the daylight-saving boundary, original mission compatibility, one reward for two concurrent commands, exact command retry, next-day reopening, health upgrade and HTTP snapshot readback. The full root suite passed 51/51 with no skips against isolated local MongoDB instances, and `web` typecheck passed. Real user-facing daily mission UI and Atlas remain unverified.
