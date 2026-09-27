"use client";

import React from "react";

export default function GrowooraLogo({ 
  className = "w-9 h-9", 
  showText = true, 
  textClassName = "text-xl font-extrabold tracking-tight text-[#111817]",
  animated = false 
}) {
  return (
    <div className="flex items-center gap-3 group cursor-pointer select-none">
      {/* Icon Mark: Stylized G + Green Leaf */}
      <div className={`relative flex items-center justify-center ${className}`}>
        <svg 
          viewBox="0 0 100 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full transform transition-transform duration-500 group-hover:scale-105"
        >
          {/* Subtle Outer Ring Glow */}
          <circle cx="50" cy="50" r="45" stroke="url(#logoGlowGrad)" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.4" />
          
          {/* Stylized "G" Body */}
          <path
            d="M 68 32 C 60 22 42 20 28 32 C 14 44 14 66 28 78 C 42 90 64 88 74 76 C 80 68 82 58 82 52 H 48"
            stroke="#111817"
            strokeWidth="11"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={animated ? "animate-draw-g" : ""}
          />
          
          {/* Green Leaf Accent on top of G */}
          <path
            d="M 62 20 C 62 20 86 16 88 38 C 88 38 68 44 62 20 Z"
            fill="url(#leafGrad)"
            className={animated ? "animate-draw-leaf" : ""}
          />

          {/* Leaf Vein line */}
          <path
            d="M 64 24 Q 74 30 82 34"
            stroke="#FFFFFF"
            strokeWidth="2.5"
            strokeLinecap="round"
            opacity="0.85"
          />

          {/* Small Sparkling Growth Dot */}
          <circle cx="82" cy="52" r="4.5" fill="#8FE63B" />

          {/* Gradients */}
          <defs>
            <linearGradient id="leafGrad" x1="62" y1="16" x2="88" y2="44" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#8FE63B" />
              <stop offset="100%" stopColor="#20A85A" />
            </linearGradient>
            <linearGradient id="logoGlowGrad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#8FE63B" />
              <stop offset="100%" stopColor="#20A85A" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Brand Name Text */}
      {showText && (
        <span className={`${textClassName} flex items-center`}>
          GROWOORA
          <span className="inline-block w-2 h-2 rounded-full bg-[#8FE63B] ml-1 shadow-[0_0_8px_#8FE63B]" />
        </span>
      )}
    </div>
  );
}
