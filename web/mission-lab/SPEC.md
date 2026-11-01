# Mission and points prototype

## Goal

In an isolated local fixture, select one of three owner-and-pet activities, confirm completion, receive fixed points once, and spend points on a pet stat. No login, remote persistence, or live multiplayer is implied.

## Contract

- `MISSIONS`: curated array of `{ id, title, place, description, points }`; IDs and point values reuse the existing local prototype.
- `createProgress()`: fresh `{ points, stats, completedMissionIds }`. Stats use `health`, `attack`, `defence`, `speed` to match the current multiplayer type (`defence` replaces the legacy local prototype's `defense`).
- `completeMission(progress, missionId, confirmed)`: returns the same state for unknown, unconfirmed, or previously completed missions; otherwise returns a new state, adding fixed points and the mission ID once. It does not verify real-world completion.
- `upgradeStat(progress, stat)`: returns the same state for unknown stats or insufficient points; otherwise returns a new state with 5 points deducted and the selected stat increased by 1.
- Both functions are pure; this local-only contract is not an API or persistence implementation. Backend must independently validate session, mission, points, race and idempotency with atomic persistence before any shared rewards are claimed. Mission reset/repeat policy, team schema and cross-document consistency remain open.
- UI labels fixture status and current session only. No network/API/database assumptions. Refresh resets all progress.

## Acceptance

- Confirm once awards known points, cancelling and duplicate confirmation do not; unknown missions do not award.
- Upgrade spends fixed points, rejects insufficient funds and unknown stats; prior state stays unchanged.
- A user can select an activity, confirm it, see points, then upgrade on a small screen.
