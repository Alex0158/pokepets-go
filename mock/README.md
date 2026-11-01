# Afterglow — Pokepet Go concept 02

A responsive, interactive nighttime exploration concept in midnight blue, lavender, and lime. Open `index.html` directly, or use the workspace preview server. No build step, dependencies, fonts, or network services are required.

## Try the experience

- Select a glowing map marker, or choose an adventure below the map.
- Start a mission, confirm or skip it, then revisit its memory. Completion awards XP once per mission.
- Open **My pet** for a close-up animated 3D mooncat: blinking, ear flicks, curious glances, paw lifts, and tail wags. **Say hello** makes it wave, **Play** triggers happy hops, and **Give love** brings a happy expression and glowing particles. These interactions do not spend XP. You can still spend 40 XP on a fictional stat upgrade below the preview.
- Open **Memories** to see completed adventures, including after reload.
- Open **Battle** for a cinematic, Pokémon-inspired encounter: opposing name/type/level/HP panels, a 3D arena, narrated turns, and a four-move console. Choose Pounce, Star spark (3 uses), Guard, or Moon mend (1 use). Inputs lock while player and rival animations resolve in sequence. Nova alternates tackle and guard deterministically. Guard halves the next incoming attack for either side and persists until that attack lands; a match ends in victory, defeat, or a draw after 20 individual moves (both players count). Replay and leaving the arena preserve adventure progress.
- Open the owner avatar or the companion card’s arrow to name the owner and pet separately. An owner photo can be previewed locally; it never uploads or generates an avatar.
- Toggle routes, zoom/recenter the map, or filter missions by indoor/outdoor activity.
- Drag the 3D neighborhood horizontally (or focus it and use the left/right arrow keys) to look around. **Pause** freezes traffic and water; **Recenter** restores the original camera. Animation also stops offscreen, in a hidden tab, or when reduced motion is enabled.

## London map reference

The generated neighborhood is based on **55 Laburnum Street, London E2 8BD (Hoxton Docks / Brunswick Wharf)** in Haggerston. Regent’s Canal runs north of Laburnum Street; Haggerston Bridge is west of the venue, the Bridge Academy is across Haggerston Road, and Haggerston Baths face the venue from the south. Queensbridge Road and Whiston Road frame the wider scene.

The layout is hand-authored from the references below, rather than imported survey geometry. Distances are compressed and building shapes, heights, trees, boats, traffic, and lighting are illustrative. The address is the scene reference, not the player's detected location. Home base, missions, and route lines are demo fixtures, not verified access or walking directions. The map works offline, without geolocation, map tiles, API keys, or additional dependencies.

References checked on 1 November 2026:

- [Hoxton Docks venue brochure — address](https://s3.eu-west-1.amazonaws.com/media.headbox.com/spaces/8835/documents/b8845340-3285-491c-914c-653c47651219_Hoxton%20Docks%202025.pdf)
- [Hackney Laburnum Street consultation drawing — surrounding streets](https://s3-eu-west-2.amazonaws.com/commonplace-customer-assets/rebuildingagreenerhackney/Laburnum%20Street%20-%20Drawing.pdf)
- [Hackney Haggerston Baths report — Baths, canal, bridge, and street relationships](https://hackney.moderngov.co.uk/documents/s67756/Haggerston%20Baths%20Pre-app%20Committee%20Report.pdf)

## Scope

This is a UI mockup, not the multiplayer implementation. The map is a stylised interpretation of a real London area; nearby players, activities, community progress, and rival are fixtures. Progress uses a separate `pokepet-afterglow-v1` browser-storage key, with an in-memory fallback when storage is unavailable. No backend, database, GPS, AI generation, or live matchmaking is connected. Battle previews do not award XP.

The homepage map uses original procedural 3D geometry projected onto a Canvas 2D surface by `map.js`: shaded buildings, roof details, lit windows, tree canopies, roads, crossings, bridges, moving cars, and rippling water. It needs no WebGL, external map service, or additional dependency. Adventure markers remain native keyboard-accessible buttons. A matching Laburnum Street SVG map is retained as a fallback; companion and icon artwork is also inline SVG. The battle arena uses the shared bundled `arena.js` Three.js renderer with original procedural mooncat/corgi models; a static fallback keeps the controls usable if the renderer is absent. The renderer stays mounted throughout a match and is disposed on restart, close, or another dialog. The human owner and mooncat pet are distinct characters. Animations respect reduced-motion preferences. Dialogs use native keyboard/focus behavior.

The battle is a local simulation, not shared multiplayer. Star spark and Moon mend are presentation proposals beyond the documented attack/defend core; no match awards XP. This `pokepets-go/mock/` directory owns `battle-scene.js`, its bundled `arena.js`, and license notices. Battle and profile share the same smooth models and expression system. Profile renderers are disposed when the dialog closes, another dialog opens, or an upgrade recreates the profile. Reduced-motion mode keeps gestures brief and suppresses continuous motion.

To change the 3D renderer, run `npm install`, `npm run build`, `npm run lint`, and `npm run format:check` from this directory. The bundled preview itself needs no installation. The profile's rendering was visually checked in Safari; a renderer smoke check exercised all profile gestures and battle moves, finite transforms, and disposal during a pending motion.

Informed by all seven Pokepet Go Space pages read on 1 November 2026, with the latest owner/pet separation and tilted-map requirements taking precedence over historical drafts. The visual treatment is a proposal; the current production architecture remains undecided.

Syntax checks from the repository root: `node --check mock/app.js` and `node --check mock/map.js`.

The London map was checked in Safari at desktop size and a 390 × 844 responsive viewport. Mission selection, routes, pause, zoom, recentering, and the SVG fallback were exercised. Lint, formatting, and JavaScript syntax checks passed.
