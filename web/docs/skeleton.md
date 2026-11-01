# Application skeleton

This Next.js application is a starting point. It does not implement database access, player sessions, multiplayer, the map, or image generation.

The browser owns presentation. Server route handlers will validate commands and invoke game rules; a database adapter will persist shared state. Optional rendering and AI adapters must not decide match outcomes.

The first implementation checkpoint is two sessions sharing one persisted match and observing the same validated move. Agree the player, pet, match and event contracts before implementing that slice.
