"use client";

import { motion } from "framer-motion";
import { useBooking } from "@/context/BookingContext";

export default function FloatingWhatsApp() {
  const { openBooking } = useBooking();
  return (
    <motion.a
      href="#" onClick={(e) => { e.preventDefault(); openBooking(); }}
      
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      className="fixed bottom-6 right-6 z-50 bg-[var(--color-tusk-red)] text-white p-4 rounded-full shadow-lg hover:scale-110 hover:shadow-xl transition-all"
      aria-label="Book a Table"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-8 h-8"
      >
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="16" y1="2" x2="16" y2="6"></line>
        <line x1="8" y1="2" x2="8" y2="6"></line>
        <line x1="3" y1="10" x2="21" y2="10"></line>
      </svg>
    </motion.a>
  );
}
