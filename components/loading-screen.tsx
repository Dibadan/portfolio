"use client";

import { motion } from "framer-motion";
import { Loader } from "lucide-react";

export function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center"
      >
        <Loader className="w-8 h-8 animate-spin mx-auto mb-4" />
        <p className="text-2xl font-bold tracking-tighter">Welcome to NEXORA</p>
      </motion.div>
    </div>
  );
}