'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import LangSwitcher from './LangSwitcher';

const SECTIONS = [
  { id: 'app', label: 'App' },
  { id: 'gallery', label: 'Photos' },
  { id: 'substack', label: 'Substack' },
  { id: 'about', label: 'About' },
];

export default function Header() {
  const [active, setActive] = useState<string | null>(null);
  const pathname = usePathname();
  const base = pathname.startsWith('/en') ? '/en' : '/';

  // 首次加载：如果 URL 自带 #hash，则先高亮对应分区
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const hash = window.location.hash?.replace('#', '');
    if (hash) setActive(hash);
  }, []);

  // Scroll Spy：滚动时自动校正当前分区
  useEffect(() => {
    const els = SECTIONS.map(s => document.getElementById(s.id)).filter(Boolean) as HTMLElement[];
    if (!els.length) return;

    const obs = new IntersectionObserver(
      entries => {
        // 找最靠近视口上缘的那个分区作为激活项
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top));
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: '-10% 0px -75% 0px', threshold: [0, 0.1, 0.3] }
    );

    els.forEach(el => obs.observe(el));
    return () => { els.forEach(el => obs.unobserve(el)); obs.disconnect(); };
  }, []);

  // 点击导航：立即高亮 + 平滑滚动 + 更新 hash（不刷新）
  const goTo = (id: string, fromMobile?: boolean) => (e: React.MouseEvent) => {
    e.preventDefault();
    setActive(id); // 立即高亮
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // 更新地址栏的 #hash（不跳转新页面）
    if (typeof window !== 'undefined') {
      const url = `${window.location.pathname}#${id}`;
      window.history.replaceState(null, '', url);
    }

    // 如果是移动端菜单里点的，收起 <details>
    if (fromMobile) {
      const details = (e.currentTarget.closest('details') as HTMLDetailsElement | null);
      if (details) details.open = false;
    }
  };

  // 样式：Hover 明显；Active 为蓝色胶囊
    const isEn = pathname.startsWith('/en');
    const activeBg = isEn ? 'bg-sky-600' : 'bg-emerald-600';

    const linkCls = (id: string) =>
    [
        'px-3 py-1.5 rounded-full text-[15px] transition-all duration-200',
        active === id
        ? `${activeBg} text-white shadow-sm shadow-slate-900/10`
        : 'text-slate-700 hover:text-slate-900 hover:bg-sky-100/70 hover:shadow-sm ring-1 ring-transparent hover:ring-sky-300/70',
    ].join(' ');

  return (
    <header className="sticky top-0 z-50">
      <div className="relative bg-gradient-to-b from-white/70 to-sky-100/40 backdrop-blur supports-[backdrop-filter]:bg-white/60 ring-1 ring-sky-900/10 shadow-[0_6px_20px_rgba(15,23,42,0.06)]">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-sky-300/60 to-transparent" />
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between gap-4">
          <a href={base} className="flex items-center gap-3 font-semibold tracking-wide text-base md:text-lg text-slate-900">
            Fatescope
          </a>

          {/* 桌面 */}
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
            <div className="ml-1">
              <LangSwitcher />
            </div>
          </div>

          {/* 移动端 */}
          <details className="md:hidden relative">
            <summary className="list-none cursor-pointer px-3 py-1.5 rounded-md text-base ring-1 ring-slate-300 bg-white/70 backdrop-blur">
              Menu
            </summary>
            <div className="absolute right-0 top-full mt-2 w-52 bg-white/90 backdrop-blur rounded-xl shadow-lg ring-1 ring-slate-200 p-2 flex flex-col text-base">
              {SECTIONS.map(s => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  onClick={goTo(s.id, true)}
                  className={`px-3 py-2 rounded-lg hover:bg-slate-50 ${active === s.id ? 'text-slate-900 font-medium' : ''}`}
                >
                  {s.label}
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
