import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  { icon: "🎞️", title: "YouTube Video Editing" },
  { icon: "📢", title: "Ads & Promo Reels" },
  { icon: "📱", title: "Social Media Shorts / Reels" },
  { icon: "🎥", title: "Event Highlights" },
  { icon: "🧠", title: "AI-Powered Editing" },
  { icon: "💼", title: "Corporate & Training Videos" },
  { icon: "🧩", title: "Motion Graphics + VFX" },
];

const portfolioVideos = [
  {
    name: "Product Promo for Skincare Brand",
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    tools: ["Premiere Pro", "After Effects", "AI tools"],
    tag: "Ad / Promo",
    before: "https://www.w3schools.com/html/movie.mp4",
    after: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    name: "YouTube Vlog Transformation",
    src: "https://www.w3schools.com/html/movie.mp4",
    tools: ["DaVinci Resolve", "CapCut"],
    tag: "YouTube / Reels",
    before: "https://www.w3schools.com/html/movie.mp4",
    after: "https://www.w3schools.com/html/movie.mp4",
  },
  {
    name: "Event Highlights Reel",
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    tools: ["Premiere Pro", "After Effects"],
    tag: "Event / Motion GFX",
    before: "https://www.w3schools.com/html/movie.mp4",
    after: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
];

const benefits = [
  { icon: "🎯", title: "Fast Turnarounds" },
  { icon: "📊", title: "Story-driven Edits" },
  { icon: "🖌️", title: "High-End Transitions" },
  { icon: "🎼", title: "Sound Design & Music Syncing" },
  { icon: "🧠", title: "AI Subtitling + Cleanup" },
  { icon: "🌎", title: "For Creators, Brands & Agencies" },
];

const process = [
  { step: 1, title: "You send footage" },
  { step: 2, title: "We analyze & script your video flow" },
  { step: 3, title: "We edit with transitions, music, and effects" },
  { step: 4, title: "You review – 2 free revisions" },
  { step: 5, title: "Final delivery in HD/4K, ready to post" },
];

const testimonials = [
  { quote: "ANK's Gallery made my YouTube look like Netflix!", name: "Maya Influencer" },
  { quote: "They turned our raw wedding footage into a movie.", name: "The Adeyemis" },
];

const tools = ["Premiere Pro", "After Effects", "DaVinci Resolve", "CapCut", "AI tools"];

const PortfolioProductShowcaseVideo: React.FC = () => {
  const [showBeforeAfter, setShowBeforeAfter] = useState(false);
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  return (
    <div className="bg-gradient-to-b from-[#18122B] via-[#251B3E] to-[#18122B] min-h-screen text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex flex-col justify-center items-center text-center overflow-hidden">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="z-10 relative px-4 pt-36 pb-20 w-full max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent glitch">We Turn Clips Into Cinematic Stories.</h1>
          <p className="text-lg md:text-xl text-purple-200 mb-8">Whether you're a brand, influencer, or business, we bring your video vision to life—frame by frame.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-4">
            <a href="#portfolio-videos" className="btn btn-primary text-lg">🎥 Watch Showreel</a>
            <a href="/contact" className="btn btn-secondary text-lg">📝 Request a Quote</a>
          </div>
        </motion.div>
        {/* Video background or animated glitch effect */}
        <video className="absolute inset-0 w-full h-full object-cover opacity-70 z-0" autoPlay loop muted playsInline>
          <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#18122B]/80 to-[#251B3E]/90 z-0" />
      </section>

      {/* Services We Offer */}
      <section className="py-20 px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-purple-300">Services We Offer</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {services.map((s, idx) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }} className="bg-gradient-to-br from-[#20143a] via-[#18122B] to-[#18122B] rounded-xl p-8 flex flex-col items-center shadow-lg text-center hover:scale-105 transition-transform">
              <span className="text-3xl mb-3 animate-pulse-slow">{s.icon}</span>
              <span className="font-bold text-lg text-white mb-1">{s.title}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-purple-300">Why Work With Us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((b, idx) => (
            <motion.div key={b.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }} className="bg-gradient-to-br from-[#20143a] via-[#18122B] to-[#18122B] rounded-xl p-8 flex flex-col items-center shadow-lg text-center hover:scale-105 transition-transform">
              <span className="text-3xl mb-3 animate-pulse-slow">{b.icon}</span>
              <span className="font-bold text-lg text-white mb-1">{b.title}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-purple-300">How It Works</h2>
        <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
          {process.map((step, idx) => (
            <motion.div key={step.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }} className="bg-gradient-to-br from-[#20143a] via-[#18122B] to-[#18122B] rounded-xl p-8 flex flex-col items-center shadow-lg text-center min-w-[220px] hover:scale-105 transition-transform">
              <span className="text-2xl mb-3 animate-pulse-slow">Step {step.step}</span>
              <span className="font-bold text-lg text-white mb-1">{step.title}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-purple-300">Client Testimonials</h2>
        <div className="flex flex-col md:flex-row gap-8 max-w-4xl mx-auto justify-center items-center">
          {testimonials.map((t, idx) => (
            <motion.div key={t.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }} className="bg-[#20143a] rounded-xl p-8 flex flex-col items-center shadow-md text-center min-w-[280px]">
              <p className="italic text-purple-100 mb-2 text-center">"{t.quote}"</p>
              <span className="font-semibold text-purple-200 text-center">{t.name}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <h2 className="text-3xl font-bold mb-6 text-purple-200">Let's Bring Your Vision to Life.</h2>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="/contact" className="btn btn-primary text-lg transition-transform hover:scale-105">📥 Upload Footage</a>
            <a href="/contact" className="btn btn-secondary text-lg transition-transform hover:scale-105">🗓️ Book a Consultation</a>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-4 text-center text-purple-200 bg-[#18122B] border-t border-purple-900/40 mt-10">
        <div className="mb-2">&copy; {new Date().getFullYear()} Anks Gallery. All rights reserved.</div>
        <div className="flex flex-wrap justify-center gap-4 text-sm mb-2">
          <a href="https://youtube.com" className="hover:underline">YouTube</a>
          <a href="https://instagram.com" className="hover:underline">Instagram</a>
          <a href="https://vimeo.com" className="hover:underline">Vimeo</a>
          <a href="mailto:hello@anksgallery.com" className="hover:underline">Email</a>
        </div>
        <div className="mt-2">
          <span>Tools: {tools.join(", ")}</span>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioProductShowcaseVideo; 