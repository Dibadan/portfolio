"use client";

import Link from "next/link";

interface FooterSection {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
}

const sections: FooterSection[] = [
  {
    title: "EXPLORE",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Projects", href: "/projects" },
    ],
  },
  {
    title: "CONTENT",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export function FooterLinks() {
  return (
    <div className="grid grid-cols-2 gap-8 md:gap-12">
      {sections.map((section) => (
        <div key={section.title}>
          <h4 className="font-semibold mb-4">{section.title}</h4>
          <ul className="space-y-2">
            {section.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}