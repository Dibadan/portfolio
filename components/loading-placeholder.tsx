"use client";

import { motion } from "framer-motion";
import { Loader } from "lucide-react";

export function LoadingPlaceholder() {
  return (
    <div className="flex items-center justify-center h-full bg-gradient-to-b from-black to-gray-900">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center"
      >
        <Loader className="w-8 h-8 animate-spin mx-auto mb-4" />
        <p className="text-gray-400">Welcome to Nexora</p>
      </motion.div>
    </div>
  );
}