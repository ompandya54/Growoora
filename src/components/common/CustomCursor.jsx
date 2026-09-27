"use client";

import React, { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [hoverText, setHoverText] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Disable on touch / coarse pointer devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [isVisible]);

  // Smooth lag effect for the outer ring
  useEffect(() => {
    let animationFrameId;
    const lerp = (start, end, factor) => start + (end - start) * factor;

    const followMouse = () => {
      setTrailingPos((prev) => ({
        x: lerp(prev.x, position.x, 0.18),
        y: lerp(prev.y, position.y, 0.18),
      }));
      animationFrameId = requestAnimationFrame(followMouse);
    };

    animationFrameId = requestAnimationFrame(followMouse);
    return () => cancelAnimationFrame(animationFrameId);
  }, [position]);

  // Handle global hover targets
  useEffect(() => {
    const handleMouseOver = (e) => {
      const target = e.target.closest("[data-cursor]");
      if (target) {
        setIsHovered(true);
        setHoverText(target.getAttribute("data-cursor") || "");
      } else if (e.target.closest("a, button, [role='button']")) {
        setIsHovered(true);
        setHoverText("");
      } else {
        setIsHovered(false);
        setHoverText("");
      }
    };

    document.addEventListener("mouseover", handleMouseOver);
    return () => document.removeEventListener("mouseover", handleMouseOver);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="custom-cursor pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Inner precise dot */}
      <div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-[#111817] rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-75"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        }}
      />

      {/* Trailing Green Ring / Badge */}
      <div
        className={`fixed top-0 left-0 flex items-center justify-center rounded-full border-2 border-[#8FE63B] transition-all duration-300 ease-out transform -translate-x-1/2 -translate-y-1/2 ${
          isHovered
            ? hoverText
              ? "w-28 h-28 bg-[#111817]/90 text-[#8FE63B] backdrop-blur-sm border-[#8FE63B] scale-100 shadow-[0_0_25px_rgba(143,230,59,0.35)]"
              : "w-14 h-14 bg-[#8FE63B]/20 border-[#8FE63B] scale-110"
            : "w-9 h-9 border-[#8FE63B]/60 scale-100"
        }`}
        style={{
          transform: `translate3d(${trailingPos.x}px, ${trailingPos.y}px, 0) translate(-50%, -50%)`,
        }}
      >
        {hoverText && (
          <span className="text-[10px] font-bold tracking-wider uppercase text-center leading-tight px-2 animate-fadeIn">
            {hoverText}
          </span>
        )}
      </div>
    </div>
  );
}
