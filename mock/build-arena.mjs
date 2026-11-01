import { build } from "esbuild";
import { fileURLToPath } from "node:url";

await build({
  entryPoints: ["battle-scene.js"],
  alias: { three: fileURLToPath(import.meta.resolve("three")) },
  bundle: true,
  format: "iife",
  target: "es2020",
  minify: true,
  legalComments: "inline",
  outfile: "arena.js",
});
