import Image from "next/image";

export default function GallerySection() {
  const images: string[] = [
    "/gallery_section/Copy of 1.png",
    "/gallery_section/Copy of Copy of Copy of Tusk - StandUp-72.jpg",
    "/gallery_section/Copy of Copy of EST00335.jpg",
    "/gallery_section/Copy of Copy of EST00432.jpg",
    "/gallery_section/Copy of Copy of EST00606.jpg",
    "/gallery_section/Copy of Copy of EST00694.jpg",
    "/gallery_section/Copy of Copy of EST09950.jpg",
    "/gallery_section/Copy of Copy of VSL08272.jpg",
    "/gallery_section/Copy of Copy of VSL08285.jpg",
    "/gallery_section/Copy of Copy of VSL08292.jpg",
    "/gallery_section/Copy of Copy of VSL08309.jpg",
    "/gallery_section/Copy of DSC06304.JPG",
    "/gallery_section/Copy of DSC06306.JPG",
    "/gallery_section/Copy of DSC06315.JPG",
    "/gallery_section/Copy of DSC08662.JPG",
    "/gallery_section/Copy of IMG_4118-Enhanced-NR.jpg",
    "/gallery_section/Copy of IMG_4128-Enhanced-NR.jpg",
    "/gallery_section/Copy of IMG_4131-Enhanced-NR.jpg",
    "/gallery_section/Copy of TOM01374.jpg",
    "/gallery_section/Copy of TUSK - 1st Anniversary - J1.jpg",
    "/gallery_section/Copy of TUSK - 1st Anniversary - J11.jpg",
    "/gallery_section/Copy of TUSK - 1st Anniversary - J27.jpg",
    "/gallery_section/Copy of TUSK - 1st Anniversary - J34.jpg",
    "/gallery_section/Copy of TUSK - 1st Anniversary - J4.jpg",
    "/gallery_section/Copy of TUSK - 1st Anniversary - J46.jpg",
    "/gallery_section/Copy of Tusk Grill - J13.jpg",
    "/gallery_section/Copy of Tusk Grill - J14.jpg",
    "/gallery_section/Copy of Tusk Grill - J23.jpg",
    "/gallery_section/Copy of Tusk Grill - J24.jpg",
    "/gallery_section/Copy of Tusk Grill - J25.jpg",
    "/gallery_section/Copy of Tusk Grill - J27.jpg",
    "/gallery_section/Copy of VSL08462.jpg",
    "/gallery_section/Copy of VSL08465.jpg",
    "/gallery_section/Copy of VSL08467.jpg",
    "/gallery_section/drinks_image.JPG",
    "/gallery_section/food_image.jpg",
    "/gallery_section/the_interior_image.jpg"
  ];

  return (
    <section id="gallery" className="bg-[var(--color-tusk-dark)] py-12 md:py-20 border-t border-[var(--color-tusk-beige)]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="font-sans font-medium tracking-[0.2em] uppercase text-[10px] md:text-sm mb-4 block opacity-80 text-[var(--color-tusk-beige)]">
            Tusk Bali
          </span>
          <h2 className="font-display text-4xl md:text-6xl text-[var(--color-tusk-beige)] mb-6">
            Gallery
          </h2>
          <p className="font-sans font-light text-base md:text-lg opacity-80 max-w-2xl mx-auto text-[var(--color-tusk-beige)]">
            A glimpse into the atmosphere, the food, and the moments that define the Tusk experience.
          </p>
        </div>

        {/* Masonry Layout via CSS columns */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {images.map((src, index) => (
            <div key={index} className="relative w-full break-inside-avoid overflow-hidden rounded-sm shadow-xl group">
              <Image 
                src={src} 
                alt={`Tusk Gallery Image ${index + 1}`} 
                width={800}
                height={1200}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                quality={80}
              />
              <div className="absolute inset-0 bg-[var(--color-tusk-dark)]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-multiply"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
