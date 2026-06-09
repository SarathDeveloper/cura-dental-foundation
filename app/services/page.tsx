"use client";

import { motion } from "framer-motion";
import { Shield, Star, Activity, CheckCircle, Award, Users, ArrowRight, Zap, Server, Banknote, CreditCard } from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    { title: "Dental Implants", desc: "Permanent, natural-looking replacement for missing teeth using advanced 3D planning. Our implants integrate flawlessly with your jawbone, providing the stability and aesthetics of natural teeth.", icon: Shield },
    { title: "Smile Makeover", desc: "Comprehensive cosmetic treatments to achieve your perfect, confident smile. Combining veneers, whitening, and alignment to craft a smile that perfectly suits your facial structure.", icon: Star },
    { title: "Teeth Whitening", desc: "Professional, safe, and effective teeth whitening for a dazzling bright smile. We use top-tier whitening agents that minimize sensitivity while maximizing results.", icon: Activity },
    { title: "Orthodontics", desc: "Clear aligners and modern braces for perfectly straight teeth at any age. Our discreet aligner solutions allow you to achieve a perfectly straight smile without the look of traditional metal braces.", icon: CheckCircle },
    { title: "Root Canal", desc: "Pain-free endodontic therapy using the latest microscopic technology. We ensure a comfortable experience while saving your natural tooth from extraction.", icon: Award },
    { title: "Pediatric Dentistry", desc: "Gentle, compassionate dental care tailored specifically for children. We focus on creating a positive, fear-free environment to establish lifelong healthy dental habits.", icon: Users },
  ];

  return (
    <div className="pt-24 min-h-screen bg-background">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2070&auto=format&fit=crop')] opacity-10 object-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-serif text-white mb-6"
          >
            Premium Dental Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/80 max-w-2xl mx-auto text-lg"
          >
            World-class treatments tailored to your unique smile, using the most advanced technology in a luxurious, relaxing environment.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm hover:shadow-2xl transition-all duration-500 border border-primary/5 flex flex-col md:flex-row gap-8 group"
              >
                <div className="flex-shrink-0 w-20 h-20 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                  <service.icon className="w-10 h-10" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-4">{service.title}</h3>
                  <p className="text-text leading-relaxed mb-6">{service.desc}</p>
                  <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="inline-flex items-center gap-2 text-secondary font-bold hover:text-primary transition-colors group/btn">
                    Book This Treatment <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-primary text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-serif mb-12">Our Treatment Approach</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="text-4xl font-serif text-secondary mb-4">01</div>
              <h3 className="text-xl font-bold mb-2">Consultation</h3>
              <p className="text-white/70">Comprehensive evaluation to understand your goals.</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-serif text-secondary mb-4">02</div>
              <h3 className="text-xl font-bold mb-2">Planning</h3>
              <p className="text-white/70">Customized treatment plan with transparent pricing.</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-serif text-secondary mb-4">03</div>
              <h3 className="text-xl font-bold mb-2">Execution</h3>
              <p className="text-white/70">Pain-free procedure with exceptional care.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Technology Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} className="text-3xl md:text-5xl font-serif text-primary mb-4">Advanced Technology</motion.h2>
            <motion.p initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:0.1}} className="text-text max-w-2xl mx-auto">We invest in the latest dental technology to ensure your treatments are precise, pain-free, and effective.</motion.p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background p-8 rounded-3xl border border-primary/5 text-center hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-secondary/10 text-secondary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Activity className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">3D Digital Scanning</h3>
              <p className="text-text">Say goodbye to messy impressions. Our digital scanners create highly accurate 3D models of your teeth in minutes.</p>
            </div>
            <div className="bg-background p-8 rounded-3xl border border-primary/5 text-center hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-secondary/10 text-secondary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Laser Dentistry</h3>
              <p className="text-text">Minimally invasive laser treatments for faster healing times, less discomfort, and improved surgical precision.</p>
            </div>
            <div className="bg-background p-8 rounded-3xl border border-primary/5 text-center hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-secondary/10 text-secondary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Server className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">CBCT Imaging</h3>
              <p className="text-text">Advanced cone beam CT scanning for precise implant placement planning and complex diagnostic needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Flexible Financing Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-[3rem] p-8 md:p-16 text-white text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop')] opacity-10 bg-cover bg-center"></div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-serif mb-6">Premium Care, Made Accessible</h2>
              <p className="text-white/80 mb-10 text-lg">We believe everyone deserves a world-class smile. That's why we offer transparent pricing and flexible payment plans to fit your budget.</p>
              <div className="flex flex-wrap justify-center gap-6 mb-10">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/20">
                  <Banknote className="w-5 h-5 text-secondary" /> No Hidden Fees
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/20">
                  <CreditCard className="w-5 h-5 text-secondary" /> EMI Options Available
                </div>
              </div>
              <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-secondary hover:text-white transition-colors shadow-xl">
                Discuss Financing Options
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
