/**
 * Second wave: 60 additional iGaming articles (batch2).
 */
import type { BlogPostEntry } from "../../types";

import { liveCasinoBatch } from "./live-casino-batch";
import { slotGamesBatch } from "./slot-games-batch";
import { paymentBankingBatch } from "./payment-banking-batch";
import { crmRetentionBatch } from "./crm-retention-batch";
import { affiliatePartnersBatch } from "./affiliate-partners-batch";
import { mobileCasinoBatch } from "./mobile-casino-batch";
import { regulationComplianceBatch } from "./regulation-compliance-batch";
import { casinoGamesEduBatch } from "./casino-games-edu-batch";
import { marketingChannelsBatch } from "./marketing-channels-batch";
import { operatorTechFraudBatch } from "./operator-tech-fraud-batch";

export const serviceContentBatch2: BlogPostEntry[] = [
  ...liveCasinoBatch,
  ...slotGamesBatch,
  ...paymentBankingBatch,
  ...crmRetentionBatch,
  ...affiliatePartnersBatch,
  ...mobileCasinoBatch,
  ...regulationComplianceBatch,
  ...casinoGamesEduBatch,
  ...marketingChannelsBatch,
  ...operatorTechFraudBatch,
];
