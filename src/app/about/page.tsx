import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="pt-20 md:pt-24 bg-[var(--color-tusk-dark)] min-h-screen text-[var(--color-tusk-beige)]">
      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6 max-w-4xl mx-auto text-center border-b border-[var(--color-tusk-beige)]/10">
        <span className="font-sans font-medium tracking-[0.2em] uppercase text-[10px] md:text-sm mb-3 md:mb-4 block opacity-80">
          Our Story
        </span>
        <h1 className="font-display text-4xl sm:text-5xl md:text-7xl mb-6 md:mb-8 leading-tight text-[var(--color-tusk-beige)]">
          Tusk was born out of a passion
        </h1>
        <p className="font-sans font-light text-base sm:text-lg md:text-2xl opacity-80 leading-relaxed text-[var(--color-tusk-beige)]">
          ...for showcasing the vibrant flavors and traditions that define South Africa: the open-armed welcome, the open fire cooking, the long chats over crafted drinks, the endless laughter and the stories shared.
        </p>
      </section>

      {/* The Food */}
      <section className="py-12 md:py-20 px-4 sm:px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-16">
        <div className="w-full md:w-1/2">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl mb-4 md:mb-6 text-[var(--color-tusk-beige)]">The Food</h2>
          <h3 className="font-sans font-medium tracking-widest uppercase text-xs md:text-sm mb-4 md:mb-6 opacity-80 border-l border-[var(--color-tusk-beige)] pl-4 text-[var(--color-tusk-beige)]">
            Where Fire, Meets Flavor
          </h3>
          <p className="font-sans font-light text-sm sm:text-base md:text-lg opacity-80 leading-relaxed text-[var(--color-tusk-beige)]">
            Our menu is curated to showcase the finest flavors brought to life by open fire cooking. This centuries-old culinary tradition transforms ingredients into tantalizing dishes that foster connection and enjoyment.
          </p>
        </div>
        <div className="w-full md:w-1/2 relative h-64 sm:h-80 md:h-[60vh] rounded-sm overflow-hidden shadow-2xl">
          <Image src="/gallery_section/food_image.jpg" alt="The Food" fill className="object-cover hover:scale-105 transition-transform duration-1000" />
        </div>
      </section>

      {/* The Drinks */}
      <section className="py-12 md:py-20 px-4 sm:px-6 max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16">
        <div className="w-full md:w-1/2">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl mb-4 md:mb-6 text-[var(--color-tusk-beige)]">The Drinks</h2>
          <p className="font-sans font-light text-sm sm:text-base md:text-lg opacity-80 leading-relaxed text-[var(--color-tusk-beige)]">
            Explore a beverage menu designed to delight the senses, where each creation is a unique fusion of flavors and textures. From complex and bittersweet to fresh and fruity, our cocktails take you on a sensory journey. Enjoy wines that balance herbal notes with creamy textures and hints of citrus and spice. Whether you prefer classic elegance or innovative twists, each drink captures the essence of Tusk's vibrant atmosphere.
          </p>
        </div>
        <div className="w-full md:w-1/2 relative h-64 sm:h-80 md:h-[60vh] rounded-sm overflow-hidden shadow-2xl">
          <Image src="/gallery_section/drinks_image.JPG" alt="The Drinks" fill className="object-cover hover:scale-105 transition-transform duration-1000" />
        </div>
      </section>

      {/* The Interior */}
      <section className="py-12 md:py-20 px-4 sm:px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-16 border-b border-[var(--color-tusk-beige)]/10">
        <div className="w-full md:w-1/2">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl mb-4 md:mb-6 text-[var(--color-tusk-beige)]">The Interior</h2>
          <p className="font-sans font-light text-sm sm:text-base md:text-lg opacity-80 leading-relaxed text-[var(--color-tusk-beige)]">
            Step into Tusk, where rustic charm meets contemporary elegance. Awash in natural light, the interior offers a sanctuary of warm hues and textures crafted from reclaimed woods. From the sturdy beams overhead to the inviting seating below, every detail reflects our commitment to craftsmanship and sustainability. Enjoy our signature dishes or sip on a fine wine in an atmosphere that celebrates nature’s beauty and the joy of shared meals.
          </p>
        </div>
        <div className="w-full md:w-1/2 relative h-64 sm:h-80 md:h-[60vh] rounded-sm overflow-hidden shadow-2xl">
          <Image src="/gallery_section/the_interior_image.jpg" alt="The Interior" fill className="object-cover hover:scale-105 transition-transform duration-1000" />
        </div>
      </section>
    </main>
  );
}
