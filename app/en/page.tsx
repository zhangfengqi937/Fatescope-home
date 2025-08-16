// app/en/page.tsx
import HeroAuroraCool from "../../components/HeroAuroraCool";
import GlassCard from "../../components/GlassCard";
import ClientGallery from "../../components/ClientGallery";
import Lightbox from "../../components/Lightbox";
import Button from "@/components/Button";

const photos = [
  "/images/01.jpg","/images/02.jpg","/images/03.jpg","/images/04.jpg",
  "/images/05.jpg","/images/06.jpg","/images/07.jpg","/images/08.jpg",
  "/images/09.jpg","/images/10.jpg","/images/11.jpg","/images/12.jpg",
  "/images/13.jpg","/images/14.jpg",
];

export default function HomeEn() {
  return (
    <main className="max-w-6xl mx-auto px-6">
      {/* Hero — cool tone */}
      <HeroAuroraCool />

      {/* App */}
      <section id="app" className="py-10">
        <GlassCard tint="indigo">
          <h2 className="text-3xl md:text-4xl font-semibold">Fatescope App</h2>
          <p className="mt-4 text-base md:text-lg text-slate-700 en-leading">
            Independent divination engine × AI readings. Finer timing / direction / event-line hints to help you choose with clarity.
          </p>
          <ul className="mt-3 text-base text-slate-700 list-disc ml-5 space-y-1">
            <li>Custom charting &amp; interpretation logic (iterating)</li>
            <li>Cloud-native deployment (AWS / Terraform / containers)</li>
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
        <GlassCard tint="sky">
          <h2 className="text-3xl md:text-4xl font-semibold">Substack</h2>
          <p className="mt-4 text-base md:text-lg text-slate-700 en-leading">
            Notes on fear &amp; choice, mirrors in relationships, and grounding awareness into action. Weekly short pieces; occasional long essays.
          </p>
          <div className="mt-6">
            <Button
              href="https://substack.com/@fatescopewords"
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
          <h2 className="text-3xl md:text-4xl font-semibold">About &amp; Collaborations</h2>
          <p className="mt-4 text-base md:text-lg text-slate-700 en-leading">
            I’m Francis — building at the intersection of divination, AI, and storytelling. Cloud background (AWS, Terraform, containers &amp; automation). I’m developing an independent engine with AI insights to help people see themselves gently and clearly.
          </p>

          {/* Secondary links */}
          <div className="mt-6 flex flex-wrap gap-3 text-base">
            <Button href="https://substack.com/@fatescopewords" variant="outline" size="sm">Substack</Button>
            <Button href="https://instagram.com/your_handle" variant="outline" size="sm">Instagram</Button>
            <Button href="https://fatescope.app" variant="outline" size="sm">Fatescope App</Button>
          </div>

          {/* Bottom fixed CTA */}
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
