import React, { useState } from "react";
import { Phone, Mail, MapPin, Instagram, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "emailjs-com";

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
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill out all fields",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    // Updated EmailJS service configuration with your provided credentials
    const serviceId = "service_7dm631j";
    const templateId = "template_94dt70u";
    const userId = "y3trLROsWo1QDwIPt";

    try {
      await emailjs.send(serviceId, templateId, {
        from_name: formData.name,
        reply_to: formData.email,
        subject: formData.subject,
        message: formData.message
      }, userId);

      toast({
        title: "Success!",
        description: "Your message has been sent. We'll get back to you soon!",
      });

      // Clear form after successful submission
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Message not sent",
        description: "There was an error sending your message. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section bg-gradient-to-t from-black to-black/90 py-24 md:py-32">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="mb-4">
            Get in <span className="text-neon-blue">Touch</span>
          </h2>
          <div className="w-20 h-1 mx-auto bg-neon-blue rounded-full mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear from you and discuss how we can help bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="form-input"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="form-input"
                    required
                  />
                </div>
              </div>
              <div>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="form-input"
                  required
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  className="form-input min-h-[150px]"
                  required
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`btn btn-primary w-full md:w-auto magnetic ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
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
                  text="anksgallery@gmail.com"
                  href="mailto:anksgallery@gmail.com"
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
