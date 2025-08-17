// components/FeatherPhoto.tsx
import Image from "next/image";

export default function FeatherPhoto({ className = "" }: { className?: string }) {
  return (
    <div
      className={[
        // 用 mask 做柔和的“椭圆裁剪”，避免四角硬边
        "overflow-hidden",
        "mask-[radial-gradient(120%_100%_at_55%_45%,#000_72%,transparent_100%)]",
        // Safari 兼容（Tailwind 不带 webkit 前缀时，用 style 写）
        className,
      ].join(" ")}
      style={{
        WebkitMaskImage:
          "radial-gradient(120% 100% at 55% 45%, #000 72%, transparent 100%)",
      }}
    >
      <Image
        src="/images/Feather-clear.png" // ← public/images/ 下
        alt="Feather"
        width={800}
        height={1200}
        className="
        h-[260px] lg:h-[320px] w-auto
        opacity-75
        blur-[0.8px]
        rotate-2
        drop-shadow-[0_6px_18px_rgba(15,23,42,0.10)]
        mix-blend-multiply
      "
        style={{ filter: 'saturate(0.95) hue-rotate(-6deg)' }}  // ← 就放这里

        priority
      />
    </div>
  );
}
