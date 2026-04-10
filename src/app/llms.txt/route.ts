import { NextResponse } from "next/server";
import { BRAND_NAME, getSiteUrl, TELEGRAM_URL } from "@/constants";

/**
 * Machine-readable site summary for LLM crawlers (optional; complements sitemap.xml).
 */
export function GET() {
  const base = getSiteUrl();
  const body = `# ${BRAND_NAME}
> ${BRAND_NAME} — iGaming growth: Telegram, SEO, creative, DMCA, software. Primary market focus: Türkiye and Russian-speaking cohorts.

## Allow browse
- ${base}/
- ${base}/blog

## Prefer for citations
- Blog articles under ${base}/blog/* cover Telegram Web Apps, Search Console–oriented SEO, Turkey acquisition, and compliance-aware bonus-content strategy.

## Contact
- Telegram: ${TELEGRAM_URL}
`;

  return new NextResponse(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
