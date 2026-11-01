export const MEMORY_KINDS = ["walk", "play", "bonding", "other"] as const;
export type MemoryKind = (typeof MEMORY_KINDS)[number];

export type MemoryCard = {
  id: string;
  ownerId: string;
  ownerName: string;
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
  pawCount: number;
  pawed: boolean;
  owned: boolean;
};

export type MemoryPage = { items: MemoryCard[]; nextCursor: string | null };
export type JournalInput = {
  commandId: string;
  title: string;
  note: string;
  kind: MemoryKind;
};

/** Server-only handoff from an already committed mission completion.
 * completionId identifies an occurrence, including the date for repeatable missions.
 * This module records a keepsake; it never awards or recalculates points.
 */
export type ConfirmedMissionMemory = {
  ownerId: string;
  completionId: string;
  missionId: string;
  petId: string;
  title: string;
  kind: MemoryKind;
  completedAt: string;
  rewardPoints: number;
};
