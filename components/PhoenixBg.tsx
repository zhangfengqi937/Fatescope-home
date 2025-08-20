// components/PhoenixBg.tsx
type Props = {
  variant?: "warm" | "cool";
  className?: string;
};

export default function PhoenixBg({ variant = "cool", className = "" }: Props) {
  const gradId = variant === "warm" ? "phoenix-warm" : "phoenix-cool";

  const base =
    "absolute right-[-10%] bottom-[-10%] w-[125%] max-w-[1600px] " + // 稍微更大一些
    "opacity-[0.14] md:opacity-[0.16] " +                             // 提高透明度
    "mix-blend-multiply md:mix-blend-soft-light " +                   // 乘法兜底 + 大屏柔和
    "animate-[bg-drift_16s_ease-in-out_infinite] motion-reduce:animate-none " +
    "pointer-events-none select-none";

  return (
    <svg
      viewBox="0 0 800 600"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={`${base} ${className}`}
    >
      <defs>
        <linearGradient id="phoenix-cool" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="60%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#818cf8" />
        </linearGradient>
        <linearGradient id="phoenix-warm" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="55%" stopColor="#34d399" />
          <stop offset="100%" stopColor="#93c5fd" />
        </linearGradient>

        <filter id="soft" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="0.8" />
        </filter>
        <radialGradient id="fadeMask" cx="65%" cy="55%" r="60%">
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </radialGradient>
        <mask id="fade">
          <rect width="800" height="600" fill="url(#fadeMask)" />
        </mask>
      </defs>

      <g
        mask="url(#fade)"
        filter="url(#soft)"
        stroke={`url(#${gradId})`}
        fill="none"
        strokeWidth="2.2"
        strokeLinecap="round"
      >
        {/* 躯干/颈部 */}
        <path d="M430,420 C520,360 540,300 520,240 C500,190 450,170 410,190 C370,210 360,260 380,300" />
        <path d="M410,190 C450,160 500,160 540,190" strokeOpacity="0.7" />
        {/* 头冠/喙 */}
        <path d="M545,188 q15,-10 30,-6 q-12,8 -18,18" strokeOpacity="0.6" />
        <path d="M538,184 q10,-14 22,-16" strokeOpacity="0.5" />
        {/* 右翼 */}
        <path d="M430,300 C520,250 620,250 700,300" strokeOpacity="0.55" />
        <path d="M440,320 C540,280 640,290 700,330" strokeOpacity="0.45" />
        <path d="M450,340 C560,310 650,330 700,360" strokeOpacity="0.35" />
        {/* 左翼 */}
        <path d="M390,310 C320,280 260,290 210,330" strokeOpacity="0.35" />
        <path d="M395,330 C330,305 270,315 230,345" strokeOpacity="0.28" />
        {/* 尾羽 */}
        <path d="M380,420 C350,470 340,520 360,560" strokeOpacity="0.35" />
        <path d="M400,430 C370,500 380,540 410,570" strokeOpacity="0.35" />
        <path d="M420,430 C410,510 450,560 490,580" strokeOpacity="0.35" />
        <path d="M440,430 C450,520 510,560 560,570" strokeOpacity="0.30" />
      </g>
    </svg>
  );
}
