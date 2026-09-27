"use client";

import React, { useRef } from "react";
import { projectsData } from "@/data/projects";
import Image from "next/image";
import { ArrowUpRight, TrendingUp } from "lucide-react";

export default function ProjectsSection() {
  const scrollRef = useRef(null);

  return (
    <section id="work" className="py-28 bg-[#F8FAF7] relative overflow-hidden border-t border-[#E5E9E2]/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E5E9E2] text-xs font-mono font-bold text-[#20A85A] uppercase tracking-widest mb-4">
              FEATURED CASE STUDIES
            </div>
            <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#111817] leading-none">
              Things we&apos;ve <br />
              <span className="text-gradient-green">grown.</span>
            </h2>
          </div>
          <p className="max-w-md text-base sm:text-lg text-[#52605D] leading-relaxed">
            Exploration of selected digital products, 3D web platforms, and growth campaigns built for ambitious clients.
          </p>
        </div>

        {/* Large Horizontal / Grid Project Showcase Cards */}
        <div ref={scrollRef} className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projectsData.map((project) => (
            <div
              key={project.id}
              data-cursor="VIEW PROJECT →"
              className="group relative rounded-3xl bg-white border border-[#E5E9E2] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col justify-between"
            >
              {/* Image & Overlay Visual Container */}
              <div className="relative h-[340px] sm:h-[400px] w-full overflow-hidden bg-zinc-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  unoptimized
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
                  priority={project.id === "01"}
                />

                {/* Gradient Shading Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111817]/80 via-[#111817]/20 to-transparent" />

                {/* Top Badge Overlay */}
                <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10">
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#111817] shadow-sm">
                    {project.id} // {project.year}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-[#8FE63B] text-[#111817] flex items-center justify-center font-bold transform transition-transform duration-300 group-hover:rotate-45 group-hover:scale-110 shadow-md">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>

                {/* Floating Metric Result Box */}
                <div className="absolute bottom-6 left-6 z-10 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/90 backdrop-blur-md border border-white/50 text-[#111817] shadow-lg">
                  <TrendingUp className="w-4 h-4 text-[#20A85A]" />
                  <span className="text-xs font-bold font-mono tracking-tight">{project.metrics}</span>
                </div>
              </div>

              {/* Card Text Content */}
              <div className="p-8 flex flex-col justify-between flex-1 bg-white">
                <div>
                  <span className="text-xs font-mono uppercase font-semibold text-[#20A85A] tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111817] group-hover:text-[#20A85A] transition-colors mt-1 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[#52605D] leading-relaxed mb-6">
                    {project.summary}
                  </p>
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-[#E5E9E2]">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono px-3 py-1 rounded-full bg-[#F8FAF7] border border-[#E5E9E2] text-[#111817]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
