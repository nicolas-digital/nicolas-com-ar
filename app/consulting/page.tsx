import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Consulting & Strategic Advisory | Prof. Nicolás Valenzuela",
  description:
    "Strategic advisory para retailers, marcas y tecnología en retail media, ecommerce e inteligencia artificial. Transformación digital con foco en ejecución real en América Latina.",
};

export default function ConsultingPage() {
  return (
    <main className="bg-cream">
      <section className="border-b border-gray-200">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <p className="text-xs font-semibold tracking-wider" style={{ color: "#8B7355" }}>
            ● SERVICIOS DE CONSULTORÍA
          </p>

          <h1 className="mt-4 md:mt-6 text-3xl md:text-5xl font-bold leading-tight font-serif text-ink">
            Strategic advisory para retail, commerce e inteligencia artificial
          </h1>

          <p className="mt-6 text-base md:text-lg leading-7 md:leading-8 text-muted max-w-3xl">
            Trabajo con equipos directivos, retailers, marcas y compañías de tecnología que necesitan traducir visión estratégica en crecimiento, rentabilidad, capacidades digitales y ejecución real en América Latina.
          </p>
        </div>
      </section>

      {/* Areas de enfoque */}
      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Qué ayudo */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold font-serif text-ink mb-6">
                Qué ayudo a resolver
              </h2>
              <div className="space-y-4">
                <div className="p-4 rounded-lg border-2 border-forest/30" style={{ backgroundColor: "rgba(26, 58, 42, 0.05)" }}>
                  <p className="font-semibold text-ink">Estrategia de crecimiento digital</p>
                  <p className="text-sm text-muted mt-1">Ecommerce, monetización y modelos de negocio digital</p>
                </div>
                <div className="p-4 rounded-lg border-2 border-gold/30" style={{ backgroundColor: "rgba(200, 169, 110, 0.05)" }}>
                  <p className="font-semibold text-ink">Retail Media & Datos</p>
                  <p className="text-sm text-muted mt-1">Diseño de capacidades, ecosistemas y nuevas fuentes de ingresos</p>
                </div>
                <div className="p-4 rounded-lg border-2 border-forest/30" style={{ backgroundColor: "rgba(26, 58, 42, 0.05)" }}>
                  <p className="font-semibold text-ink">Inteligencia Artificial</p>
                  <p className="text-sm text-muted mt-1">Casos de uso, implementación y transformación de procesos</p>
                </div>
                <div className="p-4 rounded-lg border-2 border-gold/30" style={{ backgroundColor: "rgba(200, 169, 110, 0.05)" }}>
                  <p className="font-semibold text-ink">Transformación organizacional</p>
                  <p className="text-sm text-muted mt-1">Capacidades, equipos, procesos y ejecución sostenible</p>
                </div>
              </div>
            </div>

            {/* Cómo trabajo */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold font-serif text-ink mb-6">
                Cómo funciona el engagement
              </h2>
              <div className="space-y-4">
                <div className="p-4 rounded-lg border-2 border-forest/30" style={{ backgroundColor: "rgba(26, 58, 42, 0.05)" }}>
                  <p className="font-semibold text-ink">1. Diagnóstico</p>
                  <p className="text-sm text-muted mt-1">Evaluación del modelo actual, brechas y oportunidades</p>
                </div>
                <div className="p-4 rounded-lg border-2 border-gold/30" style={{ backgroundColor: "rgba(200, 169, 110, 0.05)" }}>
                  <p className="font-semibold text-ink">2. Priorización</p>
                  <p className="text-sm text-muted mt-1">Identificación de iniciativas de mayor impacto e viabilidad</p>
                </div>
                <div className="p-4 rounded-lg border-2 border-forest/30" style={{ backgroundColor: "rgba(26, 58, 42, 0.05)" }}>
                  <p className="font-semibold text-ink">3. Roadmap</p>
                  <p className="text-sm text-muted mt-1">Diseño de ruta clara con hitos, recursos y timing</p>
                </div>
                <div className="p-4 rounded-lg border-2 border-gold/30" style={{ backgroundColor: "rgba(200, 169, 110, 0.05)" }}>
                  <p className="font-semibold text-ink">4. Ejecución</p>
                  <p className="text-sm text-muted mt-1">Acompañamiento a equipos hasta resultados reales</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formatos de colaboración */}
      <section className="border-b border-gray-200">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-ink mb-4">
              Formatos de colaboración
            </h2>
            <p className="text-base md:text-lg leading-8 text-muted">
              No todas las organizaciones necesitan el mismo tipo de intervención. Cada momento requiere un enfoque diferente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 rounded-lg border-2 border-forest/30 hover:border-gold transition-colors" style={{ backgroundColor: "rgba(26, 58, 42, 0.05)" }}>
              <h3 className="text-xl font-bold font-serif text-ink">Strategic Advisory</h3>
              <p className="mt-3 leading-6 text-muted text-sm">
                Acompañamiento a equipos directivos para definir prioridades, modelo de evolución y criterios de decisión en agendas de transformación digital.
              </p>
              <p className="mt-4 text-xs font-semibold" style={{ color: "#C8A96E" }}>Ideal para: Directivos & C-Suite</p>
            </div>

            <div className="p-8 rounded-lg border-2 border-gold/30 hover:border-gold transition-colors" style={{ backgroundColor: "rgba(200, 169, 110, 0.05)" }}>
              <h3 className="text-xl font-bold font-serif text-ink">Executive Workshops</h3>
              <p className="mt-3 leading-6 text-muted text-sm">
                Sesiones estructuradas para alinear visión, identificar oportunidades, ordenar capacidades y acelerar decisiones con foco práctico.
              </p>
              <p className="mt-4 text-xs font-semibold" style={{ color: "#1A3A2A" }}>Ideal para: Equipos ejecutivos</p>
            </div>

            <div className="p-8 rounded-lg border-2 border-forest/30 hover:border-gold transition-colors" style={{ backgroundColor: "rgba(26, 58, 42, 0.05)" }}>
              <h3 className="text-xl font-bold font-serif text-ink">Strategic Diagnostic</h3>
              <p className="mt-3 leading-6 text-muted text-sm">
                Evaluación profunda del modelo de negocio digital, ecommerce, monetización y madurez operativa para detectar brechas y prioridades.
              </p>
              <p className="mt-4 text-xs font-semibold" style={{ color: "#C8A96E" }}>Ideal para: Retailers & Brands</p>
            </div>

            <div className="p-8 rounded-lg border-2 border-gold/30 hover:border-gold transition-colors" style={{ backgroundColor: "rgba(200, 169, 110, 0.05)" }}>
              <h3 className="text-xl font-bold font-serif text-ink">Team Enablement</h3>
              <p className="mt-3 leading-6 text-muted text-sm">
                Trabajo con equipos funcionales para convertir estrategia en capacidades, procesos y ejecución sostenible, evitando iniciativas en diagnóstico permanente.
              </p>
              <p className="mt-4 text-xs font-semibold" style={{ color: "#1A3A2A" }}>Ideal para: Equipos operativos</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ backgroundColor: "#1A3A2A" }}>
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24 text-white">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">
            ¿Tu organización necesita claridad estratégica y ejecución real?
          </h2>
          <p className="text-lg leading-8 text-white/90 max-w-3xl mb-8">
            La transformación digital no suele fallar por falta de ideas, sino por falta de prioridades, integración y capacidad de llevar visión a operación. El objetivo de este trabajo es justamente cerrar esa distancia.
          </p>

          <div className="flex flex-wrap gap-3 md:gap-4">
            <a
              href="mailto:nicolas@nicolas.com.ar"
              className="rounded-full bg-cream text-ink px-6 py-3 text-sm md:text-base font-semibold hover:bg-white transition-colors"
            >
              Hablemos →
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
