import CocktailGrid from "@/components/CocktailGrid";
import SearchBar from "@/components/SearchBar";
import { getCocktails } from "@/lib/cocktailApi";

interface HomeProps {
  searchParams: Promise<{
    search?: string;
  }>;
}

export default async function Home({ searchParams }: HomeProps) {
  const params = await searchParams;

  const searchTerm = params.search ?? "margarita";

  const cocktails = await getCocktails(searchTerm);

  return (
    <main className="p-8">
      <h1 className="mb-6 text-3xl font-bold">Cocktails</h1>

      <SearchBar />

      {cocktails.length > 0 ? (
        <CocktailGrid cocktails={cocktails} />
      ) : (
        <p>No cocktails found.</p>
      )}
    </main>
  );
}
