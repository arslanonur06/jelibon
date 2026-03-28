/**
 * Central list of blog posts. To add or edit content:
 * - Add or edit a file under `src/data/blog/posts/` (one file per slug).
 * - Import it here and append to `blogEntries`.
 */
import type { BlogPostEntry } from "./types";
import { aiInfluencerCasinoMarketing } from "./posts/ai-influencer-casino-marketing";
import { dmcaBrandSafetyOps } from "./posts/dmca-brand-safety-ops";
import { igamingGrowthStack2026 } from "./posts/igaming-growth-stack-2026";
import { pornhubAdsIgamingOperators } from "./posts/pornhub-ads-igaming-operators";
import { seoBlogNetworkIgamingTurkey } from "./posts/seo-blog-network-igaming-turkey";
import { telegramAdsCreativeTesting } from "./posts/telegram-ads-creative-testing";

export const blogEntries: BlogPostEntry[] = [
  igamingGrowthStack2026,
  telegramAdsCreativeTesting,
  dmcaBrandSafetyOps,
  seoBlogNetworkIgamingTurkey,
  aiInfluencerCasinoMarketing,
  pornhubAdsIgamingOperators,
];
