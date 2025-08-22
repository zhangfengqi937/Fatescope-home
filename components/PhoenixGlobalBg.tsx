// components/PhoenixGlobalBg.tsx
import type { CSSProperties } from "react";
import PhoenixBg from "./PhoenixBg";

type Anchor = "bottom-right" | "top-right" | "center-right";
type GlowBlend = CSSProperties["mixBlendMode"]; // e.g. 'screen' | 'lighten' | 'overlay' | 'plus-lighter' | 'normal'

type Props = {
  variant?: "warm" | "cool";
  hideOnMobile?: boolean;
  imageSrc?: string;
  imageOpacity?: number;          // 0~1
  imageClassName?: string;
  imageAnchor?: Anchor;
  fadeLeft?: boolean;             // 左侧阅读保护层
  strongMask?: boolean;           // 强掩膜（可能裁尾部）
  glowTail?: boolean;             // 尾焰柔光（双层）
  glowStyle?: CSSProperties;      // ★ 精准定位：{ right:'4%', bottom:'16%' }，也可写 width/height
  glowScale?: number;             // ★ 整体放大光晕（默认1）
  glowBlend?: GlowBlend;          // ★ 混合模式：'screen' | 'lighten' | 'overlay' | 'plus-lighter' | ...
  grain?: boolean;                // 颗粒层（内嵌SVG，避免404）
  grainOpacity?: number;          // 0~1
  className?: string;
};

export default function PhoenixGlobalBg({
  variant = "cool",
  hideOnMobile = false,
  imageSrc,
  imageOpacity = 0.16,
  imageClassName = "",
  imageAnchor = "center-right",
  fadeLeft = true,
  strongMask = false,
  glowTail = true,
  glowStyle = {},
  glowScale = 1,
  glowBlend = "screen",
  grain = false,
  grainOpacity = 0.03,
  className = "",
}: Props) {
  const base = "fixed inset-0 z-0 overflow-hidden pointer-events-none";

  // 锚点
  const anchorClass: Record<Anchor, string> = {
    "bottom-right": "bottom-[-8%] right-[-10%]",
    "top-right":    "top-[-8%] right-[-10%]",
    "center-right": "top-1/2 -translate-y-1/2 right-[-10%]",
  };

  // 默认光晕位置（可被 glowStyle 覆盖）
  const glowPos: Record<Anchor, string> = {
    "top-right":    "right-[9%]  bottom-[8%]",
    "bottom-right": "right-[8%]  bottom-[6%]",
    "center-right": "right-[9%]  bottom-[8%]",
  };

  // 掩膜
  const defaultMask =
    "radial-gradient(160% 150% at 72% 55%, #000 55%, transparent 100%)";
  const strongMaskVal =
    "radial-gradient(120% 110% at 82% 48%, #000 38%, transparent 100%)";

  // 内嵌SVG噪点（无需静态文件）
  const noiseSvg = `
    <svg xmlns='http://www.w3.org/2000/svg' width='128' height='128'>
      <filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/></filter>
      <rect width='100%' height='100%' filter='url(#n)' opacity='0.55'/>
    </svg>`;
  const noiseDataUri = "data:image/svg+xml;utf8," + encodeURIComponent(noiseSvg);

  return (
    <div aria-hidden className={`${base} ${className}`}>
      {/* 顶部渐隐，保证导航/标题对比 */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/55 via-white/25 to-transparent" />

      {/* 背景凤凰 */}
      {imageSrc ? (
        <img
          src={imageSrc}
          alt=""
          loading="lazy"
          className={[
            hideOnMobile ? "hidden sm:block" : "",
            "absolute select-none pointer-events-none",
            anchorClass[imageAnchor],
            "mix-blend-soft-light blur-[0.5px] md:blur-[1px]",
            "w-[58vw] max-w-[1200px] rotate-[-1.5deg]", // 保守默认，调用处可覆盖
            imageClassName,
          ].join(" ")}
          style={{
            opacity: imageOpacity,
            WebkitMaskImage: strongMask ? strongMaskVal : defaultMask,
            maskImage: strongMask ? strongMaskVal : defaultMask,
          }}
        />
      ) : (
        <div className={hideOnMobile ? "hidden sm:block" : ""}>
          <PhoenixBg variant={variant} />
        </div>
      )}

      {/* 左侧阅读保护层 */}
      {fadeLeft && (
        <div className="absolute inset-y-0 left-0 w-[40%] bg-gradient-to-r from-white/70 via-white/28 to-transparent" />
      )}

      {/* 背景淡光斑（可删） */}
      <div
        className="
          absolute -left-40 -top-20 w-[70vw] h-[70vw] rounded-full
          bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.10),transparent_65%)]
          animate-[bg-drift_18s_ease-in-out_infinite] motion-reduce:animate-none
        "
      />

      {/* 颗粒层（可选） */}
      {grain && (
        <div
          className="absolute inset-0 bg-repeat mix-blend-overlay pointer-events-none select-none"
          style={{ opacity: grainOpacity, backgroundImage: `url(${noiseDataUri})` }}
        />
      )}

      {/* ★ 尾焰双层光晕 —— 放在最顶层，保证可见 */}
      {glowTail && (
        <div
          className={[
            "absolute pointer-events-none select-none",
            glowPos[imageAnchor],
            "z-[1]",
          ].join(" ")}
          style={{
            ...glowStyle,                         // 自定义位置/大小
            transform: `translateZ(0) scale(${glowScale})`,
          }}
        >
          {/* 内圈：亮一些、小一号 */}
          <div
            className="absolute rounded-full w-[14vw] h-[14vw] md:w-[12vw] md:h-[12vw] animate-[glowStrong_7.5s_ease-in-out_infinite] motion-reduce:animate-none"
            style={{
              filter: "blur(2px)",
              mixBlendMode: glowBlend,            // 可切换 'plus-lighter' 等
              background:
                "radial-gradient(circle, rgba(147,197,253,0.66) 0%, rgba(147,197,253,0.30) 55%, transparent 70%)",
            }}
          />
          {/* 外圈：更柔的大光晕 */}
          <div
            className="absolute -inset-[20%] rounded-full animate-[glowSoft_10s_ease-in-out_infinite] motion-reduce:animate-none"
            style={{
              filter: "blur(8px)",
              mixBlendMode: glowBlend,
              background:
                "radial-gradient(circle, rgba(147,197,253,0.26) 0%, transparent 65%)",
            }}
          />
        </div>
      )}
    </div>
  );
}
