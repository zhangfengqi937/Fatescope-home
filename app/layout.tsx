// app/layout.tsx
import "./globals.css";
import Header from "../components/Header";
import LangGate from "../components/LangGate";
// import Navbar from "@/components/Nav"; // ← 如需使用再打开
import PhoenixGlobalBg from "@/components/PhoenixGlobalBg"; // ← 新增

export const metadata = {
  title: "Fatescope — Francis Zhang",
  description:
    "Photography · Writing · Fatescope App — Cloud + AI + Independent algorithms for kinder guidance.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // 说明：把 lang 改为 "zh" 以匹配 globals.css 里的 `html:lang(zh)` 行高规则
    <html lang="zh" className="scroll-smooth">
      <body className="relative bg-sky-100 text-slate-800 antialiased text-[17px] md:text-[18px] leading-relaxed">
        {/* ✅ 全站幽灵水印背景（冷色版）；移动端也显示，如需隐藏可传 hideOnMobile */}
        <PhoenixGlobalBg variant="cool" hideOnMobile={false} />

        {/* 导航/门控 */}
        <Header />
        <LangGate />
        {/* <Navbar /> */}

        {/* 页面内容 */}
        <main className="relative z-10">
          {children}
        </main>

        <footer className="text-center text-s text-slate-500 py-10">
          © {new Date().getFullYear()} Fatescope · Built with love and clarity.
        </footer>
      </body>
    </html>
  );
}
