import { Download } from "lucide-react";
import { site } from "@/data/content";
import { Button, Container, SectionHead } from "@/components/ui";
import { IconGithub, IconLinkedin } from "@/components/icons";

export function Contact() {
  return (
    <section id="contact" className="py-[var(--section-gap)]">
      <Container>
        <div className="border-t border-line pt-16 md:pt-24">
          <SectionHead
            index="06"
            label="Contact"
            title="Let's build something"
            description="Open to full-time roles, contract work, and focused collaborations."
          />

          <div className="flex flex-wrap gap-3">
            <Button href={`mailto:${site.email}`} external>
              {site.email}
            </Button>
            <Button href={site.linkedin} variant="line" external>
              <IconLinkedin width={15} height={15} />
              LinkedIn
            </Button>
            <Button href={site.github} variant="line" external>
              <IconGithub width={15} height={15} />
              GitHub
            </Button>
            <a href={site.cv} download className="btn btn-line">
              <Download size={15} strokeWidth={1.75} aria-hidden />
              Download CV
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
