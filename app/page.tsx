import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <section className="bg-gradient-to-b from-blue-700 to-blue-500 text-white">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-100">
            Strategy, AI and Digital Commerce
          </p>

          <h1 className="max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
            Consultoría estratégica digital para líderes: innovación, cultura y tecnología AI
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-blue-100">
            Insights y advisory sobre retail media, inteligencia artificial y transformación digital.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              href="/consulting"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-700"
            >
              Consulting
            </Link>
            <Link
              href="/insights"
              className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white"
            >
              Insights
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 p-6">
            <h2 className="text-xl font-bold">Artificial Intelligence</h2>
            <p className="mt-3 text-gray-600">
              Estrategia, adopción y transformación real de capacidades organizacionales.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6">
            <h2 className="text-xl font-bold">Retail Media</h2>
            <p className="mt-3 text-gray-600">
              Modelos de crecimiento, monetización y evolución del ecosistema comercial.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6">
            <h2 className="text-xl font-bold">Digital Transformation</h2>
            <p className="mt-3 text-gray-600">
              Diseño organizacional, tecnología y ejecución para negocios digitales.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}