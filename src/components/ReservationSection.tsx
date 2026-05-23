"use client";

import { motion } from "framer-motion";
import { useBooking } from "@/context/BookingContext";

export default function ReservationSection() {
  const { openBooking } = useBooking();
  return (
    <section id="reserve" className="bg-[var(--color-tusk-green)] py-20 md:py-32 flex items-center justify-center px-4 sm:px-6 border-t border-[var(--color-tusk-beige)]/10">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-[var(--color-tusk-beige)] mb-6 md:mb-8 leading-tight">
          Reserve Your Table at TUSK
        </h2>
        <p className="font-sans font-light text-base md:text-xl opacity-80 max-w-xl mx-auto text-[var(--color-tusk-beige)] mb-10 md:mb-12 leading-relaxed px-2">
          Whether it's a casual lunch, a weekly event, or a special evening — we'd love to have you.
        </p>
        <motion.a 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#" onClick={(e) => { e.preventDefault(); openBooking(); }}
          className="bg-[var(--color-tusk-red)] text-[var(--color-tusk-white)] px-8 py-4 md:px-10 md:py-5 uppercase text-sm md:text-base tracking-widest font-medium hover:bg-white hover:text-[var(--color-tusk-red)] transition-colors shadow-lg inline-flex items-center justify-center gap-3 w-full sm:w-auto"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 md:w-6 md:h-6">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
          Book a Table
        </motion.a>
      </motion.div>
    </section>
  );
}
