// app/page.tsx

import Lightbox from "../components/Lightbox";
import ClientGallery from "../components/ClientGallery";
import HeroAurora from "../components/HeroAurora";
import GlassCard from "../components/GlassCard";
import Button from "@/components/Button";

const photos = [
  "/images/01.jpg","/images/02.jpg","/images/03.jpg","/images/04.jpg",
  "/images/05.jpg","/images/06.jpg","/images/07.jpg","/images/08.jpg",
  "/images/09.jpg","/images/10.jpg","/images/11.jpg","/images/12.jpg",
  "/images/13.jpg","/images/14.jpg",
];

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-6">
      {/* 1) Hero（渐变 + 可选淡背景图） */}
      <HeroAurora />

      {/* App */}
      <section id="app" className="py-10">
        <GlassCard tint="emerald">
          <h2 className="text-3xl md:text-4xl font-semibold">Fatescope App</h2>
          <p className="mt-4 text-base md:text-lg text-slate-700 leading-8 zh-leading">
            独立命理引擎 × AI 解读。更细的时间/方位/事件线提示，帮助你在当下做出更清晰的选择。
          </p>
          <ul className="mt-3 text-base text-slate-700 list-disc ml-5 space-y-1">
            <li>自研排盘与解释逻辑（持续打磨）</li>
            <li>云端部署（AWS / Terraform / 容器化）</li>
          </ul>
          <div className="mt-6">
            <Button
              href="https://fatescope.app"
              rel="noopener noreferrer"
              variant="primary"
              size="md"
            >
              Open App
            </Button>
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
          <p className="mt-4 text-base md:text-lg text-slate-700 leading-8 zh-leading">
            写给迷路的人：关于恐惧与选择、关系里的镜子、如何把觉察落实到行动。每周一篇短文，不定期长文。
          </p>
          <div className="mt-6">
            <Button
              href="https://fatescope.substack.com"
              rel="noopener noreferrer"
              variant="primary"
              size="md"
            >
              Read on Substack
            </Button>
          </div>
        </GlassCard>
      </section>

      {/* About */}
      <section id="about" className="py-12">
        <GlassCard tint="slate">
          <h2 className="text-3xl md:text-4xl font-semibold">About & Collaborations</h2>
          <p className="mt-4 text-base md:text-lg text-slate-700 leading-8 zh-leading">
            我是 Francis，做「命理 × AI × 创作」。背景：云计算 / AWS / Terraform / 容器化与自动化。
            正在开发独立命理算法与 AI 解读工具，愿用更温柔的方式帮助人看见自己。
          </p>

          {/* 次要入口 */}
          <div className="mt-6 flex flex-wrap gap-3 text-base">
            <Button href="https://substack.com/@你的账号" variant="outline" size="sm">Substack</Button>
            <Button href="https://instagram.com/你的账号" variant="outline" size="sm">Instagram</Button>
            <Button href="https://fatescope.app" variant="outline" size="sm">Fatescope App</Button>
          </div>

          {/* 底部固定 CTA：更聚焦 */}
          <div className="mt-6">
            <Button
              href="mailto:hello@fatescope.com?subject=Collaboration%20with%20Fatescope"
              variant="primary"
              size="md"
            >
              Let’s Collaborate
            </Button>
          </div>
        </GlassCard>
      </section>

      <Lightbox images={photos} />
    </main>
  );
}
