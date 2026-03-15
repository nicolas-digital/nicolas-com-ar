import Link from "next/link";
import type { Metadata } from "next";
import { getAllTopics } from "@/lib/topics";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Temas | Prof. Nicolás Valenzuela",
  description:
    "Explorar temas de especialización: Digital Commerce, Retail Media, Inteligencia Artificial y Transformación Digital. Análisis, frameworks y perspectivas sobre el futuro del comercio digital en América Latina.",
};

export default function TopicsPage() {
  const allTopics = getAllTopics();
  const allPosts = getAllPosts();

  // Contar posts por tema
  const postCountByTopic = allTopics.reduce(
    (acc, topic) => {
      const count = allPosts.filter(
        (post) => post.topic.toLowerCase() === topic.slug.toLowerCase()
      ).length;
      return { ...acc, [topic.slug]: count };
    },
    {} as Record<string, number>
  );

  const topicEmojis: Record<string, string> = {
    "retail-media": "🛍️",
    "digital-commerce": "💻",
    "ai": "🤖",
    "digital-transformation": "⚡",
  };

  return (
    <main className="bg-cream">
      {/* Hero Section */}
      <section className="border-b border-gray-200">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <p className="text-xs font-semibold tracking-wider" style={{ color: "#8B7355" }}>
            ● ÁREAS DE CONOCIMIENTO
          </p>

          <h1 className="mt-4 md:mt-6 text-3xl md:text-5xl font-bold leading-tight font-serif text-ink">
            Temas que estructuran el trabajo
          </h1>

          <p className="mt-6 text-base md:text-lg leading-7 md:leading-8 text-muted max-w-3xl">
            Los contenidos publicados se organizan alrededor de ejes que conectan tecnología, negocio y experiencia de cliente. Cada tema agrupa artículos, análisis y reflexiones sobre su evolución en América Latina.
          </p>
        </div>
      </section>

      {/* Topics Grid */}
      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {allTopics.map((topic) => {
              const postCount = postCountByTopic[topic.slug] || 0;
              const emoji = topicEmojis[topic.slug] || "📌";
              return (
                <Link
                  key={topic.slug}
                  href={`/topics/${topic.slug}`}
                  className="group p-8 rounded-lg border-2 border-forest/30 hover:border-gold hover:bg-cream transition-all"
                  style={{ backgroundColor: "rgba(26, 58, 42, 0.05)" }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-4xl">{emoji}</span>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: "#C8A96E", color: "white" }}>
                      {postCount} {postCount === 1 ? "artículo" : "artículos"}
                    </span>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold font-serif text-ink group-hover:text-forest transition-colors">
                    {topic.title}
                  </h2>

                  <p className="mt-3 leading-6 text-muted text-sm">
                    {topic.description}
                  </p>

                  <div className="mt-6 flex items-center text-sm font-semibold" style={{ color: "#1A3A2A" }}>
                    Explorar tema
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* System Description */}
      <section className="border-b border-gray-200">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-ink mb-4">
            Estructura temática interconectada
          </h2>
          <p className="text-base md:text-lg leading-8 text-muted max-w-3xl">
            Estos temas forman un sistema interconectado donde la transformación digital, la inteligencia artificial y los nuevos modelos de negocio en retail media se entrelazan. Cada tema es un punto de entrada para explorar cómo estas áreas evolucionan y se impactan mutuamente en el contexto de América Latina.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ backgroundColor: "#1A3A2A" }}>
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24 text-white">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">
            Profundiza en cada área
          </h2>
          <p className="text-lg leading-8 text-white/90 max-w-2xl mb-8">
            Cada tema agrupa contenido especializado, marcos de trabajo y perspectivas para entender la transformación digital en retail y ecommerce.
          </p>

          <Link
            href="/insights"
            className="inline-block rounded-full bg-cream text-ink px-6 py-3 text-sm md:text-base font-semibold hover:bg-white transition-colors"
          >
            Ver todos los insights
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