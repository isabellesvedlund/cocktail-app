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

    router.push(`/?${params.toString()}`);
  }

  return (
    <select
      onChange={(event) => handleCategoryChange(event.target.value)}
      defaultValue={searchParams.get("category") ?? ""}
      className="mb-8 rounded-lg border px-4 py-2"
    >
      <option value="">All categories</option>

      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
}
