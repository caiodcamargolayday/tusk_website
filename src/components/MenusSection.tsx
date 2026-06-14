"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MenuModal from "./MenuModal";
import { menuData } from "../data/menus";

type MenuId = "lunch" | "dinner" | "beverages";

const menus: { id: MenuId; label: string; description: string; imageUrl: string }[] = [
  {
    id: "lunch",
    label: "LUNCH",
    description: "Fresh, vibrant, and full of flavor. Our lunch menu combines carefully sourced ingredients with the signature touch of our open-fire kitchen.",
    imageUrl: "/lunch_picture.jpg", 
  },
  {
    id: "dinner",
    label: "DINNER",
    description: "From perfectly grilled steaks to signature cocktails, our dinner experience celebrates the art of fire and flavor in the unmistakable atmosphere of Tusk.",
    imageUrl: "/dinner_image.jpg", 
  },
  {
    id: "beverages",
    label: "BEVERAGES",
    description: "From signature cocktails to carefully selected wines, our drinks menu is crafted to complement every moment at Tusk. Whether you're joining us for sunset, dinner, or a late-night drink, there's always something worth raising a glass to.",
    imageUrl: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop", 
  }
];

export default function MenusSection() {
  const [activeTab, setActiveTab] = useState<MenuId>(menus[0].id);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSectionTitle, setActiveSectionTitle] = useState<string | null>(null);

  const activeMenu = menus.find(m => m.id === activeTab)!;

  return (
    <>
      <section id="menus" className="bg-[var(--color-tusk-green)] py-12 md:py-20 min-h-screen flex flex-col justify-center">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-[var(--color-tusk-beige)] mb-4">Our Menus</h2>
            <p className="font-sans font-light text-lg opacity-80 max-w-xl mx-auto text-[var(--color-tusk-beige)]">
              Rooted in South African heritage, elevated by the coastal energy of Bali.
            </p>
          </motion.div>

          {/* Tab Navigation */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 md:gap-12 mb-16 border-b border-[var(--color-tusk-beige)]/20 pb-4"
          >
            {menus.map((menu) => (
              <button
                key={menu.id}
                onClick={() => setActiveTab(menu.id)}
                className={`font-sans tracking-widest uppercase text-sm pb-2 transition-all relative ${
                  activeTab === menu.id 
                    ? "text-[var(--color-tusk-beige)] opacity-100" 
                    : "text-[var(--color-tusk-beige)] opacity-50 hover:opacity-80"
                }`}
              >
                {menu.label}
                {activeTab === menu.id && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--color-tusk-beige)]"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </motion.div>

          {/* Tab Content */}
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="flex flex-col md:flex-row items-center gap-12"
              >
                <div className="w-full md:w-1/2 aspect-[4/5] md:aspect-square relative overflow-hidden bg-[var(--color-tusk-dark)] group">
                  <motion.img 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.8 }}
                    src={activeMenu.imageUrl} 
                    alt={activeMenu.label}
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                  <motion.h3 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    className="font-display text-3xl md:text-5xl text-[var(--color-tusk-beige)] mb-6"
                  >
                    {activeMenu.label}
                  </motion.h3>
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="font-sans font-light text-lg text-[var(--color-tusk-beige)] opacity-80 mb-10 max-w-md leading-relaxed"
                  >
                    {activeMenu.description}
                  </motion.p>
                  {activeMenu.id === "beverages" ? (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      className="flex flex-wrap gap-4"
                    >
                      {menuData.beverages.sections.map((section, idx) => (
                        <motion.button
                          key={idx}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => {
                            setActiveSectionTitle(section.title);
                            setIsModalOpen(true);
                          }}
                          className="bg-transparent border border-[var(--color-tusk-beige)] text-[var(--color-tusk-beige)] px-6 py-3 uppercase text-sm tracking-widest font-medium hover:bg-[var(--color-tusk-beige)] hover:text-[var(--color-tusk-dark)] transition-colors"
                        >
                          {section.title}
                        </motion.button>
                      ))}
                    </motion.div>
                  ) : (
                    <motion.button 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        setActiveSectionTitle(null);
                        setIsModalOpen(true);
                      }}
                      className="bg-[var(--color-tusk-red)] text-[var(--color-tusk-white)] px-8 py-4 uppercase text-sm tracking-widest font-medium hover:bg-white hover:text-[var(--color-tusk-dark)] transition-colors inline-block w-max"
                    >
                      View {activeMenu.label} Menu
                    </motion.button>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      <MenuModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        menuType={activeTab} 
        sectionFilter={activeSectionTitle}
      />
    </>
  );
}
