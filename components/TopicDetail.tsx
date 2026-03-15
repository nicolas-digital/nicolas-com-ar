import Link from "next/link";
import type { Topic } from "@/lib/topics";
import type { PostMeta } from "@/lib/posts";

type TopicDetailProps = {
  topic: Topic;
  posts: PostMeta[];
  relatedTopics: Topic[];
};

const topicEmojis: Record<string, string> = {
  "retail-media": "🛍️",
  "digital-commerce": "💻",
  "ai": "🤖",
  "digital-transformation": "⚡",
};

export function TopicDetail({
  topic,
  posts,
  relatedTopics,
}: TopicDetailProps) {
  const emoji = topicEmojis[topic.slug] || "📌";

  return (
    <main className="bg-cream">
      {/* Header */}
      <section className="border-b border-gray-200">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <Link
            href="/topics"
            className="text-sm font-semibold text-forest hover:text-forest/80 transition-colors"
            style={{ color: "#1A3A2A" }}
          >
            ← Volver a temas
          </Link>

          <div className="mt-8 flex items-center gap-4">
            <span className="text-5xl">{emoji}</span>
            <div>
              <p className="text-xs font-semibold tracking-wider" style={{ color: "#8B7355" }}>
                ● TEMA
              </p>
              <h1 className="mt-2 text-3xl md:text-5xl font-bold leading-tight font-serif text-ink">
                {topic.title}
              </h1>
            </div>
          </div>

          <p className="mt-8 text-base md:text-lg leading-7 md:leading-8 text-muted max-w-3xl">
            {topic.longDescription || topic.description}
          </p>

          <div className="mt-8 flex items-center gap-2">
            <span className="text-sm font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: "#C8A96E", color: "white" }}>
              {posts.length} {posts.length === 1 ? "artículo" : "artículos"}
            </span>
          </div>
        </div>
      </section>

      {/* Artículos en este tema */}
      {posts.length > 0 && (
        <section className="border-b border-gray-200 bg-white">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-ink mb-12">
              Artículos en este tema
            </h2>

            <div className="space-y-6">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/insights/${post.slug}`}
                  className="block p-6 rounded-lg border-2 border-forest/20 hover:border-gold hover:bg-cream transition-all"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <p className="text-xs font-semibold" style={{ color: "#C8A96E" }}>
                        {post.topic}
                      </p>

                      <h3 className="mt-3 text-xl md:text-2xl font-bold font-serif text-ink hover:text-forest transition-colors">
                        {post.title}
                      </h3>

                      <p className="mt-3 text-muted line-clamp-2">
                        {post.description}
                      </p>

                      <div className="mt-4 flex items-center gap-4">
                        <time
                          dateTime={post.date}
                          className="text-xs text-muted font-semibold"
                        >
                          {new Date(post.date).toLocaleDateString("es-AR", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </time>
                        <span
                          className="text-xs font-semibold"
                          style={{ color: "#1A3A2A" }}
                        >
                          Leer →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {posts.length === 0 && (
        <section className="border-b border-gray-200">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-24 text-center">
            <p className="text-lg text-muted">
              Aún no hay artículos publicados en este tema.
            </p>
          </div>
        </section>
      )}

      {/* Temas relacionados */}
      {relatedTopics.length > 0 && (
        <section className="border-b border-gray-200 bg-white">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-ink mb-12">
              Temas relacionados
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedTopics.map((relatedTopic) => {
                const relEmoji = topicEmojis[relatedTopic.slug] || "📌";
                return (
                  <Link
                    key={relatedTopic.slug}
                    href={`/topics/${relatedTopic.slug}`}
                    className="p-6 rounded-lg border-2 border-forest/20 hover:border-gold hover:bg-cream transition-all"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-3xl">{relEmoji}</span>
                      <div>
                        <h3 className="font-bold font-serif text-ink text-lg hover:text-forest transition-colors">
                          {relatedTopic.title}
                        </h3>
                        <p className="mt-2 text-sm text-muted">
                          {relatedTopic.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section style={{ backgroundColor: "#1A3A2A" }}>
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24 text-white">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">
            Explora más temas
          </h2>
          <p className="text-lg leading-8 text-white/90 max-w-2xl mb-8">
            Descubre cómo se interconectan la transformación digital, retail media e inteligencia artificial en América Latina.
          </p>

          <Link
            href="/topics"
            className="inline-block rounded-full bg-cream text-ink px-6 py-3 text-sm md:text-base font-semibold hover:bg-white transition-colors"
          >
            Ver todos los temas
          </Link>
        </div>
      </section>

      {/* Related Links */}
      <section className="bg-white border-t border-gray-200">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/about"
              className="p-6 rounded-lg border-2 border-forest/20 hover:border-gold hover:bg-cream transition-all"
            >
              <p className="text-sm font-semibold" style={{ color: "#1A3A2A" }}>Sobre mí</p>
              <h3 className="text-lg font-bold font-serif text-ink mt-2">Experiencia</h3>
              <p className="text-sm text-muted mt-2">Trayectoria, expertise y enfoque</p>
            </Link>

            <Link
              href="/insights"
              className="p-6 rounded-lg border-2 border-gold/20 hover:border-gold hover:bg-cream transition-all"
            >
              <p className="text-sm font-semibold" style={{ color: "#C8A96E" }}>Contenido</p>
              <h3 className="text-lg font-bold font-serif text-ink mt-2">Insights</h3>
              <p className="text-sm text-muted mt-2">Análisis sobre retail, ecommerce e IA</p>
            </Link>

            <Link
              href="/consulting"
              className="p-6 rounded-lg border-2 border-forest/20 hover:border-gold hover:bg-cream transition-all"
            >
              <p className="text-sm font-semibold" style={{ color: "#1A3A2A" }}>Servicios</p>
              <h3 className="text-lg font-bold font-serif text-ink mt-2">Consulting</h3>
              <p className="text-sm text-muted mt-2">Strategic advisory y transformación</p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
