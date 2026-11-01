import { MongoClient } from "mongodb";
import { localDatabaseConfig } from "../db/local-runtime.ts";
import { MongoRepository } from "../db/mongo-repository.ts";
import { BackboneService } from "../core/service.ts";
import { localRequest } from "../core/http.ts";
import { MemoriesService } from "./service.ts";
import { createMemoriesApi, memoryError } from "./http.ts";

// Thin skeleton adapter only. The host app can inject its existing Db/session
// service into createMemoriesApi; no new session or Atlas configuration is needed.
const state = globalThis as typeof globalThis & {
  pokepetMemoriesApi?: Promise<ReturnType<typeof createMemoriesApi>>;
};
async function connect() {
  const { uri, name } = localDatabaseConfig();
  const client = new MongoClient(uri, {
    directConnection: true,
    maxPoolSize: 3,
    serverSelectionTimeoutMS: 1500,
    connectTimeoutMS: 1500,
    timeoutMS: 4000,
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
