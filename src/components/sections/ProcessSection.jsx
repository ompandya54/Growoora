"use client";

import React, { useRef, useEffect } from "react";
import { processSteps } from "@/data/process";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ProcessSection() {
  const containerRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || !lineRef.current) return;

    const ctx = gsap.context(() => {
      // Animate line scaleY down the page on scroll
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top center",
            end: "bottom center",
            scrub: 0.5,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="process" ref={containerRef} className="py-28 bg-[#F8FAF7] relative overflow-hidden border-t border-[#E5E9E2]/60">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E5E9E2] text-xs font-mono font-bold text-[#20A85A] uppercase tracking-widest mb-4">
            HOW WE WORK
          </div>
          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#111817] leading-tight">
            Good work <br />
            needs a <span className="text-gradient-green">good process.</span>
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Central Line (Grey Background) */}
          <div className="absolute top-0 bottom-0 left-6 sm:left-1/2 -translate-x-1/2 w-1 bg-[#E5E9E2] rounded-full" />

          {/* Glowing Green Tracer Line (Animated on Scroll) */}
          <div
            ref={lineRef}
            className="absolute top-0 bottom-0 left-6 sm:left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-[#8FE63B] to-[#20A85A] rounded-full origin-top shadow-[0_0_12px_#8FE63B]"
          />

          {/* Timeline Steps */}
          <div className="space-y-16 sm:space-y-24">
            {processSteps.map((step, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={step.number}
                  className={`relative flex flex-col sm:flex-row items-start sm:items-center gap-8 ${
                    isEven ? "sm:flex-row-reverse text-left" : "sm:flex-row text-left sm:text-right"
                  }`}
                >
                  {/* Content Card */}
                  <div className="w-full sm:w-1/2 pl-16 sm:pl-0 sm:px-8">
                    <div className="p-8 rounded-3xl bg-white border border-[#E5E9E2] shadow-xs hover:border-[#8FE63B] transition-all duration-300 hover:shadow-lg group">
                      <div className="flex items-center gap-3 mb-2 sm:justify-start">
                        <span className="text-xs font-mono font-bold text-[#20A85A] tracking-wider uppercase">
                          PHASE // {step.phase}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-[#111817] group-hover:text-[#20A85A] transition-colors mb-3">
                        {step.number}. {step.title}
                      </h3>
                      <p className="text-sm text-[#52605D] leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Node Badge Indicator on the Center Line */}
                  <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 top-8 sm:top-auto flex items-center justify-center w-12 h-12 rounded-full bg-white border-2 border-[#8FE63B] shadow-md z-10 font-mono font-bold text-sm text-[#111817] hover:scale-110 transition-transform">
                    {step.number}
                  </div>

                  {/* Empty Spacer Column for layout symmetry */}
                  <div className="hidden sm:block w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
