
import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="section bg-black">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="mb-6">
              About <span className="neon-text-purple">Anks Gallery</span>
            </h2>
            <p className="text-gray-300 mb-4">
              Founded by Kennedy Asiedu Nyarko, Anks Gallery started as a creative studio focused on graphic design excellence. Today, we've evolved into a comprehensive digital solutions provider, integrating cutting-edge AI technologies with creative design expertise.
            </p>
            <p className="text-gray-300 mb-4">
              Our mission is to empower businesses through the seamless fusion of artificial intelligence and creative design. We believe in pushing boundaries, embracing innovation, and delivering results that exceed expectations.
            </p>
            <p className="text-gray-300">
              At Anks Gallery, we don't just create designs - we build intelligent, automated solutions that help brands connect with their audience in meaningful ways. We're committed to staying at the forefront of AI advancements and design trends to provide our clients with the most effective tools for success.
            </p>
          </div>
          
          <div className="relative">
            <div className="border-2 border-neon-blue rounded-lg shadow-neon-blue bg-black/50 backdrop-blur-sm p-8">
              <blockquote className="relative">
                <div className="text-5xl text-neon-blue absolute top-0 left-0">"</div>
                <p className="my-6 pl-8 pr-8 text-xl text-gray-200">
                  We've gone beyond borders. Graphic design was just the beginning. Now, we're building AI agents, automating workflows, and redefining how brands connect.
                </p>
                <footer className="text-right mt-4">
                  <span className="text-neon-purple font-medium">
                    — Kennedy Asiedu Nyarko, Founder
                  </span>
                </footer>
                <div className="text-5xl text-neon-blue absolute bottom-0 right-0">"</div>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
