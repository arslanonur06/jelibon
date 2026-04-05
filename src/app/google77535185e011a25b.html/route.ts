import { NextResponse } from "next/server";
import { getGoogleSiteVerification } from "@/constants";

/**
 * Search Console HTML-file verification at `/google77535185e011a25b.html` (site root, e.g. https://jelibon.app/...).
 * Keep this route after verification succeeds — Google rechecks the token periodically.
 * Token: `getGoogleSiteVerification()` (env override or default; same as layout metadata).
 */
export async function GET() {
  const token = getGoogleSiteVerification();

  const safe = token
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;");

  const html = `<!DOCTYPE html>
<html>
<head>
<meta name="google-site-verification" content="${safe}" />
</head>
<body></body>
</html>
`;

  return new NextResponse(html, {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
