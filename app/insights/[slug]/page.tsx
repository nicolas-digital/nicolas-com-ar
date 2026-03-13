import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/insights");

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function InsightPage({ params }: PageProps) {
  const { slug } = await params;

  const filePath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);

  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <p className="text-sm uppercase text-blue-600">{String(data.topic ?? "")}</p>

      <h1 className="mt-2 text-4xl font-bold">{String(data.title ?? "")}</h1>

      <p className="mt-4 text-gray-500">{String(data.date ?? "")}</p>

      <article className="mt-12">
        <pre className="whitespace-pre-wrap font-sans text-base leading-7">
          {content}
        </pre>
      </article>
    </main>
  );
}
