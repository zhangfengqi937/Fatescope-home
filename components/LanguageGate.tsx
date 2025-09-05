'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import type { Route } from 'next';
import { motion, AnimatePresence } from 'framer-motion';

function getCookie(name: string) {
  if (typeof document === 'undefined') return '';
  const m = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'));
  return m ? decodeURIComponent(m[1]) : '';
}

type Props = {
  /** 测试时设置为 true：每次都弹出 */
  forceAlwaysOpen?: boolean;
};

export default function LanguageGate({ forceAlwaysOpen = false }: Props) {
  const router = useRouter();
  const pathname = usePathname();

  const [open, setOpen] = useState(false);

  useEffect(() => {
    const hasLang = !!getCookie('lang');
    setOpen(forceAlwaysOpen || !hasLang);
    if (forceAlwaysOpen || !hasLang) {
      document.documentElement.style.overflow = 'hidden';
    }
    return () => {
      document.documentElement.style.overflow = '';
    };
  }, [forceAlwaysOpen]);

  const choose = (lang: 'en' | 'zh') => {
    try {
      document.cookie = `lang=${lang}; Max-Age=${60 * 60 * 24 * 365}; Path=/; SameSite=Lax`;
      localStorage.setItem('lang', lang);
    } catch {}

    const toZh = lang === 'zh';
    const target = toZh
      ? (pathname.startsWith('/zh') ? pathname : `/zh${pathname === '/' ? '' : pathname}`)
      : pathname.replace(/^\/zh(\/|$)/, '/');

    setOpen(false);
    document.documentElement.style.overflow = '';
    router.push(target as Route);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* 背景幕布 + 磨砂（保持原有配色） */}
          <motion.div
            className="fixed inset-0 z-[60] bg-slate-900/30 dark:bg-slate-950/50 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* 居中玻璃卡片 */}
          <motion.div
            className="fixed inset-0 z-[70] flex items-center justify-center p-4"
            initial={{ opacity: 0, scale: 0.96, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 4 }}
            transition={{ type: 'spring', stiffness: 260, damping: 24 }}
          >
            <div
              className="
                relative w-full max-w-md rounded-3xl
                border border-white/35 dark:border-white/15
                bg-white/65 dark:bg-slate-900/55
                shadow-[0_8px_40px_rgba(2,6,23,0.20)]
                backdrop-blur-2xl
              "
            >

              
              {/* 极光光晕（保留、无颗粒） */}
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-1 rounded-3xl
                           bg-[radial-gradient(60%_60%_at_20%_20%,rgba(99,102,241,0.28),transparent_70%),
                               radial-gradient(60%_60%_at_80%_30%,rgba(56,189,248,0.22),transparent_70%),
                               radial-gradient(70%_70%_at_50%_100%,rgba(168,85,247,0.18),transparent_70%)]
                           blur-2xl"
              />

              {/* 内发光边框 */}
              <div className="absolute inset-0 rounded-3xl ring-1 ring-white/15" />

              <div className="relative p-8">
                <h2 className="text-center text-2xl md:text-[26px] font-semibold tracking-tight text-slate-900 dark:text-slate-50">
                  选择语言 / <span className="text-slate-800 dark:text-slate-100">Choose Your Language</span>
                </h2>

                <div className="mt-3 text-center text-[13px] leading-relaxed">
                  <p className="text-slate-600 dark:text-slate-300">你随时可以在右上角切换。</p>
                  <p className="mt-0.5 text-slate-500 dark:text-slate-400">You can always switch at the top right.</p>
                </div>

                {/* 按钮区：仅 hover 才出现渐变光泽 + 文字变白 */}
                <div className="mt-8 grid grid-cols-1 gap-3">
                  {/* English */}
                  <button
                    onClick={() => choose('en')}
                    className="
                      group relative w-full rounded-2xl px-5 py-3.5 font-medium
                      bg-white/85 dark:bg-slate-800/70
                      text-slate-900 dark:text-slate-50
                      border border-slate-200/70 dark:border-slate-700/60
                      hover:border-transparent
                      hover:shadow-[0_8px_24px_rgba(2,6,23,0.12)]
                      transition-all
                    "
                  >
                    <span className="relative z-10 transition-colors group-hover:text-white">
                      English
                    </span>
                    {/* 渐变层：淡蓝系 + 轻微呼吸 */}
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-[-1px] rounded-2xl opacity-0 
                                 group-hover:opacity-100 transition-opacity
                                 animate-[pulse_2s_ease-in-out_infinite]
                                 bg-[linear-gradient(135deg,#60a5fa_0%,#93c5fd_50%,#a5f3fc_100%)]"
                      style={{ mixBlendMode: 'overlay' }}
                    />
                  </button>

                  {/* 中文 */}
                  <button
                    onClick={() => choose('zh')}
                    className="
                      group relative w-full rounded-2xl px-5 py-3.5 font-medium
                      bg-white/70 dark:bg-slate-800/60
                      text-slate-800 dark:text-slate-100
                      border border-slate-200/60 dark:border-slate-700/50
                      hover:border-transparent
                      hover:shadow-[0_8px_24px_rgba(2,6,23,0.10)]
                      transition-all
                    "
                  >
                    <span className="relative z-10 transition-colors group-hover:text-white">
                      简体中文
                    </span>
                    {/* 渐变层：黄绿系 + 轻微呼吸 */}
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-[-1px] rounded-2xl opacity-0 
                                 group-hover:opacity-100 transition-opacity
                                 animate-[pulse_2s_ease-in-out_infinite]
                                 bg-[linear-gradient(135deg,#34d399_0%,#a3e635_50%,#fde047_100%)]"
                      style={{ mixBlendMode: 'overlay' }}
                    />
                  </button>
                </div>

              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
