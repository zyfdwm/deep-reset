import BookingFlow from "../components/BookingFlow";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhyThisRetreat from "../components/WhyThisRetreat";
import Framework from "../components/Framework";
import EverythingYouNeed from "../components/EverythingYouNeed";
import Itinerary from "../components/Itinerary";
import Gallery from "../components/Gallery";
import Outcomes from "../components/Outcomes";
import Footer from "../components/Footer";
import FadeIn from "../components/FadeIn";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-hidden text-neutral bg-background">
      <Navbar />
      <Hero />
      <WhyThisRetreat />
      <Framework />
      <EverythingYouNeed />
      <Itinerary />
      <Gallery />
      <Outcomes />
      
      <section id="booking" className="py-24 px-6 bg-background">
        <div className="max-w-5xl mx-auto w-full text-center">
          <FadeIn className="mb-16">
            <div className="inline-block px-6 border border-brand-brown/40 rounded-full py-1.5 text-[10px] font-bold tracking-widest uppercase mb-8 text-brand-brown">
              Limited to 10 participants
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 text-neutral">
              Ready to rest, heal, and <i className="font-serif text-brand-brown">reconnect?</i>
            </h2>
            <p className="max-w-2xl mx-auto text-neutral/60 text-base leading-relaxed font-light">
              This retreat is designed as an intimate and supportive experience. <br className="hidden md:block" />
              It would be an honor to share this journey with you.
            </p>
          </FadeIn>

          <FadeIn delay={200} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 border-y border-brand-brown/10 py-12">
            <div>
              <div className="font-serif text-2xl mb-1 text-neutral">5 June 2026</div>
              <div className="text-[10px] font-bold tracking-widest uppercase text-brand-brown/50">Date</div>
            </div>
            <div>
              <div className="font-serif text-2xl mb-1 text-neutral">Bali, Indonesia</div>
              <div className="text-[10px] font-bold tracking-widest uppercase text-brand-brown/50">Location</div>
            </div>
            <div>
              <div className="font-serif text-2xl mb-1 text-neutral">Max 10 people</div>
              <div className="text-[10px] font-bold tracking-widest uppercase text-brand-brown/50">Group Size</div>
            </div>
          </FadeIn>

          <FadeIn delay={300} className="text-left">
            <h3 className="text-3xl font-serif mb-8 text-neutral">Reserve your spot.</h3>
            <BookingFlow />
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  );
}
