import Image from "next/image";
import Link from "next/link";
import type { Cocktail } from "@/types/cocktail";

interface CocktailCardProps {
  cocktail: Cocktail;
}

export default function CocktailCard({ cocktail }: CocktailCardProps) {
  return (
    <Link href={`/cocktails/${cocktail.id}`} className="block h-full">
      <article className="group h-full overflow-hidden rounded-2xl border border-[#dfd2c4] bg-[#fffaf3] shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
        <div className="overflow-hidden">
          <Image
            src={cocktail.image}
            alt={cocktail.name}
            width={500}
            height={500}
            className="aspect-square w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          />
        </div>

        <div className="p-4">
          <span className="mb-3 inline-block rounded-full bg-[#efe4d7] px-3 py-1 text-xs font-medium text-[#7b5545]">
            {cocktail.category}
          </span>

          <h2 className="text-base font-semibold text-[#2f241f] sm:text-lg">
            {cocktail.name}
          </h2>

          <p className="mt-3 text-sm font-medium text-[#8b5e4b]">
            View recipe →
          </p>
        </div>
      </article>
    </Link>
  );
}
