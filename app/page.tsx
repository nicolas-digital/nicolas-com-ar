import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Digital Strategy, Ecommerce, Retail Media & AI",
  description:
    "Nicolás Valenzuela shares insights and strategic advisory on digital transformation, ecommerce, retail media and applied AI for retailers, brands and technology companies in Latin America.",
};

export default function HomePage() {
  return (
    <main className="bg-cream text-ink">
      {/* Hero Section */}
      <section className="border-b border-gray-200 bg-cream">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          {/* Eyebrow */}
          <p className="text-sm font-medium uppercase tracking-wider text-forest">
            Buenos Aires · Latam
          </p>

          {/* H1 */}
          <h1 className="mt-6 max-w-4xl text-5xl font-bold leading-tight font-serif md:text-6xl">
            Estrategia digital, ecommerce, retail media e inteligencia artificial
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
            Acompaño a retailers, marcas y compañías tecnológicas en América
            Latina a mejorar crecimiento, rentabilidad y experiencia de cliente
            mediante estrategia, datos y desarrollo de capacidades digitales
            sostenibles.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/consulting"
              className="rounded-lg bg-ink px-8 py-3 text-sm font-semibold text-cream hover:bg-ink/90 transition-colors"
            >
              Ver cómo ayudo
            </Link>

            <Link
              href="/insights"
              className="rounded-lg border-2 border-ink px-8 py-3 text-sm font-semibold text-ink hover:bg-gray-100 transition-colors"
            >
              Explorar insights
            </Link>
          </div>

          {/* Metrics */}
          <div className="mt-16 flex flex-wrap items-center gap-12 border-t border-gray-200 pt-12">
            <div className="flex-1 min-w-max">
              <p className="text-2xl font-bold font-serif text-forest">+20 años</p>
              <p className="mt-1 text-sm text-muted">en digital commerce</p>
            </div>

            <div className="hidden md:block w-px h-12 bg-gray-200" />

            <div className="flex-1 min-w-max">
              <p className="text-2xl font-bold font-serif text-forest">5</p>
              <p className="mt-1 text-sm text-muted">universidades</p>
            </div>

            <div className="hidden md:block w-px h-12 bg-gray-200" />

            <div className="flex-1 min-w-max">
              <p className="text-2xl font-bold font-serif text-forest">Top 5</p>
              <p className="mt-1 text-sm text-muted">Retail Media Latam</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white border-b border-gray-200">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-forest">
              Perfil
            </p>

            <h2 className="mt-4 text-3xl font-bold font-serif text-ink">
              Experiencia en transformación digital
            </h2>

            <p className="mt-6 text-lg leading-8 text-muted">
              Gerente de Digital Commerce en Cencosud S.A. (2021–2025), liderando
              las unidades digitales de Jumbo, Easy, Disco, Blaisten y Vea.
              Escalé Cencosud Media al Top 5 Retail Media Networks de
              Latinoamérica según eMarketer, con +43% de crecimiento en EBITDA.
            </p>

            <p className="mt-4 text-lg leading-8 text-muted">
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
          <div className="max-w-2xl mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider text-forest">
              Áreas de especialización
            </p>

            <h2 className="mt-4 text-3xl font-bold font-serif text-ink">
              Temas que estructuran el trabajo
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                className="rounded-lg border border-gray-200 bg-white p-6 hover:border-forest/30 hover:shadow-md transition-all"
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

          <div className="mt-12">
            <Link
              href="/topics"
              className="text-sm font-semibold text-forest hover:text-forest/80 transition-colors inline-flex items-center gap-2"
            >
              Explorar todos los temas
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-forest text-cream">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold font-serif leading-tight">
              ¿Necesitás asesoramiento estratégico en digital commerce o retail media?
            </h2>

            <p className="mt-6 text-lg leading-8 text-cream/80">
              Acompaño a equipos de retail, tecnología y marcas en estrategia,
              roadmaps y ejecución de transformación digital.
            </p>

            <div className="mt-8">
              <Link
                href="/consulting"
                className="inline-block rounded-lg bg-cream px-8 py-3 text-sm font-semibold text-forest hover:bg-cream/90 transition-colors"
              >
                Contactar
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Insights */}
      <section className="bg-cream border-t border-gray-200">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-2xl mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider text-forest">
              Contenido reciente
            </p>

            <h2 className="mt-4 text-3xl font-bold font-serif text-ink">
              Últimos insights publicados
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Retail Media 2025: de la visión global a la góndola",
                slug: "retail-media-2025-de-la-vision-global-a-la-gondola-en-latinoamerica",
                topic: "Retail Media",
              },
              {
                title: "Inteligencia Artificial in Finance 2025",
                slug: "inteligencia-artificial-in-finance-2025-lo-que-la-banca-nos-ensena-sobre-el-futuro-de-los-negocios",
                topic: "AI",
              },
            ].map((insight) => (
              <Link
                key={insight.slug}
                href={`/insights/${insight.slug}`}
                className="group rounded-lg border border-gray-200 bg-white p-6 hover:border-forest/30 hover:shadow-md transition-all"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-forest">
                  {insight.topic}
                </p>
                <h3 className="mt-3 text-lg font-semibold font-serif text-ink group-hover:text-forest transition-colors">
                  {insight.title}
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
