import { MISSIONS, AVATARS } from './missions.js';

export function renderMap(game, selectedId) {
  return `<div class="map-board" aria-label="Fictional neighborhood map with three activity destinations">
    <svg class="map-art" viewBox="0 0 900 700" preserveAspectRatio="none" aria-hidden="true">
      <rect width="900" height="700" fill="#daedcf"/>
      <path d="M650 -40 C500 130 820 210 640 380 S630 570 850 760" fill="none" stroke="#96cee8" stroke-width="90"/>
      <path d="M-20 490 Q190 320 320 380 T610 270 T940 140 M135 -30 Q220 150 165 320 T315 740 M-10 140 Q230 210 370 110 T710 15 M385 -20 L440 250 Q420 470 490 740 M-20 615 Q300 535 530 575 T940 460" fill="none" stroke="#b9cfaa" stroke-width="34"/>
      <path d="M-20 490 Q190 320 320 380 T610 270 T940 140 M135 -30 Q220 150 165 320 T315 740 M-10 140 Q230 210 370 110 T710 15 M385 -20 L440 250 Q420 470 490 740 M-20 615 Q300 535 530 575 T940 460" fill="none" stroke="#fff" stroke-width="25"/>
      <g fill="#c4ddaf" stroke="#9fbe89" stroke-width="2"><rect x="230" y="140" width="115" height="120" rx="45"/><rect x="70" y="380" width="80" height="90" rx="30"/><rect x="225" y="470" width="130" height="68" rx="24"/><rect x="475" y="310" width="86" height="130" rx="30"/></g>
      <g fill="#e9d4b7" stroke="#c4b496" stroke-width="2"><rect x="525" y="115" width="65" height="50" rx="8" transform="rotate(-18 525 115)"/><rect x="750" y="330" width="72" height="50" rx="8" transform="rotate(-18 750 330)"/><rect x="745" y="395" width="60" height="45" rx="8"/><rect x="52" y="225" width="60" height="80" rx="8"/><rect x="520" y="625" width="55" height="42" rx="8"/></g>
      <g fill="#91b880"><circle cx="55" cy="70" r="20"/><circle cx="85" cy="90" r="24"/><circle cx="330" cy="300" r="22"/><circle cx="365" cy="320" r="18"/><circle cx="535" cy="475" r="23"/><circle cx="570" cy="490" r="18"/><circle cx="815" cy="80" r="24"/><circle cx="845" cy="110" r="18"/><circle cx="110" cy="660" r="25"/></g>
    </svg>
    <span class="map-label park-label">Clover Park</span><span class="map-label river-label">Little River</span><span class="compass" aria-hidden="true">↑<br>N</span>
    ${MISSIONS.map(mission => {
      const done = game.memories.some(memory => memory.missionId === mission.id);
      return `<button class="map-pin ${selectedId === mission.id ? 'selected' : ''} ${done ? 'done' : ''}" style="left:${mission.x}%;top:${mission.y}%" data-mission="${mission.id}" aria-label="${mission.title}${done ? ', completed' : ''}" aria-pressed="${selectedId === mission.id}"><span class="pin-icon">${done ? '✓' : mission.badge}</span><span class="pin-name">${mission.title}</span></button>`;
    }).join('')}
    <div class="your-pet" aria-label="Your preset companion"><span>${AVATARS[game.pet.avatar]}</span><small>You are here</small></div>
    <div class="map-key">Fictional sample map · No location tracking</div>
  </div>`;
}
