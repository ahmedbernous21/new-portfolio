import { ArrowUpRight, Download } from "lucide-react";
import { metrics, site } from "@/data/content";
import { Button, Container } from "@/components/ui";
import { IconGithub, IconLinkedin } from "@/components/icons";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col justify-end pb-16 pt-28 md:pb-24 md:pt-36">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 80% 0%, rgba(62,207,207,0.08), transparent 55%), radial-gradient(ellipse 50% 40% at 10% 80%, rgba(62,207,207,0.04), transparent 50%)",
        }}
        aria-hidden
      />

      <Container>
        <p className="mono-label rise mb-6">
          Full-stack · Remote · Available
        </p>

        <h1 className="display rise rise-delay-1 text-fg mb-6 max-w-4xl">
          {site.name}
          <span className="cursor-blink" aria-hidden />
        </h1>

        <p className="rise rise-delay-2 max-w-xl text-lg leading-relaxed text-fg-muted md:text-xl">
          {site.tagline}
        </p>

        <div className="rise rise-delay-3 mt-10 flex flex-wrap items-center gap-3">
          <Button href="#work">Selected work</Button>
          <Button href="#recommendations" variant="line">
            Recommendations
          </Button>
          <a href={site.cv} download className="btn btn-line">
            <Download size={15} strokeWidth={1.75} aria-hidden />
            Download CV
          </a>
          <div className="ml-1 flex items-center gap-4 pl-1">
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-fg-muted transition-colors hover:text-accent"
              aria-label="GitHub"
            >
              <IconGithub width={18} height={18} />
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-fg-muted transition-colors hover:text-accent"
              aria-label="LinkedIn"
            >
              <IconLinkedin width={18} height={18} />
            </a>
          </div>
        </div>

        <dl className="rise rise-delay-3 mt-16 grid grid-cols-1 gap-6 border-t border-line pt-8 sm:grid-cols-3">
          {metrics.map((m) => (
            <div key={m.label}>
              <dt className="mono-label mb-1">{m.label}</dt>
              <dd className="font-mono text-2xl font-medium tracking-tight text-fg md:text-3xl">
                {m.value}
              </dd>
            </div>
          ))}
        </dl>

        <a
          href="#recommendations"
          className="mt-10 inline-flex items-center gap-1.5 text-sm text-fg-muted transition-colors hover:text-accent md:hidden"
        >
          Jump to recommendations
          <ArrowUpRight size={14} strokeWidth={1.75} />
        </a>
      </Container>
    </section>
  );
}
