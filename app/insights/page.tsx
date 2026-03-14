import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import InsightCard from "@/components/InsightCard";

export default function InsightsPage() {
  const posts = getAllPosts();

  const featured = posts.find((post) => post.featured) ?? posts[0];
  const rest = posts.filter((post) => post.slug !== featured?.slug);

  return (
    <main className="bg-black text-white">
      <section className="mx-auto max-w-6xl px-6 py-24">
        <header className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.2em] text-blue-500">
            Insights
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            Ideas sobre inteligencia artificial, retail media y transformación digital
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            Reflexiones, análisis y aprendizajes sobre cómo están evolucionando los negocios digitales en América Latina.
          </p>
        </header>

        {featured && (
          <section className="mt-14">
            <Link
              href={`/insights/${featured.slug}`}
              className="group block overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition hover:border-blue-500/40 hover:bg-white/[0.07]"
            >
              <div className="grid md:grid-cols-2">
                {featured.coverImage && (
                  <div className="relative min-h-[260px] bg-neutral-900">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={featured.coverImage}
                      alt={featured.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                )}

                <div className="flex flex-col justify-center p-8 md:p-10">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">
                    Insight destacado
                  </p>

                  <h2 className="mt-4 text-3xl font-bold leading-tight group-hover:text-blue-400">
                    {featured.title}
                  </h2>

                  <p className="mt-4 max-w-xl text-base leading-7 text-gray-400">
                    {featured.description}
                  </p>

                  <p className="mt-6 text-sm text-gray-500">{featured.date}</p>
                </div>
              </div>
            </Link>
          </section>
        )}

        <section className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((post) => (
            <InsightCard key={post.slug} post={post} />
          ))}
        </section>
      </section>
    </main>
  );
}
