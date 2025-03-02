"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Calendar } from "lucide-react";
import { BlogPost } from "@/lib/types";

interface FeaturedPostProps {
  post: BlogPost;
}

export function FeaturedPost({ post }: FeaturedPostProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="group"
    >
      <Link href={`/blog/${post.slug}`}>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
            <Image
              src={post.mainImage || ''}
              alt={post.title}
              fill
              className="object-cover transition-transform group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
          <div className="space-y-4">
            <div className="flex items-center text-sm text-gray-400">
              <Calendar className="w-4 h-4 mr-2" />
              {post.publishedAt}
            </div>
            <h2 className="text-3xl font-bold group-hover:text-gray-300 transition-colors">
              {post.title}
            </h2>
            <p className="text-gray-400">{post.excerpt}</p>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}