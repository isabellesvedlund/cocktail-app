import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCocktailById } from "@/lib/cocktailApi";

interface CocktailDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function CocktailDetailPage({
  params,
}: CocktailDetailPageProps) {
  const { id } = await params;
  const cocktail = await getCocktailById(id);

  if (!cocktail) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-4xl p-8">
      <Link
        href="/"
        className="mb-6 inline-block text-sm font-medium hover:underline"
      >
        ← Back to cocktails
      </Link>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="relative aspect-square overflow-hidden rounded-lg">
          <Image
            src={cocktail.image}
            alt={cocktail.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        <div>
          <h1 className="mb-2 text-4xl font-bold">{cocktail.name}</h1>

          <p className="mb-6 text-gray-600">{cocktail.category}</p>

          <h2 className="mb-3 text-2xl font-semibold">Ingredients</h2>

          <ul className="mb-6 space-y-2">
            {cocktail.ingredients.map((ingredient, index) => (
              <li key={`${ingredient.name}-${index}`}>
                {ingredient.measure && (
                  <span className="font-medium">{ingredient.measure} </span>
                )}
                {ingredient.name}
              </li>
            ))}
          </ul>

          <h2 className="mb-3 text-2xl font-semibold">Instructions</h2>

          <p className="leading-7">{cocktail.instructions}</p>
        </div>
      </div>
    </main>
  );
}
