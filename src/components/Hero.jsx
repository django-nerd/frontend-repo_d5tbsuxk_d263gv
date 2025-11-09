import React from 'react';
import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative w-full min-h-[70vh] sm:min-h-[80vh] lg:min-h-[90vh] overflow-hidden">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 sm:pt-28 sm:pb-24 flex flex-col items-start">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/70 ring-1 ring-black/10 px-3 py-1 text-[11px] sm:text-xs backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          Live • Digital • Minimalist
        </div>
        <h2 className="mt-4 text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 max-w-3xl">
          Explore the Future of Events
        </h2>
        <p className="mt-4 text-base sm:text-lg text-gray-700 max-w-2xl">
          Web interaktif menampilkan video, logo, judul, agenda, dan slide foto dengan nuansa futuristik.
        </p>
        <a href="#video" className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gray-900 text-white text-sm sm:text-base hover:bg-gray-800 transition-colors">
          Lihat Video
        </a>
      </div>
    </section>
  );
}

export default Hero;
