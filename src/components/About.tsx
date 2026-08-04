import { about, education } from "@/data/content";
import { Container, SectionHead } from "@/components/ui";

export function About() {
  return (
    <section id="about" className="py-[var(--section-gap)]">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHead
              index="02"
              label="About"
              title={about.headline}
            />
          </div>
          <div className="lg:col-span-7 space-y-5">
            <p className="text-lg leading-relaxed text-fg">{about.intro}</p>
            {about.journey.map((p) => (
              <p key={p.slice(0, 32)} className="leading-relaxed text-fg-muted">
                {p}
              </p>
            ))}
            <div className="border-t border-line pt-6 mt-8">
              <p className="mono-label mb-2">Education</p>
              <p className="text-fg font-medium">{education.degree}</p>
              <p className="text-sm text-fg-muted mt-1">
                {education.institution} · {education.location}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
