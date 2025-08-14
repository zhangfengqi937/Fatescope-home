import type { Metadata } from "next";
import "../styles/globals.css";
import { Inter } from "next/font/google";
import Nav from "@/components/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://fatescope.com"),
  title: "Fatescope — Francis Zhang",
  description:
    "Photography · Writing · Fatescope App. Cloud + AI + Independent algorithms for kinder guidance.",
  openGraph: {
    title: "Fatescope — Francis Zhang",
    description:
      "Photography · Writing · Fatescope App. Cloud + AI + Independent algorithms for kinder guidance.",
    url: "https://fatescope.com",
    type: "website",
    images: [
      { url: "/assets/og-cover.jpg", width: 1200, height: 630, alt: "Fatescope cover" },
    ],
  },
  icons: { icon: "/assets/favicon.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" className={inter.className}>
      <body>
        <div className="max-w-6xl mx-auto px-6 py-6">
          <Nav />
        </div>
        <main className="max-w-6xl mx-auto px-6">{children}</main>
        <footer className="text-center text-xs text-slate-500 py-10">
          © {new Date().getFullYear()} Fatescope · Built with love and clarity.
        </footer>
      </body>
    </html>
  );
}