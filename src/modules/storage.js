import { createGame, isValidGame } from './game.js';
export const STORAGE_KEY = 'pokepets-go.demo.v1';

export function loadGame(storage) {
  try {
    const raw = storage.getItem(STORAGE_KEY);
    if (raw === null) return { game: createGame(), status: 'ready' };
    const game = JSON.parse(raw);
    return isValidGame(game) ? { game, status: 'ready' } : { game: createGame(), status: 'invalid' };
  } catch (error) {
    return { game: createGame(), status: error instanceof SyntaxError ? 'invalid' : 'unavailable' };
  }
}
export function saveGame(storage, game) {
  if (!isValidGame(game)) return { ok: false, status: 'invalid' };
  const current = loadGame(storage);
  if (current.status !== 'ready') return { ok: false, status: current.status };
  try {
    storage.setItem(STORAGE_KEY, JSON.stringify(game));
    return { ok: true, status: 'ready' };
  } catch {
    return { ok: false, status: 'unavailable' };
  }
}
