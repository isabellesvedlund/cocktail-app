import Image from "next/image";
import type { Cocktail } from "@/types/cocktail";

interface CocktailCardProps {
  cocktail: Cocktail;
}

export default function CocktailCard({ cocktail }: CocktailCardProps) {
  return (
    <article className="overflow-hidden rounded-xl border bg-white shadow-sm">
      <Image
        src={cocktail.image}
        alt={cocktail.name}
        width={500}
        height={500}
        className="aspect-square w-full object-cover"
      />

      <div className="p-4">
        <h2 className="text-xl font-semibold">{cocktail.name}</h2>

        <p className="mt-1 text-sm text-zinc-500">{cocktail.category}</p>
      </div>
    </article>
  );
}
