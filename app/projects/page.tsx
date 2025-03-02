import { fetchProjects } from "@/sanity/sanity-query";
import { ProjectsList } from "@/components/projects/projects-list";

export default async function Projects() {
  const projects = await fetchProjects();
  

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-12">
            MY PROJECTS
          </h1>
          <ProjectsList initialProjects={projects} />
        </div>
      </section>
    </div>
  );
}