import type { Cocktail, CocktailDTO, Ingredient } from "@/types/cocktail";

export function mapCocktail(dto: CocktailDTO): Cocktail {
  const ingredients: Ingredient[] = [];

  for (let i = 1; i <= 5; i++) {
    const ingredient = dto[`strIngredient${i}` as keyof CocktailDTO];
    const measure = dto[`strMeasure${i}` as keyof CocktailDTO];

    if (typeof ingredient === "string" && ingredient.trim()) {
      ingredients.push({
        name: ingredient,
        measure: typeof measure === "string" ? measure : null,
      });
    }
  }

  return {
    id: dto.idDrink,
    name: dto.strDrink,
    image: dto.strDrinkThumb,
    category: dto.strCategory ?? "Unknown",
    instructions: dto.strInstructions ?? "",
    ingredients,
  };
}
