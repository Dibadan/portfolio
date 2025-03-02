import { notFound } from "next/navigation";
import { BlogPostContent } from "@/components/blog/blog-post-content";
import { fetchArticles, fetchArticleBySlug } from "@/sanity/sanity-query";

export async function generateStaticParams() {
  const articles = await fetchArticles();
  return articles.map((post: any) => ({
    slug: post.slug.current,
  }));
}

// In Next.js 15, we need to follow their page component pattern exactly
type Props = {
  params: {
    slug: string;
  };
  searchParams: Record<string, string | string[] | undefined>;
};

export default async function BlogPostPage({ params, searchParams }: Props) {
  const post = await fetchArticleBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-20">
      <article className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <BlogPostContent
            post={{
              title: post.title,
              excerpt: post.excerpt,
              slug: post.slug.current,
              mainImage: post.mainImage?.asset?.url,
              author: post.author?.name,
              publishedAt: post.publishedAt,
              content: post.content,
            }}
          />
        </div>
      </article>
    </div>
  );
}