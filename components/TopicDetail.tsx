import Link from "next/link";
import type { Topic } from "@/lib/topics";
import type { PostMeta } from "@/lib/posts";

type TopicDetailProps = {
  topic: Topic;
  posts: PostMeta[];
  relatedTopics: Topic[];
};

export function TopicDetail({
  topic,
  posts,
  relatedTopics,
}: TopicDetailProps) {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <section className="max-w-4xl">
        <Link
          href="/topics"
          className="text-sm font-semibold text-blue-600 hover:text-blue-700"
        >
          ← Volver a temas
        </Link>

        <p className="mt-6 text-sm uppercase tracking-[0.2em] text-blue-600">
          Tema
        </p>

        <h1 className="mt-4 text-5xl font-bold tracking-tight">
          {topic.title}
        </h1>

        <p className="mt-6 text-xl leading-8 text-gray-600">
          {topic.longDescription || topic.description}
        </p>
      </section>

      {/* Artículos en este tema */}
      {posts.length > 0 && (
        <section className="mt-16">
          <h2 className="text-3xl font-bold">
            {posts.length} {posts.length === 1 ? "artículo" : "artículos"}
          </h2>

          <div className="mt-8 grid gap-6">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="rounded-2xl border border-gray-200 p-6 transition-all hover:border-blue-500 hover:shadow-md"
              >
                <p className="text-sm font-medium text-blue-700 uppercase tracking-wide">
                  {post.topic}
                </p>

                <h3 className="mt-3 text-2xl font-bold hover:text-blue-700">
                  <Link href={`/insights/${post.slug}`}>{post.title}</Link>
                </h3>

                <p className="mt-3 text-gray-600">{post.description}</p>

                <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("es-AR", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <Link
                    href={`/insights/${post.slug}`}
                    className="font-semibold text-blue-600 hover:text-blue-700"
                  >
                    Leer →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {posts.length === 0 && (
        <section className="mt-16 rounded-2xl border border-gray-200 bg-gray-50 p-8 text-center">
          <p className="text-gray-600">
            Aún no hay artículos publicados en este tema.
          </p>
        </section>
      )}

      {/* Temas relacionados */}
      {relatedTopics.length > 0 && (
        <section className="mt-20">
          <h2 className="text-3xl font-bold">Temas relacionados</h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {relatedTopics.map((relatedTopic) => (
              <Link
                key={relatedTopic.slug}
                href={`/topics/${relatedTopic.slug}`}
                className="rounded-2xl border border-gray-200 p-4 transition-all hover:border-blue-500 hover:bg-blue-50"
              >
                <h3 className="font-semibold hover:text-blue-700">
                  {relatedTopic.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  {relatedTopic.description}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
