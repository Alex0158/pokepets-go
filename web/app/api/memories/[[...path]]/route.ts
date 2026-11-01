import { handleMemoriesRequest } from "../../../../src/server/memories/local-runtime.ts";
export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const GET = handleMemoriesRequest;
export const POST = handleMemoriesRequest;
export const PATCH = handleMemoriesRequest;
