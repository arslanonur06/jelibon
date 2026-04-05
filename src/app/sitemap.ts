import type { MetadataRoute } from "next";
import { blogEntries } from "@/data/blog/entries";
import { getSiteUrl } from "@/constants";

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

  return [...staticRoutes, ...blogRoutes];
}
