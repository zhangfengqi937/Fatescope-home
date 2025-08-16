// components/GlassCard.tsx
type Tint = "emerald" | "amber" | "indigo" | "sky" | "slate";

const tones: Record<
  Tint,
  { ring: string; from: string; halo: string; hoverRing: string }
> = {
  emerald: { ring: "ring-emerald-200/50", from: "from-emerald-50/60", halo: "shadow-emerald-900/5", hoverRing: "hover:ring-emerald-300/60" },
  amber:   { ring: "ring-amber-200/50",   from: "from-amber-50/60",   halo: "shadow-amber-900/5",   hoverRing: "hover:ring-amber-300/60" },
  indigo:  { ring: "ring-indigo-200/50",  from: "from-indigo-50/60",  halo: "shadow-indigo-900/5",  hoverRing: "hover:ring-indigo-300/60" },
  sky:     { ring: "ring-sky-200/50",     from: "from-sky-50/60",     halo: "shadow-sky-900/5",     hoverRing: "hover:ring-sky-300/60" },
  slate:   { ring: "ring-slate-200/60",   from: "from-white/70",      halo: "shadow-slate-900/10",  hoverRing: "hover:ring-slate-300/60" },
};

// 简单的 class 合并（零依赖）
function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function GlassCard({
  tint = "slate",
  className,
  children,
}: {
  tint?: Tint;
  className?: string;
  children: React.ReactNode;
}) {
  const t = tones[tint];

  return (
    <div
      className={cn(
        // 统一外观
        "relative rounded-card p-6 md:p-8",
        "bg-gradient-to-b", t.from, "to-white/40",
        "supports-[backdrop-filter]:bg-white/30 backdrop-blur-xl",
        "ring-1", t.ring,
        // 统一阴影：card / card-hover（0,4,12 -> 0,8,24）
        "shadow-card hover:shadow-card-hover",
        t.halo,
        // 统一交互：轻浮动 + 平滑过渡
        "transition-all duration-300 motion-safe:hover:-translate-y-0.5",
        t.hoverRing,

        // 顶部高光 & 1px 内侧高光（纸感）
        "before:pointer-events-none before:content-[''] before:absolute before:inset-0 before:rounded-card",
        "before:[box-shadow:inset_0_1px_0_rgba(255,255,255,0.65)]",
        "after:pointer-events-none after:content-[''] after:absolute after:inset-x-0 after:top-0 after:h-px after:rounded-t-card",
        "after:bg-gradient-to-r after:from-white/80 after:via-white/30 after:to-transparent",

        className
      )}
    >
      {children}
    </div>
  );
}
