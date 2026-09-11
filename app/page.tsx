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
      <section
        className="relative min-h-[360px] bg-cover bg-center"
        style={{ backgroundImage: "url('/hotel-bar.avif')" }}
      >
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative mx-auto flex min-h-[360px] max-w-4xl flex-col justify-center px-6 py-10 sm:px-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#d9b98c]">
            The Cocktail Edit
          </p>

          <h1 className="max-w-xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Find your next favourite cocktail.
          </h1>

          <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-200 sm:text-base">
            Discover classic favourites, modern mixes and inspiration for your
            next evening.
          </p>

          <div className="mt-6 max-w-2xl rounded-2xl border border-white/20 bg-black/25 p-4 shadow-xl backdrop-blur-sm">
            <SearchBar />

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <CategoryFilter categories={categories} />

                <span className="hidden text-xs uppercase tracking-[0.15em] text-white/60 md:block">
                  Browse by category
                </span>
              </div>

              <RandomCocktailButton />
            </div>
          </div>
        </div>
      </section>

      <section id="cocktails" className="mx-auto max-w-4xl px-6 py-10 sm:px-8">
        <div className="mb-8 flex items-end justify-between border-b border-[#d8c9bb] pb-5">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#8b5e4b]">
              Explore
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-[#2f241f]">
              Cocktails
            </h2>
          </div>

          <p className="hidden max-w-xs text-right text-sm leading-6 text-[#76665c] sm:block">
            Discover timeless classics and find something new for your next
            evening.
          </p>
        </div>

        {cocktails.length > 0 ? (
          <CocktailGrid cocktails={cocktails} />
        ) : (
          <div className="rounded-2xl border border-[#d8c9bb] bg-[#fffaf3] px-6 py-10 text-center shadow-sm">
            <h2 className="mb-2 text-xl font-semibold text-[#2f241f]">
              No cocktails found
            </h2>

            <p className="text-[#76665c]">
              Try another search or choose a different category.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}
