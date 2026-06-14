"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import MenuModal from "./MenuModal";
import Image from "next/image";

export default function SpecialsSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section id="june-specials" className="bg-[var(--color-tusk-dark)] py-12 md:py-20 border-t border-[var(--color-tusk-beige)]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12 md:gap-20">
          
          {/* Content Side */}
          <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <span className="font-sans font-medium tracking-[0.2em] uppercase text-[10px] md:text-sm mb-4 block opacity-80 text-[var(--color-tusk-beige)]">
                Part Three: Specials
              </span>
              <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-[var(--color-tusk-beige)] mb-6">
                June Specials
              </h2>
              <p className="font-sans font-light text-lg md:text-xl opacity-80 text-[var(--color-tusk-beige)] mb-10 leading-relaxed">
                A rotating menu of chef-crafted dishes designed to celebrate seasonal produce, bold flavors, and the art of open-fire cooking.
              </p>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsModalOpen(true)}
                className="bg-[var(--color-tusk-beige)] text-[var(--color-tusk-dark)] px-8 py-4 md:px-10 md:py-5 uppercase text-[10px] md:text-xs tracking-[0.2em] font-medium transition-colors shadow-xl w-max"
              >
                View June Specials
              </motion.button>
            </motion.div>
          </div>

          {/* Image Side */}
          <div className="w-full md:w-1/2 relative min-h-[50vh] md:min-h-[60vh] overflow-hidden group rounded-sm">
            <motion.div 
              initial={{ scale: 1.1, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2 }}
              className="absolute inset-0"
            >
              <Image 
                src="/june_specials.png"
                alt="June Specials"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-black/20"></div>
            </motion.div>
          </div>
        </div>
      </section>

      <MenuModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} menuType="specials" />
    </>
  );
}
