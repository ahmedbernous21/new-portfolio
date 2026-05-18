import { site } from "@/data/content";
import { Container } from "@/components/ui";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--glass-border)] py-8">
      <Container className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-on-surface-variant">
          © {year} {site.name}. Built with precision.
        </p>
        <p className="text-code text-outline">
          // architect-of-precision
        </p>
      </Container>
    </footer>
  );
}
