"use client";

import { motion } from "framer-motion";
import { BlogPost } from "@/lib/types";
import { BlogPostHeader } from "./blog-post-header";
import { BlogPostBody } from "./blog-post-body";

interface BlogPostContentProps {
  post: BlogPost;
}

export function BlogPostContent({ post }: BlogPostContentProps) {
  return (
    <div className="min-h-screen pt-16">
      <article className="py-6 px-4">
        <div className="max-w-4xl mx-auto">
          <BlogPostHeader post={post} />
          <BlogPostBody content={post.content} />
        </div>
      </article>
    </div>
  );
}