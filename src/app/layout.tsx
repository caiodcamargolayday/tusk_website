import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import AudioPlayer from "@/components/AudioPlayer";
import { BookingProvider } from "@/context/BookingContext";
import BookingModal from "@/components/BookingModal";
import "./globals.css";

// Configure standard sans-serif
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Configure elegant serif (closest match to Big Caslon/editorial feel)
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TUSK | Dining & Libations in Uluwatu",
  description: "Rooted in South African heritage, elevated by the coastal energy of Bali. A culinary experience in Uluwatu.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${cormorant.variable} antialiased bg-[var(--color-tusk-dark)] flex flex-col min-h-screen`}>
        <BookingProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
          <FloatingWhatsApp />
          <AudioPlayer />
          <BookingModal />
        </BookingProvider>
      </body>
    </html>
  );
}
