import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function InsightsPage() {
  const posts = getAllPosts();

  return (
    <main className="max-w-5xl mx-auto py-20 px-6">
      <h1 className="text-4xl font-bold mb-6">Insights</h1>

      <p className="text-lg text-gray-600 mb-12">
        Artículos sobre innovación, inteligencia artificial y transformación digital.
      </p>

      <div className="grid gap-8">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="rounded-2xl border border-gray-200 p-6"
          >
            <p className="text-sm font-medium text-blue-700 uppercase tracking-wide">
              {post.topic}
            </p>

            <h2 className="mt-2 text-2xl font-bold">{post.title}</h2>

            <p className="mt-3 text-gray-600">{post.description}</p>

            <p className="mt-3 text-sm text-gray-400">{post.date}</p>

            <Link
              href={`/insights/${post.slug}`}
              className="mt-4 inline-block text-sm font-semibold text-blue-700"
            >
              Leer insight →
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}