"use client";

import Image from "next/image";
import FadeIn from "./FadeIn";

const photos = [
  {
    src: "https://res.cloudinary.com/dgz4njcvb/image/upload/v1777908533/1efd99c6-7b12-472a-bcd4-110850550f75_tjj7oh.jpg",
    // alt: "Luxury Ayurvedic accommodation in Bali",
    // title: "Sanctuary",
    // subtitle: "Premium Accommodation"
  },
  {
    src: "https://res.cloudinary.com/dgz4njcvb/image/upload/v1777908751/a21dc4e6-d0b5-4683-9e4a-771d1409ad4b_sb32yo.jpg",
    // alt: "Yoga session in bamboo shala",
    // title: "Movement",
    // subtitle: "Daily Yoga Practice"
  },
  {
    src: "https://res.cloudinary.com/dgz4njcvb/image/upload/v1777908797/2993dbb7-ac0e-4880-b0fc-5d9f598c99e7_ywitg5.jpg",
    // alt: "Ayurvedic cooking class",
    // title: "Nourishment",
    // subtitle: "Ayurvedic Cooking Class"
  },
  {
    src: "https://res.cloudinary.com/dgz4njcvb/image/upload/v1777908860/2bce245d-dddc-48a8-af5c-0374bdfc817b_zv56vv.jpg",
    // alt: "Sound bath session",
    // title: "Stillness",
    // subtitle: "Sound Bath & Meditation"
  }
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-background py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <FadeIn>
            <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-brand-brown mb-4">
              The Experience
            </p>
            <h2 className="text-5xl md:text-6xl font-serif text-neutral leading-tight">
              A glimpse into <br />
              <i className="text-brand-brown">the retreat.</i>
            </h2>
          </FadeIn>
          <FadeIn delay={200} className="max-w-md">
            <p className="text-neutral/60 text-sm leading-relaxed italic">
              &ldquo;Experience a space where every detail is curated for your healing journey — from the serene architecture to the nourishing activities.&rdquo;
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {photos.map((photo, i) => (
            <FadeIn key={i} delay={i * 150}>
              <div className="group relative overflow-hidden rounded-3xl aspect-4/3">
                <Image
                  src={photo.src}
                  alt="Retreat gallery image"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  unoptimized
                />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
