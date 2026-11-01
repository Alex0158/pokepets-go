import type {
  ConfirmedMissionMemory,
  MemoryKind,
} from "../../shared/memories.ts";

const activities: Record<string, { title: string; kind: MemoryKind }> = {
  "sniff-safari": { title: "The moonlight loop", kind: "walk" },
  "living-room-play": { title: "A little chase, a lot of joy", kind: "play" },
  "quiet-company": { title: "The art of doing nothing", kind: "bonding" },
  "daily-feed": { title: "A happy mealtime", kind: "bonding" },
  "daily-play": { title: "Our daily playtime", kind: "play" },
  "reported-activity": { title: "A moment together", kind: "other" },
};

/** Stored inside the same atomic progression update as the reward receipt.
 * No transcript, audio or new point calculation is retained in the keepsake.
 */
export function completionMemory(
  progress: { _id: string; ownerId: string },
  commandId: string,
  missionId: string,
  awardedPoints: number,
  completedAt: Date,
): ConfirmedMissionMemory {
  return {
    ownerId: progress.ownerId,
    petId: progress._id,
    completionId: commandId,
    missionId,
    ...(activities[missionId] ?? {
      title: "A little adventure",
      kind: "other",
    }),
    completedAt: completedAt.toISOString(),
    rewardPoints: awardedPoints,
  };
}
