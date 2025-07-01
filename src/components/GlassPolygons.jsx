import React from "react";

export default function GlassPolygons() {
  return (
    <>
      {/* Left Polygon */}
      <div className="overflow-hidden absolute top-1/3 left-0 -translate-y-1/2 w-48 h-48 bg-white/10 backdrop-blur-md border border-white/20 rounded-[20%] rotate-45 shadow-lg opacity-20 pointer-events-none z-0" />

      {/* Right Polygon */}
      <div className="overflow-hidden absolute top-1/2 right-0 translate-y-1/2 w-30 h-30 bg-teal-300/40 backdrop-blur-md border border-white/20 rounded-[20%] -rotate-12 shadow-lg opacity-20 pointer-events-none z-0" />
    </>
  );
}
