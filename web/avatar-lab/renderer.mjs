import * as THREE from '/vendor/three.module.js';
import { frameAt, frameUV, advanceTowards, validateManifest } from './core.mjs';

function textureFrom(url) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(Error('Asset load timed out')), 4000);
    new THREE.TextureLoader().load(url, t => {
      clearTimeout(timer); t.colorSpace = THREE.SRGBColorSpace;
      t.magFilter = THREE.LinearFilter; t.minFilter = THREE.LinearFilter;
      t.generateMipmaps = false; resolve(t);
    }, undefined, () => { clearTimeout(timer); reject(Error('Asset unavailable')); });
  });
}

export async function createMap({ element, manifest, onWalk, onMission, onFrame, onAsset }) {
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.setClearColor(0xe3eed9);
  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(-7, 7, 6, -6, 0.1, 100);
  camera.position.set(9, 12, 13); camera.lookAt(0, 0, 0);
  scene.add(new THREE.HemisphereLight(0xfff9df, 0x649169, 2.4));
  const sunlight = new THREE.DirectionalLight(0xffffff, 2.6); sunlight.position.set(-5, 12, 4); scene.add(sunlight);
  const material = color => new THREE.MeshLambertMaterial({ color });
  const ground = new THREE.Mesh(new THREE.BoxGeometry(12.5, .28, 10), material(0xb3d297));
  ground.position.y = -.2; scene.add(ground);
  const addBox = (w, h, d, color, x, y, z) => {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), material(color));
    mesh.position.set(x, y, z); scene.add(mesh); return mesh;
  };
  addBox(12.5, .04, 1.1, 0xefe5c6, 0, -.025, 1.1);
  addBox(1.1, .04, 10, 0xefe5c6, -.7, -.02, 0);
  addBox(3.8, .06, 2.6, 0x83bfca, 3.7, .01, -2.8);
  addBox(.85, .09, 2.7, 0xbca37a, 2.9, .07, -2.8);
  addBox(2.5, .05, 1.6, 0x9fc47f, -3.9, .02, 2.9);
  function tree(x, z, scale = 1) {
    const trunk = new THREE.Mesh(new THREE.CylinderGeometry(.11, .16, .85, 6), material(0x94714a));
    trunk.position.set(x, .4, z); scene.add(trunk);
    for (const [y, r, c] of [[1.1, .68, 0x5c9666], [1.65, .51, 0x76ac76]]) {
      const crown = new THREE.Mesh(new THREE.SphereGeometry(r * scale, 7, 5), material(c));
      crown.position.set(x, y * scale, z); scene.add(crown);
    }
  }
  for (const p of [[-4.6,-3.6],[-2.7,-3.5],[-4.9,0],[-4.6,3.7],[4.8,3.6],[2.8,3.8],[.9,-3.9]]) tree(...p);
  for (let n = 0; n < 14; n++) {
    const x = Math.sin(n * 5.2) * 4.8, z = Math.cos(n * 3.1) * 3.9;
    if (Math.abs(x + .7) < 1 || Math.abs(z - 1.1) < .9 || x > 1.8 && z < -1.4) continue;
    const flower = new THREE.Mesh(new THREE.SphereGeometry(.075, 5, 4), material(n % 2 ? 0xf0ce65 : 0xd9b3cf));
    flower.position.set(x, .08, z); scene.add(flower);
  }
  addBox(1.5, .15, .45, 0xb58a60, -3.4, .45, -1.8);
  addBox(1.5, .6, .13, 0xb58a60, -3.4, .65, -2.04);
  const mission = new THREE.Mesh(new THREE.OctahedronGeometry(.32), new THREE.MeshBasicMaterial({ color: 0xf8ca56 }));
  mission.position.set(1, 1.15, .9); scene.add(mission);
  const missionBase = new THREE.Mesh(new THREE.CylinderGeometry(.5, .5, .045, 28), material(0xf6e7af));
  missionBase.position.set(1, .02, .9); scene.add(missionBase);
  const group = new THREE.Group(); scene.add(group);
  group.position.set(-1.5, 0, 1.1);
  const owner = new THREE.Sprite(new THREE.SpriteMaterial({ transparent: true, depthWrite: false }));
  owner.scale.set(1.25, 1.75, 1); owner.position.set(-1.15, .89, -.1); group.add(owner);
  const pet = new THREE.Sprite(new THREE.SpriteMaterial({ transparent: true, depthWrite: false, alphaTest: .02 }));
  pet.scale.set(1.35, 1.35, 1); pet.position.set(.8, .61, .28); group.add(pet);
  const shadowMat = new THREE.MeshBasicMaterial({ color: 0x4d7043, transparent: true, opacity: .17, depthWrite: false });
  for (const [x, z, r] of [[-1.15,-.1,.32],[.8,.28,.42]]) {
    const shadow = new THREE.Mesh(new THREE.CircleGeometry(r, 28), shadowMat);
    shadow.rotation.x = -Math.PI / 2; shadow.scale.y = .55; shadow.position.set(x, .04, z); group.add(shadow);
  }
  let target = { x: -1.5, z: 1.1 }, state = 'idle', stateAt = performance.now(), actionUntil = 0;
  let generated = false, sheet = null, facing = 1, disposed = false, loadToken = 0;
  let petManifest=manifest,ownerSheet=null,ownerManifest=null,ownerLoadToken=0,ownerState='idle',ownerStateAt=performance.now(),guardUntil=0;
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const changeState = value => { if (value !== state) { state = value; stateAt = performance.now(); } };
  async function setPetSheet(missing = false) {
    const token = ++loadToken;
    let t, isGenerated = false;
    try {
      t = await textureFrom(missing ? 'assets/missing-sheet.png' : manifest.sheet);
      if (t.image.width !== manifest.width || t.image.height !== manifest.height) { t.dispose(); throw Error('Sheet dimensions do not match manifest'); }
      isGenerated = true;
    } catch {
      try { t = await textureFrom('assets/pet-preset.svg'); }
      catch { onAsset('Artwork unavailable; map marker fallback', false); return; }
    }
    if (disposed || token !== loadToken) { t.dispose(); return; }
    const previous = sheet; sheet = t; generated = isGenerated;
    petManifest=manifest;
    pet.material.map = t; pet.material.needsUpdate = true; previous?.dispose();
    onAsset(isGenerated ? 'Generated sample sheet' : 'Preset fallback · sample sheet unavailable', isGenerated);
  }
  // Both characters have independent assets. Owner failure cannot block the pet.
  textureFrom('assets/owner-preset.svg').then(t => {
    if (disposed||ownerLoadToken>0) { t.dispose(); return; }
    owner.material.map = t; owner.material.needsUpdate = true;
  }).catch(() => { owner.material.color.setHex(0xe8b64e); });
  await setPetSheet(false);
  async function setCharacterAsset(subject,nextManifest,provenance={provider:'fixture'}) {
    if(!['owner','pet'].includes(subject))throw Error('Invalid subject');
    validateManifest(nextManifest);
    const token=subject==='owner'?++ownerLoadToken:++loadToken;
    const t=await textureFrom(nextManifest.sheet);
    if(t.image.width!==nextManifest.width||t.image.height!==nextManifest.height){t.dispose();throw Error('Asset dimensions mismatch');}
    if(disposed||token!==(subject==='owner'?ownerLoadToken:loadToken)){t.dispose();return false;}
    if(subject==='owner') {
      const prior=owner.material.map;owner.material.map=t;owner.material.needsUpdate=true;
      ownerSheet=t;ownerManifest=nextManifest;prior?.dispose();
    } else {
      const prior=sheet;sheet=t;generated=true;petManifest=nextManifest;
      pet.material.map=t;pet.material.needsUpdate=true;prior?.dispose();
      onAsset(provenance.provider==='openai'?'Live OpenAI output · synthetic input':provenance.provider==='openai-cache'?'Cached OpenAI output · synthetic input':'Job asset · fixture, not input-conditioned',true);
    }
    return true;
  }
  function resize() {
    const w = Math.max(element.clientWidth, 1), h = Math.max(element.clientHeight, 1);
    renderer.setSize(w, h, false);
    const halfHeight = Math.max(5.5, 6.4 / (w / h));
    camera.left = -halfHeight * w / h; camera.right = halfHeight * w / h;
    camera.top = halfHeight; camera.bottom = -halfHeight; camera.updateProjectionMatrix();
  }
  const observer = new ResizeObserver(resize); observer.observe(element); resize();
  const ray = new THREE.Raycaster(), pointer = new THREE.Vector2();
  function click(e) {
    const rect = renderer.domElement.getBoundingClientRect();
    pointer.set((e.clientX - rect.left) / rect.width * 2 - 1, -(e.clientY - rect.top) / rect.height * 2 + 1);
    ray.setFromCamera(pointer, camera);
    if (ray.intersectObject(mission).length) { onMission(); return; }
    const hit = ray.intersectObject(ground)[0];
    if (hit) onWalk({ x: Math.max(-4.4, Math.min(4.4, hit.point.x)), z: Math.max(-3.6, Math.min(3.6, hit.point.z)) });
  }
  renderer.domElement.addEventListener('click', click);
  element.append(renderer.domElement);
  let previous = performance.now();
  function draw(now) {
    const dt = (now - previous) / 1000; previous = now;
    const before = { x: group.position.x, z: group.position.z };
    const after = reducedMotion.matches ? target : advanceTowards(before, target, dt);
    group.position.x = after.x; group.position.z = after.z;
    const moving = Math.hypot(after.x - target.x, after.z - target.z) > .01;
    if (Math.abs(target.x - before.x) > .01) facing = target.x < before.x ? -1 : 1;
    if (now >= actionUntil) changeState(moving ? 'move' : 'idle');
    if (generated && sheet) {
      const f = frameAt(petManifest, state, reducedMotion.matches ? 0 : (now - stateAt) / 1000), uv = frameUV(petManifest, f);
      sheet.repeat.set(uv.repeatX * facing, uv.repeatY);
      sheet.offset.set(uv.offsetX + (facing < 0 ? uv.repeatX : 0), uv.offsetY);
      onFrame({ state, frame: petManifest.animations[state].frames.indexOf(f) + 1, generated, moving, x: after.x, z: after.z });
    } else onFrame({ state, frame: 1, generated: false, moving, x: after.x, z: after.z });
    if (!reducedMotion.matches) { mission.rotation.y = now / 1000; owner.position.y = .89 + (moving ? Math.sin(now / 85) * .035 : 0); }
    if(ownerSheet&&ownerManifest) {
      const next=moving?'move':'idle';if(next!==ownerState){ownerState=next;ownerStateAt=now;}
      const f=frameAt(ownerManifest,ownerState,reducedMotion.matches?0:(now-ownerStateAt)/1000),uv=frameUV(ownerManifest,f);
      ownerSheet.repeat.set(uv.repeatX,uv.repeatY);ownerSheet.offset.set(uv.offsetX,uv.offsetY);
      element.dataset.ownerFrame=String(ownerManifest.animations[ownerState].frames.indexOf(f)+1);element.dataset.ownerState=ownerState;
    }
    pet.material.color.setHex(now<guardUntil?0x86dfe5:0xffffff);
    renderer.render(scene, camera);
  }
  renderer.setAnimationLoop(draw);
  return {
    walk(point) { target = { ...point }; actionUntil = 0; },
    idle() { target = { x: group.position.x, z: group.position.z }; actionUntil = 0; changeState('idle'); },
    play(action) { if(action==='defend'){guardUntil=performance.now()+650;return;} if (!['attack', 'hurt'].includes(action)) return; changeState(action); actionUntil = performance.now() + 1000 * petManifest.animations[action].frames.length / petManifest.animations[action].fps; },
    setPetSheet,
    setCharacterAsset,
    dispose() {
      disposed = true; renderer.setAnimationLoop(null); observer.disconnect(); renderer.domElement.removeEventListener('click', click);
      const materials = new Set(), geometries = new Set(), textures = new Set();
      scene.traverse(o => { if (o.geometry) geometries.add(o.geometry); if (o.material) materials.add(o.material); });
      for (const m of materials) { if (m.map) textures.add(m.map); m.dispose(); }
      for (const t of textures) t.dispose(); for (const g of geometries) g.dispose();
      renderer.dispose(); renderer.domElement.remove();
    },
  };
}
