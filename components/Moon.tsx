// components/Moon.tsx
export default function Moon({
  className = "",
  opacity = 0.85,
}: { className?: string; opacity?: number }) {
  return (
    <svg
      viewBox="0 0 220 220"
      className={className}
      aria-hidden
      style={{ opacity }}
    >
      <defs>
        {/* 柔和的月面渐变 */}
        <radialGradient id="m1" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.95)" />
          <stop offset="65%" stopColor="rgba(203,213,225,0.8)" />
          <stop offset="100%" stopColor="rgba(148,163,184,0.6)" />
        </radialGradient>
        {/* 月晕光 */}
        <radialGradient id="halo" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stopColor="rgba(148,197,255,0.35)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>

      {/* 月晕 */}
      <circle cx="110" cy="110" r="100" fill="url(#halo)" />
      {/* 月面 */}
      <circle cx="110" cy="110" r="78" fill="url(#m1)" />

      {/* 几个淡淡的“陨石坑” */}
      <g fill="rgba(100,116,139,0.25)">
        <circle cx="85" cy="95" r="8" />
        <circle cx="135" cy="120" r="6" />
        <circle cx="120" cy="80" r="5" />
        <circle cx="90" cy="135" r="6" />
      </g>
    </svg>
  );
}
