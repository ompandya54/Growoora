"use client";

import React from "react";
import MagneticButton from "../common/MagneticButton";
import CanvasContainer from "../3d/CanvasContainer";
import HeroLogoScene from "../3d/HeroLogoScene";

export default function FinalCTASection() {
  return (
    <section id="contact" className="py-36 bg-[#F8FAF7] relative overflow-hidden border-t border-[#E5E9E2]">
      {/* Background Subtle Giant 3D G Logo Canvas */}
      <div className="absolute inset-0 pointer-events-none opacity-25 flex items-center justify-center">
        <CanvasContainer camera={{ position: [0, 0, 4.5], fov: 50 }}>
          <HeroLogoScene pointerPos={{ x: 0, y: 0 }} />
        </CanvasContainer>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E5E9E2] text-xs font-mono font-bold text-[#20A85A] uppercase tracking-widest mb-6">
          START A PROJECT
        </div>

        <h2 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-[#111817] leading-none mb-6">
          Ready to <span className="text-gradient-green">grow?</span>
        </h2>

        <p className="max-w-xl mx-auto text-lg sm:text-xl text-[#52605D] leading-relaxed mb-10 font-normal">
          Tell us what you&apos;re building. We&apos;ll figure out how to move it forward.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <MagneticButton
            href="mailto:hello@growoora.com"
            variant="primary"
            dataCursor="TALK NOW"
            className="text-lg px-9 py-4"
          >
            Start a Conversation
          </MagneticButton>
        </div>

        {/* Email Badge */}
        <p className="text-xs font-mono text-[#52605D] mt-8">
          Or send us a direct message at <a href="mailto:hello@growoora.com" className="text-[#20A85A] font-bold underline hover:text-[#111817]">hello@growoora.com</a>
        </p>
      </div>
    </section>
  );
}
