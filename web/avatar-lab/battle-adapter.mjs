// Presentation only: snapshots must already come from the authenticated backend.
/** @typedef {import('../src/shared/multiplayer.ts').MatchSnapshot} MatchSnapshot */
export class BattlePresentation {
  constructor() { /** @type {MatchSnapshot | null} */ this.current = null; this.commands = new Set(); }
  /** @param {MatchSnapshot} snapshot @param {{hydrate?: boolean}} options */
  apply(snapshot, {hydrate = false} = {}) {
    if (!snapshot || typeof snapshot.matchId !== 'string' || !Number.isSafeInteger(snapshot.version) || !Array.isArray(snapshot.participants) || snapshot.participants.some(p => !Number.isFinite(p.hp))) throw Error('Invalid battle snapshot');
    const same = this.current?.matchId === snapshot.matchId;
    if (same && this.current && snapshot.version <= this.current.version) return {snapshot:this.current, actions:[]};
    if (!same) this.commands.clear();
    const initial = !same || !this.current || hydrate;
    this.current = snapshot;
    const e = snapshot.lastEvent;
    if (!e) return {snapshot,actions:[]};
    const actor = snapshot.participants.find(p => p.playerId === e.actorPlayerId);
    const target = snapshot.participants.find(p => p.petId === e.targetPetId);
    if (!actor || !target || e.matchId !== snapshot.matchId || e.version !== snapshot.version || e.id !== `${e.matchId}:${e.commandId}` || !['attack','small_attack','big_attack','defend','heal','flee'].includes(e.move) || e.resultingHp !== target.hp) return {snapshot,actions:[]};
    const key = `${e.matchId}:${e.commandId}`;
    const duplicate = this.commands.has(key); this.commands.add(key);
    if (initial || duplicate) return {snapshot,actions:[]};
    return {snapshot,actions:['attack','small_attack','big_attack'].includes(e.move)
      ? [{petId:actor.petId,state:'attack',eventId:key},{petId:target.petId,state:'hurt',eventId:key}]
      : e.move==='defend'?[{petId:actor.petId,state:'defend',eventId:key}]:[]};
  }
}
