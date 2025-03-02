"use client";

import { Github, Instagram, Linkedin, Twitter } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export function FooterSocial() {
  return (
    <div>
      <h4 className="font-semibold mb-4">SOCIAL</h4>
      <div className="flex space-x-4">
        {socialLinks.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            className="text-gray-400 hover:text-white transition-colors"
            aria-label={label}
          >
            <Icon size={20} />
          </a>
        ))}
      </div>
    </div>
  );
}