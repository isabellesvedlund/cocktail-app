"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-50 px-4">
      <div className="max-w-md text-center">
        <h1 className="mb-3 text-3xl font-bold text-zinc-900">
          Something went wrong
        </h1>

        <p className="mb-6 text-zinc-600">
          We could not load the cocktail data. Please try again.
        </p>

        <button
          onClick={() => reset()}
          className="rounded-lg bg-zinc-900 px-5 py-2 font-medium text-white transition hover:bg-zinc-700"
        >
          Try again
        </button>
      </div>
    </main>
  );
}
