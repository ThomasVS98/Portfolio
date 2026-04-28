"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/internship", label: "Internship" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur border-b border-slate-800">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-white"
        >
          Thomas Van Sande
        </Link>

        <div className="flex items-center gap-8">

          {/* Links */}
          <ul className="flex gap-6 text-sm font-medium">
            {links.map((link) => {
              const isActive =
                pathname === link.href ||
                pathname.startsWith(link.href + "/");

              return (
                <li key={link.href} className="relative">
                  <Link
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`transition-colors ${
                      isActive
                        ? "text-white"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>

                  {/* Active underline */}
                  {isActive && (
                    <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-white" />
                  )}
                </li>
              );
            })}
          </ul>

          {/* CTA */}
          <Link
            href="/contact"
            className="rounded-md bg-white text-slate-900 px-4 py-2 text-sm font-medium hover:bg-slate-200 transition"
          >
            Contact
          </Link>

        </div>
      </div>
    </nav>
  );
}