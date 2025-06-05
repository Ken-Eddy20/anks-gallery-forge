import React, { useEffect } from "react";
import ParticleBackground from "./ParticleBackground";
import { ChevronDown } from "lucide-react";

const Hero: React.FC = () => {
  useEffect(() => {
    const fadeInElements = document.querySelectorAll('.fade-in');
    fadeInElements.forEach((element, index) => {
      const htmlElement = element as HTMLElement;
      htmlElement.style.animationDelay = `${index * 0.2}s`;
    });
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-40 pb-32 bg-black overflow-hidden">
      {/* Animated Gradient background */}
      <div className="absolute inset-0 z-0 pointer-events-none ">
        <div className="w-full h-full" style={{
          background: 'radial-gradient(ellipse 60% 40% at 60% 20%, rgba(155,48,255,0.32) 0%, rgba(80,0,120,0.22) 60%, transparent 100%)',
          width: '100%',
          height: '100%'
        }} />
      </div>
      {/* Noise overlay */}
      <div className="absolute inset-0 pointer-events-none z-0" style={{ backgroundImage: 'url("/noise.png")', opacity: 0.15 }} />
      <ParticleBackground />

      <div className="container-custom flex items-center flex-col justify-center space-y-14 z-10">
        <div className="flex flex-col items-center justify-center space-y-7 lg:pr-24">
          <h1 className="text-center font-extrabold text-3xl md:text-4xl lg:text-7xl tracking-tight text-white">
            Powering Your Vision with{" "}
            <span className="text-[hsl(200,100%,38%)]">AI</span> and{" "}
            <span className="text-neon-purple">Creative Design</span>
          </h1>

          <p className="text-gray-300 text-center text-base md:text-lg fade-in animate-fade-in-up mb-10 tracking-tight">
            <span className="text-[hsl(200,100%,38%)]">AI Automation</span> |
            <span className="text-neon-purple"> AI Consultation</span> |
            <span className="text-[hsl(200,100%,38%)]"> Graphic Design</span> |
            <span className="text-neon-purple"> Video Editing</span>
          </p>

          <div className="flex flex-wrap gap-4 md:gap-8 fade-in animate-fade-in-up">
            <a href="#services" className="btn btn-primary magnetic">
              Get Started
            </a>
            <a href="#portfolio" className="btn btn-secondary magnetic">
              Our Work
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between">
          <div className="bg-black/10 rounded-2xl shadow-lg border border-white/10 p-6">
            <img
              src="/lovable-uploads/69410cfd-15a0-46c5-9f5e-d443640d4ea7.png"
              alt="Anks Gallery - Logo"
              className="rounded-2xl w-full h-full object-cover"
            />
          </div>

          <a
            href="#services"
            className="mt-12 text-white hover:text-neon-blue transition-colors duration-300 animate-bounce"
          >
            <ChevronDown size={36} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
