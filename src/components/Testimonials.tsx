"use client";

import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { IconLinkedin } from "@/components/icons";
import { site, testimonials } from "@/data/content";
import { Container, SectionHead } from "@/components/ui";

export function Testimonials() {
  const [active, setActive] = useState(0);
  const current = testimonials[active];

  return (
    <section id="recommendations" className="py-[var(--section-gap)]">
      <Container>
        <SectionHead
          index="01"
          label="Recommendations"
          title="People I've worked with"
          description="Direct managers and clients — open the LinkedIn recommendation anytime."
        />

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="flex flex-col gap-1 lg:col-span-4">
            {testimonials.map((t, i) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setActive(i)}
                className={`group flex items-start justify-between gap-3 border-l-2 px-4 py-3.5 text-left transition-colors ${
                  i === active
                    ? "border-accent bg-accent-dim"
                    : "border-transparent hover:border-line-strong hover:bg-bg-elevated"
                }`}
              >
                <div>
                  <p
                    className={`text-sm font-medium ${
                      i === active ? "text-fg" : "text-fg-muted"
                    }`}
                  >
                    {t.author}
                  </p>
                  <p className="mt-0.5 text-xs text-fg-faint">
                    {t.company} · {t.relation.split("·")[0].trim()}
                  </p>
                </div>
                {t.featured ? (
                  <span className="mono-label !text-[0.6rem] text-accent shrink-0 mt-0.5">
                    Latest
                  </span>
                ) : null}
              </button>
            ))}
          </div>

          <article className="lg:col-span-8">
            <blockquote className="border-t border-line pt-8">
              <p className="text-xl leading-relaxed text-fg md:text-2xl md:leading-relaxed">
                &ldquo;{current.quote}&rdquo;
              </p>
            </blockquote>

            <div className="mt-8 flex flex-col gap-6 border-t border-line pt-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-base font-medium text-fg">{current.author}</p>
                <p className="mt-1 text-sm text-fg-muted">
                  {current.role}
                  {current.company ? ` · ${current.company}` : ""}
                </p>
                <p className="mono-label mt-2 !normal-case !tracking-normal">
                  {current.relation}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={current.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-solid"
                >
                  <IconLinkedin width={15} height={15} />
                  View on LinkedIn
                  <ArrowUpRight size={14} strokeWidth={1.75} />
                </a>
                {current.authorLinkedin ? (
                  <a
                    href={current.authorLinkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-line"
                  >
                    {current.author.split(" ")[0]}&apos;s profile
                  </a>
                ) : (
                  <a
                    href={site.linkedinRecommendations}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-line"
                  >
                    All recommendations
                  </a>
                )}
              </div>
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
}
