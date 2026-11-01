import * as THREE from "three";

// Presentation only: accepted battle events animate models, never calculate HP.
function mount(host, options = {}) {
  const portrait = options.mode === "profile";
  const night = options.theme === "afterglow";
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: portrait });
  } catch {
    host.innerHTML = portrait
      ? '<div style="height:100%;display:grid;place-items:center;text-align:center;padding:24px"><p>3D is unavailable on this device.<br>Your pet’s profile and upgrades still work.</p></div>'
      : '<div style="height:100%;display:grid;place-items:center;text-align:center;padding:24px"><div><strong>Battle arena</strong><p>3D is unavailable on this device.<br>The battle controls and HP still work.</p></div></div>';
    host.dataset.renderer = "fallback";
    return { play: () => Promise.resolve(), dispose() {} };
  }
  host.dataset.renderer = "webgl";
  host.replaceChildren(renderer.domElement);
  renderer.domElement.style.cssText =
    "width:100%;height:100%;display:block;touch-action:pan-y";
  renderer.domElement.setAttribute("role", "img");
  renderer.domElement.setAttribute(
    "aria-label",
    portrait
      ? "Animated 3D pet companion with expressive eyes, ears, paws and tail"
      : "Animated 3D pet battle arena with two original companions",
  );
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = night ? 1.45 : 1.2;

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(night ? "#172237" : "#dce9d0");
  scene.fog = new THREE.Fog(scene.background, 13, 31);
  const camera = new THREE.PerspectiveCamera(37, 1, 0.1, 60);
  const cameraHome = portrait
    ? new THREE.Vector3(2.2, 2.6, 6.4)
    : new THREE.Vector3(7, 5.6, 10);
  camera.position.copy(cameraHome);
  const target = new THREE.Vector3(0, portrait ? 1.25 : 0.65, 0);
  camera.lookAt(target);
  scene.add(
    new THREE.HemisphereLight(
      night ? "#c2cbff" : "#fff9dc",
      night ? "#344957" : "#789263",
      2.6,
    ),
  );
  const sun = new THREE.DirectionalLight(night ? "#cfcaff" : "#fff3cc", 3.1);
  sun.position.set(-3, 8, 5);
  sun.castShadow = true;
  sun.shadow.mapSize.set(1024, 1024);
  sun.shadow.camera.left = sun.shadow.camera.bottom = -9;
  sun.shadow.camera.right = sun.shadow.camera.top = 9;
  sun.shadow.normalBias = 0.035;
  scene.add(sun);
  const rim = new THREE.DirectionalLight(night ? "#a6ffce" : "#e7ffd6", 1.9);
  rim.position.set(4, 4, -6);
  scene.add(rim);

  const sphere = new THREE.SphereGeometry(1, 40, 28);
  const resources = new Set([sphere]);
  const material = (color, extra = {}) => {
    const m = new THREE.MeshStandardMaterial({
      color,
      roughness: 0.76,
      ...extra,
    });
    resources.add(m);
    return m;
  };
  function mesh(parent, geometry, mat, position, scale = [1, 1, 1]) {
    resources.add(geometry);
    const object = new THREE.Mesh(geometry, mat);
    object.position.set(...position);
    object.scale.set(...scale);
    object.castShadow = true;
    object.receiveShadow = true;
    parent.add(object);
    return object;
  }
  const ball = (parent, mat, position, scale) =>
    mesh(parent, sphere, mat, position, scale);
  function stroke(parent, mat, points, radius = 0.025) {
    const curve = new THREE.CatmullRomCurve3(
      points.map((point) => new THREE.Vector3(...point)),
    );
    return mesh(
      parent,
      new THREE.TubeGeometry(curve, 20, radius, 8, false),
      mat,
      [0, 0, 0],
    );
  }
  // A rounded silhouette with a bevel gives the ears soft toy-like edges.
  const earShape = new THREE.Shape();
  earShape.moveTo(-0.25, 0);
  earShape.quadraticCurveTo(-0.34, 0.08, -0.25, 0.3);
  earShape.quadraticCurveTo(-0.09, 0.78, 0, 0.8);
  earShape.quadraticCurveTo(0.09, 0.78, 0.25, 0.3);
  earShape.quadraticCurveTo(0.34, 0.08, 0.25, 0);
  earShape.quadraticCurveTo(0, -0.1, -0.25, 0);
  const earGeometry = new THREE.ExtrudeGeometry(earShape, {
    depth: 0.12,
    bevelEnabled: true,
    bevelSegments: 5,
    steps: 1,
    bevelSize: 0.075,
    bevelThickness: 0.075,
    curveSegments: 16,
  });
  resources.add(earGeometry);
  const ground = mesh(
    scene,
    new THREE.CylinderGeometry(15, 15, 0.3, 64),
    material(night ? "#243f42" : "#a7c18a"),
    [0, -0.3, 0],
  );
  ground.castShadow = false;
  const platformMat = material(night ? "#4d6961" : "#c4d7a5");
  const borderMat = material(night ? "#a6e3c5" : "#e9ecc5", {
    emissive: night ? "#3e765e" : "#000000",
    emissiveIntensity: 0.3,
  });
  const origins = {
    player: new THREE.Vector3(-2.3, 0, 1.3),
    opponent: new THREE.Vector3(2.3, 0, -1.3),
  };
  if (portrait) origins.player.set(0, 0, 0);
  for (const position of portrait ? [origins.player] : Object.values(origins)) {
    mesh(scene, new THREE.CylinderGeometry(1.7, 1.82, 0.15, 64), platformMat, [
      position.x,
      -0.065,
      position.z,
    ]);
    const ring = mesh(
      scene,
      new THREE.TorusGeometry(1.65, 0.035, 8, 80),
      borderMat,
      [position.x, 0.025, position.z],
    );
    ring.rotation.x = Math.PI / 2;
  }
  const stoneMat = material(night ? "#4d566d" : "#bdc5a8");
  const leafMats = ["#698e62", "#8fa66b", "#658575"].map((c) =>
    material(night ? "#3b6060" : c),
  );
  const trunkMat = material(night ? "#57556a" : "#8c7959");
  for (let i = 0; i < 15; i++) {
    const angle = i * 0.39 + 0.2;
    const x = Math.cos(angle) * 9;
    const z = Math.sin(angle) * 7 - 3;
    if (z > 2) continue;
    const h = 1.8 + (i % 3) * 0.5;
    mesh(scene, new THREE.CylinderGeometry(0.12, 0.2, h, 8), trunkMat, [
      x,
      h / 2,
      z,
    ]);
    ball(scene, leafMats[i % 3], [x, h + 0.5, z], [0.9, 1.4, 0.9]);
    ball(scene, stoneMat, [x + 1.3, 0.15, z + 1], [0.6, 0.32, 0.45]);
  }
  const flowerMat = material(night ? "#d5f7a6" : "#fff0ae", {
    emissive: night ? "#99d45a" : "#000000",
    emissiveIntensity: 0.5,
  });
  for (let i = 0; i < 26; i++) {
    const x = Math.sin(i * 2.4) * 7;
    const z = Math.cos(i * 1.7) * 5;
    if (Math.abs(x) < 4 && Math.abs(z) < 2.5) continue;
    ball(scene, flowerMat, [x, 0.12, z], [0.09, 0.1, 0.09]);
  }

  function pet(kind, color, accent) {
    const root = new THREE.Group();
    const body = new THREE.Group();
    root.add(body);
    const fur = material(color, { roughness: 0.48 });
    const cream = material(kind === "cat" ? "#dfd7ff" : "#fff2d6");
    const earPink = material("#e6a3ab");
    const dark = material("#26303e", { roughness: 0.18 });
    const white = material("#ffffff", { roughness: 0.25 });
    const scarf = material(accent);
    ball(body, fur, [0, 0.77, -0.15], [0.62, 0.7, 0.75]);
    ball(body, cream, [0, 0.73, 0.47], [0.43, 0.5, 0.17]);
    const legs = [];
    for (const x of [-0.4, 0.4]) {
      legs.push(ball(body, fur, [x, 0.24, -0.44], [0.23, 0.28, 0.3]));
      legs.push(ball(body, cream, [x, 0.19, 0.4], [0.24, 0.23, 0.3]));
    }
    const head = new THREE.Group();
    head.position.set(0, 1.52, 0.23);
    body.add(head);
    ball(head, fur, [0, 0, 0], [0.78, 0.67, 0.63]);
    const ears = [];
    const eyes = [];
    const brows = [];
    for (const sign of [-1, 1]) {
      const ear = new THREE.Group();
      ear.position.set(sign * 0.48, 0.4, -0.04);
      head.add(ear);
      ear.rotation.z = -sign * 0.2;
      mesh(
        ear,
        earGeometry,
        fur,
        [0, 0, 0],
        [1, kind === "rabbit" ? 1.65 : kind === "cat" ? 0.9 : 1, 1],
      );
      mesh(ear, earGeometry, earPink, [0, 0.1, 0.17], [0.57, 0.65, 0.25]);
      ears.push(ear);
      const eye = new THREE.Group();
      eye.position.set(sign * 0.3, 0.07, 0.565);
      head.add(eye);
      const pupil = new THREE.Group();
      eye.add(pupil);
      ball(pupil, dark, [0, 0, 0], [0.12, 0.175, 0.078]);
      ball(pupil, white, [-0.032, 0.06, 0.066], [0.036, 0.049, 0.02]);
      ball(pupil, white, [0.04, -0.05, 0.071], [0.016, 0.02, 0.01]);
      const lid = stroke(eye, dark, [
        [-0.12, 0, 0.04],
        [0, 0.055, 0.065],
        [0.12, 0, 0.04],
      ]);
      lid.visible = false;
      eyes.push({ pupil, lid });
      const brow = new THREE.Group();
      brow.position.set(sign * 0.3, 0.33, 0.56);
      head.add(brow);
      stroke(
        brow,
        fur,
        [
          [-0.11, 0, 0],
          [0, 0.025, 0.02],
          [0.11, 0, 0],
        ],
        0.038,
      );
      brows.push(brow);
      ball(head, cream, [sign * 0.16, -0.2, 0.54], [0.25, 0.2, 0.18]);
      ball(head, earPink, [sign * 0.48, -0.16, 0.5], [0.12, 0.05, 0.027]);
    }
    if (kind === "corgi") ball(head, cream, [0, 0.24, 0.54], [0.16, 0.4, 0.07]);
    ball(head, dark, [0, -0.13, 0.733], [0.12, 0.078, 0.065]);
    const mouth = new THREE.Group();
    mouth.position.set(0, -0.34, 0.67);
    head.add(mouth);
    ball(mouth, dark, [0, 0, 0], [0.13, 0.09, 0.035]);
    const tongue = ball(
      mouth,
      earPink,
      [0, -0.038, 0.032],
      [0.075, 0.055, 0.018],
    );
    stroke(
      head,
      dark,
      [
        [-0.2, -0.25, 0.685],
        [-0.12, -0.285, 0.725],
        [0, -0.235, 0.737],
        [0.12, -0.285, 0.725],
        [0.2, -0.25, 0.685],
      ],
      0.017,
    );
    const collar = mesh(
      body,
      new THREE.TorusGeometry(0.44, 0.12, 16, 48),
      scarf,
      [0, 1.12, 0.16],
    );
    collar.rotation.x = Math.PI / 2;
    const kerchief = mesh(
      body,
      new THREE.ConeGeometry(0.24, 0.43, 3),
      scarf,
      [0.12, 0.89, 0.65],
      [1, 1, 0.25],
    );
    kerchief.rotation.z = Math.PI;
    const tail = new THREE.Group();
    tail.position.set(0, 0.77, -0.7);
    body.add(tail);
    if (kind === "cat") {
      stroke(
        tail,
        fur,
        [
          [0, 0, 0],
          [0.12, 0.22, -0.35],
          [0.3, 0.6, -0.42],
          [0.52, 0.74, -0.35],
          [0.68, 0.56, -0.3],
        ],
        0.14,
      );
      ball(tail, fur, [0.68, 0.56, -0.3], [0.14, 0.14, 0.14]);
    } else {
      ball(tail, fur, [0, 0.15, -0.18], [0.28, 0.3, 0.48]);
      ball(tail, cream, [0, 0.29, -0.45], [0.21, 0.23, 0.23]);
    }
    scene.add(root);
    return {
      root,
      body,
      head,
      tail,
      legs,
      ears,
      eyes,
      brows,
      mouth,
      tongue,
      fur,
      action: null,
      fainted: false,
      won: false,
    };
  }
  const actors = {
    player: pet(
      options.playerKind || "corgi",
      options.playerColor || (night ? "#b8a2ee" : "#dfa65e"),
      options.playerAccent || (night ? "#d7ff78" : "#6d9859"),
    ),
    ...(!portrait && {
      opponent: pet(
        options.opponentKind || "cat",
        night ? "#e3a268" : "#aaa5d1",
        night ? "#8bcddc" : "#9bbcca",
      ),
    }),
  };
  function expression(actor, mood, amount = 1, blink = 0, gaze = 0) {
    const happy = mood === "happy" || mood === "heal";
    const focused = mood === "attack" || mood === "special" || mood === "guard";
    const hurt = mood === "hurt" || mood === "faint";
    actor.eyes.forEach(({ pupil, lid }, i) => {
      const closed = blink > 0.8 || hurt || happy;
      pupil.visible = !closed;
      lid.visible = closed;
      pupil.scale.y = Math.max(0.08, (1 - blink) * (focused ? 0.72 : 1));
      pupil.position.x = gaze * 0.035;
      lid.rotation.z = hurt ? (i ? -0.25 : 0.25) : 0;
      lid.scale.y = hurt ? -0.65 : 1;
      actor.brows[i].rotation.z =
        (i ? 1 : -1) * (focused ? -0.28 : hurt ? 0.28 : 0.05);
      actor.brows[i].position.y = happy ? 0.36 : 0.33;
      actor.ears[i].rotation.x += hurt
        ? -0.65 * amount
        : focused
          ? -0.18 * amount
          : happy
            ? 0.12
            : 0;
      actor.ears[i].rotation.z +=
        (i ? 1 : -1) * (hurt ? 0.45 : happy ? 0.12 : 0) * amount;
    });
    actor.mouth.scale.set(
      happy ? 1.3 : hurt ? 0.65 : 1,
      happy ? 1.35 : focused ? 0.25 : hurt ? 1.5 : 0.85,
      1,
    );
    actor.tongue.visible = !focused && !hurt;
  }
  for (const [key, actor] of Object.entries(actors)) {
    actor.root.position.copy(origins[key]);
    const other = origins[key === "player" ? "opponent" : "player"];
    actor.facing = portrait
      ? 0.3
      : Math.atan2(other.x - origins[key].x, other.z - origins[key].z);
    actor.root.rotation.y = actor.facing;
  }

  const effects = new THREE.Group();
  scene.add(effects);
  const effectGeometry = new THREE.OctahedronGeometry(0.12);
  resources.add(effectGeometry);
  let effectItems = [];
  function clearEffects() {
    for (const item of effectItems) {
      effects.remove(item);
      item.material.dispose();
    }
    effectItems = [];
  }
  function createEffects(move, origin, destination) {
    clearEffects();
    const color =
      move === "heal"
        ? "#9dffbc"
        : move === "guard"
          ? "#a2daff"
          : night
            ? "#d9a6ff"
            : "#e9ee73";
    for (let i = 0; i < 18; i++) {
      const m = new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity: 0.9,
      });
      const particle = new THREE.Mesh(effectGeometry, m);
      particle.userData = {
        i,
        origin: origin.clone(),
        destination: destination.clone(),
        move,
      };
      effects.add(particle);
      effectItems.push(particle);
    }
    if (move === "guard") {
      const shield = new THREE.Mesh(
        sphere,
        new THREE.MeshBasicMaterial({
          color,
          transparent: true,
          opacity: 0.18,
          wireframe: true,
        }),
      );
      shield.position.copy(origin).add(new THREE.Vector3(0, 1.1, 0));
      shield.scale.set(1.05, 1.4, 1.05);
      shield.userData.shield = true;
      effects.add(shield);
      effectItems.push(shield);
    }
  }
  let disposed = false;
  let frame = 0;
  let activeEffect = null;
  const start = performance.now();
  function play(event) {
    if (disposed) return Promise.resolve();
    const key = !portrait && event.actor === "opponent" ? "opponent" : "player";
    const actor = actors[key];
    if (actor.action) actor.action.resolve();
    const move = [
      "attack",
      "special",
      "guard",
      "heal",
      "faint",
      "victory",
      "wave",
      "play",
    ].includes(event.move)
      ? event.move
      : "attack";
    const duration = reduced.matches
      ? 80
      : move === "attack"
        ? 1350
        : move === "special"
          ? 1400
          : move === "faint"
            ? 900
            : 1000;
    const destination = portrait
      ? origins.player
      : origins[key === "player" ? "opponent" : "player"];
    activeEffect = { move, start: performance.now(), duration, actor: key };
    clearEffects();
    if (
      !reduced.matches &&
      !["faint", "victory", "wave", "play"].includes(move)
    )
      createEffects(move, origins[key], destination);
    return new Promise((resolve) => {
      actor.action = { move, start: performance.now(), duration, resolve };
    });
  }
  function resize() {
    if (disposed) return;
    const width = Math.max(1, host.clientWidth);
    const height = Math.max(1, host.clientHeight);
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.fov = portrait ? 34 : width < 500 ? 48 : 37;
    camera.updateProjectionMatrix();
  }
  const observer = new ResizeObserver(resize);
  observer.observe(host);
  resize();
  function contextLost(event) {
    event.preventDefault();
    dispose();
    host.dataset.renderer = "fallback";
    host.innerHTML =
      '<p style="padding:30px;text-align:center">3D paused. Battle controls remain available.</p>';
  }
  renderer.domElement.addEventListener("webglcontextlost", contextLost);

  function tick(now) {
    if (disposed) return;
    const t = (now - start) / 1000;
    const motion = !reduced.matches && !document.hidden;
    camera.position.copy(cameraHome);
    if (motion) {
      camera.position.x += Math.sin(t * 0.25) * 0.14;
      camera.position.y += Math.sin(t * 0.4) * 0.06;
    }
    for (const [key, actor] of Object.entries(actors)) {
      const localTime = t + (key === "opponent" ? 2.13 : 0);
      const idle = motion && !actor.action && !actor.fainted;
      const idlePhase = localTime % 9;
      // Short, staggered gestures leave quiet space between each movement.
      const glance =
        idle && idlePhase > 2 && idlePhase < 4
          ? Math.sin(((idlePhase - 2) / 2) * Math.PI) ** 2
          : 0;
      const pawLift =
        idle && idlePhase > 6.2 && idlePhase < 7.4
          ? Math.sin(((idlePhase - 6.2) / 1.2) * Math.PI) ** 2
          : 0;
      const blinkPhase = localTime % 4.7;
      const blink =
        motion && blinkPhase < 0.22
          ? Math.sin((blinkPhase / 0.22) * Math.PI)
          : 0;
      actor.root.position.copy(origins[key]);
      actor.root.rotation.set(0, actor.facing, 0);
      actor.body.rotation.set(
        0,
        0,
        idle ? Math.sin(localTime * 1.9) * 0.02 : 0,
      );
      actor.head.rotation.set(
        idle ? Math.sin(localTime * 2.1) * 0.025 : 0,
        portrait
          ? glance * 0.25
          : (0.28 + glance * 0.35) * (key === "player" ? -1 : 1),
        glance * 0.13,
      );
      actor.legs.forEach((leg, i) => {
        leg.rotation.x = 0;
        leg.position.x = i < 2 ? -0.4 : 0.4;
        leg.position.z = i % 2 ? 0.4 : -0.44;
        leg.position.y = i % 2 ? 0.19 : 0.24;
        if (i === 1) {
          leg.position.y += pawLift * 0.18;
          leg.position.z += pawLift * 0.1;
          leg.rotation.x = -pawLift * 0.35;
        }
      });
      actor.ears.forEach((ear, i) => {
        const twitchPhase = (localTime + i * 0.27) % 6.3;
        const twitch =
          idle && twitchPhase < 0.5
            ? Math.sin(twitchPhase * Math.PI * 4) * 0.13
            : 0;
        ear.rotation.set(twitch, 0, (i ? -1 : 1) * 0.2 + twitch * 0.5);
      });
      actor.body.scale.setScalar(actor.fainted ? 0.6 : 1);
      if (idle) actor.body.scale.y += Math.sin(localTime * 2.8) * 0.018;
      actor.body.position.y =
        motion && !actor.fainted ? Math.sin(localTime * 2.8) * 0.035 : 0;
      const wag = actor.won ? 13 : actor.action ? 9 : 5;
      actor.tail.rotation.y =
        motion && !actor.fainted
          ? Math.sin(localTime * wag) * (actor.won ? 0.6 : 0.32)
          : 0;
      actor.tail.rotation.x =
        motion && !actor.fainted ? Math.sin(localTime * 3) * 0.1 : -0.15;
      expression(
        actor,
        actor.fainted ? "faint" : actor.won ? "happy" : actor.mood || "idle",
        1,
        blink,
        glance,
      );
      if (idle)
        actor.tongue.position.y = -0.038 + Math.sin(localTime * 4) * 0.009;
      actor.fur.emissive.setHex(0);
      if (actor.fainted) actor.root.rotation.z = key === "player" ? -0.8 : 0.8;
      if (actor.won && motion)
        actor.root.position.y = Math.abs(Math.sin(t * 3)) * 0.25;
      const action = actor.action;
      if (!action) continue;
      const p = Math.min(1, (now - action.start) / action.duration);
      const pulse = Math.sin(p * Math.PI);
      expression(
        actor,
        ["victory", "wave", "play"].includes(action.move)
          ? "happy"
          : action.move,
        pulse,
      );
      if (motion) {
        if (action.move === "wave") {
          actor.head.rotation.z = pulse * 0.16;
          actor.legs[3].position.y += pulse * 0.65;
          actor.legs[3].position.z += pulse * 0.12;
          actor.legs[3].rotation.x = -pulse * 0.8;
          actor.legs[3].position.x =
            0.4 + Math.sin(p * Math.PI * 6) * pulse * 0.12;
        } else if (action.move === "play") {
          actor.root.position.y = Math.abs(Math.sin(p * Math.PI * 2)) * 0.5;
          actor.root.rotation.y += Math.sin(p * Math.PI * 2) * 0.6;
          actor.head.rotation.z = Math.sin(p * Math.PI * 2) * 0.2;
          actor.legs[1].rotation.x = -pulse * 0.7;
          actor.legs[3].rotation.x = -pulse * 0.7;
        } else if (action.move === "attack") {
          const direction = origins[key === "player" ? "opponent" : "player"]
            .clone()
            .sub(origins[key]);
          if (p < 0.18) {
            const crouch = Math.sin(((p / 0.18) * Math.PI) / 2);
            actor.body.scale.set(
              1 + crouch * 0.12,
              1 - crouch * 0.25,
              1 + crouch * 0.12,
            );
            actor.head.rotation.x = crouch * 0.16;
            actor.root.position.addScaledVector(direction, -crouch * 0.035);
          } else if (p < 0.58) {
            const leap = (p - 0.18) / 0.4;
            actor.root.position.addScaledVector(direction, leap * 0.7);
            actor.root.position.y = Math.sin(leap * Math.PI) * 1.25;
            actor.body.rotation.x = -0.25 + leap * 0.55;
            actor.legs.forEach((leg, i) => {
              leg.rotation.x = i % 2 ? -0.9 : 0.65;
              leg.position.z += i % 2 ? 0.25 : -0.2;
            });
          } else if (p < 0.9) {
            const retreat = (p - 0.58) / 0.32;
            actor.root.position.addScaledVector(direction, (1 - retreat) * 0.7);
            actor.root.position.y = Math.sin(retreat * Math.PI) * 0.55;
            actor.body.rotation.x = -0.18 * Math.sin(retreat * Math.PI);
          } else {
            const land = Math.sin(((p - 0.9) / 0.1) * Math.PI);
            actor.body.scale.set(
              1 + land * 0.1,
              1 - land * 0.2,
              1 + land * 0.1,
            );
          }
        } else if (action.move === "special") {
          actor.root.position.y = pulse * 0.55;
          actor.root.rotation.y += Math.sin(p * Math.PI * 2) * 0.4;
          actor.head.rotation.x = -pulse * 0.18;
          actor.legs[1].position.y += pulse * 0.28;
          actor.legs[3].position.y += pulse * 0.28;
          actor.fur.emissive
            .set(night ? "#433061" : "#4a5120")
            .multiplyScalar(pulse);
        } else if (action.move === "guard") {
          actor.head.rotation.x = pulse * 0.2;
          actor.legs[1].position.z -= pulse * 0.12;
          actor.legs[3].position.z -= pulse * 0.12;
          actor.body.scale.set(
            1 + pulse * 0.1,
            1 - pulse * 0.16,
            1 + pulse * 0.1,
          );
        } else if (action.move === "heal") {
          actor.root.position.y = pulse * 0.3;
          actor.head.rotation.z = Math.sin(p * Math.PI * 2) * 0.16;
          actor.head.rotation.x = -pulse * 0.12;
        } else if (action.move === "faint") {
          actor.root.rotation.z = p * (key === "player" ? -0.8 : 0.8);
          actor.body.scale.setScalar(1 - p * 0.4);
        } else if (action.move === "victory") {
          actor.root.position.y = Math.abs(Math.sin(p * Math.PI * 3)) * 0.6;
          actor.root.rotation.y += p * Math.PI * 2;
          actor.legs[1].rotation.x = -pulse * 0.8;
          actor.legs[3].rotation.x = -pulse * 0.8;
        }
      }
      if (p === 1) {
        if (action.move === "faint") actor.fainted = true;
        if (action.move === "victory") actor.won = true;
        actor.body.rotation.x = 0;
        actor.action = null;
        action.resolve();
      }
    }
    if (activeEffect) {
      const p = Math.min(1, (now - activeEffect.start) / activeEffect.duration);
      if (
        motion &&
        !portrait &&
        ["attack", "special"].includes(activeEffect.move) &&
        p > 0.5 &&
        p < 0.86
      ) {
        const hit =
          actors[activeEffect.actor === "player" ? "opponent" : "player"];
        hit.root.position.x += Math.sin(p * 70) * 0.1;
        hit.head.rotation.x = -Math.sin(((p - 0.5) / 0.36) * Math.PI) * 0.24;
        expression(hit, "hurt");
        hit.fur.emissive
          .set("#ffb8a8")
          .multiplyScalar(Math.max(0, Math.sin(p * 50)) * 0.45);
        camera.position.x += Math.sin(p * 70) * 0.035;
      }
      for (const item of effectItems) {
        if (item.userData.shield) {
          item.material.opacity = Math.sin(p * Math.PI) * 0.25;
          continue;
        }
        const { i, origin, destination, move } = item.userData;
        const a = i * 2.4;
        if (move === "guard" || move === "heal") {
          item.position
            .copy(origin)
            .add(
              new THREE.Vector3(
                Math.cos(a + p * 4) * 0.8,
                0.4 + p * 2 + (i % 3) * 0.15,
                Math.sin(a + p * 4) * 0.8,
              ),
            );
        } else if (move === "attack") {
          const impact = Math.max(0, (p - 0.54) / 0.46);
          item.position
            .copy(impact ? destination : origin)
            .add(
              new THREE.Vector3(
                Math.cos(a) * impact * 2,
                impact ? 0.8 + Math.sin(a) * impact : 0.1,
                Math.sin(a) * impact * 2,
              ),
            );
          item.visible = p > 0.54;
        } else {
          const travel = Math.max(0, Math.min(1, (p - 0.25) / 0.35));
          item.position
            .lerpVectors(origin, destination, travel)
            .add(
              new THREE.Vector3(
                Math.cos(a + p * 5) * 0.22,
                1.2 + Math.sin(travel * Math.PI) * 0.4,
                Math.sin(a + p * 5) * 0.22,
              ),
            );
          if (p > 0.6)
            item.position.add(
              new THREE.Vector3(
                Math.cos(a) * (p - 0.6) * 4,
                Math.sin(a) * (p - 0.6) * 3,
                Math.sin(a * 2) * (p - 0.6) * 4,
              ),
            );
        }
        item.rotation.set(p * 8 + i, p * 4, 0);
        item.material.opacity = Math.sin(p * Math.PI);
        item.scale.setScalar(activeEffect.move === "special" ? 1.2 : 0.7);
      }
      if (p === 1) {
        clearEffects();
        activeEffect = null;
      }
    }
    camera.lookAt(target);
    renderer.render(scene, camera);
    frame = requestAnimationFrame(tick);
  }
  frame = requestAnimationFrame(tick);
  function dispose() {
    if (disposed) return;
    disposed = true;
    cancelAnimationFrame(frame);
    observer.disconnect();
    for (const actor of Object.values(actors)) {
      actor.action?.resolve();
      actor.action = null;
    }
    clearEffects();
    resources.forEach((resource) => resource.dispose());
    renderer.domElement.removeEventListener("webglcontextlost", contextLost);
    renderer.dispose();
    renderer.forceContextLoss();
  }
  function setAngle(degrees) {
    if (portrait) actors.player.facing = 0.33 + (degrees * Math.PI) / 180;
  }
  function setMood(mood) {
    if (portrait) actors.player.mood = mood;
  }
  // Capture real views of the same rig, with a transparent background.
  function captureSprites() {
    if (!portrait || disposed) return null;
    const actor = actors.player;
    const size = renderer.getSize(new THREE.Vector2());
    const ratio = renderer.getPixelRatio();
    const background = scene.background;
    const fog = scene.fog;
    const hidden = scene.children.filter(
      (item) => item !== actor.root && !item.isLight && item.visible,
    );
    const rotation = actor.root.rotation.clone();
    const headRotation = actor.head.rotation.clone();
    const facing = actor.facing;
    const sheet = document.createElement("canvas");
    sheet.width = 2048;
    sheet.height = 1024;
    const ctx = sheet.getContext("2d");
    let thumbnail;
    try {
      hidden.forEach((item) => {
        item.visible = false;
      });
      scene.background = null;
      scene.fog = null;
      renderer.setClearColor(0x000000, 0);
      renderer.setPixelRatio(1);
      renderer.setSize(256, 256, false);
      camera.aspect = 1;
      camera.position.copy(cameraHome);
      camera.lookAt(target);
      camera.updateProjectionMatrix();
      actor.head.rotation.set(0, 0, 0);
      ["idle", "happy", "guard", "hurt"].forEach((mood, row) => {
        actor.ears.forEach((ear, i) =>
          ear.rotation.set(0, 0, (i ? -1 : 1) * 0.2),
        );
        expression(actor, mood);
        for (let col = 0; col < 8; col++) {
          actor.root.rotation.set(0, 0.33 + (col * Math.PI) / 4, 0);
          renderer.render(scene, camera);
          ctx.drawImage(renderer.domElement, col * 256, row * 256, 256, 256);
          if (!row && !col)
            thumbnail = renderer.domElement.toDataURL("image/png");
        }
      });
      return { sheet: sheet.toDataURL("image/png"), thumbnail };
    } finally {
      hidden.forEach((item) => {
        item.visible = true;
      });
      scene.background = background;
      scene.fog = fog;
      actor.root.rotation.copy(rotation);
      actor.head.rotation.copy(headRotation);
      actor.facing = facing;
      renderer.setPixelRatio(ratio);
      renderer.setSize(size.x, size.y, false);
      camera.aspect = size.x / size.y;
      camera.updateProjectionMatrix();
      expression(actor, actor.mood || "idle");
      renderer.render(scene, camera);
    }
  }
  return { play, dispose, setAngle, setMood, captureSprites };
}
window.PokepetArena = { mount };
