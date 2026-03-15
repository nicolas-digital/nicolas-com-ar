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
  subnodo?: string;
  transversals?: string[];
  tags: string[];
  coverImage: string;
  featured: boolean;
};

export type Post = {
  meta: PostMeta;
  content: string;
};

function parsePostFile(fileName: string): Post {
  const fullPath = path.join(postsDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const slug = fileName.replace(/\.mdx$/, "");

  return {
    meta: {
      title: data.title ?? slug,
      slug,
      description: data.description ?? "",
      date: data.date ?? "",
      topic: data.topic ?? "general",
      subnodo: data.subnodo,
      transversals: Array.isArray(data.transversals) ? data.transversals : [],
      tags: Array.isArray(data.tags) ? data.tags : [],
      coverImage: data.coverImage ?? "",
      featured: Boolean(data.featured),
    },
    content,
  };
}

export function getAllPosts(): PostMeta[] {
  const fileNames = fs
    .readdirSync(postsDirectory)
    .filter((fileName) => fileName.endsWith(".mdx"));

  return fileNames
    .map((fileName) => parsePostFile(fileName).meta)
    .sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
}

export function getPostBySlug(slug: string): Post | null {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  return parsePostFile(`${slug}.mdx`);
}

export function getPostsByTopic(topic: string): PostMeta[] {
  return getAllPosts().filter(
    (post) => post.topic.toLowerCase() === topic.toLowerCase()
  );
}

export function getAdjacentPosts(slug: string): {
  prev: PostMeta | null;
  next: PostMeta | null;
} {
  const posts = getAllPosts();
  const index = posts.findIndex((post) => post.slug === slug);

  if (index === -1) {
    return {
      prev: null,
      next: null,
    };
  }

  return {
    prev: posts[index + 1] ?? null,
    next: posts[index - 1] ?? null,
  };
}
