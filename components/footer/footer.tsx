"use client";

import { motion } from "framer-motion";
import { FooterLinks } from "./footer-links";
import { FooterSocial } from "./footer-social";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">NEXORA</h3>
            <p className="text-gray-400">
              Crafting digital experiences that inspire and innovate
            </p>
            <FooterSocial />
          </div>
          
          <div className="col-span-2">
            <FooterLinks />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-12 pt-8 border-t border-gray-800 text-center md:text-left"
        >
          <p className="text-gray-400">
            © {currentYear} Nexora. All rights reserved.
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
}