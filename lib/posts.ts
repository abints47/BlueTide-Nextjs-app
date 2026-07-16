import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');

type PostFrontmatter = {
  title: string;
  date: string;
  excerpt: string;
  image:string;
};

export type PostMeta = PostFrontmatter & {
  slug: string;
};

export function getSortedPostsData(): PostMeta[] {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData: PostMeta[] = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);
    const frontmatter = data as PostFrontmatter;

    return {
      slug,
      ...frontmatter,
    };
  });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getAllPostSlugs() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => ({
    slug: fileName.replace(/\.md$/, ''),
  }));
}

export async function getPostData(slug: string): Promise<PostMeta & { contentHtml: string }> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const { data, content } = matter(fileContents);
  const frontmatter = data as PostFrontmatter;

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    contentHtml,
    ...frontmatter,
  };
}