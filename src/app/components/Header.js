'use client';

import { useState } from 'react';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

const links = [
  { name: 'About', href: '#about' },
  { name: 'Work', href: '#work' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 border-b border-[--line] bg-[#08080c]/80 backdrop-blur-md no-print">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 h-14 flex items-center justify-between">
          <a href="#top" className="font-mono text-sm tracking-tight text-[--ink]">
            haris velić<span className="text-[--violet]">.</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-mono text-[11px] uppercase tracking-[0.16em] text-[--muted] hover:text-[--ink] transition-colors"
              >
                {link.name}
              </a>
            ))}
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
          <nav className="md:hidden border-t border-[--line] bg-[#08080c] px-5 py-4 flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-mono text-xs uppercase tracking-widest text-[--muted]"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a href="/cv/Haris_Velic_CV.pdf" download className="font-mono text-xs underline">
              Resume
            </a>
          </nav>
        )}
      </header>

      <aside className="hidden lg:flex fixed left-4 top-1/2 -translate-y-1/2 z-40 flex-col gap-1 no-print">
        <a
          href="https://github.com/har1zarD"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="cursor-pointer p-3 text-[--muted] hover:text-[--ink] hover:-translate-y-0.5 transition-all duration-300"
        >
          <Github size={16} />
        </a>
        <a
          href="https://linkedin.com/in/harisvelic"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="cursor-pointer p-3 text-[--muted] hover:text-[--ink] hover:-translate-y-0.5 transition-all duration-300"
        >
          <Linkedin size={16} />
        </a>
        <a
          href="mailto:harisvelic2000@gmail.com"
          aria-label="Email"
          className="cursor-pointer p-3 text-[--muted] hover:text-[--ink] hover:-translate-y-0.5 transition-all duration-300"
        >
          <Mail size={16} />
        </a>
        <span className="w-px h-16 bg-[--line] mx-auto mt-2" aria-hidden />
      </aside>

      <a
        href="/cv/Haris_Velic_CV.pdf"
        download
        className="hidden lg:flex fixed bottom-6 right-6 z-40 items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-[--muted] hover:text-[--ink] border border-[--line] hover:border-[--violet] bg-[#08080c]/80 backdrop-blur px-4 py-2.5 transition-colors no-print"
      >
        Resume <FileText size={13} />
      </a>
    </>
  );
}
