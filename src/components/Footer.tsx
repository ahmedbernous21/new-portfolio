import { site } from "@/data/content";
import { Container } from "@/components/ui";

export function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <Container className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-fg-muted">
          © {new Date().getFullYear()} {site.name}
        </p>
        <p className="font-mono text-xs text-fg-faint">
          ahmedbernous.tech
        </p>
      </Container>
    </footer>
  );
}
