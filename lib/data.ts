import { Project } from "./types";

export const projects: Project[] = [
  {
    title: "Digital Experience Platform",
    slug: "digital-experience-platform",
    description: "Interactive web application with 3D elements",
    fullDescription: "A cutting-edge digital platform that combines interactive 3D elements with intuitive user interfaces to create immersive web experiences.",
    challenge: "Creating a performant and engaging 3D experience that works seamlessly across all devices while maintaining accessibility standards.",
    solution: "Implemented Three.js with React for 3D rendering, used WebGL best practices for optimization, and ensured progressive enhancement for broader device support.",
    results: "40% increase in user engagement, 25% improvement in time spent on site, and successful deployment across multiple client projects.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1558655146-764b3dd84b5a?auto=format&fit=crop&q=80"
    ],
    category: "web",
    technologies: ["React", "Three.js", "TypeScript"],
    link: "#"
  },
  {
    title: "Brand Identity System",
    slug: "brand-identity-system",
    description: "Complete brand redesign and guidelines",
    fullDescription: "A comprehensive brand identity system that establishes cohesive visual language and design principles across all touchpoints.",
    challenge: "Developing a flexible yet consistent design system that could adapt to various mediums while maintaining brand recognition.",
    solution: "Created a modular design system with clear guidelines, component library, and extensive documentation for implementation across different platforms.",
    results: "Successfully implemented across 12 markets, resulting in 30% faster design iterations and improved brand consistency.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1561070791-32a41a67d6d7?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1561070791-4526b1c2278c?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1561070791-4536bd2c8c3a?auto=format&fit=crop&q=80"
    ],
    category: "design",
    technologies: ["Figma", "Illustrator", "After Effects"],
    link: "#"
  },
  {
    title: "Mobile Banking App",
    slug: "mobile-banking-app",
    description: "Cross-platform financial application",
    fullDescription: "A secure and user-friendly mobile banking application that simplifies financial management for users across different platforms.",
    challenge: "Building a secure, performant application that maintains consistency across platforms while adhering to strict banking regulations.",
    solution: "Implemented React Native for cross-platform development, integrated robust security measures, and created a modular architecture for easy maintenance.",
    results: "4.8/5 star rating on app stores, 500,000+ downloads, and 92% user satisfaction rate.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9d?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9e?auto=format&fit=crop&q=80"
    ],
    category: "mobile",
    technologies: ["React Native", "Node.js", "Firebase"],
    link: "#"
  },
  {
    title: "E-commerce Platform",
    slug: "e-commerce-platform",
    description: "Full-stack online marketplace",
    fullDescription: "A modern e-commerce platform built with Next.js and Supabase, offering a seamless shopping experience with real-time inventory management.",
    challenge: "Creating a scalable platform that could handle high traffic while maintaining fast page loads and real-time inventory updates.",
    solution: "Utilized Next.js for optimal performance, implemented efficient caching strategies, and used Supabase for real-time data synchronization.",
    results: "300% increase in conversion rate, 50% reduction in page load times, and successful handling of 100,000+ daily active users.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52e?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52d?auto=format&fit=crop&q=80"
    ],
    category: "web",
    technologies: ["Next.js", "Tailwind", "Supabase"],
    link: "#"
  }
];