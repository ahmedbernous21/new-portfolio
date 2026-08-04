import { experience } from "@/data/content";
import { Container, SectionHead } from "@/components/ui";

export function Experience() {
  return (
    <section id="experience" className="py-[var(--section-gap)]">
      <Container>
        <SectionHead
          index="03"
          label="Experience"
          title="Where I've shipped"
          description="Roles across ERP platforms, marketplaces, and freelance product work."
        />

        <div className="space-y-10">
          {experience.map((job) => (
            <article key={`${job.company}-${job.period}`} className="exp-item">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-fg tracking-tight">
                    {job.company}
                  </h3>
                  <p className="mt-0.5 text-sm text-fg-muted">
                    {job.role}
                    <span className="text-fg-faint"> · {job.type}</span>
                  </p>
                </div>
                <p className="mono-label !normal-case !tracking-normal shrink-0 sm:text-right">
                  {job.period}
                </p>
              </div>
              <p className="mt-1 text-xs text-fg-faint">{job.location}</p>

              <ul className="mt-4 space-y-2">
                {job.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 text-sm leading-relaxed text-fg-muted"
                  >
                    <span className="mt-2 h-px w-2 shrink-0 bg-accent" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-4 font-mono text-xs text-fg-faint tracking-wide">
                {job.tags.join("  ·  ")}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
