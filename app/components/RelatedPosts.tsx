import Link from "next/link";
import Image from "next/image";
import { getSortedPostsData } from "@/lib/posts";

interface RelatedPostsProps {
  currentSlug: string;
}

export default function RelatedPosts({ currentSlug }: RelatedPostsProps) {
  const allPosts = getSortedPostsData();
  const related = allPosts
    .filter((post) => post.slug !== currentSlug)
    .slice(0, 2);

  if (related.length === 0) return null;

  return (
    <section className="mt-20 pt-12 border-t border-gray-200">
      <h2 className="text-3xl font-bold tracking-tighter text-[#2B2B28] mb-8">
        Continue Reading
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {related.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
            <div className="relative w-full h-48 rounded-xl overflow-hidden mb-4">
              <Image
                src={post.image}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="text-xl font-semibold tracking-tight text-[#2B2B28] group-hover:opacity-60 transition-opacity">
              {post.title}
            </h3>
            <p className="text-sm text-gray-400 mt-1">{post.date}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
