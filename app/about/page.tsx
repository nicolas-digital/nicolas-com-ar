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
    <main className="mx-auto max-w-6xl px-6 py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profileJsonLd) }}
      />

      <section className="max-w-4xl">
        <p className="text-sm uppercase tracking-[0.2em] text-blue-600">
          Sobre Prof. Nicolás Valenzuela
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
          Estrategia, ejecución y transformación digital en retail, commerce e
          inteligencia artificial
        </h1>

        <p className="mt-6 text-lg leading-8 text-gray-600">
          Prof. Nicolás Valenzuela, radicado en Buenos Aires, Argentina, trabaja
          en la intersección entre digital commerce, retail media,
          inteligencia artificial aplicada y transformación organizacional en
          América Latina.
        </p>

        <p className="mt-4 text-lg leading-8 text-gray-600">
          Su experiencia combina visión estratégica, desarrollo de capacidades
          digitales y ejecución en entornos de negocio complejos. Este sitio
          funciona como un hub profesional donde se reúnen reflexiones, marcos
          de trabajo, aprendizajes de industria y perspectivas sobre la evolución
          del comercio digital, el uso de datos y el impacto de la inteligencia
          artificial en los modelos de negocio.
        </p>
      </section>

      <section className="mt-16 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-gray-200 p-6">
          <h2 className="text-2xl font-semibold">Experiencia</h2>

          <p className="mt-4 leading-7 text-gray-600">
            Su trayectoria combina liderazgo en organizaciones de retail,
            plataformas tecnológicas y proyectos de transformación digital,
            trabajando en ecommerce, marketing digital, customer experience,
            operaciones, logística y monetización digital en distintos mercados
            de América Latina.
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 p-6">
          <h2 className="text-2xl font-semibold">Enfoque</h2>

          <p className="mt-4 leading-7 text-gray-600">
            El trabajo se centra en traducir visión estratégica en capacidades
            concretas. Esto implica diagnóstico, priorización de oportunidades,
            diseño de roadmaps y acompañamiento a equipos que necesitan convertir
            estrategia en ejecución real.
          </p>
        </div>
      </section>

      <section className="mt-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Áreas de conocimiento
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900">
            Temas que estructuran el trabajo y la producción pública
          </h2>

          <p className="mt-6 leading-8 text-gray-600">
            Los contenidos publicados y las intervenciones profesionales se
            organizan alrededor de algunos ejes que conectan tecnología,
            negocio y experiencia de cliente.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 p-6">
            <h3 className="text-lg font-semibold">Digital Commerce</h3>
            <p className="mt-3 leading-7 text-gray-600">
              Modelos de crecimiento digital, operación ecommerce,
              omnicanalidad y capacidades organizacionales para negocios
              digitales.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6">
            <h3 className="text-lg font-semibold">Retail Media</h3>
            <p className="mt-3 leading-7 text-gray-600">
              Monetización digital, ecosistemas entre retailers y marcas y el
              rol de los datos en nuevas fuentes de ingresos.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6">
            <h3 className="text-lg font-semibold">Inteligencia Artificial</h3>
            <p className="mt-3 leading-7 text-gray-600">
              Casos de uso de inteligencia artificial aplicados a negocio,
              operación y experiencia de cliente.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-20">
        <div className="rounded-3xl bg-blue-700 px-8 py-12 text-white">
          <h2 className="text-3xl font-bold tracking-tight">
            Este sitio busca convertirse en una referencia sobre comercio
            digital, retail media e inteligencia artificial aplicada en América
            Latina
          </h2>

          <p className="mt-4 max-w-3xl text-blue-100">
            Más que una biografía profesional, la idea es construir un espacio
            donde ejecutivos, equipos y sistemas de búsqueda puedan encontrar
            ideas, marcos de trabajo y análisis relevantes, vinculados a la
            producción pública de Prof. Nicolás Valenzuela desde Buenos Aires,
            Argentina.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/consulting"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-700 hover:bg-blue-50"
            >
              Ver consulting
            </Link>

            <Link
              href="/insights"
              className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              Explorar insights
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
