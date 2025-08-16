import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        // 羽毛淡入动画
        'feather-fade': {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px) rotate(3deg) scale(0.98)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0) rotate(3deg) scale(1)',
          },
        },
        // 星星闪烁
        sparkle: {
          '0%, 100%': {
            transform: 'scale(1)',
            opacity: '1',
          },
          '50%': {
            transform: 'scale(0.92)',
            opacity: '0.65',
          },
        },
        // 星星轻微漂浮（上下浮动）
        floaty: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-3px)' },
          '100%': { transform: 'translateY(0px)' },
        },
      },
      animation: {
        'feather-fade': 'feather-fade 900ms ease-out 120ms both',
        sparkle: 'sparkle 2.6s ease-in-out infinite',
        floaty: 'floaty 6s ease-in-out infinite',
      },

      colors: {
        skyInk: {
          50: "#eef7ff",
          100: "#d9efff",
          200: "#b9e1ff",
          300: "#88cfff",
          400: "#53b6ff",
          500: "#2a9aff",
          600: "#127be7",
          700: "#0b60b6",
          800: "#0d528f",
          900: "#0f466f",
        },
      },
      boxShadow: {
    // 卡片默认 & hover
    card: "0 4px 12px rgba(15, 23, 42, 0.08)",   // (0,4,12)
    "card-hover": "0 8px 24px rgba(15, 23, 42, 0.10)",
    // 按钮的轻影
    btn: "0 2px 8px rgba(15, 23, 42, 0.10)",
    "btn-hover": "0 4px 16px rgba(15, 23, 42, 0.14)",
  },
  borderRadius: {
    card: "1.25rem",   // 统一卡片圆角
    btn: "9999px",     // 按钮统一“胶囊”造型（pill）
  },
    },
  },
  plugins: [],
};

export default config;
