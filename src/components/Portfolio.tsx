import React from "react";
import { Link } from "react-router-dom";

const slugify = (str: string) =>
  str.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

interface PortfolioItemProps {
  title: string;
  category: string;
  imageUrl: string;
  link: string;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({
  title,
  category,
  imageUrl,
  link,
}) => {
  return (
    <Link to={link} className="block group relative">
      <div className="bg-[#18122B] rounded-2xl shadow-lg p-6 flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl mb-4">
        <div className="aspect-w-4 aspect-h-3 w-full overflow-hidden mb-4 border-2 border-white/15 group-hover:border-[hsl(200,100%,38%)] transition-colors sm:h-[180px] md:h-[220px] rounded-lg sm:rounded-xl">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <h4 className="text-xl font-bold mb-1 text-[hsl(200,100%,38%)] text-center">{title}</h4>
        <p className=" text-center mb-2">{category}</p>
        <span className=" flex items-center gap-1 text-xs text-purple-200 mt-2 bg-black p-3 rounded shadow-md">
          <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M12 4v16m0 0l-6-6m6 6l6-6" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          Explore
        </span>
      </div>
    </Link>
  );
};

const Portfolio: React.FC = () => {
  const portfolioItems = [
    {
      title: "AI Workflow Automation",
      category: "AI Automation",
      imageUrl: "/ai-automation.png",
    },
    {
      title: "Brand Identity System",
      category: "Graphic Design",
      imageUrl: "/lovable-uploads/b5febf24-4245-451c-bf6a-f8c935da6c52.png",
    },
    {
      title: "AI Integration Strategy",
      category: "AI Consultation",
      imageUrl: "/ai-consultation.png",
    },
    {
      title: "Product Showcase Video",
      category: "Video Editing",
      imageUrl: "/video-editing.jpg",
    },
    {
      title: "Corporate AI Assistant",
      category: "AI Automation",
      imageUrl: "/ai-corporate-assistant.png",
    },
    {
      title: "Website Development",
      category: "Web Design and Development",
      imageUrl: "/website-development.jpg",
    },
  ];

  return (
    <section id="portfolio" className="section bg-gradient-to-b from-[#18122B] via-[#251B3E] to-[#18122B] py-24 md:py-32 min-h-screen">
      <div className="container-custom">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Our <span className="text-[hsl(200,100%,38%)]">Portfolio</span></h2>
          <p className="text-lg text-purple-200 max-w-2xl mx-auto">Explore our latest projects where creativity meets artificial intelligence to deliver exceptional results. Each project is a testament to our passion for design and innovation.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-12 px-2 md:px-0">
          {portfolioItems.map((item, index) => (
            <PortfolioItem
              key={index}
              title={item.title}
              category={item.category}
              imageUrl={item.imageUrl}
              link={`/portfolio/${slugify(item.title)}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
