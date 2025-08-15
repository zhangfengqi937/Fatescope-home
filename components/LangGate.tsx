'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import type { Route } from 'next';

export default function LangGate() {
  const [show, setShow] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    try {
      const saved = localStorage.getItem('lang');
      if (saved) return;
      const nav = (typeof navigator !== 'undefined' ? navigator.language : 'en').toLowerCase();
      const prefer = nav.startsWith('zh') ? 'zh' : 'en';
      const isEn = pathname.startsWith('/en');
      if ((prefer === 'en' && !isEn) || (prefer === 'zh' && isEn)) setShow(true);
    } catch {}
  }, [pathname]);

  const choose = (lang: 'zh'|'en') => {
    try { localStorage.setItem('lang', lang); } catch {}
    const hash = typeof window !== 'undefined' ? window.location.hash : '';
    const toEn = lang === 'en';
    const target = toEn
      ? (`/en${pathname === '/' ? '' : pathname}` as Route)
      : (pathname.replace(/^\/en(\/|$)/, '/') as Route);

    router.push(target);
    if (hash) setTimeout(() => { try { window.location.hash = hash; } catch {} }, 0);
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-x-0 bottom-4 z-50 flex justify-center">
      <div className="rounded-full bg-white/90 backdrop-blur shadow ring-1 ring-slate-200 px-3 py-2 text-sm flex items-center gap-2">
        <span>选择语言 · Language</span>
        <button onClick={() => choose('zh')} className="px-2 py-1 rounded bg-slate-900 text-white">中文</button>
        <button onClick={() => choose('en')} className="px-2 py-1 rounded bg-slate-900 text-white">English</button>
        <button onClick={() => setShow(false)} className="px-2 py-1 rounded ring-1 ring-slate-300">×</button>
      </div>
    </div>
  );
}
