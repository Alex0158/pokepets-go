import { setPet, completeMission, allocatePoint, STATS, UPGRADE_COST } from './modules/game.js';
import { MISSIONS, AVATARS, getMission } from './modules/missions.js';
import { loadGame, saveGame } from './modules/storage.js';
import { renderMap } from './modules/map.js';
import { getMemoryArt } from './modules/memory-art.js';

let storage;
try { storage = window.localStorage; } catch { storage = null; }
const initial = loadGame(storage);
let game = initial.game;
let persistence = initial.status;
let selectedId = MISSIONS[0].id;
let notice = '';
const art = new Map();
const app = document.querySelector('#app');
const escape = value => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));

function commit(next) {
  game = next;
  persistence = saveGame(storage, game).status;
  render();
}

function render() {
  const mission = getMission(selectedId);
  const done = game.memories.some(memory => memory.missionId === mission.id);
  const completed = game.memories.length;
  app.innerHTML = `
    <header class="site-header"><a class="brand" href="#explore"><span class="brand-mark" aria-hidden="true">🐾</span>Pokepet Go</a><nav aria-label="Main navigation"><a href="#explore">Explore</a><a href="#journal">Our memories <span class="count">${completed}</span></a></nav><span class="demo-badge">Local demo</span></header>
    <main>
      <div class="intro" id="explore"><div><p class="greeting">A little adventure is waiting.</p><h1>Good days start together.</h1></div><p class="intro-note">Choose a moment that suits your pet.<br>Every little adventure counts.</p></div>
      <p class="storage-warning" ${persistence === 'ready' ? 'hidden' : ''}>${persistence === 'invalid' ? 'An existing save could not be read and has been preserved. This session will not replace it; progress stays here until you close this page.' : 'Browser saving is unavailable. You can keep playing, but this session may be lost after reloading.'}</p>
      <div class="play-layout">
        <aside class="pet-panel" aria-label="Your companion">
          <div class="pet-portrait"><span>${AVATARS[game.pet.avatar]}</span><span class="pet-flower" aria-hidden="true">✿</span></div>
          <p class="small-label">Your adventure buddy</p><h2>${escape(game.pet.name)}</h2><p class="pet-title">${completed ? 'Little explorer' : 'Ready for a first adventure'}</p>
          <details class="pet-edit"><summary>Choose your companion</summary><form id="pet-form"><label>Pet name<input name="petName" maxlength="24" value="${escape(game.pet.name)}" required></label><label>Preset avatar<select name="avatar">${Object.entries(AVATARS).map(([id, emoji]) => `<option value="${id}" ${game.pet.avatar === id ? 'selected' : ''}>${emoji} ${id[0].toUpperCase() + id.slice(1)}</option>`).join('')}</select></label><button class="secondary" type="submit">Save companion</button><p class="fine-print">Preset art. Photo generation is not connected.</p></form></details>
          <div class="point-balance"><span>Adventure points</span><strong>${game.points}<small> pts</small></strong></div>
          <div class="growth"><h3>A little room to grow</h3><p>Fictional game stats · ${UPGRADE_COST} pts per upgrade</p>${STATS.map(stat => `<div class="stat-row"><span>${stat[0].toUpperCase() + stat.slice(1)}</span><strong>${game.stats[stat]}</strong><button data-upgrade="${stat}" aria-label="Upgrade ${stat} for ${UPGRADE_COST} points" ${game.points < UPGRADE_COST ? 'disabled' : ''}>+</button></div>`).join('')}</div>
          <p class="save-caption">${persistence === 'ready' ? 'Progress saved in this browser' : 'Playing in this session only'}</p>
        </aside>
        <section class="map-section" aria-labelledby="map-title"><div class="map-heading"><div><h2 id="map-title">Your little neighborhood</h2><p>Three places. Plenty of possibility.</p></div><span class="map-status">${completed} of 3 explored</span></div>${renderMap(game, selectedId)}<div class="mission-tabs" aria-label="Choose a mission">${MISSIONS.map(item => `<button data-mission="${item.id}" class="${item.id === selectedId ? 'active' : ''}" aria-pressed="${item.id === selectedId}">${item.badge} ${item.title}${game.memories.some(memory => memory.missionId === item.id) ? ' ✓' : ''}</button>`).join('')}</div></section>
        <aside class="mission-panel" aria-label="Selected adventure"><div class="mission-art" aria-hidden="true">${mission.badge}<span>✧</span></div><p class="small-label">${mission.category}</p><h2>${mission.title}</h2><p class="mission-place">${mission.place} · Sample destination</p><p class="mission-description">${mission.description}</p><div class="reward"><span>One little adventure</span><strong>+${mission.points} pts</strong></div><button class="primary" id="open-confirm" ${done ? 'disabled' : ''}>${done ? 'Memory collected ✓' : 'Complete this adventure'}</button><p class="fine-print">${done ? 'Try another spot on the map.' : 'You confirm the activity. No GPS or AI verification.'}</p><div class="community"><span class="community-icon" aria-hidden="true">🌳</span><h3>Grow a greener neighborhood</h3><p>Each completed adventure adds a leaf.</p><progress value="${12 + completed}" max="20" aria-label="Sample community goal"></progress><div class="community-total"><strong>${12 + completed} / 20 leaves</strong><span>Sample goal</span></div><p class="fine-print">12 simulated contributions + ${completed} from this browser. No live community connection.</p></div></aside>
      </div>
      <section class="journal" id="journal" aria-labelledby="journal-title"><div class="journal-heading"><div><p class="small-label">Small moments, kept forever</p><h2 id="journal-title">Our adventure journal</h2></div><span>${completed} ${completed === 1 ? 'memory' : 'memories'} collected</span></div><div class="memory-list">${completed ? [...game.memories].reverse().map(memory => {
        const item = getMission(memory.missionId);
        return `<article class="memory-card"><div class="memory-art">${art.get(memory.missionId)?.badge || item.badge}<span>${AVATARS[memory.avatar]}</span></div><div><p class="memory-date">${new Date(memory.completedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })} · Owner-confirmed</p><h3>${escape(memory.petName)}’s ${item.title.toLowerCase()}</h3><p>${item.memory}</p><span class="memory-credit">Preset artwork · +${item.points} pts earned</span></div></article>`;
      }).join('') : '<div class="empty-journal"><span aria-hidden="true">✿</span><div><h3>Your first memory starts on the map.</h3><p>Choose an adventure, enjoy it together, then confirm to keep the moment.</p></div></div>'}</div></section>
      <p class="notice" role="status" aria-live="polite">${escape(notice)}</p>
    </main><footer>Made for pets and their people. <span>Hackathon prototype · Sample world, real moments</span></footer>
    <dialog id="confirm-dialog" aria-labelledby="confirm-title"><form id="confirmation-form"><span class="dialog-badge" aria-hidden="true">${mission.badge}</span><h2 id="confirm-title">A moment worth keeping.</h2><p>Confirm “${mission.title}” to earn ${mission.points} points and save a memory for ${escape(game.pet.name)}.</p><label class="confirm-check"><input type="checkbox" name="confirmed" required> I confirm we completed this activity together.</label><p class="fine-print">Trying the demo? You can simulate this confirmation. This app does not verify real-world activity.</p><div class="dialog-actions"><button class="secondary" id="cancel-confirm" type="button">Not yet</button><button class="primary" type="submit">Collect our memory</button></div></form></dialog>`;

  app.querySelectorAll('[data-mission]').forEach(button => button.addEventListener('click', () => {
    selectedId = button.dataset.mission;
    notice = '';
    const label = button.getAttribute('aria-label');
    render();
    const selector = label ? '.map-pin.selected' : '.mission-tabs .active';
    app.querySelector(selector)?.focus({ preventScroll: true });
  }));
  app.querySelectorAll('[data-upgrade]').forEach(button => button.addEventListener('click', () => {
    const stat = button.dataset.upgrade;
    notice = `${stat[0].toUpperCase() + stat.slice(1)} upgraded for ${UPGRADE_COST} points.`;
    commit(allocatePoint(game, stat));
    const nextButton = app.querySelector(`[data-upgrade="${stat}"]`);
    if (!nextButton.disabled) nextButton.focus({ preventScroll: true });
    else {
      app.querySelector('.growth h3').setAttribute('tabindex', '-1');
      app.querySelector('.growth h3').focus({ preventScroll: true });
    }
  }));
  app.querySelector('#pet-form').addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    notice = 'Your companion is ready.';
    commit(setPet(game, { name: data.get('petName'), avatar: data.get('avatar') }));
    app.querySelector('.pet-edit summary').focus({ preventScroll: true });
  });
  const dialog = app.querySelector('#confirm-dialog');
  app.querySelector('#open-confirm').addEventListener('click', () => dialog.showModal());
  app.querySelector('#cancel-confirm').addEventListener('click', () => dialog.close());
  app.querySelector('#confirmation-form').addEventListener('submit', event => {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;
    const next = completeMission(game, selectedId, { confirmed: true, at: new Date().toISOString() });
    if (next === game) return;
    dialog.close();
    notice = `${mission.title} complete! ${mission.points} points earned and a memory collected.`;
    commit(next);
    app.querySelector('#journal-title').setAttribute('tabindex', '-1');
    app.querySelector('#journal-title').focus({ preventScroll: true });
    const memory = next.memories.at(-1);
    // Rewards have already been saved; optional artwork cannot roll them back.
    getMemoryArt(memory).then(result => { art.set(memory.missionId, result); });
  });
}

render();
