import type { Metadata } from "next";
import { Manrope, Noto_Serif } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // ─── Basic ───────────────────────────────────────────────────────────────
  metadataBase: new URL("https://deepreset.pages.dev"),
  title: {
    default: "4 Day Deep Reset | Chariea Aviya Wellness",
    template: "%s | Chariea Aviya Wellness",
  },
  description:
    "A 4-day healing retreat in Bali on 5 June 2026. Rest deeply, release emotional stress, and restore balance in body, mind, and soul — through yoga, Ayurvedic massage, sound bath, and family constellation. Limited to 10 guests.",
  keywords: [
    "retreat Bali",
    "healing retreat Bali",
    "wellness retreat Bali 2026",
    "deep reset retreat",
    "Ayurvedic retreat",
    "sound bath Bali",
    "family constellation workshop",
    "yoga retreat Bali",
    "Chariea Aviya Wellness",
    "retreat June 2026",
    "stress release retreat",
    "body mind soul retreat",
  ],

  // ─── Authorship ───────────────────────────────────────────────────────────
  authors: [{ name: "Chariea  Aviya", url: "/" }],
  creator: "Chariea  Aviya",

  // ─── Canonical ────────────────────────────────────────────────────────────
  alternates: {
    canonical: "https://deepreset.pages.dev",
  },

  // ─── Open Graph (Facebook, WhatsApp, LinkedIn) ────────────────────────────
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://deepreset.pages.dev",
    siteName: "Chariea Aviya Wellness",
    title: "Deep Reset Retreat Bali — 5 June 2026",
    description:
      "A short yet complete 4-day healing retreat in Bali. Restore balance in your body, mind, and soul. Limited to 10 guests.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1200",
        width: 1200,
        height: 630,
        alt: "Deep Reset Retreat Bali — Chariea Aviya Wellness",
      },
    ],
  },

  // ─── Twitter / X Card ─────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "Deep Reset Retreat Bali — 5 June 2026",
    description:
      "A 4-day healing retreat in Bali. Rest deeply, release stress, and restore balance. Limited to 10 guests.",
    images: [
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1200",
    ],
  },

  // ─── Robots ───────────────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${notoSerif.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-neutral">
        {children}
      </body>
    </html>
  );
}
