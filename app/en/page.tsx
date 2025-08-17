// app/en/page.tsx
import HeroAuroraCool from "../../components/HeroAuroraCool";
import GlassCard from "../../components/GlassCard";
import ClientGallery from "../../components/ClientGallery";
import Lightbox from "../../components/Lightbox";
import Button from "@/components/Button";
import Sparkle from "@/components/Sparkle";

const photos = [
  "/images/01.jpg","/images/02.jpg","/images/03.jpg","/images/04.jpg",
  "/images/05.jpg","/images/06.jpg","/images/07.jpg","/images/08.jpg",
  "/images/09.jpg","/images/10.jpg","/images/11.jpg","/images/12.jpg",
  "/images/13.jpg","/images/14.jpg",
];

export default function HomeEn() {
  return (
    <main className="max-w-6xl mx-auto px-6">
      {/* Hero — cool tone */}
      <HeroAuroraCool />

      {/* App */}
    <section id="app" className="py-10">
      <GlassCard
        tint="sky"
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
              {/* 标题容器：星星点缀 */}
              <div className="relative inline-block mb-5">
                <h2
                  className="
                    text-[28px] md:text-[34px] font-semibold tracking-tight
                    bg-gradient-to-r from-sky-700 via-indigo-700 to-slate-900
                    bg-clip-text text-transparent
                    drop-shadow-sm
                  "
                >
                  Selected moments
                </h2>
      
                {/* 渐变下划线 */}
                <span className="absolute -bottom-1 left-0 h-[6px] w-28 rounded-full
                                bg-gradient-to-r from-sky-400 via-cyan-400 to-indigo-400"></span>
      
                {/* 星星点缀（用你现成 Sparkle 组件更一致） */}
                {/* 右上小星 */}
                <div className="absolute -top-2 -right-6">
                  <Sparkle size={26} delay={600} className="absolute animate-sparkle text-sky-300 drop-shadow-[0_0_6px_rgba(125,211,252,0.9)]" style={{ right: "24%", top: "38%" }} />
                </div>
                {/* 左上更小星 */}
                <div className="absolute -top-3 left-[-12px]">
                  <Sparkle size={26} delay={600} className="absolute animate-sparkle text-sky-300 drop-shadow-[0_0_6px_rgba(125,211,252,0.9)]" style={{ right: "24%", top: "38%" }} />
                </div>
              </div>

              <ClientGallery photos={photos} />


            </section>

      {/* Substack */}
      <section id="substack" className="py-10">
        <GlassCard tint="sky">
          <h2 className="text-3xl md:text-4xl font-semibold">Substack</h2>
          <p className="mt-4 text-base md:text-lg text-slate-700 en-leading">
            Notes on fear &amp; choice, mirrors in relationships, and grounding awareness into action. Weekly short pieces; occasional long essays.
          </p>
          <div className="mt-6">
            <Button
              href="https://substack.com/@fatescopewords"
              rel="noopener noreferrer"
              variant="primary"
              size="md"
            >
              Read on Substack
            </Button>
          </div>
        </GlassCard>
      </section>

      {/* About */}
      <section id="about" className="py-12">
        <GlassCard tint="slate">
          <h2 className="text-3xl md:text-4xl font-semibold">About &amp; Collaborations</h2>
          <p className="mt-4 text-base md:text-lg text-slate-700 en-leading">
            I’m Francis — building at the intersection of divination, AI, and storytelling. Cloud background (AWS, Terraform, containers &amp; automation). I’m developing an independent engine with AI insights to help people see themselves gently and clearly.
          </p>

          {/* Secondary links */}
          <div className="mt-6 flex flex-wrap gap-3 text-base">
                        <Button href="https://substack.com/@fatescope" variant="outline" size="sm">Substack</Button>
                        <Button href="https://instagram.com/nebula.heartbeats" variant="outline" size="sm">Photography Instagram</Button>
                        <Button href="https://instagram.com/fatescope.app" variant="outline" size="sm">App Instagram</Button>
                        <Button href="https://fatescope.app" variant="outline" size="sm">Fatescope App</Button>
          </div>

          {/* Bottom fixed CTA */}
          <div className="mt-6">
            <Button
              href="mailto:contact@fatescope.com?subject=Collaboration%20with%20Fatescope"
              variant="primary"
              size="md"
            >
              Let’s Collaborate
            </Button>
          </div>

                    {/* 新增邮箱 */}
          <p className="mt-4 text-xl text-slate-600">
            📧 Email: <a href=" " className="underline">contact@fatescope.com</a >
          </p >

        </GlassCard>
      </section>

      <Lightbox images={photos} />
    </main>
  );
}
