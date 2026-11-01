# pokepets-go
A playful web game for pets and their people.

## Current game demo

The current integrated Next.js game is in `web/`. A guest creates a profile, sees other registered players on a fictional map, completes owner-reported activities for points, upgrades their pet and chooses a Sneak attack or a face-to-face challenge. Auto mode selects a move through OpenAI Decisions when available, with a labelled fallback. Owner and pet image generation use separate assets; a preset / Skip path is available.

### Two core journeys

1. **Meet and battle:** Create separate owner and pet avatars, explore the fictional map, select another player, and choose a Sneak attack against an automatic opponent or a face-to-face challenge with another player. Auto mode can select legal actions through the Decisions API; the server applies the battle rules.
2. **Care and grow:** Describe a pet interaction by voice or text, or use a manual activity; earn game points and spend them on pet attributes. Saved Attack, Defence and Health affect the next battle. Activities are self-reported and are not verified pet care.

### OpenAI technology and inspiration

- **Voice:** OpenAI transcription and AI scoring turn a recorded or typed activity into points. A separate Realtime voice prototype has been tested locally; live Realtime is not enabled on the hosted demo.
- **Decisions API:** Auto mode asks `gpt-6-luna` to choose an available battle move, with a labelled fallback if Decisions is unavailable.
- **Image 2.5:** Separate owner and pet images can be transformed into animated sprite assets. Synthetic image generation was verified in an isolated hosted preview; production personal-photo generation is not yet verified.
- **Codex Pets concept:** Inspired our animated sprite-sheet approach for pet characters; the game uses its own assets and is not a Codex Pets package.
- **Codex:** Used to build and test the modular game, including the shared MongoDB battle flow and AI-assisted prototypes.

The current local build has been exercised with two browser sessions and an isolated MongoDB replica set. Live OpenAI voice, Decisions and synthetic-image tests have passed locally; the game does not verify real-world care. Atlas app service writes and transactions have also passed in a separate test database. The current [hosted demo](https://pokepets-go.vercel.app/) uses MongoDB Atlas. A labelled guest session and one manual task survived reload in production. Synthetic owner and pet image generation and AI-scored text activity passed separately in isolated hosted previews; production personal-photo generation, browser microphone and multiplayer remain to be verified. Avatar assets expire from access after five minutes; generation has a shared two-attempt limit. A shared daily provider-call cap bounds AI usage.

### Run the integrated game locally

Requires Node.js with TypeScript support and an isolated MongoDB replica set; see [the integration handoff](web/docs/map-gameplay-integration.md) for the tested setup. From `web/`:

```sh
npm ci
POKEPET_RUNTIME_MODE=local POKEPET_DATABASE_MODE=local POKEPET_LOCAL_MONGODB_URI=mongodb://127.0.0.1:27030 POKEPET_LOCAL_DATABASE=pokepet_local_demo npm run dev -- --hostname 127.0.0.1
```

Open `http://127.0.0.1:3000`. Optional AI calls require a server-side `OPENAI_API_KEY`; never commit credentials or photos. See [hosted readiness](web/docs/hosted-runtime-boundary.md) for the remaining deployment boundaries.

### Codex and credits

Codex helped develop and test the modular game, integrate the shared MongoDB battle flow, and build AI-assisted avatar and voice prototypes. The map illustration and portions of its wording adapt the teammate's original Afterglow concept preserved in `mock/` on the repository's `main` branch. Team-member names and contact details should be added to the submission by the team.

## Earlier standalone prototype

The following section documents the earlier root-level solo prototype, not the integrated `web/` game. Its feature and storage statements apply only to that prototype.

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

See [local verification and handoff](docs/handoff.md). This local work has not been pushed, deployed or submitted.
