"use client";

import React from "react";
import GrowooraLogo from "./GrowooraLogo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#111817] text-white py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/10">
          {/* Left Brand Identity */}
          <div className="md:col-span-5 flex flex-col items-start gap-4">
            <GrowooraLogo className="w-10 h-10" textClassName="text-2xl font-extrabold text-white" />
            <p className="text-[#8FE63B] font-mono text-sm tracking-wide font-bold">
              Build. Market. Grow.
            </p>
            <p className="text-xs text-zinc-400 max-w-sm leading-relaxed">
              Growoora is a modern creative technology studio founded by developers and growth engineers dedicated to building high-performance 3D web products.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#8FE63B]">
              NAVIGATION
            </span>
            <a href="#services" className="text-sm text-zinc-300 hover:text-[#8FE63B] transition-colors">
              Services
            </a>
            <a href="#engine" className="text-sm text-zinc-300 hover:text-[#8FE63B] transition-colors">
              Growth Engine
            </a>
            <a href="#work" className="text-sm text-zinc-300 hover:text-[#8FE63B] transition-colors">
              Work / Case Studies
            </a>
            <a href="#process" className="text-sm text-zinc-300 hover:text-[#8FE63B] transition-colors">
              Process
            </a>
            <a href="#about" className="text-sm text-zinc-300 hover:text-[#8FE63B] transition-colors">
              About Us
            </a>
          </div>

          {/* Socials & Contact */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#8FE63B]">
              CONNECT
            </span>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-300 hover:text-[#8FE63B] transition-colors">
              Instagram →
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-300 hover:text-[#8FE63B] transition-colors">
              LinkedIn →
            </a>
            <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-300 hover:text-[#8FE63B] transition-colors">
              Behance →
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-300 hover:text-[#8FE63B] transition-colors">
              GitHub →
            </a>
            <div className="pt-2">
              <a href="mailto:hello@growoora.com" className="text-sm font-bold text-[#8FE63B] hover:underline">
                hello@growoora.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 font-mono gap-4">
          <p>© {currentYear} GROWOORA STUDIO. ALL RIGHTS RESERVED.</p>
          <p className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#8FE63B]" />
            HIGH PERFORMANCE 3D AGENCY
          </p>
        </div>
      </div>
    </footer>
  );
}
