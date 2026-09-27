"use client";

import React, { useRef, useState, useEffect } from "react";
import MagneticButton from "../common/MagneticButton";
import CanvasContainer from "../3d/CanvasContainer";
import HeroLogoScene from "../3d/HeroLogoScene";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HeroSection() {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const canvasRef = useRef(null);
  const [pointerPos, setPointerPos] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);

  // Handle pointer tracking over hero
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    setPointerPos({ x, y });
  };

  // Scroll trigger animations & progress tracking
  useEffect(() => {
    if (!containerRef.current || !textRef.current) return;

    const ctx = gsap.context(() => {
      // Parallax text shift on scroll
      gsap.to(textRef.current, {
        y: -70,
        opacity: 0.15,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
          onUpdate: (self) => {
            setScrollProgress(self.progress);
          },
        },
      });

      // Continuous 3D canvas float transition down
      if (canvasRef.current) {
        gsap.to(canvasRef.current, {
          y: 90,
          scale: 1.05,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen pt-32 pb-24 flex items-center justify-center overflow-hidden bg-[#F8FAF7]"
    >
      {/* Background Radial Glow */}
      <div className="absolute top-1/3 right-1/4 w-[550px] h-[550px] bg-radial-glow pointer-events-none blur-3xl opacity-75" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Editorial Copy */}
        <div ref={textRef} className="lg:col-span-7 flex flex-col items-start gap-6">
          {/* Studio Tag Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E5E9E2] text-xs font-mono font-bold tracking-widest uppercase text-[#20A85A] shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#8FE63B] animate-pulse" />
            DIGITAL GROWTH STUDIO
          </div>

          {/* Main Hero Headline */}
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-[#111817] leading-[0.95]">
            WE BUILD. <br />
            WE MARKET. <br />
            WE <span className="text-gradient-green">GROW.</span>
          </h1>

          {/* Supporting Description */}
          <p className="max-w-xl text-lg sm:text-xl text-[#52605D] leading-relaxed font-normal">
            Growoora helps ambitious brands turn ideas into digital products, powerful identities and measurable growth.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <MagneticButton href="#contact" variant="primary" dataCursor="LET'S GO">
              Start a Project
            </MagneticButton>
            <MagneticButton href="#services" variant="secondary" dataCursor="SERVICES">
              Explore Services
            </MagneticButton>
          </div>

          {/* Key Value Micro Bullet Highlights */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-[#E5E9E2]/80 w-full max-w-lg mt-4">
            <div>
              <p className="text-2xl font-extrabold text-[#111817]">01</p>
              <p className="text-xs font-medium text-[#52605D] mt-0.5">Custom Software</p>
            </div>
            <div>
              <p className="text-2xl font-extrabold text-[#111817]">02</p>
              <p className="text-xs font-medium text-[#52605D] mt-0.5">3D Platforms</p>
            </div>
            <div>
              <p className="text-2xl font-extrabold text-[#111817]">03</p>
              <p className="text-xs font-medium text-[#52605D] mt-0.5">SEO & Funnels</p>
            </div>
          </div>
        </div>

        {/* Right Interactive 3D Scene */}
        <div ref={canvasRef} className="lg:col-span-5 h-[440px] sm:h-[560px] w-full relative">
          <CanvasContainer camera={{ position: [0, 0, 5.5], fov: 42 }}>
            <HeroLogoScene pointerPos={pointerPos} scrollProgress={scrollProgress} />
          </CanvasContainer>

          {/* Micro Helper Tag underneath 3D Canvas */}
          <div className="absolute bottom-2 right-4 text-[10px] font-mono uppercase tracking-widest text-[#52605D]/60 flex items-center gap-1.5 pointer-events-none">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8FE63B]" />
            INTERACTIVE 3D SCROLL MODEL
          </div>
        </div>
      </div>

      {/* Floating 3D Scroll Transition Indicator */}
      <a
        href="#services"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#52605D] hover:text-[#20A85A] transition-colors group"
      >
        <span className="text-[10px] opacity-70">SCROLL TO SERVICES</span>
        <div className="w-8 h-8 rounded-full border border-[#E5E9E2] bg-white flex items-center justify-center shadow-2xs group-hover:border-[#8FE63B] group-hover:scale-110 transition-all duration-300">
          <ArrowDown className="w-4 h-4 text-[#20A85A] animate-bounce" />
        </div>
      </a>
    </section>
  );
}

