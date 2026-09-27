"use client";

import React, { useState, useRef, useEffect } from "react";
import { servicesData } from "@/data/services";
import CanvasContainer from "../3d/CanvasContainer";
import Service3DVisual from "../3d/Service3DVisual";
import MagneticButton from "../common/MagneticButton";
import { ArrowUpRight, CheckCircle2, ChevronDown, Sparkles } from "lucide-react";
import gsap from "gsap";

export default function ServicesSection() {
  const [activeId, setActiveId] = useState("01");
  const [expandedId, setExpandedId] = useState("01");
  const activeService = servicesData.find((s) => s.id === activeId) || servicesData[0];

  const handleRowClick = (id) => {
    setActiveId(id);
    setExpandedId(expandedId === id ? null : id);
  };

  const handleRowHover = (id) => {
    setActiveId(id);
  };

  return (
    <section id="services" className="py-28 bg-[#F8FAF7] relative overflow-hidden border-t border-[#E5E9E2]/60">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-radial-glow pointer-events-none blur-3xl opacity-50 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E5E9E2] text-xs font-mono font-bold text-[#20A85A] uppercase tracking-widest mb-4 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#8FE63B] animate-pulse" />
              OUR CAPABILITIES
            </div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#111817] leading-[0.98]">
              SERVICES WE DO <br />
              <span className="text-gradient-green">LINE BY LINE.</span>
            </h2>
          </div>
          <p className="max-w-md text-base sm:text-lg text-[#52605D] leading-relaxed">
            We design, build, and scale high-impact digital solutions. Select or hover any line to explore the interactive 3D architecture.
          </p>
        </div>

        {/* Split Layout: Left Sticky 3D Showcase | Right Line-by-Line Service Rows */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Sticky 3D Visual Viewport */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 border border-[#E5E9E2] shadow-xl relative overflow-hidden flex flex-col justify-between min-h-[480px]">
              {/* Header Info */}
              <div className="flex items-center justify-between z-10">
                <span className="text-xs font-mono font-bold tracking-widest text-[#20A85A] uppercase flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#8FE63B]" />
                  3D VISUAL // {activeService.id}
                </span>
                <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-[#F8FAF7] border border-[#E5E9E2] text-[#111817] font-semibold">
                  {activeService.badge}
                </span>
              </div>

              {/* Central 3D Canvas */}
              <div className="h-[280px] w-full my-4 relative z-10">
                <CanvasContainer camera={{ position: [0, 0, 4.3], fov: 40 }}>
                  <Service3DVisual type={activeService.type} isHovered={true} />
                </CanvasContainer>
              </div>

              {/* Footer Active Summary */}
              <div className="z-10 pt-4 border-t border-[#E5E9E2] flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-bold text-[#111817]">{activeService.title}</h4>
                  <p className="text-xs text-[#52605D] font-mono mt-0.5">{activeService.metrics}</p>
                </div>
                <MagneticButton href="#contact" variant="primary" className="!px-4 !py-2 !text-xs">
                  Inquire
                </MagneticButton>
              </div>

              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#8FE63B]/5 via-transparent to-[#20A85A]/10 pointer-events-none" />
            </div>
          </div>

          {/* Right Column: Line-by-Line Service Rows Stack */}
          <div className="lg:col-span-7 flex flex-col divide-y divide-[#E5E9E2]">
            {servicesData.map((service) => {
              const isActive = activeId === service.id;
              const isExpanded = expandedId === service.id;

              return (
                <div
                  key={service.id}
                  onMouseEnter={() => handleRowHover(service.id)}
                  onClick={() => handleRowClick(service.id)}
                  data-cursor="EXPLORE"
                  className={`group transition-all duration-300 py-6 px-4 sm:px-6 rounded-2xl cursor-pointer ${
                    isActive ? "bg-white shadow-md border border-[#8FE63B]/50 my-2" : "hover:bg-white/60"
                  }`}
                >
                  {/* Main Service Line Header */}
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4 sm:gap-6 flex-1 min-w-0">
                      {/* Monospace Index Number */}
                      <span
                        className={`text-xl sm:text-2xl font-mono font-bold transition-colors ${
                          isActive ? "text-[#20A85A]" : "text-[#52605D]/50 group-hover:text-[#111817]"
                        }`}
                      >
                        {service.id}
                      </span>

                      {/* Title */}
                      <h3
                        className={`text-xl sm:text-3xl font-extrabold tracking-tight transition-all truncate ${
                          isActive ? "text-[#111817] translate-x-1" : "text-[#111817]/80 group-hover:text-[#111817]"
                        }`}
                      >
                        {service.title}
                      </h3>
                    </div>

                    {/* Right Tech Pills & Arrow Action */}
                    <div className="flex items-center gap-3 shrink-0">
                      {/* Key Metric Pill (Hidden on mobile) */}
                      <span className="hidden sm:inline-flex text-[11px] font-mono px-3 py-1 rounded-full bg-[#F8FAF7] border border-[#E5E9E2] text-[#52605D]">
                        {service.badge}
                      </span>

                      {/* Expand / Arrow Icon */}
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                          isActive
                            ? "bg-[#8FE63B] text-[#111817] rotate-45 scale-110 shadow-sm"
                            : "bg-white border border-[#E5E9E2] text-[#111817] group-hover:border-[#20A85A]"
                        }`}
                      >
                        <ArrowUpRight className="w-5 h-5" />
                      </div>
                    </div>
                  </div>

                  {/* Expanded Line Details Panel */}
                  <div
                    className={`grid transition-all duration-500 ease-in-out ${
                      isExpanded ? "grid-rows-[1fr] opacity-100 mt-6 pt-6 border-t border-[#E5E9E2]" : "grid-rows-[0fr] opacity-0 overflow-hidden"
                    }`}
                  >
                    <div className="overflow-hidden flex flex-col gap-4">
                      {/* Description */}
                      <p className="text-base text-[#52605D] leading-relaxed max-w-2xl font-normal">
                        {service.subtitle}
                      </p>

                      {/* Metric Bullet & Tech Badges */}
                      <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                        <div className="flex items-center gap-2 text-xs font-mono text-[#20A85A] font-bold">
                          <CheckCircle2 className="w-4 h-4 text-[#8FE63B]" />
                          {service.metrics}
                        </div>

                        {/* Tech Stack Pills */}
                        <div className="flex flex-wrap gap-2">
                          {service.tech.map((t) => (
                            <span
                              key={t}
                              className="text-xs font-mono px-2.5 py-1 rounded-md bg-[#F8FAF7] border border-[#E5E9E2] text-[#111817] font-medium"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
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

