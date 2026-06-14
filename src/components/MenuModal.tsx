"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { menuData } from "../data/menus";
import { useBooking } from "@/context/BookingContext";

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  menuType: "lunch" | "dinner" | "beverages" | "specials";
  sectionFilter?: string | null;
}

export default function MenuModal({ isOpen, onClose, menuType, sectionFilter }: MenuModalProps) {
  const { openBooking } = useBooking();
  // Prevent scrolling on body when modal is open
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

  const data = menuData[menuType];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
          ></motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl max-h-[90vh] bg-[var(--color-tusk-beige)] text-[var(--color-tusk-dark)] overflow-hidden flex flex-col shadow-2xl rounded-sm"
          >
            {/* Header */}
            <div className="flex-shrink-0 flex items-center justify-between p-6 border-b border-[var(--color-tusk-dark)]/10">
              <div>
                <h2 className="font-display text-3xl md:text-4xl">{data.title}</h2>
                <p className="font-sans font-light text-sm opacity-70 mt-1">{data.subtitle}</p>
              </div>
              <button 
                onClick={onClose}
                className="w-10 h-10 flex items-center justify-center bg-[var(--color-tusk-dark)]/5 hover:bg-[var(--color-tusk-dark)]/10 rounded-full transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-6 md:p-10 custom-scrollbar">
              <div className="max-w-3xl mx-auto space-y-16">
                {data.sections
                  .filter((section) => !sectionFilter || section.title === sectionFilter)
                  .map((section, idx) => (
                  <div key={idx} className="space-y-8">
                    <div className="text-center border-b border-[var(--color-tusk-dark)]/20 pb-4 mb-8">
                      <h3 className="font-sans uppercase tracking-[0.2em] text-xl font-medium mb-2">{section.title}</h3>
                      <p className="font-sans font-light text-sm opacity-70 italic">{section.description}</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                      {section.items.map((item, itemIdx) => (
                        <div key={itemIdx} className="flex flex-col">
                          <div className="flex justify-between items-baseline mb-1 gap-4">
                            <h4 className="font-display text-xl font-semibold leading-tight">{item.name}</h4>
                            <div className="flex-1 border-b border-dotted border-[var(--color-tusk-dark)]/30 mx-2"></div>
                            <span className="font-sans font-medium">{item.price}</span>
                          </div>
                          <p className="font-sans font-light text-sm opacity-80 leading-relaxed pr-8">
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
                
                <div className="pt-10 border-t border-[var(--color-tusk-dark)]/10 text-center">
                  <p className="font-sans text-xs opacity-60">
                    ★ Chef's Choice &nbsp;|&nbsp; ♥ Customer Favorite<br/>
                    Prices are subject to 6% service & 10% Govt. tax, prices are quoted in '000 Rupiah
                  </p>
                </div>
              </div>
            </div>
            
            {/* Footer Action */}
            <div className="flex-shrink-0 p-4 bg-white/50 border-t border-[var(--color-tusk-dark)]/10 text-center">
              <a 
                href="#" onClick={(e) => { e.preventDefault(); openBooking(); }}
                className="inline-block bg-[var(--color-tusk-dark)] text-[var(--color-tusk-beige)] px-8 py-3 uppercase text-xs tracking-widest font-medium hover:bg-[var(--color-tusk-green)] transition-colors"
              >
                Reserve Your Table
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
