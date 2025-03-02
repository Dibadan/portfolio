"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar } from "lucide-react";
import { BlogPost } from "@/lib/types";

interface BlogPostHeaderProps {
  post: BlogPost;
}

export function BlogPostHeader({ post }: BlogPostHeaderProps) {
  return (
    <div className="mb-12">
      <Link
        href="/blog"
        className="inline-flex items-center text-gray-400 hover:text-white mb-8"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Blog
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8"
      >
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
          {post.title}
        </h1>

        <div className="flex items-center text-sm text-gray-400">
          <Calendar className="w-4 h-4 mr-2" />
          {post.publishedAt}
        </div>
        
        <div className="relative aspect-[2/1] rounded-lg overflow-hidden">
          <Image
            src={post.mainImage || ''}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </motion.div>
    </div>
  );
}