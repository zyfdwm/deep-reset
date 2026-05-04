"use client";

import FadeIn from "./FadeIn";

const itinerary = [
  {
    day: "Day 01",
    title: "The Arrival",
    subtitle: "Grounding & Sanctuary",
    body: "Your journey begins with a gentle transition into the sanctuary. We focus on grounding your energy and releasing the immediate stress of travel.",
    activities: ["Transfer & Welcome", "Ayurvedic Massage", "Communal Dinner"]
  },
  {
    day: "Day 02",
    title: "The Release",
    subtitle: "Emotional Healing",
    body: "A day dedicated to the deeper layers of the self. Through sound and ancestral work, we begin to unlock and release stored emotional patterns.",
    activities: ["Morning Yoga", "Family Constellation", "Sunset Sound Bath"]
  },
  {
    day: "Day 03",
    title: "The Nourishment",
    subtitle: "Connection & Skill",
    body: "Focusing on the physical and subtle bodies. We learn the art of Ayurvedic cooking while exploring the hidden parts of our psyche.",
    activities: ["Ayurvedic Consulting", "Cooking Class", "Shadow Work"]
  },
  {
    day: "Day 04",
    title: "The Return",
    subtitle: "Integration & Seal",
    body: "The final morning is about sealing the practice and preparing for your return, carrying the peace of the sanctuary back into your life.",
    activities: ["Sunrise Meditation", "Closing Circle", "Blessing Ritual"]
  }
];

export default function Itinerary() {
  return (
    <section id="itinerary" className="bg-background">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 py-28 lg:pt-32 lg:pb-24">
        <FadeIn>
          <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-brand-brown mb-4">
            The Journey
          </p>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-neutral leading-tight max-w-3xl">
            Four days of <br />
            <i className="text-brand-brown">deep restoration.</i>
          </h2>
        </FadeIn>
      </div>

      {/* Itinerary Rows - Text Only */}
      <div className="border-t border-brand-brown/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-l border-brand-brown/10">
            {itinerary.map((item, i) => (
              <FadeIn
                key={i}
                delay={i * 100}
                className={`border-brand-brown/10 group
                  border-b border-r
                  md:even:border-r-0
                  lg:even:border-r lg:last:border-r-0 lg:border-b-0
                  ${i === 3 ? "border-r-0" : ""}
                  ${i >= 2 ? "md:border-b-0 lg:border-b-0" : ""}
                  ${i === 3 ? "border-b-0" : ""}
                `}
              >
                <div className="p-8 lg:p-12 h-full flex flex-col hover:bg-tertiary/20 transition-colors duration-500">
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-serif text-sm text-brand-brown italic opacity-60 group-hover:opacity-100 transition-opacity">
                      {item.day}
                    </span>
                    <span className="text-[9px] font-bold tracking-widest uppercase text-brand-brown/40 group-hover:text-brand-brown/80 transition-colors">
                      {item.subtitle}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-serif text-neutral mb-6 leading-tight">
                    {item.title}
                  </h3>
                  
                  <p className="text-neutral/65 leading-relaxed mb-10 text-sm italic flex-1">
                    {item.body}
                  </p>
                  
                  <div className="pt-8 border-t border-brand-brown/10">
                    <ul className="space-y-4">
                      {item.activities.map((act, j) => (
                        <li key={j} className="flex items-center gap-3">
                          <span className="w-1 h-px bg-brand-brown/40" />
                          <span className="text-neutral/80 text-[13px] tracking-wide">{act}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
