import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/insights");

export type PostMeta = {
  title: string;
  slug: string;
  description: string;
  date: string;
  topic: string;
  tags?: string[];
  coverImage?: string;
  featured?: boolean;
};

export function getAllPosts(): PostMeta[] {
  const fileNames = fs.readdirSync(postsDirectory);

  const posts = fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      const slugFromFile = fileName.replace(/\.mdx$/, "");

      return {
        title: data.title ?? slugFromFile,
        slug: data.slug ?? slugFromFile,
        description: data.description ?? "",
        date: data.date ?? "",
        topic: data.topic ?? "general",
        tags: data.tags ?? [],
        coverImage: data.coverImage ?? "",
        featured: data.featured ?? false,
      } as PostMeta;
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));

  return posts;
}

export function getPostBySlug(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    meta: {
      title: data.title ?? slug,
      slug: data.slug ?? slug,
      description: data.description ?? "",
      date: data.date ?? "",
      topic: data.topic ?? "general",
      tags: data.tags ?? [],
      coverImage: data.coverImage ?? "",
      featured: data.featured ?? false,
    } as PostMeta,
    content,
  };
}
