// app/page.tsx
const photos = [
  "/images/01.jpg","/images/02.jpg","/images/03.jpg","/images/04.jpg",
  "/images/05.jpg","/images/06.jpg","/images/07.jpg","/images/08.jpg",
  "/images/09.jpg","/images/10.jpg","/images/11.jpg","/images/12.jpg",
  "/images/13.jpg","/images/14.jpg",
];

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-6">

      {/* 1) Hero */}
      <section className="py-10">
        <h1 className="text-2xl md:text-3xl font-semibold">Light in the Quiet</h1>
        <p className="mt-2 text-slate-600">
          Photography · Writing · Fatescope App — Cloud + AI + Independent algorithms for kinder guidance.
        </p>
      </section>

      {/* 2) Fatescope App Section */}
      <section id="app" className="py-6">
        <div className="bg-white rounded-2xl shadow p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-semibold">Fatescope App</h2>
          <p className="mt-3 text-slate-600 leading-7">
            独立命理引擎 × AI 解读。更细的时间/方位/事件线提示，帮助你在当下做出更清晰的选择。
          </p>
          <ul className="mt-3 text-sm text-slate-700 list-disc ml-5 space-y-1">
            <li>自研排盘与解释逻辑（持续打磨）</li>
            <li>云端部署（AWS/Terraform/容器化）</li>
          </ul>
          <div className="mt-5 flex flex-wrap gap-3 text-sm">
            <a className="px-4 py-2 rounded-2xl bg-slate-900 text-white" href="https://fatescope.app" target="_blank">Open App</a>
            <a className="px-4 py-2 rounded-2xl ring-1 ring-slate-200" href="#about">About the maker</a>
          </div>
        </div>
      </section>

      {/* 3) Gallery */}
      <section id="gallery" className="py-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">Gallery</h2>
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4">
          {photos.map((src) => (
            <div key={src} className="mb-4 break-inside-avoid">
              <img src={src} alt="" loading="lazy" className="w-full h-auto rounded-2xl shadow" />
            </div>
          ))}
        </div>
      </section>

      {/* 4) Substack 文字 Intro */}
      <section id="substack" className="py-6">
        <div className="bg-white rounded-2xl shadow p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-semibold">Substack · 与神对话</h2>
          <p className="mt-3 text-slate-600 leading-7">
            写给迷路的人：关于恐惧与选择、关系里的镜子、如何把觉察落实到行动。每周一篇短文，不定期长文。
          </p>
          <div className="mt-5 flex flex-wrap gap-3 text-sm">
            <a className="px-4 py-2 rounded-2xl bg-slate-900 text-white" href="https://substack.com/@你的账号" target="_blank">Read on Substack</a>
            <a className="px-4 py-2 rounded-2xl ring-1 ring-slate-200" href="#gallery">See recent photos</a>
          </div>
        </div>
      </section>

      {/* 5) About & Links */}
      <section id="about" className="py-10">
        <div className="bg-white rounded-2xl shadow p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-semibold">About & Collaborations</h2>
          <p className="mt-3 text-slate-600 leading-7">
            我是 Francis，做「命理 × AI × 创作」。背景：云计算 / AWS / Terraform / 容器化与自动化。
            正在开发独立命理算法与 AI 解读工具，愿用更温柔的方式帮助人看见自己。
          </p>
          <ul className="mt-4 text-sm list-disc ml-5 space-y-1 text-slate-700">
            <li>Open to: 技术/创意共创、云上部署优化、数据管道与评测、视觉叙事</li>
            <li>Contact: <a className="underline" href="mailto:hello@fatescope.com">hello@fatescope.com</a></li>
          </ul>
          <div className="mt-5 flex flex-wrap gap-3 text-sm">
            <a className="px-4 py-2 rounded-2xl bg-slate-900 text-white" href="https://fatescope.app" target="_blank">Fatescope App</a>
            <a className="px-4 py-2 rounded-2xl ring-1 ring-slate-200" href="https://substack.com/@你的账号" target="_blank">Substack</a>
            <a className="px-4 py-2 rounded-2xl ring-1 ring-slate-200" href="https://instagram.com/你的账号" target="_blank">Instagram</a>
          </div>
        </div>
      </section>

    </main>
  );
}
