"use client";

import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Courses from "@/components/Courses";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Sakura petals background animation */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {[...Array(9)].map((_, i) => (
          <div
            key={i}
            className="sakura-petal"
            style={{
              animationDelay: `${i * 1.5}s`,
              animationDuration: `${10 + i * 2}s`,
            }}
          />
        ))}
      </div>

      <Navigation />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <Hero />
        <About />
        <Courses />
        <Testimonials />
        <Contact />
        <Footer />
      </motion.div>
    </main>
  );
}
