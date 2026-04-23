import BookingFlow from "../components/BookingFlow";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhyThisRetreat from "../components/WhyThisRetreat";
import Framework from "../components/Framework";
import EverythingYouNeed from "../components/EverythingYouNeed";
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
      
      <section id="booking" className="py-24 px-6">
        <div className="max-w-5xl mx-auto w-full">
          <FadeIn className="mb-12 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-serif">Reserve your spot.</h2>
          </FadeIn>
          <FadeIn delay={200}>
            <BookingFlow />
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  );
}
