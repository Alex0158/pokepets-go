import { AVATARS, getMission } from './missions.js';

export const STATS = Object.freeze(['speed', 'defense', 'attack', 'health']);
export const UPGRADE_COST = 5;
export function createGame() {
  return { version: 1, pet: { name: 'Biscuit', avatar: 'dog' }, points: 0, stats: { speed: 1, defense: 1, attack: 1, health: 1 }, memories: [] };
}
export function setPet(game, { name, avatar }) {
  const safeName = typeof name === 'string' ? name.trim().slice(0, 24) : '';
  return { ...game, pet: { name: safeName || game.pet.name, avatar: Object.hasOwn(AVATARS, avatar) ? avatar : game.pet.avatar } };
}
export function completeMission(game, missionId, { confirmed, at } = {}) {
  const mission = getMission(missionId);
  if (confirmed !== true || !mission || game.memories.some(memory => memory.missionId === missionId)) return game;
  if (typeof at !== 'string' || !Number.isFinite(Date.parse(at))) throw Error('A valid completion date is required.');
  const memory = { missionId, petName: game.pet.name, avatar: game.pet.avatar, completedAt: new Date(at).toISOString() };
  return { ...game, points: game.points + mission.points, memories: [...game.memories, memory] };
}
export function allocatePoint(game, stat) {
  if (!STATS.includes(stat) || game.points < UPGRADE_COST) return game;
  return { ...game, points: game.points - UPGRADE_COST, stats: { ...game.stats, [stat]: game.stats[stat] + 1 } };
}
export function isValidGame(game) {
  if (!game || game.version !== 1 || !game.pet || typeof game.pet.name !== 'string' || !game.pet.name.trim() || game.pet.name.length > 24 || !Object.hasOwn(AVATARS, game.pet.avatar)) return false;
  if (!Number.isSafeInteger(game.points) || game.points < 0 || !game.stats || !STATS.every(stat => Number.isSafeInteger(game.stats[stat]) && game.stats[stat] >= 1)) return false;
  if (!Array.isArray(game.memories) || game.memories.length > 3) return false;
  const ids = new Set();
  let earned = 0;
  for (const memory of game.memories) {
    if (!memory || !getMission(memory.missionId) || ids.has(memory.missionId) || typeof memory.petName !== 'string' || !memory.petName.trim() || memory.petName.length > 24 || !Object.hasOwn(AVATARS, memory.avatar) || typeof memory.completedAt !== 'string' || !Number.isFinite(Date.parse(memory.completedAt))) return false;
    ids.add(memory.missionId);
    earned += getMission(memory.missionId).points;
  }
  const spent = STATS.reduce((total, stat) => total + (game.stats[stat] - 1) * UPGRADE_COST, 0);
  return earned - spent === game.points;
}
