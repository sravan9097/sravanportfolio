
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import WhatIDo from "@/components/WhatIDo";
import About from "@/components/About";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FigmaFiles from "@/components/FigmaFiles";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {

    // Animation on scroll
    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    };

    const observer = new IntersectionObserver(callback, {
      threshold: 0.1
    });

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <div className="flex flex-col container-padded max-w-7xl">
      <Projects />
      
      <WhatIDo />
      <About />
      <FigmaFiles />
      {/* <Process /> */}
      <Contact />
      </div>
      <Footer />
    </main>
  );
};

export default Index;
