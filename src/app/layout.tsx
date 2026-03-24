import type { Metadata } from "next";
import { DM_Sans, Orbitron, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jelibon Marketing | iGaming Growth Solutions 2026",
  description:
    "Premium growth solutions for adult iGaming operators—traffic acquisition, AI automation, Telegram ads, DMCA protection, and creative production.",
  openGraph: {
    title: "Jelibon Marketing",
    description:
      "Dominate the iGaming market with premium traffic, automation, and brand protection.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("scroll-smooth", "font-sans", geist.variable)}>
      <body
        className={`${orbitron.variable} ${dmSans.variable} min-h-screen bg-[#050510] font-sans text-zinc-100 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
