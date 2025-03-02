"use client";

import { projects } from "@/lib/data";
import { notFound } from "next/navigation";
import { ProjectPageContent } from "@/components/project/project-page-content";

export default function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return <ProjectPageContent project={project} />;
}