'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import type { Route } from 'next';

export default function LangSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const [isEn, setIsEn] = useState(pathname.startsWith('/en'));
  useEffect(() => setIsEn(pathname.startsWith('/en')), [pathname]);

  const go = (lang: 'zh' | 'en') => {
    const hash = typeof window !== 'undefined' ? window.location.hash : '';
    const toEn = lang === 'en';
    const target = toEn
      ? (`/en${pathname === '/' ? '' : pathname}` as Route)   // 断言为 Route
      : (pathname.replace(/^\/en(\/|$)/, '/') as Route);

    try { localStorage.setItem('lang', lang); } catch {}
    router.push(target);                                     // 先切页面
    if (hash) setTimeout(() => {                             // 再还原锚点
      try { window.location.hash = hash; } catch {}
    }, 0);
  };

  const btn = (label: string, active: boolean, onClick: () => void) => (
    <button
      onClick={onClick}
      className={`px-2 py-1 rounded text-sm ${active ? 'bg-slate-900 text-white' : 'ring-1 ring-slate-300 hover:bg-slate-50'}`}
    >
      {label}
    </button>
  );

  return (
    <div className="flex items-center gap-1">
      {btn('中文', !isEn, () => go('zh'))}
      {btn('EN', isEn, () => go('en'))}
    </div>
  );
}
