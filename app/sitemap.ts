import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.nicolas.com.ar";

  const staticPages = [
    "",
    "/about",
    "/consulting",
    "/insights",
  ];

  const staticRoutes = staticPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  const posts = getAllPosts();

  const insightRoutes = posts.map((post) => ({
    url: `${baseUrl}/insights/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  return [...staticRoutes, ...insightRoutes];
}
