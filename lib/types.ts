export type Category = 'web' | 'mobile' | 'design';

export interface Project {
  title: string;
  description: string;
  image: string;
  category: Category;
  technologies: string[];
  link: string;
  slug: string;
  fullDescription: string;
  challenge: string;
  solution: string;
  results: string;
  images: string[];
}

export interface BlogPost {
  title: string;
  excerpt: string;
  slug: string;
  mainImage?: string; // Add this line to support the main image
  author?: string;
  publishedAt: string;
  content:string;
}

