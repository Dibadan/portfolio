"use client";

import { Button } from "@/components/ui/button";
import { Category } from "@/lib/types";
import { motion } from "framer-motion";

const categories: { label: string; value: Category | 'all' }[] = [
  { label: 'All', value: 'all' },
  { label: 'Web', value: 'web' },
  { label: 'Mobile', value: 'mobile' },
  { label: 'Design', value: 'design' },
];

interface ProjectFilterProps {
  selectedCategory: Category | 'all';
  onCategoryChange: (category: Category | 'all') => void;
}

export function ProjectFilter({ selectedCategory, onCategoryChange }: ProjectFilterProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-wrap gap-4"
    >
      {categories.map(({ label, value }) => (
        <Button
          key={value}
          variant={selectedCategory === value ? "default" : "outline"}
          onClick={() => onCategoryChange(value)}
          className="rounded-full"
        >
          {label}
        </Button>
      ))}
    </motion.div>
  );
}