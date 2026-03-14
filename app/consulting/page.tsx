import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Strategic Advisory for Retail, Commerce & AI",
  description:
    "Strategic advisory for retailers, brands and technology companies seeking growth, profitability and stronger customer experience through digital commerce, retail media and applied AI.",
};

export default function ConsultingPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <section className="max-w-4xl">
        <p className="text-sm uppercase tracking-[0.2em] text-blue-600">
          Advisory Services
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
          Strategic advisory for retail, commerce and AI-led transformation
        </h1>

        <p className="mt-6 text-lg leading-8 text-gray-600">
          Trabajo con equipos directivos, retailers, marcas y compañías de
          tecnología que necesitan traducir visión estratégica en crecimiento,
          rentabilidad, capacidades digitales y ejecución real.
        </p>

        <p className="mt-4 text-lg leading-8 text-gray-600">
          El foco está puesto en ecommerce, retail media, inteligencia
          artificial aplicada y transformación organizacional, siempre con una
          mirada conectada a negocio, operación y desarrollo de equipos.
        </p>
      </section>

      <section className="mt-16 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-gray-200 p-6">
          <h2 className="text-xl font-semibold">Qué ayudo a resolver</h2>

          <ul className="mt-4 space-y-3 text-gray-600">
            <li>Estrategia de crecimiento digital y ecommerce</li>
            <li>Diseño y evolución de capacidades de Retail Media</li>
            <li>Casos de uso de inteligencia artificial en negocio</li>
            <li>Transformación organizacional y ejecución</li>
            <li>Priorización de iniciativas con impacto real</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-gray-200 p-6">
          <h2 className="text-xl font-semibold">Cómo trabajo</h2>

          <ul className="mt-4 space-y-3 text-gray-600">
            <li>Diagnóstico del modelo actual y sus brechas</li>
            <li>Identificación de oportunidades estratégicas</li>
            <li>Diseño de roadmap y prioridades de ejecución</li>
            <li>Acompañamiento a equipos y líderes funcionales</li>
            <li>Traducción de estrategia en capacidades sostenibles</li>
          </ul>
        </div>
      </section>

      <section className="mt-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Relevant Background
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900">
            Experiencia construida en entornos de retail, tecnología y
            transformación digital
          </h2>

          <p className="mt-6 leading-8 text-gray-600">
            La experiencia combina liderazgo ejecutivo, desarrollo de negocios
            digitales, operación ecommerce, customer experience, retail media,
            marketing, logística y trabajo transversal con equipos de tecnología,
            producto y negocio en América Latina.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 p-6">
            <h3 className="text-lg font-semibold">Experiencia profesional</h3>

            <ul className="mt-4 space-y-3 text-gray-600">
              <li>Digital Commerce leadership en Cencosud</li>
              <li>Customer Success leadership en VTEX LATAM</li>
              <li>Desarrollo de ecosistemas ecommerce y retail media</li>
              <li>Trabajo con equipos comerciales, digitales y operativos</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6">
            <h3 className="text-lg font-semibold">
              Formación y actividad académica
            </h3>

            <ul className="mt-4 space-y-3 text-gray-600">
              <li>MIT Professional Education – Chief Digital Officer</li>
              <li>Docencia en programas de negocios digitales</li>
              <li>Participación en eventos y espacios de industria</li>
              <li>Construcción de frameworks aplicados a transformación</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Collaboration Formats
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900">
            Formatos de colaboración según el momento de cada organización
          </h2>

          <p className="mt-6 leading-8 text-gray-600">
            No todas las compañías necesitan el mismo tipo de intervención. En
            algunos casos el valor está en clarificar la dirección estratégica;
            en otros, en acelerar decisiones, ordenar prioridades o acompañar la
            activación con equipos concretos.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 p-6">
            <h3 className="text-lg font-semibold">Strategic Advisory</h3>
            <p className="mt-3 leading-7 text-gray-600">
              Acompañamiento a equipos directivos para definir prioridades,
              modelo de evolución y criterios de decisión en agendas de
              transformación digital, ecommerce y AI.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6">
            <h3 className="text-lg font-semibold">Executive Workshops</h3>
            <p className="mt-3 leading-7 text-gray-600">
              Sesiones estructuradas para alinear visión, identificar
              oportunidades, ordenar capacidades y acelerar conversaciones de
              negocio con foco práctico.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6">
            <h3 className="text-lg font-semibold">Strategic Diagnostic</h3>
            <p className="mt-3 leading-7 text-gray-600">
              Evaluación del modelo actual de negocio digital, ecommerce,
              monetización, experiencia y madurez operativa para detectar
              brechas y prioridades.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6">
            <h3 className="text-lg font-semibold">Team Enablement</h3>
            <p className="mt-3 leading-7 text-gray-600">
              Trabajo con equipos para convertir estrategia en capacidades,
              procesos y ejecución sostenible, evitando que las iniciativas
              queden en diagnóstico permanente.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-20">
        <div className="rounded-3xl bg-blue-700 px-8 py-12 text-white">
          <h2 className="text-3xl font-bold tracking-tight">
            Si tu organización necesita claridad estratégica, foco y ejecución
            real, este puede ser un buen punto de partida
          </h2>

          <p className="mt-4 max-w-3xl text-blue-100">
            La transformación digital no suele fallar por falta de ideas, sino
            por falta de prioridades, integración y capacidad de llevar visión a
            operación. El objetivo de este trabajo es justamente cerrar esa
            distancia.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/insights"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-50"
            >
              Explorar insights
            </Link>

            <Link
              href="/about"
              className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Ver experiencia
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
