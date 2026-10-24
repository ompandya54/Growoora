"use client";

import React, { useState, useEffect } from "react";
import GrowooraLogo from "./GrowooraLogo";
import MagneticButton from "./MagneticButton";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Growth Engine", href: "#engine" },
    { name: "Work", href: "#work" },
    { name: "Process", href: "#process" },
    { name: "About", href: "#about" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 sm:py-5 transition-all duration-300 pointer-events-none">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Left: Brand Logo */}
        <a
          href="#"
          className="pointer-events-auto focus:outline-none bg-white/80 backdrop-blur-md px-3.5 py-2 rounded-full border border-white/60 shadow-xs hover:scale-105 transition-all flex items-center gap-2"
        >
          <GrowooraLogo className="w-6 h-6 sm:w-7 sm:h-7" />
          {/* <span className="font-extrabold text-xs tracking-wider text-[#111817] pr-1 uppercase">Growoora</span> */}
        </a>

        {/* Center: Desktop Nav Links (Humaan Floating Capsule) */}
        <nav className="pointer-events-auto hidden md:flex items-center gap-7 bg-white/85 px-6 py-2.5 rounded-full border border-white/60 backdrop-blur-md shadow-sm">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-semibold transition-all duration-200 ${index === 0
                  ? "bg-[#111817] text-white px-3.5 py-1 rounded-full shadow-xs"
                  : "text-[#111817]/75 hover:text-[#111817] hover:text-[#20A85A]"
                }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right: Let's Talk CTA */}
        <div className="pointer-events-auto hidden md:flex items-center gap-4">
          <MagneticButton href="#contact" variant="primary" showArrow={true}>
            Let&apos;s Talk
          </MagneticButton>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="pointer-events-auto md:hidden p-2 rounded-full bg-white/80 backdrop-blur-md border border-white/60 text-[#111817] hover:bg-white transition-colors shadow-xs"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bg-[#F8FAF7]/95 backdrop-blur-xl border-b border-[#E5E9E2] px-6 py-8 shadow-xl animate-fadeIn">
          <div className="flex flex-col gap-6 text-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-bold text-[#111817] hover:text-[#20A85A] transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-[#E5E9E2] flex justify-center">
              <MagneticButton
                href="#contact"
                variant="primary"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full justify-center"
              >
                Let&apos;s Talk
              </MagneticButton>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
