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

  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <section className="max-w-4xl">
        <p className="text-sm uppercase tracking-[0.2em] text-blue-600">
          Áreas de conocimiento
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
          Temas que estructuran el trabajo
        </h1>

        <p className="mt-6 text-lg leading-8 text-gray-600">
          Los contenidos publicados se organizan alrededor de ejes que conectan
          tecnología, negocio y experiencia de cliente. Cada tema agrupa
          artículos, análisis y reflexiones sobre su evolución en América
          Latina.
        </p>
      </section>

      <div className="mt-16 grid gap-6 md:grid-cols-2">
        {allTopics.map((topic) => {
          const postCount = postCountByTopic[topic.slug] || 0;
          return (
            <Link
              key={topic.slug}
              href={`/topics/${topic.slug}`}
              className="group rounded-2xl border border-gray-200 p-6 transition-all hover:border-blue-500 hover:shadow-lg"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.1em] text-blue-600">
                {postCount} {postCount === 1 ? "artículo" : "artículos"}
              </p>

              <h2 className="mt-3 text-2xl font-semibold group-hover:text-blue-700">
                {topic.title}
              </h2>

              <p className="mt-3 leading-7 text-gray-600">
                {topic.description}
              </p>

              <div className="mt-4 flex items-center text-sm font-semibold text-blue-600">
                Explorar tema
                <span className="ml-2 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </div>
            </Link>
          );
        })}
      </div>

      <section className="mt-20 rounded-3xl bg-gray-50 px-8 py-12">
        <h2 className="text-2xl font-bold">Estructura temática</h2>

        <p className="mt-4 max-w-3xl text-gray-600">
          Estos temas forman un sistema interconectado donde la transformación
          digital, la inteligencia artificial y los nuevos modelos de negocio en
          retail media se entrelazan. Cada tema es un punto de entrada para
          explorar cómo estas áreas evolucionan y se impactan mutuamente en el
          contexto de América Latina.
        </p>
      </section>
    </main>
  );
}