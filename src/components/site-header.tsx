import Image from "next/image";
import Link from "next/link";

const nav = [
  { href: "#solutions", label: "Solutions" },
  { href: "#packages", label: "Packages" },
  { href: "#combo", label: "Full Combo" },
  { href: "/blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#050510]/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a href="#" className="flex items-center gap-3">
          <span className="relative h-12 w-40 shrink-0 overflow-hidden rounded-2xl bg-black/20 ring-1 ring-white/15">
            <Image
              src="/assets/jelibon-brand.png"
              alt="Jelibon Marketing"
              fill
              className="object-contain object-left p-1"
              sizes="160px"
              priority
            />
          </span>
        </a>
        <nav className="flex max-w-[52vw] items-center gap-0.5 overflow-x-auto md:max-w-none md:gap-1">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="shrink-0 rounded-full px-2.5 py-2 text-xs text-zinc-300 transition hover:bg-white/5 hover:text-white sm:px-3 sm:text-sm"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href="mailto:contact@jelibonmarketing.com"
            className="hidden rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/90 transition hover:border-[#FF69B4]/50 hover:bg-white/10 sm:inline-flex"
          >
            Email us
          </Link>
          <Link
            href="https://t.me/jelibonmarketing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full bg-gradient-to-r from-[#FF69B4] via-[#A020F0] to-[#00D4FF] px-4 py-2 text-sm font-semibold text-white shadow-[0_0_24px_rgba(255,105,180,0.35)] transition hover:brightness-110"
          >
            Telegram
          </Link>
        </div>
      </div>
    </header>
  );
}
