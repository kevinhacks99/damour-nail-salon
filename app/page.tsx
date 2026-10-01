"use client";

import { Footer } from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Locations from "@/components/Locations";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";


import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    const elements = document.querySelectorAll(".reveal");

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

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