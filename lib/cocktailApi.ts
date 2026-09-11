import type { CocktailDTO } from "@/types/cocktail";
import { mapCocktail } from "./cocktailMapper";

interface CocktailApiResponse {
  drinks: CocktailDTO[] | null;
}

const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1";

export async function getCocktails(searchTerm = "margarita") {
  const response = await fetch(
    `${BASE_URL}/search.php?s=${encodeURIComponent(searchTerm)}`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch cocktails");
  }

  const data: CocktailApiResponse = await response.json();

  if (!data.drinks) {
    return [];
  }

  return data.drinks.map(mapCocktail);
}

interface CategoryDTO {
  strCategory: string;
}

interface CategoryApiResponse {
  drinks: CategoryDTO[] | null;
}

export async function getCategories() {
  const response = await fetch(`${BASE_URL}/list.php?c=list`);

  if (!response.ok) {
    throw new Error("Failed to fetch cocktail categories");
  }

  const data: CategoryApiResponse = await response.json();

  if (!data.drinks) {
    return [];
  }

  return data.drinks.map((category) => category.strCategory);
}

export async function getCocktailsByCategory(category: string) {
  const response = await fetch(
    `${BASE_URL}/filter.php?c=${encodeURIComponent(category)}`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch cocktails by category");
  }

  const data: CocktailApiResponse = await response.json();

  if (!data.drinks) {
    return [];
  }

  return data.drinks.map(mapCocktail);
}

export async function getCocktailById(id: string) {
  const response = await fetch(
    `${BASE_URL}/lookup.php?i=${encodeURIComponent(id)}`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch cocktail");
  }

  const data: CocktailApiResponse = await response.json();

  if (!data.drinks || data.drinks.length === 0) {
    return null;
  }

  return mapCocktail(data.drinks[0]);
}

export async function getRandomCocktail() {
  const response = await fetch(`${BASE_URL}/random.php`);

  if (!response.ok) {
    throw new Error("Failed to fetch random cocktail");
  }

  const data: CocktailApiResponse = await response.json();

  if (!data.drinks || data.drinks.length === 0) {
    return null;
  }

  return mapCocktail(data.drinks[0]);
}
