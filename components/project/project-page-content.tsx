"use client";

import { Project } from "@/lib/types";
import { ProjectHeader } from "./project-header";

interface ProjectPageContentProps {
  project: any;
}

export function ProjectPageContent({ project }: ProjectPageContentProps) {
  // Transform Sanity data to match our component props
  const transformedProject = {
    title: project.title,
    description: project.description,
    image: project.image?.asset?.url || '',
    technologies: project.technologies || [],
    slug: project.slug.current,
    liveUrl: project.liveUrl,
    repoUrl: project.repoUrl,
    publishedAt: project.publishedAt,
  };

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <ProjectHeader project={transformedProject} />
        </div>
      </section>
    </div>
  );
}