import { notFound } from "next/navigation";
import { BlogPostContent } from "@/components/blog/blog-post-content";
import { fetchArticles, fetchArticleBySlug } from "@/sanity/sanity-query";
import { BlogPostHeader } from "@/components/blog/blog-post-header";

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string }; // Explicitly typing the params object
}) {
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
