// components/PhoenixGlobalBg.tsx
import PhoenixBg from "./PhoenixBg";

type Props = {
  variant?: "warm" | "cool";
  hideOnMobile?: boolean;
  className?: string;
};

export default function PhoenixGlobalBg({
  variant = "cool",
  hideOnMobile = false,
  className = "",
}: Props) {
  // 用 z-0（不要负 z），否则可能被 <body> 背景盖住
  const base = "fixed inset-0 z-0 overflow-hidden pointer-events-none";
  return (
    <div aria-hidden className={`${base} ${className}`}>
      {/* 背景底色（可与 body 的 bg-sky-100 二选一；要更淡可删掉这一层） */}
      {/* <div className="absolute inset-0 bg-[#eaf4ff]" /> */}

      {/* 柔化渐变（保留以确保对比度） */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/55 via-white/25 to-transparent" />

      {/* 右下凤凰 */}
      <div className={hideOnMobile ? "hidden sm:block" : ""}>
        <PhoenixBg variant={variant} />
      </div>

      {/* 额外淡光斑（可删） */}
      <div
        className="
          absolute -left-40 -top-20 w-[70vw] h-[70vw] rounded-full
          bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.10),transparent_65%)]
          animate-[bg-drift_18s_ease-in-out_infinite] motion-reduce:animate-none
        "
      />
    </div>
  );
}
