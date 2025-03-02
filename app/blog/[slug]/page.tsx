import { notFound } from "next/navigation";
import { BlogPostContent } from "@/components/blog/blog-post-content";
import { fetchArticles, fetchArticleBySlug } from "@/sanity/sanity-query";
import { BlogPostHeader } from "@/components/blog/blog-post-header";

export async function generateStaticParams() {
  // Fetch all articles to generate static paths
  const articles = await fetchArticles(); // Ensure fetchArticles is imported correctly
  return articles.map((post:any) => ({
    slug: post.slug.current, // Use the slug from the article schema
  }));
}

type Props = {
  params: {
    slug: string
  }
}

export default async function BlogPost({ params }: Props) {
  // Fetch the article by slug
  const post = await fetchArticleBySlug(params.slug);
  console.log("POST = ", post)

  if (!post) {
    notFound(); // Show a 404 page if the article doesn't exist
  }

  return (
    <div className="min-h-screen pt-20">
      <article className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Blog Post Content */}
          <BlogPostContent post={{
                      title: post.title,
                      excerpt: post.excerpt,
                      slug: post.slug.current,
                      mainImage: post.mainImage?.asset?.url,
                      author: post.author?.name,
                      publishedAt: post.publishedAt,
                      content: post.content
                    }} />
        </div>
      </article>
    </div>
  );
}