"use client";

import { useRouter, useSearchParams } from "next/navigation";

interface CategoryFilterProps {
  categories: string[];
}

export default function CategoryFilter({ categories }: CategoryFilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  function handleCategoryChange(category: string) {
    const params = new URLSearchParams(searchParams.toString());

    if (category) {
      params.set("category", category);
      params.delete("search");
    } else {
      params.delete("category");
    }

    const query = params.toString();
    router.push(query ? `/?${query}` : "/");
  }

  return (
    <div className="w-full sm:max-w-64">
      <label
        htmlFor="category-filter"
        className="mb-2 block text-xs font-medium uppercase tracking-[0.18em] text-white/60"
      >
        Category
      </label>

      <select
        id="category-filter"
        onChange={(event) => handleCategoryChange(event.target.value)}
        defaultValue={searchParams.get("category") ?? ""}
        className="w-full cursor-pointer rounded-xl border border-white/20 bg-white/95 px-4 py-3 text-sm text-[#2f241f] shadow-sm outline-none transition focus:border-[#e1bd8c] focus:ring-2 focus:ring-[#e1bd8c]/30"
      >
        <option value="">All categories</option>

        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}
