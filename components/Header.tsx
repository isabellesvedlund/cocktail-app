import Link from "next/link";

export default function Header() {
  return (
    <header className="absolute left-0 top-0 z-20 w-full border-b border-[#d8a95b]/20 bg-black/10 backdrop-blur-[2px]">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5 sm:px-8">
        <Link
          href="/"
          className="text-xs font-semibold uppercase tracking-[0.3em] text-[#f1d6b2] [text-shadow:0_2px_8px_rgba(0,0,0,0.5)] transition hover:text-white"
        >
          The Cocktail Edit
        </Link>

        <nav>
          <a
            href="#cocktails"
            className="border-b border-transparent pb-1 text-sm text-white/75 transition hover:border-[#e1bd8c] hover:text-white"
          >
            Explore
          </a>
        </nav>
      </div>
    </header>
  );
}
