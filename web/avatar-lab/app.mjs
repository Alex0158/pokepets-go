import { validateManifest, acceptBattleEvent } from './core.mjs';
import { setupUploads } from './uploads.mjs';

const $ = id => document.getElementById(id);
let map = null, walkIndex = 0, eventNumber = 1, battleTimer, cursor = null;
let latestEvent = { matchId: 'fixture-preview', commandId: 'initial-snapshot', version: 1, move: 'attack', resultingHp: 10 };
cursor = acceptBattleEvent(cursor, latestEvent, { hydrate: true }).cursor;
const points = [{ x: 2, z: 1.1 }, { x: -.7, z: -2 }, { x: -2.8, z: 1.1 }];

function selectMission() {
  $('selection').textContent = 'Sample mission selected: A moment in the meadow. No reward or completion is recorded.';
}
function walk(point = points[walkIndex++ % points.length]) {
  clearTimeout(battleTimer);
  map?.walk(point);
  if (!map) $('motion').textContent = 'Walk selected · static fallback';
}
function assetStatus(text, generated) {
  $('asset-status').textContent = text;
  document.querySelector('.pet-portrait').classList.toggle('preset', !generated);
  $('map').dataset.asset = generated ? 'generated-sample' : 'preset-fallback';
  if (!generated) $('notice').textContent = 'Sample sheet unavailable. Preset pet remains usable; mission selection and movement are preserved.';
  else $('notice').textContent = text.startsWith('Live OpenAI')?'Live OpenAI asset from a synthetic input. Battle events remain local fixtures.':text.startsWith('Cached OpenAI')?'Cached output from the recorded live API test; no new generation request. Battle events remain local fixtures.':'Invented sample characters and local fixture events; no personal photos or multiplayer.';
}
$('walk').addEventListener('click', () => walk());
$('idle').addEventListener('click', () => { clearTimeout(battleTimer); map?.idle(); $('motion').textContent = 'Idle'; });
$('mission').addEventListener('click', selectMission);
$('battle').addEventListener('click', () => {
  clearTimeout(battleTimer); map?.idle();
  latestEvent = { ...latestEvent, commandId: `fixture-${++eventNumber}`, version: eventNumber };
  const result = acceptBattleEvent(cursor, latestEvent); cursor = result.cursor;
  if (result.play) {
    map?.play('attack');
    $('notice').textContent = `Fixture event ${eventNumber}: attack then hurt pose preview. No opponent, damage calculation or server result.`;
    if (map) battleTimer = setTimeout(() => map?.play('hurt'), 650);
    else $('motion').textContent = 'Fixture attack + hurt · static fallback';
  }
});
$('missing').addEventListener('click', () => map?.setPetSheet(true));
$('restore').addEventListener('click', () => map?.setPetSheet(false));
async function start() {
  try {
    if (new URLSearchParams(location.search).get('webgl') === 'off') throw Error('WebGL disabled for fallback check');
    const response = await fetch('manifest.json');
    if (!response.ok) throw Error('Manifest unavailable');
    const manifest = validateManifest(await response.json());
    const { createMap } = await import('./renderer.mjs');
    map = await createMap({ element: $('map'), manifest, onWalk: walk, onMission: selectMission, onAsset: assetStatus,
      onFrame: ({ state, frame, generated, moving, x, z }) => {
        $('motion').textContent = `${state[0].toUpperCase()}${state.slice(1)}${generated ? '' : ' · preset'}`;
        $('frame-readout').textContent = generated ? `Frame ${frame} / 4` : 'Static art';
        Object.assign($('map').dataset, { state, frame: String(frame), moving: String(moving), x: x.toFixed(3), z: z.toFixed(3) });
      },
    });
    $('renderer-status').textContent = 'Three.js · local';
    $('load-cached').disabled=false;
  } catch {
    $('renderer-status').textContent = 'Static fallback';
    $('fallback').hidden = false;
    $('map').dataset.asset = 'static-fallback';
    $('asset-status').textContent = 'Preset fallback';
    document.querySelector('.pet-portrait').classList.add('preset');
    $('frame-readout').textContent = 'Static art';
    document.querySelector('.hint').textContent = 'Use the controls to continue';
    $('notice').textContent = '3D map unavailable. Separate preset characters and sample mission controls remain usable. No live data is affected.';
  }
}
setupUploads(()=>map);
window.addEventListener('pagehide', event => { clearTimeout(battleTimer); if(!event.persisted)map?.dispose(); });
start();
