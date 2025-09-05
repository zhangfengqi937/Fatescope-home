// app/page.tsx

import Lightbox from "../../components/Lightbox";
import ClientGallery from "../../components/ClientGallery";
import HeroAurora from "../../components/HeroAurora";
import GlassCard from "../../components/GlassCard";
import Button from "@/components/Button";
import Image from "next/image";
import { Tag } from "@/components/Tag";
import { Badge } from "@/components/Badge";

import { NotebookPen, Camera, AppWindow, Globe, Mail } from "lucide-react";
import InstagramBrandIcon from "@/components/InstagramBrandIcon";

import TerminalChangelogDigest from '@/components/TerminalChangelogDigest';


const iconCls = "h-4 w-4 mr-1.5 translate-y-[1px] opacity-80";

const photos = [
  "/images/17.jpg",
  "/images/01.jpg", "/images/02.jpg", "/images/03.jpg", "/images/04.jpg",
  "/images/05.jpg", "/images/06.jpg", "/images/07.jpg", "/images/08.jpg",
  "/images/09.jpg", "/images/10.jpg", "/images/11.jpg", "/images/12.jpg",
  "/images/13.jpg", "/images/14.jpg", "/images/15.jpg", "/images/16.jpg",
];

export default function Home() {

  return (

    <main className="max-w-6xl mx-auto px-6">
      {/* 1) Hero（渐变 + 可选淡背景图） */}
      <HeroAurora />

      {/* App */}
      <section id="app" className="py-14">
        <GlassCard
          tint="emerald"
          className="relative overflow-hidden grid grid-cols-1 md:grid-cols-4 md:gap-12 md:items-center"
        >
          {/* 左列：文字 75% */}
          <div className="md:col-span-3 space-y-6">
            <div className="space-y-3">
              <h2 className="text-[28px] md:text-[34px] font-semibold tracking-tight text-slate-900
          [text-shadow:0.8px_0.8px_0_rgba(15,23,42,.18),_-0.6px_-0.6px_0_rgba(255,255,255,.55)]">
                Fatescope App
              </h2>
              <span className="block h-[2px] w-10 rounded brand-line-warm" />
            </div>
            <p className="text-base md:text-lg text-slate-700 leading-8">
              你的人生地图 × 灵魂故事 × 私人运势。
              不仅是命理工具，而是陪伴你走过关键时刻的智慧之光。
            </p>


            {/* 技术基石 */}
            <h6 className="mt-6 text-[15px] font-medium text-slate-800">技术基石</h6>
            <ul className="text-base text-slate-700 list-disc ml-5 space-y-2 leading-7">
              <li>自研命理引擎 × 智能解读 —— 从零构建，只为更懂你（持续打磨）</li>
              <li>云端架构 —— 稳定、安全、持续进化（AWS / Terraform / 容器化 / CI/CD）</li>
            </ul>

            {/* 已上线功能 */}
            <h6 className="mt-4 text-[15px] font-medium text-slate-800">核心功能</h6>
            <ul className="text-base text-slate-700 list-disc ml-5 space-y-2 leading-7">

            </ul>

            {/* Coming Soon             <h6 className="text-[15px] font-medium text-slate-800 mb-2 flex items-center gap-2">
              <span className="text-amber-500 text-lg">⏳</span>
              Coming Soon
            </h6>*/}

            <ul className="text-base text-slate-700 list-disc ml-5 space-y-2 leading-7">
              <li>占卜 —— 按时间占卜特定事件，让选择不再孤单</li>
              <li>灵魂故事 —— 生成你的前世今生剧本，以及与你人的灵魂羁绊</li>
              <li>私人运势报告 —— 定制阶段性趋势与方向</li>
              <li>人生蓝图 —— 人生使命、整体运势与核心课题指引</li>
              <li>流年 / 流月 / 流日运势 —— 洞察关键节点</li>
              <li>一对一深度解盘 —— 计划中的高级私人服务，提供更详细的个性化解读</li>
            </ul>


            <div className="pt-2 space-y-2">
              <h6 className="text-[16px] md:text-[18px] font-medium tracking-wide text-slate-700
          [text-shadow:0.5px_0.5px_0_rgba(15,23,42,.12),_-0.5px_-0.5px_0_rgba(255,255,255,.4)]">
                我的初衷
              </h6>
              <span className="block h-[2px] w-8 rounded brand-line-warm" />
              <p className="text-sm md:text-base text-slate-700 leading-7">
                帮助每个人找到人生的意义、方向与使命，不只是解惑，而是照亮。
              </p>
            </div>

            <div className="pt-2">
              <Button
                variant="primary"
                size="md"
                aria-label="FateScope App Coming Soon"
                disabled
              >
                Coming Soon
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

              <p className="mt-2 w-full text-slate-600 italic text-sm md:text-base text-center md:text-right leading-relaxed">
                在命运的分岔口，提供一盏灯
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
            <span className="mt-2 block h-[2px] w-10 rounded brand-line-warm" />
          </div>

          {/* 右侧“View on Glass” */}
          <a
            href="https://glass.photo/francisz937"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View on Glass"
            className="inline-flex items-center gap-1 text-sm font-medium text-slate-600
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
        <GlassCard tint="emerald" className="relative overflow-hidden">
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
                  疗愈札记
                </h2>
                <span className="block h-[2px] w-10 rounded brand-line-warm" />
              </div>

              <p className="text-base md:text-lg text-slate-700 leading-8">
                写给在人生路口迷路的你。这里有四种频率：
              </p>

              <ul className="list-disc list-inside text-slate-700 text-base leading-7 space-y-1.5">
                <li>每周短句：一句疗愈提醒，陪你在日常保持清醒</li>
                <li>与神对话：通过情绪与关系，看见自己更真实的一面（每月两篇）</li>
                <li>灵魂科学：用科学的语言，解释灵性的指引（每月两篇）</li>
                <li>月度深文：结合个人经历，探索痛苦、爱与觉醒的底层意义</li>
              </ul>

              {/* 初衷 */}
              <div className="pt-2 space-y-2">
                <h6 className="text-[16px] md:text-[18px] font-medium tracking-wide text-slate-700
    [text-shadow:0.5px_0.5px_0_rgba(15,23,42,.12),_-0.5px_-0.5px_0_rgba(255,255,255,.4)]">
                  我的初衷
                </h6>
                <span className="block h-[2px] w-8 rounded brand-line-warm" />
                <p className="text-sm md:text-base text-slate-700 leading-7">
                  帮助每个人找到人生的意义、方向与使命，不只是解惑，而是照亮。
                </p>
              </div>


              {/* 标签 */}
              <div className="flex flex-wrap gap-2 text-sm md:text-base">
                <Button as="span" variant="tag" size="sm">疗愈</Button>
                <Button as="span" variant="tag" size="sm">灵性对话</Button>
                <Button as="span" variant="tag" size="sm">灵性与科学</Button>
                <Button as="span" variant="tag" size="sm">人生洞察</Button>
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
                  免费订阅
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
        <GlassCard tint="emerald" className="relative overflow-hidden">
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
                <span className="block h-[2px] w-10 rounded brand-line-warm" />
              </div>

              {/* 头像 + 摘要 */}
              <div className="flex items-start gap-4">
                <div
                  className="
              relative size-16 md:size-20 rounded-full overflow-hidden
              ring-2 ring-emerald-300/60 bg-gradient-to-tr from-emerald-100 via-sky-100 to-amber-100
            "
                  aria-hidden="true"
                />
                <div className="flex-1 text-slate-700 leading-7 space-y-3 break-words">
                  <p>我是 <span className="font-medium">Francis</span>，专注结合
                    <span className="font-medium">「命理 × 科技 × 创作 × 疗愈」</span>
                  </p>
                  <p>
                    曾深耕云计算与自动化（AWS / Terraform / 容器化 / CI/CD），
                    并探索哲学与心理学，以理解人性与灵魂的深层结构。
                  </p>
                  <p>现在正构建 <span className="font-medium">独立命理引擎 + 智能解读</span>。</p>
                  <p>我希望以 <span className="font-medium">温柔而清晰</span> 的方式，
                    陪伴你在关键节点，看见真实的自己，并做出与灵魂频率对齐的选择。
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

            {/* 右：合作方向 + 技术栈（不变） */}
            <div className="md:col-span-5 space-y-4">
              <div className="rounded-xl bg-white/50 backdrop-blur p-4 md:p-5 shadow-sm border border-black/5">
                <h3 className="font-semibold text-slate-900">Open to</h3>
                <ul className="mt-2 space-y-1.5 text-slate-700 text-[15px] leading-6">
                  <li>• 命理 / 灵性相关应用与工具（独立引擎 + 智能解读）</li>
                  <li>• 云端部署与工程化（AWS / Terraform / CI/CD / 容器化）</li>
                  <li>• 文字 × 摄影 × 疗愈主题的内容共创</li>
                  <li>• 技术 × 艺术 × 灵性 的跨界探索</li>
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
              <span className="mt-2 block h-[2px] w-10 rounded brand-line-warm" />

              {/* 简介 */}
              <p className="mt-3 text-slate-600 text-[15px] leading-6">
                一些关键节点与选择，为什么走到这里。
              </p>

              {/* 标签说明 */}
              <p className="mt-6 text-slate-600 text-[14px] leading-6">
                <span className="inline-block w-2 h-2 rounded-full bg-sky-400 mr-2"></span>
                <strong>Tech</strong> 技术学习与工程化<br />
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 mr-2"></span>
                <strong>Healing</strong> 疗愈、文字与摄影表达<br />
                <span className="inline-block w-2 h-2 rounded-full bg-violet-400 mr-2"></span>
                <strong>Spirituality</strong> 灵性、命理与自我探索<br />
                <span className="inline-block w-2 h-2 rounded-full bg-amber-400 mr-2"></span>
                <strong>Crossover</strong> 跨界融合与表达
              </p>

              {/* 一句话愿景 */}
              <p className="mt-6 italic text-slate-500 text-[14px] leading-6">
                “探索技术与灵性如何交汇，把工程思维转化为疗愈与创造。”
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

            {/* 右侧时间线 */}
            <div className="md:col-span-9">
              <ol className="relative border-l border-slate-200/70 pl-8 space-y-8">
                {[
                  { year: "2014–2018", title: "大学阶段 · 网络安全", desc: "系统学习网络攻防与信息安全，为后续工程化与云端实践打下底层能力。", kind: "tech" },
                  { year: "2019", title: "开始系统化学习 CS", desc: "以 Python / Java / Shell 为主，建立工程思维与自动化意识。", kind: "tech" },
                  { year: "2020", title: "探索中西方命理基础", desc: "结合命理、心理学与哲学，构建独立的人生理解体系。", kind: "spiritual" },
                  { year: "2021", title: "技术与方向沉淀", desc: "并行学习计算机与命理，开始思考二者如何融合。", kind: "crossover" },
                  { year: "2022", title: "进入云计算与自动化", desc: "以 AWS、Terraform、容器化与 CI/CD 为核心，沉淀可复用的工程实践。", kind: "tech" },
                  { year: "2023", title: "启动 Side Projects", desc: "将工程栈与创作结合，探索「命理 × 文字 × 摄影」的表达边界，逐步面向疗愈与自我反思。", kind: "crossover" },
                  { year: "2024", title: "Fatescope App 雏形", desc: "自研命理引擎 + AI 解读，提出「温柔而清晰」的指引理念，并与疗愈文字结合。", kind: "crossover" },
                  { year: "2025", title: "独立产品与频道上线", desc: "建立个人网站，发布独立混合命理引擎 Alpha，并开设疗愈文字与摄影频道。", kind: "healing" },
                  { year: "未来", title: "持续探索", desc: "在「技术 × 灵性 × 创作 × 疗愈」的交汇点上，构建更广阔的共鸣与指引系统。", kind: "crossover" },
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
                        ? "brand-line-warm ring-2 ring-white shadow-[0_0_12px_rgba(56,189,248,0.35)]"
                        : "brand-line-warm ring-2 ring-white shadow-md";

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
                      {/* 灰系时间点（保留原风格） */}
                      <span
                        className={`
            pointer-events-none absolute left-0 top-[0.95em] -translate-x-1/2 -translate-y-1/2
            h-3.5 w-3.5 rounded-full ${dotClass}
          `}
                      />
                      {state === "present" && (
                        <span
                          className="pointer-events-none absolute left-0 top-[0.95em] -translate-x-1/2 -translate-y-1/2
                       h-3.5 w-3.5 rounded-full animate-ping opacity-30 brand-line-warm"
                        />
                      )}

                      <time className="block text-xs uppercase tracking-wider text-slate-500 mb-1">
                        {item.year}
                      </time>

                      {/* 标题 + 灰色标签 */}
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
