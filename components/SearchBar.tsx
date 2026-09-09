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
    <form
      onSubmit={handleSubmit}
      className="mb-6 flex flex-col gap-2 sm:flex-row"
    >
      <input
        type="text"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        placeholder="Search cocktails..."
        className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-2 text-zinc-900 outline-none focus:border-zinc-500"
      />

      <button
        type="submit"
        className="w-full rounded-lg bg-zinc-900 px-5 py-2 font-medium text-white transition hover:bg-zinc-700 sm:w-auto"
      >
        Search
      </button>
    </form>
  );
}
