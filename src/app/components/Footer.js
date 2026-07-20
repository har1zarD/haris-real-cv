export default function Footer() {
  return (
    <footer className="border-t border-[--line] no-print">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-8 flex flex-col sm:flex-row gap-2 items-start sm:items-center justify-between">
        <p className="font-mono text-[11px] text-[--muted]">
          © {new Date().getFullYear()} Haris Velić - Sarajevo
        </p>
        <p className="font-mono text-[11px] text-[--muted]">
          Built with Next.js. No trackers, no cookies.
        </p>
      </div>
    </footer>
  );
}
