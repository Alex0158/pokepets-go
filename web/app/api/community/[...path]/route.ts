import { handleCommunityRequest } from '../../../../src/server/community/runtime.ts';
export const runtime='nodejs';
export const dynamic='force-dynamic';
export const GET=handleCommunityRequest;
export const POST=handleCommunityRequest;
