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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 bg-[#F8FAF7]/85 backdrop-blur-md border-b border-[#E5E9E2] shadow-xs"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Left: Brand Logo */}
        <a href="#" className="focus:outline-none">
          <GrowooraLogo className="w-8 h-8 sm:w-9 sm:h-9" />
        </a>

        {/* Center: Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 bg-white/60 px-6 py-2 rounded-full border border-[#E5E9E2]/80 backdrop-blur-sm shadow-2xs">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-[#111817]/70 hover:text-[#111817] hover:text-[#20A85A] transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right: Let's Talk CTA */}
        <div className="hidden md:flex items-center gap-4">
          <MagneticButton href="#contact" variant="primary" showArrow={true}>
            Let&apos;s Talk
          </MagneticButton>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-[#111817] hover:bg-[#111817]/5 transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
