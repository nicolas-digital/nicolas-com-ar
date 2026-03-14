import Link from "next/link";
import Image from "next/image";
import { PostMeta } from "@/lib/posts";

export default function InsightCard({ post }: { post: PostMeta }) {
  return (
    <Link
      href={`/insights/${post.slug}`}
      className="group block overflow-hidden rounded-2xl border border-gray-200 bg-white transition duration-300 hover:shadow-lg"
    >
      {post.coverImage && (
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
      )}

      <div className="p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
          {post.topic}
        </p>

        <h3 className="mt-3 text-xl font-semibold leading-snug text-gray-900 group-hover:text-blue-700">
          {post.title}
        </h3>

        <p className="mt-3 text-gray-600 text-sm leading-6 line-clamp-3">
          {post.description}
        </p>

        <p className="mt-6 text-xs text-gray-400">
          {post.date}
        </p>
      </div>
    </Link>
  );
}
