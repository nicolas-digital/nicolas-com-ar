import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sobre Prof. Nicolás Valenzuela",
  description:
    "Perfil profesional de Prof. Nicolás Valenzuela, desde Buenos Aires, Argentina, enfocado en digital commerce, retail media, inteligencia artificial y transformación de negocios en América Latina.",
};

export default function AboutPage() {
  const profileJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: "Sobre Prof. Nicolás Valenzuela",
    description:
      "Perfil profesional de Prof. Nicolás Valenzuela, desde Buenos Aires, Argentina, enfocado en digital commerce, retail media, inteligencia artificial y transformación organizacional en América Latina.",
    mainEntity: {
      "@type": "Person",
      name: "Prof. Nicolás Valenzuela",
      alternateName: ["Nicolás Valenzuela"],
      jobTitle: "Strategic Advisor",
      description:
        "Prof. Nicolás Valenzuela es un asesor estratégico radicado en Buenos Aires, Argentina, especializado en digital commerce, retail media, inteligencia artificial aplicada y transformación organizacional.",
      knowsAbout: [
        "Digital Commerce",
        "Retail Media",
        "Inteligencia Artificial",
        "Transformación Digital",
        "Customer Experience",
        "Ecommerce Strategy",
      ],
      homeLocation: {
        "@type": "Place",
        name: "Buenos Aires, Argentina",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Buenos Aires",
        addressCountry: "AR",
      },
      sameAs: [
        "https://www.linkedin.com/in/nvalenzuela/"
      ],
    },
    hasPart: [
      {
        "@type": "Article",
        headline:
          "Retail Media 2025: de la visión global a la góndola en Latinoamérica",
        url:
          "https://www.nicolas.com.ar/insights/retail-media-2025-de-la-vision-global-a-la-gondola-en-latinoamerica",
      },
      {
        "@type": "Article",
        headline:
          "Inteligencia Artificial in Finance 2025: lo que la banca nos enseña sobre el futuro de los negocios",
        url:
          "https://www.nicolas.com.ar/insights/inteligencia-artificial-in-finance-2025-lo-que-la-banca-nos-ensena-sobre-el-futuro-de-los-negocios",
      },
      {
        "@type": "Article",
        headline:
          "10 tecnologías emergentes para anticipar el futuro de los negocios en LATAM",
        url:
          "https://www.nicolas.com.ar/insights/10-tecnologias-emergentes-para-anticipar-el-futuro-de-los-negocios-en-latam",
      },
    ],
  };

  return (
    <main className="bg-cream">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profileJsonLd) }}
      />

      {/* Hero Section */}
      <section className="border-b border-gray-200">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <p className="text-xs font-semibold tracking-wider" style={{ color: "#8B7355" }}>
            ● SOBRE NICOLÁS
          </p>

          <h1 className="mt-4 md:mt-6 text-3xl md:text-5xl font-bold leading-tight font-serif text-ink">
            Estrategia, ejecución y transformación digital en retail, commerce e inteligencia artificial
          </h1>

          <p className="mt-6 text-base md:text-lg leading-7 md:leading-8 text-muted max-w-3xl">
            Más de 25 años trabajando en la intersección entre digital commerce, retail media, inteligencia artificial aplicada y transformación organizacional en América Latina. Mi enfoque: traducir visión estratégica en ejecución real.
          </p>
        </div>
      </section>

      {/* Bio Section */}
      <section className="border-b border-gray-200">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold font-serif text-ink">
                La trayectoria
              </h2>
              <p className="mt-4 leading-7 text-muted">
                Combina liderazgo en organizaciones de retail, plataformas tecnológicas y proyectos de transformación digital. Desde axeso5 hasta Cencosud, pasando por OLX, Intellignos, VTEX y andabi—cada rol ha sido una oportunidad para profundizar en ecommerce, marketing digital, customer experience y monetización de datos.
              </p>
              <p className="mt-4 leading-7 text-muted">
                Docente desde 2000 en universidades como UBA, UCEMA, ITBA y Universidad de Buenos Aires. Speaker en jornadas sobre innovación digital, marketing y emprendedorismo.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-lg border-2 border-gold/30" style={{ backgroundColor: "rgba(200, 169, 110, 0.05)" }}>
                <p className="text-3xl md:text-4xl font-bold font-serif text-gold">25+</p>
                <p className="mt-2 text-sm text-muted">Años en digital</p>
              </div>
              <div className="p-6 rounded-lg border-2 border-forest/30" style={{ backgroundColor: "rgba(26, 58, 42, 0.05)" }}>
                <p className="text-3xl md:text-4xl font-bold font-serif" style={{ color: "#1A3A2A" }}>4</p>
                <p className="mt-2 text-sm text-muted">Países en operación</p>
              </div>
              <div className="p-6 rounded-lg border-2 border-gold/30" style={{ backgroundColor: "rgba(200, 169, 110, 0.05)" }}>
                <p className="text-3xl md:text-4xl font-bold font-serif text-gold">100+</p>
                <p className="mt-2 text-sm text-muted">Empresas asesoradas</p>
              </div>
              <div className="p-6 rounded-lg border-2 border-forest/30" style={{ backgroundColor: "rgba(26, 58, 42, 0.05)" }}>
                <p className="text-3xl md:text-4xl font-bold font-serif" style={{ color: "#1A3A2A" }}>10+</p>
                <p className="mt-2 text-sm text-muted">Universidades</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-ink mb-4">
            Áreas de expertise
          </h2>
          <p className="text-base md:text-lg leading-7 text-muted max-w-3xl mb-12">
            Los temas que estructuran el trabajo y la producción pública conectan tecnología, negocio y experiencia de cliente.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg border-2 border-forest/30 hover:border-gold transition-colors" style={{ backgroundColor: "rgba(26, 58, 42, 0.05)" }}>
              <h3 className="text-lg font-bold font-serif text-ink">Digital Commerce</h3>
              <p className="mt-3 leading-6 text-muted text-sm">
                Modelos de crecimiento, operación ecommerce, omnicanalidad y capacidades organizacionales para negocios digitales.
              </p>
            </div>

            <div className="p-6 rounded-lg border-2 border-gold/30 hover:border-gold transition-colors" style={{ backgroundColor: "rgba(200, 169, 110, 0.05)" }}>
              <h3 className="text-lg font-bold font-serif text-ink">Retail Media</h3>
              <p className="mt-3 leading-6 text-muted text-sm">
                Monetización digital, ecosistemas entre retailers y marcas, y el rol de los datos en nuevas fuentes de ingresos.
              </p>
            </div>

            <div className="p-6 rounded-lg border-2 border-forest/30 hover:border-gold transition-colors" style={{ backgroundColor: "rgba(26, 58, 42, 0.05)" }}>
              <h3 className="text-lg font-bold font-serif text-ink">Inteligencia Artificial</h3>
              <p className="mt-3 leading-6 text-muted text-sm">
                Casos de uso de IA aplicados a negocio, operación y experiencia de cliente en entornos digitales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enfoque Section */}
      <section className="border-b border-gray-200">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-ink mb-6">
              Cómo funciona
            </h2>
            <p className="text-base md:text-lg leading-8 text-muted mb-8">
              El trabajo se centra en traducir visión estratégica en capacidades concretas. Esto implica:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl">
            <div>
              <p className="text-sm font-semibold" style={{ color: "#C8A96E" }}>Diagnóstico</p>
              <p className="mt-2 text-sm leading-6 text-muted">
                Análisis profundo de contexto, capacidades y oportunidades en tu organización.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold" style={{ color: "#1A3A2A" }}>Priorización</p>
              <p className="mt-2 text-sm leading-6 text-muted">
                Identificación de oportunidades de mayor impacto y viabilidad.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold" style={{ color: "#C8A96E" }}>Roadmap</p>
              <p className="mt-2 text-sm leading-6 text-muted">
                Diseño de ruta clara con hitos, recursos y timing definidos.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold" style={{ color: "#1A3A2A" }}>Ejecución</p>
              <p className="mt-2 text-sm leading-6 text-muted">
                Acompañamiento a equipos en la transformación de estrategia en resultados reales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ backgroundColor: "#1A3A2A" }}>
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24 text-white">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">
            Hablemos de tu estrategia
          </h2>
          <p className="text-lg leading-8 text-white/90 max-w-2xl mb-8">
            Si trabajas en retail, ecommerce, retail media o transformación digital en Latinoamérica, me gustaría conocer tu contexto.
          </p>

          <div className="flex flex-wrap gap-3 md:gap-4">
            <a
              href="https://calendly.com/nicolasvalenzuela"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-cream text-ink px-6 py-3 text-sm md:text-base font-semibold hover:bg-white transition-colors"
            >
              Calendly
            </a>

            <a
              href="mailto:nicolas@nicolas.com.ar"
              className="rounded-full border border-white/30 px-6 py-3 text-sm md:text-base font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Email
            </a>

            <a
              href="https://www.linkedin.com/in/nvalenzuela/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/30 px-6 py-3 text-sm md:text-base font-semibold text-white hover:bg-white/10 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="bg-white border-t border-gray-200">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/consulting"
              className="p-6 rounded-lg border-2 border-forest/20 hover:border-gold hover:bg-cream transition-all"
            >
              <p className="text-sm font-semibold" style={{ color: "#1A3A2A" }}>Servicios</p>
              <h3 className="text-lg font-bold font-serif text-ink mt-2">Consulting</h3>
              <p className="text-sm text-muted mt-2">Transformación digital, estrategia y ejecución</p>
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
