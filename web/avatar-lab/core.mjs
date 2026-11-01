const STATES = ['idle', 'move', 'attack', 'hurt'];
export function validateManifest(m) {
  if (!m || m.schemaVersion !== 1 || !Number.isSafeInteger(m.width) || !Number.isSafeInteger(m.height) || m.width < 1 || m.height < 1 || m.width > 8192 || m.height > 8192) throw Error('Invalid sheet dimensions/version');
  if (typeof m.sheet !== 'string' || !/^assets\/[\w-]+\.(png|webp)$/.test(m.sheet)) throw Error('Expected a local approved asset');
  for (const state of STATES) {
    const a = m.animations?.[state];
    if (!a || !Number.isFinite(a.fps) || a.fps < 1 || a.fps > 30 || typeof a.loop !== 'boolean' || !Array.isArray(a.frames) || !a.frames.length || a.frames.length > 64) throw Error(`Invalid ${state} animation`);
    for (const f of a.frames) {
      if (!['x', 'y', 'w', 'h'].every(k => Number.isSafeInteger(f[k])) || f.x < 0 || f.y < 0 || f.w < 1 || f.h < 1 || f.x + f.w > m.width || f.y + f.h > m.height) throw Error(`Out-of-bounds ${state} frame`);
    }
  }
  return m;
}

export function frameAt(m, state, elapsed) {
  const a = m.animations[state] ?? m.animations.idle;
  const n = Math.floor(Math.max(0, Number.isFinite(elapsed) ? elapsed : 0) * a.fps);
  return a.frames[a.loop ? n % a.frames.length : Math.min(n, a.frames.length - 1)];
}

export function frameUV(m, f) {
  return { offsetX: f.x / m.width, offsetY: 1 - (f.y + f.h) / m.height, repeatX: f.w / m.width, repeatY: f.h / m.height };
}

export function advanceTowards(from, to, seconds, speed = 1.6) {
  const dx = to.x - from.x, dz = to.z - from.z;
  const distance = Math.hypot(dx, dz);
  const step = Math.max(0, Math.min(Number.isFinite(seconds) ? seconds : 0, 0.1)) * speed;
  if (distance <= step || distance === 0) return { ...to };
  return { x: from.x + dx / distance * step, z: from.z + dz / distance * step };
}

// One cursor per active match. Hydrate on initial/reconnect snapshots, before polling.
export function acceptBattleEvent(cursor, event, { hydrate = false } = {}) {
  if (!event || typeof event.matchId !== 'string' || typeof event.commandId !== 'string' || !Number.isSafeInteger(event.version) || event.version < 0) return { cursor, play: false };
  if (cursor && cursor.matchId !== event.matchId && !hydrate) return { cursor, play: false };
  const c = cursor?.matchId === event.matchId ? cursor : { matchId: event.matchId, version: -1, commands: [] };
  const fresh = event.version > c.version && !c.commands.includes(event.commandId);
  if (!fresh) return { cursor: c, play: false };
  return { cursor: { matchId: event.matchId, version: event.version, commands: [...c.commands, event.commandId].slice(-256) }, play: !hydrate };
}
