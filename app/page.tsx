import { getCocktails } from "@/lib/cocktailApi";

export default async function Home() {
  const cocktails = await getCocktails();

  return (
    <main className="p-8">
      <h1 className="mb-6 text-3xl font-bold">Cocktails</h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cocktails.map((cocktail) => (
          <div key={cocktail.id}>
            <img
              src={cocktail.image}
              alt={cocktail.name}
              className="w-full rounded-lg"
            />

            <h2 className="mt-2 text-xl font-semibold">{cocktail.name}</h2>
          </div>
        ))}
      </div>
    </main>
  );
}
