"use client";

import { motion } from "framer-motion";
import { useBooking } from "@/context/BookingContext";
import Image from "next/image";

const events = [
  {
    id: "steak",
    name: "STEAK NIGHT",
    day: "Every Tuesday",
    hours: "5 PM – 10 PM",
    description: "Every Tuesday, enjoy our signature Steak & Frites night. Order a steak and receive your choice of a beer or a glass of wine — on us. The perfect midweek dinner in Uluwatu.",
    imageUrl: "/menus/special_menus/1.jpg", 
  },
  {
    id: "ladies",
    name: "LADIES NIGHT",
    day: "Every Wednesday",
    hours: "6 PM – 9 PM",
    description: "Wednesday nights are dedicated to the ladies. Enjoy our special selection of 2-for-1 cocktails, because you and your friends deserve an elegant evening filled with quality drinks, delicious food, and great atmosphere.",
    imageUrl: "/menus/special_menus/TUSK - 1st Anniversary - J50.jpg",
  },
  {
    id: "jazz",
    name: "JAZZ NIGHT",
    day: "Every Friday",
    hours: "From 8 PM",
    description: "A refined Friday night experience in Uluwatu. Enjoy a carefully curated selection of jazz performed live by talented musicians on our rooftop terrace, paired with great food, cocktails, and atmosphere.",
    imageUrl: "/menus/special_menus/3.JPG",
  },
  {
    id: "dj",
    name: "LIVE DJ",
    day: "Every Saturday",
    hours: "From 8 PM",
    description: "Every Saturday, our restaurant transforms into a vibrant late-night destination, welcoming renowned Bali DJs to set the mood while you enjoy great food, drinks, and even better company.",
    imageUrl: "/menus/special_menus/TUSK - Ambience - J10.jpg",
  },
  {
    id: "sunday",
    name: "SUNDAY FREE FLOW BEER",
    day: "Every Sunday",
    hours: "12 PM – 4 PM",
    description: "Order any item from our lunch menu (excluding sides, extras, and desserts) and enjoy access to our Free Flow Beer special. Ask our team about the beer of the day and make the most of your Sunday in Uluwatu.",
    imageUrl: "/menus/special_menus/sunday_beer.png", 
  }
];

export default function EventsSection() {
  const { openBooking } = useBooking();
  return (
    <section id="events" className="bg-[var(--color-tusk-dark)] py-20 md:py-24">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-6 md:px-12 mb-16 md:mb-20 text-center"
      >
        <span className="font-sans font-medium tracking-[0.2em] uppercase text-[10px] md:text-sm mb-4 block opacity-80 text-[var(--color-tusk-beige)]">
          Every Week at TUSK
        </span>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-[var(--color-tusk-beige)] mb-4 md:mb-6">
          Your Weekly Rituals
        </h2>
        <p className="font-sans font-light text-base md:text-lg opacity-80 max-w-xl mx-auto text-[var(--color-tusk-beige)] px-4">
          From Tuesday steaks to Friday jazz — every night at TUSK has a reason.
        </p>
      </motion.div>

      <div className="flex flex-col overflow-hidden">
        {events.map((event, index) => (
          <div 
            key={event.id} 
            className={`flex flex-col md:flex-row min-h-[60vh] ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
          >
            {/* Image Side */}
            <div className="w-full md:w-1/2 relative min-h-[50vh] md:min-h-full overflow-hidden">
              <motion.div 
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                className="absolute inset-0"
              >
                <Image
                  src={event.imageUrl} 
                  alt={event.name} 
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                  quality={80}
                  className={`object-cover ${event.id === 'jazz' ? 'object-top' : 'object-center'}`}
                />
              </motion.div>
              <div className="absolute inset-0 bg-[var(--color-tusk-dark)]/20 mix-blend-multiply"></div>
            </div>

            {/* Content Side */}
            <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-24 bg-[var(--color-tusk-dark)] text-[var(--color-tusk-beige)]">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="max-w-md w-full"
              >
                <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-6 opacity-80">
                  <span className="font-sans font-medium tracking-widest uppercase text-[10px] md:text-xs border border-[var(--color-tusk-beige)] px-3 py-1">
                    {event.day}
                  </span>
                  <span className="font-sans font-light text-xs md:text-sm">
                    {event.hours}
                  </span>
                </div>
                <h3 className="font-display text-3xl sm:text-4xl md:text-5xl mb-4 md:mb-6 leading-tight">
                  {event.name}
                </h3>
                <p className="font-sans font-light text-base md:text-lg opacity-80 leading-relaxed mb-8 md:mb-10">
                  {event.description}
                </p>
                <motion.a 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="#" onClick={(e) => { e.preventDefault(); openBooking(); }}
                  className="bg-[var(--color-tusk-beige)] text-[var(--color-tusk-dark)] px-6 py-3 md:px-8 md:py-4 uppercase text-[10px] md:text-sm tracking-widest font-medium hover:bg-white transition-colors inline-block text-center w-full sm:w-auto"
                >
                  Reserve for {event.name}
                </motion.a>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
