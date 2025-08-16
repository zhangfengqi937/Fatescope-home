'use client';

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "sticky top-0 z-50 transition-all duration-300",
        "backdrop-blur-md", // 毛玻璃背景
        scrolled
          ? "bg-white/80 shadow-md ring-1 ring-slate-900/5"
          : "bg-white/60 shadow-none",
      ].join(" ")}
    >
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* 左侧 Logo */}
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/assets/favicon.png"
            alt="Fatescope feather"
            className="w-8 h-8 rounded-xl"
          />
          <span className="font-semibold tracking-wide">Fatescope</span>
        </Link>

        {/* 右侧导航 */}
        <nav className="hidden md:flex gap-6 text-sm text-slate-700">
          <Link href="/photos" className="hover:text-slate-900">
            Photos
          </Link>
          <Link href="/about" className="hover:text-slate-900">
            About
          </Link>
          <Link href="/links" className="hover:text-slate-900">
            Links
          </Link>
        </nav>
      </div>
    </header>
  );
}
