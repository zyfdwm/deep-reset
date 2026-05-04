"use client";

import Image from "next/image";
import FadeIn from "./FadeIn";

const items = [
  {
    index: "01",
    category: "Deep Emotional Healing",
    title: "Sound Bath & Family Constellation",
    body: "Many of us carry emotional patterns, childhood experiences, and even generational trauma without fully realising it. During the retreat, we will gently explore these deeper layers.",
    points: [
      "Sound Bath Healing Journeys",
      "Family Constellation Workshop",
      "Release of emotional tension & generational patterns",
      "Stress release begins by connecting with your body, allowing the body's primal move, such as shaking, to gently release stored tension in your body and mind.",
    ],
    image: "https://res.cloudinary.com/dgz4njcvb/image/upload/v1777868865/WhatsApp_Image_2026-05-04_at_10.45.11_ab2kdl.jpg?q=85&w=900",
    alt: "Singing bowls sound healing",
    imageRight: false,
  },
  {
    index: "02",
    category: "Ayurvedic Nutrition",
    title: "Nourishing meals that heal",
    body: "Food is an essential part of healing. During the retreat you will enjoy nourishing Ayurvedic meals designed to support balance and vitality — and leave knowing how to continue at home.",
    points: [
      "Your Ayurvedic body type",
      "Foods that best support your body",
      "How to prepare simple Ayurvedic meals at home",
      "Ayurvedic Principle Class",
      "Ayurvedic Cooking Class",
    ],
    image: "https://res.cloudinary.com/dgz4njcvb/image/upload/v1777869414/Well-Being-and-an-Ayurvedic-Diet-2_dtoi1d.jpg?q=85&w=900",
    alt: "Fresh Ayurvedic nourishing meal",
    imageRight: true,
  },
  {
    index: "03",
    category: "Body Work",
    title: "Restore & Realign the Body",
    body: "Your body will be supported through restorative practices that help release tension and restore your natural balance — leaving you feeling lighter, freer and more aligned.",
    points: [
      "Daily Yoga Practice",
      "1-Hour Ayurvedic Massage",
      "Restorative body alignment",
    ],
    image: "https://res.cloudinary.com/dgz4njcvb/image/upload/v1777872339/photo-1544367567-0f2fcb009e0b-scaled_i6yj88.jpg?q=85&w=900",
    alt: "Restorative yoga meditation in nature",
    imageRight: false,
  },
];

const outcomes = [
  "A deeply relaxed, re-energised body",
  "Greater emotional clarity",
  "A deeper understanding of your body's needs",
  "Practical tools to nourish yourself daily",
  "A renewed connection with your body, mind, and soul",
];

export default function EverythingYouNeed() {
  return (
    <section id="included" className="bg-background">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 pt-28 pb-16">
        <FadeIn>
          <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-brand-brown mb-4">
            What&rsquo;s Included
          </p>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-neutral leading-tight max-w-2xl">
            Everything you need{" "}
            <i className="text-brand-brown">to reset.</i>
          </h2>
        </FadeIn>
      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="border-t border-brand-brown/30" />
      </div>

      {/* Editorial rows */}
      {items.map((item, i) => (
        <FadeIn key={item.index} delay={i * 80}>
          <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${item.imageRight ? "" : "lg:[&>*:first-child]:order-last"
                }`}
            >
              {/* Text side */}
              <div className="flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <span className="font-serif text-[11px] tracking-widest text-brand-brown/80">
                    {item.index}
                  </span>
                  <div className="h-px flex-1 bg-brand-brown/40" />
                  <span className="text-[10px] font-bold tracking-widest uppercase text-brand-brown/80">
                    {item.category}
                  </span>
                </div>

                <h3 className="text-3xl md:text-4xl font-serif text-neutral leading-snug mb-5">
                  {item.title}
                </h3>

                <p className="text-neutral/65 leading-relaxed mb-8 text-base">
                  {item.body}
                </p>

                <ul className="space-y-3.5">
                  {item.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      <span className="text-neutral/75 text-sm leading-relaxed">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image side */}
              <div className="relative w-full h-72 lg:h-[440px] rounded-2xl overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover object-center"
                  unoptimized
                />
              </div>
            </div>
          </div>

          {/* Row divider (skip last) */}
          {i < items.length - 1 && (
            <div className="max-w-7xl mx-auto px-6">
              <div className="border-t border-brand-brown/20" />
            </div>
          )}
        </FadeIn>
      ))}

      {/* After the Retreat — full-width warm band */}
      <FadeIn delay={300}>
        <div className="mt-8 bg-tertiary">
          <div className="max-w-7xl mx-auto px-6 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
              {/* Left */}
              <div>
                <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-brand-brown mb-5">
                  After the Retreat
                </p>
                <h3 className="text-4xl md:text-5xl font-serif text-neutral leading-tight mb-3">
                  You will leave with
                </h3>
                <p className="text-neutral/55 text-sm">
                  A complete reset — carried with you long after you return home.
                </p>
              </div>

              {/* Right — outcomes */}
              <ul className="space-y-5">
                {outcomes.map((item, i) => (
                  <li key={i} className="flex items-start gap-5 group">
                    <span className="font-serif text-xs text-brand-brown/70 mt-0.5 w-5 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex-1">
                      <div className="h-px bg-brand-brown/40 mb-4" />
                      <span className="text-neutral text-base">{item}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
