export interface CocktailDTO {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
  strCategory: string | null;
  strInstructions: string | null;

  strIngredient1: string | null;
  strIngredient2: string | null;
  strIngredient3: string | null;
  strIngredient4: string | null;
  strIngredient5: string | null;

  strMeasure1: string | null;
  strMeasure2: string | null;
  strMeasure3: string | null;
  strMeasure4: string | null;
  strMeasure5: string | null;
}

export interface Ingredient {
  name: string;
  measure: string | null;
}

export interface Cocktail {
  id: string;
  name: string;
  image: string;
  category: string;
  instructions: string;
  ingredients: Ingredient[];
}
