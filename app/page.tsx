"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ProjectCard } from "@/components/project-card";
import { BlogCard } from "@/components/blog-card";
import { fetchProjects, fetchArticles } from "@/sanity/sanity-query";
import { Navigation } from "@/components/navigation";
import Link from "next/link";

interface Article {
  _id: string;
  title: string;
  excerpt: string;
  slug: { current: string };
  mainImage?: { asset: { url: string } };
  author?: { name: string };
  publishedAt: string;
}

export default function Home() {
  const [projects, setProjects] = useState([]);
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [fetchedProjects, fetchedArticles] = await Promise.all([
          fetchProjects(),
          fetchArticles()
        ]);
        setProjects(fetchedProjects || []);
        setArticles(fetchedArticles || []);
      } catch (error) {
        console.error("Error fetching data:", error);
        setProjects([]);
        setArticles([]);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="h-screen flex items-center justify-center bg-gradient-to-b from-transparent to-neutral-950">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6">Welcome to My Portfolio</h1>
              <p className="text-xl md:text-2xl text-gray-400 mb-8">Explore my projects and articles</p>
              <div className="flex gap-4 justify-center">
                <Link 
                  href="/projects" 
                  className="px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-colors"
                >
                  View All Projects
                </Link>
                <Link 
                  href="/blog" 
                  className="px-6 py-3 bg-transparent border border-white rounded-full font-medium hover:bg-white/10 transition-colors"
                >
                  Read Blog
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Latest Projects Section */}
        <section className="py-32 px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-7xl mx-auto"
          >
            <div className="flex justify-between items-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold">Latest Projects</h2>
              <Link 
                href="/projects"
                className="text-gray-400 hover:text-white transition-colors"
              >
                View all →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.slice(0, 4).map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </div>
          </motion.div>
        </section>

        {/* Latest Articles Section */}
        <section className="py-32 px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-7xl mx-auto"
          >
            <div className="flex justify-between items-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold">Latest Articles</h2>
              <Link 
                href="/blog"
                className="text-gray-400 hover:text-white transition-colors"
              >
                View all →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {articles.slice(0, 3).map((article, index) => (
                <BlogCard
                  key={article._id}
                  index={index}
                  post={{
                    title: article.title,
                    excerpt: article.excerpt,
                    slug: article.slug.current,
                    mainImage: article.mainImage?.asset?.url,
                    author: article.author?.name,
                    publishedAt: article.publishedAt,
                    content: ''
                  }}
                />
              ))}
            </div>
          </motion.div>
        </section>
      </main>
    </>
  );
}
