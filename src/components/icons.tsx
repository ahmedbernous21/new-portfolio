import { type ReactNode, type SVGProps } from "react";

function IconBase({
  children,
  ...props
}: SVGProps<SVGSVGElement> & { children: ReactNode }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={18}
      height={18}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      {children}
    </svg>
  );
}

export function IconGithub(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5a10.3 10.3 0 0 0-5 0C6 5 5 5 5 5c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 12c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65S8.5 19.5 9 22" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </IconBase>
  );
}

export function IconLinkedin(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-13h4v2" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </IconBase>
  );
}
