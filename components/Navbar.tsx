// components/Navbar.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";
import type { Route } from "next";
import { useEffect, useState } from "react";

/* --- Icons --- */
function GitHubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.19-3.37-1.19-.46-1.17-1.13-1.48-1.13-1.48-.92-.63.07-.62.07-.62 1.02.07 1.56 1.05 1.56 1.05.9 1.55 2.36 1.1 2.94.85.09-.65.35-1.1.63-1.36-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.57 9.57 0 0 1 5 0c1.9-1.29 2.74-1.02 2.74-1.02.56 1.38.21 2.4.11 2.65.64.7 1.02 1.59 1.02 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.86v2.75c0 .26.18.57.69.47A10 10 0 0 0 12 2Z"
      />
    </svg>
  );
}

/* --- Single nav link with underline animation --- */
type NavLinkProps = { href: string; children: React.ReactNode };

function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname();
  const isHash = href.startsWith("#");
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");
  const active =
    !isHash && !isExternal && (pathname === href || pathname.startsWith(href + "/"));

  const base =
    "group relative inline-flex items-center text-[15px] text-slate-700 hover:text-slate-900";
  const underline =
    "absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 rounded bg-gradient-to-r " +
    "from-emerald-400 to-sky-400 transition-transform duration-300 " +
    (active ? "scale-x-100" : "group-hover:scale-x-100");

  // Anchor/external/mailto: use <a>
  if (isHash || isExternal) {
    return (
      <a href={href} className={base}>
        {children}
        <span className={underline} />
      </a>
    );
  }

  // Internal route: use <Link> with Route assertion
  return (
    <Link href={href as Route} className={base}>
      {children}
      <span className={underline} />
    </Link>
  );
}

/* --- Language segmented switch --- */
function LangSwitch() {
  const pathname = usePathname();
  const sp = useSearchParams();
  const current = (sp.get("lang") ?? "zh") as "zh" | "en";

  const item =
    "px-3 py-1 text-xs rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400";

  return (
    <div className="inline-flex rounded-full border border-slate-200 bg-white/70 backdrop-blur">
      <Link
        href={{ pathname: pathname as Route, query: { lang: "zh" } }}
        className={`${item} ${
          current === "zh" ? "bg-slate-900 text-white" : "text-slate-700 hover:bg-slate-50"
        }`}
      >
        中文
      </Link>
      <Link
        href={{ pathname: pathname as Route, query: { lang: "en" } }}
        className={`${item} ${
          current === "en" ? "bg-slate-900 text-white" : "text-slate-700 hover:bg-slate-50"
        }`}
      >
        EN
      </Link>
    </div>
  );
}

/* --- Navbar --- */
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all ${scrolled ? "shadow-sm" : ""}`}>
      {/* Glass background + subtle bottom gradient line */}
      <div className="absolute inset-0 bg-white/60 backdrop-blur-md" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <nav className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-14 items-center justify-between">
          {/* Brand */}
          <Link href={"/" as Route} className="flex items-center gap-2">
            <Image
              src="/images/icon.png" // 替换为你的图标
              alt="Fatescope"
              width={24}
              height={24}
              className="rounded-lg"
              priority
            />
            <span className="font-medium text-slate-900">Fatescope</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {/* App CTA (green pill) */}
            <a
              href="https://fatescope.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-emerald-600 px-3 py-1 text-sm font-medium text-white hover:bg-emerald-500 transition"
            >
              App
            </a>

            <NavLink href="/photos">Photos</NavLink>
            <NavLink href="#substack">Substack</NavLink>
            <NavLink href="#about">About</NavLink>

            <a
              href="https://github.com/yourrepo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100"
              aria-label="GitHub"
            >
              <GitHubIcon className="h-5 w-5" />
            </a>

            <LangSwitch />
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg text-slate-700 hover:bg-slate-100"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden fixed inset-0 z-[60] bg-black/30" onClick={() => setOpen(false)}>
          <div
            className="absolute right-0 top-0 h-full w-72 bg-white shadow-xl p-4 flex flex-col gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <span className="font-medium text-slate-900">Menu</span>
              <button
                className="inline-flex h-8 w-8 items-center justify-center rounded-lg hover:bg-slate-100"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                  <path d="M6 6l12 12M18 6l-12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <a
              href="https://fatescope.app"
              className="rounded-lg bg-emerald-600 px-3 py-2 text-white"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
            >
              App
            </a>
            <Link href={"/photos" as Route} className="px-3 py-2 rounded-lg hover:bg-slate-50" onClick={() => setOpen(false)}>
              Photos
            </Link>
            <a href="#substack" className="px-3 py-2 rounded-lg hover:bg-slate-50" onClick={() => setOpen(false)}>
              Substack
            </a>
            <a href="#about" className="px-3 py-2 rounded-lg hover:bg-slate-50" onClick={() => setOpen(false)}>
              About
            </a>

            <div className="h-px bg-slate-200 my-2" />

            <a
              href="https://github.com/yourrepo"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 rounded-lg hover:bg-slate-50"
              onClick={() => setOpen(false)}
            >
              GitHub
            </a>
            <LangSwitch />
          </div>
        </div>
      )}
    </header>
  );
}
