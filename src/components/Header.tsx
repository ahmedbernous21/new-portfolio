"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks, site } from "@/data/content";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-40 w-full transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-line bg-[rgba(7,14,24,0.92)] backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <div className="container-site flex h-14 items-center justify-between md:h-16">
        <Link href="#" className="font-mono text-sm tracking-tight text-fg">
          {site.name.split(" ")[0].toLowerCase()}
          <span className="text-accent">/</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13px] text-fg-muted transition-colors hover:text-fg"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={site.cv}
            download
            className="text-[13px] text-fg-muted transition-colors hover:text-fg"
          >
            CV
          </a>
          <a href={`mailto:${site.email}`} className="btn btn-solid text-[13px] !py-1.5 !px-3">
            Email
          </a>
        </nav>

        <button
          type="button"
          className="p-2 text-fg md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={20} strokeWidth={1.75} /> : <Menu size={20} strokeWidth={1.75} />}
        </button>
      </div>

      {open ? (
        <nav className="border-t border-line bg-bg px-5 py-4 md:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block py-2.5 text-fg-muted hover:text-fg"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={site.cv}
                download
                className="block py-2.5 text-fg-muted hover:text-fg"
                onClick={() => setOpen(false)}
              >
                Download CV
              </a>
            </li>
            <li className="pt-2">
              <a
                href={`mailto:${site.email}`}
                className="btn btn-solid w-full justify-center"
                onClick={() => setOpen(false)}
              >
                Email
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
