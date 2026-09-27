"use client";

import React, { useEffect, useState } from "react";
import GrowooraLogo from "./GrowooraLogo";

export default function LoadingScreen({ onComplete }) {
  const [phase, setPhase] = useState("draw"); // 'draw' | 'reveal' | 'exit'
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Phase 1: Draw leaf & G (500ms)
    const timer1 = setTimeout(() => {
      setPhase("reveal");
    }, 450);

    // Phase 2: Exit wipe transition (1200ms)
    const timer2 = setTimeout(() => {
      setPhase("exit");
    }, 1200);

    // Phase 3: Unmount loading screen (1600ms)
    const timer3 = setTimeout(() => {
      setHidden(true);
      if (onComplete) onComplete();
    }, 1600);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  if (hidden) return null;

  return (
    <div
      className={`fixed inset-0 z-[10000] flex items-center justify-center bg-[#F8FAF7] transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
        phase === "exit" ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="flex flex-col items-center gap-4 text-center px-4">
        {/* Animated Brand Logo Mark */}
        <div className="w-16 h-16 sm:w-20 sm:h-20">
          <GrowooraLogo
            className="w-full h-full"
            showText={false}
            animated={true}
          />
        </div>

        {/* Brand Text Reveal */}
        <div className="overflow-hidden">
          <h1
            className={`text-2xl sm:text-3xl font-extrabold tracking-[0.2em] text-[#111817] transition-all duration-500 ease-out transform ${
              phase !== "draw" ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            GROWOORA
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#8FE63B] ml-1 shadow-[0_0_12px_#8FE63B]" />
          </h1>
        </div>

        {/* Subtitle tag */}
        <p className="text-xs font-mono tracking-widest text-[#52605D] uppercase mt-1 opacity-75">
          DIGITAL GROWTH STUDIO
        </p>

        {/* Progress indicator line */}
        <div className="w-36 h-0.5 bg-[#E5E9E2] rounded-full overflow-hidden mt-4">
          <div
            className="h-full bg-gradient-to-r from-[#8FE63B] to-[#20A85A] transition-all duration-1000 ease-out"
            style={{
              width: phase === "draw" ? "30%" : phase === "reveal" ? "85%" : "100%",
            }}
          />
        </div>
      </div>
    </div>
  );
}
