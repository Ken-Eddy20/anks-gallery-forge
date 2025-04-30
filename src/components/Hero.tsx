
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
    <section id="home" className="relative min-h-screen flex items-center pt-20 pb-10">
      <ParticleBackground />
      
      <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-8 z-10">
        <div className="flex flex-col justify-center space-y-6">
          <h1 className="fade-in animate-fade-in-up">
            Powering Your Vision with{" "}
            <span className="text-neon-blue">AI</span> and{" "}
            <span className="text-neon-purple">Creative Design</span>
          </h1>
          
          <p className="text-gray-300 text-lg fade-in animate-fade-in-up">
            <span className="text-neon-blue">AI Automation</span> |{" "}
            <span className="text-neon-purple">AI Consultation</span> |{" "}
            <span className="text-neon-blue">Graphic Design</span> |{" "}
            <span className="text-neon-purple">Video Editing</span>
          </p>
          
          <div className="flex flex-wrap gap-4 fade-in animate-fade-in-up">
            <a href="#services" className="btn btn-primary magnetic">
              Get Started
            </a>
            <a href="#portfolio" className="btn btn-secondary magnetic">
              Our Work
            </a>
          </div>
        </div>
        
        <div className="flex items-center justify-center">
          <div className="w-full max-w-lg fade-in animate-fade-in-up animate-float">
            <img 
              src="/lovable-uploads/d5c95c8b-6a89-43a2-a697-b11725f4908f.png" 
              alt="Anks Gallery - Logo" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
      
      <a 
        href="#services" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white hover:text-neon-blue transition-colors duration-300 animate-bounce"
      >
        <ChevronDown size={36} />
      </a>
    </section>
  );
};

export default Hero;
