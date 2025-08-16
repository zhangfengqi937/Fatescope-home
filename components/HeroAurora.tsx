// components/HeroAurora.tsx
import FeatherPhoto from "./FeatherPhoto";
import Sparkle from "./Sparkle";

export default function HeroAurora() {
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
      {/* Aurora 背景 */}
      <div className="absolute inset-0 -z-10">
        <div
          className="aurora-blob aurora-anim-a absolute -top-32 -left-28 w-[56rem] h-[22rem]"
          style={{ background: 'radial-gradient(60rem 20rem at 50% 50%, rgba(250,204,21,0.30), transparent 60%)' }}
        />
        <div
          className="aurora-blob aurora-anim-b absolute -top-32 -right-24 w-[52rem] h-[20rem]"
          style={{ background: 'radial-gradient(55rem 18rem at 50% 50%, rgba(34,197,94,0.24), transparent 60%)' }}
        />
        <div
          className="aurora-blob aurora-anim-a absolute -bottom-24 left-1/2 -translate-x-1/2 w-[60rem] h-[24rem]"
          style={{ background: 'radial-gradient(60rem 22rem at 50% 50%, rgba(132,204,22,0.20), transparent 60%)' }}
        />
      </div>

      {/* 顶部高光线 + 遮罩 */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent z-[5]" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-transparent z-[5]" />

      {/* 右上签章 */}
      <div className="absolute right-4 top-4 hidden sm:block z-[15]">
        <div className="rounded-full bg-white/75 backdrop-blur px-3 py-1 text-xs ring-1 ring-amber-300/60 shadow-sm text-slate-800">
          Francis · 2025
        </div>
      </div>

      {/* 羽毛锚点 */}
      <div
        className="
          pointer-events-none absolute inset-y-0 right-8 md:right-16
          hidden md:flex items-center z-[12]
          animate-[featherfade_900ms_ease-out_120ms_both]
        "
        aria-hidden="true"
      >
        <FeatherPhoto />
      </div>

      {/* 星光（右侧点缀） */}
      <div className="pointer-events-none absolute inset-0 z-[14] hidden md:block">
        {/* 右上（大） */}
        <Sparkle
          size={36}
          delay={200}
          className="absolute animate-sparkle mix-blend-screen"
          style={{
          right: '11%', /* 距右侧 11% */
          top: '6%'     /* 距顶部 6% */
        }}
        />
        {/* 右上稍左（中） */}
        <Sparkle
          size={26}
          delay={600}
          className="absolute animate-sparkle mix-blend-screen"
          style={{ right: '20%', top: '12%' }}
        />
        {/* 羽毛中段（小，带漂浮） */}
        <Sparkle
          size={20}
          delay={950}
          className="absolute animate-sparkle animate-floaty mix-blend-screen"
          style={{ right: '16%', top: '28%' }}
        />
        {/* 羽毛下方（最小） */}
        <Sparkle
          size={18}
          delay={1300}
          className="absolute animate-sparkle mix-blend-screen"
          style={{ right: '24%', top: '38%' }}
        />
      </div>

      {/* 主要内容 */}
      <div className="relative z-[20] px-8 md:px-16 py-10 md:py-16">
        <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs
                        bg-white/70 ring-1 ring-amber-300/60 backdrop-blur mb-4 aurora-shimmer text-slate-800">
          <span className="h-2 w-2 rounded-full bg-amber-500" />
          Fatescope · Cloud + AI
        </div>

        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">
          Light in the Quiet
        </h1>

        <div className="mt-2 h-1.5 w-28 rounded-full bg-gradient-to-r from-amber-400 via-lime-400 to-emerald-400" />

        <p className="mt-4 text-lg md:text-xl text-slate-700 max-w-3xl">
          Photography · Writing · Fatescope App — Cloud + AI + Independent algorithms for kinder guidance.
        </p>

        <div className="mt-5 flex flex-wrap gap-2 text-sm md:text-base">
          <span className="px-3 py-1 rounded-full bg-white/70 ring-1 ring-amber-300/60">Independent engine</span>
          <span className="px-3 py-1 rounded-full bg-white/70 ring-1 ring-amber-300/60">Cloud + AI</span>
          <span className="px-3 py-1 rounded-full bg-white/70 ring-1 ring-amber-300/60">Kind guidance</span>
        </div>

        <a href="#gallery" className="inline-flex items-center gap-2 mt-7 text-base text-slate-700 hover:text-slate-900">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
               className="w-5 h-5 translate-y-px" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 9l6 6 6-6" />
          </svg>
          Explore photos
        </a>
      </div>
    </section>
  );
}
