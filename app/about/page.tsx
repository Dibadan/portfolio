"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8">
            ABOUT ME
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-xl text-gray-400">
                I'm a creative developer passionate about building innovative digital experiences. With expertise in modern web technologies, I craft solutions that combine aesthetic excellence with technical precision.
              </p>
              <Button asChild size="lg" className="rounded-full">
                <Link href="/contact">
                  Get in touch <ArrowUpRight className="ml-2" />
                </Link>
              </Button>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Skills</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="text-gray-400">Frontend Development</p>
                    <p className="text-gray-400">UI/UX Design</p>
                    <p className="text-gray-400">React & Next.js</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-gray-400">3D Modeling</p>
                    <p className="text-gray-400">Animation</p>
                    <p className="text-gray-400">Creative Development</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}