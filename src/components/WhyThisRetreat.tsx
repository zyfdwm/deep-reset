import Image from "next/image";
import FadeIn from "./FadeIn";

export default function WhyThisRetreat() {
  return (
    <section id="retreat" className="py-24 px-6 bg-tertiary">
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        <FadeIn className="w-full lg:w-1/2 relative h-[400px] lg:h-[600px] rounded-[32px] overflow-hidden shadow-xl">
          <Image 
            src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=85&w=1000" 
            alt="Woman meditating peacefully in Bali nature"
            fill
            className="object-cover"
            unoptimized
          />
        </FadeIn>

        <div className="w-full lg:w-1/2">
          <FadeIn delay={100}>
            <h2 className="text-5xl md:text-7xl font-serif mb-12">
              Why <i className="font-serif text-primary">this</i> retreat?
            </h2>
          </FadeIn>

          <FadeIn delay={200} className="space-y-6 text-lg leading-relaxed max-w-xl opacity-90">
            <p>
              After many years working with clients and walking my own healing journey, I've come to see how important it is to truly <strong className="font-bold">understand every part of ourselves.</strong>
            </p>
            <p>
              Not just our mind, but also our <strong className="font-bold">body and our soul.</strong> This retreat is an invitation to pause, reconnect, and begin listening to the wisdom that already lives within you.
            </p>
          </FadeIn>

          <FadeIn delay={300} className="mt-16 pt-8 border-t border-secondary/50 max-w-xl">
            <div className="font-serif text-3xl mb-2 text-primary">&mdash; Charia</div>
            <div className="text-[10px] font-bold tracking-widest uppercase text-neutral/60">Founder &bull; Guide</div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
