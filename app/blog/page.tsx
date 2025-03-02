"use client";

import { motion } from "framer-motion";
import { BlogCard } from "@/components/blog-card";
import { FeaturedPost } from "@/components/featured-post";
import { SearchInput } from "@/components/search/search-input";
import { useSearch } from "@/hooks/use-search";
import { useEffect, useState } from "react";
import { fetchArticles } from "@/sanity/sanity-query";

// Define the type for an Article
interface Article {
  _id: string;
  title: string;
  excerpt: string;
  slug: { current: string };
  mainImage?: { asset: { url: string } };
  author?: { name: string };
  publishedAt: string;
  categories?: string[];
  content?: Array<any>; // Include this if not already present
}


export default function Blog() {
  const [articles, setArticles] = useState<Article[]>([]);
  const { searchQuery, setSearchQuery, filteredItems: filteredPosts } = useSearch(
    articles,
    ["title", "excerpt", "content"]
  );

  useEffect(() => {
    async function loadArticles() {
      const fetchedArticles = await fetchArticles();
      setArticles(fetchedArticles);
    }
    loadArticles();
  }, []);

  if (!articles.length) {
    return <p className="text-center text-gray-400 py-8">Loading articles...</p>;
  }

  const [featuredPost, ...posts] = filteredPosts;

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-12">
            BLOG
          </h1>

          <div className="max-w-xl mb-12">
            <SearchInput
              value={searchQuery}
              onChange={setSearchQuery}
              placeholder="Search articles..."
            />
          </div>

          {filteredPosts.length > 0 ? (
            <>
              {featuredPost && (
                <FeaturedPost
                  post={{
                    title: featuredPost.title,
                    excerpt: featuredPost.excerpt,
                    slug: featuredPost.slug.current,
                    mainImage: featuredPost.mainImage?.asset.url,
                    author: featuredPost.author?.name,
                    publishedAt: featuredPost.publishedAt,
                    content:''
                  }}
                />
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
                {posts.map((post, index) => (
                  <BlogCard
                    index={index}
                    key={post._id}
                    post={{
                      title: post.title,
                      excerpt: post.excerpt,
                      slug: post.slug.current,
                      mainImage: post.mainImage?.asset?.url,
                      author: post.author?.name,
                      publishedAt: post.publishedAt,
                      content:''
                    }}
                  />
                ))}
              </div>
            </>
          ) : (
            <p className="text-center text-gray-400 py-8">
              No articles found matching your search.
            </p>
          )}
        </motion.div>
      </section>
    </div>
  );
}
