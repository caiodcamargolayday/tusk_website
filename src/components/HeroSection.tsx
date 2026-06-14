"use client";

import { motion, Variants } from "framer-motion";
import { useBooking } from "@/context/BookingContext";
import Image from "next/image";

export default function HeroSection() {
  const { openBooking } = useBooking();
  const bgImageUrl = "/hero_image.jpeg";

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
            quality={90}
            className="object-cover object-center contrast-125 saturate-110 brightness-110"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-tusk-dark)]/60 via-transparent to-[var(--color-tusk-dark)]/90"></div>
          <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/7/76/1k_Dissolve_Noise_Texture.png')] opacity-[0.05] mix-blend-overlay pointer-events-none" />
        </motion.div>

        {/* Content Container */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center mt-8 w-full overflow-hidden">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center"
          >
            <motion.h1 
              variants={textEntryRight} 
              className="font-display text-5xl sm:text-6xl md:text-8xl mb-6 md:mb-8 text-[var(--color-tusk-beige)] drop-shadow-2xl leading-[1.1]"
            >
              Welcome to Tusk
            </motion.h1>
            
            <motion.p 
              variants={textEntryLeft} 
              className="font-sans font-light text-base md:text-xl max-w-2xl mx-auto mb-10 md:mb-16 opacity-90 leading-relaxed text-[var(--color-tusk-beige)] px-2"
            >
              Where Fire Meets Flavor &ndash; A vibrant grill and bar nestled in the heart of Uluwatu, showcasing the art of open-fire cooking and the finest craft beverages.
            </motion.p>
            
            <motion.div 
              variants={buttonUp} 
              className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto px-4"
            >
              <motion.a 
                whileHover={{ scale: 1.05, backgroundColor: "var(--color-tusk-white)", color: "var(--color-tusk-dark)" }}
                whileTap={{ scale: 0.95 }}
                href="#" onClick={(e) => { e.preventDefault(); openBooking(); }}
                className="bg-[var(--color-tusk-beige)] text-[var(--color-tusk-dark)] px-8 py-4 md:px-10 md:py-5 uppercase text-[10px] md:text-xs tracking-[0.2em] font-medium transition-colors w-full sm:w-auto shadow-2xl backdrop-blur-sm"
              >
                Book a Table
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </>
  );
}
