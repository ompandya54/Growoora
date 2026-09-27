"use client";

import React from "react";
import MagneticButton from "../common/MagneticButton";
import { Users, Code, Sparkles, Target } from "lucide-react";

export default function AboutSection() {
  const stats = [
    { label: "Core Team Members", value: "3+", icon: Users, sub: "Developers & Designers" },
    { label: "Digital Products Built", value: "15+", icon: Code, sub: "Global Clients" },
    { label: "Core Technologies", value: "12+", icon: Sparkles, sub: "Modern Tech Stack" },
    { label: "Dedication & Focus", value: "100%", icon: Target, sub: "Zero Bloatware" },
  ];

  return (
    <section id="about" className="py-28 bg-[#F8FAF7] relative overflow-hidden border-t border-[#E5E9E2]/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Editorial Narrative */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E5E9E2] text-xs font-mono font-bold text-[#20A85A] uppercase tracking-widest">
              ABOUT GROWOORA
            </div>
            
            <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#111817] leading-tight">
              Small team. <br />
              <span className="text-gradient-green">Big ambition.</span>
            </h2>

            <p className="text-lg sm:text-xl text-[#52605D] leading-relaxed font-normal">
              Growoora is an agile team of engineers, designers, and growth strategists. We operate without corporate bloat or unnecessary overhead—delivering high-impact, sub-second 3D digital experiences and measurable organic search growth.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#8FE63B] mt-2.5 flex-shrink-0" />
                <p className="text-base text-[#111817] font-semibold">
                  Full-Stack Technical Capability: From Three.js shaders to Next.js server actions.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#20A85A] mt-2.5 flex-shrink-0" />
                <p className="text-base text-[#111817] font-semibold">
                  Performance First: Sub-100ms LCP speeds and Core Web Vitals optimization.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#8FE63B] mt-2.5 flex-shrink-0" />
                <p className="text-base text-[#111817] font-semibold">
                  Direct Founder Access: You work directly with the creators building your product.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <MagneticButton href="#contact" variant="primary" dataCursor="MEET US">
                Work With Us
              </MagneticButton>
            </div>
          </div>

          {/* Right Statistics Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-6">
            {stats.map((s, idx) => {
              const IconComp = s.icon;
              return (
                <div
                  key={s.label}
                  className="p-8 rounded-3xl bg-white border border-[#E5E9E2] shadow-xs hover:border-[#8FE63B] hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-[220px] group"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-2xl bg-[#8FE63B]/15 text-[#20A85A] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono text-[#52605D] uppercase">
                      0{idx + 1}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-4xl sm:text-5xl font-extrabold text-[#111817] tracking-tight group-hover:text-[#20A85A] transition-colors">
                      {s.value}
                    </h3>
                    <p className="text-xs font-bold text-[#111817] mt-1">{s.label}</p>
                    <p className="text-[11px] font-mono text-[#52605D]">{s.sub}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
