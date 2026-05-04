"use client";

import Image from "next/image";

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 font-serif text-xl ${className}`}>
      <Image 
        src="/logo.png" 
        alt="Chariea Aviya Wellness Logo" 
        width={40} 
        height={40} 
        className="object-contain"
      />
      <i className="not-italic font-serif tracking-tight">Chariea Aviya Wellness</i>
    </div>
  );
}
