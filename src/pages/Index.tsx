import React, { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Enable dark mode
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <Hero />
      <About />
      <Footer />
    </div>
  );
};

export default Index;
