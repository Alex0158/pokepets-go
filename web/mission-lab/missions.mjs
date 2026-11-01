export const MISSIONS = Object.freeze([
  { id: 'sniff-safari', title: 'Sniff safari', place: 'Clover Park', description: 'Take a gentle wander and let your pet explore at their own pace.', points: 20 },
  { id: 'living-room-play', title: 'A little playtime', place: 'Cozy Corner', description: 'Enjoy a short game with a favourite toy at home.', points: 15 },
  { id: 'quiet-company', title: 'Quiet company', place: 'Willow Nook', description: 'Share a calm moment together somewhere comfortable.', points: 10 },
].map(Object.freeze));

export function createProgress() {
  return { points: 0, stats: { health: 1, attack: 1, defence: 1, speed: 1 }, completedMissionIds: [] };
}

export function completeMission(progress, missionId, confirmed) {
  const mission = MISSIONS.find(item => item.id === missionId);
  if (confirmed !== true || !mission || progress.completedMissionIds.includes(missionId)) return progress;
  return { ...progress, points: progress.points + mission.points, completedMissionIds: [...progress.completedMissionIds, missionId] };
}

export function upgradeStat(progress, stat) {
  if (!Object.hasOwn(progress.stats, stat) || progress.points < 5) return progress;
  return { ...progress, points: progress.points - 5, stats: { ...progress.stats, [stat]: progress.stats[stat] + 1 } };
}
