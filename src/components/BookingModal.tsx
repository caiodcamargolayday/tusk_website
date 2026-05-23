"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { useBooking } from "@/context/BookingContext";

export default function BookingModal() {
  const { isOpen, closeBooking } = useBooking();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const widgetUrl = "https://booking.resdiary.com/widget/Standard/TuskBali/1945";

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeBooking}
            className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
          ></motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-5xl h-[90vh] bg-[var(--color-tusk-dark)] overflow-hidden flex flex-col shadow-2xl border border-[var(--color-tusk-beige)]/20 rounded-md"
          >
            {/* Header */}
            <div className="flex-shrink-0 flex items-center justify-between p-4 border-b border-[var(--color-tusk-beige)]/20 bg-[var(--color-tusk-dark)]">
              <div>
                <h2 className="font-display text-2xl text-[var(--color-tusk-beige)]">Reserve a Table</h2>
              </div>
              <button 
                onClick={closeBooking}
                className="w-10 h-10 flex items-center justify-center text-[var(--color-tusk-beige)] hover:bg-[var(--color-tusk-beige)]/10 rounded-full transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            {/* Embedded ResDiary Widget */}
            <div className="flex-1 w-full h-full relative bg-white">
              <iframe 
                src={widgetUrl} 
                className="absolute inset-0 w-full h-full border-none"
                title="ResDiary Booking Widget"
              ></iframe>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
