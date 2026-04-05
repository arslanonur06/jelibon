import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/constants";

export default function robots(): MetadataRoute.Robots {
  const base = getSiteUrl();
  const host = (() => {
    try {
      return new URL(base).host;
    } catch {
      return "jelibon.app";
    }
  })();

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "Googlebot",
        allow: "/",
      },
      {
        userAgent: "Bingbot",
        allow: "/",
      },
    ],
    sitemap: [`${base}/sitemap.xml`],
    host,
  };
}
