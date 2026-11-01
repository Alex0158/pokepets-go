# Pokepets Go — Afterglow

A playable nighttime adventure through Haggerston, London, in midnight blue, lavender, and lime. Open `index.html` directly or serve this directory locally. The bundled experience runs without installation or network services.

## Try the experience

- Select a glowing map marker to choose from nine adventures across the canal, courtyards, and expanded park. The adventure card’s previous/next arrows bring each mission into view.
- Start a mission, confirm or skip it, then revisit its memory. Completion awards XP once per mission.
- Open **My pet** for a close-up animated 3D mooncat: blinking, ear flicks, curious glances, paw lifts, and tail wags. **Say hello** makes it wave, **Play** triggers happy hops, and **Give love** brings a happy expression and glowing particles. These interactions do not spend XP. You can still spend 40 XP on a game-stat upgrade below the pet portrait.
- Open **Community** to discover neighbourhood owners. Search by owner, pet, or neighbourhood and filter by pet type. Open a profile to switch between companions, inspect Attack/Defense/Speed/Health and XP progress, and see completed missions, distance explored, streak, battle records, mission categories, and recent activity. Back returns to your previous search and filter. All neighbours, distances, and statistics are predefined local content; no geolocation or live owner data is used.
- Open **Memories** to see completed adventures, including after reload.
- Open **Battle** for a cinematic, Pokémon-inspired encounter: opposing name/type/level/HP panels, a 3D arena, narrated turns, and a four-move console. Choose Pounce, Star spark (3 uses), Guard, or Moon mend (1 use). Inputs lock while player and rival animations resolve in sequence. Nova alternates tackle and guard deterministically. Guard halves the next incoming attack for either side and persists until that attack lands; a match ends in victory, defeat, or a draw after 20 individual moves (both players count). Replay and leaving the arena preserve adventure progress.
- Open the owner avatar or the companion card’s arrow to name the owner and pet separately. An owner photo can be previewed locally; it never uploads or generates an avatar.
- Toggle routes or zoom/recenter the map.
- Drag the 3D neighborhood (or focus it and use the arrow keys) to explore the larger area. Toggle **Rotate** to turn the camera instead, or hold Shift while dragging. **Pause** freezes traffic, water, and player movement; **Recenter** restores the original camera. Animation also stops offscreen, in a hidden tab, or when reduced motion is enabled.
- Meet eight sample owner/pet pairs around the map, with individual names, coat colours, and species-specific portraits: a silver tabby, corgi, domestic longhair, mini lop rabbit, Hermann’s tortoise, golden retriever, beagle, and sable ferret. Selecting a pet opens its breed, species, coat, owner, and outing details. The Community directory retains its four detailed profiles.

## Pet studio

Open **My pet → Add a pet**. Choose a JPG, PNG or WebP photo (up to 8 MB), name your companion, and select cat, dog or rabbit. The local creation sequence produces an interactive 3D companion with an adjustable coat colour, four expressions, eight viewing angles, and wave/hop animations. Expand **Character sprites** to view and download a transparent PNG sheet with 32 frames (256 × 256 each).

For this presentation, conversion uses the centre of the photo to estimate a coat colour and applies it to an original procedural character rig; it does not reconstruct the animal or call an AI service. Pet type is selected by the user. The photo is resized to at most 384 pixels and stored only in this browser alongside a rendered portrait. The sprite sheet is generated on demand and is not stored. Up to 12 companions can be kept; switching pets preserves each pet's level and upgrades. Available XP, completed adventures, and memories belong to the owner. Existing progress migrates into the original companion. New companions also appear in the battle arena with their chosen shape and colour. The map retains its illustrated companion marker.

Invalid images, unavailable WebGL, interrupted creation, and browser-storage failures have explicit recovery messages. With storage unavailable, companions remain usable for the current visit.

## London map reference

The generated neighborhood is based on **55 Laburnum Street, London E2 8BD (Hoxton Docks / Brunswick Wharf)** in Haggerston. Regent’s Canal runs north of Laburnum Street; Haggerston Bridge is west of the venue, the Bridge Academy is across Haggerston Road, and Haggerston Baths face the venue from the south. Queensbridge Road and Whiston Road frame the wider scene.

The layout is hand-authored from the references below, rather than imported survey geometry. Distances are compressed and building shapes, heights, trees, boats, traffic, and lighting are illustrative. The address is the scene reference, not the player's detected location. Home base, missions, and route lines are illustrative gameplay elements, not verified access or walking directions. The map works offline, without geolocation, map tiles, API keys, or additional dependencies.

References checked on 1 November 2026:

- [Hoxton Docks venue brochure — address](https://s3.eu-west-1.amazonaws.com/media.headbox.com/spaces/8835/documents/b8845340-3285-491c-914c-653c47651219_Hoxton%20Docks%202025.pdf)
- [Hackney Laburnum Street consultation drawing — surrounding streets](https://s3-eu-west-2.amazonaws.com/commonplace-customer-assets/rebuildingagreenerhackney/Laburnum%20Street%20-%20Drawing.pdf)
- [Hackney Haggerston Baths report — Baths, canal, bridge, and street relationships](https://hackney.moderngov.co.uk/documents/s67756/Haggerston%20Baths%20Pre-app%20Committee%20Report.pdf)

## Local runtime

This standalone experience runs in the browser. The map is a stylised interpretation of a real London area; neighbourhood profiles, distances, activities, and rivals are predefined local content. Progress uses a separate `pokepet-afterglow-v1` browser-storage key, with an in-memory fallback when storage is unavailable. No backend, database, GPS, AI generation, or live matchmaking is connected. Practice battles do not award XP.

The homepage map uses original procedural 3D geometry projected onto a Canvas 2D surface by `map.js`: simple windowless buildings, roof details, tree canopies, roads, crossings, bridges, moving cars, and rippling water. It needs no WebGL, external map service, or additional dependency. Adventure markers remain native keyboard-accessible buttons. A matching Laburnum Street SVG map is retained as a fallback; companion and icon artwork is also inline SVG. The battle arena uses the shared bundled `arena.js` Three.js renderer with original procedural mooncat/corgi models; a static fallback keeps the controls usable if the renderer is absent. The renderer stays mounted throughout a match and is disposed on restart, close, or another dialog. The human owner and mooncat pet are distinct characters. Animations respect reduced-motion preferences. Dialogs use native keyboard/focus behavior.

Battles run locally against a computer-controlled opponent and do not award XP. This directory owns `battle-scene.js`, its bundled `arena.js`, and license notices. Battle and profile share the same smooth models and expression system. Profile renderers are disposed when the dialog closes, another dialog opens, or an upgrade recreates the profile. Reduced-motion mode keeps gestures brief and suppresses continuous motion.

To change the 3D renderer, run `npm install`, `npm run build`, `npm run lint`, and `npm run format:check` from this directory. The bundled experience itself needs no installation. The profile's rendering was visually checked in Safari; a renderer smoke check exercised all profile gestures and battle moves, finite transforms, and disposal during a pending motion.

Informed by all seven Pokepet Go Space pages read on 1 November 2026, with the latest owner/pet separation and tilted-map requirements taking precedence over historical drafts. The presentation is independent of the shared application’s backend integration.

Syntax checks from this directory: `node --check app.js`, `node --check map.js`, and `node --check community.js`.

The London map was checked in Safari at desktop size and a 390 × 844 responsive viewport. Mission selection, routes, pause, zoom, recentering, and the SVG fallback were exercised. Lint, formatting, and JavaScript syntax checks passed.
