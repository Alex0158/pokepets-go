import { MISSIONS, createProgress, completeMission, upgradeStat } from './missions.mjs';

let progress = createProgress();
let selectedId = MISSIONS[0].id;
const missionsEl = document.querySelector('#missions');
const detailsEl = document.querySelector('#details');
const statsEl = document.querySelector('#stats');
const pointsEl = document.querySelector('#points');
const messageEl = document.querySelector('#message');

function render() {
  const selected = MISSIONS.find(m => m.id === selectedId);
  missionsEl.replaceChildren(...MISSIONS.map(m => {
    const button = document.createElement('button');
    button.className = m.id === selectedId ? 'mission selected' : 'mission';
    button.textContent = `${m.title} · ${m.points} pts`;
    button.setAttribute('aria-pressed', String(m.id === selectedId));
    button.addEventListener('click', () => { selectedId = m.id; messageEl.textContent = ''; render(); });
    return button;
  }));
  detailsEl.replaceChildren();
  const title = document.createElement('h2'); title.textContent = selected.title;
  const description = document.createElement('p'); description.textContent = `${selected.place} · ${selected.description}`;
  const button = document.createElement('button');
  const completed = progress.completedMissionIds.includes(selected.id);
  button.textContent = completed ? 'Completed' : `Mark completed · +${selected.points} points`;
  button.disabled = completed;
  button.addEventListener('click', () => { progress = completeMission(progress, selected.id, true); messageEl.textContent = `Activity completed. You earned ${selected.points} points.`; render(); });
  detailsEl.append(title, description, button);
  pointsEl.textContent = String(progress.points);
  statsEl.replaceChildren(...Object.entries(progress.stats).map(([stat, value]) => {
    const row = document.createElement('div'); row.className = 'stat';
    const label = document.createElement('span'); label.textContent = `${stat[0].toUpperCase()}${stat.slice(1)} · ${value}`;
    const plus = document.createElement('button'); plus.textContent = '+'; plus.setAttribute('aria-label', `Upgrade ${stat} for 5 points`); plus.disabled = progress.points < 5;
    plus.addEventListener('click', () => { progress = upgradeStat(progress, stat); messageEl.textContent = `${stat} upgraded.`; render(); });
    row.append(label, plus); return row;
  }));
}
render();
