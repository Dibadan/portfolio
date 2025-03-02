"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "@/components/project-card";
import { ProjectFilter } from "@/components/project-filter";
import { SearchInput } from "@/components/search/search-input";
import { useState } from "react";
import { Category } from "@/lib/types";
import { useSearch } from "@/hooks/use-search";

interface ProjectsListProps {
  initialProjects: any[];
}

export function ProjectsList({ initialProjects }: ProjectsListProps) {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>('all');
  const { searchQuery, setSearchQuery, filteredItems } = useSearch(initialProjects, ['title', 'description']);

  const displayedProjects = selectedCategory === 'all' 
    ? filteredItems 
    : filteredItems.filter(project => project.category === selectedCategory);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="space-y-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ProjectFilter 
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
        <SearchInput
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="Search projects..."
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {displayedProjects.map((project, index) => (
          <ProjectCard 
            key={project.slug.current} 
            project={{
              ...project,
              image: project.image?.asset?.url || '',
              slug: project.slug.current,
            }}
            index={index} 
          />
        ))}
      </div>

      {displayedProjects.length === 0 && (
        <p className="text-center text-gray-400 py-8">
          No projects found matching your criteria.
        </p>
      )}
    </motion.div>
  );
} 