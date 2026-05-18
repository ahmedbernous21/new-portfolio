"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";
import { IconGithub, IconLinkedin } from "@/components/icons";
import { metrics, site, testimonials } from "@/data/content";
import {
  Container,
  GhostButton,
  MetricChip,
  PrimaryButton,
} from "@/components/ui";

const featured = testimonials[0];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-12 lg:pt-36 lg:pb-16">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8 lg:items-end">
          <motion.div
            className="lg:col-span-8"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-label-caps text-secondary mb-6 animate-fade-up">
              Architect of Precision
            </p>
            <h1 className="text-display text-on-surface mb-6">
              Hi, I&apos;m{" "}
              <span className="gradient-text">{site.name}</span>
            </h1>
            <p className="text-lg leading-relaxed text-on-surface-variant max-w-2xl mb-8">
              {site.title}. {site.tagline}
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              <PrimaryButton href="#projects">View my work</PrimaryButton>
              <GhostButton href={`mailto:${site.email}`} external>
                <Mail size={16} strokeWidth={2} />
                Email me
              </GhostButton>
              <GhostButton href="#recommendations">
                See recommendations
                <ArrowRight size={16} strokeWidth={2} />
              </GhostButton>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-on-surface-variant hover:text-secondary flex items-center gap-2 text-sm transition-colors"
              >
                <IconGithub />
                GitHub
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-on-surface-variant hover:text-secondary flex items-center gap-2 text-sm transition-colors"
              >
                <IconLinkedin />
                LinkedIn
              </a>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-4 flex flex-col gap-3"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            {metrics.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.08 }}
              >
                <MetricChip value={m.value} label={m.label} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="mt-10 glass glass-interactive rounded-lg p-5 lg:p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.55 }}
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="min-w-0">
              <p className="text-label-caps text-gold mb-2">Recommended on LinkedIn</p>
              <p className="text-on-surface-variant text-sm lg:text-base line-clamp-2 leading-relaxed">
                &ldquo;{featured.quote.slice(0, 160)}…&rdquo;
              </p>
              <p className="text-sm text-on-surface mt-2 font-medium">
                — {featured.author}, {featured.role}
              </p>
            </div>
            <Link
              href="#recommendations"
              className="btn-primary shrink-0 inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm"
            >
              <IconLinkedin width={16} height={16} />
              All recommendations
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
