'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import LangSwitcher from './LangSwitcher';
import { Sora } from 'next/font/google';
const brandFont = Sora({ subsets: ['latin'], weight: ['500', '400'] });

const SECTIONS = [
  { id: 'app',      label: 'App' },
  { id: 'gallery',  label: 'Photos' },
  { id: 'substack', label: 'Substack' },
  { id: 'about',    label: 'About' },
];

// 你的 GitHub 链接
const GITHUB_LINKS = [
  { href: 'https://github.com/zhangfengqi937/fatescope-home', label: 'Homepage Repo' },
  { href: 'https://github.com/zhangfengqi937/fatescope-app-docs', label: 'Fatescope Docs' },
];

export default function Header() {
  const [active, setActive] = useState<string | null>(null);
  const pathname = usePathname();
  const base = pathname.startsWith('/en') ? '/en' : '/';
  const isEn = pathname.startsWith('/en');

  // —— 渐变类（写成常量，保证 Tailwind JIT 能识别） ——
  const GRAD_WARM      = 'bg-[linear-gradient(90deg,_#f59e0b_0%,_#34d399_58%,_#93c5fd_100%)]';
  const GRAD_WARM_HOV  = 'hover:bg-[linear-gradient(90deg,_#f59e0b_0%,_#34d399_58%,_#93c5fd_100%)]';
  const GRAD_WARM_GHOV = 'group-hover:bg-[linear-gradient(90deg,_#f59e0b_0%,_#34d399_58%,_#93c5fd_100%)]';

  const GRAD_COOL      = 'bg-[linear-gradient(90deg,_#22d3ee_0%,_#60a5fa_55%,_#818cf8_100%)]';
  const GRAD_COOL_HOV  = 'hover:bg-[linear-gradient(90deg,_#22d3ee_0%,_#60a5fa_55%,_#818cf8_100%)]';
  const GRAD_COOL_GHOV = 'group-hover:bg-[linear-gradient(90deg,_#22d3ee_0%,_#60a5fa_55%,_#818cf8_100%)]';

  // 当前页面用哪一套渐变（与左侧 Fatescope 一致）
  const BRAND_GHOV = isEn ? GRAD_COOL_GHOV : GRAD_WARM_GHOV;
  const LINK_HOV   = isEn ? GRAD_COOL_HOV  : GRAD_WARM_HOV;

  // 首次加载：如果 URL 自带 #hash，则先高亮对应分区
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const hash = window.location.hash?.replace('#', '');
    if (hash) setActive(hash);
  }, []);

  // Scroll Spy：滚动时自动校正当前分区
  useEffect(() => {
    const els = SECTIONS.map(s => document.getElementById(s.id)).filter(
      Boolean
    ) as HTMLElement[];
    if (!els.length) return;

    const obs = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort(
            (a, b) =>
              Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top)
          );
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: '-10% 0px -75% 0px', threshold: [0, 0.1, 0.3] }
    );

    els.forEach(el => obs.observe(el));
    return () => {
      els.forEach(el => obs.unobserve(el));
      obs.disconnect();
    };
  }, []);

  // 点击导航：立即高亮 + 平滑滚动 + 更新 hash（不刷新）
  const goTo = (id: string, fromMobile?: boolean) => (e: React.MouseEvent) => {
    e.preventDefault();
    setActive(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });

    if (typeof window !== 'undefined') {
      const url = `${window.location.pathname}#${id}`;
      window.history.replaceState(null, '', url);
    }

    if (fromMobile) {
      const details = e.currentTarget.closest('details') as HTMLDetailsElement | null;
      if (details) details.open = false;
    }
  };

  // —— 样式 —— //
  const activeBg = isEn ? 'bg-sky-600' : 'bg-emerald-600';

  // 右侧链接：激活=实心白字；未激活=常态纯色，悬停渐变文字
  const linkCls = (id: string) => {
    const base =
      'px-3 py-1.5 rounded-full text-[15px] transition-all duration-200 ring-1 ring-transparent';
    if (active === id) {
      return [
        base,
        `${activeBg} text-white shadow-sm shadow-slate-900/10`,
      ].join(' ');
    }
    return [
      base,
      'text-slate-700 hover:text-transparent hover:bg-clip-text hover:shadow-sm',
      LINK_HOV, // 悬停时的品牌渐变
    ].join(' ');
  };

  return (
    <header className="sticky top-0 z-50">
      <div className="relative bg-gradient-to-b from-white/70 to-sky-100/40 backdrop-blur supports-[backdrop-filter]:bg-white/60 ring-1 ring-sky-900/10 shadow-[0_6px_20px_rgba(15,23,42,0.06)]">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-sky-300/60 to-transparent" />
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between gap-4">
          {/* 品牌：常态专业，悬停品牌渐变 */}
          <a href={base} className="flex items-center gap-3 group">
            <img
              src="/assets/favicon.png"
              alt=""
              className="w-7 h-7 rounded-lg ring-1 ring-slate-900/5"
            />
            <span
              className={`${brandFont.className}
                text-[21px] md:text-[22px] font-medium tracking-[0.006em]
                text-slate-900 leading-none
                [text-shadow:0.8px_0.8px_0_rgba(15,23,42,.18),_-0.6px_-0.6px_0_rgba(255,255,255,.55)]
                ${BRAND_GHOV} group-hover:bg-clip-text group-hover:text-transparent
                transition-colors duration-300`}
            >
              Fatescope
            </span>
          </a>

          {/* 桌面导航 */}
          <div className="hidden md:flex items-center gap-6">
            <nav className="flex items-center gap-2">
              {SECTIONS.map(s => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  onClick={goTo(s.id)}
                  className={linkCls(s.id)}
                  aria-current={active === s.id ? 'page' : undefined}
                >
                  {s.label}
                </a>
              ))}
            </nav>

            {/* GitHub 下拉 */}
            <details className="relative">
              <summary
                className="list-none cursor-pointer p-2 rounded-full hover:bg-slate-100 transition flex items-center"
                aria-label="GitHub repositories"
              >
                <svg viewBox="0 0 16 16" aria-hidden="true" className="w-5 h-5 fill-slate-800">
                  <path d="M8 0C3.58 0 0 3.64 0 8.13c0 3.59 2.29 6.63 5.47 7.7.4.08.55-.18.55-.39 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.5-2.69-.96-.09-.24-.48-.96-.82-1.16-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.22 1.87.88 2.33.67.07-.53.28-.88.51-1.08-1.78-.2-3.64-.91-3.64-4.05 0-.9.31-1.64.82-2.22-.08-.2-.36-1.02.08-2.12 0 0 .67-.22 2.2.85a7.4 7.4 0 0 1 2-.27c.68 0 1.36.09 2 .27 1.53-1.07 2.2-.85 2.2-.85.44 1.1.16 1.92.08 2.12.51.58.82 1.32.82 2.22 0 3.15-1.87 3.84-3.65 4.05.29.26.54.77.54 1.56 0 1.12-.01 2.02-.01 2.29 0 .21.15.47.55.39A8.03 8.03 0 0 0 16 8.13C16 3.64 12.42 0 8 0Z" />
                </svg>
              </summary>
              <div className="absolute right-0 top-full mt-2 w-56 bg-white/95 backdrop-blur rounded-xl shadow-lg ring-1 ring-slate-200 p-2">
                {GITHUB_LINKS.map(link => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-50"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </details>

            {/* 语言切换器 */}
            <div className="ml-1">
              <LangSwitcher />
            </div>
          </div>

          {/* 移动端菜单 */}
          <details className="md:hidden relative">
            <summary className="list-none cursor-pointer px-3 py-1.5 rounded-md text-base ring-1 ring-slate-300 bg-white/70 backdrop-blur">
              Menu
            </summary>
            <div className="absolute right-0 top-full mt-2 w-56 bg-white/90 backdrop-blur rounded-xl shadow-lg ring-1 ring-slate-200 p-2 flex flex-col text-base">
              {SECTIONS.map(s => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  onClick={goTo(s.id, true)}
                  className={`px-3 py-2 rounded-lg ${
                    active === s.id
                      ? 'text-slate-900 font-medium'
                      : 'text-slate-700 hover:text-transparent hover:bg-clip-text ' + LINK_HOV
                  }`}
                >
                  {s.label}
                </a>
              ))}

              <div className="my-2 h-px bg-slate-200/70" />
              <div className="px-2 pb-1 text-sm text-slate-500">GitHub</div>

              {GITHUB_LINKS.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 rounded-lg hover:bg-slate-50 text-[15px] text-slate-700"
                >
                  {link.label}
                </a>
              ))}

              <div className="border-t my-2" />
              <LangSwitcher />
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
