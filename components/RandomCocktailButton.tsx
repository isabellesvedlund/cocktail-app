"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { getRandomCocktail } from "@/lib/cocktailApi";

interface RandomCocktailButtonProps {
  variant?: "dark" | "light";
}

export default function RandomCocktailButton({
  variant = "dark",
}: RandomCocktailButtonProps) {
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

  const buttonStyles =
    variant === "light"
      ? "border-[#c28b43] bg-[#fffaf3] text-[#7b4c2f] shadow-[0_5px_16px_rgba(74,52,38,0.10)] hover:-translate-y-0.5 hover:border-[#a87938] hover:bg-[#f1e4d2] hover:shadow-[0_8px_20px_rgba(74,52,38,0.15)]"
      : "border-[#d8a95b]/70 bg-gradient-to-r from-[#d8a95b]/10 to-[#d8a95b]/5 text-[#f1d6b2] shadow-[0_4px_16px_rgba(216,169,91,0.10)] hover:-translate-y-0.5 hover:border-[#e8bd73] hover:bg-[#d8a95b]/20 hover:text-white hover:shadow-[0_7px_20px_rgba(216,169,91,0.18)]";

  return (
    <div className="sm:self-end">
      <button
        type="button"
        onClick={handleRandomCocktail}
        disabled={isLoading}
        className={`w-full whitespace-nowrap rounded-xl border px-5 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-[#e1bd8c]/40 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto ${buttonStyles}`}
      >
        {isLoading ? "Finding a cocktail..." : "✦ Surprise me"}
      </button>

      {error && (
        <p
          className={`mt-2 max-w-48 text-xs ${
            variant === "light" ? "text-red-700" : "text-red-200"
          }`}
        >
          {error}
        </p>
      )}
    </div>
  );
}
