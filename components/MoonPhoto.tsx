// components/MoonPhoto.tsx
export default function MoonPhoto({
  src = "/images/moon.png",   // 把你的图片放到 public/images/moon.png
  size = 220,                 // 月亮尺寸（像素）
  opacity = 0.9,              // 月面整体透明度
  className = "",
}: {
  src?: string;
  size?: number;
  opacity?: number;
  className?: string;
}) {
  return (
    <div
      className={`relative pointer-events-none ${className}`}
      style={{ width: size, height: size }}
      aria-hidden
    >
      {/* 月晕（暖色柔光） */}
      <div
        className="absolute inset-0 -z-10 rounded-full blur-2xl"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 50%, rgba(251,191,36,0.35), rgba(132,204,22,0.25), rgba(16,185,129,0.15), transparent 70%)",
        }}
      />
      {/* 月亮图片 */}
      <img
        src={src}
        alt=""
        width={size}
        height={size}
        className="w-full h-full object-contain drop-shadow"
        style={{ opacity }}
      />
    </div>
  );
}
