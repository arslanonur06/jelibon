import type { Metadata } from "next";
import { DM_Sans, Orbitron } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SiteGradientBackground } from "@/components/site-gradient-background";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import { SiteAnalytics } from "@/components/site-analytics";
import { getLocale } from "@/lib/i18n/get-locale";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin-ext"],
  variable: "--font-dm",
  display: "swap",
});

const googleSiteVerification =
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim();

export const metadata: Metadata = {
  title: "Jelibon Marketing | iGaming Growth Türkiye",
  description:
    "Premium growth & software for iGaming in Türkiye: Telegram & PornHub traffic, SEO, AI chatbot & Influencer, creative, DMCA, custom software.",
  openGraph: {
    title: "Jelibon Marketing",
    description:
      "Dominate iGaming in Türkiye—traffic, SEO, AI, and full-stack growth infrastructure.",
    type: "website",
  },
  ...(googleSiteVerification
    ? { verification: { google: googleSiteVerification } }
    : {}),
};

export const dynamic = "force-dynamic";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = getLocale();
  return (
    <html
      lang={locale}
      className={cn(
        "scroll-smooth dark",
        dmSans.variable,
        orbitron.variable,
      )}
      suppressHydrationWarning
    >
      <body
        className={`${orbitron.variable} ${dmSans.variable} min-h-screen bg-[#050510] font-sans text-zinc-100 antialiased`}
      >
        <SiteAnalytics />
        <ThemeProvider>
          <SiteGradientBackground />
          <div className="relative z-10">{children}</div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
