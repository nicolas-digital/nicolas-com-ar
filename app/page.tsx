import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import AnimatedCounter from "@/components/AnimatedCounter";
import CredentialsBand from "@/components/CredentialsBand";

export const metadata: Metadata = {
  title: "Digital Strategy, Ecommerce, Retail Media & AI",
  description:
    "Nicolás Valenzuela shares insights and strategic advisory on digital transformation, ecommerce, retail media and applied AI for retailers, brands and technology companies in Latin America.",
};

export default function HomePage() {
  const allPosts = getAllPosts();
  const recentPosts = allPosts.slice(0, 2);

  return (
    <main className="bg-cream text-ink">
      {/* Hero Section */}
      <section className="border-b border-gray-200 bg-cream">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="grid grid-cols-[1fr_auto] gap-4 md:grid-cols-2 md:gap-16 items-start">
            {/* Left: Text */}
            <div>
              {/* Eyebrow */}
              <p className="text-xs font-semibold tracking-wider" style={{ color: "#8B7355" }}>
                ● BUENOS AIRES · LATAM
              </p>

              {/* H1 */}
              <h1 className="mt-6 text-4xl md:text-5xl font-bold leading-tight font-serif">
                Convierto visión estratégica en innovación con resultados reales
              </h1>

              {/* Subtitle */}
              <p className="mt-6 text-base leading-8 text-muted">
                Retail, ecommerce, retail media e IA aplicada — acompaño a CEOs y organizaciones en Latinoamérica a transformar sus negocios digitales con ejecución concreta, no solo estrategia en papel.
              </p>

              {/* Tags */}
              <div className="mt-8 flex flex-wrap gap-2">
                {["Retail", "Ecommerce", "Retail Media", "IA aplicada", "Innovación", "Negocios digitales"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border px-3 py-1.5 text-xs font-medium"
                    style={{
                      borderColor: "#D4B896",
                      color: "#8B6040",
                      backgroundColor: "white",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  href="/consulting"
                  className="rounded-full bg-ink px-6 py-2.5 text-sm font-semibold text-cream hover:bg-ink/90 transition-colors"
                >
                  Hablemos →
                </Link>

                <Link
                  href="/insights"
                  className="rounded-full border border-ink px-6 py-2.5 text-sm font-semibold text-ink hover:bg-cream/50 transition-colors"
                >
                  Ver insights
                </Link>
              </div>
            </div>

            {/* Right: Photo */}
            <div className="flex justify-start md:justify-end relative">
              <div className="relative group">
                <Image
                  src="/images/nicolas-valenzuela.png"
                  alt="Nicolás Valenzuela — Digital Transformation Advisor"
                  width={280}
                  height={280}
                  priority
                  sizes="(max-width: 768px) 96px, 280px"
                  className="rounded-full md:rounded-2xl w-24 h-24 md:w-80 md:h-80 object-cover object-top shadow-lg flex-shrink-0"
                />
                <a
                  href="https://www.youtube.com/watch?v=PBdczRfTpPY&list=PLEecx-sXSaZ2_k6yTq4BumjObnOq6kpKC"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center rounded-full md:rounded-2xl bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                >
                  <div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-white/90 rounded-full group-hover:bg-white transition-colors">
                    <svg
                      className="w-6 h-6 md:w-8 md:h-8 text-forest ml-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Band */}
      <CredentialsBand />

      {/* Metrics */}
      <section className="border-b border-gray-200 bg-cream">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex flex-row items-center justify-start gap-8 md:gap-12">
            <AnimatedCounter end={20} duration={2500} label="en digital commerce" />
            <div className="border-l border-gray-300 h-12" />
            <AnimatedCounter end={5} duration={2000} label="universidades" />
            <div className="border-l border-gray-300 h-12" />
            <AnimatedCounter end="Top 5" duration={1500} label="Retail Media Latam" />
          </div>

          {/* Expertise Tags */}
          <div className="mt-12 flex flex-wrap gap-2">
            {["Retail Media", "IA Aplicada", "Digital Commerce", "Transformación Digital", "MIT CDO 2026"].map((tag) => (
              <span
                key={tag}
                className="rounded-full border px-3 py-1.5 text-xs font-medium transition-colors"
                style={{
                  borderColor: "#D4B896",
                  color: "#8B6040",
                  backgroundColor: "white",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="bg-white border-b border-gray-200">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-ink">
              Experiencia en transformación digital
            </h2>

            <p className="mt-6 text-base leading-8 text-muted">
              Gerente de Digital Commerce en Cencosud S.A. (2021–2025), liderando
              las unidades digitales de Jumbo, Easy, Disco, Blaisten y Vea.
              Escalé Cencosud Media al Top 5 Retail Media Networks de
              Latinoamérica según eMarketer, con +43% de crecimiento en EBITDA.
            </p>

            <p className="mt-4 text-base leading-8 text-muted">
              Director en VTEX para Argentina, Paraguay, Uruguay y Bolivia.
              Fundador de andabi, consultora enfocada en analytics y crecimiento
              digital.
            </p>

            <div className="mt-8">
              <Link
                href="/about"
                className="text-sm font-semibold text-forest hover:text-forest/80 transition-colors inline-flex items-center gap-2"
              >
                Ver perfil completo
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Areas Section */}
      <section className="bg-cream border-b border-gray-200">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-ink mb-12">
            Áreas de especialización
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Digital Commerce",
                description:
                  "Modelos de crecimiento digital, operación ecommerce y omnicanalidad.",
              },
              {
                title: "Retail Media",
                description:
                  "Monetización digital, ecosistemas retailer-marca y datos como ingresos.",
              },
              {
                title: "Inteligencia Artificial",
                description:
                  "Casos de uso de IA aplicados a negocio, operación y customer experience.",
              },
            ].map((area) => (
              <div
                key={area.title}
                className="rounded-lg border border-gray-300 bg-white p-6 hover:border-forest/30 hover:shadow-md transition-all"
              >
                <h3 className="text-lg font-semibold font-serif text-ink">
                  {area.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-forest text-cream">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold font-serif leading-tight">
              ¿Liderás una agenda de transformación digital?
            </h2>

            <p className="mt-6 text-base leading-8" style={{ color: "rgb(248, 246, 241, 0.7)" }}>
              Acompaño a equipos de retail, tecnología y marcas en estrategia,
              roadmaps y ejecución de transformación digital.
            </p>

            <div className="mt-8">
              <Link
                href="/consulting"
                className="inline-block rounded-lg bg-cream px-8 py-3 text-sm font-semibold text-forest hover:bg-cream/90 transition-colors"
              >
                Contactar →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Insights */}
      <section className="bg-cream border-t border-gray-200">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-ink mb-12">
            Últimos insights
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {recentPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/insights/${post.slug}`}
                className="group rounded-lg border border-gray-300 bg-white p-6 hover:border-forest/30 hover:shadow-md transition-all"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-forest">
                  {post.topic}
                </p>
                <h3 className="mt-3 text-lg font-semibold font-serif text-ink group-hover:text-forest transition-colors">
                  {post.title}
                </h3>
                <div className="mt-4 text-sm font-semibold text-forest">
                  Leer →
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12">
            <Link
              href="/insights"
              className="text-sm font-semibold text-forest hover:text-forest/80 transition-colors inline-flex items-center gap-2"
            >
              Ver todos los insights
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
