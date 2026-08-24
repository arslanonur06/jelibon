/**
 * Bulk service & education articles — combined registry.
 * Individual batch files are authored per pillar.
 */
import type { BlogPostEntry } from "../../types";

import { adultDisplayBatch } from "./adult-display-batch";
import { creativeProductionBatch } from "./creative-production-batch";
import { telegramServicesBatch } from "./telegram-services-batch";
import { seoServicesBatch } from "./seo-services-batch";
import { dmcaBrandBatch } from "./dmca-brand-batch";
import { aiSystemsBatch } from "./ai-systems-batch";
import { customSoftwareBatch } from "./custom-software-batch";
import { sportsBettingExtBatch } from "./sports-betting-ext-batch";
import { casinoBonusExtBatch } from "./casino-bonus-ext-batch";
import { geoCroAffiliateBatch } from "./geo-cro-affiliate-batch";

export const serviceContentBatch: BlogPostEntry[] = [
  ...adultDisplayBatch,
  ...creativeProductionBatch,
  ...telegramServicesBatch,
  ...seoServicesBatch,
  ...dmcaBrandBatch,
  ...aiSystemsBatch,
  ...customSoftwareBatch,
  ...sportsBettingExtBatch,
  ...casinoBonusExtBatch,
  ...geoCroAffiliateBatch,
];
