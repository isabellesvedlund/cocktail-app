import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import RandomCocktailButton from "@/components/RandomCocktailButton";
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
    <main className="min-h-screen bg-[#f6f1e8]">
      {/* TOP BAR */}
      <header className="border-b border-[#d8a95b]/30 bg-[#2f241f] shadow-[0_5px_20px_rgba(47,36,31,0.12)]">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5 sm:px-8">
          <Link
            href="/"
            className="text-xs font-semibold uppercase tracking-[0.3em] text-[#e8bd73] transition hover:text-white"
          >
            The Cocktail Edit
          </Link>

          <Link
            href="/#cocktails"
            className="border-b border-transparent pb-1 text-sm text-white/70 transition hover:border-[#d8a95b] hover:text-white"
          >
            Explore
          </Link>
        </div>
      </header>

      {/* COCKTAIL */}
      <section className="mx-auto max-w-5xl px-6 py-10 sm:px-8 sm:py-14">
        <Link
          href="/#cocktails"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-[#8b5e4b] transition hover:text-[#a87938]"
        >
          <span aria-hidden="true">←</span>
          Back to cocktails
        </Link>

        <div className="grid gap-10 md:grid-cols-2 md:items-start lg:gap-14">
          {/* IMAGE */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-[#c9a66b]/50 bg-[#e8ddd1] shadow-[0_18px_45px_rgba(67,45,31,0.18)]">
            <Image
              src={cocktail.image}
              alt={cocktail.name}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />

            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/25 to-transparent" />
          </div>

          {/* RECIPE */}
          <div className="md:pt-4">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-7 bg-[#b98a48]" />

              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#a87938]">
                {cocktail.category}
              </p>
            </div>

            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-[#2f241f] [text-shadow:0_3px_16px_rgba(93,63,43,0.14)] sm:text-5xl">
              {cocktail.name}
            </h1>

            <div className="my-7 h-px bg-gradient-to-r from-[#b98a48] via-[#d8c9bb] to-transparent" />

            {/* INGREDIENTS */}
            <section>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#a87938]">
                What you&apos;ll need
              </p>

              <h2 className="mb-5 text-2xl font-semibold tracking-tight text-[#2f241f] [text-shadow:0_2px_10px_rgba(93,63,43,0.08)]">
                Ingredients
              </h2>

              <ul className="divide-y divide-[#d9c8b5] border-y border-[#c9a66b]/45">
                {cocktail.ingredients.map((ingredient, index) => (
                  <li
                    key={`${ingredient.name}-${index}`}
                    className="flex items-center justify-between gap-4 py-3 text-sm"
                  >
                    <span className="text-[#4d4039]">{ingredient.name}</span>

                    {ingredient.measure && (
                      <span className="text-right font-medium text-[#9a6838]">
                        {ingredient.measure}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </section>

            {/* INSTRUCTIONS */}
            <section className="mt-9">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#a87938]">
                The method
              </p>

              <h2 className="mb-4 text-2xl font-semibold tracking-tight text-[#2f241f] [text-shadow:0_2px_10px_rgba(93,63,43,0.08)]">
                Instructions
              </h2>

              <p className="max-w-xl text-[15px] leading-7 text-[#5f5149]">
                {cocktail.instructions}
              </p>
            </section>

            {/* BOTTOM ACTIONS */}
            <div className="mt-10 border-t border-[#c9a66b]/40 pt-6">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#a87938]">
                Keep exploring
              </p>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/#cocktails"
                  className="inline-flex justify-center rounded-xl border border-[#d8a95b]/50 bg-gradient-to-b from-[#a56f3e] to-[#7b4c2f] px-5 py-3 text-sm font-semibold text-white shadow-[0_7px_20px_rgba(123,76,47,0.22)] transition hover:-translate-y-0.5 hover:from-[#b47b45] hover:to-[#895536] hover:shadow-[0_10px_26px_rgba(123,76,47,0.3)]"
                >
                  Explore more cocktails
                  <span className="ml-2">→</span>
                </Link>

                <RandomCocktailButton variant="light" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-8 border-t border-[#d8a95b]/30 bg-[#2f241f] shadow-[0_-8px_30px_rgba(47,36,31,0.08)]">
        <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div className="flex items-center gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#e8bd73]">
              The Cocktail Edit
            </p>

            <span className="hidden h-px w-10 bg-[#d8a95b]/60 sm:block" />
          </div>

          <p className="text-xs text-white/50">Discover. Mix. Enjoy.</p>
        </div>
      </footer>
    </main>
  );
}
