import { NextResponse } from "next/server";

/**
 * Search Console HTML-file verification at `/google77535185e011a25b.html`.
 * Google expects the uploaded file body to contain the verification line below.
 */
export async function GET() {
  const fileBody = "google-site-verification: google77535185e011a25b.html";

  return new NextResponse(fileBody, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
