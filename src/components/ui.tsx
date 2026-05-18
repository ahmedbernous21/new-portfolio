import Link from "next/link";
import { type ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[var(--container-max)] px-5 lg:px-6 ${className}`}>
      {children}
    </div>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="text-label-caps text-secondary mb-4">{children}</p>
  );
}

export function SectionTitle({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2 className={`text-headline text-on-surface ${className}`}>{children}</h2>
  );
}

export function GlassCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`glass glass-interactive rounded ${className}`}>{children}</div>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="text-code rounded border border-[var(--glass-border)] bg-[var(--glass-fill)] px-2 py-1 text-on-surface-variant">
      {children}
    </span>
  );
}

export function PrimaryButton({
  href,
  children,
  external,
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
}) {
  const className =
    "btn-primary inline-flex items-center justify-center gap-2 px-6 py-3 text-sm";

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
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

export function GhostButton({
  href,
  children,
  external,
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
}) {
  const className =
    "btn-ghost inline-flex items-center justify-center gap-2 px-6 py-3 text-sm";

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
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

export function MetricChip({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="metric-chip flex flex-col gap-1 px-4 py-3">
      <span className="text-2xl font-bold tracking-tight">{value}</span>
      <span className="text-xs text-on-surface-variant leading-snug">{label}</span>
    </div>
  );
}
