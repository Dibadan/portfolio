export type Category = 'web' | 'mobile' | 'design';

export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  slug: string;
  liveUrl?: string | null;
  repoUrl?: string | null;
  publishedAt?: string | null;
}

export interface BlogPost {
  title: string;
  excerpt: string;
  slug: string;
  mainImage?: string;
  author?: string;
  publishedAt: string;
  content: string;
}

