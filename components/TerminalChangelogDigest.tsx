'use client';

import { useEffect, useState } from 'react';

type Item = { date: string; version?: string; title: string; items?: string[]; scope?: 'WEB' | 'APP' };
type Data = { web?: Omit<Item, 'scope'>[]; app?: Omit<Item, 'scope'>[] };

export default function TerminalChangelogDigest({ count = 4 }: { count?: number }) {
  const [list, setList] = useState<Item[]>([]);

  useEffect(() => {
    fetch('/changes.json', { cache: 'no-store' })
      .then(r => r.json())
      .then((data: Data) => {
        const all: Item[] = [
          ...(data.web || []).map(x => ({ ...x, scope: 'WEB' as const })),
          ...(data.app || []).map(x => ({ ...x, scope: 'APP' as const })),
        ]
          .sort((a, b) => (b.date || '').localeCompare(a.date || ''))
          .slice(0, count);
        setList(all);
      })
      .catch(() => setList([]));
  }, [count]);

  return (
    <section id="whats-new" className="py-12">
      {/* ★ 终端卡片：容器样式升级 */}
      <div className="
        rounded-2xl ring-1 ring-slate-800/60
        bg-slate-900/85 backdrop-blur-sm
        shadow-[0_20px_60px_rgba(2,8,23,.35)]
        text-slate-100
      ">
        {/* 顶部“窗控” */}
        <div className="flex items-center gap-2 px-4 pt-3 border-b border-[#0f213b]">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-auto text-[12px] text-slate-400">tail -n {count} CHANGELOG</span>
        </div>

        {/* 正文 */}
        <div className="px-4 pb-4 pt-2 font-mono text-[12.75px] md:text-[13.5px] leading-6">
          {list.map((log, i) => (
            <div
              key={i}
              className="
                group py-2 border-b border-white/5 last:border-b-0 rounded-md
                hover:bg-white/5 focus-within:bg-white/6 transition-colors
              "
            >
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-emerald-300">$</span>
                <span className="text-slate-300">{log.date}</span>

                <span
                  className="
                    rounded px-1.5 py-[1px] text-[11px]
                    border border-[#1f3b63] bg-[#0b223a] text-slate-200
                  "
                >
                  {log.scope}
                </span>

                <span className="ml-auto text-sky-300">{log.version}</span>
              </div>

              {/* ★ 标题使用 balance，长标题换行更优雅 */}
              <div className="pl-5 pr-2 text-slate-100 [text-wrap:balance]">
                {log.title}
              </div>
            </div>
          ))}

          {/* 查看全部 */}
          <div className="mt-2 pl-5">
            <a
              href="/changelog"
              className="
                inline-flex items-center gap-1 text-emerald-300 hover:text-emerald-200
                underline decoration-emerald-300/50 rounded px-1
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/40
              "
              aria-label="查看全部更新"
            >
              View All Logs <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
