import React from "react";

interface PortfolioItemProps {
  title: string;
  category: string;
  imageUrl: string;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({
  title,
  category,
  imageUrl,
}) => {
  return (
    <div className="portfolio-item magnetic">
      <div className="aspect-w-4 aspect-h-3 bg-gray-800 rounded-lg overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transform transition-all duration-500 hover:scale-110"
        />
      </div>
      <div className="portfolio-item-overlay">
        <h4 className="text-xl font-bold mb-1 text-[hsl(200,100%,38%)]">{title}</h4>
        <p className="text-neon-purple">{category}</p>
      </div>
    </div>
  );
};

const Portfolio: React.FC = () => {
  const portfolioItems = [
    {
      title: "AI Workflow Automation",
      category: "AI Automation",
      imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&h=400",
    },
    {
      title: "Brand Identity System",
      category: "Graphic Design",
      imageUrl: "/lovable-uploads/b5febf24-4245-451c-bf6a-f8c935da6c52.png",
    },
    {
      title: "AI Integration Strategy",
      category: "AI Consultation",
      imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=600&h=400",
    },
    {
      title: "Product Showcase Video",
      category: "Video Editing",
      imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&h=400",
    },
    {
      title: "Corporate AI Assistant",
      category: "AI Automation",
      imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&h=400",
    },
    {
      title: "Interactive Marketing Campaign",
      category: "Graphic Design",
      imageUrl: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <section id="portfolio" className="section bg-black/90 py-24 md:py-32">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="mb-4">
            Our <span className="text-[hsl(200,100%,38%)]">Portfolio</span>
          </h2>
          <div className="w-20 h-1 mx-auto bg-neon-blue rounded-full opacity-20 mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore our latest projects where creativity meets artificial intelligence to deliver exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {portfolioItems.map((item, index) => (
            <PortfolioItem
              key={index}
              title={item.title}
              category={item.category}
              imageUrl={item.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
