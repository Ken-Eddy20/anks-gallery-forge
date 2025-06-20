import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-lg shadow-2xl"
          : "bg-transparent shadow-md"
      }`}
    >
      <div className="container-custom flex items-center justify-between h-24 py-4">
        <a href="#" className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/d5c95c8b-6a89-43a2-a697-b11725f4908f.png" 
            alt="Anks Gallery Flyer" 
            className="h-10 w-auto"
          />
          <span className="text-xl font-poppins font-bold">
            <span className="text-[hsl(200,100%,38%)]">ANKS</span>{" "}
            <span className="text-neon-purple">GALLERY</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="magnetic relative text-white hover:text-neon-blue transition-colors duration-300 py-2 group"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-blue transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="p-2 text-white focus:outline-none focus:text-neon-blue magnetic"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-black/95 backdrop-blur-lg transition-all duration-300 overflow-hidden ${
          isMenuOpen ? "max-h-80" : "max-h-0"
        }`}
      >
        <div className="container-custom py-4 flex flex-col space-y-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-white hover:text-neon-blue transition-colors duration-300 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
