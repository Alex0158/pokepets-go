import test from "node:test";
import assert from "node:assert/strict";
import { randomUUID } from "node:crypto";
import { MongoClient } from "mongodb";
import { MongoRepository } from "../src/server/db/mongo-repository.ts";
import { BackboneService } from "../src/server/core/service.ts";
import { createLocalApi } from "../src/server/core/http.ts";
import { ProgressionService } from "../src/server/progression/service.ts";
import { VoiceService } from "../src/server/voice/service.ts";
import { MemoriesService } from "../src/server/memories/service.ts";
import { createMemoriesApi } from "../src/server/memories/http.ts";
import type { ConfirmedMissionMemory } from "../src/shared/memories.ts";

const uri = process.env.POKEPET_TEST_MONGODB_URI;
test(
  "committed activities become memories after reload; failed delivery never replays rewards",
  { skip: !uri },
  async (t) => {
    assert.match(uri!, /^mongodb:\/\/127\.0\.0\.1:\d+$/);
    const client = new MongoClient(uri!);
    await client.connect();
    t.after(() => client.close());
    const db = client.db(`pokepet_local_memory_flow_${Date.now()}`),
      repo = new MongoRepository(db);
    await repo.initialize();
    let now = new Date(Date.now() - 2 * 86400000);
    const backbone = new BackboneService(repo, () => now),
      game = createLocalApi(backbone);
    const owner = await backbone.bootstrap(
      undefined,
      "Memory integration owner",
    );
    const friend = await backbone.bootstrap(
      undefined,
      "Memory integration friend",
    );
    const progress = new ProgressionService(db, backbone, () => now);
    const memories = new MemoriesService(db);
    await memories.initialize();
    const api = createMemoriesApi(memories, backbone);
    const req = (token: string, path: string, input?: unknown) =>
      new Request(`http://127.0.0.1:3038${path}`, {
        method: input === undefined ? "GET" : "POST",
        headers: {
          origin: "http://127.0.0.1:3038",
          "content-type": "application/json",
          cookie: `pokepet_session=${token}`,
        },
        ...(input === undefined ? {} : { body: JSON.stringify(input) }),
      });
    const command = {
      commandId: randomUUID(),
      missionId: "sniff-safari",
      confirmed: true,
    };
    assert.equal(
      (
        await game(
          req(owner.token!, "/api/progression/mission", {
            ...command,
            confirmed: false,
          }),
        )
      ).status,
      400,
    );
    assert.equal(
      (await memories.list(owner.player._id, "mine", null)).items.length,
      0,
    );
    const [first, retry] = await Promise.all([
      game(req(owner.token!, "/api/progression/mission", command)),
      game(req(owner.token!, "/api/progression/mission", command)),
    ]);
    assert.equal(first.status, 200);
    assert.equal(retry.status, 200);
    assert.equal((await first.json()).snapshot.points, 20);
    assert.equal(
      await db.collection("memories").countDocuments(),
      0,
      "reward commit does not depend on memory delivery",
    );

    class InterruptedDelivery extends MemoriesService {
      override async recordMissionCompletion(
        _input: ConfirmedMissionMemory,
      ): Promise<never> {
        throw Error("Simulated memory delivery outage");
      }
    }
    assert.equal(
      (
        await createMemoriesApi(
          new InterruptedDelivery(db),
          backbone,
        )(req(owner.token!, "/api/memories"))
      ).status,
      503,
    );
    assert.equal((await progress.get(owner.token!)).points, 20);
    // A new client models restart before the owner next opens Memories.
    const fresh = new MongoClient(uri!);
    await fresh.connect();
    t.after(() => fresh.close());
    const recovered = new MemoriesService(fresh.db(db.databaseName));
    const [one, again] = await Promise.all([
      recovered.list(owner.player._id, "mine", null),
      memories.list(owner.player._id, "mine", null),
    ]);
    assert.equal(one.items.length, 1);
    assert.equal(again.items[0].id, one.items[0].id);
    assert.equal(one.items[0].rewardPoints, 20);
    assert.equal(one.items[0].occurredAt, now.toISOString());
    assert.equal(one.items[0].shared, false);
    assert.equal(
      (await api(req(friend.token!, `/api/memories/${one.items[0].id}`)))
        .status,
      404,
    );
    await memories.setSharing(owner.player._id, one.items[0].id, true, 0);
    assert.equal(
      (await recovered.list(owner.player._id, "mine", null)).items[0].shared,
      true,
      "sync does not undo a sharing choice",
    );
    assert.equal(
      (
        await memories.list(
          friend.player._id,
          "community",
          null,
          owner.player._id,
        )
      ).items.length,
      1,
    );
    await progress.command(owner.token!, randomUUID(), {
      kind: "upgrade",
      stat: "attack",
    });
    assert.equal(
      (await memories.list(owner.player._id, "mine", null)).items.length,
      1,
      "upgrades do not create memories",
    );
    await progress.command(owner.token!, randomUUID(), {
      kind: "mission",
      missionId: "daily-feed",
      confirmed: true,
    });
    now = new Date(now.getTime() + 86400000);
    await progress.command(owner.token!, randomUUID(), {
      kind: "mission",
      missionId: "daily-feed",
      confirmed: true,
    });

    let providerCalls = 0;
    const voice = new VoiceService(
      db,
      backbone,
      async () => {
        providerCalls++;
        return {
          transcript: "Private synthetic recording",
          points: 12,
          reason: "Playtime",
        };
      },
      async () => {
        providerCalls++;
        return {
          transcript: "Private typed description",
          points: 8,
          reason: "Care time",
        };
      },
    );
    const typed = {
      commandId: randomUUID(),
      text: "Private typed description",
    };
    await voice.reportText(owner.token!, typed);
    await voice.reportText(owner.token!, typed);
    const audio = {
      commandId: randomUUID(),
      audioBase64: Buffer.from("synthetic test audio").toString("base64"),
      mimeType: "audio/webm",
    };
    await voice.report(owner.token!, audio);
    await voice.report(owner.token!, audio);
    const listed = await api(req(owner.token!, "/api/memories"));
    assert.equal(listed.status, 200);
    const cards = (await listed.json()).items;
    assert.equal(cards.length, 5);
    assert.equal(providerCalls, 2);
    assert.equal((await progress.get(owner.token!)).points, 65);
    assert.equal(
      cards.filter(
        (item: { title: string }) => item.title === "A happy mealtime",
      ).length,
      2,
    );
    assert.equal(JSON.stringify(cards).includes("Private typed"), false);
    assert.equal(JSON.stringify(cards).includes("Private synthetic"), false);
    assert.equal(
      (await memories.list(friend.player._id, "community", null)).items.length,
      1,
    );
    console.log(
      `PASS: manual + daily + voice/text completions, retry/restart/outage recovery, privacy and unchanged rewards. Retained ${db.databaseName}. Provider was stubbed; no paid calls.`,
    );
  },
);
