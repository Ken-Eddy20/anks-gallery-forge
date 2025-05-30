import React, { useState } from "react";
import { motion } from "framer-motion";

// Hero SVG/animation placeholder
const HeroBrainSVG = () => (
  <svg width="320" height="120" viewBox="0 0 320 120" fill="none" className="mx-auto mb-6" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="160" cy="60" rx="80" ry="40" fill="url(#brainGradient)" filter="url(#glow)" />
    <defs>
      <radialGradient id="brainGradient" cx="0.5" cy="0.5" r="0.5" fx="0.5" fy="0.5">
        <stop offset="0%" stopColor="#a78bfa" />
        <stop offset="100%" stopColor="#38bdf8" />
      </radialGradient>
      <filter id="glow" x="-40%" y="-40%" width="180%" height="180%">
        <feGaussianBlur stdDeviation="12" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    {/* Brain connections */}
    <circle cx="100" cy="60" r="8" fill="#fff" opacity="0.7" />
    <circle cx="220" cy="60" r="8" fill="#fff" opacity="0.7" />
    <circle cx="160" cy="40" r="6" fill="#fff" opacity="0.7" />
    <circle cx="160" cy="80" r="6" fill="#fff" opacity="0.7" />
    <path d="M100 60 Q130 30 160 40 Q190 50 220 60" stroke="#38bdf8" strokeWidth="2" fill="none" />
    <path d="M100 60 Q130 90 160 80 Q190 70 220 60" stroke="#a78bfa" strokeWidth="2" fill="none" />
    {/* Business tools icons (placeholders) */}
    <rect x="60" y="100" width="32" height="16" rx="8" fill="#38bdf8" />
    <rect x="228" y="100" width="32" height="16" rx="8" fill="#a78bfa" />
    <rect x="144" y="4" width="32" height="16" rx="8" fill="#f472b6" />
  </svg>
);

const explainerSteps = [
  { icon: "🧠", label: "Think" },
  { icon: "🔍", label: "Analyze" },
  { icon: "⚙", label: "Recommend" },
  { icon: "🚀", label: "Implement" },
];

const demoCards = [
  { title: "Chatbots for Customer Service" },
  { title: "AI Analytics for Sales Forecasting" },
  { title: "Workflow Automation" },
  { title: "AI Content Creation & Marketing Tools" },
];

const statCards = [
  { icon: "📉", stat: "70%", desc: "of businesses lose hours to manual tasks" },
  { icon: "💡", stat: "85%", desc: "of top companies are already using AI" },
  { icon: "📈", stat: "20+", desc: "hours saved per employee/month" },
];

const processSteps = [
  {
    title: "Discovery & Diagnosis",
    desc: "We analyze your workflows, bottlenecks, and opportunities.",
    icon: "📋",
  },
  {
    title: "Tool Recommendation",
    desc: "We match your needs with top AI tools or build custom solutions.",
    icon: "🛠️",
  },
  {
    title: "Integration Planning",
    desc: "We create a roadmap to smoothly integrate AI without disrupting your team.",
    icon: "🗺️",
  },
  {
    title: "Deployment & Training",
    desc: "We implement, test, and train your team to work alongside AI.",
    icon: "🤝",
  },
  {
    title: "Ongoing Support & Scaling",
    desc: "We monitor results, adjust workflows, and scale your AI power.",
    icon: "📊",
  },
];

const beforeAfter = [
  {
    title: "Before AI Integration",
    points: [
      "Manual, repetitive tasks",
      "Slow workflows",
      "Missed opportunities",
      "Delayed reports",
    ],
    style: "from-gray-700 via-gray-800 to-gray-900",
  },
  {
    title: "After AI Integration",
    points: [
      "Automated reports",
      "Instant replies",
      "AI insights",
      "Faster growth",
    ],
    style: "from-blue-700 via-purple-700 to-teal-400",
  },
];

const caseStudies = [
  {
    business: "eCommerce Store",
    what: "Automated product descriptions using AI",
    tools: ["ChatGPT", "Zapier"],
    result: "Saved 12+ hours/week",
  },
  {
    business: "Legal Firm",
    what: "AI-powered document review",
    tools: ["Make", "Airtable"],
    result: "Increased accuracy by 30%",
  },
  {
    business: "Marketing Agency",
    what: "AI content creation for campaigns",
    tools: ["Notion AI", "Custom Bots"],
    result: "Doubled campaign output",
  },
];

const faqs = [
  { q: "Do I need technical skills?", a: "No, we handle the tech so you can focus on your business." },
  { q: "Will AI replace my team?", a: "No, it enhances your team's capabilities and productivity." },
  { q: "How soon can I see results?", a: "Most clients see improvements within weeks of integration." },
  { q: "Is it expensive?", a: "Usually not. We help you choose free or low-cost tools." },
];

const PortfolioAIIntegrationStrategy: React.FC = () => {
  const [beforeAfterIndex, setBeforeAfterIndex] = useState(0);
  return (
    <div className="bg-gradient-to-b from-[#18122B] via-[#251B3E] to-[#18122B] min-h-screen text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="pt-36 pb-20 px-4 text-center relative overflow-hidden">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl mx-auto z-10 relative">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">Start Your AI Transformation Today</h1>
          <p className="text-lg md:text-xl text-purple-200 mb-8">We help you harness AI to improve workflows, save time, and grow faster.</p>
          <HeroBrainSVG />
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-4">
            <a href="#consultation-explainer" className="btn btn-primary text-lg">Get Free AI Consultation</a>
            <a href="#process" className="btn btn-secondary text-lg">See What's Possible</a>
          </div>
        </motion.div>
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-700 opacity-30 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-teal-400 opacity-20 rounded-full blur-3xl animate-pulse-slow"></div>
      </section>

      {/* What Is AI Consultation? */}
      <section id="consultation-explainer" className="py-20 px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-purple-300">What Is AI Consultation?</h2>
        <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-lg text-purple-100 text-center max-w-2xl mx-auto mb-8">
          AI consultation is the process of analyzing your business processes and recommending AI-powered tools to boost performance.
        </motion.p>
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {explainerSteps.map((step, idx) => (
            <motion.div key={step.label} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }} className="bg-gradient-to-br from-[#20143a] via-[#18122B] to-[#18122B] rounded-xl px-6 py-4 flex flex-col items-center shadow-lg text-center">
              <span className="text-3xl mb-2 animate-pulse-slow">{step.icon}</span>
              <span className="font-semibold text-white text-lg">{step.label}</span>
            </motion.div>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {demoCards.map((card, idx) => (
            <motion.div key={card.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }} className="bg-[#221a3a] rounded-xl p-6 flex flex-col items-center shadow-md text-center hover:scale-105 transition-transform">
              <span className="text-purple-200 font-semibold text-lg mb-2">{card.title}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why AI Consultation Is Critical Now */}
      <section className="py-20 px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-purple-300">You're Losing Time & Money Without AI</h2>
        <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto mb-8">
          {statCards.map((card, idx) => (
            <motion.div key={card.stat} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }} className="bg-gradient-to-br from-[#20143a] via-[#18122B] to-[#18122B] rounded-xl p-8 min-w-[220px] flex flex-col items-center shadow-lg text-center">
              <span className="text-4xl mb-3 animate-pulse-slow">{card.icon}</span>
              <span className="font-bold text-3xl text-white mb-1">{card.stat}</span>
              <span className="text-purple-100 text-sm">{card.desc}</span>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center">
          <a href="#process" className="btn btn-primary text-lg">Don't fall behind. Let's integrate AI into your system.</a>
        </motion.div>
      </section>

      {/* Our AI Consultation Process */}
      <section id="process" className="py-20 px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-purple-300">Our AI Consultation Process</h2>
        <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
          {processSteps.map((step, idx) => (
            <motion.div key={step.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }} className="bg-[#221a3a] rounded-xl p-8 flex flex-col items-center shadow-lg text-center min-w-[220px] hover:scale-105 transition-transform">
              <span className="text-3xl mb-3 animate-pulse-slow">{step.icon}</span>
              <span className="font-bold text-lg text-white mb-1">{step.title}</span>
              <span className="text-purple-100 text-sm">{step.desc}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Before vs. After AI Integration */}
      <section className="py-20 px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-purple-300">Before vs. After AI Integration</h2>
        <div className="flex flex-col md:flex-row gap-8 max-w-4xl mx-auto justify-center items-stretch">
          {beforeAfter.map((side, idx) => (
            <motion.div key={side.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }} className={`bg-gradient-to-br ${side.style} rounded-xl p-8 flex-1 flex flex-col items-center shadow-lg text-center min-w-[220px] hover:scale-105 transition-transform`}>
              <span className="font-bold text-lg text-white mb-3">{side.title}</span>
              <ul className="text-purple-100 text-sm space-y-2">
                {side.points.map((pt) => <li key={pt}>{pt}</li>)}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Success Stories & Case Studies */}
      <section className="py-20 px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-purple-300">Success Stories & Case Studies</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {caseStudies.map((cs, idx) => (
            <motion.div key={cs.business} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }} className="bg-[#221a3a] rounded-xl p-8 flex flex-col items-center shadow-lg text-center hover:scale-105 transition-transform">
              <span className="font-bold text-lg text-white mb-1">{cs.business}</span>
              <span className="text-purple-200 text-sm mb-2">{cs.what}</span>
              <span className="text-xs text-purple-400 mb-2">Tools: {cs.tools.join(", ")}</span>
              <span className="text-green-400 font-semibold text-sm">{cs.result}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Book a Free Consultation – Hard CTA */}
      <section className="py-20 px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <h2 className="text-3xl font-bold mb-6 text-purple-200">Ready to Automate Your Growth?</h2>
          <p className="text-lg text-purple-100 mb-6">Book a free 20-min consultation to explore what AI can do for you.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="/contact" className="btn btn-primary text-lg transition-transform hover:scale-105">Get Started</a>
            <a href="/contact" className="btn btn-secondary text-lg transition-transform hover:scale-105">Book Now</a>
          </div>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-purple-300">FAQ</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.details key={faq.q} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }} className="bg-[#221a3a] rounded-xl p-6 shadow-md text-center group">
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
          <span>Download our free guide: <a href="#" className="underline text-blue-400">5 Ways AI Can Save You 10+ Hours Every Week</a></span>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioAIIntegrationStrategy; 