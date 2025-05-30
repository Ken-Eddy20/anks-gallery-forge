import React from "react";
import { Link } from "react-router-dom";
import Services from "../components/Services";

const serviceLinks = [
  { name: "AI Automation", path: "/services/ai-automation" },
  { name: "AI Consultation", path: "/services/ai-consultation" },
  { name: "Graphic Design", path: "/services/graphic-design" },
  { name: "Video Editing", path: "/services/video-editing" },
];

const ServicesPage: React.FC = () => (
  <main className="min-h-screen pt-32">
    <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 max-w-4xl mx-auto">
      {serviceLinks.map((service) => (
        <Link
          key={service.path}
          to={service.path}
          className="block bg-black/40 rounded-lg p-6 text-center text-xl font-semibold text-white hover:bg-[hsl(200,100%,38%)] hover:text-black transition-colors duration-200 shadow-lg"
        >
          {service.name}
        </Link>
      ))}
    </div>
    <Services />
    {/* Add more detailed service content here later */}
  </main>
);

export default ServicesPage; 