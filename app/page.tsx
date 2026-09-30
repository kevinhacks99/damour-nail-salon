import { Footer } from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Locations from "@/components/Locations";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main className="marble">
      <Navbar />
      <Hero />
      <Services/>
      <Gallery/>
      <Locations />
      <Footer />


    </main>
  );
}