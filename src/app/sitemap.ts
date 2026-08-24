import type { MetadataRoute } from "next";
import { blogEntries } from "@/data/blog/entries";
import { getSiteUrl } from "@/constants";
import { bonusBrandGuides } from "@/data/bonus-guides";
import {
  ALL_GEO_MARKET_IDS,
  GEO_MARKET_CONFIGS,
  getAllGeoBrandRoutes,
} from "@/data/geo/markets";
import { sigmaExhibitors } from "@/data/geo/brands/sigma";

const MS_PER_DAY = 86_400_000;

function postPriorityAndFrequency(entryDate: Date, now: Date) {
  const ageDays = (now.getTime() - entryDate.getTime()) / MS_PER_DAY;
  if (ageDays <= 45) {
    return { priority: 0.88, changeFrequency: "weekly" as const };
  }
  if (ageDays <= 180) {
    return { priority: 0.8, changeFrequency: "monthly" as const };
  }
  return { priority: 0.72, changeFrequency: "monthly" as const };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const now = new Date();
  const latestPost = blogEntries.reduce((latest, e) => {
    const t = new Date(e.date).getTime();
    return t > latest ? t : latest;
  }, 0);
  const homeLastMod = latestPost > 0 ? new Date(latestPost) : now;

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: base,
      lastModified: homeLastMod,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${base}/blog`,
      lastModified: homeLastMod,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${base}/guvenilir-siteler`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.93,
    },
    {
      url: `${base}/rehber/spor-bahisleri`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${base}/rehber/hizmetler`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.92,
    },
    {
      url: `${base}/rehber/igaming`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.91,
    },
  ];

  const blogRoutes: MetadataRoute.Sitemap = blogEntries.map((entry) => {
    const entryDate = new Date(entry.date);
    const { priority, changeFrequency } = postPriorityAndFrequency(
      entryDate,
      now,
    );
    return {
      url: `${base}/blog/${entry.slug}`,
      lastModified: entryDate,
      changeFrequency,
      priority,
    };
  });

  const bonusRoutes: MetadataRoute.Sitemap = bonusBrandGuides.map((entry) => ({
    url: `${base}/guvenilir-siteler/${entry.slug}`,
    lastModified: now,
    changeFrequency: "daily",
    priority: 0.82,
  }));

  const geoHubRoutes: MetadataRoute.Sitemap = ALL_GEO_MARKET_IDS.map((id) => ({
    url: `${base}${GEO_MARKET_CONFIGS[id].hubPath}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.88,
  }));

  const geoBrandRoutes: MetadataRoute.Sitemap = getAllGeoBrandRoutes().map(
    ({ marketId, slug }) => ({
      url: `${base}${GEO_MARKET_CONFIGS[marketId].hubPath}/${slug}`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.8,
    }),
  );

  const marketsIndex: MetadataRoute.Sitemap = [
    {
      url: `${base}/markets`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  const sigmaHub: MetadataRoute.Sitemap = [
    {
      url: `${base}/igaming/sigma`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.87,
    },
  ];

  const sigmaRoutes: MetadataRoute.Sitemap = sigmaExhibitors.map((entry) => ({
    url: `${base}/igaming/sigma/${entry.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.78,
  }));

  return [
    ...staticRoutes,
    ...marketsIndex,
    ...geoHubRoutes,
    ...blogRoutes,
    ...bonusRoutes,
    ...geoBrandRoutes,
    ...sigmaHub,
    ...sigmaRoutes,
  ];
}
