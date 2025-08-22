// components/icons/InstagramBrandIcon.tsx
import type { HTMLAttributes } from "react";

/** 官方风格：渐变底 + 白色线框与镜头 */
export default function InstagramBrandIcon(
  { className = "h-4 w-4 mr-1.5 translate-y-[1px]" }: HTMLAttributes<SVGSVGElement>
) {
  const id = "igGrad"; // 如需更安全可传入后缀避免多次渲染时的重复 ID
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className}>
      <defs>
        <linearGradient id={id} x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#F58529" />
          <stop offset="30%" stopColor="#DD2A7B" />
          <stop offset="60%" stopColor="#8134AF" />
          <stop offset="100%" stopColor="#515BD4" />
        </linearGradient>
      </defs>

      {/* 渐变底色（圆角方形） */}
      <rect x="2" y="2" width="20" height="20" rx="5" fill={`url(#${id})`} />

      {/* 白色线框相机外轮廓 */}
      <rect
        x="5.2" y="5.2" width="13.6" height="13.6" rx="4"
        fill="none" stroke="white" strokeWidth="1.6"
      />

      {/* 镜头 */}
      <circle cx="12" cy="12" r="4.2" fill="none" stroke="white" strokeWidth="1.6" />

      {/* 右上小点 */}
      <circle cx="17.2" cy="6.8" r="1.1" fill="white" />
    </svg>
  );
}
