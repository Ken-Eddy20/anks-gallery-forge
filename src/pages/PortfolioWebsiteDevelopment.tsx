import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    name: "E-Commerce Store",
    type: "No-Code",
    tech: ["Webflow", "Zapier"],
    image: "/website-development.jpg",
    link: "#",
    summary: "A fast, scalable online store built with Webflow and automated workflows.",
  },
  {
    name: "SaaS Dashboard",
    type: "Custom Code",
    tech: ["React", "Tailwind", "Node.js"],
    image: "/ai-corporate-assistant.png",
    link: "#",
    summary: "A fully custom dashboard for a SaaS product, coded from scratch for performance.",
  },
  {
    name: "Portfolio Site",
    type: "No-Code",
    tech: ["Framer", "WordPress"],
    image: "/brochure-design.jpg",
    link: "#",
    summary: "A creative portfolio site editable by the client, built with Framer and WordPress.",
  },
  {
    name: "Web App",
    type: "Custom Code",
    tech: ["React", "GSAP"],
    image: "/ai-automation.png",
    link: "https://bloom-well-mamas.lovable.app/",
    summary: "A real-world wellness web app built with React and GSAP, featuring smooth animations, user accounts, and interactive features. View the live site for a full experience.",
  },
];

const filters = ["All", "No-Code", "Custom Code", "Landing Pages", "Web Apps"];

const reasons = [
  { icon: "🎨", title: "Custom Designs", desc: "Figma to Web" },
  { icon: "⚡", title: "Super Fast Load Times", desc: "Optimized for speed" },
  { icon: "🔒", title: "SEO & Security", desc: "Best practices built-in" },
  { icon: "📱", title: "Mobile Optimization", desc: "Responsive on all devices" },
  { icon: "🔁", title: "Editable CMS", desc: "Easy updates for your team" },
  { icon: "🧠", title: "Smart Integrations", desc: "AI chat, booking, automations" },
];

const processSteps = [
  { icon: "🔍", title: "Discovery & Design" },
  { icon: "🧱", title: "Decide No-Code or Manual" },
  { icon: "💻", title: "Build & Test" },
  { icon: "🚀", title: "Launch & Handoff" },
  { icon: "🔧", title: "Maintenance & Optimization" },
];

const packages = [
  { name: "Starter (No-Code)", price: "$250+", features: ["1–3 Pages", "Basic Animations", "CMS + SEO", "Ideal for portfolios"] },
  { name: "Pro (Hybrid)", price: "$500+", features: ["Up to 6 Pages", "Custom animations", "CMS + Blog", "Basic integrations"] },
  { name: "Custom (Manual)", price: "$1000+", features: ["Unlimited pages", "Full stack dev", "Web app capability", "Integrations + automation"] },
];

const testimonials = [
  { quote: "ANK's Gallery built our site with Webflow in under 10 days—and it looks stunning!", name: "Jane Doe" },
  { quote: "They coded our product dashboard from scratch. It's fast, responsive, and scalable.", name: "John Smith" },
];

const PortfolioWebsiteDevelopment: React.FC = () => {
  const [dark, setDark] = useState(true);
  const [filter, setFilter] = useState("All");
  const filteredProjects = filter === "All" ? projects : projects.filter(p => p.type === filter || p.name.includes(filter) || p.type === filter.replace(" ", ""));

  return (
    <div className={dark ? "bg-[#18122B] text-white" : "bg-white text-[#18122B]"}>
      {/* Toggle */}
      <div className="fixed top-6 right-6 z-50">
        <button onClick={() => setDark(d => !d)} className="rounded-full p-2 shadow-lg border border-purple-400 bg-gradient-to-br from-purple-700 to-purple-400 text-white hover:scale-110 transition-transform">
          {dark ? "🌙" : "☀️"}
        </button>
      </div>
      {/* Hero */}
      <section className="pt-36 pb-20 px-4 text-center relative overflow-hidden">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl mx-auto z-10 relative">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-purple-500 to-purple-700 bg-clip-text text-transparent">Stunning Websites. Built With & Without Code.</h1>
          <p className="text-lg md:text-xl text-purple-200 mb-8">We create clean, fast, and conversion-driven websites using both no-code tools and custom code—whichever your brand needs.</p>
          <div className="w-full flex justify-center mb-8">
            <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ repeat: Infinity, duration: 2 }} className="rounded-2xl bg-gradient-to-br from-purple-700 via-purple-500 to-purple-400 p-4 shadow-2xl">
              <span className="text-2xl text-white">{`<Code /> → 🖥️`}</span>
            </motion.div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-4">
            <a href="#projects" className="btn btn-primary text-lg">See Our Projects</a>
            <a href="/contact" className="btn btn-secondary text-lg">Get a Quote</a>
          </div>
        </motion.div>
      </section>
      {/* What We Do */}
      <section className="py-20 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="bg-gradient-to-br from-[#20143a] via-[#18122B] to-[#18122B] rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-4">🧱 No-Code Website Development</h2>
            <ul className="text-purple-100 mb-2 space-y-1">
              <li>Tools: Webflow, Framer, WordPress, Editor X</li>
              <li>Fast, scalable, editable by client</li>
              <li>Ideal for portfolios, marketing sites, landing pages</li>
              <li>Benefits: Speed, affordability, easy handover</li>
            </ul>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="bg-gradient-to-br from-[#20143a] via-[#18122B] to-[#18122B] rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-4">👨‍💻 Manual Coding & Custom Builds</h2>
            <ul className="text-purple-100 mb-2 space-y-1">
              <li>Tools: HTML, CSS, JavaScript, React, Tailwind, GSAP</li>
              <li>Fully custom UI/UX</li>
              <li>Ideal for web apps, SaaS, tech products, special integrations</li>
              <li>Benefits: Full control, flexibility, tailored solutions</li>
            </ul>
          </motion.div>
        </div>
      </section>
      {/* Why Choose Us */}
      <section className="py-20 px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-purple-300">Why Choose Us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reasons.map((r, idx) => (
            <motion.div key={r.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }} className="bg-[#221a3a] rounded-xl p-8 flex flex-col items-center shadow-lg text-center hover:scale-105 transition-transform">
              <span className="text-3xl mb-3 animate-pulse-slow">{r.icon}</span>
              <span className="font-bold text-lg text-white mb-1">{r.title}</span>
              <span className="text-purple-100 text-sm">{r.desc}</span>
            </motion.div>
          ))}
        </div>
      </section>
      {/* Our Process */}
      <section className="py-20 px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-purple-300">Our Process</h2>
        <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
          {processSteps.map((step, idx) => (
            <motion.div key={step.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }} className="bg-gradient-to-br from-[#20143a] via-[#18122B] to-[#18122B] rounded-xl p-8 flex flex-col items-center shadow-lg text-center min-w-[220px] hover:scale-105 transition-transform">
              <span className="text-3xl mb-3 animate-pulse-slow">{step.icon}</span>
              <span className="font-bold text-lg text-white mb-1">{step.title}</span>
            </motion.div>
          ))}
        </div>
      </section>
      {/* Testimonials */}
      <section className="py-20 px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-purple-300">Testimonials</h2>
        <div className="flex flex-col md:flex-row gap-8 max-w-4xl mx-auto justify-center items-center">
          {testimonials.map((t, idx) => (
            <motion.div key={t.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }} className="bg-[#221a3a] rounded-xl p-8 flex flex-col items-center shadow-md text-center min-w-[280px]">
              <p className="italic text-purple-100 mb-2 text-center">"{t.quote}"</p>
              <span className="font-semibold text-purple-200 text-center">{t.name}</span>
            </motion.div>
          ))}
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <h2 className="text-3xl font-bold mb-6 text-purple-200">Whether it's a landing page or a full web app, we've got you covered.</h2>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="/contact" className="btn btn-primary text-lg transition-transform hover:scale-105">Start My Project</a>
            <a href="/contact" className="btn btn-secondary text-lg transition-transform hover:scale-105">Get a Free Website Audit</a>
          </div>
        </motion.div>
      </section>
      {/* Footer */}
      <footer className="py-10 px-4 text-center text-purple-200 bg-[#18122B] border-t border-purple-900/40 mt-10">
        <div className="mb-2">&copy; {new Date().getFullYear()} Anks Gallery. All rights reserved.</div>
        <div className="flex flex-wrap justify-center gap-4 text-sm mb-2">
          <a href="/about" className="hover:underline">About</a>
          <a href="/services" className="hover:underline">Services</a>
          <a href="/portfolio" className="hover:underline">Portfolio</a>
          <a href="/contact" className="hover:underline">Contact</a>
        </div>
        <div className="mt-2">
          <span>Download our portfolio: <a href="#" className="underline text-blue-400">PDF</a></span>
          <span className="ml-4">{dark ? "🌙" : "☀️"} <button onClick={() => setDark(d => !d)} className="ml-2 underline">Toggle Mode</button></span>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioWebsiteDevelopment; 