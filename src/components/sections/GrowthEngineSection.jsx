"use client";

import React, { useRef, useEffect } from "react";
import CanvasContainer from "../3d/CanvasContainer";
import GrowthEngine3D from "../3d/GrowthEngine3D";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Cpu, Zap, TrendingUp } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function GrowthEngineSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Gentle parallax / zoom on scroll
      gsap.fromTo(
        "#engine-canvas",
        { scale: 0.9, opacity: 0.8 },
        {
          scale: 1.05,
          opacity: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center",
            end: "bottom center",
            scrub: 1,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="engine" ref={sectionRef} className="py-28 bg-[#111817] text-white relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#8FE63B]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-mono font-bold text-[#8FE63B] uppercase tracking-widest mb-4">
            <Zap className="w-3.5 h-3.5" />
            INTEGRATED SYSTEM
          </div>
          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-none mb-6">
            THE <span className="text-gradient-green">GROWTH ENGINE</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 font-normal leading-relaxed">
            We bridge Strategy, Design, Development, and Marketing into one unified, compounding growth ecosystem.
          </p>
        </div>

        {/* Center 3D Interactive Ecosystem Canvas */}
        <div id="engine-canvas" className="h-[460px] sm:h-[580px] w-full relative my-4">
          <CanvasContainer camera={{ position: [0, 0, 5.5], fov: 45 }}>
            <ambientLight intensity={0.9} />
            <directionalLight position={[10, 10, 10]} intensity={1.5} />
            <GrowthEngine3D />
          </CanvasContainer>
        </div>

        {/* 3 Core Pillars Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-white/10 max-w-5xl mx-auto">
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-4">
            <div className="p-3 rounded-xl bg-[#8FE63B]/10 text-[#8FE63B]">
              <Cpu className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-lg mb-1">01. Scalable Tech</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Next.js & WebGL architecture designed to scale seamlessly to millions of users.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-4">
            <div className="p-3 rounded-xl bg-[#20A85A]/10 text-[#20A85A]">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-lg mb-1">02. Creative Identity</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                High-converting visual design & interactive 3D assets that captivate audiences.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-4">
            <div className="p-3 rounded-xl bg-[#8FE63B]/10 text-[#8FE63B]">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-lg mb-1">03. Measurable ROI</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Organic search dominance, paid acquisition pipelines, and retention optimization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
