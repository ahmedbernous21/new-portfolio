import { experience } from "@/data/content";
import {
  Container,
  GlassCard,
  SectionLabel,
  SectionTitle,
  Tag,
} from "@/components/ui";

export function Experience() {
  return (
    <section id="experience" className="py-[var(--section-gap)]">
      <Container>
        <div className="mb-12 max-w-2xl">
          <SectionLabel>Experience</SectionLabel>
          <SectionTitle>Professional journey</SectionTitle>
          <p className="mt-4 text-on-surface-variant leading-relaxed">
            From scaling a marketplace startup to ERP platforms and freelance
            delivery — practical full-stack work across remote teams.
          </p>
        </div>

        <div className="space-y-6">
          {experience.map((job) => (
            <GlassCard key={job.company} className="p-6 lg:p-8">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between mb-4">
                <div>
                  <h3 className="text-headline-md text-on-surface">
                    {job.company}
                  </h3>
                  <p className="text-on-surface-variant mt-1">
                    <span className="text-primary">{job.role}</span>
                    <span className="mx-2 text-outline">·</span>
                    <span className="italic">{job.type}</span>
                  </p>
                  <p className="text-sm text-outline mt-1">{job.location}</p>
                </div>
                <p className="text-label-caps text-secondary shrink-0 sm:text-right">
                  {job.period}
                </p>
              </div>

              <ul className="space-y-2 mb-5">
                {job.highlights.map((item) => (
                  <li
                    key={item}
                    className="terminal-bullet text-sm text-on-surface-variant leading-relaxed list-none"
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {job.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
