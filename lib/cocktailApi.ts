import type { CocktailDTO } from "@/types/cocktail";
import { mapCocktail } from "./cocktailMapper";

interface CocktailApiResponse {
  drinks: CocktailDTO[] | null;
}

const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1";

export async function getCocktails() {
  const response = await fetch(`${BASE_URL}/search.php?s=margarita`);

  if (!response.ok) {
    throw new Error("Failed to fetch cocktails");
  }

  const data: CocktailApiResponse = await response.json();

  if (!data.drinks) {
    return [];
  }

  return data.drinks.map(mapCocktail);
}
