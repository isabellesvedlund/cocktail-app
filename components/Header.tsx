import Link from "next/link";

export default function Header() {
  return (
    <header className="absolute left-0 top-0 z-20 w-full">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-5 sm:px-8">
        <Link
          href="/"
          className="text-sm font-semibold uppercase tracking-[0.25em] text-white"
        >
          The Cocktail Edit
        </Link>

        <nav>
          <a
            href="#cocktails"
            className="text-sm text-white/80 transition hover:text-white"
          >
            Explore
          </a>
        </nav>
      </div>
    </header>
  );
}
