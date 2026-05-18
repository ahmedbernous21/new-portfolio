"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { navLinks, site } from "@/data/content";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-[var(--glass-border)] bg-[rgba(5,20,36,0.75)] backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-[var(--container-max)] items-center justify-between px-5 lg:px-6">
        <Link
          href="#"
          className="text-label-caps text-on-surface hover:text-secondary transition-colors"
        >
          {site.name.split(" ")[0]}
          <span className="text-primary">.</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-on-surface-variant hover:text-secondary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href={`mailto:${site.email}`}
          className="btn-primary hidden text-sm px-4 py-2 md:inline-flex"
        >
          Get in touch
        </Link>

        <button
          type="button"
          className="md:hidden text-on-surface p-2"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={22} strokeWidth={2} /> : <Menu size={22} strokeWidth={2} />}
        </button>
      </div>

      {open && (
        <nav className="glass border-t border-[var(--glass-border)] px-5 py-4 md:hidden">
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block py-2 text-on-surface-variant hover:text-secondary"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href={`mailto:${site.email}`}
                className="btn-primary mt-2 inline-flex w-full justify-center py-3 text-sm"
                onClick={() => setOpen(false)}
              >
                Get in touch
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
