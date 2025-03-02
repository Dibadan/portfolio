"use client";

import { Project } from "@/lib/types";
import { ProjectHeader } from "./project-header";
import { ProjectDetails } from "./project-details";
import { ProjectGallery } from "./project-gallery";

interface ProjectPageContentProps {
  project: Project;
}

export function ProjectPageContent({ project }: ProjectPageContentProps) {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <ProjectHeader project={project} />
          <ProjectDetails project={project} />
          <ProjectGallery images={project.images} title={project.title} />
        </div>
      </section>
    </div>
  );
}