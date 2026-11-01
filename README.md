# pokepets-go
A playful web game for pets and their people.

## Work in progress

This branch contains separate local prototypes: the single-player root demo described below, a Next.js web skeleton with a local-only multiplayer API in `web/`, an animated 2.5D visual proof in `web/avatar-lab/`, and a mission prototype in `web/mission-lab/`. These are not yet wired together. Atlas deployment, live photo generation, shared mission rewards, and a two-browser game flow remain unverified. See each directory's documentation for setup and limits.

## Run locally

Requires Node.js 22 or newer. No API keys, package installation or external services are needed.

```sh
npm start
```

Open [http://127.0.0.1:4173](http://127.0.0.1:4173). Use `PORT=4174 npm start` if the port is occupied. The preview binds only to localhost.

```sh
npm test
npm run check
```

## Play the demo

1. Open **Choose your companion** to name a pet and choose a dog, cat or rabbit preset.
2. Choose one of three adventures on the sample map or the buttons beneath it.
3. Select **Complete this adventure**. Tick the owner confirmation, then **Collect our memory**. Trying the demo may simulate completion; the app does not verify real-world activity.
4. Collect a journal memory and fixed points. Each mission awards once per local profile.
5. Spend five points to increase a fictional game stat. Reload to see the saved companion, balance, upgrades and memories.

The three missions offer outdoor exploration, at-home play and quiet company. Choose what suits your pet. Community progress is **12 simulated contributions plus this browser's completed missions**, not live participation.

## Built on 1 November 2026

Local hackathon implementation: interactive fictional map, preset pet identity, owner-confirmed missions, duplicate-safe rewards, point allocation, memory journal, simulated community goal and browser persistence. Native ES modules and Node built-ins keep the demo small and runnable without network services. Modules separate game rules, missions, storage, map rendering and an optional artwork boundary.

Codex helped turn the Space concept into a concise [core spec](docs/core-spec.md), write focused failing tests before the rules, implement the complete local journey and verify confirmation, rewards and reload behavior in Chrome.

**Not connected:** photo-to-avatar generation, Image 2.5/GPT Image, Decisions API, Astra, voice, external map providers, geolocation, live community or multiplayer. Battle and Three.js are not implemented. Preset artwork remains available without these integrations; future artwork failures must not undo earned progress.

Progress stays in localStorage on this browser and origin. It is not an account, shared database or tamper-resistant reward system. If saving fails, the app continues in memory and displays a warning. Incompatible or malformed saves are preserved rather than overwritten. Use one tab per local profile; cross-tab synchronization and save migration are outside this slice. Opening `localhost` instead of `127.0.0.1`, changing ports or using another browser creates a separate save.

## Team sources and credits

- [Pokepet Go Gameplay and Concept](https://chatgpt.com/space/page_6ae737e8939c819182db0903037dd8b5) and [Initial Idea Draft](https://chatgpt.com/space/page_dea405f342fc81918daab7e603d81404): team concept, adventure-first direction and optional battles. Preserve teammate attribution in the Space history.
- The initial repository README is preserved above. Application code, CSS and inline SVG map were authored for this local hackathon slice with Codex; no third-party template or map data was copied.
- Pet and activity symbols use native system emoji; no image or font files are redistributed. Artwork is preset, not generated from a pet photo.
- The broader Space concept illustrations were not copied into the application.

See [local verification and handoff](docs/handoff.md). This branch has not been deployed or submitted.
