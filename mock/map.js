/* Stylised Laburnum Street, Haggerston. World x is east; z is south.
 * Layout references and approximation limits are documented in README.md. */
window.AfterglowMap = (() => {
  const origin = [-110, 100];
  const canal = { north: -180, south: -116 };
  const roads = {
    laburnum: 35,
    whiston: 285,
    haggerston: -150,
    queensbridge: 350,
  };
  const players = [
    {
      name: "June",
      pet: "Nova",
      species: "Cat",
      breed: "Silver tabby",
      coat: "Silver & charcoal",
      fur: "#9da4ae",
      marking: "#505864",
      outing: "Harness stroll with June",
      position: [255, -198],
      color: "#c6baff",
      activity: "Walking the towpath",
    },
    {
      name: "Sam",
      pet: "Pip",
      species: "Dog",
      breed: "Pembroke Welsh corgi",
      coat: "Ginger & white",
      fur: "#cc8c50",
      marking: "#f6e8d3",
      outing: "Lead walk with Sam",
      position: [195, 62],
      color: "#edbd97",
      activity: "Exploring Laburnum Street",
    },
    {
      name: "Leila",
      pet: "Mochi",
      species: "Cat",
      breed: "Domestic longhair",
      coat: "Ivory & apricot",
      fur: "#eee7da",
      marking: "#d2a57d",
      outing: "Quiet harness break with Leila",
      position: [535, 400],
      color: "#a8dbbc",
      activity: "Taking a park break",
    },
    {
      name: "Theo",
      pet: "Fern",
      species: "Rabbit",
      breed: "Mini lop",
      coat: "Fawn & cream",
      fur: "#b69b81",
      marking: "#f0dfc7",
      outing: "Supervised time in a garden run",
      position: [380, 190],
      color: "#9ccfe8",
      activity: "Finding a new route",
    },
    {
      name: "Rae",
      pet: "Pebble",
      species: "Tortoise",
      breed: "Hermann’s tortoise",
      coat: "Olive & golden shell",
      fur: "#7c8d4f",
      marking: "#c7b26a",
      outing: "Exploring an enclosed garden with Rae",
      position: [-540, 390],
      color: "#f0b7cc",
      activity: "Investigating the garden",
    },
    {
      name: "Ash",
      pet: "Cosmo",
      species: "Dog",
      breed: "Golden retriever",
      coat: "Honey gold",
      fur: "#d8b278",
      marking: "#f4dfb9",
      outing: "Evening lead walk with Ash",
      position: [-355, 267],
      color: "#d4c294",
      activity: "On the evening loop",
    },
    {
      name: "Luca",
      pet: "Bean",
      species: "Dog",
      breed: "Beagle",
      coat: "Chestnut, black & white",
      fur: "#875d43",
      marking: "#e8ded0",
      outing: "Sniffing the garden path with Luca",
      position: [700, 355],
      color: "#b9cf9b",
      activity: "Playing in the garden",
    },
    {
      name: "Ivy",
      pet: "Nori",
      species: "Ferret",
      breed: "Sable ferret",
      coat: "Sable & ivory mask",
      fur: "#68514c",
      marking: "#eadfca",
      outing: "Harness adventure with Ivy",
      position: [-600, 470],
      color: "#c5b7eb",
      activity: "Heading home together",
    },
  ];

  function petPortrait(player) {
    const { species, breed, fur, marking, color } = player;
    const eyes = `<g fill="#26323a"><circle cx="44" cy="52" r="3"/><circle cx="70" cy="52" r="3"/></g><g fill="#fff"><circle cx="43" cy="51" r="1"/><circle cx="69" cy="51" r="1"/></g>`;
    let art;
    if (species === "Tortoise") {
      art = `<g fill="${fur}"><ellipse cx="33" cy="81" rx="9" ry="6"/><ellipse cx="71" cy="81" rx="9" ry="6"/><ellipse cx="28" cy="62" rx="9" ry="6"/><ellipse cx="75" cy="61" rx="9" ry="6"/></g><ellipse cx="51" cy="61" rx="32" ry="25" fill="${marking}" stroke="${fur}" stroke-width="5"/><path d="m44 42 16 2 9 15-7 17-19 1-12-15Zm0 0-10-9m26 11 12-8M31 62l-12 3m24 12-3 9m22-10 13 6m-6-23 14-3" fill="${fur}" stroke="#667844" stroke-width="2"/><ellipse cx="91" cy="63" rx="14" ry="12" fill="#b2b878"/><circle cx="94" cy="59" r="2.5" fill="#26323a"/><path d="m94 69 5-1" stroke="#536341" stroke-width="2"/>`;
    } else {
      const isCorgi = breed.includes("corgi");
      const ears =
        species === "Rabbit"
          ? `<path d="M36 35C17 6 4 49 14 83q8 16 17-5l11-37M77 35c19-29 32 14 22 48-8 16-17-5-17-5L71 41" fill="${fur}"/><path d="M25 32Q11 57 22 82m63-50q14 25 3 50" fill="none" stroke="#d5afa4" stroke-width="6" stroke-linecap="round"/>`
          : species === "Cat" || isCorgi
            ? `<path d="m29 42-1-29 24 19m10 0 24-19-1 30" fill="${fur}"/><path d="m33 23 2 14 11-5m22 0 12-9-2 15" fill="#d7a99f"/>`
            : species === "Ferret"
              ? `<circle cx="31" cy="33" r="12" fill="${fur}"/><circle cx="82" cy="33" r="12" fill="${fur}"/><circle cx="31" cy="33" r="6" fill="#caa89b"/><circle cx="82" cy="33" r="6" fill="#caa89b"/>`
              : `<path d="M34 33C8 28 11 78 29 70l13-28M77 33c26-5 23 45 5 37L69 42" fill="${breed === "Beagle" ? "#493c38" : fur}"/>`;
      art = `<ellipse cx="56" cy="84" rx="28" ry="20" fill="${fur}"/>${ears}<rect x="27" y="29" width="59" height="49" rx="24" fill="${fur}"/>`;
      if (species === "Ferret")
        art += `<path d="M30 45q12-20 26-3 17-17 28 3L75 69H39Z" fill="${marking}"/><ellipse cx="43" cy="51" rx="10" ry="7" fill="${fur}"/><ellipse cx="70" cy="51" rx="10" ry="7" fill="${fur}"/>`;
      else if (species === "Cat" && breed === "Silver tabby")
        art += `<path d="m44 30 4 10 8-7 8 7 5-10M29 49l8 4m-9 6 9 1m48-11-8 4m8 6-8 1" fill="none" stroke="${marking}" stroke-width="3"/>`;
      else if (species === "Cat")
        art += `<path d="M67 31q17 3 17 18l-16 1-9-11Z" fill="${marking}"/><path d="m31 64-7 7 10 1-5 8 13-5m37-11 9 7-10 1 5 8-13-5" fill="${fur}"/>`;
      else if (isCorgi || breed === "Beagle")
        art += `<path d="m53 30-8 25 11 15 12-15-8-25" fill="${marking}"/>`;
      art += `<ellipse cx="56" cy="65" rx="18" ry="11" fill="${species === "Cat" ? "#f3e8df" : marking}"/>${eyes}<path d="m52 60 9 0-4 5Z" fill="#57474a"/><path d="M57 65v3m-5 0q5 5 10 0" fill="none" stroke="#57474a" stroke-width="1.5" stroke-linecap="round"/><path d="M35 78q22 10 44 0l-3 7q-19 9-38 0Z" fill="${color}"/><circle cx="58" cy="86" r="4" fill="#e6d098"/>`;
    }
    return `<svg viewBox="0 0 112 112" aria-hidden="true" class="map-pet-portrait"><ellipse cx="56" cy="98" rx="37" ry="6" fill="#111b2a40"/>${art}</svg>`;
  }

  function mount(host, { missions, selectMission, selectPlayer, petName }) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;
    canvas.className = "neighborhood-canvas";
    canvas.tabIndex = 0;
    canvas.setAttribute("role", "img");
    canvas.setAttribute(
      "aria-label",
      "Expanded 3D Haggerston neighborhood with nine adventures and eight sample players. Geography is approximate. Drag or use arrow keys to explore. Enable Rotate to turn the camera, or hold Shift while dragging. Home recenters the map. Use the adventure arrows to visit every mission.",
    );
    const layer = document.createElement("div");
    layer.className = "neighborhood-labels";
    const pins = missions.map((mission) => {
      const button = document.createElement("button");
      button.className = "neighborhood-pin";
      button.dataset.mission = mission.id;
      button.setAttribute("aria-label", `Select ${mission.title}`);
      button.title = mission.place;
      const symbol = { walk: "compass", play: "bolt", bond: "moon" }[
        mission.icon
      ];
      button.innerHTML = `<span class="neighborhood-pin-icon"><svg aria-hidden="true"><use href="#i-${symbol}"/></svg></span><span class="neighborhood-pin-label"></span>`;
      button.lastElementChild.textContent = mission.place;
      button.addEventListener("click", () => selectMission(mission.id));
      layer.append(button);
      return { element: button, position: mission.mapPosition };
    });
    const duo = document.createElement("div");
    duo.className = "neighborhood-duo";
    duo.innerHTML = `<div class="neighborhood-characters"><svg viewBox="0 0 100 180" aria-hidden="true"><use href="#owner-character"/></svg><svg viewBox="0 0 200 200" aria-hidden="true"><use href="#pet-character"/></svg></div><span>YOU + <b id="map-pet-name"></b></span>`;
    duo.querySelector("b").textContent = petName.toUpperCase();
    layer.append(duo);
    const neighbors = players.map((player) => {
      const element = document.createElement("button");
      element.className = "neighborhood-neighbor";
      element.style.setProperty("--player-color", player.color);
      element.setAttribute(
        "aria-label",
        `Meet ${player.pet}, ${player.breed}, ${player.coat}. With ${player.name}.`,
      );
      element.title = `${player.pet} · ${player.breed} · ${player.coat}`;
      element.innerHTML = `${petPortrait(player)}<span>${player.name.toUpperCase()} + ${player.pet.toUpperCase()}</span>`;
      element.addEventListener("click", () => selectPlayer?.(player));
      layer.append(element);
      return { element, player };
    });

    let width = 0;
    let height = 0;
    let scale = 1;
    let zoom = 1;
    let angle = Math.PI / 4;
    let center = [40, 35];
    let rotating = false;
    let routes = false;
    let activeMission = missions[0];
    let paused = false;
    let visible = true;
    let frame = 0;
    let lastTime = 0;
    let elapsed = 0;
    let drag = null;
    let disposed = false;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const objects = [];
    const lamps = [];
    let seed = 14;
    const random = () => {
      seed = (seed * 1664525 + 1013904223) >>> 0;
      return seed / 4294967296;
    };
    const project = (x, y, z) => [
      width / 2 +
        ((x - center[0]) * Math.cos(angle) -
          (z - center[1]) * Math.sin(angle)) *
          scale,
      height * 0.4 +
        (((x - center[0]) * Math.sin(angle) +
          (z - center[1]) * Math.cos(angle)) *
          0.53 -
          y) *
          scale,
    ];
    function polygon(points, color, stroke) {
      ctx.beginPath();
      points.forEach(([x, y, z], i) => {
        const p = project(x, y, z);
        if (i === 0) ctx.moveTo(...p);
        else ctx.lineTo(...p);
      });
      ctx.closePath();
      ctx.fillStyle = color;
      ctx.fill();
      if (stroke) {
        ctx.strokeStyle = stroke;
        ctx.lineWidth = 0.65;
        ctx.stroke();
      }
    }
    function ground(x, z, w, d, color, y = 0) {
      polygon(
        [
          [x, y, z],
          [x + w, y, z],
          [x + w, y, z + d],
          [x, y, z + d],
        ],
        color,
      );
    }
    function line(points, color, lineWidth = 1, dash = []) {
      ctx.beginPath();
      points.forEach(([x, y, z], i) => {
        const p = project(x, y, z);
        if (i === 0) ctx.moveTo(...p);
        else ctx.lineTo(...p);
      });
      ctx.strokeStyle = color;
      ctx.lineWidth = lineWidth * scale;
      ctx.setLineDash(dash.map((value) => value * scale));
      ctx.stroke();
      ctx.setLineDash([]);
    }
    function box(x, z, w, d, h, colors, base = 0) {
      polygon(
        [
          [x + w, base, z],
          [x + w, base, z + d],
          [x + w, base + h, z + d],
          [x + w, base + h, z],
        ],
        colors[1],
      );
      polygon(
        [
          [x, base, z + d],
          [x + w, base, z + d],
          [x + w, base + h, z + d],
          [x, base + h, z + d],
        ],
        colors[2],
      );
      ground(x, z, w, d, colors[0], base + h);
    }
    function ellipse(x, y, z, radius, color, flatten = 0.53) {
      const p = project(x, y, z);
      ctx.beginPath();
      ctx.ellipse(
        ...p,
        radius * scale,
        radius * scale * flatten,
        0,
        0,
        Math.PI * 2,
      );
      ctx.fillStyle = color;
      ctx.fill();
    }
    function glow(x, y, z, radius, color) {
      const p = project(x, y, z);
      const r = radius * scale;
      const gradient = ctx.createRadialGradient(...p, 0, ...p, r);
      gradient.addColorStop(0, color);
      gradient.addColorStop(1, "#f9da9700");
      ctx.fillStyle = gradient;
      ctx.fillRect(p[0] - r, p[1] - r, r * 2, r * 2);
    }
    function building(x, z, w, d, h, tone, roof = false) {
      const palettes = [
        ["#8b99ac", "#455569", "#63788a"],
        ["#9c8a91", "#594e66", "#7a687c"],
        ["#a5a28f", "#59686a", "#7a8984"],
        ["#b79c85", "#685b5c", "#937969"],
      ];
      // Preserve the seeded neighborhood's existing heights, colors, and trees.
      // These random draws previously selected facade window lighting.
      for (let y = 12; y < h - 8; y += 16) {
        for (let u = 8; u < w - 6; u += 13) random();
        for (let u = 8; u < d - 6; u += 13) random();
      }
      objects.push({
        x: x + w / 2,
        z: z + d / 2,
        shadow() {
          polygon(
            [
              [x, 0, z + d],
              [x + w, 0, z],
              [x + w + h * 0.6, 0, z + h * 0.32],
              [x + w + h * 0.6, 0, z + d + h * 0.32],
              [x + h * 0.6, 0, z + d + h * 0.32],
            ],
            "#0e192d48",
          );
        },
        draw() {
          box(x - 3, z - 3, w + 6, d + 6, 4, ["#a4adb1", "#4f5965", "#6f7c85"]);
          box(x, z, w, d, h, palettes[tone], 4);
          if (roof) {
            const ridge = h + 21;
            polygon(
              [
                [x - 3, h + 4, z + d + 3],
                [x + w + 3, h + 4, z + d + 3],
                [x + w / 2, ridge, z + d + 3],
              ],
              "#baa294",
            );
            polygon(
              [
                [x + w / 2, ridge, z - 3],
                [x + w + 3, h + 4, z - 3],
                [x + w + 3, h + 4, z + d + 3],
                [x + w / 2, ridge, z + d + 3],
              ],
              "#4c5c78",
            );
            polygon(
              [
                [x - 3, h + 4, z - 3],
                [x + w / 2, ridge, z - 3],
                [x + w / 2, ridge, z + d + 3],
                [x - 3, h + 4, z + d + 3],
              ],
              "#71829b",
            );
          } else {
            box(
              x - 2,
              z - 2,
              w + 4,
              d + 4,
              3,
              ["#bac0c6", "#70808d", "#899ba5"],
              h + 4,
            );
            ground(x + 3, z + 3, w - 6, d - 6, "#697988", h + 7.1);
            box(
              x + 8,
              z + 8,
              12,
              10,
              7,
              ["#b1b9bd", "#536675", "#7c8c96"],
              h + 7,
            );
            if (w > 45) ground(x + 27, z + 8, 17, 20, "#344b69", h + 7.2);
          }
        },
      });
    }
    function tree(x, z, size = 1, lavender = false) {
      const radius = 16 * size;
      objects.push({
        x,
        z,
        shadow() {
          ellipse(x + 10, 0.1, z + 8, radius * 1.2, "#10272742");
        },
        draw() {
          line(
            [
              [x, 1, z],
              [x, 29 * size, z],
            ],
            "#6f6960",
            4 * size,
          );
          const p = project(x, 38 * size, z);
          const r = radius * scale;
          const gradient = ctx.createRadialGradient(
            p[0] - r * 0.4,
            p[1] - r * 0.5,
            0,
            ...p,
            r * 1.3,
          );
          gradient.addColorStop(0, lavender ? "#b5a2c9" : "#8da88a");
          gradient.addColorStop(0.5, lavender ? "#80789f" : "#527c69");
          gradient.addColorStop(1, lavender ? "#575a7c" : "#2a514b");
          ellipse(x, 38 * size, z, radius, gradient, 1.2);
          ellipse(x - 8 * size, 32 * size, z + 3, radius * 0.7, gradient, 1);
          ellipse(
            x + 9 * size,
            35 * size,
            z + 2,
            radius * 0.72,
            gradient,
            1.05,
          );
        },
      });
    }
    function lamp(x, z) {
      lamps.push([x, z]);
      objects.push({
        x,
        z,
        draw() {
          line(
            [
              [x, 0, z],
              [x, 29, z],
              [x + 5, 32, z],
            ],
            "#a1abb0",
            1.6,
          );
          glow(x + 5, 31, z, 13, "#ffe4a35c");
          ellipse(x + 5, 31, z, 2.8, "#fff1c4", 0.8);
        },
      });
    }
    function bench(x, z) {
      objects.push({
        x,
        z,
        draw() {
          box(x, z, 24, 8, 3, ["#ba9e83", "#695a53", "#927762"], 6);
          box(x, z, 24, 2, 9, ["#bba088", "#695a53", "#a68b73"], 8);
          line(
            [
              [x + 3, 0, z + 6],
              [x + 3, 6, z + 6],
            ],
            "#465157",
            2,
          );
          line(
            [
              [x + 21, 0, z + 6],
              [x + 21, 6, z + 6],
            ],
            "#465157",
            2,
          );
        },
      });
    }

    // Real street relationships, with compressed distances and invented building detail.
    // Hoxton Docks is on the south bank, east of Haggerston Bridge;
    // the Baths face it across Laburnum Street, and Bridge Academy is west.
    building(-105, -101, 62, 71, 30, 3, true);
    building(-38, -101, 75, 48, 27, 3, true);
    building(42, -101, 57, 65, 34, 1, true);
    building(-330, -93, 133, 66, 61, 0);
    building(-330, -20, 92, 32, 41, 0);
    building(-72, 87, 118, 107, 39, 3, true);
    building(-88, 182, 16, 16, 88, 3); // The Baths' distinctive chimney.
    building(52, 91, 48, 99, 29, 3, true);

    // Canal-side warehouses and residential blocks frame the named landmarks.
    for (let x = -420; x < 460; x += 83) {
      if (
        Math.abs(x - roads.haggerston) < 64 ||
        Math.abs(x - roads.queensbridge) < 64
      )
        continue;
      building(x, -300, 59, 67, 43 + random() * 42, Math.floor(random() * 4));
    }
    for (const x of [146, 228, 404, -438]) {
      building(x, -96, 57, 83, 42 + random() * 24, 1);
      building(x, 99, 51, 93, 38 + random() * 30, 3, true);
    }
    for (const x of [-337, -252, 133, 214])
      building(x, 207, 58, 43, 31 + random() * 27, 2);
    for (let x = -430; x < 290; x += 82)
      building(x, 329, 59, 64, 40 + random() * 31, 1, true);

    // Small planted courtyards and the edge of Haggerston Park to the southeast.
    for (const [x, z] of [
      [-365, 103],
      [-365, 155],
      [-222, 117],
      [-215, 163],
      [120, 72],
      [209, 72],
      [289, 72],
      [-110, 58],
      [63, 65],
      [430, 347],
      [480, 377],
      [530, 330],
      [580, 414],
      [452, 452],
    ])
      tree(x, z, 0.7 + random() * 0.3);
    for (let x = -400; x <= 420; x += 85) {
      if (
        Math.abs(x - roads.haggerston) > 30 &&
        Math.abs(x - roads.queensbridge) > 30
      ) {
        lamp(x, -199);
        if (x % 2 === 0) tree(x + 19, -215, 0.65);
      }
      lamp(x + 18, 59);
    }
    bench(195, -203);
    bench(-112, 62);
    bench(455, 341);

    // Illustrative outer blocks extend the playable area beyond the reference landmarks.
    for (const z of [-590, -470]) {
      for (let x = -740; x <= 740; x += 105) {
        if (
          Math.abs(x - roads.haggerston) < 75 ||
          Math.abs(x - roads.queensbridge) < 75
        )
          continue;
        building(
          x,
          z,
          54 + random() * 15,
          58,
          28 + random() * 40,
          Math.floor(random() * 4),
          true,
        );
      }
    }
    for (const x of [-735, -625, 525, 635, 745]) {
      for (const z of [-85, 105, 205])
        building(
          x,
          z,
          52,
          46,
          30 + random() * 30,
          Math.floor(random() * 4),
          true,
        );
    }
    for (const x of [-735, -625]) {
      for (const z of [345, 490, 610])
        building(x, z, 58, 58, 32 + random() * 25, 2, true);
    }
    for (let x = -420; x <= 230; x += 96) {
      for (const z of [495, 625])
        building(x, z, 58, 54, 28 + random() * 34, 3, true);
    }
    for (let x = 415; x <= 800; x += 55) {
      tree(x, 625, 0.85 + random() * 0.35);
      if (x > 570) tree(x, 330, 0.8);
    }
    for (let z = 395; z < 625; z += 50) {
      tree(420, z, 0.9);
      tree(795, z, 1);
    }
    for (const [x, z] of [
      [585, 475],
      [575, 560],
      [740, 540],
      [710, 590],
      [-540, 390],
      [-540, 480],
      [-590, 75],
      [-695, 75],
    ])
      tree(x, z, 0.85);
    for (const x of [-720, -620, -520, 540, 640, 740]) {
      lamp(x, -199);
      tree(x + 25, -215, 0.7);
      lamp(x, 59);
    }
    bench(605, 460);
    bench(675, 580);
    bench(-545, 410);

    function road(x, z, w, d, vertical = false) {
      ground(x - 7, z - 7, w + 14, d + 14, "#8d9797");
      ground(x, z, w, d, "#35404f");
      line(
        vertical
          ? [
              [x + w / 2, 0.2, z],
              [x + w / 2, 0.2, z + d],
            ]
          : [
              [x, 0.2, z + d / 2],
              [x + w, 0.2, z + d / 2],
            ],
        "#b5bda776",
        1,
        [7, 13],
      );
    }
    function bridge(x) {
      box(x - 22, canal.north - 11, 44, 86, 6, [
        "#b2a496",
        "#625c61",
        "#8a817a",
      ]);
      ground(x - 14, canal.north - 11, 28, 86, "#465365", 6.1);
      for (const edge of [-21, 21]) {
        line(
          [
            [x + edge, 15, canal.north - 11],
            [x + edge, 15, canal.south + 11],
          ],
          "#ced1bb",
          2,
        );
        for (let z = canal.north - 8; z < canal.south + 11; z += 11)
          line(
            [
              [x + edge, 6, z],
              [x + edge, 15, z],
            ],
            "#a8b0a9",
            1.5,
          );
      }
    }
    function drawGround(time) {
      ground(-2200, -2200, 4400, 4400, "#354852");
      ground(-365, 83, 156, 114, "#48685b");
      ground(390, 321, 450, 360, "#496c58");
      ground(435, 360, 355, 260, "#a3a58d");
      ground(447, 372, 331, 236, "#52735b");
      ground(522, 342, 12, 280, "#a3a58d");
      ground(522, 534, 260, 12, "#a3a58d");
      ellipse(660, 0.2, 450, 62, "#8eaa94");
      ellipse(660, 0.3, 450, 55, "#40788a");
      ellipse(660, 0.4, 450, 44, "#578d98");
      ground(-560, 340, 65, 245, "#4e705c");
      ground(-540, 350, 10, 225, "#a3a58d");
      road(-850, -382, 1700, 24);
      road(-850, 440, 1180, 24);
      road(-900, roads.laburnum - 14, 1800, 28);
      road(-900, roads.whiston - 17, 1800, 34);
      road(roads.haggerston - 14, -900, 28, 1185, true);
      road(roads.queensbridge - 16, -900, 32, 1800, true);
      // Swimmers Lane beside the Baths and a forecourt at number 55.
      ground(-115, 57, 12, 205, "#91968b");
      ground(-105, -24, 209, 41, "#7d8688");
      ground(-14, -21, 28, 38, "#b3b3a2");
      for (const x of [roads.haggerston, roads.queensbridge]) {
        for (let i = -10; i <= 10; i += 5)
          ground(x + i, roads.laburnum - 30, 2.5, 10, "#c4c9b8");
      }
      // Regent's Canal runs north of Laburnum Street. Towpath is on the north bank.
      ground(-900, canal.north - 25, 1800, 99, "#8a989a");
      ground(-900, canal.north, 1800, 64, "#234f65");
      ground(-900, canal.north + 5, 1800, 54, "#366c7f");
      line(
        [
          [-900, 0.3, canal.north - 16],
          [900, 0.3, canal.north - 16],
        ],
        "#c3c1aa",
        1,
      );
      for (let i = 0; i < 50; i++) {
        const x = ((i * 67 + time * (4 + (i % 3))) % 1700) - 850;
        const z = canal.north + 7 + ((i * 13) % 47);
        line(
          [
            [x, 0.2, z],
            [x + 8 + (i % 15), 0.2, z],
          ],
          i % 4 === 0 ? "#9cd0c870" : "#8dbcc331",
          1,
        );
      }
      // Decorative moored narrowboats, not a survey of current moorings.
      for (const [x, color] of [
        [-290, "#a97575"],
        [65, "#738faa"],
        [239, "#809c84"],
        [-640, "#728f83"],
        [590, "#9a859f"],
      ]) {
        box(x, canal.north + 10, 53, 11, 5, [color, "#263d50", color], 1);
        box(x + 7, canal.north + 11, 35, 9, 5, ["#ded1b1", color, color], 6);
      }
      bridge(roads.haggerston);
      bridge(roads.queensbridge);
      if (routes) {
        // Illustrative paths follow the schematic streets and bridge, not live routing.
        const [x, z] = activeMission.mapPosition;
        const path = [[...origin], [-110, 17]];
        if (z <= canal.north) path.push([-126, 17], [-126, -196], [x, -196]);
        else if (z >= 321 && x >= 390)
          path.push([327, 17], [327, 310], [x, 310]);
        else if (z > roads.whiston) path.push([-110, 263], [x, 263]);
        else path.push([x, 17]);
        path.push([x, z]);
        ctx.lineDashOffset = -time * 12 * scale;
        line(
          path.map(([px, pz]) => [px, 8, pz]),
          "#d5fb78",
          3,
          [5, 7],
        );
        ctx.lineDashOffset = 0;
      }
      lamps.forEach(([x, z]) => ellipse(x + 5, 0.3, z, 16, "#fce6a316"));
      objects.forEach((object) => object.shadow?.());
    }
    function mapText(text, x, z, color = "#d8dfd2", alongZ = false) {
      const p = project(x, 1, z);
      const direction = project(
        x + (alongZ ? 0 : 40),
        1,
        z + (alongZ ? 40 : 0),
      );
      let rotation = Math.atan2(direction[1] - p[1], direction[0] - p[0]);
      if (rotation > Math.PI / 2) rotation -= Math.PI;
      ctx.save();
      ctx.translate(...p);
      ctx.rotate(rotation);
      ctx.font = `600 ${Math.max(8, 10 * scale)}px system-ui, sans-serif`;
      ctx.textAlign = "center";
      ctx.lineWidth = 3;
      ctx.strokeStyle = "#223442bb";
      ctx.strokeText(text, 0, 0);
      ctx.fillStyle = color;
      ctx.fillText(text, 0, 0);
      ctx.restore();
    }
    function drawPlaceNames() {
      mapText("REGENT’S CANAL", 125, -139, "#c2e5e0");
      mapText("LABURNUM STREET", 213, 41);
      mapText("HAGGERSTON RD", -150, -355, "#cbd4d3", true);
      mapText("QUEENSBRIDGE RD", 350, 149, "#cbd4d3", true);
      mapText("WHISTON ROAD", 95, 285);
      mapText("THURTLE ROAD", -150, 169, "#cbd4d3", true);
      mapText("BRIDGE ACADEMY", -260, -3, "#b9c9d7");
      mapText("HAGGERSTON BATHS", -10, 226, "#d5c5b3");
      mapText("HAGGERSTON PARK", 529, 393, "#bdcfa9");
      const [x, y] = project(0, 36, -41);
      ctx.font = "600 10px system-ui, sans-serif";
      ctx.textAlign = "center";
      ctx.fillStyle = "#182932ee";
      ctx.fillRect(x - 65, y - 12, 130, 30);
      ctx.strokeStyle = "#d5fb7877";
      ctx.lineWidth = 1;
      ctx.strokeRect(x - 65, y - 12, 130, 30);
      ctx.fillStyle = "#e7f6cb";
      ctx.fillText("55 LABURNUM ST", x, y);
      ctx.font = "8px system-ui, sans-serif";
      ctx.fillStyle = "#b9c8c1";
      ctx.fillText("HOXTON DOCKS · E2 8BD", x, y + 11);
    }
    function car(x, z, color, alongZ = false) {
      return {
        x,
        z,
        draw() {
          const w = alongZ ? 9 : 19;
          const d = alongZ ? 19 : 9;
          ellipse(x + w / 2, 0.1, z + d / 2, 13, "#101b2f55");
          box(x, z, w, d, 5, [color, "#4f5b6e", color], 2);
          box(
            x + 2,
            z + 2,
            w - 5,
            d - 4,
            4,
            ["#a9c1ca", "#30465b", "#456379"],
            7,
          );
          if (alongZ) {
            ellipse(x + 1, 5, z + d, 1.5, "#ffe6ac", 1);
            ellipse(x + w - 1, 5, z + d, 1.5, "#ffe6ac", 1);
          } else {
            ellipse(x + w, 5, z + 1, 1.5, "#ffe6ac", 1);
            ellipse(x + w, 5, z + d - 1, 1.5, "#ffe6ac", 1);
          }
        },
      };
    }
    function positionLabels() {
      host.classList.toggle("map-zoomed-out", scale < 0.45);
      for (const pin of pins) {
        const [x, z] = pin.position;
        const p = project(x, 8, z);
        pin.element.style.left = `${p[0]}px`;
        pin.element.style.top = `${p[1]}px`;
        pin.element.hidden =
          p[0] < -20 || p[0] > width + 20 || p[1] < 30 || p[1] > height + 60;
      }
      const p = project(origin[0], 0, origin[1]);
      duo.style.left = `${p[0]}px`;
      duo.style.top = `${p[1]}px`;
      for (const { element, player } of neighbors) {
        const [x, z] = player.position;
        const other = project(x + Math.sin(elapsed * 0.25 + x) * 7, 0, z);
        element.style.left = `${other[0]}px`;
        element.style.top = `${other[1]}px`;
        element.hidden =
          other[0] < 20 ||
          other[0] > width - 20 ||
          other[1] < 30 ||
          other[1] > height;
      }
    }
    function render() {
      if (disposed || !width || !height) return;
      ctx.clearRect(0, 0, width, height);
      drawGround(elapsed);
      const moving = [
        car(((elapsed * 14 + 100) % 900) - 450, roads.laburnum - 10, "#d3c9ac"),
        car(((elapsed * 11 + 450) % 900) - 450, roads.whiston - 12, "#b0b9d4"),
        car(
          roads.queensbridge - 10,
          60 + ((elapsed * 12 + 110) % 390),
          "#be8e87",
          true,
        ),
      ];
      [...objects, ...moving]
        .sort(
          (a, b) =>
            (a.x - b.x) * Math.sin(angle) + (a.z - b.z) * Math.cos(angle),
        )
        .forEach((object) => object.draw());
      // A little atmospheric haze softens the far edge of the neighborhood.
      const haze = ctx.createLinearGradient(0, 0, 0, height);
      haze.addColorStop(0, "#b0b6d82e");
      haze.addColorStop(0.35, "#7187b000");
      haze.addColorStop(0.72, "#15213700");
      haze.addColorStop(1, "#111b32b3");
      ctx.fillStyle = haze;
      ctx.fillRect(0, 0, width, height);
      drawPlaceNames();
      positionLabels();
    }
    function tick(now) {
      frame = 0;
      if (disposed || !visible || document.hidden || paused || motion.matches)
        return;
      if (now - lastTime >= 1000 / 30) {
        elapsed += Math.min((now - lastTime) / 1000, 0.05);
        lastTime = now;
        render();
      }
      frame = requestAnimationFrame(tick);
    }
    function syncAnimation() {
      cancelAnimationFrame(frame);
      frame = 0;
      lastTime = performance.now();
      if (visible && !document.hidden) render();
      if (
        !disposed &&
        visible &&
        !document.hidden &&
        !paused &&
        !motion.matches
      )
        frame = requestAnimationFrame(tick);
    }
    function resize() {
      width = host.clientWidth;
      height = host.clientHeight;
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      scale = Math.min(Math.max(width / 1000, 0.5), height / 760) * zoom;
      render();
    }
    function rotate(delta) {
      angle = Math.max(0.3, Math.min(1.27, angle + delta));
      render();
    }
    function pan(dx, dy) {
      const horizontal = dx / scale;
      const vertical = dy / (scale * 0.53);
      center = [
        Math.max(
          -800,
          Math.min(
            800,
            center[0] -
              horizontal * Math.cos(angle) -
              vertical * Math.sin(angle),
          ),
        ),
        Math.max(
          -650,
          Math.min(
            700,
            center[1] +
              horizontal * Math.sin(angle) -
              vertical * Math.cos(angle),
          ),
        ),
      ];
      render();
    }
    canvas.addEventListener("pointerdown", (event) => {
      if (event.button !== 0) return;
      drag = {
        id: event.pointerId,
        x: event.clientX,
        y: event.clientY,
        rotate: rotating || event.shiftKey,
      };
      canvas.setPointerCapture(event.pointerId);
      canvas.classList.add("dragging");
    });
    canvas.addEventListener("pointermove", (event) => {
      if (!drag || event.pointerId !== drag.id) return;
      if (drag.rotate) rotate((event.clientX - drag.x) * 0.003);
      else pan(event.clientX - drag.x, event.clientY - drag.y);
      drag.x = event.clientX;
      drag.y = event.clientY;
    });
    function endDrag() {
      drag = null;
      canvas.classList.remove("dragging");
    }
    canvas.addEventListener("pointerup", endDrag);
    canvas.addEventListener("pointercancel", endDrag);
    canvas.addEventListener("lostpointercapture", endDrag);
    canvas.addEventListener("keydown", (event) => {
      if (
        !["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home"].includes(
          event.key,
        )
      )
        return;
      event.preventDefault();
      if (event.key === "Home") {
        angle = Math.PI / 4;
        center = [40, 35];
        render();
      } else if (
        (rotating || event.shiftKey) &&
        ["ArrowLeft", "ArrowRight"].includes(event.key)
      ) {
        rotate(event.key === "ArrowLeft" ? -0.07 : 0.07);
      } else {
        const delta = {
          ArrowLeft: [45, 0],
          ArrowRight: [-45, 0],
          ArrowUp: [0, 45],
          ArrowDown: [0, -45],
        }[event.key];
        pan(...delta);
      }
    });
    // Replace the SVG only after the renderer has successfully drawn its first frame.
    resize();
    host.replaceChildren(canvas, layer);
    host.classList.add("is-3d");
    const observer = new ResizeObserver(resize);
    observer.observe(host);
    const intersection = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      syncAnimation();
    });
    intersection.observe(host);
    document.addEventListener("visibilitychange", syncAnimation);
    motion.addEventListener("change", syncAnimation);
    syncAnimation();
    return {
      setRotating(value) {
        rotating = value;
      },
      focus(id) {
        const mission = missions.find((item) => item.id === id);
        if (!mission) return;
        center = [...mission.mapPosition];
        render();
      },
      setZoom(value) {
        zoom = value;
        resize();
      },
      setRoutes(value) {
        routes = value;
        render();
      },
      setPaused(value) {
        paused = value;
        syncAnimation();
      },
      select(id) {
        activeMission =
          missions.find((mission) => mission.id === id) || activeMission;
        pins.forEach(({ element }) =>
          element.setAttribute(
            "aria-pressed",
            String(element.dataset.mission === id),
          ),
        );
        if (routes) render();
      },
      recenter() {
        angle = Math.PI / 4;
        center = [40, 35];
        render();
      },
      dispose() {
        disposed = true;
        cancelAnimationFrame(frame);
        observer.disconnect();
        intersection.disconnect();
        document.removeEventListener("visibilitychange", syncAnimation);
        motion.removeEventListener("change", syncAnimation);
      },
    };
  }
  return { mount, players, petPortrait };
})();
