"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  EMOJISTAR_POPUP_IMAGE_PATH,
  EMOJISTAR_TELEGRAM_HANDLE,
  EMOJISTAR_TELEGRAM_URL,
} from "@/constants";

const STORAGE_KEY = "jelibon-emojistar-popup-dismissed";

export function EmojiStarEntryPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(STORAGE_KEY) === "1") return;
    } catch {
      /* ignore private mode */
    }
    const timer = window.setTimeout(() => setOpen(true), 600);
    return () => window.clearTimeout(timer);
  }, []);

  function dismiss() {
    setOpen(false);
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-end justify-center bg-black/75 p-3 sm:items-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label="EmojiStar günlük bonus"
      onClick={dismiss}
    >
      <div
        className="relative w-full max-w-md overflow-hidden rounded-2xl border border-white/15 bg-[#050510] shadow-[0_30px_80px_rgba(0,0,0,0.55)]"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={dismiss}
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/50 text-lg leading-none text-white transition hover:bg-black/70"
          aria-label="Kapat"
        >
          ×
        </button>

        <div className="relative aspect-[4/5] w-full bg-[#020208]">
          <Image
            src={EMOJISTAR_POPUP_IMAGE_PATH}
            alt="EmojiStar günlük bonus — hemen geri dön"
            fill
            priority
            className="object-cover object-top"
            sizes="(max-width: 480px) 100vw, 448px"
          />
        </div>

        <div className="space-y-3 border-t border-white/10 bg-[#0a0a14] px-4 py-4 sm:px-5 sm:py-5">
          <p className="text-center text-sm text-zinc-300">
            Günlük bonus ve güncel giriş için Telegram’a geç.
          </p>
          <a
            href={EMOJISTAR_TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={dismiss}
            className="flex h-12 w-full items-center justify-center rounded-xl bg-[#2AABEE] text-sm font-semibold text-white transition hover:bg-[#229ED9]"
          >
            Telegram {EMOJISTAR_TELEGRAM_HANDLE}
          </a>
        </div>
      </div>
    </div>
  );
}
