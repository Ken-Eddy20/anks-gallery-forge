import React from "react";

const featuredProjects = [
  {
    name: "Modern Logo Design",
    image: "/ank-logo.jpg",
    description: "A bold, minimal logo for Anks Gallery.",
    tags: ["Logo", "Branding"],
  },
  {
    name: "Business Brochure Design",
    image: "/brochure-design.jpg",
    description: "A consice and creatively created brochure capturing the core of business.",
    tags: ["Brochure", "Business"],
  },
  {
    name: "Product Advertisement Flyer",
    image: "/product-flyer.jpg",
    description: "A stunning design to advertise a product.",
    tags: ["Advertisement", "Lable design"],
  },
  {
    name: "Social Media design",
    image: "/branding.jpg",
    description: "A well created design to enhance branding.",
    tags: ["Branding", "Social Media"],
  },
];

const services = [
  { icon: "🎨", title: "Logo Design" },
  { icon: "🖼️", title: "Brand Identity" },
  { icon: "📱", title: "Social Media Templates" },
  { icon: "📰", title: "Flyers & Posters" },
  { icon: "💳", title: "Business Cards" },
];

const features = [
  { icon: "⚡", title: "Fast Turnaround" },
  { icon: "🌟", title: "Unique Concepts" },
  { icon: "💸", title: "Affordable Rates" },
  { icon: "🔄", title: "Revisions Included" },
];

const testimonials = [
  {
    name: "Jane Doe",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    quote: "The branding work was outstanding! My business looks so much more professional now.",
    rating: 5,
  },
  {
    name: "John Smith",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    quote: "Creative, fast, and easy to work with. Highly recommended!",
    rating: 5,
  },
];

const PortfolioBrandIdentitySystem: React.FC = () => (
  <div className="bg-gradient-to-b from-[#18122B] via-[#251B3E] to-[#18122B] min-h-screen text-white">
    {/* Hero Section */}
    <section className="pt-36 pb-20 px-4 text-center relative overflow-hidden">
      <div className="max-w-3xl mx-auto z-10 relative">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Unleashing Creativity Through Design</h1>
        <p className="text-lg md:text-xl text-purple-200 mb-8">Explore our best works and see how design can transform your brand.</p>
        <img src="/lovable-uploads/b5febf24-4245-451c-bf6a-f8c935da6c52.png" alt="Designer at work" className="mx-auto rounded-full w-40 h-40 object-cover border-4 border-purple-500 shadow-xl mb-8 animate-float" />
        <div className="flex flex-col md:flex-row gap-4 justify-center mb-4">
          <a href="/contact" className="btn btn-primary text-lg">Start Your Project</a>
          <a href="#featured-projects" className="btn btn-secondary text-lg">See Our Work</a>
        </div>
      </div>
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-700 opacity-30 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-pink-500 opacity-20 rounded-full blur-3xl animate-pulse-slow"></div>
    </section>

    {/* Featured Projects Section */}
    <section id="featured-projects" className="py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-10 text-purple-300">Featured Design Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {featuredProjects.map((project, idx) => (
          <div key={idx} className="bg-[#221a3a] rounded-2xl shadow-lg p-4 flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl text-center">
            <img src={project.image} alt={project.name} className="rounded-xl w-full h-40 object-cover mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2 text-purple-200 text-center">{project.name}</h3>
            <p className="text-sm text-gray-300 mb-2 text-center">{project.description}</p>
            <div className="flex flex-wrap gap-2 justify-center text-center">
              {project.tags.map((tag) => (
                <span key={tag} className="bg-purple-700/60 text-xs px-3 py-1 rounded-full text-purple-100 text-center">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Services We Offer Section */}
    <section className="py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-10 text-purple-300">Services We Offer</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {services.map((service) => (
          <div key={service.title} className="bg-[#221a3a] rounded-xl p-6 flex flex-col items-center shadow-md text-center">
            <span className="text-4xl mb-3 text-center">{service.icon}</span>
            <span className="font-semibold text-lg text-purple-100 text-center">{service.title}</span>
          </div>
        ))}
      </div>
    </section>

    {/* Why Choose Us Section */}
    <section className="py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-10 text-purple-300">Why Choose Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {features.map((feature) => (
          <div key={feature.title} className="bg-[#221a3a] rounded-xl p-6 flex flex-col items-center shadow-md text-center">
            <span className="text-3xl mb-3 text-center">{feature.icon}</span>
            <span className="font-semibold text-lg text-purple-100 text-center">{feature.title}</span>
          </div>
        ))}
      </div>
    </section>

    {/* Client Testimonials Section */}
    <section className="py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-10 text-purple-300">Client Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {testimonials.map((t) => (
          <div key={t.name} className="bg-[#221a3a] rounded-xl p-6 flex flex-col items-center shadow-md text-center">
            <img src={t.image} alt={t.name} className="w-16 h-16 rounded-full mb-3 border-2 border-purple-500 mx-auto" />
            <p className="italic text-purple-100 mb-2 text-center">“{t.quote}”</p>
            <div className="flex gap-1 mb-1 justify-center text-center">
              {Array.from({ length: t.rating }).map((_, i) => (
                <span key={i} className="text-yellow-400 text-center">★</span>
              ))}
            </div>
            <span className="font-semibold text-purple-200 text-center">{t.name}</span>
          </div>
        ))}
      </div>
    </section>

    {/* Call-to-Action Section */}
    <section className="py-16 px-4 text-center">
      <h2 className="text-3xl font-bold mb-6 text-purple-200">Ready to bring your brand to life?</h2>
      <a href="/contact" className="btn btn-primary text-lg">Book a Free Consultation</a>
    </section>
  </div>
);

export default PortfolioBrandIdentitySystem; 