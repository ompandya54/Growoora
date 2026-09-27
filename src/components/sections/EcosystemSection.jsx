"use client";

import React, { useState } from "react";
import CanvasContainer from "../3d/CanvasContainer";
import Ecosystem3D from "../3d/Ecosystem3D";

const nodeDetails = {
  web: "High-performance web apps built with Next.js & Three.js",
  app: "Fluid iOS & Android applications tailored for speed",
  seo: "Technical search optimization & rank dominance",
  marketing: "High-ROAS performance campaigns & funnels",
  branding: "Iconic visual systems & 3D motion identity",
  design: "User-centric wireframes & micro-interactions",
};

export default function EcosystemSection() {
  const [activeId, setActiveId] = useState(null);

  return (
    <section className="py-28 bg-[#F8FAF7] relative overflow-hidden border-t border-[#E5E9E2]/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E5E9E2] text-xs font-mono font-bold text-[#20A85A] uppercase tracking-widest mb-4">
            CONNECTED NETWORK
          </div>
          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#111817] leading-tight">
            Services <span className="text-gradient-green">Ecosystem.</span>
          </h2>
          <p className="text-base text-[#52605D] mt-3">
            Hover over any service node below to reveal its digital connection to the core Growoora engine.
          </p>
        </div>

        {/* 3D Network Canvas */}
        <div className="h-[420px] sm:h-[500px] w-full relative">
          <CanvasContainer camera={{ position: [0, 0, 5.8], fov: 42 }}>
            <Ecosystem3D activeId={activeId} onHoverNode={setActiveId} />
          </CanvasContainer>
        </div>

        {/* Active Node Detail Bar */}
        <div className="max-w-lg mx-auto mt-6 p-4 rounded-2xl bg-white border border-[#E5E9E2] shadow-xs text-center transition-all">
          <p className="text-xs font-mono uppercase tracking-widest text-[#20A85A] font-bold">
            {activeId ? activeId.toUpperCase() : "SELECT A SERVICE NODE"}
          </p>
          <p className="text-sm text-[#111817] font-medium mt-1">
            {activeId ? nodeDetails[activeId] : "Hover any node in the 3D network above to inspect capabilities."}
          </p>
        </div>
      </div>
    </section>
  );
}
