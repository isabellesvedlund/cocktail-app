export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-50 px-4">
      <div className="text-center">
        <div className="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-4 border-zinc-300 border-t-zinc-900" />

        <p className="text-zinc-600">Loading cocktails...</p>
      </div>
    </main>
  );
}
