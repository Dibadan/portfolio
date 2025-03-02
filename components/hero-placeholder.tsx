"use client";

import { motion } from "framer-motion";

export function HeroPlaceholder() {
  return (
    <div className="h-full bg-gradient-to-b from-black to-gray-900 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6">
          Welcome to
        </h1>
        <h2 className="text-7xl md:text-9xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
          NEXORA
        </h2>
      </motion.div>
    </div>
  );
}