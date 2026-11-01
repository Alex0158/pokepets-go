import { createHash } from "node:crypto";
import {
  MongoServerError,
  type Collection,
  type Db,
  type Filter,
} from "mongodb";
import type { Pet, Player } from "../../shared/multiplayer.ts";
import {
  MEMORY_KINDS,
  type ConfirmedMissionMemory,
  type JournalInput,
  type MemoryCard,
  type MemoryKind,
  type MemoryPage,
} from "../../shared/memories.ts";
import { fail } from "../core/battle.ts";

type MemoryRecord = {
  _id: string;
  ownerId: string;
  ownerName: string;
  petId: string;
  petName: string;
  title: string;
  note: string;
  kind: MemoryKind;
  occurredAt: string;
  createdAt: string;
  source: "journal" | "mission";
  rewardPoints: number | null;
  shared: boolean;
  version: number;
  pawPlayerIds: string[];
  fingerprint: string;
};
const hash = (value: unknown) =>
  createHash("sha256").update(JSON.stringify(value)).digest("hex");
function text(value: unknown, max: number, optional = false): string {
  if (
    typeof value !== "string" ||
    value.trim().length > max ||
    (!optional && !value.trim())
  )
    fail("invalid_memory", 400);
  return value.trim();
}
function kind(value: unknown): MemoryKind {
  if (!MEMORY_KINDS.includes(value as MemoryKind))
    fail("invalid_memory_kind", 400);
  return value as MemoryKind;
}
function identifier(value: unknown): string {
  if (typeof value !== "string" || !/^[a-zA-Z0-9_-]{1,128}$/.test(value))
    fail("invalid_id", 400);
  return value;
}
const card = (record: MemoryRecord, viewerId: string): MemoryCard => ({
  id: record._id,
  ownerId: record.ownerId,
  ownerName: record.ownerName,
  petName: record.petName,
  title: record.title,
  note: record.note,
  kind: record.kind,
  occurredAt: record.occurredAt,
  createdAt: record.createdAt,
  source: record.source,
  rewardPoints: record.rewardPoints,
  shared: record.shared,
  version: record.version,
  pawCount: record.pawPlayerIds.length,
  pawed: record.pawPlayerIds.includes(viewerId),
  owned: record.ownerId === viewerId,
});

export class MemoriesService {
  readonly records: Collection<MemoryRecord>;
  readonly db: Db;
  readonly clock: () => Date;
  constructor(db: Db, clock = () => new Date()) {
    this.db = db;
    this.clock = clock;
    this.records = db.collection<MemoryRecord>("memories");
  }
  async initialize() {
    await this.records.createIndex({ ownerId: 1, createdAt: -1, _id: -1 });
    await this.records.createIndex({ shared: 1, createdAt: -1, _id: -1 });
  }
  private async pet(ownerId: string, petId?: string) {
    const pet = await this.db
      .collection<Pet>("pets")
      .findOne({ ownerId, ...(petId ? { _id: petId } : {}) });
    if (!pet) fail("pet_not_found", 404);
    return pet;
  }
  private async insert(record: MemoryRecord) {
    try {
      await this.records.insertOne(record);
    } catch (error) {
      if (!(error instanceof MongoServerError && error.code === 11000))
        throw error;
      const existing = await this.records.findOne({
        _id: record._id,
        ownerId: record.ownerId,
      });
      if (!existing || existing.fingerprint !== record.fingerprint)
        fail("command_conflict", 409);
      return card(existing, record.ownerId);
    }
    return card(record, record.ownerId);
  }
  async createJournal(
    actor: Pick<Player, "_id" | "displayName">,
    input: JournalInput,
  ) {
    if (
      typeof input.commandId !== "string" ||
      !/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(
        input.commandId,
      )
    )
      fail("invalid_command_id", 400);
    const content = {
      title: text(input.title, 80),
      note: text(input.note, 500, true),
      kind: kind(input.kind),
    };
    const pet = await this.pet(actor._id),
      now = this.clock().toISOString();
    return this.insert({
      _id: hash([actor._id, "journal", input.commandId]),
      ownerId: actor._id,
      ownerName: actor.displayName,
      petId: pet._id,
      petName: pet.name,
      ...content,
      occurredAt: now,
      createdAt: now,
      source: "journal",
      rewardPoints: null,
      shared: false,
      version: 0,
      pawPlayerIds: [],
      fingerprint: hash(content),
    });
  }
  /** Invoke only from a trusted server completion handler, after its reward commit.
   * Retry with the same immutable completion payload if memory storage fails.
   */
  async recordMissionCompletion(input: ConfirmedMissionMemory) {
    const ownerId = identifier(input.ownerId),
      petId = identifier(input.petId);
    const completionId = text(input.completionId, 200),
      missionId = text(input.missionId, 100);
    const title = text(input.title, 80),
      memoryKind = kind(input.kind);
    const completedAt = new Date(input.completedAt);
    if (
      !Number.isFinite(completedAt.getTime()) ||
      completedAt.getTime() > this.clock().getTime() + 60_000 ||
      !Number.isSafeInteger(input.rewardPoints) ||
      input.rewardPoints < 0
    )
      fail("invalid_completion", 400);
    const [owner, pet] = await Promise.all([
      this.db.collection<Player>("players").findOne({ _id: ownerId }),
      this.pet(ownerId, petId),
    ]);
    if (!owner) fail("player_not_found", 404);
    const content = {
      missionId,
      petId,
      title,
      kind: memoryKind,
      completedAt: completedAt.toISOString(),
      rewardPoints: input.rewardPoints,
    };
    return this.insert({
      _id: hash([ownerId, "mission", completionId]),
      ownerId,
      ownerName: owner.displayName,
      petId,
      petName: pet.name,
      title,
      note: "",
      kind: memoryKind,
      occurredAt: content.completedAt,
      createdAt: this.clock().toISOString(),
      source: "mission",
      rewardPoints: input.rewardPoints,
      shared: false,
      version: 0,
      pawPlayerIds: [],
      fingerprint: hash(content),
    });
  }
  async read(viewerId: string, memoryId: string) {
    const result = await this.records.findOne({
      _id: identifier(memoryId),
      $or: [{ ownerId: viewerId }, { shared: true }],
    });
    if (!result) fail("memory_not_found", 404);
    return card(result, viewerId);
  }
  async list(
    viewerId: string,
    scope: "mine" | "community",
    cursor: string | null,
    ownerId?: string | null,
  ): Promise<MemoryPage> {
    const filter: Filter<MemoryRecord> =
      scope === "mine"
        ? { ownerId: viewerId }
        : {
            shared: true,
            ...(ownerId ? { ownerId: identifier(ownerId) } : {}),
          };
    if (cursor) {
      if (cursor.length > 256) fail("invalid_cursor", 400);
      let parsed;
      try {
        parsed = JSON.parse(Buffer.from(cursor, "base64url").toString());
      } catch {
        fail("invalid_cursor", 400);
      }
      if (
        !Array.isArray(parsed) ||
        parsed.length !== 2 ||
        typeof parsed[0] !== "string" ||
        !/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/.test(parsed[0])
      )
        fail("invalid_cursor", 400);
      const id = identifier(parsed[1]);
      filter.$or = [
        { createdAt: { $lt: parsed[0] } },
        { createdAt: parsed[0], _id: { $lt: id } },
      ];
    }
    const records = await this.records
      .find(filter, { maxTimeMS: 2000 })
      .sort({ createdAt: -1, _id: -1 })
      .limit(25)
      .toArray();
    const hasMore = records.length > 24,
      items = records.slice(0, 24),
      last = items.at(-1);
    return {
      items: items.map((item) => card(item, viewerId)),
      nextCursor:
        hasMore && last
          ? Buffer.from(JSON.stringify([last.createdAt, last._id])).toString(
              "base64url",
            )
          : null,
    };
  }
  async setSharing(
    ownerId: string,
    memoryId: string,
    shared: boolean,
    expectedVersion: number,
  ) {
    if (
      typeof shared !== "boolean" ||
      !Number.isSafeInteger(expectedVersion) ||
      expectedVersion < 0
    )
      fail("invalid_sharing", 400);
    const id = identifier(memoryId);
    const result = await this.records.findOneAndUpdate(
      { _id: id, ownerId, version: expectedVersion },
      { $set: { shared }, $inc: { version: 1 } },
      { returnDocument: "after" },
    );
    if (result) return card(result, ownerId);
    const current = await this.records.findOne({ _id: id, ownerId });
    if (!current) fail("memory_not_found", 404);
    // An acknowledgement may have been lost. A later privacy change must never be undone by retry.
    if (current.version === expectedVersion + 1 && current.shared === shared)
      return card(current, ownerId);
    return fail("stale_memory", 409);
  }
  async setPaw(viewerId: string, memoryId: string, active: boolean) {
    if (typeof active !== "boolean") fail("invalid_reaction", 400);
    const id = identifier(memoryId);
    // Explicit set/unset is retry safe. A bounded array keeps the demo's one-document update atomic.
    const result = await this.records.findOneAndUpdate(
      {
        _id: id,
        shared: true,
        ownerId: { $ne: viewerId },
        ...(active
          ? {
              $or: [
                { pawPlayerIds: viewerId },
                { "pawPlayerIds.999": { $exists: false } },
              ],
            }
          : {}),
      },
      active
        ? { $addToSet: { pawPlayerIds: viewerId } }
        : { $pull: { pawPlayerIds: viewerId } },
      { returnDocument: "after" },
    );
    if (!result) fail("reaction_unavailable", 409);
    return card(result, viewerId);
  }
}
