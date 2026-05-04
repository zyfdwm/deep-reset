"use client";

import FadeIn from "./FadeIn";

const outcomes = [
  "A deeply relaxed, re-energised body",
  "Greater emotional clarity",
  "A deeper understanding of your body's needs",
  "Practical tools to nourish yourself daily",
  "A renewed connection with your body, mind, and soul",
];

export default function Outcomes() {
  return (
    <section className="bg-tertiary">
      <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left */}
          <FadeIn>
            <div>
              <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-brand-brown mb-5">
                After the Retreat
              </p>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif text-neutral leading-tight mb-6">
                You will leave <br /> <i className="text-brand-brown">with</i>
              </h3>
              <p className="text-neutral/55 text-base max-w-sm">
                A complete reset — carried with you long after you return home.
              </p>
            </div>
          </FadeIn>

          {/* Right — outcomes */}
          <FadeIn delay={200}>
            <ul className="space-y-6">
              {outcomes.map((item, i) => (
                <li key={i} className="flex items-start gap-6 group">
                  <span className="font-serif text-sm text-brand-brown/70 mt-1 w-6 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1">
                    <div className="h-px bg-brand-brown/20 mb-4" />
                    <span className="text-neutral text-lg">{item}</span>
                  </div>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
