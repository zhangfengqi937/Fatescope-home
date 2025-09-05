'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import type { Route } from 'next';

export default function LangSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  // EN 默认在根路径 `/`；只要不是 /zh 开头都算 EN
  const [isEn, setIsEn] = useState(!pathname.startsWith('/zh'));
  useEffect(() => setIsEn(!pathname.startsWith('/zh')), [pathname]);

  const go = (lang: 'zh' | 'en') => {
    const hash = typeof window !== 'undefined' ? window.location.hash : '';
    const toZh = lang === 'zh';

    let target: string;
    if (toZh) {
      target = pathname.startsWith('/zh')
        ? pathname
        : `/zh${pathname === '/' ? '' : pathname}`;
    } else {
      target = pathname.replace(/^\/zh(\/|$)/, '/');
    }

    try { localStorage.setItem('lang', lang); } catch {}

    router.push(target as Route); // ← 关键：断言为 Route

    if (hash) {
      setTimeout(() => {
        try { window.location.hash = hash; } catch {}
      }, 0);
    }
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
      {btn('EN', isEn, () => go('en'))}
      {btn('中文', !isEn, () => go('zh'))}

    </div>
  );
}
