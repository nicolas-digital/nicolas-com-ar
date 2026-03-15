import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";

import TrackInsightView from "@/components/tracking/TrackInsightView";
import ReadingProgress from "@/components/ReadingProgress";
import { JsonLd } from "@/app/components/JsonLd";
import { getPostBySlug, getAdjacentPosts } from "@/lib/posts";
import { calculateReadingTime } from "@/lib/readingTime";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Insight no encontrado",
      description: "El insight solicitado no pudo ser encontrado.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const { meta } = post;

  const title = meta.title;
  const description =
    meta.description ||
    "Insights sobre transformación digital, ecommerce, retail media e inteligencia artificial aplicada en América Latina.";

  return {
    title,
    description,
    alternates: {
      canonical: `/insights/${meta.slug}`,
    },
    openGraph: {
      type: "article",
      url: `/insights/${meta.slug}`,
      title,
      description,
      siteName: "nicolas.com.ar",
      images: meta.coverImage
        ? [
            {
              url: meta.coverImage,
              alt: meta.title,
            },
          ]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: meta.coverImage ? [meta.coverImage] : [],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function InsightDetailPage({ params }: PageProps) {
  const { slug } = await params;

  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const { meta, content } = post;
  const readingTime = calculateReadingTime(content);
  const { prev, next } = getAdjacentPosts(slug);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: meta.title,
    description: meta.description,
    datePublished: new Date(meta.date).toISOString(),
    author: {
      "@type": "Person",
      name: "Prof. Nicolás Valenzuela",
      url: "https://www.nicolas.com.ar/about",
    },
    publisher: {
      "@type": "Person",
      name: "Prof. Nicolás Valenzuela",
    },
    url: `https://www.nicolas.com.ar/insights/${meta.slug}`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.nicolas.com.ar/insights/${meta.slug}`,
    },
    about: meta.topic,
    inLanguage: "es",
    contentLocation: {
      "@type": "Place",
      name: "Buenos Aires, Argentina",
    },
    image: meta.coverImage
      ? [`https://www.nicolas.com.ar${meta.coverImage}`]
      : [],
    keywords: meta.tags ?? [],
  };

  return (
    <main className="bg-cream">
      <JsonLd data={articleSchema} />

      <ReadingProgress />

      {/* Article Header */}
      <article className="border-b border-gray-200">
        <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
          <TrackInsightView
            title={meta.title}
            slug={meta.slug}
            topic={meta.topic}
          />

          {meta.topic && (
            <p className="text-xs font-semibold" style={{ color: "#C8A96E" }}>
              ✨ {meta.topic.toUpperCase()}
            </p>
          )}

          <h1 className="mt-4 md:mt-6 text-3xl md:text-5xl font-bold leading-tight font-serif text-ink">
            {meta.title}
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted">
            <span className="font-semibold">{meta.date}</span>
            <span>•</span>
            <span>{readingTime}</span>
            <span>•</span>
            <Link
              href={meta.topic ? `/topics/${meta.topic.toLowerCase().replace(/\s+/g, "-")}` : "/insights"}
              className="font-semibold hover:text-forest transition-colors"
              style={{ color: "#1A3A2A" }}
            >
              Ver tema
            </Link>
          </div>
        </div>
      </article>

      {/* Cover Image */}
      {meta.coverImage && (
        <section className="border-b border-gray-200 bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <div className="relative overflow-hidden rounded-lg border-2 border-forest/20">
              <Image
                src={meta.coverImage}
                alt={meta.title}
                width={1600}
                height={900}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </div>
        </section>
      )}

      {/* Content */}
      <section className="border-b border-gray-200">
        <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
          <div className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-ink prose-headings:font-bold prose-p:text-muted prose-strong:text-ink prose-a:text-forest hover:prose-a:text-forest/80 prose-a:font-semibold prose-a:no-underline prose-code:text-forest prose-code:bg-forest/10 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-blockquote:border-gold prose-blockquote:border-l-4 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-muted">
            <MDXRemote source={content} />
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-4xl px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {prev ? (
              <Link
                href={`/insights/${prev.slug}`}
                className="p-4 rounded-lg border-2 border-forest/20 hover:border-gold hover:bg-cream transition-all"
              >
                <p className="text-xs font-semibold text-muted">← Anterior</p>
                <h3 className="text-lg font-bold font-serif text-ink mt-2 line-clamp-2">
                  {prev.title}
                </h3>
              </Link>
            ) : (
              <div />
            )}

            {next ? (
              <Link
                href={`/insights/${next.slug}`}
                className="p-4 rounded-lg border-2 border-gold/20 hover:border-gold hover:bg-cream transition-all md:text-right"
              >
                <p className="text-xs font-semibold text-muted">Siguiente →</p>
                <h3 className="text-lg font-bold font-serif text-ink mt-2 line-clamp-2">
                  {next.title}
                </h3>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="bg-white border-t border-gray-200">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <h2 className="text-2xl md:text-3xl font-bold font-serif text-ink mb-8">
            Explorar más
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/insights"
              className="p-6 rounded-lg border-2 border-forest/20 hover:border-gold hover:bg-cream transition-all"
            >
              <p className="text-sm font-semibold" style={{ color: "#1A3A2A" }}>Contenido</p>
              <h3 className="text-lg font-bold font-serif text-ink mt-2">Todos los insights</h3>
              <p className="text-sm text-muted mt-2">Volver al listado completo</p>
            </Link>

            {meta.topic && (
              <Link
                href={`/topics/${meta.topic.toLowerCase().replace(/\s+/g, "-")}`}
                className="p-6 rounded-lg border-2 border-gold/20 hover:border-gold hover:bg-cream transition-all"
              >
                <p className="text-sm font-semibold" style={{ color: "#C8A96E" }}>Tema</p>
                <h3 className="text-lg font-bold font-serif text-ink mt-2">{meta.topic}</h3>
                <p className="text-sm text-muted mt-2">Más artículos relacionados</p>
              </Link>
            )}

            <Link
              href="/consulting"
              className="p-6 rounded-lg border-2 border-forest/20 hover:border-gold hover:bg-cream transition-all"
            >
              <p className="text-sm font-semibold" style={{ color: "#1A3A2A" }}>Servicios</p>
              <h3 className="text-lg font-bold font-serif text-ink mt-2">Consulting</h3>
              <p className="text-sm text-muted mt-2">Strategic advisory y transformación</p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
