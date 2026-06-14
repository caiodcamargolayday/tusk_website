"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
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
    { 
      name: "Home", 
      href: "/",
      dropdown: [
        { name: "Menus", href: "/#menus" },
        { name: "Specials", href: "/#june-specials" },
        { name: "Events", href: "/#events" },
      ]
    },
    { name: "About", href: "/about" },
    { name: "Gallery", href: "/#gallery" },
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
            <div key={link.name} className="relative group">
              <Link
                href={link.href}
                className="text-[var(--color-tusk-beige)] hover:text-[var(--color-tusk-white)] text-sm tracking-widest uppercase transition-colors flex items-center gap-1"
              >
                {link.name}
                {link.dropdown && <ChevronDown size={14} className="opacity-70 group-hover:rotate-180 transition-transform" />}
              </Link>
              
              {link.dropdown && (
                <div className="absolute top-full left-0 pt-6 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300">
                  <div className="bg-[var(--color-tusk-dark)] border border-[var(--color-tusk-beige)]/20 py-2 min-w-[160px] shadow-xl rounded-sm">
                    {link.dropdown.map(dropLink => (
                      <Link
                        key={dropLink.name}
                        href={dropLink.href}
                        className="block px-4 py-3 text-[var(--color-tusk-beige)] hover:bg-[var(--color-tusk-beige)]/10 hover:text-[var(--color-tusk-white)] text-xs tracking-widest uppercase transition-colors"
                      >
                        {dropLink.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
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
              <div key={link.name} className="flex flex-col gap-4">
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-[var(--color-tusk-beige)] text-lg tracking-widest uppercase"
                >
                  {link.name}
                </Link>
                {link.dropdown && (
                  <div className="flex flex-col gap-4 pl-4 border-l border-[var(--color-tusk-beige)]/20">
                    {link.dropdown.map(dropLink => (
                      <Link
                        key={dropLink.name}
                        href={dropLink.href}
                        onClick={() => setIsOpen(false)}
                        className="text-[var(--color-tusk-beige)]/70 hover:text-[var(--color-tusk-beige)] text-sm tracking-widest uppercase"
                      >
                        {dropLink.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
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
