import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { validateManifest, frameAt, frameUV, advanceTowards, acceptBattleEvent } from '../core.mjs';

const manifest = JSON.parse(await readFile(new URL('../manifest.json', import.meta.url)));

test('the shipped PNG dimensions match the manifest exactly', async () => {
  const png = await readFile(new URL(`../${manifest.sheet}`, import.meta.url));
  assert.equal(png.subarray(1, 4).toString(), 'PNG');
  assert.equal(png.readUInt32BE(16), manifest.width);
  assert.equal(png.readUInt32BE(20), manifest.height);
  assert.equal(png[25], 6); // RGBA, with a genuine alpha channel.
});

test('sheet rectangles are validated before reaching the renderer', () => {
  assert.equal(validateManifest(manifest), manifest);
  for (const mutate of [
    m => { m.animations.move.frames[0].x = m.width; },
    m => { m.animations.idle.fps = 0; },
    m => { delete m.animations.hurt; },
    m => { m.sheet = 'https://example.com/private.png'; },
    m => { m.width = 0; },
    m => { m.animations.move.frames[0].w = -1; },
  ]) {
    const invalid = structuredClone(manifest); mutate(invalid);
    assert.throws(() => validateManifest(invalid));
  }
});

test('idle loops; action stops at final frame; UV respects top-left pixel coordinates', () => {
  const a = manifest.animations.idle;
  assert.deepEqual(frameAt(manifest, 'idle', 4 / a.fps), a.frames[0]);
  assert.deepEqual(frameAt(manifest, 'attack', 100), manifest.animations.attack.frames.at(-1));
  assert.deepEqual(frameAt(manifest, 'missing', 100), a.frames[0]);
  const uv = frameUV(manifest, { x: 0, y: 0, w: 313, h: 313 });
  assert.equal(uv.offsetX, 0);
  assert.equal(uv.offsetY, 1 - 313 / 1254);
  assert.equal(uv.repeatX, 313 / 1254);
});

test('movement converges without overshoot and is bounded after a suspended tab', () => {
  assert.deepEqual(advanceTowards({ x: 0, z: 0 }, { x: 0.01, z: 0 }, 1, 2), { x: 0.01, z: 0 });
  assert.equal(advanceTowards({ x: 0, z: 0 }, { x: 10, z: 0 }, 100, 2).x, 0.2);
  assert.deepEqual(advanceTowards({ x: 1, z: 1 }, { x: 2, z: 2 }, -1, 2), { x: 1, z: 1 });
});

test('only a fresh accepted battle event animates; hydrate, retry and old versions do not', () => {
  const event = { matchId: 'sample-match', commandId: 'a', version: 2, move: 'attack', resultingHp: 8 };
  const initial = acceptBattleEvent(null, event, { hydrate: true });
  assert.equal(initial.play, false);
  assert.equal(acceptBattleEvent(initial.cursor, event).play, false);
  assert.equal(acceptBattleEvent(initial.cursor, { ...event, commandId: 'b', version: 1 }).play, false);
  assert.equal(acceptBattleEvent(initial.cursor, { ...event, commandId: 'a', version: 3 }).play, false);
  const next = acceptBattleEvent(initial.cursor, { ...event, commandId: 'b', version: 3 });
  assert.equal(next.play, true);
  assert.equal(acceptBattleEvent(next.cursor, { ...event, commandId: 'b', version: 3 }).play, false);
});
