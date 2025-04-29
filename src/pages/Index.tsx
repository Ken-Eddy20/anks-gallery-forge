
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import MagneticCursor from "../components/MagneticCursor";
import { Helmet } from "react-helmet";
import emailjs from "emailjs-com";

const Index: React.FC = () => {
  useEffect(() => {
    // Update title
    document.title = "ANK's Gallery | AI Automation & Creative Design";
    
    // Initialize EmailJS
    emailjs.init("YOUR_USER_ID"); // Replace with your actual EmailJS public key
  }, []);

  return (
    <>
      <Helmet>
        <title>ANK's Gallery | AI Automation & Creative Design</title>
        <meta name="description" content="ANK's Gallery specializes in AI Automation, AI Consultation, Graphic Design, and Video Editing Services. Founded by Kennedy Asiedu Nyarko." />
        <meta name="keywords" content="AI Automation, AI Consultation, Graphic Design, Video Editing, AI agents, Kennedy Asiedu Nyarko" />
        <meta property="og:title" content="ANK's Gallery | AI Automation & Creative Design" />
        <meta property="og:description" content="Powering your vision with AI and creative design. AI Automation, AI Consultation, Graphic Design, and Video Editing Services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://anksgallery.com" />
      </Helmet>
      
      <MagneticCursor />
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
};

export default Index;
