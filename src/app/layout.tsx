import type { Metadata } from "next";
import { DM_Sans, Orbitron } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { DottedSurface } from "@/components/ui/dotted-surface";
import { ThemeProvider } from "@/components/theme-provider";
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
        <ThemeProvider>
          <DottedSurface />
          <div className="relative z-10">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
