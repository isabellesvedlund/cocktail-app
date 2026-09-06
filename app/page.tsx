import CategoryFilter from "@/components/CategoryFilter";
import CocktailGrid from "@/components/CocktailGrid";
import SearchBar from "@/components/SearchBar";
import {
  getCategories,
  getCocktails,
  getCocktailsByCategory,
} from "@/lib/cocktailApi";

interface HomeProps {
  searchParams: Promise<{
    search?: string;
    category?: string;
  }>;
}

export default async function Home({ searchParams }: HomeProps) {
  const params = await searchParams;

  const searchTerm = params.search;
  const category = params.category;

  const categories = await getCategories();

  let cocktails;

  if (category) {
    cocktails = await getCocktailsByCategory(category);
  } else {
    cocktails = await getCocktails(searchTerm ?? "margarita");
  }

  return (
    <main className="p-8">
      <h1 className="mb-6 text-3xl font-bold">Cocktails</h1>

      <SearchBar />
      <CategoryFilter categories={categories} />
      {cocktails.length > 0 ? (
        <CocktailGrid cocktails={cocktails} />
      ) : (
        <p>No cocktails found.</p>
      )}
    </main>
  );
}
