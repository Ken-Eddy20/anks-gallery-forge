import React from "react";
import { Rocket, Code, Image, Video, Globe } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
  return (
    <div className="service-card magnetic block border-2 border-white/15 hover:border-[hsl(200,100%,38%)] transition-colors duration-200 p-4 md:p-3 lg:p-2 max-w-xs mx-auto">
      <div className="flex items-center justify-center mb-3">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-black/50 text-[hsl(200,100%,38%)]">
          {React.cloneElement(icon as React.ReactElement, { size: 22 })}
        </div>
      </div>
      <h3 className="text-base font-bold mb-1 text-center">{title}</h3>
      <p className="text-gray-300 text-xs text-center">{description}</p>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      title: "AI Automation",
      description: "Streamline your workflows with cutting-edge AI automation solutions tailored to your business needs.",
      icon: <Rocket size={32} className="animate-pulse-glow" />,
    },
    {
      title: "AI Consultation",
      description: "Get expert guidance on implementing AI in your business to stay ahead of the competition.",
      icon: <Code size={32} className="animate-pulse-glow" />,
    },
    {
      title: "Graphic Design",
      description: "Eye-catching visuals and branding that make your business stand out with our creative design services.",
      icon: <Image size={32} className="animate-pulse-glow" />,
    },
    {
      title: "Video Editing",
      description: "Professional video editing services to enhance your content and engage your audience.",
      icon: <Video size={32} className="animate-pulse-glow" />,
    },
    {
      title: "Website Development",
      description: "Modern, responsive websites and web apps to grow your business online.",
      icon: <Globe size={32} className="animate-pulse-glow" />,
    },
  ];

  return (
    <section id="services" className="section bg-gradient-to-b from-black to-black/90 py-24 md:py-32">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="mb-4">Our <span className="neon-text-blue">Services</span></h2>
          <div className="w-20 h-1 mx-auto bg-neon-blue rounded-full opacity-20 mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We combine creativity with artificial intelligence to deliver exceptional results for your business.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 items-center justify-center">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
