// app/page.tsx

import Lightbox from "../components/Lightbox";
import ClientGallery from "../components/ClientGallery";
import HeroAurora from "../components/HeroAurora";
import GlassCard from "../components/GlassCard";
import Button from "@/components/Button";
import Moon from "@/components/Moon";
import Sparkle from "@/components/Sparkle";
import Image from "next/image";
import { Tag } from "@/components/Tag";
import { Badge } from "@/components/Badge";

const photos = [
  "/images/01.jpg","/images/02.jpg","/images/03.jpg","/images/04.jpg",
  "/images/05.jpg","/images/06.jpg","/images/07.jpg","/images/08.jpg",
  "/images/09.jpg","/images/10.jpg","/images/11.jpg","/images/12.jpg",
  "/images/13.jpg","/images/14.jpg",
];

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-6">
      {/* 1) Hero（渐变 + 可选淡背景图） */}
      <HeroAurora />

      {/* App */}
    <section id="app" className="py-10">
      <GlassCard
        tint="emerald"
        className="relative overflow-hidden flex flex-col md:flex-row items-center md:items-start"
      >
        {/* 左侧文字 */}
        <div className="flex-1">
          <h2
            className="text-[28px] md:text-[34px] font-semibold tracking-tight
                      bg-gradient-to-r from-slate-900 to-emerald-700
                      bg-clip-text text-transparent"
          >
            Fatescope App
          </h2>

          <p className="mt-4 text-base md:text-lg text-slate-700 leading-8">
            独立命理引擎 × AI 解读。更细的时间/方位/事件线提示，帮助你在当下做出更清晰的选择。
          </p>
          <ul className="mt-3 text-base text-slate-700 list-disc ml-5 space-y-1">
            <li>自研排盘与解释逻辑（持续打磨）</li>
            <li>云端部署（AWS / Terraform / 容器化）</li>
          </ul>
          <div className="mt-6">
            <Button
              href="https://fatescope.app"
              rel="noopener noreferrer"
              variant="primary"
              size="sm"
            >
              Open App
            </Button>
          </div>
        </div>

        {/* 右侧：灵性几何（星云 + 螺旋 + 轨道） */}
        <div className="md:w-3/12 w-full mt-8 md:mt-0 md:ml-10 flex flex-col items-center justify-center">
          <svg
            viewBox="0 0 240 240"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Cosmic mission glyph"
            className="w-48 h-48 drop-shadow-sm"
          >
            <defs>
              {/* 星云渐变 */}
              <radialGradient id="nebula" cx="50%" cy="45%" r="60%">
                <stop offset="0%" stopColor="#a7f3d0" stopOpacity="0.95" />
                <stop offset="45%" stopColor="#60a5fa" stopOpacity="0.55" />
                <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.15" />
              </radialGradient>

              {/* 螺旋与轨道描边渐变 */}
              <linearGradient id="orbitStroke" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#34d399" />
                <stop offset="50%" stopColor="#60a5fa" />
                <stop offset="100%" stopColor="#fbbf24" />
              </linearGradient>

              {/* 微光滤镜 */}
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="2.2" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              {/* 星点形状 */}
              <symbol id="star" viewBox="0 0 20 20">
                <path
                  d="M10 0 L12 8 L20 10 L12 12 L10 20 L8 12 L0 10 L8 8 Z"
                  fill="white"
                />
              </symbol>
            </defs>

            {/* 星云主体 */}
            <g filter="url(#glow)">
              <ellipse cx="120" cy="120" rx="82" ry="70" fill="url(#nebula)" />
            </g>

            {/* 轨道（轻盈） */}
            <g opacity="0.45">
              <ellipse
                cx="120"
                cy="120"
                rx="92"
                ry="58"
                fill="none"
                stroke="url(#orbitStroke)"
                strokeWidth="1.2"
              />
              <ellipse
                cx="120"
                cy="120"
                rx="66"
                ry="40"
                fill="none"
                stroke="url(#orbitStroke)"
                strokeWidth="1.1"
              />
            </g>

            {/* 黄金螺旋（使命/路径） */}
            <path
              d="
                M120,120
                m0,-70
                a70,70 0 1,1 -70,70
                c0,24 19,43 43,43
                c24,0 43,-19 43,-43
                c0,-16 -13,-29 -29,-29
                c-16,0 -29,13 -29,29
                c0,10 8,18 18,18
              "
              fill="none"
              stroke="url(#orbitStroke)"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.85"
              filter="url(#glow)"
            />

            {/* 星点（少量，提气） */}
            <use href="#star" x="58" y="68" width="8" height="8" opacity="0.9" />
            <use href="#star" x="182" y="94" width="6" height="6" opacity="0.8" />
            <use href="#star" x="150" y="168" width="7" height="7" opacity="0.85" />
            <circle cx="95" cy="170" r="2.2" fill="#ffffff" opacity="0.9" />
            <circle cx="200" cy="130" r="1.8" fill="#ffffff" opacity="0.8" />
          </svg>

          {/* tagline */}
          <p className="mt-1 text-right text-slate-600 italic text-sm md:text-base">
            在命运的分岔口，提供一盏灯
          </p>
        </div>
      </GlassCard>
    </section>


      {/* Gallery */}
      <section id="gallery" className="py-8">
        {/* 标题容器（暖色渐变 + 下划线 + 星星点缀） */}
        <div className="relative inline-block mb-5">
          <h2
            className="
              text-[28px] md:text-[34px] font-semibold tracking-tight
              bg-gradient-to-r from-amber-700 via-lime-700 to-emerald-700
              bg-clip-text text-transparent
              [text-shadow:0_1px_0_rgba(255,255,255,0.35)]
            "
          >
            Selected moments
          </h2>

          {/* 暖色渐变下划线 */}
          <span
            className="absolute -bottom-1 left-0 h-[6px] w-28 rounded-full
                      bg-gradient-to-r from-amber-400 via-lime-400 to-emerald-400"
          />

          {/* 星星点缀（可选） */}
          <div className="absolute -top-2 -right-6">
            <Sparkle size={26} delay={600} className="absolute animate-sparkle text-sky-300 drop-shadow-[0_0_6px_rgba(125,211,252,0.9)]" style={{ right: "24%", top: "38%" }} />
          </div>
          <div className="absolute -top-3 left-[-12px]">
            <Sparkle size={26} delay={600} className="absolute animate-sparkle text-sky-300 drop-shadow-[0_0_6px_rgba(125,211,252,0.9)]" style={{ right: "24%", top: "38%" , opacity: 5}} />
          </div>
        </div>

        <ClientGallery photos={photos} />
      </section>



      {/* Substack */}
<section id="substack" className="py-10">
  <GlassCard tint="amber" className="relative overflow-hidden">
    <div className="grid md:grid-cols-12 gap-6 items-center">
      {/* 左侧文案 */}
      <div className="md:col-span-7">
        <h2 className="text-3xl md:text-4xl font-semibold">Substack</h2>
        <p className="mt-4 text-base md:text-lg text-slate-700 leading-8">
          写给迷路的人：关于恐惧与选择、关系里的镜子，以及如何把觉察落实到行动。
          每周一篇短文，偶有长文。
        </p>

        {/* 标签 */}
        <div className="mt-3 flex flex-wrap gap-2">
          <Tag href="https://fatescope.substack.com/tag/与神对话">与神对话</Tag>
          <Tag href="https://fatescope.substack.com/tag/灵魂科学">灵魂科学</Tag>
          <Tag href="https://fatescope.substack.com/tag/疗愈">疗愈</Tag>
        </div>

        {/* CTA 按钮 */}
        <div className="mt-6 flex gap-3">
          <Button
            href="https://fatescope.substack.com"
            rel="noopener noreferrer"
            variant="primary"
            size="md"
          >
            Read on Substack
          </Button>
          <Button
            href="https://fatescope.substack.com/subscribe"
            rel="noopener noreferrer"
            variant="secondary"
            size="md"
          >
            免费订阅
          </Button>
        </div>
      </div>

      {/* 右侧最新文章卡片 */}
      <div className="md:col-span-5">
        <div className="relative rounded-xl bg-white/50 backdrop-blur p-4 shadow-sm border border-black/5 overflow-hidden">
          {/* 最新标题 + 渐变竖线 */}
          <div className="flex items-center gap-2">
            <span className="h-4 w-1 rounded bg-gradient-to-b from-emerald-400 to-blue-400"></span>
            <p className="text-xs uppercase tracking-wider text-slate-500">
              Latest
            </p>
          </div>

          <a
            href="https://fatescope.substack.com/p/with-god-chapter-3"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 block text-slate-900 font-medium leading-6 hover:underline"
          >
            与神对话 · 三章 · 恐惧与选择
          </a>
          <p className="text-xs text-slate-500 mt-1">更新于：2025-08</p>


        {/* 羽毛笔水印（本地图片） */}
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
<section id="about" className="py-10">
  <GlassCard tint="slate" className="relative overflow-hidden">
    <div className="grid md:grid-cols-12 gap-6">
      {/* 左：头像 + 简介 */}
      <div className="md:col-span-7">
        <h2 className="text-[28px] md:text-[34px] font-semibold tracking-tight text-slate-900">
          About & Collaborations
        </h2>

        <p className="mt-3 text-slate-700 leading-7">
          我是 Francis，做「命理 × AI × 创作」。背景：云计算 / AWS / Terraform / 容器化与自动化。
          正在开发独立命理算法与 AI 解读工具，希望用温柔而清晰的方式帮助人看见自己。
        </p>

        {/* 社交/入口 */}
        <div className="mt-3 flex flex-wrap gap-2">
          <Tag href="https://fatescope.substack.com">Substack</Tag>
          <Tag href="https://instagram.com/your_photo">Photography Instagram</Tag>
          <Tag href="https://instagram.com/your_app">App Instagram</Tag>
          <Tag href="https://fatescope.app">Fatescope App</Tag>
        </div>

        {/* CTA */}
        <div className="mt-5 flex flex-wrap items-center gap-3">
          <Button href="mailto:contact@fatescope.com" variant="primary" size="sm">
            Email
          </Button>
          <Button href="https://forms.gle/your-form" variant="secondary" size="sm">
            Let’s Collaborate
          </Button>
           <a
            href="mailto:contact@fatescope.com"
            className="inline-flex items-center gap-2 text-base text-slate-600"
          >
            <span aria-hidden>📧</span>
            <span className="underline">contact@fatescope.com</span>
          </a>
        </div>
      </div>

      {/* 右：合作方向 + 技术栈 */}
      <div className="md:col-span-5">
        <div className="rounded-xl bg-white/40 backdrop-blur p-4 shadow-sm border border-black/5">
          <h3 className="font-semibold text-slate-900">Open to</h3>
          <ul className="mt-2 space-y-1 text-slate-700 text-[15px]">
            <li>• 命理 / 灵性产品的 AI 算法合作</li>
            <li>• 云端部署（AWS / Terraform / CI/CD）</li>
            <li>• 文字 × 摄影 × 治愈主题共创</li>
          </ul>

          <h3 className="mt-4 font-semibold text-slate-900">Tech Stack</h3>
          <div className="mt-2 flex flex-wrap gap-2">
            <Badge>AWS</Badge>
            <Badge>CI/CD</Badge>
            <Badge>Terraform</Badge>
            <Badge>Docker</Badge>
            <Badge>Next.js</Badge>
            <Badge>Python</Badge>
            <Badge>API</Badge>
          </div>
        </div>
      </div>
    </div>
  </GlassCard>
</section>

      <Lightbox images={photos} />
    </main>
  );
}
