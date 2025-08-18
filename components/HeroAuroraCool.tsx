// components/HeroAuroraCool.tsx
import FeatherPhoto from "./FeatherPhoto";
import Sparkle from "./Sparkle";
import Button from "./Button";

// 冷色（蓝紫）Aurora，动画/纸感与暖色版一致
export default function HeroAuroraCool() {
  return (
    <section
      className="
        relative mt-6 isolate overflow-hidden rounded-[2rem]
        ring-1 ring-slate-900/10
        aurora-fast md:aurora-faster
        before:content-[''] before:absolute before:inset-0 before:rounded-[2rem]
        before:[box-shadow:inset_0_1px_0_rgba(255,255,255,0.6)]
      "
    >
      {/* Aurora 背景：天蓝 + 青色 + 靛紫（更冷调） */}
      <div className="absolute inset-0 -z-10">
        <div
          className="aurora-blob aurora-anim-a absolute -top-32 -left-28 w-[56rem] h-[22rem]"
          style={{ background: "radial-gradient(60rem 20rem at 50% 50%, rgba(59,130,246,0.30), transparent 60%)" }}
        />
        <div
          className="aurora-blob aurora-anim-b absolute -top-32 -right-24 w-[52rem] h-[20rem]"
          style={{ background: "radial-gradient(55rem 18rem at 50% 50%, rgba(34,211,238,0.24), transparent 60%)" }}
        />
        <div
          className="aurora-blob aurora-anim-a absolute -bottom-24 left-1/2 -translate-x-1/2 w-[60rem] h-[24rem]"
          style={{ background: "radial-gradient(60rem 22rem at 50% 50%, rgba(99,102,241,0.22), transparent 60%)" }}
        />
      </div>

      {/* 顶部高光 + 柔化遮罩 */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent z-[5]" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-transparent z-[5]" />

      {/* 签章 */}
      <div className="absolute right-4 top-4 hidden sm:block z-[15]">
        <div className="rounded-full bg-white/75 backdrop-blur px-3 py-1 text-xs ring-1 ring-slate-200 shadow-sm text-slate-800">
          Francis · 2025
        </div>
      </div>

      {/* 羽毛锚点 */}
      <div
        className="
          pointer-events-none absolute inset-y-0 right-8 md:right-16
          hidden md:flex items-center z-[12]
          animate-feather-fade
        "
        aria-hidden="true"
      >
        <FeatherPhoto />
      </div>

      {/* 星光（冷色调） */}
      <div className="pointer-events-none absolute inset-0 z-[14] hidden md:block">
        <Sparkle size={36} delay={200} className="absolute animate-sparkle mix-blend-screen" style={{ right: "11%", top: "6%" }} />
        <Sparkle size={26} delay={600} className="absolute animate-sparkle mix-blend-screen" style={{ right: "20%", top: "12%" }} />
        <Sparkle size={20} delay={950} className="absolute animate-sparkle animate-floaty mix-blend-screen" style={{ right: "16%", top: "28%" }} />
        <Sparkle size={18} delay={1300} className="absolute animate-sparkle mix-blend-screen" style={{ right: "24%", top: "38%" }} />

      </div>

      {/* 文案区 */}
      <div className="relative z-[20] px-8 md:px-16 py-10 md:py-16">
        <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs
                        bg-white/70 ring-1 ring-slate-200 backdrop-blur mb-4 aurora-shimmer text-slate-800">
          <span className="h-2 w-2 rounded-full bg-sky-500" />
          Fatescope · Cloud + AI
        </div>

        <h1
          className="
      text-[clamp(28px,6.5vw,48px)]   /* 响应式字号，避免小屏过大 */
      font-medium md:font-semibold
      tracking-[-0.01em] leading-tight
      text-slate-900
      [text-shadow:0.8px_0.8px_0_rgba(15,23,42,.18),_-0.6px_-0.6px_0_rgba(255,255,255,.55)]
      transition-[color,background] duration-300
      /* 如果想像品牌名那样：hover 再显渐变，可保留下面两行 */
      group-hover:bg-[linear-gradient(90deg,#f59e0b_0%,#34d399_58%,#93c5fd_100%)]
      group-hover:bg-clip-text group-hover:text-transparent
    "
        >
          Light in the Quiet
        </h1>

        {/* 渐变下划线 */}
        <div className="mt-2 h-1.5 w-28 rounded-full bg-gradient-to-r from-sky-400 via-cyan-400 to-indigo-400" />

        <p className="mt-4 text-lg md:text-xl text-slate-700 max-w-3xl en-leading">
          Photography · Writing · Fatescope App — Cloud + AI + Independent algorithms for kinder guidance.
        </p>

        {/* 冷色 chip（加上 text-[14px] + font-medium） */}
        <div className="mt-5 flex flex-wrap gap-2 text-sm md:text-base">
          <span className="px-3 py-1 rounded-full bg-white/70 ring-1 ring-sky-200 text-slate-700 text-[14px] font-medium">
            Independent engine
          </span>
          <span className="px-3 py-1 rounded-full bg-white/70 ring-1 ring-sky-200 text-slate-700 text-[14px] font-medium">
            Cloud + AI
          </span>
          <span className="px-3 py-1 rounded-full bg-white/70 ring-1 ring-sky-200 text-slate-700 text-[14px] font-medium">
            Kind guidance
          </span>
        </div>

        {/* CTA 按钮组 + Explore */}
        <div className="mt-8 flex flex-wrap gap-4">
          <Button
            href="https://fatescope.app"
            rel="noopener noreferrer"
            variant="primary"
            size="md"
          >
            Start your journey
          </Button>
          
          <Button
                      href="https://fatescope.substack.com"
                      rel="noopener noreferrer"
                      variant="secondary"
                      size="md"
                    >
                      Read stories
                    </Button>

          <a
            href="#gallery"
            className="inline-flex items-center gap-2 text-base text-slate-700 hover:text-slate-900"
            aria-label="Explore photos"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
              className="w-5 h-5 translate-y-px" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 9l6 6 6-6" />
            </svg>
            Explore photos
          </a>
        </div>
      </div>
    </section>
  );
}
