import Image from "next/image";
import Link from "next/link";
import type { Cocktail } from "@/types/cocktail";

interface CocktailCardProps {
  cocktail: Cocktail;
}

export default function CocktailCard({ cocktail }: CocktailCardProps) {
  return (
    <Link
      href={`/cocktails/${cocktail.id}`}
      className="group block h-full rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#9a6b54]/50"
    >
      <article className="h-full overflow-hidden rounded-2xl border border-[#d8c5ae] bg-[#fffaf3] shadow-[0_6px_22px_rgba(74,52,38,0.08)] transition duration-300 group-hover:-translate-y-1.5 group-hover:border-[#c9a66b] group-hover:shadow-[0_16px_35px_rgba(74,52,38,0.16)]">
        <div className="relative aspect-[4/3] overflow-hidden bg-[#e8ddd1]">
          <Image
            src={cocktail.image}
            alt={cocktail.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition duration-500 group-hover:scale-[1.04]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-[#c9a66b] to-transparent" />

        <div className="flex min-h-36 flex-col p-5">
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#a87938]">
            {cocktail.category}
          </p>

          <h2 className="text-lg font-semibold leading-snug tracking-tight text-[#2f241f] [text-shadow:0_1px_8px_rgba(93,63,43,0.08)]">
            {cocktail.name}
          </h2>

          <div className="mt-auto pt-5">
            <span className="text-sm font-medium text-[#8b5e4b] transition group-hover:text-[#a87938]">
              View recipe
              <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
