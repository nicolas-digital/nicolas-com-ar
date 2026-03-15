import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import InsightCard from "@/components/InsightCard";

export default function InsightsPage() {
  const posts = getAllPosts();

  const featured = posts.find((post) => post.featured) ?? posts[0];
  const rest = posts.filter((post) => post.slug !== featured?.slug);

  return (
    <main className="bg-cream">
      {/* Hero Section */}
      <section className="border-b border-gray-200">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <p className="text-xs font-semibold tracking-wider" style={{ color: "#8B7355" }}>
            ● INSIGHTS & ANÁLISIS
          </p>

          <h1 className="mt-4 md:mt-6 text-3xl md:text-5xl font-bold leading-tight font-serif text-ink">
            Ideas sobre inteligencia artificial, retail media y transformación digital
          </h1>

          <p className="mt-6 text-base md:text-lg leading-7 md:leading-8 text-muted max-w-3xl">
            Reflexiones, análisis y aprendizajes sobre cómo están evolucionando los negocios digitales en América Latina. Contenido basado en experiencia real y tendencias de industria.
          </p>
        </div>
      </section>

      {/* Featured Insight */}
      {featured && (
        <section className="border-b border-gray-200 bg-white">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
            <Link
              href={`/insights/${featured.slug}`}
              className="group block overflow-hidden rounded-lg border-2 border-gold/30 hover:border-gold transition-all"
              style={{ backgroundColor: "rgba(200, 169, 110, 0.05)" }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                {featured.coverImage && (
                  <div className="relative min-h-[280px] bg-neutral-200 order-2 md:order-1">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={featured.coverImage}
                      alt={featured.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                )}

                <div className="flex flex-col justify-center p-8 md:p-10 order-1 md:order-2">
                  <p className="text-xs font-semibold" style={{ color: "#C8A96E" }}>
                    ✨ INSIGHT DESTACADO
                  </p>

                  <h2 className="mt-4 text-2xl md:text-3xl font-bold font-serif leading-tight text-ink group-hover:text-forest transition-colors">
                    {featured.title}
                  </h2>

                  <p className="mt-4 max-w-xl text-sm md:text-base leading-7 text-muted">
                    {featured.description}
                  </p>

                  <div className="mt-6 flex items-center justify-between">
                    <p className="text-xs text-muted font-semibold">{featured.date}</p>
                    {featured.topic && (
                      <span className="text-xs font-semibold px-3 py-1 rounded-full border" style={{ borderColor: "#1A3A2A", color: "#1A3A2A", backgroundColor: "rgba(26, 58, 42, 0.1)" }}>
                        {featured.topic}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* All Insights by Topic */}
      <section className="border-b border-gray-200">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-ink mb-12">
            Todos los insights
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <InsightCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Topics Connection */}
      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-ink mb-4">
            Explora por tema
          </h2>
          <p className="text-base md:text-lg leading-7 text-muted max-w-3xl mb-12">
            Los insights se organizan en 5 pilares del Digital Retail Knowledge Graph. Cada tema agrupa contenido relacionado y es punto de entrada para profundizar.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link
              href="/topics/retail-strategy"
              className="p-6 rounded-lg border-2 border-forest/30 hover:border-forest hover:bg-forest/5 transition-all"
            >
              <p className="text-lg font-bold font-serif text-ink">📊 Retail Strategy</p>
              <p className="text-sm text-muted mt-2">Modelos de negocio, ecosistemas digitales y transformación</p>
            </Link>

            <Link
              href="/topics/commerce-platforms"
              className="p-6 rounded-lg border-2 border-gold/30 hover:border-gold hover:bg-gold/5 transition-all"
            >
              <p className="text-lg font-bold font-serif text-ink">🛒 Commerce Platforms</p>
              <p className="text-sm text-muted mt-2">Arquitectura de plataformas, marketplaces y social commerce</p>
            </Link>

            <Link
              href="/topics/ai-retail"
              className="p-6 rounded-lg border-2 border-forest/30 hover:border-forest hover:bg-forest/5 transition-all"
            >
              <p className="text-lg font-bold font-serif text-ink">🤖 AI & Digital Retail</p>
              <p className="text-sm text-muted mt-2">Personalización, search, automatización y sistemas agentic</p>
            </Link>

            <Link
              href="/topics/digital-operations"
              className="p-6 rounded-lg border-2 border-gold/30 hover:border-gold hover:bg-gold/5 transition-all"
            >
              <p className="text-lg font-bold font-serif text-ink">⚙️ Digital Operations</p>
              <p className="text-sm text-muted mt-2">Supply chain, fulfillment, automatización y frameworks operacionales</p>
            </Link>

            <Link
              href="/topics/retail-media-marketing"
              className="p-6 rounded-lg border-2 border-forest/30 hover:border-forest hover:bg-forest/5 transition-all"
            >
              <p className="text-lg font-bold font-serif text-ink">📢 Retail Media & Marketing</p>
              <p className="text-sm text-muted mt-2">Monetización, medios propios, creator commerce y engagement</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ backgroundColor: "#1A3A2A" }}>
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24 text-white">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">
            ¿Querés insights directamente en tu inbox?
          </h2>
          <p className="text-lg leading-8 text-white/90 max-w-2xl mb-8">
            Análisis, reflexiones y aprendizajes sobre retail, ecommerce e IA en América Latina—directo a tu email.
          </p>

          <div className="flex flex-wrap gap-3 md:gap-4">
            <a
              href="mailto:nicolas@nicolas.com.ar?subject=Quiero%20recibir%20insights"
              className="rounded-full bg-cream text-ink px-6 py-3 text-sm md:text-base font-semibold hover:bg-white transition-colors"
            >
              Suscribirse
            </a>

            <Link
              href="/consulting"
              className="rounded-full border border-white/30 px-6 py-3 text-sm md:text-base font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Consulting
            </Link>
          </div>
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
              href="/consulting"
              className="p-6 rounded-lg border-2 border-gold/20 hover:border-gold hover:bg-cream transition-all"
            >
              <p className="text-sm font-semibold" style={{ color: "#C8A96E" }}>Servicios</p>
              <h3 className="text-lg font-bold font-serif text-ink mt-2">Consulting</h3>
              <p className="text-sm text-muted mt-2">Strategic advisory y transformación</p>
            </Link>

            <Link
              href="/topics"
              className="p-6 rounded-lg border-2 border-forest/20 hover:border-gold hover:bg-cream transition-all"
            >
              <p className="text-sm font-semibold" style={{ color: "#1A3A2A" }}>Temas</p>
              <h3 className="text-lg font-bold font-serif text-ink mt-2">Topics</h3>
              <p className="text-sm text-muted mt-2">Explorar por categorías de interés</p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
