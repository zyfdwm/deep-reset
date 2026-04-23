"use client";

import { useState, useEffect } from "react";
import FadeIn from "./FadeIn";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const navLinks = [
    { label: "The Retreat", href: "#retreat" },
    { label: "Experience", href: "#experience" },
    { label: "Included", href: "#included" },
    { label: "Dates & Pricing", href: "#booking" },
  ];

  return (
    <>
      <nav
        className="w-full fixed top-0 left-0 z-50 transition-all duration-500"
        style={{
          background: scrolled
            ? "rgba(10, 10, 8, 0.75)"
            : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "none",
        }}
      >
        <FadeIn className="max-w-7xl mx-auto w-full flex items-center justify-between px-6 py-5">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 font-serif text-xl text-white no-underline"
          >
            <span className="text-xl">🌿</span>
            <i>Chariea Aviya Wellness</i>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-wide text-white/80">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href="#booking"
            className="hidden lg:inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-white/40 text-white text-sm font-semibold tracking-wide hover:bg-white hover:text-neutral transition-all duration-300"
          >
            Reserve your spot &rarr;
          </a>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 focus:outline-none"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span
              className="block w-6 h-0.5 bg-white transition-all duration-300 origin-center"
              style={menuOpen ? { transform: "translateY(8px) rotate(45deg)" } : {}}
            />
            <span
              className="block w-6 h-0.5 bg-white transition-all duration-300"
              style={menuOpen ? { opacity: 0 } : {}}
            />
            <span
              className="block w-6 h-0.5 bg-white transition-all duration-300 origin-center"
              style={menuOpen ? { transform: "translateY(-8px) rotate(-45deg)" } : {}}
            />
          </button>
        </FadeIn>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className="fixed inset-0 z-40 flex flex-col justify-center items-center lg:hidden transition-all duration-500"
        style={{
          background: "rgba(10, 10, 8, 0.97)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
          transform: menuOpen ? "translateY(0)" : "translateY(-8px)",
        }}
      >
        <nav className="flex flex-col items-center gap-10">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-3xl font-serif text-white/80 hover:text-white transition-colors duration-200"
              style={{
                transitionDelay: menuOpen ? `${i * 60}ms` : "0ms",
                transform: menuOpen ? "translateY(0)" : "translateY(16px)",
                opacity: menuOpen ? 1 : 0,
                transition: "opacity 0.4s ease, transform 0.4s ease, color 0.2s ease",
              }}
            >
              <i>{link.label}</i>
            </a>
          ))}

          <a
            href="#booking"
            onClick={() => setMenuOpen(false)}
            className="mt-4 inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white text-neutral font-bold text-sm tracking-wide hover:bg-white/90 transition-all"
            style={{
              transitionDelay: menuOpen ? "240ms" : "0ms",
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 0.4s ease 0.24s, transform 0.4s ease 0.24s",
            }}
          >
            Reserve your spot &rarr;
          </a>
        </nav>
      </div>
    </>
  );
}
