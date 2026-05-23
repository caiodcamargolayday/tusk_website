"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useBooking } from "@/context/BookingContext";
import Image from "next/image";

export default function Navbar() {
  const { openBooking } = useBooking();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Specials", href: "#specials" },
    { name: "Menus", href: "#menus" },
    { name: "Events", href: "#events" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[var(--color-tusk-dark)]/95 backdrop-blur-md shadow-md py-4 border-b border-[var(--color-tusk-beige)]/10" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative w-32 h-8 flex items-center">
          <Image 
            src="/tusk light logo.png" 
            alt="TUSK" 
            fill
            className="object-contain object-left"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[var(--color-tusk-beige)] hover:text-[var(--color-tusk-white)] text-sm tracking-widest uppercase transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="#" onClick={(e) => { e.preventDefault(); openBooking(); }}
            className="border border-[var(--color-tusk-beige)]/40 text-[var(--color-tusk-beige)] px-6 py-2 uppercase text-sm tracking-widest hover:border-[var(--color-tusk-beige)] hover:bg-[var(--color-tusk-beige)] hover:text-[var(--color-tusk-dark)] transition-colors"
          >
            Reserve
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-[var(--color-tusk-beige)]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-[var(--color-tusk-dark)] border-t border-[var(--color-tusk-beige)]/20 py-6 px-6 flex flex-col gap-6 md:hidden shadow-xl"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-[var(--color-tusk-beige)] text-lg tracking-widest uppercase"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="#" onClick={(e) => { 
                e.preventDefault(); 
                setIsOpen(false);
                openBooking(); 
              }}
              className="bg-[var(--color-tusk-red)] text-[var(--color-tusk-white)] text-center py-3 uppercase text-sm tracking-widest font-medium"
            >
              Reserve a Table
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
