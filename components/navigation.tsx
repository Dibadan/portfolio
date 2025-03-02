"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-lg"
    >
      <div className="max-w-7xl mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          <Link href="/" className="text-2xl font-bold">
            NEXORA
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-gray-300 transition-colors">
              Home
            </Link>
            <Link href="/about" className="hover:text-gray-300 transition-colors">
              About
            </Link>
            <Link href="/projects" className="hover:text-gray-300 transition-colors">
              Projects
            </Link>
            <Link href="/blog" className="hover:text-gray-300 transition-colors">
              Blog
            </Link>
            <Button asChild variant="outline" className="rounded-full">
              <Link href="/contact">Contact</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4"
          >
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="hover:text-gray-300 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="hover:text-gray-300 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/projects"
                className="hover:text-gray-300 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="/blog"
                className="hover:text-gray-300 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Button asChild variant="outline" className="rounded-full w-full">
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  Contact
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}