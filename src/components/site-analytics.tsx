import Script from "next/script";

const gtmId = process.env.NEXT_PUBLIC_GTM_ID?.trim();

/**
 * Google Tag Manager (optional). Set `NEXT_PUBLIC_GTM_ID=GTM-XXXX` in `.env.local`.
 * Search Console: set `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` in `layout.tsx` metadata.
 * Canonical URLs: set `NEXT_PUBLIC_SITE_URL` for sitemap / Open Graph (see `getSiteUrl` in `@/constants`).
 */
export function SiteAnalytics() {
  if (!gtmId) return null;

  return (
    <>
      <Script id="gtm-loader" strategy="lazyOnload">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');`}
      </Script>
      <noscript>
        <iframe
          title="Google Tag Manager"
          src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
          height={0}
          width={0}
          className="hidden"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>
    </>
  );
}
