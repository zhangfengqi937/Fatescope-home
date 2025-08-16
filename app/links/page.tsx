export default function LinksPage() {
  return (
    <section className="py-6">
      <div className="card p-8 md:p-10">
        <h2 className="text-xl md:text-2xl font-semibold">Links</h2>
        <ul className="mt-4 space-y-3 text-sm">
          <li><a className="link" href="https://substack.com/@你的账号" target="_blank" rel="noopener">Substack · Healing & Awareness</a></li>
          <li><a className="link" href="https://instagram.com/你的账号" target="_blank" rel="noopener">Instagram · Photography</a></li>
          <li><a className="link" href="https://fatescope.app" target="_blank" rel="noopener">Fatescope App</a></li>
        </ul>
      </div>
    </section>
  );
}