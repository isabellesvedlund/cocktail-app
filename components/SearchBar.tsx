"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedSearch = searchTerm.trim();

    if (!trimmedSearch) {
      router.push("/");
      return;
    }

    router.push(`/?search=${encodeURIComponent(trimmedSearch)}`);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
      <label htmlFor="cocktail-search" className="sr-only">
        Search cocktails
      </label>

      <input
        id="cocktail-search"
        type="text"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        placeholder="Search for a cocktail..."
        className="min-w-0 flex-1 rounded-xl border border-[#e5d6c4] bg-[#fffdf9] px-4 py-3 text-sm text-[#2f241f] shadow-[inset_0_1px_2px_rgba(74,52,38,0.06)] outline-none transition placeholder:text-[#8b7b72] focus:border-[#d8a95b] focus:ring-2 focus:ring-[#d8a95b]/25"
      />

      <button
        type="submit"
        className="rounded-xl border border-[#efc77f]/60 bg-gradient-to-b from-[#c28b43] to-[#8f5e2b] px-6 py-3 text-sm font-semibold text-white shadow-[0_5px_16px_rgba(194,139,67,0.28)] transition hover:-translate-y-0.5 hover:from-[#d09b50] hover:to-[#9c6731] hover:shadow-[0_8px_22px_rgba(194,139,67,0.35)] focus:outline-none focus:ring-2 focus:ring-[#e1bd8c]"
      >
        Search
      </button>
    </form>
  );
}
