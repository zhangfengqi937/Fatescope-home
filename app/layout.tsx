// app/layout.tsx
import "./globals.css";
import Header from "../components/Header";
import LangGate from "../components/LangGate";

export const metadata = {
  title: "Fatescope — Francis Zhang",
  description:
    "Photography · Writing · Fatescope App — Cloud + AI + Independent algorithms for kinder guidance.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" className="scroll-smooth">
      <body className="relative bg-sky-100 text-slate-800 antialiased text-[17px] md:text-[18px] leading-relaxed">
        {/* 背景装饰：很淡的发光色块 */}
        <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-28 left-10 h-72 w-72 rounded-full bg-white/40 blur-2xl" />
          <div className="absolute top-1/3 -right-16 h-96 w-96 rounded-full bg-sky-200/35 blur-3xl" />
          <div className="absolute -bottom-24 left-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-indigo-200/30 blur-3xl" />
        </div>

        <Header />
        <LangGate />

        {children}

        <footer className="text-center text-xs text-slate-500 py-10">
          © {new Date().getFullYear()} Fatescope · Built with love and clarity.
        </footer>
      </body>
    </html>
  );
}
