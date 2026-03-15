import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.nicolas.com.ar";

  // Static pages with priority and change frequency
  const staticPages: Array<{ route: string; priority: number; changeFrequency: "daily" | "weekly" | "monthly" | "yearly" }> = [
    { route: "", priority: 1.0, changeFrequency: "weekly" },
    { route: "/about", priority: 0.9, changeFrequency: "monthly" },
    { route: "/consulting", priority: 0.9, changeFrequency: "monthly" },
    { route: "/insights", priority: 0.9, changeFrequency: "daily" },
    { route: "/topics", priority: 0.8, changeFrequency: "weekly" },
    { route: "/thanks", priority: 0.3, changeFrequency: "yearly" },
  ];

  const staticRoutes = staticPages.map((page) => ({
    url: `${baseUrl}${page.route}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency as "daily" | "weekly" | "monthly" | "yearly",
    priority: page.priority,
  }));

  // Dynamic topic routes
  const topicRoutes = [
    "retail-strategy",
    "commerce-platforms",
    "ai-retail",
    "digital-operations",
    "retail-media-marketing",
  ].map((slug) => ({
    url: `${baseUrl}/topics/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const posts = getAllPosts();

  const insightRoutes = posts.map((post) => ({
    url: `${baseUrl}/insights/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...topicRoutes, ...insightRoutes];
}
