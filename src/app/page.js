"use client";

import React, { useState, useEffect } from "react";
import LoadingScreen from "@/components/common/LoadingScreen";
import Navbar from "@/components/common/Navbar";
import HeroShowreelSection from "@/components/sections/HeroShowreelSection";
import FeaturedWorkSection from "@/components/sections/FeaturedWorkSection";
import ServicesSection from "@/components/sections/ServicesSection";
import GrowthEngineSection from "@/components/sections/GrowthEngineSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ProcessSection from "@/components/sections/ProcessSection";
import AboutSection from "@/components/sections/AboutSection";
import EcosystemSection from "@/components/sections/EcosystemSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FinalCTASection from "@/components/sections/FinalCTASection";
import Footer from "@/components/common/Footer";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  // Initialize smooth scroll using Lenis & synchronize with GSAP ScrollTrigger
  useEffect(() => {
    if (!loadingComplete) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const updateRaf = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateRaf);
    gsap.ticker.lagSmoothing(0);

    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 250);

    return () => {
      clearTimeout(refreshTimer);
      gsap.ticker.remove(updateRaf);
      lenis.destroy();
    };
  }, [loadingComplete]);

  return (
    <>
      {/* Brand Loading Overlay */}
      <LoadingScreen onComplete={() => setLoadingComplete(true)} />

      {/* Main Agency Experience */}
      <div className="relative flex flex-col min-h-screen bg-[#F4F3ED]">
        <Navbar />
        <main className="flex-1">
          <HeroShowreelSection />
          <FeaturedWorkSection />
          <ServicesSection />
          <GrowthEngineSection />
          <ProjectsSection />
          <ProcessSection />
          <AboutSection />
          <EcosystemSection />
          <TestimonialsSection />
          <FinalCTASection />
        </main>
        <Footer />
      </div>
    </>
  );
}

