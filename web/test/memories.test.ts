import test from "node:test";
import assert from "node:assert/strict";
import { randomUUID } from "node:crypto";
import { MongoClient } from "mongodb";
import { MongoRepository } from "../src/server/db/mongo-repository.ts";
import { BackboneService } from "../src/server/core/service.ts";
import { MemoriesService } from "../src/server/memories/service.ts";
import { createMemoriesApi } from "../src/server/memories/http.ts";

const uri = process.env.POKEPET_TEST_MONGODB_URI;
test(
  "memories: real persistence, private/public boundaries, retry-safe saves and reactions",
  { skip: !uri },
  async (t) => {
    assert.match(uri!, /^mongodb:\/\/127\.0\.0\.1:\d+$/);
    const database = `pokepet_local_memories_test_${Date.now()}`;
    const client = new MongoClient(uri!, { serverSelectionTimeoutMS: 2000 });
    await client.connect();
    t.after(() => client.close());
    const db = client.db(database),
      repository = new MongoRepository(db);
    await repository.initialize();
    const sessions = new BackboneService(repository),
      service = new MemoriesService(db);
    await service.initialize();
    const owner = await sessions.bootstrap(undefined, "Journal owner");
    const friend = await sessions.bootstrap(undefined, "Community friend");
    const api = createMemoriesApi(service, sessions);
    async function call(
      token: string | undefined,
      method: string,
      path: string,
      input?: unknown,
      origin = "http://127.0.0.1:3037",
    ) {
      const response = await api(
        new Request(`http://127.0.0.1:3037${path}`, {
          method,
          headers: {
            origin,
            "content-type": "application/json",
            ...(token ? { cookie: `pokepet_session=${token}` } : {}),
          },
          ...(input === undefined ? {} : { body: JSON.stringify(input) }),
        }),
      );
      assert.match(response.headers.get("cache-control")!, /no-store/);
      return { status: response.status, value: await response.json() };
    }
    const input = {
      commandId: randomUUID(),
      title: "A very good walk",
      note: "Three puddles, four happy paws.",
      kind: "walk",
    };
    const [saved, retried] = await Promise.all([
      call(owner.token, "POST", "/api/memories", input),
      call(owner.token, "POST", "/api/memories", input),
    ]);
    assert.equal(saved.status, 200);
    assert.deepEqual(saved.value, retried.value);
    const id = saved.value.id;
    assert.equal(saved.value.shared, false);
    assert.equal(saved.value.rewardPoints, null);
    assert.equal("pawPlayerIds" in saved.value, false);
    assert.equal("fingerprint" in saved.value, false);
    assert.equal((await call(undefined, "GET", "/api/memories")).status, 401);
    assert.equal(
      (await call(friend.token, "GET", `/api/memories/${id}`)).status,
      404,
    );
    assert.equal(
      (await call(friend.token, "GET", "/api/community/memories")).value.items
        .length,
      0,
    );
    assert.equal(
      (
        await call(owner.token, "POST", "/api/memories", {
          ...input,
          title: "Changed",
        })
      ).status,
      409,
    );
    assert.equal(
      (
        await call(owner.token, "POST", "/api/memories", {
          ...input,
          ownerId: friend.player._id,
        })
      ).status,
      400,
    );
    assert.equal(
      (
        await call(owner.token, "POST", "/api/memories", {
          ...input,
          rewardPoints: 999,
          source: "mission",
        })
      ).status,
      400,
    );
    assert.equal(
      (
        await call(
          owner.token,
          "POST",
          "/api/memories",
          input,
          "https://outside.example",
        )
      ).status,
      403,
    );
    assert.equal(
      (
        await call(owner.token, "POST", "/api/memories", {
          ...input,
          note: "x".repeat(9000),
        })
      ).status,
      413,
    );
    assert.equal(
      (
        await call(friend.token, "PATCH", `/api/memories/${id}/sharing`, {
          shared: true,
          expectedVersion: 0,
        })
      ).status,
      404,
    );
    const share = { shared: true, expectedVersion: 0 };
    assert.equal(
      (await call(owner.token, "PATCH", `/api/memories/${id}/sharing`, share))
        .status,
      200,
    );
    assert.equal(
      (await call(owner.token, "PATCH", `/api/memories/${id}/sharing`, share))
        .value.version,
      1,
    );
    const feed = await call(
      friend.token,
      "GET",
      `/api/community/memories?player=${owner.player._id}`,
    );
    assert.equal(feed.value.items.length, 1);
    assert.equal(feed.value.items[0].owned, false);
    assert.equal(
      (
        await call(
          friend.token,
          "GET",
          `/api/community/memories?player=${friend.player._id}`,
        )
      ).value.items.length,
      0,
    );
    const paws = await Promise.all(
      [0, 1].map(() =>
        call(friend.token, "PUT", `/api/community/memories/${id}/paw`, {
          active: true,
        }),
      ),
    );
    assert.equal(paws[0].value.pawCount, 1);
    assert.equal(paws[1].value.pawCount, 1);
    assert.equal(
      (
        await call(owner.token, "PUT", `/api/community/memories/${id}/paw`, {
          active: true,
        })
      ).status,
      409,
    );
    assert.equal(
      (
        await call(friend.token, "PUT", `/api/community/memories/${id}/paw`, {
          active: false,
        })
      ).value.pawCount,
      0,
    );
    assert.equal(
      (
        await call(owner.token, "PATCH", `/api/memories/${id}/sharing`, {
          shared: false,
          expectedVersion: 1,
        })
      ).status,
      200,
    );
    assert.equal(
      (await call(owner.token, "PATCH", `/api/memories/${id}/sharing`, share))
        .status,
      409,
      "late share retry cannot undo privacy",
    );
    assert.equal(
      (await call(friend.token, "GET", `/api/memories/${id}`)).status,
      404,
    );
    assert.equal(
      (await call(friend.token, "GET", "/api/community/memories")).value.items
        .length,
      0,
    );
    assert.equal(
      (
        await call(friend.token, "PUT", `/api/community/memories/${id}/paw`, {
          active: true,
        })
      ).status,
      409,
    );

    const completion = {
      ownerId: owner.player._id,
      petId: owner.pet._id,
      completionId: "daily-play:2026-11-01",
      missionId: "daily-play",
      title: "Play time together",
      kind: "play" as const,
      completedAt: new Date().toISOString(),
      rewardPoints: 15,
    };
    const [mission, duplicate] = await Promise.all([
      service.recordMissionCompletion(completion),
      service.recordMissionCompletion(completion),
    ]);
    assert.equal(mission.id, duplicate.id);
    assert.equal(mission.source, "mission");
    assert.equal(mission.rewardPoints, 15);
    assert.equal(mission.shared, false);
    assert.equal(
      (await db.collection("pets").findOne({ _id: owner.pet._id } as never))!
        .baseStats.attack,
      10,
      "memories cannot award or change stats",
    );
    await assert.rejects(
      service.recordMissionCompletion({ ...completion, rewardPoints: 999 }),
    );
    await assert.rejects(
      service.recordMissionCompletion({
        ...completion,
        ownerId: friend.player._id,
      }),
    );
    // Enough records to verify stable pagination without leaking private entries into a feed.
    for (let i = 0; i < 24; i++)
      await service.createJournal(owner.player, {
        ...input,
        kind: "walk",
        commandId: randomUUID(),
        title: `Memory ${i}`,
      });
    const first = await service.list(owner.player._id, "mine", null),
      second = await service.list(owner.player._id, "mine", first.nextCursor);
    assert.equal(first.items.length, 24);
    assert.equal(second.items.length, 2);
    assert.equal(
      new Set([...first.items, ...second.items].map((item) => item.id)).size,
      26,
    );
    const freshClient = new MongoClient(uri!);
    await freshClient.connect();
    t.after(() => freshClient.close());
    assert.equal(
      (
        await new MemoriesService(freshClient.db(database)).read(
          owner.player._id,
          id,
        )
      ).note,
      input.note,
    );
    await client.close();
    assert.equal((await call(owner.token, "GET", "/api/memories")).status, 503);
    console.log(
      `PASS: isolated MongoDB data retained in ${database}; Atlas was not used.`,
    );
  },
);
