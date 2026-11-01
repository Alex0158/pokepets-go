import { getMission } from './missions.js';

// Future adapters return a curated badge. External image handling needs its own reviewed contract.
export async function getMemoryArt(memory, provider, timeoutMs = 1200) {
  const fallback = { badge: getMission(memory.missionId)?.badge || '🌿', source: 'preset' };
  if (typeof provider !== 'function') return fallback;
  let timer;
  try {
    const result = await Promise.race([
      Promise.resolve().then(() => provider(Object.freeze({ ...memory }))),
      new Promise((_, reject) => { timer = setTimeout(() => reject(Error('Artwork timed out.')), timeoutMs); }),
    ]);
    return ['🌿', '🎾', '🌼'].includes(result?.badge) ? { badge: result.badge, source: 'adapter' } : fallback;
  } catch {
    return fallback;
  } finally {
    clearTimeout(timer);
  }
}
