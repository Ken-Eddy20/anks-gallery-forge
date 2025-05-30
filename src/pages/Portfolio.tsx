import React from "react";
import Portfolio from "../components/Portfolio";

const PortfolioPage: React.FC = () => (
  <main className="min-h-screen pt-32">
    <h1 className="text-4xl font-bold text-center mb-12">Our Portfolio</h1>
    <Portfolio />
    {/* Add more detailed portfolio content here later */}
  </main>
);

export default PortfolioPage; 