/**
 * Batch3 — spor dalı rehberleri (her branş için ayrı makale).
 */
import type { BlogPostEntry } from "../../types";

import { sportsTeamBatch } from "./sports-team-batch";
import { sportsCombatRacingBatch } from "./sports-combat-racing-batch";
import { sportsPrecisionBatch } from "./sports-precision-batch";
import { sportsOtherBatch } from "./sports-other-batch";

export const sportsByDisciplineBatch: BlogPostEntry[] = [
  ...sportsTeamBatch,
  ...sportsCombatRacingBatch,
  ...sportsPrecisionBatch,
  ...sportsOtherBatch,
];
