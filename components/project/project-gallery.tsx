"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ProjectGalleryProps {
  images: string[];
  title: string;
}

export function ProjectGallery({ images, title }: ProjectGalleryProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {images.map((image, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
          className="relative aspect-[4/3] rounded-lg overflow-hidden"
        >
          <Image
            src={image}
            alt={`${title} - Image ${index + 1}`}
            fill
            className="object-cover"
          />
        </motion.div>
      ))}
    </div>
  );
}