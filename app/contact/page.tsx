"use client";

import { motion } from "framer-motion";
import { ContactForm } from "@/components/contact-form";

export default function Contact() {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8">
            GET IN TOUCH
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-xl text-gray-400">
                Have a project in mind? Let's create something amazing together. Fill out the form and I'll get back to you as soon as possible.
              </p>
            </div>
            <ContactForm />
          </div>
        </motion.div>
      </section>
    </div>
  );
}