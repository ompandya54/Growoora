"use client";

import React, { useState, useRef, useEffect } from "react";
import { servicesData } from "@/data/services";
import CanvasContainer from "../3d/CanvasContainer";
import Service3DVisual from "../3d/Service3DVisual";
import MagneticButton from "../common/MagneticButton";
import {
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  Sparkles,
  Box,
  Activity,
  Terminal,
  Cpu,
  Copy,
  Check,
} from "lucide-react";
import gsap from "gsap";

export default function ServicesSection() {
  const [activeId, setActiveId] = useState("01");
  const [expandedId, setExpandedId] = useState("01");
  const [viewMode, setViewMode] = useState("3d");
  const [copied, setCopied] = useState(false);
  const activeService = servicesData.find((s) => s.id === activeId) || servicesData[0];

  const handleRowClick = (id) => {
    setActiveId(id);
    setExpandedId(expandedId === id ? null : id);
  };

  const handleRowHover = (id) => {
    setActiveId(id);
  };

  const handleCopy = () => {
    if (activeService?.codeSnippet) {
      navigator.clipboard?.writeText(activeService.codeSnippet);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
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
          {/* Left Column: Interactive Cyber-Glass Studio Stage */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="relative rounded-[28px] sm:rounded-3xl bg-[#0D1412] text-white border border-[#20A85A]/30 shadow-2xl overflow-hidden p-6 sm:p-7 flex flex-col justify-between min-h-[580px]">
              {/* Subtle Ambient Radial Glow */}
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#8FE63B]/10 rounded-full blur-[100px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-[240px] h-[240px] bg-[#20A85A]/10 rounded-full blur-[90px] pointer-events-none" />
              {/* Glowing Top Accent Edge */}
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#8FE63B] to-transparent" />

              {/* Header Status Bar */}
              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-[#8FE63B]">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8FE63B] opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#8FE63B]" />
                    </span>
                    <span>ENGINE LAB // {activeService.id}</span>
                  </div>

                  <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded-full bg-[#8FE63B]/15 text-[#8FE63B] border border-[#8FE63B]/30 font-semibold tracking-wider">
                    {activeService.badge}
                  </span>
                </div>

                {/* View Mode Interactive Tabs */}
                <div className="flex items-center gap-1 p-1 bg-white/5 border border-white/10 rounded-xl mt-4">
                  <button
                    type="button"
                    onClick={() => setViewMode("3d")}
                    className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg text-xs font-mono transition-all ${
                      viewMode === "3d"
                        ? "bg-[#8FE63B] text-[#111817] font-bold shadow-sm"
                        : "text-zinc-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <Box className="w-3.5 h-3.5" />
                    <span>3D STAGE</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setViewMode("metrics")}
                    className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg text-xs font-mono transition-all ${
                      viewMode === "metrics"
                        ? "bg-[#8FE63B] text-[#111817] font-bold shadow-sm"
                        : "text-zinc-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <Activity className="w-3.5 h-3.5" />
                    <span>TELEMETRY</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setViewMode("code")}
                    className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg text-xs font-mono transition-all ${
                      viewMode === "code"
                        ? "bg-[#8FE63B] text-[#111817] font-bold shadow-sm"
                        : "text-zinc-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <Terminal className="w-3.5 h-3.5" />
                    <span>CODE SPEC</span>
                  </button>
                </div>
              </div>

              {/* Central Interactive Showcase Stage */}
              <div className="relative z-10 my-3">
                {viewMode === "3d" && (
                  <div className="h-[270px] w-full relative rounded-2xl bg-[#070B0A] border border-white/10 overflow-hidden shadow-inner group/stage">
                    {/* Subtle Matrix Glow */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(143,230,59,0.12),transparent_70%)] pointer-events-none" />

                    {/* Stage HUD Top Badges */}
                    <div className="absolute top-3 left-3 text-[10px] font-mono uppercase text-[#8FE63B]/90 flex items-center gap-1.5 z-10 pointer-events-none bg-black/40 px-2 py-0.5 rounded backdrop-blur-sm border border-white/5">
                      <Cpu className="w-3 h-3 text-[#8FE63B]" />
                      <span>LIVE 3D SHADER</span>
                    </div>

                    <div className="absolute top-3 right-3 text-[10px] font-mono uppercase text-zinc-400 z-10 pointer-events-none bg-black/40 px-2 py-0.5 rounded backdrop-blur-sm border border-white/5">
                      60 FPS
                    </div>

                    {/* Central 3D Canvas */}
                    <div className="h-full w-full">
                      <CanvasContainer camera={{ position: [0, 0, 4.3], fov: 40 }}>
                        <Service3DVisual type={activeService.type} isHovered={true} />
                      </CanvasContainer>
                    </div>

                    {/* Stage HUD Bottom Drag Hint */}
                    <div className="absolute bottom-2.5 inset-x-0 text-center text-[10px] font-mono text-zinc-400 uppercase tracking-widest pointer-events-none flex items-center justify-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8FE63B] animate-pulse" />
                      <span>ROTATING 3D MODEL</span>
                    </div>
                  </div>
                )}

                {viewMode === "metrics" && (
                  <div className="h-[270px] w-full rounded-2xl bg-[#070B0A] border border-white/10 p-4 flex flex-col justify-between overflow-y-auto animate-fadeIn">
                    <div>
                      <div className="flex items-center justify-between pb-3 border-b border-white/10">
                        <span className="text-[10px] font-mono uppercase text-[#8FE63B] tracking-wider">
                          PERFORMANCE BENCHMARKS
                        </span>
                        <span className="text-[10px] font-mono text-zinc-400">AUDITED 2026</span>
                      </div>

                      {/* 3 Live KPI Cards */}
                      <div className="grid grid-cols-3 gap-2 mt-3">
                        {activeService.liveStats?.map((stat, i) => (
                          <div key={i} className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-center">
                            <span className="text-xl font-mono font-extrabold text-[#8FE63B] block leading-none">
                              {stat.value}
                            </span>
                            <span className="text-[10px] font-bold text-white block mt-1.5 truncate">
                              {stat.label}
                            </span>
                            <span className="text-[9px] font-mono text-zinc-400 block mt-0.5">
                              {stat.sub}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Features Checklist */}
                    <div className="space-y-1.5 pt-3 border-t border-white/10">
                      {activeService.features?.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-zinc-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#8FE63B] shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {viewMode === "code" && (
                  <div className="h-[270px] w-full rounded-2xl bg-[#070B0A] border border-white/10 p-3.5 flex flex-col justify-between font-mono text-xs overflow-hidden animate-fadeIn">
                    <div className="flex items-center justify-between pb-2 border-b border-white/10">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                          <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                          <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                        </div>
                        <span className="text-[11px] text-zinc-400 pl-1">
                          growoora-{activeService.type}.config.ts
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={handleCopy}
                        className="p-1.5 rounded-md hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
                        title="Copy Code"
                      >
                        {copied ? (
                          <Check className="w-3.5 h-3.5 text-[#8FE63B]" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>

                    <pre className="text-zinc-200 overflow-x-auto text-[11px] leading-relaxed p-2.5 bg-black/60 rounded-xl flex-1 border border-white/5 my-2 font-mono scrollbar-thin">
                      <code>{activeService.codeSnippet}</code>
                    </pre>

                    <div className="flex items-center justify-between text-[10px] text-zinc-500 pt-1">
                      <span>TypeScript • Strict Mode</span>
                      <span className="text-[#8FE63B]">Ready for Edge Deploy</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Live Metrics Strip (Always Visible for instant glance) */}
              <div className="relative z-10 grid grid-cols-3 gap-2 py-3 border-t border-white/10">
                {activeService.liveStats?.map((stat, idx) => (
                  <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-2 text-center">
                    <span className="text-sm sm:text-base font-extrabold text-[#8FE63B] font-mono block leading-tight">
                      {stat.value}
                    </span>
                    <span className="text-[10px] text-zinc-300 font-bold block mt-0.5 truncate">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Footer Active Summary & Quick Inquire Action */}
              <div className="relative z-10 pt-3 border-t border-white/10 flex flex-col gap-3">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h4 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                      <span>{activeService.title}</span>
                    </h4>
                    <p className="text-xs text-[#8FE63B] font-mono mt-0.5">
                      {activeService.tagline}
                    </p>
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#8FE63B] text-[#111817] text-xs font-bold hover:bg-white hover:scale-105 transition-all shadow-md active:scale-95 shrink-0"
                  >
                    <span>Inquire</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5">
                  {activeService.tech.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-zinc-300"
                    >
                      {t}
                    </span>
                  ))}
                  {activeService.tech.length > 4 && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#8FE63B]/10 text-[#8FE63B] border border-[#8FE63B]/20">
                      +{activeService.tech.length - 4} more
                    </span>
                  )}
                </div>
              </div>
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

