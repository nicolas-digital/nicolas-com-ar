import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Digital Strategy, Ecommerce, Retail Media & AI",
  description:
    "Nicolás Valenzuela shares insights and strategic advisory on digital transformation, ecommerce, retail media and applied AI for retailers, brands and technology companies in Latin America.",
};

export default function HomePage() {
  return (
    <main>
      <section className="bg-gradient-to-b from-blue-700 to-blue-500 text-white">
        <div className="mx-auto max-w-6xl px-6 py-28">
          <p className="text-sm uppercase tracking-[0.25em] text-blue-100">
            Nicolás Valenzuela
          </p>

          <h1 className="mt-4 max-w-5xl text-4xl font-bold leading-tight md:text-6xl">
            Estrategia digital, ecommerce, retail media e inteligencia artificial
            aplicada para organizaciones que necesitan foco y ejecución real
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-100">
            Acompaño a retailers, marcas y compañías tecnológicas en América
            Latina a mejorar crecimiento, rentabilidad y experiencia de cliente
            mediante estrategia, datos y desarrollo de capacidades digitales
            sostenibles.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/consulting"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-700 hover:bg-blue-50"
            >
              Ver cómo ayudo
            </Link>

            <Link
              href="/insights"
              className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              Explorar insights
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Áreas de trabajo
          </p>

          <h2 className="mt-4 text-3xl font-bold text-gray-900">
            Dónde puedo aportar valor
          </h2>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border p-6">
            <h3 className="text-xl font-bold">Inteligencia Artificial</h3>

            <p className="mt-3 leading-7 text-gray-600">
              Identificación de casos de uso, priorización estratégica y
              adopción de capacidades de IA con impacto real en negocio y
              operación.
            </p>
          </div>

          <div className="rounded-2xl border p-6">
            <h3 className="text-xl font-bold">Retail Media</h3>

            <p className="mt-3 leading-7 text-gray-600">
              Diseño y evolución de modelos de monetización digital conectados
              con datos, ecosistema comercial y crecimiento sostenible.
            </p>
          </div>

          <div className="rounded-2xl border p-6">
            <h3 className="text-xl font-bold">Transformación Digital</h3>

            <p className="mt-3 leading-7 text-gray-600">
              Estrategia omnicanal, desarrollo de capacidades organizacionales y
              ejecución real de iniciativas digitales.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Sobre Nicolás
            </p>

            <h2 className="mt-4 text-3xl font-bold text-gray-900">
              Estrategia, ejecución y transformación organizacional
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              He trabajado en la intersección entre digital commerce, customer
              experience, marketing, operaciones y tecnología en entornos de
              retail y plataformas de ecommerce en Latinoamérica. Mi foco está
              en ayudar a las organizaciones a convertir visión estratégica en
              capacidades concretas y resultados sostenibles.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-3xl bg-blue-700 px-8 py-12 text-white">
          <h2 className="text-3xl font-bold">
            Si estás liderando una agenda de transformación digital, ecommerce o
            inteligencia artificial, conversemos
          </h2>

          <p className="mt-4 max-w-3xl text-blue-100">
            Este sitio reúne ideas, experiencias y enfoques de trabajo para
            organizaciones que necesitan claridad estratégica y ejecución real.
          </p>

          <div className="mt-8">
            <Link
              href="/consulting"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-700 hover:bg-blue-50"
            >
              Ir a consulting
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
