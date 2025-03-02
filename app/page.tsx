"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ProjectCard } from "@/components/project-card";
import { fetchProjects } from "@/sanity/sanity-query";
import { Navigation } from "@/components/navigation";

export default function Home() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedProjects = await fetchProjects();
        setProjects(fetchedProjects || []);
      } catch (error) {
        console.error("Error fetching projects:", error);
        setProjects([]);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <section className="h-screen flex items-center justify-center bg-gradient-to-b from-transparent to-neutral-950">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6">Welcome to My Portfolio</h1>
              <p className="text-xl md:text-2xl text-gray-400">Explore my projects and work</p>
            </motion.div>
          </div>
        </section>

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
              {projects.length > 0 ? (
                projects.map((project, index) => (
                  <ProjectCard key={index} project={project} index={index} />
                ))
              ) : (
                <p>No projects found.</p>
              )}
            </div>
          </motion.div>
        </section>
      </main>
    </>
  );
}
