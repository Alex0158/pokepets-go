export const MISSIONS = Object.freeze([
  { id: 'sniff-safari', title: 'Sniff safari', place: 'Clover Park', category: 'Outdoor exploration', description: 'Take a gentle wander and let your pet explore a few interesting smells. Choose a pace that suits them.', points: 20, badge: '🌿', x: 34, y: 32, memory: 'A little wander, a world of discoveries.' },
  { id: 'living-room-play', title: 'A little playtime', place: 'Cozy Corner', category: 'At-home play', description: 'Enjoy a short game with a favourite toy at home. Stop whenever your pet has had enough.', points: 15, badge: '🎾', x: 74, y: 61, memory: 'Our favourite game, in our favourite company.' },
  { id: 'quiet-company', title: 'Quiet company', place: 'Willow Nook', category: 'Quiet bonding', description: 'Share a calm moment together, at home or somewhere comfortable. Being together counts too.', points: 10, badge: '🌼', x: 31, y: 77, memory: 'No big plans. Just a lovely moment together.' },
]);
export const getMission = id => MISSIONS.find(mission => mission.id === id);
export const AVATARS = Object.freeze({ dog: '🐶', cat: '🐱', rabbit: '🐰' });
