// components/FeatherSolid.tsx
export default function Feather({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 420 900" aria-hidden="true" className={className}>
      <defs>
        {/* 实心水彩填充：更饱满的淡蓝 */}
        <linearGradient id="fs-fill" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%"  stopColor="#A8CFE9"/>
          <stop offset="55%" stopColor="#BFDDF1"/>
          <stop offset="100%" stopColor="#DFF1FA"/>
        </linearGradient>

        {/* 羽轴 */}
        <linearGradient id="fs-rachis" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"  stopColor="#E9F4FB" />
          <stop offset="100%" stopColor="#9FC6E1" />
        </linearGradient>

        {/* 轻柔边（整体） */}
        <filter id="fs-soft" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.2" result="b"/>
          <feBlend in="SourceGraphic" in2="b" mode="normal"/>
        </filter>

        {/* 轻内阴影：避免“空心感”，只做微暗 */}
        <filter id="fs-inner" x="-10%" y="-10%" width="120%" height="120%">
          <feOffset dx="0" dy="2" />
          <feGaussianBlur stdDeviation="2.2" result="ib"/>
          <feComposite in="ib" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix type="matrix" values="
            0 0 0 0 0.28
            0 0 0 0 0.45
            0 0 0 0 0.60
            0 0 0 0.18 0" />
          <feBlend in="SourceGraphic" mode="normal"/>
        </filter>
      </defs>

      {/* 实心主体 —— 更丰满的轮廓 */}
      <path
        d="
          M210,68
          C255,120 304,205 310,296
          C316,404 276,508 226,602
          C190,668 152,735 122,820
          C170,786 214,742 262,686
          C324,613 362,523 378,446
          C394,370 376,290 343,230
          C312,174 268,134 228,104
          C218,96 211,86 210,68 Z"
        fill="url(#fs-fill)"
        filter="url(#fs-soft) url(#fs-inner)"
      />

      {/* 羽轴（细、柔，不加羽枝线） */}
      <path
        d="M206,92 C224,232 210,430 152,818"
        stroke="url(#fs-rachis)"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
        filter="url(#fs-soft)"
        opacity="0.9"
      />
    </svg>
  );
}
