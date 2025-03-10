"use client";

import { Project } from "@/lib/types";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectHeaderProps {
  project: Project;
}

export function ProjectHeader({ project }: ProjectHeaderProps) {
  return (
    <>
      <Link
        href="/projects"
        className="inline-flex items-center text-gray-400 hover:text-white mb-8"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Projects
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold tracking-tighter mb-6"
          >
            {project.title}
          </motion.h1>
          <p className="text-xl text-gray-400 mb-8">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-8">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full bg-gray-800 text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-4">
            {project.liveUrl && (
              <Button asChild variant="default" className="rounded-full">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                  View Live <ArrowUpRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            )}
            {project.repoUrl && (
              <Button asChild variant="outline" className="rounded-full">
                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                  View Code <ArrowUpRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            )}
          </div>
        </div>
        <div className="relative aspect-video rounded-lg overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </>
  );
}