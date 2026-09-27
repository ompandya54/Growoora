"use client";

import React, { useRef, useState } from "react";

export default function MagneticButton({ 
  children, 
  href = "#", 
  onClick, 
  variant = "primary", 
  className = "",
  dataCursor,
  showArrow = true
}) {
  const btnRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!btnRef.current) return;
    const { left, top, width, height } = btnRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = (e.clientX - centerX) * 0.35;
    const distanceY = (e.clientY - centerY) * 0.35;
    setPosition({ x: distanceX, y: distanceY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const isPrimary = variant === "primary";
  const baseStyles = isPrimary
    ? "bg-[#111817] text-white hover:bg-[#8FE63B] hover:text-[#111817] border border-[#111817]"
    : "bg-white text-[#111817] border border-[#E5E9E2] hover:border-[#8FE63B] hover:bg-[#8FE63B]/10";

  const content = (
    <span
      ref={btnRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      data-cursor={dataCursor}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
      }}
      className={`group relative inline-flex items-center justify-center gap-3 rounded-full px-7 py-3.5 text-sm font-bold tracking-wide transition-all duration-300 ease-out shadow-sm hover:shadow-lg active:scale-95 ${baseStyles} ${className}`}
    >
      <span className="relative z-10 transition-colors duration-300">{children}</span>
      {showArrow && (
        <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1.5">
          →
        </span>
      )}
    </span>
  );

  if (href && href.startsWith("#")) {
    return (
      <a href={href} className="inline-block">
        {content}
      </a>
    );
  }

  return content;
}
