"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/selling", label: "Selling" },
  { href: "/about", label: "About Us" },
  { href: "/faq", label: "FAQ" },
  { href: "/contacts", label: "Contacts" },
  { href: "/appointment", label: "Appointment" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-bone/95 backdrop-blur-md border-b border-charcoal/10">
      <div className="flex justify-between items-center px-5 md:px-16 py-6 max-w-site mx-auto">
        <Link
          href="/"
          className="font-display text-heading-lg tracking-tighter text-charcoal hover:text-accent transition-colors"
        >
          HAYAT HOLDINGS
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-6 items-center">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                pathname === link.href
                  ? "font-display text-[14px] uppercase tracking-widest text-accent font-bold border-b-2 border-accent"
                  : "font-display text-[14px] uppercase tracking-widest text-charcoal hover:text-accent transition-colors"
              }
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span className="material-symbols-outlined text-charcoal">
            {open ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-charcoal/10 px-5 py-6">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={
                  pathname === link.href
                    ? "font-display text-[14px] uppercase tracking-widest text-accent font-bold"
                    : "font-display text-[14px] uppercase tracking-widest text-charcoal hover:text-accent transition-colors"
                }
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
