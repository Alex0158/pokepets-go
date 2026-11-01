/* Afterglow is a local UI concept. Geography is stylised; players and activities are fixtures. */
const STORAGE_KEY = "pokepet-afterglow-v1";
const missions = [
  {
    id: "moonwalk",
    title: "The canal-side wander",
    kind: "WALK & DISCOVER",
    place: "Regent’s Canal",
    minutes: 15,
    xp: 80,
    filter: "outdoors",
    description:
      "Take the scenic route with your pet. Find a new scent, a quiet corner, or a little moment worth keeping.",
    memory:
      "A moonlit wander, a hundred new scents, and our favorite kind of company.",
    icon: "walk",
    mapPosition: [170, -196],
  },
  {
    id: "play",
    title: "A little chase, a lot of joy",
    kind: "PLAY & CONNECT",
    place: "Home base · demo",
    minutes: 10,
    xp: 60,
    filter: "indoors",
    description:
      "Make room for a little play. Pick your pet’s favorite toy and enjoy an easy session at their pace.",
    memory:
      "The smallest toy. The biggest adventure. A little playtime, just for us.",
    icon: "play",
    mapPosition: [123, 83],
  },
  {
    id: "bond",
    title: "The art of doing nothing",
    kind: "PAUSE & BOND",
    place: "Haggerston Bridge",
    minutes: 5,
    xp: 40,
    filter: "outdoors",
    description:
      "Find somewhere comfortable and settle in together. No distance to cover. Just a little uninterrupted time.",
    memory:
      "We slowed down, watched the world, and made an ordinary moment ours.",
    icon: "bond",
    mapPosition: [-126, -93],
  },
];
const defaults = {
  owner: "Alex",
  pet: "Miso",
  points: 240,
  totalXP: 640,
  completed: [],
  memories: [],
  stats: { Speed: 12, Defense: 10, Attack: 14, Health: 18 },
};
let state = structuredClone(defaults);
let persistent = true;
try {
  const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (
    saved &&
    typeof saved.owner === "string" &&
    typeof saved.pet === "string" &&
    Number.isFinite(saved.points) &&
    saved.points >= 0 &&
    Number.isFinite(saved.totalXP) &&
    saved.totalXP >= 0 &&
    Array.isArray(saved.completed) &&
    Array.isArray(saved.memories) &&
    saved.stats &&
    Object.keys(defaults.stats).every(
      (key) => Number.isFinite(saved.stats[key]) && saved.stats[key] >= 0,
    )
  ) {
    state = {
      ...defaults,
      ...saved,
      completed: saved.completed.filter((id) =>
        missions.some((mission) => mission.id === id),
      ),
      memories: saved.memories.filter(
        (memory) =>
          memory &&
          typeof memory.title === "string" &&
          typeof memory.caption === "string" &&
          typeof memory.date === "string",
      ),
    };
  }
} catch {
  persistent = false;
}
let selectedId = "moonwalk";
let filter = "all";
let zoom = 1;
let neighborhood = null;
let photoURL = "";
let toastTimer;
let battle = null;
let petPreview = null;
const dialog = document.querySelector("#dialog");
const content = document.querySelector("#dialog-content");
const escapeHTML = (value) =>
  String(value).replace(
    /[&<>"']/g,
    (character) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        character
      ],
  );
const icon = (name, className = "") =>
  `<svg class="${className}" aria-hidden="true"><use href="#i-${name}"/></svg>`;
const petArt = (className) =>
  `<svg class="${className || ""}" viewBox="0 0 200 200" aria-hidden="true"><use href="#pet-character"/></svg>`;
function save() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    persistent = false;
    toast("Browser storage is unavailable. Progress lasts for this visit.");
  }
}
function toast(message) {
  const element = document.querySelector("#toast");
  element.textContent = message;
  element.classList.add("visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => element.classList.remove("visible"), 3500);
}
function openDialog(html) {
  disposeBattle();
  disposePetPreview();
  dialog.classList.remove("battle-dialog");
  content.innerHTML = html;
  if (!dialog.open) dialog.showModal();
  dialog.scrollTop = 0;
}
function storageMessage() {
  return persistent
    ? "Saved on this device for this concept."
    : "Storage is unavailable; progress lasts for this visit.";
}
function questArt(kind) {
  if (kind === "play")
    return `<svg viewBox="0 0 100 100" aria-hidden="true"><ellipse cx="51" cy="79" rx="31" ry="8" fill="#15172c" opacity=".35"/><circle cx="50" cy="48" r="27" fill="#b8abef"/><path d="M24 42q27-15 51 9M36 25q-8 30 25 49" fill="none" stroke="#766da9" stroke-width="6"/><path d="m77 20 3-7m6 16 7-2M15 57l-6 4" stroke="#d9fa80" stroke-width="3" stroke-linecap="round"/></svg>`;
  if (kind === "bond")
    return `<svg viewBox="0 0 100 100" aria-hidden="true"><ellipse cx="52" cy="80" rx="32" ry="7" fill="#101f2c" opacity=".4"/><path d="M65 17a27 27 0 1 0 18 43c-31 11-47-23-18-43" fill="#a1dce1"/><path d="m75 20 3 8 8 3-8 3-3 8-3-8-8-3 8-3M24 17l2 5 5 2-5 2-2 5-2-5-5-2 5-2" fill="#e7f8ce"/></svg>`;
  return `<svg viewBox="0 0 100 100" aria-hidden="true"><ellipse cx="49" cy="81" rx="32" ry="7" fill="#15251a" opacity=".4"/><path d="M48 72V45" stroke="#a7b783" stroke-width="6"/><path d="M49 61C17 60 17 21 49 17c29 7 34 36 0 44" fill="#c6e98b"/><path d="M49 63V32m0 17-12-8m12 0 11-9" fill="none" stroke="#7eaa63" stroke-width="3"/><circle cx="76" cy="25" r="5" fill="#d3b8f2"/><circle cx="20" cy="65" r="3" fill="#d3b8f2"/></svg>`;
}
function building(x, y, width, depth, height, tone = 0) {
  const colors = [
    ["#404963", "#293248", "#313b53"],
    ["#42425d", "#2d2c46", "#34334e"],
    ["#314a4e", "#23373e", "#2b4046"],
  ][tone];
  const a = [x, y - height],
    b = [x + width, y - height + width * 0.48],
    c = [x + width - depth, y - height + (width + depth) * 0.48],
    d = [x - depth, y - height + depth * 0.48];
  const points = (list) => list.map((point) => point.join(",")).join(" ");
  return `<g><polygon points="${points([d, c, [c[0], c[1] + height], [d[0], d[1] + height]])}" fill="${colors[1]}"/><polygon points="${points([a, b, [b[0], b[1] + height], [a[0], a[1] + height]])}" fill="${colors[2]}"/><polygon points="${points([a, b, c, d])}" fill="${colors[0]}" stroke="#67718a" stroke-width=".5"/><path d="m${a[0]} ${a[1]} ${width} ${width * 0.48}" stroke="#8991b2" stroke-width="1" opacity=".4"/></g>`;
}
function tree(x, y, size = 1, tone = 0) {
  const color = ["#526d64", "#5c6b83", "#496f65", "#77718f"][tone];
  return `<g transform="translate(${x} ${y}) scale(${size})"><ellipse cy="3" rx="15" ry="7" fill="#0b1423" opacity=".3"/><path d="M0 2v-26" stroke="#8d9c8e" stroke-width="4"/><path d="M-18-25C-19-47-6-64 0-68 9-63 23-46 19-26 16-9-14-10-18-25" fill="${color}"/><path d="M0-20v-35" stroke="#a0b3a0" stroke-width="1" opacity=".25"/></g>`;
}
function marker(mission) {
  const [x, z] = mission.mapPosition;
  const px = 480 + (x - z) * 0.7;
  const py = 245 + (x + z) * 0.37;
  return `<g class="map-marker" data-mission="${mission.id}" role="button" tabindex="0" aria-label="Select ${mission.title}" transform="translate(${px} ${py})"><ellipse class="map-pulse" cy="18" rx="31" ry="13" fill="#d4ff77" opacity=".13"/><ellipse cy="18" rx="19" ry="8" fill="none" stroke="#c9ed7d" stroke-width="1" opacity=".6"/><path d="m-7 0 7 16L7 0" fill="#c9ed7d"/><circle class="marker-ring" cy="-12" r="23" fill="#d4ff77" opacity=".12"/><circle class="marker-circle" cy="-12" r="17" fill="#d5fb78"/><svg x="-10" y="-22" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#324326" stroke-width="1.8"><use href="#i-${mission.icon === "walk" ? "compass" : mission.icon === "play" ? "bolt" : "moon"}"/></svg></g>`;
}
function renderWorld() {
  const city = [
    [440, 200, 44, 40, 32, 1],
    [495, 225, 40, 30, 27, 0],
    [325, 140, 90, 48, 49, 0],
    [405, 303, 75, 65, 40, 1],
    [650, 220, 42, 35, 49, 1],
    [592, 365, 48, 39, 54, 0],
    [225, 230, 53, 33, 51, 0],
    [290, 360, 44, 37, 42, 2],
    [610, 111, 50, 35, 52, 0],
    [710, 170, 47, 32, 45, 1],
    [430, 94, 47, 32, 38, 0],
    [175, 312, 43, 32, 45, 1],
  ]
    .map((args) => building(...args))
    .join("");
  const trees = [
    [279, 283],
    [258, 310],
    [650, 372],
    [699, 401],
    [711, 441],
    [545, 110],
  ]
    .map(([x, y]) => tree(x, y, 0.6))
    .join("");
  document.querySelector("#world-map").innerHTML = `
    <svg viewBox="0 0 960 650" preserveAspectRatio="xMidYMid slice" role="group" aria-label="Stylised map around 55 Laburnum Street in Haggerston, London. Regent’s Canal lies north of Laburnum Street, with Haggerston Bridge to the west and Queensbridge Road to the east. Distances and buildings are approximate.">
      <g aria-hidden="true">
      <rect width="960" height="650" fill="#293d49"/>
      <g transform="matrix(.7 .37 -.7 .37 480 245)">
        <rect x="-365" y="83" width="156" height="114" fill="#48685b"/>
        <rect x="390" y="321" width="350" height="300" fill="#496c58"/>
        <path d="M-900 35H900M-900 285H900M-150-900V285M350-900V900" stroke="#8d9797" stroke-width="42" fill="none"/>
        <path d="M-900 35H900M-900 285H900M-150-900V285M350-900V900" stroke="#35404f" stroke-width="28" fill="none"/>
        <path d="M-900-148H900" stroke="#8a989a" stroke-width="90"/>
        <path d="M-900-148H900" stroke="#366c7f" stroke-width="64"/>
        <path d="M-900-148H900" stroke="#90c3cc" stroke-width="1.5" stroke-dasharray="20 30"/>
        <path d="M-150-191V-105M350-191V-105" stroke="#b2a496" stroke-width="44"/>
        <path d="M-150-191V-105M350-191V-105" stroke="#465365" stroke-width="28"/>
        <path class="route-path" d="M-110 100V17H-126V-196H170M-110 100V17H123V83M-110 100V17H-126V-93" fill="none" stroke="#d5fb78" stroke-width="4" stroke-dasharray="7 10"/>
      </g>
      ${city}${trees}
      <text x="590" y="221" class="map-location-label" transform="rotate(28 590 221)">REGENT’S CANAL</text>
      <text x="580" y="320" class="map-location-label" transform="rotate(28 580 320)">LABURNUM STREET</text>
      <text x="361" y="372" class="map-location-label" transform="rotate(28 361 372)">HAGGERSTON BATHS</text>
      <text x="640" y="433" class="map-location-label" transform="rotate(-28 640 433)">QUEENSBRIDGE RD</text>
      <text x="285" y="151" class="map-location-label">BRIDGE ACADEMY</text>
      <rect x="461" y="174" width="137" height="34" rx="5" fill="#182932" stroke="#d5fb7877"/>
      <text x="529" y="188" text-anchor="middle" class="map-player-label">55 LABURNUM ST</text>
      <text x="529" y="200" text-anchor="middle" class="map-player-label">HOXTON DOCKS · E2 8BD</text>
      <svg class="map-owner" x="306" y="170" width="47" height="76" viewBox="0 0 100 180"><use href="#owner-character"/></svg>
      <svg class="map-pet" x="346" y="211" width="40" height="40" viewBox="0 0 200 200"><use href="#pet-character"/></svg>
      <text x="343" y="264" text-anchor="middle" class="map-player-label">YOU + <tspan id="map-pet-name">${escapeHTML(state.pet.toUpperCase())}</tspan></text>
      </g>
      ${missions.map(marker).join("")}
    </svg>`;
  document.querySelectorAll(".map-marker").forEach((element) => {
    element.addEventListener("click", () =>
      selectMission(element.dataset.mission),
    );
    element.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        selectMission(element.dataset.mission);
      }
    });
  });
}
function selectMission(id) {
  selectedId = id;
  renderSelected();
  document.querySelector("#selected-mission").animate(
    [
      { transform: "translateY(5px)", opacity: 0.7 },
      { transform: "translateY(0)", opacity: 1 },
    ],
    {
      duration: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? 0
        : 220,
    },
  );
}
function renderSelected() {
  neighborhood?.select(selectedId);
  const mission = missions.find((item) => item.id === selectedId);
  const completed = state.completed.includes(mission.id);
  document.querySelector("#selected-mission").innerHTML =
    `<div class="selected-label"><span>${completed ? "ADVENTURE COLLECTED" : "YOUR NEXT ADVENTURE"}</span><span>0${missions.indexOf(mission) + 1} / 03</span></div><h2>${mission.title}</h2><p>${mission.place} · ${mission.filter === "indoors" ? "A little adventure at home" : "A new perspective awaits"}</p><div class="mission-meta"><span>${icon("clock")}${mission.minutes} min</span><span class="xp">${icon("star")}+${mission.xp} XP</span></div><button class="primary-button" id="selected-start">${completed ? "Revisit your memory" : "Let’s go together"}${icon("arrow")}</button>`;
  document
    .querySelector("#selected-start")
    .addEventListener("click", () =>
      completed ? showMemories() : showMission(mission.id),
    );
}
function renderQuests() {
  document.querySelector("#quest-grid").innerHTML = missions
    .filter((mission) => filter === "all" || mission.filter === filter)
    .map(
      (mission) =>
        `<button class="quest-card" data-quest="${mission.id}"><div class="quest-art">${questArt(mission.icon)}</div><div><small>${state.completed.includes(mission.id) ? "COLLECTED · " : ""}${mission.kind}</small><h3>${mission.title}</h3><p>${mission.minutes} min <span>·</span> +${mission.xp} XP <span>·</span> ${mission.filter === "indoors" ? "Indoors" : "Outdoors"}</p></div>${icon("arrow", "quest-arrow")}</button>`,
    )
    .join("");
  document.querySelectorAll("[data-quest]").forEach((button) =>
    button.addEventListener("click", () => {
      selectMission(button.dataset.quest);
      showMission(button.dataset.quest);
    }),
  );
}
function refresh() {
  document.querySelector("#points").textContent = state.points;
  document.querySelector("#pet-name").textContent = state.pet;
  document.querySelector("#bond-pet-name").textContent = state.pet;
  document.querySelector("#owner-name").textContent = state.owner;
  document.querySelector("#level").textContent = String(
    Math.floor(state.totalXP / 100) + 1,
  ).padStart(2, "0");
  const label = document.querySelector("#map-pet-name");
  if (label) label.textContent = state.pet.toUpperCase();
  renderSelected();
  renderQuests();
}
function showMission(id, active = false) {
  const mission = missions.find((item) => item.id === id);
  if (state.completed.includes(id)) {
    showMemories();
    return;
  }
  openDialog(
    `<span class="eyebrow">${active ? "YOUR ADVENTURE, YOUR PACE" : mission.kind}</span><h2 id="dialog-title">${mission.title}</h2><p>${mission.description}</p><div class="dialog-art">${questArt(mission.icon)}</div><div class="mission-meta"><span>${icon("clock")}${mission.minutes} min</span><span>${icon("pin")}${mission.place}</span><span class="xp">+${mission.xp} XP</span></div><p>${active ? "When you’re ready, confirm you enjoyed this activity together. You can also skip it — there’s always another adventure." : "An adventure for you and your pet. A new memory for your collection."}</p><p class="confirm-note">${active ? "Owner-confirmed activity · no location tracking." : "Sample world · take any activity at your pet’s pace."}</p><div class="dialog-actions"><button class="secondary-button" id="mission-cancel">${active ? "Skip for now" : "Maybe later"}</button><button class="primary-button" id="mission-action">${active ? "We did it! Collect memory" : "Start adventure"}${icon("arrow")}</button></div>`,
  );
  document.querySelector("#mission-cancel").addEventListener("click", () => {
    dialog.close();
    if (active) toast("Adventure skipped. No points spent or awarded.");
  });
  document
    .querySelector("#mission-action")
    .addEventListener("click", () =>
      active ? completeMission(id) : showMission(id, true),
    );
}
function completeMission(id) {
  if (state.completed.includes(id)) {
    toast("This adventure is already in your memories.");
    return;
  }
  const mission = missions.find((item) => item.id === id);
  state.completed.push(id);
  state.points += mission.xp;
  state.totalXP += mission.xp;
  state.memories.unshift({
    id,
    title: mission.title,
    caption: mission.memory,
    date: new Date().toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }),
    xp: mission.xp,
    icon: mission.icon,
  });
  save();
  refresh();
  openDialog(
    `<span class="eyebrow">AN ORDINARY MOMENT. YOURS FOREVER.</span><h2 id="dialog-title">A new story to keep.</h2><div class="dialog-art">${petArt()}</div><div class="reward">+${mission.xp} XP</div><p><strong>${escapeHTML(state.pet)}</strong> loved that. “${mission.memory}”</p><p class="confirm-note">Memory collected · ${storageMessage()}</p><div class="dialog-actions"><button class="secondary-button" id="reward-close">Back to map</button><button class="primary-button" id="reward-journal">Open memories ${icon("book")}</button></div>`,
  );
  document
    .querySelector("#reward-close")
    .addEventListener("click", () => dialog.close());
  document
    .querySelector("#reward-journal")
    .addEventListener("click", showMemories);
}
function showPet() {
  openDialog(
    `<span class="eyebrow">YOUR LITTLE ADVENTURER</span><h2 id="dialog-title">Meet ${escapeHTML(state.pet)}.</h2><p>Curious spirit. Loyal sidekick. Always ready for one more little adventure.</p><div id="pet-profile-stage" class="pet-profile-stage">${petArt()}</div><div class="pet-profile-actions" aria-label="Play with your pet"><button class="secondary-button" data-pet-motion="wave">${icon("paw")} Say hello</button><button class="secondary-button" data-pet-motion="play">${icon("star")} Play</button><button class="secondary-button" data-pet-motion="heal">${icon("heart")} Give love</button></div><p id="pet-profile-mood" class="pet-profile-mood" role="status" aria-live="polite">A curious glance. A little tail wag. Happy to see you.</p><div class="detail-label">${state.points} XP available · 40 XP per upgrade</div><div class="stats-grid">${Object.entries(
      state.stats,
    )
      .map(
        ([name, value]) =>
          `<div class="stat"><div><span>${name}</span><strong>${value}</strong></div><button data-upgrade="${name}" aria-label="Upgrade ${name} for 40 XP" ${state.points < 40 ? "disabled" : ""}>+1</button></div>`,
      )
      .join(
        "",
      )}</div><p class="confirm-note">Fictional game stats · ${storageMessage()}</p><button class="primary-button" id="pet-customize">Customize your duo ${icon("arrow")}</button>`,
  );
  mountPetPreview();
  document.querySelectorAll("[data-upgrade]").forEach((button) =>
    button.addEventListener("click", () => {
      if (state.points < 40) {
        toast("Complete another adventure to earn more XP.");
        return;
      }
      state.stats[button.dataset.upgrade] += 1;
      state.points -= 40;
      save();
      refresh();
      showPet();
      toast(`${button.dataset.upgrade} +1. Ready for what’s next.`);
    }),
  );
  document
    .querySelector("#pet-customize")
    .addEventListener("click", showProfile);
}
function disposePetPreview() {
  const previous = petPreview;
  petPreview = null;
  previous?.scene?.dispose();
}
function mountPetPreview() {
  const host = document.querySelector("#pet-profile-stage");
  const status = document.querySelector("#pet-profile-mood");
  const buttons = [...document.querySelectorAll("[data-pet-motion]")];
  const preview = { scene: null, busy: false };
  petPreview = preview;
  try {
    preview.scene = window.PokepetArena?.mount(host, {
      theme: "afterglow",
      playerKind: "cat",
      mode: "profile",
    });
  } catch {
    host.innerHTML = petArt();
  }
  if (!preview.scene || host.dataset.renderer !== "webgl") {
    status.textContent =
      "3D is unavailable here. Your profile and upgrades still work.";
    buttons.forEach((button) => {
      button.disabled = true;
    });
    return;
  }
  const reactions = {
    wave: [
      `${state.pet} lifts a paw to say hello!`,
      "A little wave, just for you.",
    ],
    play: [`${state.pet} does a happy hop!`, "More play? That tail says yes."],
    heal: [
      `${state.pet} leans into the love.`,
      "Happy eyes. A very happy companion.",
    ],
  };
  buttons.forEach((button) =>
    button.addEventListener("click", async () => {
      if (petPreview !== preview || preview.busy) return;
      preview.busy = true;
      buttons.forEach((item) => {
        item.disabled = true;
      });
      const move = button.dataset.petMotion;
      status.textContent = reactions[move][0];
      try {
        await preview.scene.play({ actor: "player", move });
      } finally {
        if (petPreview === preview && dialog.open) {
          preview.busy = false;
          status.textContent = reactions[move][1];
          buttons.forEach((item) => {
            item.disabled = host.dataset.renderer !== "webgl";
          });
        }
      }
    }),
  );
}
function showMemories() {
  openDialog(
    `<span class="eyebrow">THE GOOD DAYS, COLLECTED</span><h2 id="dialog-title">Little moments.<br>Lasting memories.</h2><p>Your adventures with ${escapeHTML(state.pet)}, one chapter at a time.</p><div class="memory-list">${state.memories.length ? state.memories.map((memory) => `<article class="memory-card">${questArt(memory.icon)}<div><h3>${escapeHTML(memory.title)}</h3><p>${escapeHTML(memory.caption)}</p><small>${escapeHTML(memory.date)} · +${Number(memory.xp) || 0} XP</small></div></article>`).join("") : `<div class="empty-state">${icon("book")}<p>Your first memory is waiting to happen.<br>Complete an adventure to start your collection.</p></div>`}</div><p class="confirm-note">${storageMessage()} Memory artwork is preset illustration.</p><button class="primary-button" id="memories-explore">Find an adventure ${icon("compass")}</button>`,
  );
  document
    .querySelector("#memories-explore")
    .addEventListener("click", () => dialog.close());
}
function showCommunity() {
  openDialog(
    `<span class="eyebrow">A NEIGHBORHOOD OF LITTLE ADVENTURERS</span><h2 id="dialog-title">More paws.<br>More possibilities.</h2><p>Every adventure adds a little light. Together, this neighborhood is working toward 100 adventures.</p><div class="community-meter"><i></i></div><p><strong style="color:var(--cyan)">68 / 100 adventures</strong> · Sample community goal</p><div class="community-list"><div class="community-person">${petArt()}<div><strong>June & Nova</strong><small>Regent’s Canal · Sample player</small></div><span>420 XP</span></div><div class="community-person">${petArt()}<div><strong>Sam & Pip</strong><small>Laburnum Street · Sample player</small></div><span>360 XP</span></div><div class="community-person">${petArt()}<div><strong>${escapeHTML(state.owner)} & ${escapeHTML(state.pet)}</strong><small>Your local concept progress</small></div><span>${state.totalXP} XP</span></div></div><p class="confirm-note">Community participation and other players are fixtures in this UI concept. Your activities stay on this device.</p><button class="primary-button" id="community-battle">Preview a friendly match ${icon("swords")}</button>`,
  );
  document
    .querySelector("#community-battle")
    .addEventListener("click", showBattle);
}
function showProfile() {
  openDialog(
    `<span class="eyebrow">TWO CHARACTERS. ONE GREAT TEAM.</span><h2 id="dialog-title">Make it your duo.</h2><div class="profile-preview"><div><svg viewBox="0 0 100 180"><use href="#owner-character"/></svg><span>Owner avatar</span></div><div>${petArt()}<span>Separate pet</span></div></div><form id="profile-form"><label>Your name<input name="owner" type="text" maxlength="24" required value="${escapeHTML(state.owner)}"/></label><label>Your pet’s name<input name="pet" type="text" maxlength="18" required value="${escapeHTML(state.pet)}"/></label><label>Owner photo preview<input id="owner-photo" type="file" accept="image/png,image/jpeg,image/webp"/></label><div id="photo-container">${photoURL ? `<img class="photo-preview" src="${photoURL}" alt="Your selected owner photo preview"/>` : ""}</div><p class="confirm-note">Preview only. Your photo stays in this browser session and is not uploaded or transformed. The map uses a preset owner avatar; AI generation is not connected.</p><button class="primary-button" type="submit">Save your duo ${icon("arrow")}</button></form>`,
  );
  document.querySelector("#owner-photo").addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (!file) return;
    if (
      !["image/png", "image/jpeg", "image/webp"].includes(file.type) ||
      file.size > 5 * 1024 * 1024
    ) {
      toast("Choose a PNG, JPEG, or WebP image under 5 MB.");
      event.target.value = "";
      return;
    }
    if (photoURL) URL.revokeObjectURL(photoURL);
    photoURL = URL.createObjectURL(file);
    document.querySelector("#photo-container").innerHTML =
      `<img class="photo-preview" src="${photoURL}" alt="Your selected owner photo preview"/>`;
  });
  document
    .querySelector("#profile-form")
    .addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(event.target);
      const owner = String(data.get("owner")).trim();
      const pet = String(data.get("pet")).trim();
      if (!owner || !pet) {
        toast("Give both your owner and pet a name.");
        return;
      }
      state.owner = owner.slice(0, 24);
      state.pet = pet.slice(0, 18);
      save();
      refresh();
      dialog.close();
      toast("Your duo is ready for the next chapter.");
    });
}
function disposeBattle() {
  if (!battle) return;
  const previous = battle;
  battle = null;
  previous.scene?.dispose();
}
function showBattle() {
  openDialog(`
    <div class="arena-heading"><span class="eyebrow">MOONRISE ARENA / SIMULATED MATCH</span><h2 id="dialog-title">A little friendly rivalry.</h2><p>Your mooncat. A worthy rival. One unforgettable showdown.</p></div>
    <div class="cinematic-arena">
      <div id="battle-stage" class="arena-canvas" aria-label="Animated battle between your mooncat and Nova the corgi"></div>
      <div class="arena-grain"></div>
      <div class="battle-hud opponent-hud"><div class="hud-title"><strong>Nova</strong><span>Lv. 07</span></div><div class="hud-species">CORGI <i>EARTH</i></div><div class="hud-health"><b>HP</b><div class="hp-track enemy-hp"><i id="enemy-bar"></i></div></div><div class="hud-numbers"><b id="enemy-hp">100</b> / 100</div></div>
      <div class="round-badge" id="battle-round">MOVE 01 / 20 <span>YOUR TURN</span></div>
      <div class="battle-hud player-hud"><div class="hud-title"><strong>${escapeHTML(state.pet)}</strong><span>Lv. ${String(Math.floor(state.totalXP / 100) + 1).padStart(2, "0")}</span></div><div class="hud-species">MOONCAT <i>LUNAR</i></div><div class="hud-health"><b>HP</b><div class="hp-track"><i id="player-bar"></i></div></div><div class="hud-numbers"><b id="player-hp">100</b> / 100</div></div>
      <div class="arena-result" id="battle-result" hidden><span id="result-label">VICTORY</span><strong id="result-title"></strong><p id="result-note"></p></div>
    </div>
    <div class="battle-console"><div class="battle-narrative"><span class="eyebrow" id="battle-prompt">WHAT WILL ${escapeHTML(state.pet.toUpperCase())} DO?</span><p id="battle-log" role="status" aria-live="polite">The arena is quiet. Your sidekick looks back at you, ready. Choose your move.</p><span class="battle-caption">TURN-BASED · 20 INDIVIDUAL MOVES</span></div><div class="battle-moves" id="battle-moves">
      <button data-move="pounce"><span>${icon("paw")}<strong>Pounce</strong></span><small>PHYSICAL <em>26 DMG · ∞</em></small></button>
      <button data-move="spark"><span>${icon("star")}<strong>Star spark</strong></span><small>LUNAR <em id="spark-pp">38 DMG · 3/3 PP</em></small></button>
      <button data-move="guard"><span>${icon("compass")}<strong>Guard</strong></span><small>DEFENSE <em>50% BLOCK · ∞</em></small></button>
      <button data-move="heal"><span>${icon("heart")}<strong>Moon mend</strong></span><small>RESTORE <em id="heal-pp">+35 HP · 1/1 PP</em></small></button>
    </div></div>
    <div class="battle-footer"><p>Scripted rival · no battle XP. Special and healing moves are UI proposals.</p><div><button class="secondary-button" id="battle-restart">Replay</button><button class="secondary-button" id="battle-leave">Leave arena ↗</button></div></div>
  `);
  dialog.classList.add("battle-dialog");
  battle = {
    hp: 100,
    enemy: 100,
    turn: 0,
    moves: 0,
    playerGuard: false,
    ended: false,
    busy: false,
    sparks: 3,
    heals: 1,
    enemyGuard: false,
    scene: null,
  };
  const stage = document.querySelector("#battle-stage");
  if (window.PokepetArena) {
    battle.scene = window.PokepetArena.mount(stage, {
      theme: "afterglow",
      playerKind: "cat",
      opponentKind: "corgi",
    });
  } else {
    stage.innerHTML = `${petArt("fighter left")}${petArt("fighter right")}<span class="arena-fallback-label">Static character fallback</span>`;
  }
  document
    .querySelectorAll("[data-move]")
    .forEach((button) =>
      button.addEventListener("click", () => battleMove(button.dataset.move)),
    );
  document
    .querySelector("#battle-restart")
    .addEventListener("click", showBattle);
  document
    .querySelector("#battle-leave")
    .addEventListener("click", () => dialog.close());
  updateBattleUI(battle);
}
function updateBattleUI(match) {
  if (battle !== match || !dialog.open) return;
  document.querySelector("#player-hp").textContent = match.hp;
  document.querySelector("#enemy-hp").textContent = match.enemy;
  document.querySelector("#player-bar").style.width = `${match.hp}%`;
  document.querySelector("#enemy-bar").style.width = `${match.enemy}%`;
  document
    .querySelector("#player-bar")
    .classList.toggle("low-health", match.hp <= 25);
  document
    .querySelector("#enemy-bar")
    .classList.toggle("low-health", match.enemy <= 25);
  document.querySelector("#spark-pp").textContent =
    `38 DMG · ${match.sparks}/3 PP`;
  document.querySelector("#heal-pp").textContent =
    `+35 HP · ${match.heals}/1 PP`;
  document.querySelectorAll("[data-move]").forEach((button) => {
    button.disabled =
      match.busy ||
      match.ended ||
      (button.dataset.move === "spark" && !match.sparks) ||
      (button.dataset.move === "heal" && (!match.heals || match.hp === 100));
  });
}
async function animateBattle(match, actor, move) {
  if (battle !== match || !dialog.open) return false;
  try {
    if (match.scene) await match.scene.play({ actor, move });
    else {
      const sprite = document.querySelector(
        actor === "player" ? ".arena-canvas .left" : ".arena-canvas .right",
      );
      if (
        sprite &&
        !window.matchMedia("(prefers-reduced-motion: reduce)").matches
      )
        await sprite.animate(
          [
            { translate: "0 0" },
            { translate: actor === "player" ? "35px -15px" : "-35px -15px" },
            { translate: "0 0" },
          ],
          { duration: 500 },
        ).finished;
    }
  } catch {
    /* Preserve the turn if the optional renderer becomes unavailable. */
  }
  return battle === match && dialog.open;
}
async function finishBattle(match, result) {
  match.ended = true;
  match.busy = false;
  updateBattleUI(match);
  document.querySelector("#battle-round").innerHTML =
    `MOVE ${String(match.moves).padStart(2, "0")} / 20 <span>MATCH COMPLETE</span>`;
  const messages = {
    victory: [
      `${state.pet} takes the win.`,
      "A brave little heart. A very big moment.",
    ],
    defeat: [
      "Nova wins this round.",
      "Every great adventurer gets another chance.",
    ],
    draw: ["Evenly matched.", "Twenty moves. Two worthy little rivals."],
  };
  document.querySelector("#battle-log").textContent =
    `${messages[result][0]} ${messages[result][1]} No XP was awarded; your adventure progress is unchanged.`;
  document.querySelector("#battle-prompt").textContent =
    "A FRIENDLY MATCH, WELL PLAYED";
  if (result !== "draw") {
    if (
      !(await animateBattle(
        match,
        result === "victory" ? "opponent" : "player",
        "faint",
      ))
    )
      return;
    if (
      !(await animateBattle(
        match,
        result === "victory" ? "player" : "opponent",
        "victory",
      ))
    )
      return;
  }
  if (battle !== match || !dialog.open) return;
  document.querySelector("#result-label").textContent = result.toUpperCase();
  document.querySelector("#result-title").textContent = messages[result][0];
  document.querySelector("#result-note").textContent = messages[result][1];
  document.querySelector("#battle-result").hidden = false;
}
async function battleMove(move) {
  const match = battle;
  if (
    !match ||
    match.ended ||
    match.busy ||
    !["pounce", "spark", "guard", "heal"].includes(move)
  )
    return;
  if (
    (move === "spark" && !match.sparks) ||
    (move === "heal" && (!match.heals || match.hp === 100))
  )
    return;
  match.busy = true;
  match.turn++;
  updateBattleUI(match);
  document.querySelector("#battle-round").innerHTML =
    `MOVE ${String(match.moves + 1).padStart(2, "0")} / 20 <span>YOUR MOVE</span>`;
  const moveName = {
    pounce: "Pounce",
    spark: "Star spark",
    guard: "Guard",
    heal: "Moon mend",
  }[move];
  document.querySelector("#battle-log").textContent =
    `${state.pet} uses ${moveName}!`;
  document.querySelector("#battle-prompt").textContent =
    "A LITTLE COURAGE GOES A LONG WAY";
  if (
    !(await animateBattle(
      match,
      "player",
      { pounce: "attack", spark: "special", guard: "guard", heal: "heal" }[
        move
      ],
    ))
  )
    return;
  match.moves++;
  if (move === "guard") match.playerGuard = true;
  if (move === "spark") match.sparks--;
  if (move === "heal") {
    match.heals--;
    match.hp = Math.min(100, match.hp + 35);
  }
  const rawDamage = move === "spark" ? 38 : move === "pounce" ? 26 : 0;
  const damage = match.enemyGuard ? Math.ceil(rawDamage * 0.5) : rawDamage;
  match.enemy = Math.max(0, match.enemy - damage);
  if (rawDamage > 0) match.enemyGuard = false;
  updateBattleUI(match);
  if (match.enemy === 0) {
    await finishBattle(match, "victory");
    return;
  }
  if (match.moves >= 20) {
    await finishBattle(match, "draw");
    return;
  }
  document.querySelector("#battle-round").innerHTML =
    `MOVE ${String(match.moves + 1).padStart(2, "0")} / 20 <span>NOVA’S TURN</span>`;
  const enemyDefends = match.turn % 2 === 0;
  document.querySelector("#battle-log").textContent = enemyDefends
    ? `${moveName}${damage ? ` dealt ${damage} damage` : " is complete"}. Nova braces for the next move!`
    : `${moveName}${damage ? ` dealt ${damage} damage` : " is complete"}. Nova answers with a charging tackle!`;
  if (
    !(await animateBattle(match, "opponent", enemyDefends ? "guard" : "attack"))
  )
    return;
  match.moves++;
  const blocked = !enemyDefends && match.playerGuard;
  const reply = enemyDefends ? 0 : blocked ? 12 : 24;
  if (!enemyDefends) match.playerGuard = false;
  match.hp = Math.max(0, match.hp - reply);
  if (enemyDefends) match.enemyGuard = true;
  updateBattleUI(match);
  if (match.hp === 0) {
    await finishBattle(match, "defeat");
    return;
  }
  if (match.moves >= 20) {
    await finishBattle(match, "draw");
    return;
  }
  match.busy = false;
  updateBattleUI(match);
  document.querySelector("#battle-round").innerHTML =
    `MOVE ${String(match.moves + 1).padStart(2, "0")} / 20 <span>YOUR TURN</span>`;
  document.querySelector("#battle-prompt").textContent =
    `WHAT WILL ${state.pet.toUpperCase()} DO?`;
  document.querySelector("#battle-log").textContent = enemyDefends
    ? "Nova is guarding. Your next attack will deal half damage. Choose your move."
    : blocked
      ? "Great defense! Nova’s tackle dealt only 12 damage. Your move."
      : `Nova’s tackle dealt ${reply} damage. Your sidekick is ready for your next move.`;
}
document.querySelectorAll("[data-view]").forEach((button) =>
  button.addEventListener("click", () => {
    const view = button.dataset.view;
    if (view === "explore") {
      if (dialog.open) dialog.close();
      window.scrollTo({
        top: 0,
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "instant"
          : "smooth",
      });
      return;
    }
    ({
      pet: showPet,
      memories: showMemories,
      community: showCommunity,
      battle: showBattle,
      profile: showProfile,
    })[view]();
  }),
);
document
  .querySelector(".dialog-close")
  .addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) {
    const bounds = dialog.getBoundingClientRect();
    if (
      event.clientX < bounds.left ||
      event.clientX > bounds.right ||
      event.clientY < bounds.top ||
      event.clientY > bounds.bottom
    )
      dialog.close();
  }
});
dialog.addEventListener("close", () => {
  disposeBattle();
  disposePetPreview();
  dialog.classList.remove("battle-dialog");
});
window.addEventListener("pagehide", disposePetPreview);
document.querySelectorAll("[data-filter]").forEach((button) =>
  button.addEventListener("click", () => {
    filter = button.dataset.filter;
    document
      .querySelectorAll("[data-filter]")
      .forEach((item) => item.classList.toggle("active", item === button));
    renderQuests();
  }),
);
document.querySelector("#map-mode").addEventListener("click", (event) => {
  const active = event.currentTarget.getAttribute("aria-pressed") !== "true";
  event.currentTarget.setAttribute("aria-pressed", String(active));
  event.currentTarget.textContent = active ? "Hide routes" : "Show routes";
  document.querySelector("#world-map").classList.toggle("show-routes", active);
  neighborhood?.setRoutes(active);
});
document.querySelector("#map-motion").addEventListener("click", (event) => {
  const paused = event.currentTarget.getAttribute("aria-pressed") !== "true";
  event.currentTarget.setAttribute("aria-pressed", String(paused));
  event.currentTarget.setAttribute(
    "aria-label",
    paused ? "Resume map animation" : "Pause map animation",
  );
  event.currentTarget.textContent = paused ? "Resume" : "Pause";
  neighborhood?.setPaused(paused);
});
function setZoom(nextZoom) {
  zoom = Math.max(0.85, Math.min(1.4, nextZoom));
  if (neighborhood) neighborhood.setZoom(zoom);
  else
    document.querySelector("#world-map>svg").style.transform = `scale(${zoom})`;
}
document
  .querySelector("#zoom-in")
  .addEventListener("click", () => setZoom(zoom + 0.15));
document
  .querySelector("#zoom-out")
  .addEventListener("click", () => setZoom(zoom - 0.15));
document.querySelector("#recenter").addEventListener("click", () => {
  setZoom(1);
  neighborhood?.recenter();
  selectMission("moonwalk");
  toast("Back to you and your sidekick.");
});
renderWorld();
try {
  neighborhood = window.AfterglowMap?.mount(
    document.querySelector("#world-map"),
    {
      missions,
      selectMission,
      petName: state.pet,
    },
  );
  if (neighborhood) {
    document.querySelector("#map-motion").hidden = false;
    document.querySelector("#map-perspective-hint").hidden = false;
  }
} catch (error) {
  console.warn("The 3D map is unavailable; using the illustrated map.", error);
  renderWorld();
}
refresh();
if (!persistent)
  toast(
    "Browser storage is unavailable. This concept works for the current visit.",
  );
