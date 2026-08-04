import Link from "next/link";
import { type ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`container-site ${className}`}>{children}</div>;
}

export function SectionHead({
  index,
  label,
  title,
  description,
}: {
  index: string;
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="mono-label mb-3">
        <span className="text-accent">{index}</span> — {label}
      </p>
      <h2 className="headline text-fg">{title}</h2>
      {description ? (
        <p className="mt-4 text-fg-muted leading-relaxed">{description}</p>
      ) : null}
    </div>
  );
}

export function Button({
  href,
  children,
  variant = "solid",
  external,
}: {
  href: string;
  children: ReactNode;
  variant?: "solid" | "line";
  external?: boolean;
}) {
  const className = `btn ${variant === "solid" ? "btn-solid" : "btn-line"}`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
