import test from 'node:test';
import assert from 'node:assert/strict';
import { createGame, setPet, completeMission, allocatePoint } from '../src/modules/game.js';
import { loadGame, saveGame, STORAGE_KEY } from '../src/modules/storage.js';
import { getMemoryArt } from '../src/modules/memory-art.js';

const confirmation = { confirmed: true, at: '2026-11-01T14:00:00.000Z' };
const memoryStorage = () => {
  const values = new Map();
  return { getItem: key => values.get(key) ?? null, setItem: (key, value) => values.set(key, value) };
};

test('complete journey: profile, explicit confirmation, one reward, upgrade and reload', () => {
  let game = setPet(createGame(), { name: 'Mochi', avatar: 'cat' });
  assert.equal(completeMission(game, 'sniff-safari', { confirmed: false }).points, 0);
  game = completeMission(game, 'sniff-safari', confirmation);
  assert.equal(game.points, 20);
  assert.equal(game.memories.length, 1);
  assert.equal(game.memories[0].petName, 'Mochi');
  assert.equal(game.memories[0].missionId, 'sniff-safari');
  assert.deepEqual(completeMission(game, 'sniff-safari', confirmation), game);
  game = allocatePoint(game, 'speed');
  assert.equal(game.points, 15);
  assert.equal(game.stats.speed, 2);
  const storage = memoryStorage();
  assert.equal(saveGame(storage, game).ok, true);
  assert.deepEqual(loadGame(storage).game, game);
});

test('unknown missions, unconfirmed activities and invalid upgrades never award or spend points', () => {
  const game = createGame();
  assert.deepEqual(completeMission(game, 'not-a-mission', confirmation), game);
  assert.deepEqual(completeMission(game, 'sniff-safari', { confirmed: 'yes' }), game);
  assert.deepEqual(allocatePoint(game, 'speed'), game);
  assert.deepEqual(allocatePoint(game, '__proto__'), game);
  assert.throws(() => completeMission(game, 'sniff-safari', { confirmed: true, at: 'bad date' }));
});

test('each of the curated missions can award once; memories survive later profile changes', () => {
  let game = createGame();
  for (const id of ['sniff-safari', 'living-room-play', 'quiet-company']) {
    game = completeMission(game, id, confirmation);
  }
  assert.equal(game.points, 45);
  assert.equal(game.memories.length, 3);
  const renamed = setPet(game, { name: 'New name', avatar: 'rabbit' });
  assert.equal(renamed.memories[0].petName, 'Biscuit');
  assert.equal(setPet(game, { name: '   ', avatar: 'invalid' }).pet.name, 'Biscuit');
});

test('unavailable storage keeps gameplay usable and reports persistence failure', () => {
  const blocked = { getItem() { throw Error('blocked'); }, setItem() { throw Error('quota'); } };
  const loaded = loadGame(blocked);
  assert.equal(loaded.status, 'unavailable');
  const game = completeMission(loaded.game, 'quiet-company', confirmation);
  assert.equal(game.points, 10);
  assert.equal(saveGame(blocked, game).ok, false);
});

test('malformed and incompatible saves are preserved instead of overwritten', () => {
  for (const raw of ['{broken', JSON.stringify({ version: 999 }), JSON.stringify({ ...createGame(), points: -5 }), JSON.stringify({ ...createGame(), memories: [{ missionId: 'sniff-safari' }] })]) {
    const storage = memoryStorage();
    storage.setItem(STORAGE_KEY, raw);
    const loaded = loadGame(storage);
    assert.equal(loaded.status, 'invalid');
    assert.equal(saveGame(storage, createGame()).ok, false);
    assert.equal(storage.getItem(STORAGE_KEY), raw);
  }
});

test('optional artwork failures and timeout leave earned points and memories intact', async () => {
  const game = completeMission(createGame(), 'sniff-safari', confirmation);
  const before = structuredClone(game);
  for (const provider of [undefined, async () => { throw Error('offline'); }, () => new Promise(() => {}), async () => ({ badge: '<script>' })]) {
    assert.deepEqual(await getMemoryArt(game.memories[0], provider, 5), { badge: '🌿', source: 'preset' });
  }
  assert.deepEqual(game, before);
});
