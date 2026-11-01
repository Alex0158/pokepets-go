import { DomainError, fail } from "../core/battle.ts";
import { SESSION_COOKIE, localRequest } from "../core/http.ts";
import type { BackboneService } from "../core/service.ts";
import type { JournalInput } from "../../shared/memories.ts";
import type { MemoriesService } from "./service.ts";

const json = (value: unknown, status = 200) =>
  Response.json(value, {
    status,
    headers: { "Cache-Control": "private, no-store", Vary: "Cookie" },
  });
export function memoryError(error: unknown) {
  return error instanceof DomainError
    ? json({ error: error.code }, error.status)
    : json({ error: "memories_unavailable" }, 503);
}
async function body(request: Request, keys: string[]) {
  const reader = request.body?.getReader();
  if (!reader) fail("invalid_json", 400);
  const chunks: Uint8Array[] = [];
  let size = 0;
  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    size += value.byteLength;
    if (size > 8192) {
      await reader.cancel();
      fail("body_too_large", 413);
    }
    chunks.push(value);
  }
  let input;
  try {
    input = JSON.parse(Buffer.concat(chunks).toString("utf8"));
  } catch {
    fail("invalid_json", 400);
  }
  if (
    !input ||
    typeof input !== "object" ||
    Array.isArray(input) ||
    Object.keys(input).length !== keys.length ||
    keys.some((key) => !Object.hasOwn(input, key))
  )
    fail("invalid_fields", 400);
  return input;
}
/** Factory lets the app owner supply the existing session service and request guard. */
export function createMemoriesApi(
  service: MemoriesService,
  sessions: Pick<BackboneService, "actor">,
  guard = localRequest,
) {
  return async (request: Request): Promise<Response> => {
    try {
      guard(request);
      const cookies = (request.headers.get("cookie") ?? "")
        .split(";")
        .map((c) => c.trim())
        .filter((c) => c.startsWith(`${SESSION_COOKIE}=`));
      if (cookies.length !== 1) fail("unauthenticated", 401);
      const actor = await sessions.actor(
        cookies[0].slice(SESSION_COOKIE.length + 1),
      );
      const url = new URL(request.url),
        path = url.pathname;
      if (path === "/api/memories") {
        if (request.method === "GET")
          return json(
            await service.list(
              actor._id,
              "mine",
              url.searchParams.get("cursor"),
            ),
          );
        if (request.method === "POST")
          return json(
            await service.createJournal(
              actor,
              (await body(request, [
                "commandId",
                "title",
                "note",
                "kind",
              ])) as JournalInput,
            ),
          );
      }
      if (path === "/api/community/memories" && request.method === "GET")
        return json(
          await service.list(
            actor._id,
            "community",
            url.searchParams.get("cursor"),
            url.searchParams.get("player"),
          ),
        );
      const own = /^\/api\/memories\/([a-f0-9]{64})(?:\/(sharing))?$/.exec(
        path,
      );
      if (own) {
        if (!own[2] && request.method === "GET")
          return json(await service.read(actor._id, own[1]));
        if (own[2] === "sharing" && request.method === "PATCH") {
          const input = await body(request, ["shared", "expectedVersion"]);
          return json(
            await service.setSharing(
              actor._id,
              own[1],
              input.shared,
              input.expectedVersion,
            ),
          );
        }
      }
      const paw = /^\/api\/community\/memories\/([a-f0-9]{64})\/paw$/.exec(
        path,
      );
      if (paw && request.method === "PUT")
        return json(
          await service.setPaw(
            actor._id,
            paw[1],
            (await body(request, ["active"])).active,
          ),
        );
      return json({ error: "route_not_found" }, 404);
    } catch (error) {
      return memoryError(error);
    }
  };
}
