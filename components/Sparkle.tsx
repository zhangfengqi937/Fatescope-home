import React from "react";

type SparkleProps = {
  className?: string;
  size?: number;
  opacity?: number;
  delay?: number;
  style?: React.CSSProperties;   // ← 新增
};

export default function Sparkle({
  className = "",
  size = 28,
  opacity = 0.8,
  delay = 0,
  style,                          // ← 新增
}: SparkleProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      aria-hidden="true"
      className={className}
      style={{ animationDelay: `${delay}ms`, opacity, ...style }}  // ← 合并外部样式
    >
      <defs>
        <linearGradient id="sp-stroke" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%"  stopColor="#B7E2F4" />
          <stop offset="100%" stopColor="#A4E8D0" />
        </linearGradient>
        <filter id="sp-glow" x="-120%" y="-120%" width="340%" height="340%">
          <feGaussianBlur stdDeviation="3.2" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g filter="url(#sp-glow)">
        <path
          d="M50 5 L57 43 L95 50 L57 57 L50 95 L43 57 L5 50 L43 43 Z"
          fill="none"
          stroke="url(#sp-stroke)"
          strokeWidth="3.2"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}
