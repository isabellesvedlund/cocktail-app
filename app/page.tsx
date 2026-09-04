import CocktailGrid from "@/components/CocktailGrid";
import { getCocktails } from "@/lib/cocktailApi";

export default async function Home() {
  const cocktails = await getCocktails();

  return (
    <main className="p-8">
      <h1 className="mb-6 text-3xl font-bold">Cocktails</h1>

      <CocktailGrid cocktails={cocktails} />
    </main>
  );
}
