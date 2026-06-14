import Image from "next/image";
import fs from "fs";
import path from "path";

export default function GallerySection() {
  const galleryDir = path.join(process.cwd(), "public/gallery_section");
  let images: string[] = [];
  
  try {
    const files = fs.readdirSync(galleryDir);
    images = files
      .filter(file => file.match(/\.(jpg|jpeg|png|gif)$/i))
      .map(file => `/gallery_section/${file}`);
  } catch (err) {
    console.error("Could not load gallery images:", err);
  }

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
