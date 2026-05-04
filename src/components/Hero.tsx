"use client";

import Image from "next/image";
import FadeIn from "./FadeIn";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center lg:items-end overflow-hidden">
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=85&w=1920"
        alt="Bali rice terraces at golden hour"
        fill
        priority
        className="object-cover object-center"
        unoptimized
      />

      {/* Layered Overlay — dark at bottom, subtle at top */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(to top, rgba(10,10,8,0.88) 0%, rgba(10,10,8,0.45) 45%, rgba(10,10,8,0.15) 75%, transparent 100%)",
        }}
      />

      {/* Subtle top vignette for navbar readability */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(10,10,8,0.5) 0%, transparent 18%)",
        }}
      />

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 pt-32 pb-16 lg:pt-0 lg:pb-28 text-center lg:text-left">
        <div className="max-w-3xl mx-auto lg:mx-0">
          <FadeIn delay={100}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 mb-6 md:mb-10">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-brown animate-pulse" />
              <span className="text-[9px] md:text-[10px] font-bold tracking-[0.2em] uppercase text-white">
                The Invitation &bull; 5 June 2026
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif mb-6 md:mb-8 leading-tight tracking-tighter text-white">
              4-Day <br className="hidden md:block" />
              <i className="font-serif text-white/90">Deep Reset.</i>
            </h1>
          </FadeIn>

          <FadeIn delay={300}>
            <p className="text-base md:text-xl leading-relaxed mb-8 md:mb-10 max-w-xl mx-auto lg:mx-0 text-white/80 font-light">
              A short yet complete healing retreat designed to help you{" "}
              <strong className="text-white font-semibold">
                rest deeply, release physical and emotional stress, and restore
                balance
              </strong>{" "}
              in your body, mind, and soul.
            </p>
          </FadeIn>

          <FadeIn delay={400} className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 md:gap-4 mb-12 md:mb-16">
            <a
              href="#booking"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-neutral font-bold rounded-full hover:bg-white/90 transition-all text-sm tracking-wide shadow-lg"
            >
              Reserve your spot &rarr;
            </a>
            <a
              href="#retreat"
              className="inline-flex items-center justify-center px-8 py-4 border border-white/40 text-white font-medium rounded-full hover:bg-white/10 backdrop-blur-sm transition-all text-sm tracking-wide"
            >
              Read the journey
            </a>
          </FadeIn>

          <FadeIn
            delay={500}
            className="grid grid-cols-3 gap-4 md:gap-6 pt-8 border-t border-white/20"
          >
            <div>
              <div className="text-[9px] md:text-[10px] font-bold tracking-widest uppercase text-white/50 mb-2">
                Duration
              </div>
              <div className="text-sm md:text-base font-serif font-medium text-white">
                4 days &bull; 3 nights
              </div>
            </div>
            <div>
              <div className="text-[9px] md:text-[10px] font-bold tracking-widest uppercase text-white/50 mb-2">
                Location
              </div>
              <div className="text-sm md:text-base font-serif font-medium text-white">
                Bali, Indonesia
              </div>
            </div>
            <div>
              <div className="text-[9px] md:text-[10px] font-bold tracking-widest uppercase text-white/50 mb-2">
                Group Size
              </div>
              <div className="text-sm md:text-base font-serif font-medium text-white">
                10 guests
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Scroll hint */}
      <FadeIn
        delay={800}
        className="absolute bottom-8 right-8 z-20 hidden md:flex flex-col items-center gap-2 text-neutral/60"
      >
        <span className="text-[10px] tracking-widest uppercase rotate-90 origin-center">
          Scroll
        </span>
        <div className="w-px h-10 bg-brand-brown/50" />
      </FadeIn>
    </section>
  );
}
