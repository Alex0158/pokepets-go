import test from 'node:test';
import assert from 'node:assert/strict';
import { MISSIONS, createProgress, completeMission, upgradeStat } from '../missions.mjs';

test('confirmed mission awards fixed points once without mutating the input', () => {
  const initial = createProgress();
  const mission = MISSIONS[0];
  assert.equal(completeMission(initial, mission.id, false), initial);
  assert.equal(completeMission(initial, 'unknown', true), initial);
  const completed = completeMission(initial, mission.id, true);
  assert.equal(completed.points, mission.points);
  assert.deepEqual(completed.completedMissionIds, [mission.id]);
  assert.equal(initial.points, 0);
  assert.deepEqual(initial.completedMissionIds, []);
  assert.equal(completeMission(completed, mission.id, true), completed);
});

test('upgrade costs points once and rejects insufficient funds or invalid stats', () => {
  const initial = createProgress();
  assert.equal(upgradeStat(initial, 'attack'), initial);
  const earned = completeMission(initial, MISSIONS[0].id, true);
  assert.equal(upgradeStat(earned, 'unknown'), earned);
  const upgraded = upgradeStat(earned, 'defence');
  assert.equal(upgraded.points, earned.points - 5);
  assert.equal(upgraded.stats.defence, earned.stats.defence + 1);
  assert.equal(earned.stats.defence, 1);
});

test('catalogue has unique IDs and positive integer rewards', () => {
  assert.equal(new Set(MISSIONS.map(m => m.id)).size, MISSIONS.length);
  assert.ok(MISSIONS.every(m => Number.isSafeInteger(m.points) && m.points > 0));
});
