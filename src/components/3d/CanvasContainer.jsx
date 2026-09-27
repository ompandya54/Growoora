"use client";

import React, { useState, useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";

export default function CanvasContainer({ children, className = "w-full h-full", camera = { position: [0, 0, 5], fov: 45 } }) {
  const [mounted, setMounted] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className={`${className} flex items-center justify-center bg-transparent`}>
        <div className="w-8 h-8 rounded-full border-2 border-[#8FE63B] border-t-transparent animate-spin" />
      </div>
    );
  }

  if (hasError) {
    return (
      <div className={`${className} flex items-center justify-center p-4 text-xs font-mono text-[#52605D]`}>
        3D Visual Canvas (Fallback Mode)
      </div>
    );
  }

  return (
    <div className={`${className} relative overflow-hidden`}>
      <Canvas
        camera={camera}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        onError={() => setHasError(true)}
      >
        <Suspense fallback={null}>{children}</Suspense>
      </Canvas>
    </div>
  );
}
