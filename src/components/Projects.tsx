import { ArrowUpRight } from "lucide-react";
import { projects, site } from "@/data/content";
import { Container, SectionHead } from "@/components/ui";

export function Projects() {
  return (
    <section id="work" className="py-[var(--section-gap)]">
      <Container>
        <SectionHead
          index="05"
          label="Selected work"
          title="Things I've built"
          description="Product work across scaffolding tools, agencies, fundraising, and marketplaces."
        />

        <div>
          {projects.map((project, i) => (
            <a
              key={project.title}
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-row group grid gap-3 px-0 py-7 sm:grid-cols-[4rem_1fr_auto] sm:items-start sm:gap-6 sm:px-3"
            >
              <span className="mono-label pt-1 text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-semibold tracking-tight text-fg transition-colors group-hover:text-accent md:text-2xl">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    size={18}
                    strokeWidth={1.75}
                    className="text-fg-faint opacity-0 transition-opacity group-hover:opacity-100"
                  />
                </div>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-fg-muted md:text-base">
                  {project.description}
                </p>
                <p className="mt-3 font-mono text-xs text-fg-faint tracking-wide">
                  {project.tags.slice(0, 5).join("  ·  ")}
                </p>
              </div>

              <span className="mono-label hidden pt-2 sm:block">
                {project.sourceUrl ? "Live + code" : "Live"}
              </span>
            </a>
          ))}
        </div>

        <p className="mt-8 text-sm text-fg-muted">
          More on{" "}
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="link-accent"
          >
            GitHub
          </a>
          .
        </p>
      </Container>
    </section>
  );
}
