
import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black py-12 border-t border-white/10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="neon-text-blue">ANK'S</span>{" "}
              <span className="neon-text-purple">GALLERY</span>
            </h3>
            <p className="text-gray-400 mb-4">
              Creativity is and will be designed.
            </p>
            <p className="text-gray-400">
              Powering brands with AI and creative design solutions.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-gray-400 hover:text-neon-blue transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-neon-blue transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-neon-blue transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="text-gray-400 hover:text-neon-blue transition-colors"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-neon-blue transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">AI Automation</li>
              <li className="text-gray-400">AI Consultation</li>
              <li className="text-gray-400">Graphic Design</li>
              <li className="text-gray-400">Video Editing</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-gray-500">
            © {currentYear} ANK's Gallery | All Rights Reserved
          </p>
          <p className="text-gray-600 mt-2 text-sm">
            Founded by Kennedy Asiedu Nyarko
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
