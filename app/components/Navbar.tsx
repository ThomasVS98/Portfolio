"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/internship", label: "Internship" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");

  return (
    <nav className="sticky top-0 z-50 bg-slate-900/[0.92] backdrop-blur-md border-b border-white/[0.08]">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="text-base font-medium tracking-tight text-white">
          Thomas<span className="text-white/40"> Van Sande</span>
        </Link>

        {/* Desktop links — hidden below md breakpoint */}
        <ul className="hidden md:flex items-center gap-0.5 text-sm font-medium">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={
                  isActive(link.href)
                    ? "block px-3 py-1.5 rounded-md transition-colors text-white bg-white/10"
                    : "block px-3 py-1.5 rounded-md transition-colors text-white/50 hover:text-white/90 hover:bg-white/[0.06]"
                }
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger — visible below md breakpoint */}
        <button
          className="md:hidden p-2 rounded-md text-white/70 hover:bg-white/[0.06] transition-colors cursor-pointer"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <line x1="1" y1="1" x2="17" y2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="17" y1="1" x2="1" y2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <line x1="0" y1="4" x2="18" y2="4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="0" y1="9" x2="18" y2="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="0" y1="14" x2="18" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          )}
        </button>

      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden border-t border-white/[0.08] px-6 py-3 flex flex-col gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={
                isActive(link.href)
                  ? "block px-3 py-2 rounded-md text-sm font-medium transition-colors text-white bg-white/10"
                  : "block px-3 py-2 rounded-md text-sm font-medium transition-colors text-white/50 hover:text-white/90 hover:bg-white/[0.06]"
              }
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}