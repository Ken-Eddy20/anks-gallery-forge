
import React from "react";
import { Rocket, Code, Image, Video } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
  return (
    <div className="service-card magnetic">
      <div className="flex items-center justify-center mb-6">
        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-black/50 text-neon-blue">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold mb-3 text-center">{title}</h3>
      <p className="text-gray-300 text-center">{description}</p>
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
  ];

  return (
    <section id="services" className="section bg-gradient-to-b from-black to-black/90">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="mb-4">Our <span className="neon-text-blue">Services</span></h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We combine creativity with artificial intelligence to deliver exceptional results for your business.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
