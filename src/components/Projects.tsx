import type { ReactNode } from "react";
import Image from "next/image";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import {
  featuredProjects,
  moreProjects,
  site,
  type FeaturedProject,
} from "@/data/content";
import { Container, SectionHead } from "@/components/ui";

function ProjectMark({ mark }: { mark: FeaturedProject["mark"] }) {
  if (mark.type === "image") {
    return (
      <Image
        src={mark.src}
        alt={mark.alt}
        width={56}
        height={56}
        className="h-12 w-12 rounded-[14px] md:h-14 md:w-14"
      />
    );
  }

  return (
    <span
      aria-hidden
      className="flex h-12 w-12 items-center justify-center rounded-[2px] border border-line-strong bg-bg-elevated font-mono text-[0.7rem] font-medium tracking-wider text-fg-muted md:h-14 md:w-14"
    >
      {mark.text}
    </span>
  );
}

function CaseStudy({ project }: { project: FeaturedProject }) {
  const cs = project.caseStudy;
  if (!cs) return null;

  const rows: { label: string; content: ReactNode }[] = [
    { label: "Problem", content: <p>{cs.problem}</p> },
    {
      label: "What I built",
      content: (
        <ul className="space-y-2">
          {cs.built.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-2.5 h-px w-2 shrink-0 bg-accent" aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ),
    },
  ];

  if (cs.decisions?.length) {
    rows.push({
      label: "Decisions",
      content: (
        <ul className="space-y-2">
          {cs.decisions.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-2.5 h-px w-2 shrink-0 bg-accent" aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ),
    });
  }

  if (cs.outcome) {
    rows.push({ label: "Outcome", content: <p>{cs.outcome}</p> });
  }

  return (
    <details className="group/cs mt-6">
      <summary className="inline-flex cursor-pointer list-none items-center gap-1.5 text-sm text-fg-muted transition-colors hover:text-accent [&::-webkit-details-marker]:hidden">
        <span className="group-open/cs:hidden">Read case study</span>
        <span className="hidden group-open/cs:inline">Hide case study</span>
        <ChevronDown
          size={15}
          strokeWidth={1.75}
          className="transition-transform group-open/cs:rotate-180"
          aria-hidden
        />
      </summary>

      <div className="mt-5 divide-y divide-line border-y border-line">
        {rows.map((row) => (
          <div
            key={row.label}
            className="grid gap-2 py-5 sm:grid-cols-[120px_1fr] sm:gap-8"
          >
            <p className="mono-label pt-1">{row.label}</p>
            <div className="max-w-2xl text-sm leading-relaxed text-fg-muted">
              {row.content}
            </div>
          </div>
        ))}
      </div>
    </details>
  );
}

function FeaturedRow({
  project,
  index,
}: {
  project: FeaturedProject;
  index: number;
}) {
  return (
    <article
      id={`work-${project.id}`}
      className="grid gap-5 border-t border-line py-10 last:border-b sm:grid-cols-[4.5rem_1fr] sm:gap-6 md:py-12"
    >
      <div className="flex items-center gap-4 sm:flex-col sm:items-start">
        <ProjectMark mark={project.mark} />
        <span className="mono-label !text-accent sm:mt-1">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="min-w-0">
        <p className="font-mono text-xs text-accent">
          {project.status}
        </p>
        <h3 className="mt-2 text-2xl font-semibold tracking-tight text-fg md:text-3xl">
          {project.title}
        </h3>
        <p className="mt-1 text-sm text-fg-faint">{project.kind}</p>

        <p className="mt-5 max-w-2xl leading-relaxed text-fg-muted md:text-[1.0625rem]">
          {project.summary}
        </p>

        <dl className="mt-7 grid gap-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] lg:gap-10">
          <div>
            <dt className="mono-label mb-2">Role</dt>
            <dd className="text-sm leading-relaxed text-fg">{project.role}</dd>
          </div>
          <div>
            <dt className="mono-label mb-2">Scope</dt>
            <dd>
              <ul className="flex flex-wrap gap-x-4 gap-y-1.5 text-sm text-fg-muted">
                {project.scope.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-px w-2 shrink-0 bg-accent" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        </dl>

        {project.stack?.length ? (
          <p className="mt-6 font-mono text-xs tracking-wide text-fg-faint">
            {project.stack.join("  ·  ")}
          </p>
        ) : null}

        {project.note ? (
          <p className="mt-4 text-xs text-fg-faint">{project.note}</p>
        ) : null}

        {project.links.length ? (
          <div className="mt-6 flex flex-wrap gap-3">
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-line !py-2 !text-[13px]"
              >
                {link.label}
                <ArrowUpRight size={14} strokeWidth={1.75} aria-hidden />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            ))}
          </div>
        ) : null}

        <CaseStudy project={project} />
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <section id="work" className="py-[var(--section-gap)]">
      <Container>
        <SectionHead
          index="02"
          label="Selected work"
          title="What I build and keep running"
          description="My own product, open-source work, and production systems I've built and maintained for real businesses."
        />

        <div>
          {featuredProjects.map((project, i) => (
            <FeaturedRow key={project.id} project={project} index={i} />
          ))}
        </div>

        <div className="mt-16">
          <p className="mono-label mb-4">Also built</p>
          <ul className="divide-y divide-line border-y border-line">
            {moreProjects.map((project) => (
              <li
                key={project.title}
                className="grid gap-1.5 py-5 sm:grid-cols-[13rem_1fr_auto] sm:items-baseline sm:gap-6"
              >
                <h3 className="font-medium text-fg">{project.title}</h3>
                <div>
                  <p className="text-sm leading-relaxed text-fg-muted">
                    {project.description}
                  </p>
                  <p className="mt-1.5 font-mono text-xs tracking-wide text-fg-faint">
                    {project.tags.join("  ·  ")}
                  </p>
                </div>
                {project.href ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-accent inline-flex items-center gap-1 text-sm"
                  >
                    Code
                    <ArrowUpRight size={14} strokeWidth={1.75} aria-hidden />
                    <span className="sr-only"> for {project.title} (opens in a new tab)</span>
                  </a>
                ) : (
                  <span aria-hidden />
                )}
              </li>
            ))}
          </ul>
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
