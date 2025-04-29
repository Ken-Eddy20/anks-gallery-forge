
import React from "react";
import { Phone, Mail, MapPin, Instagram, Linkedin } from "lucide-react";

const ContactInfo: React.FC<{ icon: React.ReactNode; text: string; href?: string }> = ({ 
  icon, 
  text,
  href 
}) => {
  const content = (
    <div className="flex items-center space-x-4 magnetic">
      <div className="text-neon-blue">{icon}</div>
      <span className="text-gray-300">{text}</span>
    </div>
  );

  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className="hover:text-neon-blue transition-colors">
      {content}
    </a>
  ) : (
    <div>{content}</div>
  );
};

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section bg-gradient-to-t from-black to-black/90">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="mb-4">
            Get in <span className="neon-text-purple">Touch</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear from you and discuss how we can help bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="form-input"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="form-input"
                    required
                  />
                </div>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="form-input"
                  required
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  className="form-input min-h-[150px]"
                  required
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="btn btn-primary w-full md:w-auto magnetic"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <ContactInfo 
                  icon={<Phone size={20} />} 
                  text="+233 248 968 580" 
                  href="tel:+233248968580"
                />
                <ContactInfo 
                  icon={<Mail size={20} />} 
                  text="anksgallery2000@gmail.com" 
                  href="mailto:anksgallery2000@gmail.com"
                />
                <ContactInfo 
                  icon={<MapPin size={20} />} 
                  text="Ghana" 
                />
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Follow Us</h3>
              <div className="flex space-x-6">
                <a
                  href="https://instagram.com/anks_gallery.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-neon-purple hover:text-neon-purple hover:shadow-neon-purple transition-all duration-300 magnetic"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="https://linkedin.com/in/anks-gallery"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-neon-blue hover:text-neon-blue hover:shadow-neon-blue transition-all duration-300 magnetic"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
