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
    <main className="min-h-screen bg-zinc-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/"
          className="mb-6 inline-block text-sm font-medium text-zinc-700 transition hover:text-zinc-900 hover:underline"
        >
          ← Back to cocktails
        </Link>

        <div className="grid gap-8 md:grid-cols-2 md:items-start">
          <div className="relative aspect-square overflow-hidden rounded-2xl bg-white shadow-sm">
            <Image
              src={cocktail.image}
              alt={cocktail.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div>
            <h1 className="mb-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              {cocktail.name}
            </h1>

            <p className="mb-8 text-zinc-600">{cocktail.category}</p>

            <h2 className="mb-3 text-xl font-semibold text-zinc-900 sm:text-2xl">
              Ingredients
            </h2>

            <ul className="mb-8 space-y-2 text-zinc-700">
              {cocktail.ingredients.map((ingredient, index) => (
                <li key={`${ingredient.name}-${index}`}>
                  {ingredient.measure && (
                    <span className="font-medium text-zinc-900">
                      {ingredient.measure}{" "}
                    </span>
                  )}
                  {ingredient.name}
                </li>
              ))}
            </ul>

            <h2 className="mb-3 text-xl font-semibold text-zinc-900 sm:text-2xl">
              Instructions
            </h2>

            <p className="leading-7 text-zinc-700">{cocktail.instructions}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
