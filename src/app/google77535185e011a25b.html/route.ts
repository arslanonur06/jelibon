import { NextResponse } from "next/server";

/**
 * Search Console HTML-file verification at `/google77535185e011a25b.html` (site root, e.g. https://jelibon.app/...).
 * Keep this route after verification succeeds — Google rechecks the token periodically.
 * Token source: `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` (same as `metadata.verification.google` in layout).
 */
export async function GET() {
  const token = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim();
  if (!token) {
    return new NextResponse(
      "Set NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION to the value from Search Console (HTML tag / downloaded file meta content).",
      { status: 503, headers: { "Content-Type": "text/plain; charset=utf-8" } },
    );
  }

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
