"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Plus, X } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function FeaturedWorkSection() {
  const containerRef = useRef(null);
  const piqueTrackRef = useRef(null);
  const piqueBgRef = useRef(null);
  const piqueInnerCardRef = useRef(null);
  
  const twoColTrackRef = useRef(null);
  const sussexVideoRef = useRef(null);
  const chaleitBgRef = useRef(null);
  const chaleitCardRef = useRef(null);

  // Hotspot interaction state for PIQUE kitchen
  const [activeHotspot, setActiveHotspot] = useState(null);

  const hotspots = [
    {
      id: 1,
      x: "24%",
      y: "28%",
      title: "Architectural Fluted Oak",
      desc: "Custom vertical timber slat cabinetry with seamless touch-to-open latches.",
    },
    {
      id: 2,
      x: "48%",
      y: "56%",
      title: "Caesarstone Quartz Island",
      desc: "Single-slab waterfall edge stone counter resistant to heat and wear.",
    },
    {
      id: 3,
      x: "52%",
      y: "35%",
      title: "Brushed Brass Fixtures",
      desc: "Precision-milled gooseneck tapware in organic champagne gold patina.",
    },
    {
      id: 4,
      x: "78%",
      y: "40%",
      title: "Integrated Wine Reserve",
      desc: "Dual-zone temperature controlled sommelier cellar with smoked UV glass.",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // -------------------------------------------------------------
      // 1. PIQUE PARALLAX ANIMATION
      // Outer background image moves slowly (yPercent: 12)
      // Inner floating window card moves up at a faster/smoother rate (y: 60 -> -100)
      // -------------------------------------------------------------
      if (piqueBgRef.current && piqueTrackRef.current) {
        gsap.fromTo(
          piqueBgRef.current,
          { yPercent: -8 },
          {
            yPercent: 10,
            ease: "none",
            scrollTrigger: {
              trigger: piqueTrackRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.2,
            },
          }
        );
      }

      if (piqueInnerCardRef.current && piqueTrackRef.current) {
        gsap.fromTo(
          piqueInnerCardRef.current,
          { y: 70 },
          {
            y: -110,
            ease: "none",
            scrollTrigger: {
              trigger: piqueTrackRef.current,
              start: "top 80%",
              end: "bottom top",
              scrub: 1.5,
            },
          }
        );
      }

      // -------------------------------------------------------------
      // 2. CHALEIT TWO-COLUMN PARALLAX
      // Right image (chaleitBgRef) moves slowly
      // Floating card on top (chaleitCardRef) moves noticeably faster
      // -------------------------------------------------------------
      if (chaleitBgRef.current && twoColTrackRef.current) {
        gsap.fromTo(
          chaleitBgRef.current,
          { yPercent: -10 },
          {
            yPercent: 12,
            ease: "none",
            scrollTrigger: {
              trigger: twoColTrackRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.2,
            },
          }
        );
      }

      if (chaleitCardRef.current && twoColTrackRef.current) {
        gsap.fromTo(
          chaleitCardRef.current,
          { y: 50 },
          {
            y: -80,
            ease: "none",
            scrollTrigger: {
              trigger: twoColTrackRef.current,
              start: "top 75%",
              end: "bottom top",
              scrub: 1.6,
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#F4F3ED] transition-colors duration-500 pt-16 sm:pt-24 pb-28 sm:pb-36 overflow-hidden"
    >
      <div className="max-w-[1880px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12">
        {/* ======================================================== */}
        {/* 1. PIQUE HERO SHOWCASE CARD (PARALLAX DEPTH LAYER)       */}
        {/* ======================================================== */}
        <div
          ref={piqueTrackRef}
          className="relative rounded-[28px] sm:rounded-[38px] md:rounded-[44px] overflow-hidden min-h-[960px] sm:min-h-[1100px] lg:min-h-[1240px] shadow-2xl bg-[#EBE9E1]"
        >
          {/* Background Layer: House & Trees Landscape */}
          <div
            ref={piqueBgRef}
            className="absolute inset-x-0 -top-[15%] h-[130%] w-full will-change-transform pointer-events-none"
          >
            <Image
              src="/images/pique_exterior.jpg"
              alt="The PIQUE of Home Design - Modular Coastal Architecture"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center select-none"
            />
            {/* Soft Ambient Contrast Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-black/10 pointer-events-none" />
          </div>

          {/* Floating PIQUE Brand Tag (Bottom Left of Outer Container) */}
          <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 z-20 pointer-events-none select-none">
            <span className="text-3xl sm:text-5xl font-extrabold tracking-[-0.04em] text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]">
              PIQUE
            </span>
          </div>

          {/* Foreground Layer: Floating Multi-Layer Device / Card Window */}
          <div
            ref={piqueInnerCardRef}
            className="relative z-10 w-full max-w-4xl lg:max-w-5xl mx-auto pt-16 sm:pt-24 pb-24 px-4 sm:px-6 will-change-transform"
          >
            <div className="rounded-[24px] sm:rounded-[32px] overflow-hidden bg-[#162026] text-white shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] border border-white/15">
              {/* Top Navigation Bar Inside the PIQUE Frame */}
              <div className="flex items-center justify-between px-6 sm:px-8 py-3.5 bg-[#10171B]/95 backdrop-blur-md border-b border-white/10 select-none">
                {/* Left Pill: Menu */}
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[11px] font-mono font-bold tracking-widest text-white/90">
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  <span>MENU</span>
                </div>

                {/* Center Brand Name */}
                <div className="text-lg sm:text-xl font-bold tracking-[0.12em] text-white">
                  PIQUE
                </div>

                {/* Right Action: Contact */}
                <div className="text-[11px] font-mono font-bold tracking-widest text-white/80 hover:text-white transition-colors cursor-pointer flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>CONTACT</span>
                </div>
              </div>

              {/* Upper Section: Video / Hero Rendering Window */}
              <div className="relative aspect-[16/9.5] w-full overflow-hidden bg-black select-none">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster="/images/pique_exterior.jpg"
                  className="w-full h-full object-cover object-center opacity-95"
                >
                  <source src="/Growoora.mp4" type="video/mp4" />
                </video>

                {/* Subtle Contrast Gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                {/* Editorial Title Overlay on Video */}
                <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 z-10 max-w-lg pointer-events-none">
                  <h3 className="text-2xl sm:text-4xl md:text-5xl font-serif text-white leading-[1.08] drop-shadow-lg tracking-tight">
                    The PIQUE of <br />
                    <span className="italic font-normal">Home Design</span>
                  </h3>
                </div>
              </div>

              {/* Lower Section: Specification & Interactive Kitchen Hotspots */}
              <div className="p-6 sm:p-10 md:p-12 bg-[#172227] border-t border-white/10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                  {/* Left Column: Kitchen Island with Interactive Glowing Hotspots */}
                  <div className="lg:col-span-7 relative rounded-2xl overflow-hidden aspect-[4/3] bg-black/40 border border-white/10 shadow-lg group">
                    <Image
                      src="/images/pique_kitchen.jpg"
                      alt="PIQUE Standard Inclusions - Luxury Kitchen Island"
                      fill
                      sizes="(max-width: 1024px) 100vw, 55vw"
                      className="object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Dark Tint Overlay */}
                    <div className="absolute inset-0 bg-black/20 pointer-events-none" />

                    {/* Interactive Hotspot Buttons */}
                    {hotspots.map((spot) => {
                      const isActive = activeHotspot === spot.id;
                      return (
                        <div
                          key={spot.id}
                          className="absolute z-20"
                          style={{ left: spot.x, top: spot.y }}
                        >
                          {/* Pulsing Hotspot Target Button */}
                          <button
                            type="button"
                            onClick={() =>
                              setActiveHotspot(isActive ? null : spot.id)
                            }
                            onMouseEnter={() => setActiveHotspot(spot.id)}
                            aria-label={`View details for ${spot.title}`}
                            className="relative flex items-center justify-center w-8 h-8 rounded-full focus:outline-none cursor-pointer transform transition-transform duration-300 hover:scale-125"
                          >
                            {/* Outer Ping Ripple */}
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-70" />
                            {/* Inner Circle Target */}
                            <span className="relative inline-flex items-center justify-center w-6 h-6 rounded-full bg-white text-[#162026] shadow-xl border-2 border-white/40 font-bold text-xs">
                              {isActive ? (
                                <X className="w-3 h-3" />
                              ) : (
                                <Plus className="w-3 h-3" />
                              )}
                            </span>
                          </button>

                          {/* Floating Glassmorphic Tooltip Card */}
                          {isActive && (
                            <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-3 w-56 sm:w-64 p-3.5 rounded-xl bg-black/85 backdrop-blur-md border border-white/20 text-white shadow-2xl z-30 animate-in fade-in zoom-in-95 duration-200 pointer-events-auto">
                              <p className="text-xs font-bold text-emerald-400 font-mono uppercase tracking-wider mb-1">
                                {spot.title}
                              </p>
                              <p className="text-[11px] text-white/80 leading-relaxed">
                                {spot.desc}
                              </p>
                              {/* Pointer Arrow */}
                              <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-[1px] border-4 border-transparent border-t-black/85" />
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* Right Column: Specification Editorial Content & Actions */}
                  <div className="lg:col-span-5 flex flex-col justify-between h-full">
                    <div>
                      <span className="inline-block text-xs font-mono font-bold tracking-widest text-emerald-400 uppercase mb-3">
                        PERTH MODULAR STANDARD
                      </span>
                      <h4 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-white tracking-tight leading-[1.15] mb-4">
                        PIQUE Specification
                      </h4>
                      <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-8">
                        The PIQUE philosophy is one of delightful curiosity. Find
                        more to delight, inside and out, with the range of PIQUE
                        standard inclusions for our modular architectural homes in
                        Perth.
                      </p>
                    </div>

                    {/* Interactive Specification Buttons */}
                    <div className="flex flex-wrap gap-3 pt-2">
                      <button
                        type="button"
                        className="group inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 border border-white/20 text-white text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer shadow-md"
                      >
                        <span>Our specification</span>
                        <ArrowRight className="w-3.5 h-3.5 text-white/80 group-hover:translate-x-1 transition-transform" />
                      </button>

                      <button
                        type="button"
                        className="group inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 border border-white/20 text-white text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer shadow-md"
                      >
                        <span>Our display village</span>
                        <ArrowRight className="w-3.5 h-3.5 text-white/80 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Dark Accent Edge */}
              <div className="h-4 bg-[#0E161B] w-full" />
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* 2. TWO-COLUMN PARALLAX SECTION (SUSSEX TAPS & CHALEIT)    */}
        {/* ======================================================== */}
        <div
          ref={twoColTrackRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mt-6 sm:mt-10"
        >
          {/* ------------------------------------------------------ */}
          {/* LEFT CARD: SUSSEX TAPS (Smooth Architectural Video)    */}
          {/* ------------------------------------------------------ */}
          <div className="group relative rounded-[28px] sm:rounded-[36px] md:rounded-[44px] overflow-hidden h-[540px] sm:h-[640px] lg:h-[720px] bg-[#121212] shadow-xl cursor-pointer">
            {/* Full-Bleed High-Definition Looping Video */}
            <video
              ref={sussexVideoRef}
              autoPlay
              loop
              muted
              playsInline
              poster="/images/sussex_taps.jpg"
              className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
            >
              <source src="/Growoora.mp4" type="video/mp4" />
            </video>

            {/* Cinematic Gradient Contrast Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

            {/* Top Right Floating Arrow Badge */}
            <div className="absolute top-6 sm:top-8 right-6 sm:right-8 z-20">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:bg-white group-hover:text-black shadow-lg">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </div>

            {/* Bottom Left Title: Sussex Taps */}
            <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 z-20 pointer-events-none select-none">
              <span className="text-2xl sm:text-4xl font-bold tracking-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]">
                Sussex Taps
              </span>
            </div>
          </div>

          {/* ------------------------------------------------------ */}
          {/* RIGHT CARD: CHALEIT (Slow BG Image + Fast Moving Card) */}
          {/* ------------------------------------------------------ */}
          <div className="group relative rounded-[28px] sm:rounded-[36px] md:rounded-[44px] overflow-hidden h-[540px] sm:h-[640px] lg:h-[720px] bg-[#3B3A36] shadow-xl cursor-pointer">
            {/* Background Layer: Slow Parallax Movement */}
            <div
              ref={chaleitBgRef}
              className="absolute inset-x-0 -top-[15%] h-[130%] w-full will-change-transform pointer-events-none"
            >
              <Image
                src="/images/chaleit_bg.jpg"
                alt="Chaleit Studio Creative Environment"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center select-none"
              />
              {/* Warm Ambient Shading Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent pointer-events-none" />
            </div>

            {/* Top Right Floating Arrow Badge */}
            <div className="absolute top-6 sm:top-8 right-6 sm:right-8 z-20">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:bg-white group-hover:text-black shadow-lg">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </div>

            {/* Floating Mobile / App Preview Card (FAST PARALLAX) */}
            <div
              ref={chaleitCardRef}
              className="absolute right-6 sm:right-10 md:right-14 top-[22%] w-[270px] sm:w-[310px] md:w-[350px] rounded-[26px] sm:rounded-[30px] bg-[#0C2E35] border border-white/20 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] p-6 text-white z-20 will-change-transform select-none"
            >
              {/* Header inside phone mockup */}
              <div className="flex items-center justify-between pb-5 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-md bg-white/15 flex items-center justify-center font-bold text-[10px] text-white">
                    ❖
                  </div>
                  <span className="font-bold tracking-tight text-lg text-white">
                    Chaleit
                  </span>
                </div>
                {/* Minimal Hamburger Menu Button */}
                <div className="flex flex-col gap-1 w-6 cursor-pointer">
                  <span className="w-full h-0.5 bg-white/80 rounded-full" />
                  <span className="w-3/4 h-0.5 bg-white/80 rounded-full self-end" />
                </div>
              </div>

              {/* Graphic Icon / Illustration Section */}
              <div className="my-6 p-4 rounded-2xl bg-[#113B44] flex items-center justify-center">
                <svg
                  viewBox="0 0 100 100"
                  className="w-24 h-24 text-[#529E9C] fill-current"
                >
                  <path d="M10 20 H50 V45 H25 V75 H10 Z" />
                  <path d="M55 20 H90 V75 H70 V45 H55 Z" />
                  <path d="M30 50 H70 V85 H30 Z" opacity="0.6" />
                </svg>
              </div>

              {/* Headline Body Copy */}
              <p className="text-white font-serif text-base sm:text-lg leading-snug mb-5 tracking-tight">
                Real security needs deep expertise and clear thinking. That&apos;s
                why we&apos;re here.
              </p>

              {/* CTA Action Pill Button */}
              <div className="w-full bg-[#D8F96E] hover:bg-[#cbf056] text-black font-semibold text-xs sm:text-sm px-4 py-2.5 rounded-full flex items-center justify-between transition-colors shadow-md">
                <span>Start with a health check</span>
                <ArrowRight className="w-4 h-4 text-black" />
              </div>
            </div>

            {/* Bottom Left Title: Chaleit */}
            <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 z-20 pointer-events-none select-none">
              <span className="text-2xl sm:text-4xl font-bold tracking-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]">
                Chaleit
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
