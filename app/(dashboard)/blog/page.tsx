import Link from "next/link";
import { getSortedPostsData } from "@/lib/posts";
import Image from 'next/image';


export default function Blog() {
  const posts = getSortedPostsData();

  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-5xl font-bold tracking-tighter text-center text-[#2B2B28] mb-16">
        Blog
      </h1>

      <ul className="space-y-12">
        {posts.map(({ slug, title, date, excerpt ,image}) => (

          <li key={slug} className="text-center">
            
            <Link href={`/blog/${slug}`}>
             <div className="relative w-full h-56 rounded-lg overflow-hidden mb-4">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover"
                />
              </div>
              <h2 className="text-2xl font-semibold tracking-tight text-[#2B2B28] hover:opacity-60 transition-opacity">
                {title}
              </h2>
            </Link>
            <p className="text-sm text-gray-400 mt-2">{date}</p>
            <p className="text-gray-500 mt-3 leading-relaxed">{excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}