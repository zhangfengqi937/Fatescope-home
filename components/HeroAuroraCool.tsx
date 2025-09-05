'use client';

import { useEffect, useState } from "react";
import FeatherPhoto from "./FeatherPhoto";
import Sparkle from "./Sparkle";
import Button from "./Button";

// 冷色（蓝紫）Aurora，动画/纸感与暖色版一致
export default function HeroAuroraCool() {
  const [mounted, setMounted] = useState(false);

  // 页面进入时淡入
  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

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

      {/* 羽毛：持续上下浮动（幅度更大）+ 进入时淡入；无扑闪 */}
      <div
        className={`
          absolute inset-y-0
          right-[clamp(0.5rem,2.2vw,1.25rem)] md:right-[clamp(1rem,3.5vw,3.5rem)]
          hidden md:flex items-center z-[12] select-none
          pointer-events-none
          transition-opacity duration-700 ease-out
          ${mounted ? "opacity-100" : "opacity-0"}
        `}
        aria-hidden="true"
      >
        <div
          className="
            will-change-transform md:translate-y-[2px]
            animate-[feather-float_6.5s_ease-in-out_infinite]
            motion-reduce:animate-none
          "
        >
          <FeatherPhoto />
        </div>
      </div>

      {/* 星光（冷色调）：随进入一并淡入 */}
      <div
        className={`
          pointer-events-none absolute inset-0 z-[14] hidden md:block
          transition-opacity duration-700 ease-out delay-100
          ${mounted ? "opacity-100" : "opacity-0"}
        `}
      >
        <Sparkle size={36} delay={200} className="absolute animate-sparkle mix-blend-screen" style={{ right: "9%", top: "6%" }} />
        <Sparkle size={26} delay={600} className="absolute animate-sparkle mix-blend-screen" style={{ right: "18%", top: "12%" }} />
        <Sparkle size={20} delay={950} className="absolute animate-sparkle animate-floaty mix-blend-screen" style={{ right: "14%", top: "28%" }} />
        <Sparkle size={18} delay={1300} className="absolute animate-sparkle mix-blend-screen" style={{ right: "22%", top: "38%" }} />
      </div>

      {/* 文案区：进入时淡入上浮 */}
      <div
        className={`
          relative z-[20] px-8 md:px-16 py-10 md:py-16
          transition-all duration-700 ease-out will-change-transform
          motion-reduce:transition-none motion-reduce:transform-none
          ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}
        `}
      >
        <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs
                        bg-white/70 ring-1 ring-slate-200 backdrop-blur mb-4 aurora-shimmer text-slate-800">
          <span className="h-2 w-2 rounded-full bg-sky-500" />
          Fatescope · Cloud + AI
        </div>

        <h1
          className="
            text-[clamp(28px,6.5vw,48px)]
            font-medium md:font-semibold
            tracking-[-0.01em] leading-tight
            text-slate-900
            [text-shadow:0.8px_0.8px_0_rgba(15,23,42,.18),_-0.6px_-0.6px_0_rgba(255,255,255,.55)]
            transition-[color,background] duration-300
            group-hover:bg-[linear-gradient(90deg,#f59e0b_0%,#34d399_58%,#93c5fd_100%)]
            group-hover:bg-clip-text group-hover:text-transparent
          "
        >
          Light in the Quiet
        </h1>

        {/* 渐变下划线（冷色） */}
        <div className="mt-2 h-1.5 w-28 rounded-full bg-gradient-to-r from-sky-400 via-cyan-400 to-indigo-400" />

        <p className="mt-4 text-lg md:text-xl text-slate-700 max-w-3xl en-leading">
          Photography · Writing · Fatescope App — Cloud-based Independent Astrology × Psychology & Philosophy × Spirituality, guiding healing and clarity in creation.        </p>

        {/* 冷色 chip */}
        <div className="mt-5 flex flex-wrap gap-2 text-sm md:text-base">
          <span className="px-3 py-1 rounded-full bg-white/70 ring-1 ring-sky-200 text-slate-700 text-[14px] font-medium">
            Astrology Engine
          </span>
          <span className="px-3 py-1 rounded-full bg-white/70 ring-1 ring-sky-200 text-slate-700 text-[14px] font-medium">
            Cloud
          </span>
          <span className="px-3 py-1 rounded-full bg-white/70 ring-1 ring-sky-200 text-slate-700 text-[14px] font-medium">
            Healing & Guidance
          </span>
          <span className="px-3 py-1 rounded-full bg-white/70 ring-1 ring-sky-200 text-slate-700 text-[14px] font-medium">
            Spiritual & Creation
          </span>
        </div>

        {/* CTA 按钮组 + Explore */}
        <div className="mt-8 flex flex-wrap gap-4">
          <Button href="https://fatescope.app" rel="noopener noreferrer" variant="primary" size="md">
            Start your Journey
          </Button>
          <Button href="https://fatescope.substack.com" rel="noopener noreferrer" variant="secondary" size="md">
            Read Stories
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
            Explore Photos
          </a>
        </div>
      </div>
    </section>
  );
}
