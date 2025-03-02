"use client";

import { Project } from "@/lib/types";
import { motion } from "framer-motion";

interface ProjectDetailsProps {
  project: Project;
}

export function ProjectDetails({ project }: ProjectDetailsProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16"
    >
      <div>
        <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
        <p className="text-gray-400">{project.challenge}</p>
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-4">The Solution</h2>
        <p className="text-gray-400">{project.solution}</p>
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-4">The Results</h2>
        <p className="text-gray-400">{project.results}</p>
      </div>
    </motion.div>
  );
}