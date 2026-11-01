# Afterglow — Pokepet Go concept 02

A responsive, interactive nighttime exploration concept in midnight blue, lavender, and lime. Open `index.html` directly, or use the workspace preview server. No build step, dependencies, fonts, or network services are required.

## Try the experience

- Select a glowing map marker, or choose an adventure below the map.
- Start a mission, confirm or skip it, then revisit its memory. Completion awards XP once per mission.
- Open **My pet** to spend 40 XP on a fictional stat upgrade.
- Open **Memories** to see completed adventures, including after reload.
- Open **Battle** for a cinematic, Pokémon-inspired encounter: opposing name/type/level/HP panels, a 3D arena, narrated turns, and a four-move console. Choose Pounce, Star spark (3 uses), Guard, or Moon mend (1 use). Inputs lock while player and rival animations resolve in sequence. Nova alternates tackle and guard deterministically. Guard halves the next incoming attack for either side and persists until that attack lands; a match ends in victory, defeat, or a draw after 20 individual moves (both players count). Replay and leaving the arena preserve adventure progress.
- Open the owner avatar or the companion card’s arrow to name the owner and pet separately. An owner photo can be previewed locally; it never uploads or generates an avatar.
- Toggle routes, zoom/recenter the map, or filter missions by indoor/outdoor activity.

## Scope

This is a UI mockup, not the multiplayer implementation. The world, nearby players, community progress, and rival are clearly labelled fixtures. Progress uses a separate `pokepet-afterglow-v1` browser-storage key, with an in-memory fallback when storage is unavailable. No backend, database, GPS, AI generation, or live matchmaking is connected. Battle previews do not award XP.

Map, companion, and icon artwork is original inline SVG. The battle arena uses the shared bundled `arena.js` Three.js renderer with original procedural mooncat/corgi models; a static fallback keeps the controls usable if the renderer is absent. The renderer stays mounted throughout a match and is disposed on restart, close, or another dialog. The human owner and mooncat pet are distinct characters. Animations respect reduced-motion preferences. Dialogs use native keyboard/focus behavior.

The battle is a local simulation, not shared multiplayer. Star spark and Moon mend are presentation proposals beyond the documented attack/defend core; no match awards XP. The root workspace owns the shared renderer source/build and license notices.

Informed by all seven Pokepet Go Space pages read on 1 November 2026, with the latest owner/pet separation and tilted-map requirements taking precedence over historical drafts. The visual treatment is a proposal; the current production architecture remains undecided.

Syntax check: `node --check 02-afterglow/app.js` from the workspace root.
