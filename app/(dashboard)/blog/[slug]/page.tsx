import Image from "next/image";
import { getPostData, getAllPostSlugs } from '@/lib/posts';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs;
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostData(slug);

  return (
    <article className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-center text-4xl font-bold tracking-tighter  text-[#2B2B28] mb-3">
        {post.title}
      </h1>
      <p className="text-sm text-gray-400 text-center mb-8">{post.date}</p>

      {post.image && (
        <div className="relative w-full h-100  rounded-xl overflow-hidden mb-10 mx-auto shadow-sm">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority //
             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
      )}

      <div
        className="prose prose-neutral mx-auto leading-relaxed text-[#2B2B28]"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </article>
  );
}