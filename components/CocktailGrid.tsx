import CocktailCard from "./CocktailCard";
import type { Cocktail } from "@/types/cocktail";

interface CocktailGridProps {
  cocktails: Cocktail[];
}

export default function CocktailGrid({ cocktails }: CocktailGridProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {cocktails.map((cocktail) => (
        <CocktailCard key={cocktail.id} cocktail={cocktail} />
      ))}
    </div>
  );
}
