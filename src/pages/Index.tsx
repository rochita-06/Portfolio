import { useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import AIAssistant from "@/components/AIAssistant";
import CustomCursor from "@/components/CustomCursor";
import GoToTopButton from "@/components/GoToTopButton";
import ParticleBackground from "@/components/ParticleBackground";
import SignatureAnimation from "@/components/SignatureAnimation";

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash && (
        <SignatureAnimation onComplete={() => setShowSplash(false)} />
      )}

      {!showSplash && (
        <div className="min-h-screen bg-background text-foreground relative">
          <ParticleBackground />
          <CustomCursor />

          <div className="relative z-10">
            <Navigation showLogo={!showSplash} />
            <main className="overflow-x-hidden">
              <Hero />
              <About />
              <Projects />
              <Achievements />
              <Contact />
            </main>

            <footer className="glass border-t border-white/10 py-6 sm:py-8">
              <div className="container mx-auto px-4 sm:px-6 text-center">
                <p className="text-sm sm:text-base text-muted-foreground">
                  © 2025 Gude Rochita. Built with React, TypeScript & Tailwind CSS.
                </p>
              </div>
            </footer>
          </div>

          <GoToTopButton />
          <AIAssistant />
        </div>
      )}
    </>
  );
};

export default Index;
