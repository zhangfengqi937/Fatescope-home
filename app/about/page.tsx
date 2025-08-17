export default function AboutPage() {
  return (
    <section className="py-6">
      <div className="card p-8 md:p-10 space-y-5">
        <h2 className="text-xl md:text-2xl font-semibold">About</h2>
        <p className="text-slate-600 leading-7">
          我叫 Francis，正在把「命理 × AI × 创作」落到现实。背景：云计算 / AWS / Terraform / 容器化与自动化；同时在开发独立的命理算法与 AI 解读工具 —— 希望用更温柔的方式，帮助人看见自己。<br />
          Current focus: Fatescope App · Substack · Photography.
        </p>
        <div className="text-sm">
          <p><strong>Open to:</strong> technical/creative collaborations, platform partnerships, cloud/infra optimization, data pipelines & evaluation, visual storytelling.</p>
          <p className="mt-1"><strong>Contact:</strong> <a className="link" href="mailto:contact@fatescope.com">contact@fatescope.com</a></p>
        </div>
      </div>
    </section>
  );
}