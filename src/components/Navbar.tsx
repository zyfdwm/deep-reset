"use client";

import { useState, useEffect } from "react";
import FadeIn from "./FadeIn";
import Logo from "./Logo";

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
    { label: "Experience", href: "#gallery" },
    { label: "Included", href: "#included" },
    { label: "Dates & Pricing", href: "#booking" },
  ];

  return (
    <>
      <nav
        className="w-full fixed top-0 left-0 z-50 transition-all duration-500"
        style={{
          background: scrolled
            ? "rgba(212, 176, 147, 0.85)"
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
            className={`${scrolled ? "text-neutral" : "text-white"} no-underline hover:opacity-90 transition-colors duration-500`}
          >
            <Logo />
          </a>

          {/* Desktop Nav Links */}
          <div className={`hidden lg:flex items-center gap-8 text-sm font-medium tracking-wide transition-colors duration-500 ${scrolled ? "text-neutral/80" : "text-white/80"}`}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`hover:${scrolled ? "text-neutral" : "text-white"} transition-colors duration-200`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href="#booking"
            className={`hidden lg:inline-flex items-center justify-center px-6 py-2.5 rounded-full border transition-all duration-300 text-sm font-semibold tracking-wide
              ${scrolled 
                ? "border-neutral/40 text-neutral hover:bg-neutral hover:text-white" 
                : "border-white/40 text-white hover:bg-white hover:text-neutral"}
            `}
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
              className={`block w-6 h-0.5 transition-all duration-300 origin-center ${scrolled ? "bg-neutral" : "bg-white"}`}
              style={menuOpen ? { transform: "translateY(8px) rotate(45deg)" } : {}}
            />
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${scrolled ? "bg-neutral" : "bg-white"}`}
              style={menuOpen ? { opacity: 0 } : {}}
            />
            <span
              className={`block w-6 h-0.5 transition-all duration-300 origin-center ${scrolled ? "bg-neutral" : "bg-white"}`}
              style={menuOpen ? { transform: "translateY(-8px) rotate(-45deg)" } : {}}
            />
          </button>
        </FadeIn>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className="fixed inset-0 z-40 flex flex-col justify-center items-center lg:hidden transition-all duration-500"
        style={{
          background: "rgba(212, 176, 147, 0.98)",
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
              className="text-3xl font-serif text-neutral/70 hover:text-neutral transition-colors duration-200"
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
