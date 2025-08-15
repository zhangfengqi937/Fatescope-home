// app/en/page.tsx
import HeroAurora from "../../components/HeroAurora";
import HeroAuroraCool from "../../components/HeroAuroraCool";
import GlassCard from "../../components/GlassCard";
import ClientGallery from "../../components/ClientGallery";
import Lightbox from "../../components/Lightbox";

const photos = [
  "/images/01.jpg","/images/02.jpg","/images/03.jpg","/images/04.jpg",
  "/images/05.jpg","/images/06.jpg","/images/07.jpg","/images/08.jpg",
  "/images/09.jpg","/images/10.jpg","/images/11.jpg","/images/12.jpg",
  "/images/13.jpg","/images/14.jpg",
];

export default function HomeEn() {
  return (
    <main className="max-w-6xl mx-auto px-6">
      {/* Hero 冷色调 */}
      <HeroAuroraCool />

      {/* App */}
      <section id="app" className="py-10">
        <GlassCard tint="indigo">
          <h2 className="text-3xl md:text-4xl font-semibold">Fatescope App</h2>
          <p className="mt-4 text-base md:text-lg text-slate-700 leading-8">
            Independent divination engine × AI readings. Finer timing / direction / event-line hints to help you choose with clarity.
          </p>
          <ul className="mt-3 text-base text-slate-700 list-disc ml-5 space-y-1">
            <li>Custom charting &amp; interpretation logic (iterating)</li>
            <li>Cloud-native deployment (AWS / Terraform / containers)</li>
          </ul>
          <div className="mt-6">
            <a
              className="px-4 py-2 rounded-2xl bg-slate-900 text-white"
              href="https://fatescope.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open App
            </a>
          </div>
        </GlassCard>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-8">
        <h2 className="text-3xl md:text-4xl font-semibold mb-5">
          Gallery
        </h2>
        <ClientGallery photos={photos} />
      </section>

      {/* Substack */}
      <section id="substack" className="py-10">
          <GlassCard tint="sky">
          <h2 className="text-3xl md:text-4xl font-semibold">Substack</h2>
          <p className="mt-4 text-base md:text-lg text-slate-700 leading-8">
            Notes on fear &amp; choice, mirrors in relationships, and grounding awareness into action. Weekly short pieces; occasional long essays.
          </p>
          <div className="mt-6">
            <a
              className="px-4 py-2 rounded-2xl bg-slate-900 text-white"
              href="https://substack.com/@fatescopewords"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read on Substack
            </a>
          </div>
        </GlassCard>
      </section>

      {/* About */}
      <section id="about" className="py-12">
        <GlassCard tint="slate">
          <h2 className="text-3xl md:text-4xl font-semibold">About &amp; Collaborations</h2>
          <p className="mt-4 text-base md:text-lg text-slate-700 leading-8">
            I’m Francis — building at the intersection of divination, AI, and storytelling. Cloud background (AWS, Terraform, containers &amp; automation). I’m developing an independent engine with AI insights to help people see themselves gently and clearly.
          </p>
          <ul className="mt-4 text-base text-slate-700 list-disc ml-5 space-y-1">
            <li>Open to: technical/creative collaborations, cloud/infra optimization, data pipelines &amp; evaluation, visual storytelling</li>
            <li>
              Contact:{" "}
              <a className="underline" href="mailto:hello@fatescope.com">
                hello@fatescope.com
              </a>
            </li>
          </ul>
        </GlassCard>
      </section>

      <Lightbox images={photos} />
    </main>
  );
}
