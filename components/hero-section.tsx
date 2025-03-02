"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
// Import Spline directly from the package root
import Spline from '@splinetool/react-spline';

interface HeroSectionProps {
  onLoaded: () => void;
}

export function HeroSection({ onLoaded }: HeroSectionProps) {
  const splineRef = useRef<any>(null);

  function onLoad(spline: any) {
    splineRef.current = spline;
    
    // If this is a subsequent visit, skip the initial animation
    if (typeof window !== 'undefined' && localStorage.getItem('modelLoaded')) {
      const scene = spline.findObjectByName('Scene');
      if (scene) {
        scene.skipInitialAnimation = true;
      }
    }
    
    if (typeof window !== 'undefined') {
      localStorage.setItem('modelLoaded', 'true');
    }
    onLoaded();
  }

  return (
    <section className="h-screen relative">
      <Spline 
        scene="https://prod.spline.design/fP0LH65i8bXQDQjZ/scene.splinecode"
        onLoad={onLoad}
      />
      {/* Gradient overlay for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}