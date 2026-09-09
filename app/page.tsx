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
    <main className="min-h-screen bg-zinc-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
          Cocktails
        </h1>

        <p className="mb-8 text-zinc-600">
          Find inspiration for your next cocktail.
        </p>

        <SearchBar />
        <CategoryFilter categories={categories} />
        {cocktails.length > 0 ? (
          <CocktailGrid cocktails={cocktails} />
        ) : (
          <p className="py-8 text-center text-zinc-500">No cocktails found.</p>
        )}
      </div>
    </main>
  );
}
