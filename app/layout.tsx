// app/layout.tsx
import "./globals.css";
import Header from "../components/Header";
import LangGate from "../components/LangGate";
import PhoenixGlobalBg from "@/components/PhoenixGlobalBg";
import LanguageGate from "@/components/LanguageGate"; // 


export const metadata = {
  title: "Fatescope — Francis Zhang",
  description:
    "Photography · Writing · Fatescope App — Cloud + AI + Independent algorithms for kinder guidance.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh" className="scroll-smooth">
      <body className="relative bg-sky-100 text-slate-800 antialiased text-[17px] md:text-[18px] leading-relaxed">
        {/* 1) 全站背景（fixed，z-0） */}
        <PhoenixGlobalBg
          imageSrc="/images/phoenix-bg-3.png"
          imageOpacity={0.5}
          imageAnchor="center-right"
          strongMask={false}
          fadeLeft
          glowTail
          // 把光晕移动到更靠右下；再放大 1.6 倍；用更强的混合
          glowStyle={{ right: "4%", bottom: "16%" }}
          glowScale={1.6}
          glowBlend="plus-lighter"   // 浏览器不支持时自动退化为普通混合

          imageClassName="
    w-[58vw] max-w-[1200px]
    right-[-12%] -translate-y-1/2
    rotate-[-1.5deg] mix-blend-soft-light
  "
        />

        {/* 1.5) 左侧月亮背景 */}
        <div
          aria-hidden
          className="fixed inset-0 z-[5] pointer-events-none select-none"
        >
          <img
            src="/images/moon-left-1.png"
            alt=""
            className="
    absolute
    left-[2vw] top-[12vh]          /* 手机：仅靠左 2% 视口宽度 */
    md:left-[4vw] md:top-[14vh]    /* 平板：再往左一些 */
    lg:left-[0vw] lg:top-[10vh]    /* 桌面：保持在左上角，但可见 */
    w-[42vw] max-w-[480px]
    md:w-[36vw] lg:w-[30vw]
    opacity-70 mix-blend-soft-light
  "
          />
        </div>
        {/* 2) 导航（放在主内容之前；提高层级） */}
        <div className="relative z-30">
          <Header />
          <LangGate />
        </div>

        {/* 3) 主内容（单一 main；盖在背景之上） */}
        <main className="relative z-10">
          {children}
        </main>

        {/* 4) 页脚 */}
        <footer className="mt-8 text-center text-[13px] text-slate-500 pb-8">
          © {new Date().getFullYear()} Fatescope · Built with love and clarity.
        </footer>

        {/* 5) 语言选择弹层（首次无 cookie 才会显示）
              z-index 在组件内是 60/70，会覆盖全站并给背景磨砂 
              forceAlwaysOpen
              */}
        <LanguageGate /> 

      </body>
    </html>
  );
}
