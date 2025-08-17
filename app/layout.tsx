// app/layout.tsx
import "./globals.css";
import Header from "../components/Header";
import LangGate from "../components/LangGate";
import Navbar from "@/components/Nav";

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
        {/* 背景装饰：很淡的发光色块 */}
        <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-28 left-10 h-72 w-72 rounded-full bg-white/40 blur-2xl" />
          <div className="absolute top-1/3 -right-16 h-96 w-96 rounded-full bg-sky-200/35 blur-3xl" />
          <div className="absolute -bottom-24 left-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-indigo-200/30 blur-3xl" />
        </div>

        {/* 导航：滚动后自动加浅阴影与更实的白色背景 */}

        {/* 如果 Header 是你自定义的页眉（非全站导航），保留；若已合并到 Navbar，可移除 */}
        <Header />
        <LangGate />

        {children}

        <footer className="text-center text-s text-slate-500 py-10">
          © {new Date().getFullYear()} Fatescope · Built with love and clarity.
        </footer>
      </body>
    </html>
  );
}
