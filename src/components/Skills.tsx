import { skillGroups } from "@/data/content";
import { Container, SectionHead } from "@/components/ui";

export function Skills() {
  return (
    <section id="skills" className="py-[var(--section-gap)]">
      <Container>
        <SectionHead
          index="05"
          label="Skills"
          title="Tools I reach for"
        />

        <div className="divide-y divide-line border-y border-line">
          {skillGroups.map((group) => (
            <div
              key={group.id}
              className="grid gap-3 py-6 sm:grid-cols-[140px_1fr] sm:gap-8"
            >
              <p className="mono-label pt-1">{group.label}</p>
              <p className="font-mono text-sm leading-7 text-fg-muted tracking-wide">
                {group.skills.join("  ·  ")}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
