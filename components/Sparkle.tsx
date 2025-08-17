import React from "react";

type SparkleProps = {
  className?: string;
  size?: number;
  opacity?: number;
  delay?: number;
  style?: React.CSSProperties;
};

export default function Sparkle({
  className = "",
  size = 28,
  opacity = 1,
  delay = 0,
  style,
}: SparkleProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      aria-hidden="true"
      className={className}
      style={{ animationDelay: `${delay}ms`, opacity, ...style }}
    >
      <defs>
        {/* 渐变线条：中间偏白 → 外侧主色 */}
        <linearGradient id="sp-stroke" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" /> {/* 增加白色高光 */}
          <stop offset="100%" stopColor="#7dd3fc" /> {/* sky-300 */}
        </linearGradient>

        {/* 更强的辉光效果 */}
        <filter id="sp-glow" x="-120%" y="-120%" width="340%" height="340%">
          {/* 模糊半径调大，叠加两层让光更亮 */}
          <feGaussianBlur stdDeviation="3.6" result="blur1" />
          <feGaussianBlur stdDeviation="6.0" result="blur2" />
          <feMerge>
            <feMergeNode in="blur1" />
            <feMergeNode in="blur2" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g filter="url(#sp-glow)">
        <path
          d="M50 5 L57 43 L95 50 L57 57 L50 95 L43 57 L5 50 L43 43 Z"
          fill="none"
          stroke="url(#sp-stroke)"
          strokeWidth="3.2"   // 粗一点更亮
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}
