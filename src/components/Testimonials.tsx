"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink, Quote } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { IconLinkedin } from "@/components/icons";
import { testimonials } from "@/data/content";
import { Container, GhostButton, SectionLabel, SectionTitle } from "@/components/ui";

const INTERVAL_MS = 7000;

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const active = testimonials[index];

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, INTERVAL_MS);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section
      id="recommendations"
      className="relative py-16 lg:py-24 border-y border-[var(--glass-border)] bg-[rgba(18,33,49,0.45)]"
    >
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between mb-10">
          <div className="max-w-xl">
            <SectionLabel>Recommendations</SectionLabel>
            <SectionTitle>Trusted before you scroll</SectionTitle>
            <p className="mt-3 text-on-surface-variant leading-relaxed">
              Managers and clients who&apos;ve worked with me — verified on
              LinkedIn.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {testimonials.map((t, i) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setIndex(i)}
                className={`rounded px-3 py-2 text-sm transition-all ${
                  i === index
                    ? "bg-[rgba(77,142,255,0.2)] border border-[rgba(173,198,255,0.35)] text-on-surface"
                    : "glass text-on-surface-variant hover:text-secondary"
                }`}
              >
                {t.author.split(" ")[0]}
              </button>
            ))}
          </div>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.article
              key={active.id}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.98 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className={`testimonial-card glass rounded-lg p-6 lg:p-10 ${
                active.featured ? "ring-1 ring-[rgba(251,191,36,0.25)]" : ""
              }`}
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:gap-10">
                <div className="shrink-0">
                  <div className="flex h-14 w-14 items-center justify-center rounded bg-gradient-to-br from-primary-container/30 to-secondary-container/20 border border-[var(--glass-border)]">
                    <Quote
                      size={28}
                      strokeWidth={1.5}
                      className="text-secondary"
                    />
                  </div>
                </div>

                <div className="min-w-0 flex-1">
                  {active.featured && (
                    <span className="text-label-caps text-gold mb-3 inline-block">
                      Latest on LinkedIn
                    </span>
                  )}
                  <blockquote className="text-lg lg:text-xl text-on-surface leading-relaxed mb-6">
                    &ldquo;{active.quote}&rdquo;
                  </blockquote>

                  <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <p className="font-semibold text-on-surface text-lg">
                        {active.author}
                      </p>
                      <p className="text-sm text-primary mt-0.5">{active.role}</p>
                      <p className="text-sm text-outline">{active.company}</p>
                      <p className="text-code text-on-surface-variant mt-2 text-xs">
                        {active.relation}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-3 shrink-0">
                      <a
                        href={active.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary inline-flex items-center gap-2 px-4 py-2.5 text-sm"
                      >
                        <IconLinkedin width={16} height={16} />
                        View on LinkedIn
                        <ExternalLink size={14} strokeWidth={2} />
                      </a>
                      {active.authorLinkedin && (
                        <GhostButton href={active.authorLinkedin} external>
                          {active.author.split(" ")[0]}&apos;s profile
                        </GhostButton>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          </AnimatePresence>

          <div className="absolute top-4 right-4 z-10 flex gap-1">
            <button
              type="button"
              onClick={prev}
              className="glass rounded p-2 text-on-surface-variant hover:text-secondary transition-colors"
              aria-label="Previous recommendation"
            >
              <ChevronLeft size={20} strokeWidth={2} />
            </button>
            <button
              type="button"
              onClick={next}
              className="glass rounded p-2 text-on-surface-variant hover:text-secondary transition-colors"
              aria-label="Next recommendation"
            >
              <ChevronRight size={20} strokeWidth={2} />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((t, i) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show recommendation from ${t.author}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index
                    ? "w-8 bg-secondary"
                    : "w-2 bg-outline/50 hover:bg-outline"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="mt-8 overflow-hidden">
          <div className="marquee-track flex gap-8 text-label-caps text-outline/80">
            {[...testimonials, ...testimonials].map((t, i) => (
              <span key={`${t.id}-${i}`} className="shrink-0 whitespace-nowrap">
                {t.author} · {t.company}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
