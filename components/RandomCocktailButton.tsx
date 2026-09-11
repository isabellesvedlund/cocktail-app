"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { getRandomCocktail } from "@/lib/cocktailApi";

export default function RandomCocktailButton() {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleRandomCocktail() {
    try {
      setIsLoading(true);
      setError("");

      const cocktail = await getRandomCocktail();

      if (!cocktail) {
        setError("Could not find a cocktail.");
        return;
      }

      router.push(`/cocktails/${cocktail.id}`);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div>
      <button
        type="button"
        onClick={handleRandomCocktail}
        disabled={isLoading}
        className="rounded-xl border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isLoading ? "Finding a cocktail..." : "✦ Surprise me"}
      </button>

      {error && <p className="mt-2 text-sm text-red-200">{error}</p>}
    </div>
  );
}
