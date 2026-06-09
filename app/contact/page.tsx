"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Mail, ShieldCheck, CreditCard, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  return (
    <div className="pt-24 min-h-screen bg-background">
      <section className="py-20 text-center px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-serif text-primary mb-6"
        >
          Contact Us
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
          className="text-text max-w-2xl mx-auto text-lg"
        >
          We're here to answer your questions and help you schedule your visit.
        </motion.p>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Form */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-serif text-primary mb-6">Send a Message</h2>
              <form 
                className="bg-white p-8 md:p-10 rounded-[2rem] shadow-xl border border-primary/5 flex flex-col gap-6"
                onSubmit={(e) => { e.preventDefault(); alert('Thank you! Your message has been sent.'); (e.target as HTMLFormElement).reset(); }}
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-primary mb-2">First Name</label>
                    <input type="text" required className="w-full px-4 py-3 rounded-xl border border-primary/10 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-primary mb-2">Last Name</label>
                    <input type="text" required className="w-full px-4 py-3 rounded-xl border border-primary/10 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-primary mb-2">Email Address</label>
                  <input type="email" required className="w-full px-4 py-3 rounded-xl border border-primary/10 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-primary mb-2">Phone Number</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-xl border border-primary/10 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all" placeholder="+91 98765 00000" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-primary mb-2">Message</label>
                  <textarea rows={4} required className="w-full px-4 py-3 rounded-xl border border-primary/10 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all" placeholder="How can we help you?"></textarea>
                </div>
                <button type="submit" className="w-full bg-primary text-white py-4 rounded-xl font-bold hover:bg-secondary transition-colors mt-2 shadow-lg hover:shadow-xl hover:-translate-y-1">
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Info */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="flex flex-col justify-center"
            >
              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-6">
                  <div className="bg-white p-4 rounded-2xl shadow-sm text-secondary border border-primary/5"><MapPin className="w-8 h-8" /></div>
                  <div>
                    <div className="font-bold text-primary text-xl mb-2">Location</div>
                    <div className="text-text text-sm md:text-base">45 Poes Garden, Teynampet<br/>Chennai, Tamil Nadu 600086</div>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="bg-white p-4 rounded-2xl shadow-sm text-secondary border border-primary/5"><Phone className="w-8 h-8" /></div>
                  <div>
                    <div className="font-bold text-primary text-xl mb-2">Phone</div>
                    <div className="text-text text-sm md:text-base">+91 98765 43210</div>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="bg-white p-4 rounded-2xl shadow-sm text-secondary border border-primary/5"><Mail className="w-8 h-8" /></div>
                  <div>
                    <div className="font-bold text-primary text-xl mb-2">Email</div>
                    <div className="text-text text-sm md:text-base">hello@curadental.in</div>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="bg-white p-4 rounded-2xl shadow-sm text-secondary border border-primary/5"><Clock className="w-8 h-8" /></div>
                  <div>
                    <div className="font-bold text-primary text-xl mb-2">Working Hours</div>
                    <div className="text-text text-sm md:text-base">Mon - Fri: 8:00 AM - 6:00 PM<br/>Saturday: 9:00 AM - 2:00 PM</div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="h-64 bg-gray-200 rounded-[2rem] overflow-hidden relative shadow-lg border-4 border-white group">
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop')] bg-cover bg-center">
                  <div className="absolute inset-0 bg-primary/20 backdrop-blur-sm group-hover:bg-primary/10 transition-colors"></div>
                  <div className="relative z-10 bg-white px-6 py-4 rounded-xl shadow-xl text-center hover:scale-105 transition-transform cursor-pointer">
                    <MapPin className="w-8 h-8 mx-auto mb-2 text-secondary" />
                    <div className="font-bold font-serif text-lg text-primary">Get Directions</div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Insurance & Payments */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif text-primary mb-4">Insurance & Payments</h2>
            <p className="text-text max-w-2xl mx-auto">We strive to make your premium dental care as accessible and hassle-free as possible.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-background p-8 rounded-3xl border border-primary/5 hover:shadow-lg transition-all">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-xl flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-primary">Insurance Providers</h3>
              </div>
              <p className="text-text mb-6">We are empaneled with major health insurance networks. Our front desk team handles all the paperwork to maximize your benefits.</p>
              <ul className="grid grid-cols-2 gap-3">
                {["HDFC ERGO", "Star Health", "ICICI Lombard", "Care Health", "Aditya Birla", "Bajaj Allianz"].map((prov, i) => (
                  <li key={i} className="flex items-center gap-2 text-primary font-medium text-sm">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div> {prov}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-background p-8 rounded-3xl border border-primary/5 hover:shadow-lg transition-all">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-xl flex items-center justify-center">
                  <CreditCard className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-primary">Payment Options</h3>
              </div>
              <p className="text-text mb-6">We offer completely transparent pricing with multiple convenient payment methods, including zero-interest EMI plans.</p>
              <div className="flex flex-wrap gap-3">
                {["Credit/Debit Cards", "UPI", "Bank Transfer", "Cash", "Bajaj Finserv EMI", "0% Interest Plans"].map((method, i) => (
                  <span key={i} className="px-4 py-2 bg-white rounded-full border border-primary/10 text-primary text-sm font-bold shadow-sm">{method}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking FAQ */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif text-primary mb-4">Booking FAQs</h2>
          </div>
          <FAQList />
        </div>
      </section>
    </div>
  );
}

function FAQList() {
  const faqs = [
    { q: "Do I need to book an appointment in advance?", a: "While we recommend booking in advance to secure your preferred time, we do accept walk-ins for dental emergencies." },
    { q: "What should I bring to my first appointment?", a: "Please bring any relevant dental or medical records, a list of your current medications, and your insurance card if applicable." },
    { q: "What is your cancellation policy?", a: "We ask that you provide at least 24 hours notice if you need to cancel or reschedule your appointment." },
    { q: "Do you offer online consultations?", a: "Yes, we offer brief preliminary online consultations via video call to discuss your concerns before an in-person visit." }
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {faqs.map((faq, idx) => (
        <div key={idx} className="bg-white border border-primary/5 rounded-2xl overflow-hidden transition-all duration-300 hover:border-secondary/30 shadow-sm">
          <button 
            onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
            className="w-full px-8 py-6 flex justify-between items-center text-left font-bold text-primary text-lg focus:outline-none"
          >
            <span>{faq.q}</span>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${openIdx === idx ? "bg-secondary text-white" : "bg-background text-secondary"}`}>
              <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openIdx === idx ? "rotate-180" : ""}`} />
            </div>
          </button>
          <div className={`px-8 overflow-hidden transition-all duration-300 ease-in-out ${openIdx === idx ? "max-h-60 pb-6 opacity-100" : "max-h-0 opacity-0"}`}>
            <p className="text-text leading-relaxed">{faq.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
