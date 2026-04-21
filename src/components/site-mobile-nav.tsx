"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Menu, X } from "lucide-react";
import type { Locale } from "@/lib/i18n/locales";
import { getNavDockItems } from "@/data/nav-dock-items";

type SiteMobileNavProps = {
  locale: Locale;
};

export function SiteMobileNav({ locale }: SiteMobileNavProps) {
  const items = getNavDockItems(locale);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const closeRef = useRef<HTMLButtonElement>(null);
  const panelId = useId();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const t = window.setTimeout(() => closeRef.current?.focus(), 0);
    return () => {
      window.clearTimeout(t);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      <button
        type="button"
        className="inline-flex h-10 w-10 touch-manipulation items-center justify-center rounded-xl border border-white/12 bg-white/[0.06] text-zinc-100 shadow-[0_2px_12px_rgba(0,0,0,0.2)] transition hover:bg-white/10 lg:hidden"
        aria-label="Open navigation menu"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen(true)}
      >
        <Menu className="h-5 w-5" aria-hidden />
      </button>

      {open && typeof document !== "undefined"
        ? createPortal(
            <div className="fixed inset-0 z-[500] lg:hidden">
              <button
                type="button"
                className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
              />
              <aside
                id={panelId}
                role="dialog"
                aria-modal="true"
                aria-labelledby="site-mobile-nav-heading"
                className="absolute inset-y-0 right-0 flex w-[min(20.5rem,92vw)] flex-col overflow-hidden rounded-l-[2.25rem] border-l border-white/25 bg-[#08081c]/70 shadow-[-20px_0_48px_rgba(255,105,180,0.18)] backdrop-blur-2xl backdrop-saturate-150"
              >
                <div
                  className="pointer-events-none absolute inset-0 bg-jelly-glow opacity-[0.55]"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute -right-10 top-10 h-44 w-44 rounded-[45%] bg-[#FF69B4]/45 blur-3xl animate-pulse"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute -bottom-16 left-0 h-52 w-52 rounded-[48%] bg-[#00D4FF]/35 blur-3xl animate-pulse [animation-duration:3s]"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute left-1/4 top-1/3 h-36 w-36 rounded-[42%] bg-[#A020F0]/30 blur-3xl animate-pulse [animation-duration:2.5s] [animation-delay:300ms]"
                  aria-hidden
                />
                <div className="relative z-10 flex min-h-0 flex-1 flex-col bg-gradient-to-b from-white/[0.12] via-transparent to-white/[0.04]">
                  <div className="flex items-center justify-between border-b border-white/[0.12] px-4 py-3.5">
                    <h2
                      id="site-mobile-nav-heading"
                      className="bg-gradient-to-r from-[#F9A8D4] via-[#E9D5FF] to-[#7DD3FC] bg-clip-text text-xs font-semibold uppercase tracking-[0.2em] text-transparent"
                    >
                      Menu
                    </h2>
                    <button
                      ref={closeRef}
                      type="button"
                      className="rounded-xl p-2 text-zinc-300 ring-1 ring-white/10 transition hover:bg-white/10 hover:text-white"
                      aria-label="Close navigation menu"
                      onClick={() => setOpen(false)}
                    >
                      <X className="h-5 w-5" aria-hidden />
                    </button>
                  </div>
                  <nav
                    className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-2 py-3"
                    aria-label="Primary"
                  >
                    <ul className="space-y-1">
                      {items.map((item) => {
                        const Icon = item.icon;
                        return (
                          <li key={item.id}>
                            <Link
                              href={item.href}
                              prefetch
                              className="flex items-center gap-3 rounded-2xl px-3 py-3 text-sm font-medium text-zinc-100 transition hover:bg-white/[0.14] hover:shadow-[0_0_20px_rgba(255,105,180,0.12)] active:scale-[0.99]"
                              onClick={() => setOpen(false)}
                            >
                              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#F9A8D4] ring-1 ring-white/15 backdrop-blur-sm">
                                <Icon
                                  className="h-[1.125rem] w-[1.125rem]"
                                  strokeWidth={1.75}
                                />
                              </span>
                              <span className="leading-snug">{item.name}</span>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </nav>
                </div>
              </aside>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
