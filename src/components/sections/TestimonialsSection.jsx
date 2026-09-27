"use client";

import React, { useState } from "react";
import { testimonialsData } from "@/data/testimonials";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

export default function TestimonialsSection() {
  const [activeIdx, setActiveIdx] = useState(0);

  const nextTestimonial = () => {
    setActiveIdx((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setActiveIdx((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const current = testimonialsData[activeIdx];

  return (
    <section className="py-28 bg-[#F8FAF7] relative overflow-hidden border-t border-[#E5E9E2]/60">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E5E9E2] text-xs font-mono font-bold text-[#20A85A] uppercase tracking-widest mb-4">
            CLIENT ENDORSEMENTS
          </div>
        </div>

        {/* Minimal Quote Container */}
        <div className="p-10 sm:p-16 rounded-3xl bg-white border border-[#E5E9E2] shadow-xs relative">
          <Quote className="w-12 h-12 text-[#8FE63B]/50 mb-6" />

          <p className="text-2xl sm:text-4xl font-semibold text-[#111817] leading-snug tracking-tight mb-8">
            &ldquo;{current.quote}&rdquo;
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-[#E5E9E2]">
            <div>
              <h4 className="text-lg font-bold text-[#111817]">{current.author}</h4>
              <p className="text-sm text-[#52605D]">{current.role} • <span className="font-semibold text-[#111817]">{current.company}</span></p>
              <span className="text-[10px] font-mono font-bold text-[#20A85A] uppercase tracking-widest mt-1 block">
                {current.tag}
              </span>
            </div>

            {/* Slide Navigation Buttons */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={prevTestimonial}
                className="w-11 h-11 rounded-full border border-[#E5E9E2] bg-[#F8FAF7] flex items-center justify-center text-[#111817] hover:bg-[#8FE63B] transition-colors"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={nextTestimonial}
                className="w-11 h-11 rounded-full border border-[#E5E9E2] bg-[#F8FAF7] flex items-center justify-center text-[#111817] hover:bg-[#8FE63B] transition-colors"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
