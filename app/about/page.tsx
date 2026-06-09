"use client";

import { motion } from "framer-motion";
import { CheckCircle, Award, Heart, Shield, Sparkles, Smile } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="pt-24 min-h-screen bg-background">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-serif text-primary mb-6"
          >
            About Cura Dental
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-text max-w-2xl mx-auto text-lg"
          >
            Redefining the dental experience with a blend of advanced medical science and luxury hospitality.
          </motion.p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif mb-6 text-secondary">Our Mission</h2>
          <p className="text-xl md:text-2xl leading-relaxed font-light">
            "To provide world-class, pain-free dental care that empowers our patients with confidence, health, and a beautiful smile for life."
          </p>
        </div>
      </section>

      {/* Doctor Profile */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2 relative"
            >
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1964&auto=format&fit=crop" 
                  alt="Dr. Karthik Rajan" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2"
            >
              <h2 className="text-3xl md:text-5xl font-serif text-primary mb-2">Lead Specialist</h2>
              <h3 className="text-2xl text-secondary mb-6 font-medium">Dr. Karthik Rajan</h3>
              <div className="prose prose-lg text-text mb-8">
                <p className="mb-4">
                  Dr. Karthik Rajan is a visionary in modern cosmetic and restorative dentistry. With over 15 years of clinical experience, he has transformed thousands of smiles, helping patients regain their confidence and oral health.
                </p>
                <p>
                  He completed his specialized training in advanced implantology and aesthetic smile design from prestigious international institutions. Dr. Karthik believes that dentistry should be a pain-free, luxurious experience rather than a clinical chore.
                </p>
              </div>
              
              <h4 className="text-xl font-bold text-primary mb-4">Credentials & Affiliations</h4>
              <ul className="space-y-4 mb-10">
                {[
                  "BDS, MDS - Madras Dental College",
                  "Certified Invisalign Provider",
                  "Member of the Indian Dental Association",
                  "Specialist in Full Mouth Reconstruction",
                  "Fellowship in Advanced Implantology"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4 text-primary font-medium">
                    <div className="bg-secondary/10 p-1 rounded-full"><Award className="w-5 h-5 text-secondary flex-shrink-0" /></div>
                    {item}
                  </li>
                ))}
              </ul>
              
              <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Signature_of_John_Hancock.svg" alt="Signature" className="h-12 opacity-60 mix-blend-multiply" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif text-primary mb-4">Our Core Values</h2>
            <p className="text-text max-w-2xl mx-auto">These principles guide everything we do, from the moment you walk through our doors to your long-term oral health.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-primary/5 text-center">
              <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary mx-auto mb-6">
                <Heart className="w-7 h-7" />
              </div>
              <h4 className="text-lg font-bold text-primary mb-3">Compassion</h4>
              <p className="text-text text-sm">We treat every patient like family, prioritizing your comfort and peace of mind.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-primary/5 text-center">
              <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary mx-auto mb-6">
                <Sparkles className="w-7 h-7" />
              </div>
              <h4 className="text-lg font-bold text-primary mb-3">Excellence</h4>
              <p className="text-text text-sm">We are committed to delivering the highest standard of clinical and aesthetic results.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-primary/5 text-center">
              <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary mx-auto mb-6">
                <Shield className="w-7 h-7" />
              </div>
              <h4 className="text-lg font-bold text-primary mb-3">Integrity</h4>
              <p className="text-text text-sm">Transparent pricing, honest diagnoses, and treatments you truly need.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-primary/5 text-center">
              <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary mx-auto mb-6">
                <Smile className="w-7 h-7" />
              </div>
              <h4 className="text-lg font-bold text-primary mb-3">Innovation</h4>
              <p className="text-text text-sm">Constantly upgrading our technology and techniques for your benefit.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif text-primary mb-4">Meet the Team</h2>
            <p className="text-text max-w-2xl mx-auto">The dedicated professionals working behind the scenes to make your experience flawless.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="relative overflow-hidden rounded-[2rem] mb-6 aspect-[4/5]">
                <img src="https://images.unsplash.com/photo-1594824436998-d1f868c2fb9b?q=80&w=1964&auto=format&fit=crop" alt="Dr. Sarah" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-1">Dr. Sarah Jenkins</h3>
              <p className="text-secondary font-medium mb-3">Orthodontist</p>
              <p className="text-text text-sm px-4">Specializing in Invisalign and clear aligner therapies to craft perfect smiles.</p>
            </div>
            <div className="text-center group">
              <div className="relative overflow-hidden rounded-[2rem] mb-6 aspect-[4/5]">
                <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop" alt="Priya" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-1">Priya Sharma</h3>
              <p className="text-secondary font-medium mb-3">Lead Hygienist</p>
              <p className="text-text text-sm px-4">Passionate about preventative care and gentle, thorough cleanings.</p>
            </div>
            <div className="text-center group">
              <div className="relative overflow-hidden rounded-[2rem] mb-6 aspect-[4/5]">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop" alt="Elena" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-1">Elena Davis</h3>
              <p className="text-secondary font-medium mb-3">Patient Coordinator</p>
              <p className="text-text text-sm px-4">Your first point of contact, ensuring your visits and bookings are seamless.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
