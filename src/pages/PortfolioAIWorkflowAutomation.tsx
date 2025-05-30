import React from "react";
import { motion } from "framer-motion";

// SVG/animated icon placeholders for hero and steps
const HeroFlowSVG = () => (
  <svg width="320" height="80" viewBox="0 0 320 80" fill="none" className="mx-auto mb-6" xmlns="http://www.w3.org/2000/svg">
    <circle cx="40" cy="40" r="24" fill="#a78bfa"/>
    <rect x="80" y="28" width="48" height="24" rx="12" fill="#38bdf8"/>
    <rect x="148" y="28" width="48" height="24" rx="12" fill="#f472b6"/>
    <rect x="216" y="28" width="48" height="24" rx="12" fill="#818cf8"/>
    <rect x="284" y="28" width="24" height="24" rx="12" fill="#fbbf24"/>
    <path d="M64 40h16" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>
    <path d="M128 40h20" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>
    <path d="M196 40h20" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>
    <path d="M264 40h20" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>
  </svg>
);

const stepIcons = [
  <svg key="1" width="48" height="48" viewBox="0 0 48 48" fill="none"><rect x="8" y="20" width="32" height="16" rx="8" fill="#38bdf8"/><circle cx="24" cy="16" r="8" fill="#a78bfa"/></svg>,
  <svg key="2" width="48" height="48" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="20" fill="#818cf8"/><g><rect x="20" y="12" width="8" height="24" rx="4" fill="#fff"/><rect x="12" y="20" width="24" height="8" rx="4" fill="#fff"/></g></svg>,
  <svg key="3" width="48" height="48" viewBox="0 0 48 48" fill="none"><rect x="8" y="8" width="32" height="32" rx="8" fill="#f472b6"/><path d="M16 24h16" stroke="#fff" strokeWidth="3" strokeLinecap="round"/></svg>,
  <svg key="4" width="48" height="48" viewBox="0 0 48 48" fill="none"><rect x="12" y="12" width="24" height="24" rx="12" fill="#fbbf24"/><path d="M24 18v12M18 24h12" stroke="#fff" strokeWidth="3" strokeLinecap="round"/></svg>
];

const steps = [
  {
    title: "Input Capturing",
    desc: "We gather data from web forms, chats, or voice assistants.",
    icon: stepIcons[0],
  },
  {
    title: "Smart Processing",
    desc: "Our AI interprets data, analyzes intent, and activates workflows.",
    icon: stepIcons[1],
  },
  {
    title: "Task Automation",
    desc: "AI triggers emails, updates CRMs, sends invoices, and notifies your team—instantly.",
    icon: stepIcons[2],
  },
  {
    title: "Insight & Reporting",
    desc: "Get real-time dashboards and analytics from your automation pipeline.",
    icon: stepIcons[3],
  },
];

const whyCards = [
  { icon: "⏱", title: "Save Time", desc: "80% faster processes" },
  { icon: "💰", title: "Cut Costs", desc: "Reduce manual labor" },
  { icon: "🤖", title: "Reduce Errors", desc: "AI accuracy" },
  { icon: "📈", title: "Scale Operations", desc: "Handle more with less" },
  { icon: "🧠", title: "Make Smarter Decisions", desc: "Data-driven actions" },
];

const projects = [
  {
    image: "/ai-automation.png",
    title: "Automated Client Onboarding for Law Firm",
    desc: "Integrated chatbots, e-signature, and CRM updates. Saved 40+ hours/month.",
  },
  {
    image: "/ai-corporate-assistant.png",
    title: "Corporate AI Assistant",
    desc: "Automated scheduling, reminders, and reporting for executives.",
  },
  {
    image: "/ai-consultation.png",
    title: "AI Consultation Workflow",
    desc: "Streamlined lead capture, qualification, and follow-up.",
  },
];

const testimonials = [
  {
    name: "Sarah Lee",
    business: "Acme Law Group",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    quote: "Our onboarding is now seamless and 80% faster. The automation is a game changer!",
    result: "Saved 40+ hours/month",
  },
  {
    name: "David Kim",
    business: "TechNova Inc.",
    image: "https://randomuser.me/api/portraits/men/43.jpg",
    quote: "We cut manual work in half and our team can focus on what matters.",
    result: "50% less manual work",
  },
];

const faqs = [
  {
    q: "What is AI automation?",
    a: "AI automation uses artificial intelligence to perform repetitive tasks, make decisions, and streamline workflows without human intervention.",
  },
  {
    q: "How do I know what to automate?",
    a: "We help you identify processes that are repetitive, time-consuming, and rule-based—these are ideal for automation.",
  },
  {
    q: "Will it replace my staff?",
    a: "AI automation is designed to augment your team, not replace them. It frees up time for higher-value work.",
  },
  {
    q: "How long does setup take?",
    a: "Most automations can be set up in a few weeks, depending on complexity.",
  },
];

const PortfolioAIWorkflowAutomation: React.FC = () => (
  <div className="bg-gradient-to-b from-[#18122B] via-[#251B3E] to-[#18122B] min-h-screen text-white overflow-x-hidden">
    {/* Hero Section */}
    <section className="pt-36 pb-20 px-4 text-center relative overflow-hidden">
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl mx-auto z-10 relative">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 bg-clip-text text-transparent">Revolutionize Your Workflow with AI Automation</h1>
        <p className="text-lg md:text-xl text-purple-200 mb-8">Discover how smart automation transforms business operations, cuts costs, and boosts efficiency.</p>
        <HeroFlowSVG />
        <div className="flex flex-col md:flex-row gap-4 justify-center mb-4">
          <a href="#how-it-works" className="btn btn-primary text-lg">See How It Works</a>
          <a href="/contact" className="btn btn-secondary text-lg">Request a Free Demo</a>
        </div>
      </motion.div>
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-700 opacity-30 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-pink-500 opacity-20 rounded-full blur-3xl animate-pulse-slow"></div>
    </section>

    {/* How AI Automation Works */}
    <section id="how-it-works" className="py-20 px-4">
      <h2 className="text-3xl font-bold text-center mb-12 text-purple-300">How AI Automation Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {steps.map((step, idx) => (
          <motion.div
            key={step.title}
            className="bg-[#221a3a] rounded-2xl shadow-lg p-6 flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
          >
            <div className="mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-purple-200">{step.title}</h3>
            <p className="text-sm text-gray-300">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Why Businesses Need AI Automation */}
    <section className="py-20 px-4">
      <h2 className="text-3xl font-bold text-center mb-12 text-purple-300">Why Your Business Needs Automation Now</h2>
      <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
        {whyCards.map((card, idx) => (
          <motion.div
            key={card.title}
            className="bg-gradient-to-br from-[#20143a] via-[#18122B] to-[#18122B] rounded-xl p-8 min-w-[220px] flex flex-col items-center shadow-lg text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <span className="text-4xl mb-3 animate-pulse-slow">{card.icon}</span>
            <span className="font-bold text-lg text-white mb-1">{card.title}</span>
            <span className="text-purple-200 text-sm">{card.desc}</span>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Testimonial Carousel */}
    <section className="py-20 px-4">
      <h2 className="text-3xl font-bold text-center mb-12 text-purple-300">Client Testimonials</h2>
      <div className="flex flex-col md:flex-row gap-8 max-w-4xl mx-auto justify-center items-center">
        {testimonials.map((t, idx) => (
          <motion.div
            key={t.name}
            className="bg-[#221a3a] rounded-xl p-8 flex flex-col items-center shadow-md text-center min-w-[280px]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <img src={t.image} alt={t.name} className="w-16 h-16 rounded-full mb-3 border-2 border-purple-500 mx-auto" />
            <p className="italic text-purple-100 mb-2 text-center">“{t.quote}”</p>
            <span className="text-sm text-purple-300 mb-1">{t.result}</span>
            <span className="font-semibold text-purple-200 text-center">{t.name} <span className="text-xs text-gray-400">({t.business})</span></span>
          </motion.div>
        ))}
      </div>
    </section>

    {/* CTA Section */}
    <section className="py-20 px-4 text-center">
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.7 }}>
        <h2 className="text-3xl font-bold mb-6 text-purple-200">Let's Automate Your Business. Book a Free Consultation Today.</h2>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a href="/contact" className="btn btn-primary text-lg transition-transform hover:scale-105">Book Now</a>
          <a href="#" className="btn btn-secondary text-lg transition-transform hover:scale-105">Watch Video Case Study</a>
        </div>
      </motion.div>
    </section>

    {/* FAQ Section */}
    <section className="py-20 px-4 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12 text-purple-300">FAQ</h2>
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <motion.details
            key={faq.q}
            className="bg-[#221a3a] rounded-xl p-6 shadow-md text-center group"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <summary className="font-semibold text-lg text-purple-200 cursor-pointer focus:outline-none group-open:text-blue-400 transition-colors">{faq.q}</summary>
            <p className="text-purple-100 mt-2 text-center">{faq.a}</p>
          </motion.details>
        ))}
      </div>
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
        <span>Subscribe to our newsletter for updates.</span>
        <form className="mt-2 flex flex-col sm:flex-row gap-2 justify-center items-center">
          <input type="email" placeholder="Your email" className="px-3 py-2 rounded bg-[#251B3E] text-white border border-purple-700 focus:outline-none" />
          <button type="submit" className="btn btn-primary">Subscribe</button>
        </form>
      </div>
    </footer>
  </div>
);

export default PortfolioAIWorkflowAutomation; 