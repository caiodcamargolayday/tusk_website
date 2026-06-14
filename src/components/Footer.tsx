"use client";

import { useBooking } from "@/context/BookingContext";
import Image from "next/image";

export default function Footer() {
  const { openBooking } = useBooking();

  return (
    <footer className="bg-[var(--color-tusk-dark)] text-[var(--color-tusk-beige)] py-10 md:py-12 px-6 border-t border-[var(--color-tusk-beige)]/20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 md:gap-8">
        
        {/* Left Column: Brand & Location */}
        <div className="flex flex-col gap-6 max-w-sm">
          <div className="relative w-32 h-10">
            <Image 
              src="/tusk light logo.png" 
              alt="TUSK" 
              fill
              className="object-contain object-left"
            />
          </div>
          <p className="font-sans font-light opacity-80 leading-relaxed text-sm">
            A refined South African dining experience built around the spirit of togetherness in Uluwatu, Bali.
            <br /><br />
            Jalan Pantai Suluban<br />
            Uluwatu, Bali 80361
          </p>
        </div>

        {/* Middle Column: Links */}
        <div className="flex flex-col gap-4">
          <h3 className="font-sans font-medium uppercase tracking-widest text-sm opacity-60">Quick Links</h3>
          <ul className="flex flex-col gap-2">
            <li><a href="/" className="font-light hover:text-white opacity-80 hover:opacity-100 transition-colors">Home</a></li>
            <li><a href="/about" className="font-light hover:text-white opacity-80 hover:opacity-100 transition-colors">About</a></li>
            <li><a href="/#gallery" className="font-light hover:text-white opacity-80 hover:opacity-100 transition-colors">Gallery</a></li>
            <li><a href="/#june-specials" className="font-light hover:text-white opacity-80 hover:opacity-100 transition-colors">Specials</a></li>
            <li><a href="/#menus" className="font-light hover:text-white opacity-80 hover:opacity-100 transition-colors">Menus</a></li>
            <li><a href="/#events" className="font-light hover:text-white opacity-80 hover:opacity-100 transition-colors">Events</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); openBooking(); }} className="font-light hover:text-white opacity-80 hover:opacity-100 transition-colors">Reserve</a></li>
          </ul>
        </div>

        {/* Right Column: Contact & Hours */}
        <div className="flex flex-col gap-4">
          <h3 className="font-sans font-medium uppercase tracking-widest text-sm opacity-60">Hours & Contact</h3>
          <div className="font-sans font-light opacity-80 text-sm space-y-1">
            <p>Lunch: 12PM – 4PM</p>
            <p>Dinner: 5PM – 10PM</p>
            <p className="italic opacity-80 pt-1">Open Daily</p>
          </div>
          <p className="font-light opacity-80 mt-4 text-sm">WhatsApp: +62 812-2524-0872</p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-10 md:mt-12 pt-6 border-t border-[var(--color-tusk-beige)]/10 flex items-center justify-center">
        <p className="font-sans text-xs opacity-50">
          © {new Date().getFullYear()} TUSK Bali. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
