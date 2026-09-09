import Image from "next/image";
import Link from "next/link";
import type { Cocktail } from "@/types/cocktail";

interface CocktailCardProps {
  cocktail: Cocktail;
}

export default function CocktailCard({ cocktail }: CocktailCardProps) {
  return (
    <Link href={`/cocktails/${cocktail.id}`} className="block h-full">
      <article className="h-full overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg">
        <Image
          src={cocktail.image}
          alt={cocktail.name}
          width={500}
          height={500}
          className="aspect-square w-full object-cover"
        />

        <div className="p-4 sm:p-5">
          <h2 className="text-lg font-semibold text-zinc-900 sm:text-xl">
            {cocktail.name}
          </h2>

          <p className="mt-1 text-sm text-zinc-500">{cocktail.category}</p>
        </div>
      </article>
    </Link>
  );
}
