import { pageMetadata } from "@/lib/social";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTopicBySlug, getAllTopics } from "@/lib/topics";
import { getPostsByTopic } from "@/lib/posts";
import { TopicDetail } from "@/components/TopicDetail";

type Props = {
  params: Promise<{ slug: string }>;
};

// Generar metadatos dinámicos
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const topic = getTopicBySlug(slug);

  if (!topic) {
    return {
      title: "Tema no encontrado",
    };
  }

  return pageMetadata({
    path: `/topics/${topic.slug}`,
    title: topic.title,
    description: topic.description,
  });
}

// Generar paths estáticos
export async function generateStaticParams() {
  const allTopics = getAllTopics();
  return allTopics.map((topic) => ({
    slug: topic.slug,
  }));
}

export default async function TopicPage({ params }: Props) {
  const { slug } = await params;
  const topic = getTopicBySlug(slug);

  if (!topic) {
    notFound();
  }

  const posts = getPostsByTopic(topic.slug);

  // Obtener temas relacionados
  const allTopics = getAllTopics();
  const relatedTopics = allTopics.filter(
    (t) =>
      topic.relatedTopics?.includes(t.slug) && t.slug !== topic.slug
  );

  return (
    <TopicDetail
      topic={topic}
      posts={posts}
      relatedTopics={relatedTopics}
    />
  );
}
