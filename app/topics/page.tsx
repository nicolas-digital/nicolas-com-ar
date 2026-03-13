import Link from "next/link";

export default function TopicsPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
      <h1 className="text-4xl font-bold">Topics</h1>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <Link href="/topics/ai" className="rounded-2xl border border-gray-200 p-6 hover:border-blue-500">
          <h2 className="text-2xl font-semibold">Artificial Intelligence</h2>
        </Link>

        <Link href="/topics/retail-media" className="rounded-2xl border border-gray-200 p-6 hover:border-blue-500">
          <h2 className="text-2xl font-semibold">Retail Media</h2>
        </Link>
      </div>
    </main>
  );
}