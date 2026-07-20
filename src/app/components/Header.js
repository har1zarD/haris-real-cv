'use client';

import { useState } from 'react';

const links = [
  { name: 'Work', href: '#work' },
  { name: 'Experience', href: '#experience' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-[--line] bg-[#f7f7f4]/90 backdrop-blur-sm no-print">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-14 flex items-center justify-between">
        <a href="#top" className="font-mono text-sm tracking-tight">
          haris velić<span className="text-[--cobalt]">.</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-[--muted] hover:text-[--ink] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="/cv/Haris_Velic_CV.pdf"
            download
            className="font-mono text-xs border border-[--ink] px-3 py-1.5 hover:bg-[--ink] hover:text-[#f7f7f4] transition-colors"
          >
            Download CV
          </a>
        </nav>

        <button
          className="md:hidden font-mono text-xs uppercase tracking-widest"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Menu"
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-[--line] bg-[#f7f7f4] px-5 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-[--muted]"
              onClick={() => setOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a href="/cv/Haris_Velic_CV.pdf" download className="font-mono text-xs underline">
            Download CV
          </a>
        </nav>
      )}
    </header>
  );
}
