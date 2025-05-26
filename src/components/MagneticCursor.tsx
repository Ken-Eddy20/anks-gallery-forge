import React, { useEffect, useState, useRef } from "react";

const MagneticCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMagnetic, setIsMagnetic] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Check if device supports hover
    const isTouchDevice = window.matchMedia("(hover: none)").matches;
    if (isTouchDevice) return;

    const magneticElements = document.querySelectorAll('.magnetic');
    
    const moveCursor = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      cursor.style.left = `${clientX}px`;
      cursor.style.top = `${clientY}px`;

      // Check for magnetic elements
      let isOverMagnetic = false;
      magneticElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const distX = clientX - (rect.left + rect.width / 2);
        const distY = clientY - (rect.top + rect.height / 2);
        const distance = Math.sqrt(distX * distX + distY * distY);
        
        if (distance < 50) {
          isOverMagnetic = true;
          // Calculate magnetic pull
          const pull = 0.3; // Strength of pull
          const moveX = distX * pull;
          const moveY = distY * pull;
          
          el.setAttribute(
            'style', 
            `transform: translate(${moveX}px, ${moveY}px);`
          );
        } else {
          el.setAttribute('style', '');
        }
      });
      
      setIsMagnetic(isOverMagnetic);
    };

    const hideCursor = () => setIsVisible(false);
    const showCursor = () => setIsVisible(true);

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseenter", showCursor);
    document.addEventListener("mouseleave", hideCursor);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseenter", showCursor);
      document.removeEventListener("mouseleave", hideCursor);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`custom-cursor ${isVisible ? "opacity-100" : "opacity-0"} ${
        isMagnetic ? "cursor-magnetic-active" : ""
      }`}
    ></div>
  );
};

export default MagneticCursor;
