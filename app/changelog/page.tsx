// app/changelog/page.tsx
import fs from 'fs/promises';
import path from 'path';

type Item = { date: string; version?: string; title: string; items?: string[] };
type Data = { web?: Item[]; app?: Item[] };

export const metadata = {
  title: 'Changelog — Fatescope',
  description: 'Homepage & App updates',
};

export default async function Page() {
  const file = await fs.readFile(path.join(process.cwd(), 'public', 'changes.json'), 'utf-8');
  const data: Data = JSON.parse(file);

  const web = [...(data.web || [])].sort((a, b) => (b.date || '').localeCompare(a.date || ''));
  const app = [...(data.app || [])].sort((a, b) => (b.date || '').localeCompare(a.date || ''));

  return (
    <section className="py-12">
      <div className="mx-auto max-w-5xl px-4">
        <h1 className="text-[28px] md:text-[34px] font-semibold tracking-tight text-slate-900">
          Changelog
        </h1>
        <p className="mt-2 text-slate-600">
          左列为 <b>Homepage</b>，右列为 <b>App</b>。所有记录来自同一份 <code>changes.json</code>。
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <TerminalPanel title="Homepage" cmd="tail -n all WEB_CHANGELOG">
            <LogList items={web} />
          </TerminalPanel>

          <TerminalPanel title="App" cmd="tail -n all APP_CHANGELOG">
            <LogList items={app} />
          </TerminalPanel>
        </div>
      </div>
    </section>
  );
}

function TerminalPanel({ title, cmd, children }: { title: string; cmd: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl ring-1 ring-slate-700/60 shadow-lg bg-slate-900/85 text-slate-100">
      <div className="flex items-center gap-2 px-4 pt-3 border-b border-[#0f213b]">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-auto text-[12px] text-slate-400">{cmd}</span>
      </div>
      <div className="px-4 pb-4 pt-2">{children}</div>
    </div>
  );
}

function LogList({ items }: { items: Item[] }) {
  return (
    <div className="font-mono text-[13.5px] leading-6">
      {items.map((log, i) => (
        <div key={i} className="border-b border-[#0f213b] last:border-b-0 py-2">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-emerald-300">$</span>
            <span className="text-slate-300">{log.date}</span>
            <span className="ml-auto text-sky-300">{log.version}</span>
          </div>
          <div className="pl-5 text-slate-100">{log.title}</div>
          {Array.isArray(log.items) && (
            <ul className="mt-1 pl-10 list-disc text-slate-200/90">
              {log.items.map((li, j) => <li key={j}>{li}</li>)}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
