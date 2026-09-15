import CategoryFilter from "@/components/CategoryFilter";
import CocktailGrid from "@/components/CocktailGrid";
import Header from "@/components/Header";
import RandomCocktailButton from "@/components/RandomCocktailButton";
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
    <main className="min-h-screen bg-[#f6f1e8]">
      <Header />

      {/* HERO */}
      <section
        className="relative min-h-[430px] bg-cover bg-center"
        style={{ backgroundImage: "url('/hotel-bar.avif')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/20" />

        <div className="relative mx-auto flex min-h-[430px] max-w-5xl items-center px-6 pb-12 pt-24 sm:px-8">
          <div className="w-full max-w-2xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-[#d8a95b]" />

              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#e8bd73] [text-shadow:0_2px_8px_rgba(0,0,0,0.5)]">
                Curated cocktails
              </p>
            </div>

            <h1 className="max-w-xl text-4xl font-semibold leading-[1.08] tracking-tight text-white [text-shadow:0_3px_18px_rgba(0,0,0,0.55)] sm:text-5xl">
              Find your next
              <br />
              favourite cocktail.
            </h1>

            <p className="mt-4 max-w-lg text-sm leading-6 text-white/80 [text-shadow:0_2px_8px_rgba(0,0,0,0.45)] sm:text-base">
              Discover timeless classics, modern favourites and something new
              for your next evening.
            </p>

            <div className="mt-7 max-w-2xl rounded-2xl border border-[#d8a95b]/35 bg-[#21150f]/75 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.38)] backdrop-blur-md">
              <SearchBar />

              <div className="flex flex-col gap-3 border-t border-[#d8a95b]/20 pt-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex-1">
                  <CategoryFilter categories={categories} />
                </div>

                <RandomCocktailButton />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COCKTAIL COLLECTION */}
      <section
        id="cocktails"
        className="mx-auto max-w-5xl px-6 py-14 sm:px-8 sm:py-16"
      >
        <div className="relative mb-10 flex flex-col gap-4 border-b border-[#c9a66b]/50 pb-7 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-8 bg-[#b98a48]" />

              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#9a6b54]">
                The collection
              </p>

              <span className="h-px w-8 bg-[#b98a48]" />
            </div>

            <h2 className="text-3xl font-semibold tracking-tight text-[#2f241f] [text-shadow:0_2px_12px_rgba(93,63,43,0.12)] sm:text-4xl">
              Explore cocktails
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-[#76665c] sm:text-right">
            From familiar favourites to something unexpected. Pick a cocktail
            and discover the recipe.
          </p>
        </div>

        {cocktails.length > 0 ? (
          <CocktailGrid cocktails={cocktails} />
        ) : (
          <div className="rounded-2xl border border-[#c9a66b]/40 bg-[#fffaf3] px-6 py-12 text-center shadow-[0_8px_25px_rgba(74,52,38,0.08)]">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#a87938]">
              No results
            </p>

            <h2 className="text-xl font-semibold text-[#2f241f]">
              No cocktails found
            </h2>

            <p className="mt-2 text-sm text-[#76665c]">
              Try another search or choose a different category.
            </p>
          </div>
        )}
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#d8a95b]/30 bg-[#2f241f] shadow-[0_-8px_30px_rgba(47,36,31,0.08)]">
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
