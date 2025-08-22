// app/en/page.tsx
import HeroAuroraCool from "../../components/HeroAuroraCool";
import GlassCard from "../../components/GlassCard";
import ClientGallery from "../../components/ClientGallery";
import Lightbox from "../../components/Lightbox";
import Button from "@/components/Button";
import Image from "next/image";
import { Tag } from "@/components/Tag";
import { Badge } from "@/components/Badge";
import TerminalChangelogDigest from "@/components/TerminalChangelogDigest";

const photos = [
  "/images/01.jpg", "/images/02.jpg", "/images/03.jpg", "/images/04.jpg",
  "/images/05.jpg", "/images/06.jpg", "/images/07.jpg", "/images/08.jpg",
  "/images/09.jpg", "/images/10.jpg", "/images/11.jpg", "/images/12.jpg",
  "/images/13.jpg", "/images/14.jpg",
];

export default function HomeEn() {
  return (
    <main className="max-w-6xl mx-auto px-6">
      {/* Hero — cool tone */}
      <HeroAuroraCool />

      {/* App */}
      <section id="app" className="py-14">
        <GlassCard
          tint="sky"
          className="relative overflow-hidden grid grid-cols-1 md:grid-cols-4 md:gap-12 md:items-center"
        >
          {/* 左列：文字 75% */}
          <div className="md:col-span-3 space-y-6">
            <div className="space-y-3">
              <h2 className="text-[28px] md:text-[34px] font-semibold tracking-tight text-slate-900
                [text-shadow:0.8px_0.8px_0_rgba(15,23,42,.18),_-0.6px_-0.6px_0_rgba(255,255,255,.55)]">
                Fatescope App
              </h2>
              <span className="mt-2 block h-[2px] w-10 rounded brand-line-cool" />
            </div>

            <p className="text-base md:text-lg text-slate-700 leading-8">
              Independent Hybrid astrology algorithms (East × West) Engine × AI Insight. Not just answers, but a personal life map.
              Detailed timing, directions, and event-line guidance—helping you hear your own voice more clearly at decisive moments.
            </p>

            <ul className="text-base text-slate-700 list-disc ml-5 space-y-2 leading-7">
              <li>Built-from-scratch engine × Intelligent interpretation — crafted from zero, continually refined to truly understand you.</li>
              <li>Event-line guidance — light on the path when you feel lost.</li>
              <li>Cloud architecture — stable, secure, and ever-evolving (AWS / Terraform / containerization / CI/CD).</li>
            </ul>

            <div className="pt-2 space-y-2">
              <h6 className="text-[16px] md:text-[18px] font-medium tracking-wide text-slate-700
                [text-shadow:0.5px_0.5px_0_rgba(15,23,42,.12),_-0.5px_-0.5px_0_rgba(255,255,255,.4)]">
                My Calling
              </h6>
              <span className="mt-2 block h-[2px] w-10 rounded brand-line-cool" />
              <p className="text-sm md:text-base text-slate-700 leading-7">
                To help each person find meaning, direction, and mission in life—not only to resolve questions, but to illuminate.              </p>
            </div>

            <div className="pt-2">
              <Button
                href="https://fatescope.app"
                rel="noopener noreferrer"
                variant="primary"
                size="md"
                aria-label="打开 FateScope 应用"
              >
                Start Exploring
              </Button>
            </div>
          </div>

          {/* 右列：图形 25%（移动端下沉居中；桌面端与左侧垂直居中对齐） */}
          <div className="md:col-span-1 mt-8 md:mt-0 self-center md:self-auto flex flex-col items-center md:items-end">
            <svg
              viewBox="0 0 240 240"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Cosmic mission glyph"
              className="w-44 h-44 md:w-52 md:h-52 drop-shadow-sm"
            >
              <defs>
                <radialGradient id="nebula" cx="50%" cy="45%" r="60%">
                  <stop offset="0%" stopColor="#a7f3d0" stopOpacity="0.95" />
                  <stop offset="45%" stopColor="#60a5fa" stopOpacity="0.55" />
                  <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.15" />
                </radialGradient>
                <linearGradient id="orbitStroke" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#34d399" />
                  <stop offset="50%" stopColor="#60a5fa" />
                  <stop offset="100%" stopColor="#fbbf24" />
                </linearGradient>
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="2.2" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <symbol id="star" viewBox="0 0 20 20">
                  <path d="M10 0 L12 8 L20 10 L12 12 L10 20 L8 12 L0 10 L8 8 Z" fill="white" />
                </symbol>
              </defs>

              <g filter="url(#glow)">
                <ellipse cx="120" cy="120" rx="82" ry="70" fill="url(#nebula)" />
              </g>
              <g opacity="0.45">
                <ellipse cx="120" cy="120" rx="92" ry="58" fill="none" stroke="url(#orbitStroke)" strokeWidth="1.2" />
                <ellipse cx="120" cy="120" rx="66" ry="40" fill="none" stroke="url(#orbitStroke)" strokeWidth="1.1" />
              </g>
              <path
                d="M120,120 m0,-70 a70,70 0 1,1 -70,70 c0,24 19,43 43,43 c24,0 43,-19 43,-43 c0,-16 -13,-29 -29,-29 c-16,0 -29,13 -29,29 c0,10 8,18 18,18"
                fill="none" stroke="url(#orbitStroke)" strokeWidth="2" strokeLinecap="round" opacity="0.85" filter="url(#glow)"
              />
              <use href="#star" x="58" y="68" width="8" height="8" opacity="0.9" />
              <use href="#star" x="182" y="94" width="6" height="6" opacity="0.8" />
              <use href="#star" x="150" y="168" width="7" height="7" opacity="0.85" />
              <circle cx="95" cy="170" r="2.2" fill="#fff" opacity="0.9" />
              <circle cx="200" cy="130" r="1.8" fill="#fff" opacity="0.8" />
            </svg>

            <p className="mt-2 text-slate-600 italic text-sm md:text-base text-center md:text-center">
              Lighting the way at life’s crossroads
            </p>
          </div>
        </GlassCard>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-10 scroll-mt-24">
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          {/* 左侧标题 */}
          <div className="group">
            <p className="text-xs uppercase tracking-wider text-slate-500">Selected</p>
            <h2
              className="text-2xl md:text-3xl font-semibold tracking-tight leading-none text-slate-900
                         transition-[color,background] duration-300
                         group-hover:bg-[linear-gradient(90deg,_#f59e0b_0%,_#34d399_58%,_#93c5fd_100%)]
                         group-hover:bg-clip-text group-hover:text-transparent">
              Moments
            </h2>
            <span className="mt-2 block h-[2px] w-10 rounded brand-line-cool" />          </div>

          {/* 右侧“View all” */}
          <a
            href="/photos"
            aria-label="View all photos"
            className="inline-flex items-center gap-1 text-sm font-medium text-slate-600
                       hover:text-slate-900 hover:underline focus-visible:outline-none
                       focus-visible:ring-2 focus-visible:ring-emerald-400/50 rounded"
          >
            View all <span aria-hidden>→</span>
          </a>
        </div>

        {/* 栅格间距稍大一点，移动端更透气 */}
        <ClientGallery photos={photos} />
      </section>

      {/* Substack */}
      <section id="substack" className="py-12 scroll-mt-24">
        <GlassCard tint="sky" className="relative overflow-hidden">
          <div className="grid md:grid-cols-12 md:gap-12 gap-6 items-start">
            {/* 左侧文案 */}
            <div className="md:col-span-7 space-y-6">
              {/* 标题 */}
              <div className="space-y-3">
                <h2
                  className="
                    text-[28px] md:text-[34px] font-semibold tracking-tight text-slate-900
                    [text-shadow:0.8px_0.8px_0_rgba(15,23,42,.18),_-0.6px_-0.6px_0_rgba(255,255,255,.55)]
                  "
                >
                  Healing Notes
                </h2>
                <span className="mt-2 block h-[2px] w-10 rounded brand-line-cool" />              </div>

              <p className="text-base md:text-lg text-slate-700 leading-8">
                For those who feel lost at life’s crossroads.
                Here you will find four frequencies of writing:
              </p>

              <ul className="list-disc list-inside text-slate-700 text-base leading-7 space-y-1.5">
                <li>Weekly Notes — one healing reminder to stay awake in daily life</li>
                <li>With the Higher Self — through emotions and relationships, seeing a truer side of yourself (twice a month)</li>
                <li>Soul Science — explaining spiritual guidance in the language of science (twice a month)</li>
                <li>Monthly Essays — weaving personal experience to explore the deeper meaning of pain, love, and awakening</li>
              </ul>

              {/* 初衷 */}
              <div className="pt-2 space-y-2">
                <h6 className="text-[16px] md:text-[18px] font-medium tracking-wide text-slate-700
          [text-shadow:0.5px_0.5px_0_rgba(15,23,42,.12),_-0.5px_-0.5px_0_rgba(255,255,255,.4)]">
                  My Calling
                </h6>
                <span className="block h-[2px] w-8 rounded brand-line-warm" />
                <p className="text-sm md:text-base text-slate-700 leading-7">
                  To help each person find meaning, direction, and mission in life—not only to answer questions, but to bring light.                </p>
              </div>


              {/* 标签 */}
              <div className="mt-5 flex flex-wrap gap-2 text-sm md:text-base">
                <span className="px-3 py-1 rounded-full bg-white/70 ring-1 ring-sky-200 text-slate-700 text-[14px] font-medium">
                  Healing
                </span>
                <span className="px-3 py-1 rounded-full bg-white/70 ring-1 ring-sky-200 text-slate-700 text-[14px] font-medium">
                  Spirituality
                </span>
                <span className="px-3 py-1 rounded-full bg-white/70 ring-1 ring-sky-200 text-slate-700 text-[14px] font-medium">
                  Kind guidance
                </span>
              </div>

              {/* CTA 按钮 */}
              <div className="flex flex-wrap gap-3">
                <Button
                  href="https://fatescope.substack.com"
                  rel="noopener noreferrer"
                  variant="primary"
                  size="md"
                  aria-label="在 Substack 阅读 Fatescope"
                >
                  Read on Substack
                </Button>
                <Button
                  href="https://fatescope.substack.com/subscribe"
                  rel="noopener noreferrer"
                  variant="secondary"
                  size="md"
                  aria-label="免费订阅 Fatescope Substack"
                >
                  Free Subscription
                </Button>
              </div>
            </div>

            {/* 右侧：三个板块 */}
            <div className="md:col-span-5 space-y-4">
              {/* 与神对话系列 */}
              <div className="relative rounded-xl bg-white/50 backdrop-blur p-4 md:p-5 shadow-sm border border-black/5 overflow-hidden">
                <div className="flex items-center gap-2">
                  <span className="h-4 w-1 rounded bg-gradient-to-b from-emerald-400 to-blue-400" aria-hidden="true"></span>
                  <p className="text-xs uppercase tracking-wider text-slate-500">与神对话 · 系列</p>
                </div>
                <a
                  href="https://fatescope.substack.com/p/c01"
                  target="_blank" rel="noopener noreferrer"
                  className="mt-1 block text-slate-900 font-medium leading-6 hover:underline"
                >
                  与神对话 · 三章 · 恐惧与选择
                </a>
                <p className="text-xs text-slate-500 mt-1">更新于：2025-08-11</p>
                <a
                  href="https://fatescope.substack.com/tag/与神对话"
                  target="_blank" rel="noopener noreferrer"
                  className="mt-2 inline-block text-xs text-slate-500 hover:underline"
                >
                  查看全部 →
                </a>

                {/* 水印（纯装饰） */}
                <div className="absolute right-2 bottom-2 w-14 h-14 opacity-30 pointer-events-none select-none">
                  <Image src="/images/feather-pen.png" alt="" fill sizes="56px" className="object-contain" />
                </div>
              </div>

              {/* 灵魂科学系列 */}
              <div className="relative rounded-xl bg-white/50 backdrop-blur p-4 md:p-5 shadow-sm border border-black/5 overflow-hidden">
                <div className="flex items-center gap-2">
                  <span className="h-4 w-1 rounded bg-gradient-to-b from-emerald-400 to-blue-400" aria-hidden="true"></span>
                  <p className="text-xs uppercase tracking-wider text-slate-500">灵魂科学 · 系列</p>
                </div>
                <a
                  href="https://fatescope.substack.com/p/intro-to-higher-self"
                  target="_blank" rel="noopener noreferrer"
                  className="mt-1 block text-slate-900 font-medium leading-6 hover:underline"
                >
                  灵魂科学 · 第一篇 · 什么是高我？(Intro to Higher Self)
                </a>
                <p className="text-xs text-slate-500 mt-1">更新于：2025-08-18</p>
                <a
                  href="https://fatescope.substack.com/tag/灵魂科学"
                  target="_blank" rel="noopener noreferrer"
                  className="mt-2 inline-block text-xs text-slate-500 hover:underline"
                >
                  查看全部 →
                </a>

                <div className="absolute right-2 bottom-2 w-14 h-14 opacity-30 pointer-events-none select-none">
                  <Image src="/images/feather-pen.png" alt="" fill sizes="56px" className="object-contain" />
                </div>
              </div>

              {/* 月度深文系列 */}
              <div className="relative rounded-xl bg-white/50 backdrop-blur p-4 md:p-5 shadow-sm border border-black/5 overflow-hidden">
                <div className="flex items-center gap-2">
                  <span className="h-4 w-1 rounded bg-gradient-to-b from-emerald-400 to-blue-400" aria-hidden="true"></span>
                  <p className="text-xs uppercase tracking-wider text-slate-500">月度深文 · 系列</p>
                </div>
                <a
                  href="https://fatescope.substack.com/p/d3f"
                  target="_blank" rel="noopener noreferrer"
                  className="mt-1 block text-slate-900 font-medium leading-6 hover:underline"
                >
                  灵魂月记 × 我走过的黑夜 (Dark)
                </a>
                <p className="text-xs text-slate-500 mt-1">更新于：2025-07-28</p>
                <a
                  href="https://fatescope.substack.com/tag/月度深文"
                  target="_blank" rel="noopener noreferrer"
                  className="mt-2 inline-block text-xs text-slate-500 hover:underline"
                >
                  查看全部 →
                </a>

                {/* 羽毛笔水印（装饰） */}
                <div className="absolute right-2 bottom-2 w-14 h-14 opacity-80 pointer-events-none select-none">
                  <Image
                    src="/images/feather-pen.png"   // 放在 public/ 下的路径
                    alt="feather watermark"
                    fill                               // 让图片自适应容器
                    sizes="56px"
                    className="object-contain"
                    priority={false}
                  />
                </div>
              </div>
            </div>
          </div>
        </GlassCard>
      </section>

      {/* About & Collaborations */}
      <section id="about" className="py-12 scroll-mt-24">
        <GlassCard tint="sky" className="relative overflow-hidden">
          <div className="grid md:grid-cols-12 md:gap-12 gap-6 items-start">
            {/* 左：头像 + 简介 */}
            <div className="md:col-span-7 space-y-6">
              {/* 标题 */}
              <div className="space-y-3">
                <h2
                  className="
                    text-[28px] md:text-[34px] font-semibold tracking-tight text-slate-900
                    [text-shadow:0.8px_0.8px_0_rgba(15,23,42,.18),_-0.6px_-0.6px_0_rgba(255,255,255,.55)]
                  "
                >
                  About & Collaborations
                </h2>
                <span className="mt-2 block h-[2px] w-10 rounded brand-line-cool" />
              </div>

              {/* 头像 + 摘要（无头像可删除整个头像块） */}
              <div className="flex items-start gap-4">
                <div
                  className="
                    relative size-16 md:size-20 rounded-full overflow-hidden
                    ring-2 ring-emerald-300/60 bg-gradient-to-tr from-emerald-100 via-sky-100 to-amber-100
                  "
                  aria-hidden="true"
                >
                  {/* <img src="/images/avatar.jpg" alt="Francis" className="w-full h-full object-cover" /> */}
                </div>

                <p className="flex-1 text-slate-700 leading-7">
                  I'm <span className="font-medium">Francis</span>, focus on the intersection of
                  <span className="font-medium">「Astrology × AI × Creation」</span>
                  With a background in cloud computing and automation (AWS / Terraform / containerization / CI/CD), I’m now building an <span className="font-medium">Independent Astrology Engine + AI + Cloud App
                  </span>.
                  My intention is to guide you with <span className="font-medium">clarity and gentleness</span> so that at life’s key turning points, you can truly see yourself and make choices aligned with your soul.
                </p>
              </div>

              {/* 社交/入口 */}
              <div className="flex flex-wrap gap-2">
                <Tag href="https://fatescope.substack.com">Substack</Tag>
                <Tag href="https://instagram.com/your_photo">Photography Instagram</Tag>
                <Tag href="https://instagram.com/your_app" >App Instagram</Tag>
                <Tag href="https://fatescope.app" >Fatescope App</Tag>
              </div>

              {/* CTA */}
              <div className="flex flex-wrap items-center gap-3">
                <Button href="mailto:contact@fatescope.com" variant="primary" size="md" aria-label="给 Francis 发邮件">
                  Email
                </Button>
                <Button href="https://forms.gle/your-form" variant="secondary" size="md" rel="noopener noreferrer" aria-label="填写合作表单">
                  Let’s Collaborate
                </Button>
                <a
                  href="mailto:contact@fatescope.com"
                  className="inline-flex items-center gap-2 text-[15px] text-slate-600 hover:text-slate-900 underline-offset-2 hover:underline"
                  aria-label="contact@fatescope.com"
                >
                  <span aria-hidden>📧</span>
                  <span>contact@fatescope.com</span>
                </a>
              </div>
            </div>

            {/* 右：合作方向 + 技术栈 */}
            <div className="md:col-span-5 space-y-4">
              <div className="rounded-xl bg-white/50 backdrop-blur p-4 md:p-5 shadow-sm border border-black/5">
                <h3 className="font-semibold text-slate-900">Open to</h3>
                <ul className="mt-2 space-y-1.5 text-slate-700 text-[15px] leading-6">
                  <li>• Fate & Spirituality apps and tools (Independent engine + Intelligent interpretation)</li>
                  <li>• Cloud Deployment & Engineering (AWS / Terraform / CI/CD / Containerization)</li>
                  <li>• Content Creation — Writing × Photography × Healing</li>
                  <li>• Cross-Disciplinary Projects Blending Technology and Art</li>
                </ul>
              </div>

              <div className="rounded-xl bg-white/50 backdrop-blur p-4 md:p-5 shadow-sm border border-black/5">
                <h3 className="font-semibold text-slate-900">Tech Stack</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  <Badge>AWS</Badge>
                  <Badge>Azure</Badge>
                  <Badge>Python</Badge>
                  <Badge>Java</Badge>
                  <Badge>Terraform</Badge>
                  <Badge>CI/CD</Badge>
                  <Badge>Docker</Badge>
                  <Badge>Next.js</Badge>
                  <Badge>TypeScript</Badge>
                  <Badge>React</Badge>
                  <Badge>Tailwind</Badge>
                  <Badge>API</Badge>
                </div>
                {/* 可选：当前状态/节奏 */}
                {/* <p className="mt-3 text-[13px] text-slate-500">
                  当前接受远程协作；每周固定时间段回复合作邮件。
                </p> */}
              </div>
            </div>
          </div>
        </GlassCard>
      </section>

      {/* Timeline (Past=Gray, Present=Glow, Future=Color) */}
      <section id="timeline" className="py-12 scroll-mt-24">
        <GlassCard tint="emerald" className="relative overflow-hidden">
          <div className="grid md:grid-cols-12 gap-6">
            {/* 左侧标题 */}
            <div className="md:col-span-3">
              <h2 className="text-[22px] md:text-[26px] font-semibold tracking-tight text-slate-900">
                Timeline
              </h2>
              <span className="mt-2 block h-[2px] w-10 rounded brand-line-cool" />
              <p className="mt-3 text-slate-600 text-[15px] leading-6">
                一些关键节点与选择，为什么走到这里。
              </p>
            </div>

            {/* 右侧时间线 */}
            <div className="md:col-span-9">
              <ol className="relative border-l border-slate-200/70 pl-8 space-y-8">
                {[
                  { year: "2014–2018", title: "大学阶段 · 网络安全", desc: "系统学习网络攻防与信息安全，为后续工程化与云端实践打下底层能力。" },
                  { year: "2019", title: "开始系统化学习 CS", desc: "以 Python / Java / Shell 为主，建立工程思维与自动化意识。" },
                  { year: "2022", title: "进入云计算与自动化", desc: "以 AWS、Terraform、容器化与 CI/CD 为核心，沉淀可复用的工程实践。" },
                  { year: "2023", title: "启动 Side Projects", desc: "将工程栈与创作结合，探索「命理 × AI × 文字 × 摄影」的表达边界。" },
                  { year: "2024", title: "Fatescope App 雏形", desc: "自研命理引擎 + AI 解读，强调「温柔而清晰」的指引体验。" },
                  { year: "2025", title: "独立产品与频道上线", desc: "建立个人网站，开发独立命理引擎 Alpha 并开设疗愈文字频道。" },
                ].map((item, idx) => {
                  const now = new Date().getFullYear();
                  // 解析年份：单年或“2014–2018”区间，取末尾年用于时间判断
                  const match = String(item.year).match(/(\d{4})(?:[–-](\d{4}))?/);
                  const start = match ? Number(match[1]) : now;
                  const end = match && match[2] ? Number(match[2]) : start;

                  let state: "past" | "present" | "future";
                  if (end < now) state = "past";
                  else if (start <= now && end >= now) state = "present";
                  else state = "future";

                  const dotClass =
                    state === "past"
                      ? "brand-dot-muted ring-1 ring-white/70 shadow-sm"
                      : state === "present"
                        ? "brand-line-warm ring-2 ring-white shadow-[0_0_12px_rgba(56,189,248,0.35)]"
                        : "brand-line-warm ring-2 ring-white shadow-md";

                  return (
                    <li key={idx} className="relative pl-6 md:pl-7">
                      {/* 渐变圆点 */}
                      <span
                        className={`
                    pointer-events-none
                    absolute left-0 top-[0.95em] -translate-x-1/2 -translate-y-1/2
                    h-3.5 w-3.5 rounded-full ${dotClass}
                  `}
                      />
                      {/* 当前年：柔和的脉动光圈（可删） */}
                      {state === "present" && (
                        <span
                          className="
                      pointer-events-none
                      absolute left-0 top-[0.95em] -translate-x-1/2 -translate-y-1/2
                      h-3.5 w-3.5 rounded-full
                      animate-ping opacity-30
                      brand-line-cool
                    "
                        />
                      )}

                      <time className="text-xs uppercase tracking-wider text-slate-500">
                        {item.year}
                      </time>
                      <h3 className="mt-1 font-medium text-slate-900">{item.title}</h3>
                      <p className="mt-1 text-[15px] leading-6 text-slate-700">{item.desc}</p>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </GlassCard>
      </section>





      {/* Terminal-style Changelog (Digest) */}
      <TerminalChangelogDigest count={4} />

      {/* Footer Colophon（单层布局） */}
      <section id="colophon" className="py-6">
        <GlassCard tint="emerald" className="relative overflow-hidden">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-2 text-sm text-slate-700">
            {/* 左侧：技术栈 + GitHub */}
            <span className="text-xs uppercase tracking-wider text-slate-500">Built with</span>
            <Badge>Next.js</Badge>
            <Badge>TypeScript</Badge>
            <Badge>React</Badge>
            <Badge>Tailwind</Badge>
            <Badge>AWS</Badge>
            <Badge>Terraform</Badge>
            <Badge>Docker</Badge>
            <Badge>CI/CD</Badge>
            <span className="mx-2 text-slate-400">·</span>
            <a
              href="https://github.com/你的仓库" // ← 换成你的链接
              className="underline decoration-slate-300 hover:text-slate-900"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>

            {/* 右侧：同一层，靠右对齐 */}
            <nav className="ml-auto flex items-center gap-4 text-xs">
              <a href="/changelog" className="hover:text-slate-800">Changelog</a>
              <a href="#top" className="hover:text-slate-800" aria-label="Back to top">Back to top</a>
            </nav>
          </div>
        </GlassCard>
      </section>


      <Lightbox images={photos} />
    </main>
  );
}
