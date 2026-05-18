import { ExternalLink } from "lucide-react";
import { IconGithub } from "@/components/icons";
import { projects, site } from "@/data/content";
import {
  Container,
  GhostButton,
  GlassCard,
  PrimaryButton,
  SectionLabel,
  SectionTitle,
  Tag,
} from "@/components/ui";

export function Projects() {
  return (
    <section id="projects" className="py-[var(--section-gap)]">
      <Container>
        <div className="mb-12 max-w-2xl">
          <SectionLabel>Projects</SectionLabel>
          <SectionTitle>Featured work</SectionTitle>
          <p className="mt-4 text-on-surface-variant leading-relaxed">
            Full-stack applications that demonstrate architecture, delivery, and
            real-world problem solving.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <GlassCard
              key={project.title}
              className="flex flex-col p-6 lg:p-8 overflow-hidden"
            >
              <div className="mb-4 h-1 w-16 rounded-full bg-gradient-to-r from-primary-container to-secondary-container" />
              <h3 className="text-headline-md text-on-surface mb-3">
                {project.title}
              </h3>
              <p className="text-on-surface-variant leading-relaxed mb-4 flex-1">
                {project.description}
              </p>

              <ul className="space-y-2 mb-5">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="terminal-bullet text-sm text-on-surface-variant list-none"
                  >
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 mt-auto">
                <PrimaryButton href={project.liveUrl} external>
                  <ExternalLink size={16} strokeWidth={2} />
                  Live demo
                </PrimaryButton>
                {project.sourceUrl ? (
                  <GhostButton href={project.sourceUrl} external>
                    <IconGithub width={16} height={16} />
                    Source
                  </GhostButton>
                ) : (
                  <span className="text-code text-outline self-center px-2">
                    Private repository
                  </span>
                )}
              </div>
            </GlassCard>
          ))}
        </div>

        <p className="mt-10 text-center text-on-surface-variant text-sm">
          More open source work on{" "}
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:underline"
          >
            GitHub
          </a>
        </p>
      </Container>
    </section>
  );
}
