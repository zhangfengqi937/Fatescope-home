// app/page.tsx

import Lightbox from "../components/Lightbox";
import ClientGallery from "../components/ClientGallery";
import HeroAurora from "../components/HeroAurora";
import GlassCard from "../components/GlassCard";


const photos = [
  "/images/01.jpg","/images/02.jpg","/images/03.jpg","/images/04.jpg",
  "/images/05.jpg","/images/06.jpg","/images/07.jpg","/images/08.jpg",
  "/images/09.jpg","/images/10.jpg","/images/11.jpg","/images/12.jpg",
  "/images/13.jpg","/images/14.jpg",
];

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-6">
      
      {/* 1) Hero（渐变 + 可选淡背景图），增加左右内边距 */}
      <HeroAurora />   {/* ← 新 Hero */}

      {/* App */}
      <section id="app" className="py-10">
        <GlassCard tint="emerald">
          <h2 className="text-3xl md:text-4xl font-semibold">Fatescope App</h2>
          <p className="mt-4 text-base md:text-lg text-slate-700 leading-8">
            独立命理引擎 × AI 解读。更细的时间/方位/事件线提示，帮助你在当下做出更清晰的选择。
          </p>
          <ul className="mt-3 text-base text-slate-700 list-disc ml-5 space-y-1">
            <li>自研排盘与解释逻辑（持续打磨）</li>
            <li>云端部署（AWS / Terraform / 容器化）</li>
          </ul>
          <div className="mt-6">
            <a className="px-4 py-2 rounded-2xl bg-slate-900 text-white" href="https://fatescope.app" target="_blank" rel="noopener noreferrer">
              Open App
            </a>
          </div>
        </GlassCard>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-8">
        <h2 className="text-3xl md:text-4xl font-semibold mb-5">
          Selected moments
        </h2>
        <ClientGallery photos={photos} />
      </section>

      {/* Substack */}
      <section id="substack" className="py-10">
        <GlassCard tint="amber">
          <h2 className="text-3xl md:text-4xl font-semibold">Substack</h2>
          <p className="mt-4 text-base md:text-lg text-slate-700 leading-8">
            写给迷路的人：关于恐惧与选择、关系里的镜子、如何把觉察落实到行动。每周一篇短文，不定期长文。
          </p>
          <div className="mt-6">
            <a className="px-4 py-2 rounded-2xl bg-slate-900 text-white" href="https://fatescope.substack.com" target="_blank" rel="noopener noreferrer">
              Read on Substack
            </a>
          </div>
        </GlassCard>
      </section>

      {/* About */}
      <section id="about" className="py-12">
        <GlassCard tint="slate">
          <h2 className="text-3xl md:text-4xl font-semibold">About & Collaborations</h2>
          <p className="mt-4 text-base md:text-lg text-slate-700 leading-8">
            我是 Francis，做「命理 × AI × 创作」。背景：云计算 / AWS / Terraform / 容器化与自动化。
            正在开发独立命理算法与 AI 解读工具，愿用更温柔的方式帮助人看见自己。
          </p>
          <ul className="mt-4 text-base text-slate-700 list-disc ml-5 space-y-1">
            <li>Open to: 技术/创意共创、云上部署优化、数据管道与评测、视觉叙事</li>
            <li>Contact: <a className="underline" href="mailto:hello@fatescope.com">hello@fatescope.com</a></li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-3 text-base">
            <a className="px-4 py-2 rounded-2xl ring-1 ring-slate-200" href="https://substack.com/@你的账号" target="_blank" rel="noopener noreferrer">Substack</a>
            <a className="px-4 py-2 rounded-2xl ring-1 ring-slate-200" href="https://instagram.com/你的账号" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a className="px-4 py-2 rounded-2xl ring-1 ring-slate-200" href="https://fatescope.app" target="_blank" rel="noopener noreferrer">Fatescope App</a>
          </div>
        </GlassCard>
      </section>
      <Lightbox images={photos} />
    </main>
  );
}