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

      {/* Consistent Inclusions Section */}
      <FadeIn delay={400}>
        <div className="bg-tertiary/50">
          <div className="max-w-7xl mx-auto px-6 py-28 lg:py-32">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
              <div className="lg:w-1/3">
                <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-brand-brown mb-5">
                  The Full Package
                </p>
                <h3 className="text-4xl md:text-5xl font-serif text-neutral leading-tight mb-6">
                  What is <br /> <i className="text-brand-brown">Included.</i>
                </h3>
                <p className="text-neutral/55 text-base">
                  A comprehensive curation of every detail, ensuring you can focus entirely on your path to restoration.
                </p>
              </div>

              <div className="lg:w-2/3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                  {[
                    { title: "Stay", items: ["3 nights private luxury accommodation", "Private airport pickup & return transfers"] },
                    { title: "Nourishment", items: ["Full board Ayurvedic breakfast, lunch, & dinner", "Ayurvedic cooking masterclass & ingredients"] },
                    { title: "Healing", items: ["60-minute Ayurvedic massage session", "Personal group Ayurvedic health consultation", "Sound bath & meditation journeys"] },
                    { title: "Workshops", items: ["Family constellation ancestral healing", "Shadow work & Integration sessions", "Body movement & stress release"] }
                  ].map((group, idx) => (
                    <div key={idx} className="flex flex-col gap-6">
                      <div className="flex items-center gap-4">
                        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-brown/50">
                          {group.title}
                        </span>
                        <div className="h-px flex-1 bg-brand-brown/10" />
                      </div>
                      <ul className="space-y-3">
                        {group.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="w-1 h-1 rounded-full bg-brand-brown/40 mt-2" />
                            <span className="text-neutral/75 text-sm leading-relaxed tracking-wide">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
