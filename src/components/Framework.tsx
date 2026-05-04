"use client";

import FadeIn from "./FadeIn";

const pillars = [
  {
    number: "01",
    title: "Body.",
    description:
      "Each of us is born with a unique body, with its own needs, strengths, and sensitivities.",
    tags: ["Daily Yoga", "Ayurvedic Massage", "Nourishing Meals"],
  },
  {
    number: "02",
    title: "Mind.",
    description:
      "Our mind is shaped by culture, environment, and life experiences.",
    tags: ["Breathwork", "Sound Bath", "Stillness"],
  },
  {
    number: "03",
    title: "Soul.",
    description:
      "And our soul continues to guide us as we evolve through the different stages of life.",
    tags: ["Ritual", "Inner Listening", "Family Constellation"],
  },
];

export default function Framework() {
  return (
    <section
      id="experience"
      className="relative py-28 px-6 overflow-hidden"
      style={{
        background: "var(--color-cream)",
      }}
    >
      {/* Subtle dot texture */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Glow accents */}
      <div
        className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(166,142,107,0.12) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(95,111,82,0.10) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full">

        {/* Header */}
        <FadeIn className="mb-20 text-center">
          <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-neutral/40 mb-5">
            The Framework
          </p>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif text-brand-brown leading-none tracking-tight">
            Body.{" "}
            <i className="text-brand-brown/35">Mind.</i>{" "}
            <span className="text-brand-brown/15">Soul.</span>
          </h2>
        </FadeIn>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-brand-brown/40 rounded-2xl overflow-hidden">
          {pillars.map((pillar, i) => (
            <FadeIn
              key={pillar.number}
              delay={i * 120}
              className="group bg-white/50 hover:bg-white transition-colors duration-500 p-10 lg:p-12 flex flex-col gap-6"
            >
              {/* Number */}
              <span className="text-xs font-bold tracking-widest text-neutral/80">
                {pillar.number}
              </span>

              {/* Title */}
              <h3 className="text-4xl lg:text-5xl font-serif text-brand-brown leading-none">
                {pillar.title}
              </h3>

              {/* Divider */}
              <div className="w-8 h-px bg-brand-brown/40 group-hover:w-14 transition-all duration-500" />

              {/* Description */}
              <p className="text-neutral/90 text-lg leading-relaxed">
                {pillar.description}
              </p>

              {/* Activity tags */}
              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/8">
                {pillar.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-semibold tracking-wider uppercase px-3 py-1.5 rounded-full border border-brand-brown/30 text-neutral/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Closing line */}
        <FadeIn delay={400} className="mt-16 text-center">
          <p className="text-neutral/40 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            When we begin to understand and support these three aspects,{" "}
            <em className="text-neutral/60 not-italic font-serif">
              healing can unfold naturally.
            </em>
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
