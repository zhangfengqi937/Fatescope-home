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

import { NotebookPen, Camera, AppWindow, Globe, Mail } from "lucide-react";
import InstagramBrandIcon from "@/components/InstagramBrandIcon";

const iconCls = "h-4 w-4 mr-1.5 translate-y-[1px] opacity-80";


const photos = [
  "/images/01.jpg", "/images/02.jpg", "/images/03.jpg", "/images/04.jpg",
  "/images/05.jpg", "/images/06.jpg", "/images/07.jpg", "/images/08.jpg",
  "/images/09.jpg", "/images/10.jpg", "/images/11.jpg", "/images/12.jpg",
  "/images/13.jpg", "/images/14.jpg", "/images/15.jpg", "/images/16.jpg",
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
              Independent Hybrid astrology algorithms (East × West) Engine × AI Insight. Your life map × soul guidance × personal destiny.
              Not just astrology, but a light of wisdom that stays with you through every turning point.
            </p>

            {/* Technology Foundation */}
            <h6 className="mt-6 text-[15px] font-medium text-slate-800">Technology Foundation</h6>
            <ul className="text-base text-slate-700 list-disc ml-5 space-y-2 leading-7">
              <li>Independent Engine × Guided Interpretation — Built from the ground up, continuously refined for clarity and depth</li>
              <li>Cloud Architecture — Stable, secure, and evolving with AWS, Terraform, containerization, and CI/CD</li>
            </ul>

            {/* Current Feature */}
            <h6 className="mt-4 text-[15px] font-medium text-slate-800">Available Now</h6>
            <ul className="text-base text-slate-700 list-disc ml-5 space-y-2 leading-7">
              <li>Divination — Timely readings for specific questions, offering clarity and reassurance in key decisions</li>
            </ul>

            {/* Coming Soon */}
            <h6 className="text-[15px] font-medium text-slate-800 mb-2 flex items-center gap-2">
              <span className="text-amber-500 text-lg">⏳</span>
              Coming Soon
            </h6>
            <ul className="text-base text-slate-700 list-disc ml-5 space-y-2 leading-7">
              <li>Soul Stories — Narratives of past and present lives, and the unseen connections that shape your path</li>
              <li>Personal Forecast — Customized trends and directions to help you navigate each stage of life</li>
              <li>Life Blueprint — Guidance on your mission, overall destiny, and the lessons written into your script</li>
              <li>Annual / Monthly / Daily Flow — Insights into turning points and cycles of change</li>
              <li>One-on-One Deep Reading — Planned premium service for personalized, in-depth guidance</li>
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
          <div className="md:col-span-1 mt-8 md:mt-0 flex justify-center md:justify-end">
            <div className="w-48 md:w-72 lg:w-[32rem] md:pr-2">
              <div className="fs-halo relative aspect-square w-full">
                <Image
                  src="/images/compass.png"
                  alt="Compass for inner direction"
                  fill
                  priority
                  sizes="(min-width:1280px) 32rem, (min-width:768px) 18rem, 12rem"
                  className="
          object-contain opacity-95 brightness-110 contrast-110
          drop-shadow-[0_6px_18px_rgba(56,189,248,.25)]
          fs-glow-spin
          relative z-[1]
        "
                  draggable={false}
                />
              </div>

              <p className="mt-2 text-slate-600 italic text-sm md:text-base text-center md:text-center">
                Lighting the way at life’s crossroads
              </p>
            </div>
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

          {/* 右侧“View on Glass” */}
          <a
            href="https://glass.photo/你的Glass用户名"   // ← 换成你的Glass主页
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View on Glass"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600
             hover:text-slate-900 hover:underline focus-visible:outline-none
             focus-visible:ring-2 focus-visible:ring-emerald-400/50 rounded"
          >
            <Camera className="w-4 h-4 opacity-70" />
            View Full Collection on Glass <span aria-hidden>→</span>
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
                <div className="flex-1 text-slate-700 leading-7 space-y-4">
                  <p>
                    I'm <span className="font-medium">Francis</span>, focusing on the intersection of
                    <span className="font-medium"> “Metaphysics × Technology × Creation × Healing”</span>.
                  </p>

                  <p>
                    With a background in cloud computing and automation
                    (AWS / Terraform / containerization / CI/CD),
                    I’ve also explored philosophy and psychology to understand
                    the deeper layers of human nature and the soul.
                  </p>

                  <p>
                    I’m now building an
                    <span className="font-medium"> Independent Metaphysics Engine + Guided Interpretation</span>.
                  </p>

                  <p>
                    My intention is to walk with you in
                    <span className="font-medium"> gentleness and clarity</span>,
                    so that at life’s key crossroads,
                    you can see your truest self and make choices
                    aligned with your soul’s frequency.
                  </p>
                </div>


              </div>

              {/* 社交/入口 —— 已加 icon + data-analytics */}
              <div className="flex flex-wrap gap-2">
                <Tag
                  href="https://fatescope.substack.com"
                  aria-label="Open Healing Notes (Substack)"
                  data-analytics="about.link.substack"
                >
                  <NotebookPen className={iconCls} />
                  Healing Notes
                </Tag>

                <Tag
                  href="https://www.instagram.com/nebula.heartbeats/"
                  aria-label="Open Photography Instagram"
                  data-analytics="about.link.ig_photo"
                >
                  <InstagramBrandIcon />
                  Photography
                </Tag>

                <Tag
                  href="https://www.instagram.com/fatescope.app/"
                  aria-label="Open App Instagram"
                  data-analytics="about.link.ig_app"
                >
                  <InstagramBrandIcon />
                  App
                </Tag>

                <Tag
                  href="https://fatescope.app"
                  aria-label="Open Fatescope App"
                  data-analytics="about.link.app"
                >
                  <Globe className={iconCls} />
                  Fatescope App
                </Tag>
              </div>

              {/* CTA —— 已加 icon + data-analytics */}
              <div className="flex flex-wrap items-center gap-3">
                <Button
                  href="mailto:contact@fatescope.com"
                  variant="primary"
                  size="sm"
                  aria-label="给 Francis 发邮件"
                  data-analytics="about.cta.email_button"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Email
                </Button>

                <Button
                  href="https://forms.gle/your-form"
                  variant="secondary"
                  size="sm"
                  rel="noopener noreferrer"
                  aria-label="填写合作表单"
                  data-analytics="about.cta.collaborate_button"
                >
                  <NotebookPen className="h-4 w-4 mr-2" />
                  Let’s Collaborate
                </Button>

                <a
                  href="mailto:contact@fatescope.com"
                  className="inline-flex items-center gap-2 text-[15px] text-slate-600 hover:text-slate-900 underline-offset-2 hover:underline"
                  aria-label="contact@fatescope.com"
                  data-analytics="about.cta.email_text"
                >
                  <Mail className="h-4 w-4" aria-hidden />
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
                  <li>• Cross-disciplinary projects at the intersection of technology, art, and spirituality</li>
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
            {/* Left title & legend */}
            <div className="md:col-span-3">
              <h2 className="text-[22px] md:text-[26px] font-semibold tracking-tight text-slate-900">
                Timeline
              </h2>
              <span className="mt-2 block h-[2px] w-10 rounded brand-line-cool" />
              <p className="mt-3 text-slate-600 text-[15px] leading-6">
                Milestones and choices that led me here.
              </p>

              {/* Legend */}
              <p className="mt-6 text-slate-600 text-[14px] leading-6">
                <span className="inline-block w-2 h-2 rounded-full bg-sky-400 mr-2" />
                <strong>Tech</strong> Engineering & tooling<br />
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 mr-2" />
                <strong>Healing</strong> Writing & photography for care<br />
                <span className="inline-block w-2 h-2 rounded-full bg-violet-400 mr-2" />
                <strong>Spirituality</strong> Astrology & inner work<br />
                <span className="inline-block w-2 h-2 rounded-full bg-amber-400 mr-2" />
                <strong>Crossover</strong> Where these threads meet
              </p>

              <p className="mt-6 italic text-slate-500 text-[14px] leading-6">
                "Exploring how technology and spirituality intersect, turning engineering thinking into healing and creation."
              </p>

            </div>



            {/* Guiding Lantern — frosted + yellow glow + subtle breathing */}
            <div
              aria-hidden
              className="
    pointer-events-none select-none
    absolute bottom-6 left-2 z-[1]
    w-[120px] md:w-[200px] lg:w-[300px]
  "
            >
              <div className="relative opacity-80">
                {/* 黄色光晕：呼吸 */}
                <div
                  className="
        absolute inset-[-18%] rounded-full blur-[28px]
        bg-[radial-gradient(50%_50%_at_50%_60%,rgba(251,191,36,0.45)_0%,rgba(251,191,36,0)_80%)]
        mix-blend-screen
        motion-safe:animate-[lantern-glow_6.5s_ease-in-out_infinite]
      "
                />

                {/* 灯主体：磨砂+轻微呼吸 */}
                <img
                  src="/images/lantern.png"
                  alt=""
                  className="
        w-full mix-blend-soft-light relative z-10
        [filter:saturate(.78)_contrast(.95)_blur(.4px)]
        [mask-image:radial-gradient(115%_115%_at_50%_55%,#000_70%,transparent_100%)]
        [mask-mode:alpha]
        motion-safe:animate-[lantern-breathe_5.8s_ease-in-out_infinite]
      "
                />

              </div>
            </div>

            {/* Right timeline */}
            <div className="md:col-span-9">
              <ol className="relative border-l border-slate-200/70 pl-8 space-y-8">
                {[
                  {
                    year: "2014–2018",
                    title: "University · Network Security",
                    desc:
                      "Studied network defense and information security—groundwork for later engineering and cloud work.",
                    kind: "tech",
                  },
                  {
                    year: "2019",
                    title: "Beginning Systematic CS Study",
                    desc:
                      "Focused on Python, Java, and Shell; built engineering habits and an eye for automation.",
                    kind: "tech",
                  },
                  {
                    year: "2020",
                    title: "Exploring Eastern and Western Astrology",
                    desc:
                      "Brought together astrology, psychology, and philosophy to form my own way of understanding life.",
                    kind: "spiritual",
                  },
                  {
                    year: "2021",
                    title: "Consolidating Skills and Direction",
                    desc:
                      "Studied CS and astrology in parallel and started thinking about how they could fit together.",
                    kind: "crossover",
                  },
                  {
                    year: "2022",
                    title: "Entering Cloud and Automation",
                    desc:
                      "Worked with AWS, Terraform, containerization, and CI/CD; built reusable, stable practices.",
                    kind: "tech",
                  },
                  {
                    year: "2023",
                    title: "Launching Side Projects",
                    desc:
                      "Blended engineering with creative work—exploring ‘Astrology × AI × Writing × Photography’ with a focus on healing and self‑reflection.",
                    kind: "crossover",
                  },
                  {
                    year: "2024",
                    title: "Fatescope App Prototype",
                    desc:
                      "Built an in‑house astrology engine with AI readings, aiming for guidance that’s gentle and clear.",
                    kind: "crossover",
                  },
                  {
                    year: "2025",
                    title: "Independent Product and Channels",
                    desc:
                      "Launched my site, released the Alpha of the hybrid astrology engine, and opened a healing writing & photo channel.",
                    kind: "healing",
                  },
                  {
                    year: "Future",
                    title: "Ongoing Exploration",
                    desc:
                      "Keep working where tech, spirituality, and creative healing meet—building tools that resonate and guide.",
                    kind: "crossover",
                  },
                ].map((item, idx) => {
                  const now = new Date().getFullYear();
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
                        ? "brand-line-cool ring-2 ring-white shadow-[0_0_12px_rgba(56,189,248,0.35)]"
                        : "brand-line-cool ring-2 ring-white shadow-md";

                  const label =
                    item.kind === "tech"
                      ? "Tech"
                      : item.kind === "healing"
                        ? "Healing"
                        : item.kind === "spiritual"
                          ? "Spirituality"
                          : "Crossover";

                  return (
                    <li key={idx} className="relative pl-6 md:pl-7">
                      {/* timeline dot */}
                      <span
                        className={`
                    pointer-events-none absolute left-0 top-[0.95em] -translate-x-1/2 -translate-y-1/2
                    h-3.5 w-3.5 rounded-full ${dotClass}
                  `}
                      />
                      {state === "present" && (
                        <span
                          className="
                      pointer-events-none absolute left-0 top-[0.95em] -translate-x-1/2 -translate-y-1/2
                      h-3.5 w-3.5 rounded-full animate-ping opacity-30 brand-line-cool
                    "
                        />
                      )}

                      <time className="block text-xs uppercase tracking-wider text-slate-500 mb-1">
                        {item.year}
                      </time>

                      {/* title + gray label */}
                      <h3 className="mt-1 font-medium text-slate-900 inline-flex items-center gap-2">
                        {item.title}
                        <span className="text-[11px] px-1.5 py-0.5 rounded-full border border-slate-300 text-slate-600 bg-slate-50">
                          {label}
                        </span>
                      </h3>

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
