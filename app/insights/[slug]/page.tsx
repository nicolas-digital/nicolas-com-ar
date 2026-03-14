import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";

import TrackInsightView from "@/components/tracking/TrackInsightView";
import ReadingProgress from "@/components/ReadingProgress";
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
    datePublished: meta.date,
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
    <main className="bg-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />

      <ReadingProgress />

      <article className="mx-auto max-w-3xl px-6 py-20">
        <TrackInsightView
          title={meta.title}
          slug={meta.slug}
          topic={meta.topic}
        />

        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-500">
          {meta.topic}
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
          {meta.title}
        </h1>

        <div className="mt-6 flex items-center gap-3 text-sm text-gray-400">
          <span>{meta.date}</span>
          <span>•</span>
          <span>{readingTime}</span>
        </div>

        {meta.coverImage && (
          <div className="relative mt-10 overflow-hidden rounded-3xl border border-white/10">
            <Image
              src={meta.coverImage}
              alt={meta.title}
              width={1600}
              height={900}
              className="h-auto w-full rounded-3xl object-cover shadow-xl"
              priority
            />
          </div>
        )}

        <div className="prose prose-invert prose-lg mt-12 max-w-none prose-headings:text-white prose-p:text-gray-300 prose-strong:text-white prose-a:text-blue-400 hover:prose-a:text-blue-300">
          <MDXRemote source={content} />
        </div>

        <div className="mt-20 flex items-start justify-between gap-8 border-t border-white/10 pt-8 text-sm">
          <div className="max-w-xs">
            {prev ? (
              <Link
                href={`/insights/${prev.slug}`}
                className="text-gray-400 transition hover:text-white"
              >
                ← {prev.title}
              </Link>
            ) : null}
          </div>

          <div className="max-w-xs text-right">
            {next ? (
              <Link
                href={`/insights/${next.slug}`}
                className="text-gray-400 transition hover:text-white"
              >
                {next.title} →
              </Link>
            ) : null}
          </div>
        </div>
      </article>
    </main>
  );
}
