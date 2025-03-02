import { notFound } from "next/navigation";
import { ProjectPageContent } from "@/components/project/project-page-content";
import { fetchProjects, fetchProjectBySlug } from "@/sanity/sanity-query";

export async function generateStaticParams() {
  const projects = await fetchProjects();
  return projects.map((project: any) => ({
    slug: project.slug.current,
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = await fetchProjectBySlug(params.slug);
 
 

  if (!project) {
    notFound();
  }

  return <ProjectPageContent project={project} />;
}