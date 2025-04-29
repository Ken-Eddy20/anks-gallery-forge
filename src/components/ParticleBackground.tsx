
import React, { useEffect, useRef } from "react";

interface ParticleBackgroundProps {
  count?: number;
}

const ParticleBackground: React.FC<ParticleBackgroundProps> = ({ count = 30 }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    container.innerHTML = '';
    
    // Create particles
    for (let i = 0; i < count; i++) {
      createParticle(container);
    }

    // Clean up function
    return () => {
      container.innerHTML = '';
    };
  }, [count]);

  const createParticle = (container: HTMLDivElement) => {
    const particle = document.createElement('div');
    
    // Randomly determine if this particle should be purple
    const isPurple = Math.random() > 0.7;
    particle.className = `particle ${isPurple ? 'purple' : ''}`;
    
    // Random size between 2px and 5px
    const size = Math.random() * 3 + 2;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    
    // Random position
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    particle.style.left = `${posX}%`;
    particle.style.bottom = `${-10}px`;
    
    // Random delay for animation
    const delay = Math.random() * 10;
    particle.style.animationDelay = `${delay}s`;
    
    // Random duration for animation (between 10s and 15s)
    const duration = Math.random() * 5 + 10;
    particle.style.animationDuration = `${duration}s`;

    container.appendChild(particle);

    // Remove particle after animation and create a new one
    setTimeout(() => {
      if (container.contains(particle)) {
        container.removeChild(particle);
        createParticle(container);
      }
    }, duration * 1000);
  };

  return <div ref={containerRef} className="particles-container"></div>;
};

export default ParticleBackground;
