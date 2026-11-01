/* Predefined neighbourhood profiles for the offline experience. */
window.AfterglowCommunity = (() => {
  const owners = [
    {
      id: "june",
      name: "June",
      area: "Regent’s Canal",
      distance: 180,
      color: "lilac",
      joined: "September 2026",
      streak: 7,
      bio: "Canal walks, curious cats, and taking the scenic route.",
      pets: [
        {
          name: "Nova",
          kind: "cat",
          breed: "Mooncat",
          nature: "Curious spirit",
          xp: 1240,
          stats: { Attack: 18, Defense: 14, Speed: 21, Health: 26 },
          missions: [9, 5, 4],
          km: 12.4,
          wins: 6,
          losses: 2,
          draws: 1,
        },
        {
          name: "Clover",
          kind: "rabbit",
          breed: "Meadow rabbit",
          nature: "Gentle explorer",
          xp: 680,
          stats: { Attack: 10, Defense: 16, Speed: 24, Health: 20 },
          missions: [3, 4, 3],
          km: 3.2,
          wins: 2,
          losses: 1,
          draws: 0,
        },
      ],
    },
    {
      id: "sam",
      name: "Sam",
      area: "Laburnum Street",
      distance: 320,
      color: "peach",
      joined: "October 2026",
      streak: 4,
      bio: "Pip’s favourite route is whichever one has the most new smells.",
      pets: [
        {
          name: "Pip",
          kind: "dog",
          breed: "Corgi",
          nature: "Playful sidekick",
          xp: 960,
          stats: { Attack: 20, Defense: 18, Speed: 15, Health: 28 },
          missions: [7, 5, 2],
          km: 9.8,
          wins: 4,
          losses: 3,
          draws: 0,
        },
      ],
    },
    {
      id: "leila",
      name: "Leila",
      area: "Haggerston Park",
      distance: 540,
      color: "mint",
      joined: "August 2026",
      streak: 12,
      bio: "A little fresh air, a little play, and always room for one more memory.",
      pets: [
        {
          name: "Mochi",
          kind: "cat",
          breed: "Cloud cat",
          nature: "Quiet observer",
          xp: 1580,
          stats: { Attack: 17, Defense: 22, Speed: 19, Health: 30 },
          missions: [11, 7, 5],
          km: 18.6,
          wins: 8,
          losses: 2,
          draws: 2,
        },
        {
          name: "Biscuit",
          kind: "dog",
          breed: "Corgi",
          nature: "Happy wanderer",
          xp: 1120,
          stats: { Attack: 21, Defense: 17, Speed: 20, Health: 27 },
          missions: [8, 5, 3],
          km: 13.1,
          wins: 5,
          losses: 2,
          draws: 1,
        },
      ],
    },
    {
      id: "theo",
      name: "Theo",
      area: "Queensbridge Road",
      distance: 760,
      color: "sky",
      joined: "October 2026",
      streak: 2,
      bio: "New to the neighbourhood. Fern is already making herself at home.",
      pets: [
        {
          name: "Fern",
          kind: "rabbit",
          breed: "Meadow rabbit",
          nature: "Bright-eyed beginner",
          xp: 420,
          stats: { Attack: 9, Defense: 12, Speed: 18, Health: 19 },
          missions: [2, 2, 2],
          km: 2.7,
          wins: 1,
          losses: 1,
          draws: 0,
        },
      ],
    },
  ];
  const sum = (values) => values.reduce((total, value) => total + value, 0);
  const level = (xp) => Math.floor(xp / 100) + 1;
  const number = (value) => value.toLocaleString("en-GB");

  function portrait(pet) {
    if (pet.kind === "cat")
      return `<svg class="neighbor-pet-art" viewBox="0 0 200 200" aria-hidden="true"><use href="#pet-character"/></svg>`;
    const ears =
      pet.kind === "dog"
        ? '<path d="M45 83 36 25Q35 14 48 23L80 56M119 55l33-33q13-8 11 8l-8 57" fill="#c59168"/><path d="m48 35 7 38 17-15m57 1 18 15 5-39" fill="#ecc9b5"/>'
        : '<ellipse cx="73" cy="48" rx="17" ry="43" fill="#d4d6c0" transform="rotate(-12 73 48)"/><ellipse cx="127" cy="48" rx="17" ry="43" fill="#d4d6c0" transform="rotate(12 127 48)"/><ellipse cx="73" cy="45" rx="7" ry="29" fill="#d7b4b6" transform="rotate(-12 73 45)"/><ellipse cx="127" cy="45" rx="7" ry="29" fill="#d7b4b6" transform="rotate(12 127 45)"/>';
    return `<svg class="neighbor-pet-art" viewBox="0 0 200 200" aria-hidden="true"><ellipse cx="100" cy="177" rx="57" ry="10" fill="#0d132330"/>${ears}<ellipse cx="100" cy="139" rx="44" ry="39" fill="${pet.kind === "dog" ? "#c59168" : "#d4d6c0"}"/><rect x="44" y="55" width="112" height="100" rx="45" fill="${pet.kind === "dog" ? "#d8aa7e" : "#e0e2cd"}"/><ellipse cx="100" cy="125" rx="33" ry="23" fill="#f4eedb"/><ellipse cx="75" cy="104" rx="6" ry="9" fill="#26313d"/><ellipse cx="125" cy="104" rx="6" ry="9" fill="#26313d"/><circle cx="73" cy="101" r="2" fill="white"/><circle cx="123" cy="101" r="2" fill="white"/><path d="M94 119q6-5 12 0l-6 7Z" fill="#575364"/><path d="M100 126v5m-9 0q9 9 18 0" fill="none" stroke="#575364" stroke-width="2.5"/><ellipse cx="58" cy="121" rx="9" ry="5" fill="#d99b9f" opacity=".6"/><ellipse cx="142" cy="121" rx="9" ry="5" fill="#d99b9f" opacity=".6"/><path d="M67 149q33 12 66 0l-4 13q-29 10-58 0Z" fill="#d5fb78"/><ellipse cx="75" cy="170" rx="17" ry="10" fill="#f4eedb"/><ellipse cx="125" cy="170" rx="17" ry="10" fill="#f4eedb"/></svg>`;
  }

  function open({ openDialog, dialog, content, icon, escapeHTML }) {
    let query = "";
    let kind = "all";
    const filters = [
      ["all", "All owners"],
      ["dog", "Dogs"],
      ["cat", "Cats"],
      ["rabbit", "Small pets"],
    ];
    const avatar = (owner) =>
      `<span class="neighbor-avatar tone-${owner.color}" aria-hidden="true">${owner.name[0]}</span>`;
    const stat = (value, label) =>
      `<div><dt>${label}</dt><dd>${value}</dd></div>`;

    function show(html) {
      openDialog(html);
      dialog.classList.add("community-dialog");
    }
    function list(returnTo) {
      show(`<header class="neighbors-heading"><span class="eyebrow">YOUR LOCAL PACK</span><h2 id="dialog-title">Meet the neighbourhood.</h2><p>Familiar streets. A few new friends.</p></header>
        <div class="neighbors-location"><span>${icon("pin")} Haggerston, London <span class="neighbors-radius">· Within 1 km</span></span></div>
        <label class="neighbors-search">${icon("compass")}<span class="sr-only">Search owners or pets</span><input id="neighbor-search" type="search" placeholder="Find an owner or a pet" value="${escapeHTML(query)}" autocomplete="off"/></label>
        <div class="neighbors-filters" aria-label="Filter by pet type">${filters.map(([id, label]) => `<button data-neighbor-filter="${id}" aria-pressed="${kind === id}">${label}</button>`).join("")}</div>
        <div class="neighbors-results-heading"><h3>Owners nearby</h3><span id="neighbor-count" role="status" aria-live="polite"></span></div><div id="neighbor-results" class="neighbors-grid"></div>
        <p class="neighbors-footnote">Discover their pets, milestones, and adventures.</p>`);
      content
        .querySelector("#neighbor-search")
        .addEventListener("input", (event) => {
          query = event.target.value;
          results();
        });
      content.querySelectorAll("[data-neighbor-filter]").forEach((button) =>
        button.addEventListener("click", () => {
          kind = button.dataset.neighborFilter;
          content
            .querySelectorAll("[data-neighbor-filter]")
            .forEach((item) =>
              item.setAttribute("aria-pressed", String(item === button)),
            );
          results();
        }),
      );
      results();
      if (returnTo)
        content.querySelector(`[data-neighbor="${returnTo}"]`)?.focus();
    }
    function results() {
      const search = query.trim().toLocaleLowerCase("en-GB");
      const visible = owners.filter(
        (owner) =>
          (kind === "all" || owner.pets.some((pet) => pet.kind === kind)) &&
          [owner.name, owner.area, ...owner.pets.map((pet) => pet.name)].some(
            (text) => text.toLocaleLowerCase("en-GB").includes(search),
          ),
      );
      content.querySelector("#neighbor-count").textContent =
        `${visible.length} ${visible.length === 1 ? "owner" : "owners"}`;
      const grid = content.querySelector("#neighbor-results");
      grid.innerHTML = visible.length
        ? visible
            .map(
              (
                owner,
              ) => `<button class="neighbor-card" data-neighbor="${owner.id}" aria-label="View ${owner.name}’s profile, with ${owner.pets.map((pet) => pet.name).join(" and ")}">
        <span class="neighbor-card-head">${avatar(owner)}<span><strong>${owner.name}</strong><small>${owner.area}</small></span><span class="neighbor-distance">~${owner.distance} m</span></span>
        <span class="neighbor-pets">${owner.pets.map((pet) => `<span class="neighbor-pet-summary"><span class="neighbor-pet-thumb tone-${owner.color}">${portrait(pet)}</span><span><strong>${pet.name}</strong><small>${pet.breed}</small></span></span>`).join("")}</span>
        <span class="neighbor-card-footer">${owner.pets.length} ${owner.pets.length === 1 ? "companion" : "companions"}<span>View profile ${icon("arrow")}</span></span></button>`,
            )
            .join("")
        : `<div class="neighbors-empty">${icon("paw")}<h3>No neighbours found</h3><p>Try another name or pet type.</p><button class="secondary-button" id="neighbor-reset">Clear search & filters</button></div>`;
      grid
        .querySelectorAll("[data-neighbor]")
        .forEach((button) =>
          button.addEventListener("click", () =>
            profile(
              owners.find((owner) => owner.id === button.dataset.neighbor),
            ),
          ),
        );
      grid.querySelector("#neighbor-reset")?.addEventListener("click", () => {
        query = "";
        kind = "all";
        list();
        content.querySelector("#neighbor-search").focus();
      });
    }
    function profile(owner) {
      const totalXP = sum(owner.pets.map((pet) => pet.xp));
      const completed = sum(owner.pets.map((pet) => sum(pet.missions)));
      const wins = sum(owner.pets.map((pet) => pet.wins));
      const losses = sum(owner.pets.map((pet) => pet.losses));
      const draws = sum(owner.pets.map((pet) => pet.draws));
      const breakdown = [
        "Walk & discover",
        "Play & connect",
        "Pause & bond",
      ].map((label, index) => ({
        label,
        count: sum(owner.pets.map((pet) => pet.missions[index])),
      }));
      show(`<button class="neighbor-back" id="neighbors-back">${icon("arrow")} Neighbours</button>
        <header class="neighbor-profile-heading">${avatar(owner)}<div><span class="eyebrow">NEIGHBOURHOOD EXPLORER · LVL ${level(totalXP)}</span><h2 id="dialog-title" tabindex="-1">${owner.name}</h2><p>${owner.area} · ~${owner.distance} m away</p></div></header>
        <p class="neighbor-bio">${owner.bio}</p><div class="neighbor-profile-meta"><span>Joined ${owner.joined}</span></div>
        <section class="neighbor-section" aria-labelledby="neighbor-pets-title"><div class="neighbor-section-title"><h3 id="neighbor-pets-title">The companions</h3><span>${owner.pets.length} ${owner.pets.length === 1 ? "pet" : "pets"}</span></div>
        <div class="neighbor-pet-selector" aria-label="Choose a pet">${owner.pets.map((pet, index) => `<button data-pet-index="${index}" aria-pressed="${index === 0}" aria-controls="neighbor-pet-detail">${portrait(pet)} ${pet.name}</button>`).join("")}</div><div id="neighbor-pet-detail" aria-live="polite"></div></section>
        <section class="neighbor-section" aria-labelledby="neighbor-journey-title"><div class="neighbor-section-title"><h3 id="neighbor-journey-title">The journey so far</h3><span>All companions · All time</span></div>
        <dl class="neighbor-totals">${stat(number(completed), "Missions completed")}${stat(`${sum(owner.pets.map((pet) => pet.km)).toFixed(1)} <small>km</small>`, "Distance explored")}${stat(`${owner.streak} <small>days</small>`, "Current streak")}${stat(number(totalXP), "Total XP earned")}${stat(wins + losses + draws, "Battles played")}${stat(`${wins} / ${losses} / ${draws}`, "Wins / losses / draws")}</dl>
        <div class="neighbor-mission-breakdown">${breakdown.map(({ label, count }) => `<div><span>${label}</span><span class="neighbor-bar" aria-hidden="true"><i style="width:${(count / completed) * 100}%"></i></span><strong>${count}</strong></div>`).join("")}</div></section>
        <section class="neighbor-section" aria-labelledby="neighbor-recent-title"><div class="neighbor-section-title"><h3 id="neighbor-recent-title">Recently completed</h3><span>Latest 3 missions</span></div><ol class="neighbor-activity">${[
          ["walk", "The canal-side wander", owner.pets[0].name, "Today", 80],
          [
            "play",
            "A little chase, a lot of joy",
            owner.pets.at(-1).name,
            "Yesterday",
            60,
          ],
          [
            "bond",
            "The art of doing nothing",
            owner.pets[0].name,
            "Yesterday",
            40,
          ],
        ]
          .map(
            ([type, title, pet, date, xp]) =>
              `<li><span class="neighbor-activity-icon">${icon({ walk: "compass", play: "bolt", bond: "heart" }[type])}</span><div><strong>${title}</strong><small>With ${pet} · ${date}</small></div><span>+${xp} XP</span></li>`,
          )
          .join("")}</ol></section>
`);
      content
        .querySelector("#neighbors-back")
        .addEventListener("click", () => list(owner.id));
      content.querySelectorAll("[data-pet-index]").forEach((button) =>
        button.addEventListener("click", () => {
          content
            .querySelectorAll("[data-pet-index]")
            .forEach((item) =>
              item.setAttribute("aria-pressed", String(item === button)),
            );
          petDetail(owner.pets[Number(button.dataset.petIndex)], owner.color);
        }),
      );
      petDetail(owner.pets[0], owner.color);
      content.querySelector("#dialog-title").focus({ preventScroll: true });
    }
    function petDetail(pet, color) {
      const progress = pet.xp % 100;
      content.querySelector("#neighbor-pet-detail").innerHTML =
        `<div class="neighbor-pet-hero tone-${color}"><div class="neighbor-pet-portrait">${portrait(pet)}</div><div><span class="neighbor-level">LEVEL ${level(pet.xp)}</span><h4>${pet.name}</h4><p>${pet.breed} · ${pet.nature}</p><div class="neighbor-xp-label"><span>${progress} / 100 XP</span><span>Level ${level(pet.xp) + 1}</span></div><progress value="${progress}" max="100" aria-label="${pet.name}’s progress to level ${level(pet.xp) + 1}"></progress></div></div>
        <dl class="neighbor-pet-stats">${Object.entries(pet.stats)
          .map(([name, value]) => stat(value, name))
          .join("")}</dl>
        <div class="neighbor-pet-record"><span><strong>${sum(pet.missions)}</strong> missions</span><span><strong>${pet.km.toFixed(1)}</strong> km explored</span><span><strong>${number(pet.xp)}</strong> total XP</span><span><strong>${pet.wins}</strong> battle wins</span></div>`;
    }
    list();
  }
  return { open };
})();
