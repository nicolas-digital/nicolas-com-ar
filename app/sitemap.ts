import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";
import { topics } from "@/lib/topics";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.nicolas.com.ar";
  return [
    ...["", "/about", "/consulting", "/insights", "/topics"].map(route => ({ url: `${base}${route}` })),
    ...topics.map(topic => ({ url: `${base}/topics/${topic.slug}` })),
    ...getAllPosts().map(post => ({
      url: `${base}/insights/${post.slug}`,
      lastModified: new Date(post.updatedAt || post.date),
    })),
  ];
}
