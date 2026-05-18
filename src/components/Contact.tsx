import { Mail } from "lucide-react";
import { type ReactNode } from "react";
import { IconGithub, IconLinkedin } from "@/components/icons";
import { site } from "@/data/content";
import {
  Container,
  GhostButton,
  PrimaryButton,
  SectionLabel,
  SectionTitle,
} from "@/components/ui";

type Channel = {
  label: string;
  description: string;
  href: string;
  cta: string;
  icon: ReactNode;
  external?: boolean;
};

const channels: Channel[] = [
  {
    icon: <Mail size={20} strokeWidth={2} className="text-secondary" />,
    label: "Email",
    description: "Direct inquiries and collaborations",
    href: `mailto:${site.email}`,
    cta: site.email,
  },
  {
    icon: <IconLinkedin className="text-secondary" />,
    label: "LinkedIn",
    description: "Connect professionally",
    href: site.linkedin,
    cta: "LinkedIn profile",
    external: true,
  },
  {
    icon: <IconGithub className="text-secondary" />,
    label: "GitHub",
    description: "Open source and side projects",
    href: site.github,
    cta: "View repositories",
    external: true,
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-[var(--section-gap)] relative overflow-hidden">
      <div className="bloom top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px]" aria-hidden />

      <Container className="relative">
        <div className="glass rounded-lg p-8 lg:p-12 text-center max-w-3xl mx-auto">
          <SectionLabel>Contact</SectionLabel>
          <SectionTitle className="mb-4">Let&apos;s connect</SectionTitle>
          <p className="text-on-surface-variant leading-relaxed mb-10 max-w-xl mx-auto">
            Have a project in mind or want to discuss an opportunity? Reach out —
            I&apos;m always open to meaningful collaborations.
          </p>

          <div className="grid gap-4 sm:grid-cols-3 mb-10 text-left">
            {channels.map((ch) => (
              <a
                key={ch.label}
                href={ch.href}
                target={ch.external ? "_blank" : undefined}
                rel={ch.external ? "noopener noreferrer" : undefined}
                className="glass rounded p-4 hover:border-[rgba(255,255,255,0.2)] transition-colors group"
              >
                <div className="mb-3">{ch.icon}</div>
                <p className="font-semibold text-on-surface text-sm">{ch.label}</p>
                <p className="text-xs text-on-surface-variant mt-1 mb-2">
                  {ch.description}
                </p>
                <span className="text-code text-primary group-hover:text-secondary transition-colors">
                  {ch.cta}
                </span>
              </a>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <PrimaryButton href={`mailto:${site.email}`} external>
              <Mail size={16} strokeWidth={2} />
              Send an email
            </PrimaryButton>
            <GhostButton href={site.linkedin} external>
              <IconLinkedin width={16} height={16} />
              LinkedIn
            </GhostButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
