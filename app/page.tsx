"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/data";
import { LoadingScreen } from "@/components/loading-screen";
import { Navigation } from "@/components/navigation";

// Dynamically import HeroSection with no SSR
const HeroSection = dynamic(
  () => import("@/components/hero-section").then((mod) => mod.HeroSection),
  {
    ssr: false,
    loading: () => <div className="h-screen" /> // Add a placeholder with the same height
  }
);

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isModelLoaded, setIsModelLoaded] = useState(false);

  useEffect(() => {
    if (isModelLoaded) {
      const timer = setTimeout(() => setIsLoading(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isModelLoaded]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen />}
      </AnimatePresence>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      >
        <Navigation />
        <main className="min-h-screen">
          <HeroSection onLoaded={() => setIsModelLoaded(true)} />
          <section className="py-32 px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-7xl mx-auto"
            >
              <h2 className="text-5xl md:text-7xl font-bold mb-16">MY PROJECTS</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                  <ProjectCard key={index} project={project} index={index} />
                ))}
              </div>
            </motion.div>
          </section>
        </main>
      </motion.div>
    </>
  );
}