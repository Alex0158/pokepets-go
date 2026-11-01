import { MongoClient } from "mongodb";
import { databaseConfig } from "../db/local-runtime.ts";
import { MongoRepository } from "../db/mongo-repository.ts";
import { BackboneService } from "../core/service.ts";
import { localRequest } from "../core/http.ts";
import { MemoriesService } from "./service.ts";
import { createMemoriesApi, memoryError } from "./http.ts";

// Use the host's local/Atlas database selection and shared request/session guard.
// A module pool follows the existing community adapter without changing its runtime.
const state = globalThis as typeof globalThis & {
  pokepetMemoriesApi?: Promise<ReturnType<typeof createMemoriesApi>>;
};
async function connect() {
  const { uri, name, kind } = databaseConfig();
  const client = new MongoClient(uri, {
    directConnection: kind === "local",
    maxPoolSize: 3,
    serverSelectionTimeoutMS: kind === "local" ? 1500 : 10000,
    connectTimeoutMS: kind === "local" ? 1500 : 10000,
    timeoutMS: kind === "local" ? 4000 : 15000,
    writeConcern: { w: "majority", journal: true },
    ...(kind === "atlas" ? { tls: true } : {}),
  });
  try {
    await client.connect();
    const db = client.db(name),
      memories = new MemoriesService(db);
    await memories.initialize();
    return createMemoriesApi(
      memories,
      new BackboneService(new MongoRepository(db)),
    );
  } catch (error) {
    await client.close();
    throw error;
  }
}
export async function handleMemoriesRequest(request: Request) {
  try {
    localRequest(request);
    state.pokepetMemoriesApi ??= connect().catch((error) => {
      state.pokepetMemoriesApi = undefined;
      throw error;
    });
    return await (
      await state.pokepetMemoriesApi
    )(request);
  } catch (error) {
    return memoryError(error);
  }
}
