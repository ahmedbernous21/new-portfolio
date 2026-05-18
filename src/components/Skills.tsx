import { skillGroups } from "@/data/content";
import {
  Container,
  GlassCard,
  SectionLabel,
  SectionTitle,
  Tag,
} from "@/components/ui";

export function Skills() {
  return (
    <section id="skills" className="py-[var(--section-gap)]">
      <Container>
        <div className="mb-12 max-w-2xl">
          <SectionLabel>Skills</SectionLabel>
          <SectionTitle>Technical expertise</SectionTitle>
          <p className="mt-4 text-on-surface-variant leading-relaxed">
            Full-stack capabilities from UI to deployment — built across
            startups, ERP platforms, and client projects.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {skillGroups.map((group) => (
            <GlassCard key={group.id} className="p-6">
              <h3 className="text-label-caps text-secondary mb-4">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <Tag key={skill}>{skill}</Tag>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
