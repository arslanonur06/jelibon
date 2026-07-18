import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { bonusBrandGuides } from "@/data/bonus-guides";

const PRODUCTION_HOSTS = new Set(["jelibon.app", "www.jelibon.app"]);

const compactSlugToCanonical = new Map(
  bonusBrandGuides.map((brand) => [brand.slug.replace(/-/g, ""), brand.slug]),
);

function withNoIndex(response: NextResponse) {
  response.headers.set("X-Robots-Tag", "noindex, nofollow");
  return response;
}

export function middleware(request: NextRequest) {
  const host = request.headers.get("host")?.split(":")[0] ?? "";
  const { pathname } = request.nextUrl;
  const isProductionHost = PRODUCTION_HOSTS.has(host);

  const bonusMatch = pathname.match(/^\/guvenilir-siteler\/([^/]+)\/?$/);
  if (bonusMatch) {
    const slug = decodeURIComponent(bonusMatch[1]);
    const compact = slug.replace(/-/g, "");
    const canonicalSlug = compactSlugToCanonical.get(compact);
    if (canonicalSlug && canonicalSlug !== slug) {
      const url = request.nextUrl.clone();
      url.pathname = `/guvenilir-siteler/${canonicalSlug}`;
      const redirect = NextResponse.redirect(url, 308);
      if (!isProductionHost) return withNoIndex(redirect);
      return redirect;
    }
  }

  if (!isProductionHost) {
    return withNoIndex(NextResponse.next());
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|icon.png|apple-icon.png|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|xml|txt|webmanifest)$).*)"],
};
