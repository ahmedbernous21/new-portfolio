import { about, education } from "@/data/content";
import { Reveal } from "@/components/Reveal";
import {
  Container,
  GlassCard,
  SectionLabel,
  SectionTitle,
} from "@/components/ui";

export function About() {
  return (
    <section id="about" className="py-[var(--section-gap)]">
      <Container>
        <Reveal>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionLabel>About</SectionLabel>
            <SectionTitle className="mb-6">{about.headline}</SectionTitle>
            <p className="text-on-surface-variant leading-relaxed mb-8">
              {about.intro}
            </p>
            <GlassCard className="p-5">
              <p className="text-label-caps text-tertiary mb-2">Education</p>
              <p className="font-semibold text-on-surface">{education.degree}</p>
              <p className="text-sm text-on-surface-variant mt-1">
                {education.institution} · {education.location}
              </p>
            </GlassCard>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div>
              <h3 className="text-headline-md text-on-surface mb-4">My Journey</h3>
              <div className="space-y-4">
                {about.journey.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 40)}
                    className="text-on-surface-variant leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {about.pillars.map((pillar) => (
                <GlassCard key={pillar.title} className="p-5">
                  <h4 className="font-semibold text-on-surface mb-2">
                    {pillar.title}
                  </h4>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    {pillar.description}
                  </p>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>
        </Reveal>
      </Container>
    </section>
  );
}
