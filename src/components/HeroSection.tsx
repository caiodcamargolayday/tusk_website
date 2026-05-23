"use client";

import { motion, Variants } from "framer-motion";
import { useState } from "react";
import MenuModal from "./MenuModal";
import { useBooking } from "@/context/BookingContext";
import Image from "next/image";

export default function HeroSection() {
  const { openBooking } = useBooking();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const bgImageUrl = "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop";

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 }
    }
  };

  const textEntryRight: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.2, ease: "easeOut" } }
  };

  const textEntryLeft: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.2, ease: "easeOut" } }
  };

  const buttonUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } }
  };

  return (
    <>
      <section id="specials" className="relative min-h-[100svh] flex items-center justify-center pt-24 overflow-hidden bg-[var(--color-tusk-dark)]">
        {/* Subtle Slow Zoom Background Image */}
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 15, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <Image 
            src={bgImageUrl}
            alt="Tusk Atmosphere"
            fill
            priority
            quality={85}
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[var(--color-tusk-dark)]/70 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-tusk-dark)]/80 via-transparent to-[var(--color-tusk-dark)]"></div>
          <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/7/76/1k_Dissolve_Noise_Texture.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
        </motion.div>

        {/* Content Container */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center mt-8 w-full overflow-hidden">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center"
          >
            <motion.span 
              variants={textEntryLeft} 
              className="font-sans font-medium tracking-[0.3em] uppercase text-xs mb-6 block opacity-70 text-[var(--color-tusk-beige)]"
            >
              May Specials
            </motion.span>
            
            <motion.h1 
              variants={textEntryRight} 
              className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl mb-6 md:mb-8 text-[var(--color-tusk-beige)] drop-shadow-2xl leading-[1.1]"
            >
              This Month <span className="italic opacity-80 block sm:inline">at</span> TUSK
            </motion.h1>
            
            <motion.p 
              variants={textEntryLeft} 
              className="font-sans font-light text-base md:text-xl max-w-2xl mx-auto mb-10 md:mb-16 opacity-80 leading-relaxed text-[var(--color-tusk-beige)] px-2"
            >
              A curated selection of seasonal dishes and exclusive creations.
            </motion.p>
            
            <motion.div 
              variants={buttonUp} 
              className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto px-4"
            >
              <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: "var(--color-tusk-white)", color: "var(--color-tusk-dark)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsModalOpen(true)}
                className="bg-[var(--color-tusk-beige)] text-[var(--color-tusk-dark)] px-8 py-4 md:px-10 md:py-5 uppercase text-[10px] md:text-xs tracking-[0.2em] font-medium transition-colors w-full sm:w-auto shadow-2xl backdrop-blur-sm"
              >
                View May Specials
              </motion.button>
              <motion.a 
                whileHover={{ scale: 1.05, backgroundColor: "var(--color-tusk-beige)", color: "var(--color-tusk-dark)" }}
                whileTap={{ scale: 0.95 }}
                href="#" onClick={(e) => { e.preventDefault(); openBooking(); }}
                className="border border-[var(--color-tusk-beige)]/40 text-[var(--color-tusk-beige)] px-8 py-4 md:px-10 md:py-5 uppercase text-[10px] md:text-xs tracking-[0.2em] font-medium transition-colors w-full sm:w-auto shadow-2xl backdrop-blur-sm hover:border-[var(--color-tusk-beige)]"
              >
                Reserve a Table
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <MenuModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} menuType="specials" />
    </>
  );
}
