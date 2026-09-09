import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-50 px-4">
      <div className="text-center">
        <p className="mb-2 text-sm font-medium text-zinc-500">404</p>

        <h1 className="mb-3 text-3xl font-bold text-zinc-900">
          Cocktail not found
        </h1>

        <p className="mb-6 text-zinc-600">
          We could not find the cocktail you were looking for.
        </p>

        <Link
          href="/"
          className="inline-block rounded-lg bg-zinc-900 px-5 py-2 font-medium text-white transition hover:bg-zinc-700"
        >
          Back to cocktails
        </Link>
      </div>
    </main>
  );
}
