/* eslint-disable @next/next/no-img-element */
"use client";

import { motion, type Variants } from "framer-motion";
import { 
  ArrowRight, Star, CheckCircle, Clock, MapPin, Phone, 
  Activity, Shield, Award, Users, ChevronDown, Mail, Menu, X, MessageCircle, PhoneCall, Calendar
} from "lucide-react";
import { useState } from "react";

// Animation Variants
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};
const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col selection:bg-secondary selection:text-white">
      <Navbar />
      <FloatingCTAs />
      <main className="flex-grow">
        <HeroSection />
        <TrustBar />
        <ServicesSection />
        <DoctorSpotlight />
        <PatientJourney />
        <BeforeAfterSection />
        <WhyChooseUs />
        <ClinicGallery />
        <Testimonials />
        <FAQSection />
        <ConsultationCTA />
        <ContactFormSection />
        <LocationSection />
      </main>
      <Footer />
    </div>
  );
}

function FloatingCTAs() {
  return (
    <div className="flex flex-col gap-4 fixed right-4 bottom-4 md:right-6 md:bottom-6 z-50 items-end">
      <button onClick={() => alert('Opening WhatsApp chat with Cura Dental...')} className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform hover:shadow-[#25D366]/50">
        <MessageCircle className="w-6 h-6" />
      </button>
      <button onClick={() => alert('Initiating phone call to +91 98765 43210...')} className="w-14 h-14 bg-secondary text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform hover:shadow-secondary/50">
        <PhoneCall className="w-6 h-6" />
      </button>
      <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="bg-primary text-white w-14 h-14 sm:w-auto sm:px-6 sm:py-4 rounded-full flex items-center justify-center gap-2 font-bold shadow-2xl hover:scale-105 transition-transform hover:shadow-primary/50">
        <Calendar className="w-6 h-6 sm:w-5 sm:h-5" /> <span className="hidden sm:inline">Book Appointment</span>
      </button>
    </div>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 glassmorphism border-b border-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="text-2xl font-serif font-bold text-primary">Cura<span className="text-secondary">Dental</span></div>
        <nav className="hidden md:flex gap-8 text-sm font-medium text-text">
          <a href="#services" className="hover:text-secondary transition-colors">Services</a>
          <a href="#about" className="hover:text-secondary transition-colors">About</a>
          <a href="#gallery" className="hover:text-secondary transition-colors">Gallery</a>
          <a href="#reviews" className="hover:text-secondary transition-colors">Reviews</a>
          <a href="#contact" className="hover:text-secondary transition-colors">Contact</a>
        </nav>
        <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="hidden md:block bg-primary text-white px-6 py-2.5 rounded-full hover:bg-secondary transition-colors font-medium text-sm shadow-md">
          Book Now
        </button>
        <button className="md:hidden text-primary" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-white border-b border-primary/10 shadow-xl py-4 px-4 flex flex-col gap-4"
        >
          <a href="#services" onClick={() => setIsOpen(false)} className="block font-medium text-text hover:text-secondary">Services</a>
          <a href="#about" onClick={() => setIsOpen(false)} className="block font-medium text-text hover:text-secondary">About</a>
          <a href="#gallery" onClick={() => setIsOpen(false)} className="block font-medium text-text hover:text-secondary">Gallery</a>
          <a href="#reviews" onClick={() => setIsOpen(false)} className="block font-medium text-text hover:text-secondary">Reviews</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="block font-medium text-text hover:text-secondary">Contact</a>
          <button onClick={() => { setIsOpen(false); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }} className="w-full bg-primary text-white px-6 py-3 rounded-full hover:bg-secondary transition-colors font-medium text-sm mt-2 shadow-md">
            Book Now
          </button>
        </motion.div>
      )}
    </header>
  );
}

function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2070&auto=format&fit=crop" 
          alt="Modern Dental Clinic" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary font-medium text-sm mb-6">
              <Star className="w-4 h-4 fill-secondary" /> Top Rated Dental Clinic
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-3xl md:text-4xl lg:text-5xl font-serif text-primary leading-tight mb-6">
              Expert Dental Care for <br/><span className="text-secondary">Confident Smiles</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-sm md:text-base text-text mb-8 max-w-xl leading-relaxed">
              Personalized treatments, advanced technology, and experienced specialists helping patients achieve healthier, brighter smiles.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 flex-wrap">
              <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="bg-primary text-white px-8 py-4 rounded-full hover:bg-secondary transition-all flex items-center justify-center gap-2 font-medium text-lg shadow-xl shadow-primary/20 hover:-translate-y-1">
                Book Consultation <ArrowRight className="w-5 h-5" />
              </button>
              <button onClick={() => alert('Opening WhatsApp chat with Cura Dental...')} className="px-8 py-4 rounded-full bg-[#25D366] text-white hover:bg-[#20bd5a] transition-all font-medium text-lg flex items-center justify-center gap-2 shadow-xl hover:-translate-y-1">
                <MessageCircle className="w-5 h-5" /> WhatsApp Us
              </button>
              <button onClick={() => alert('Initiating phone call to +91 98765 43210...')} className="px-8 py-4 rounded-full border border-primary/20 hover:border-secondary hover:text-secondary transition-all font-medium text-lg flex items-center justify-center bg-white/50 backdrop-blur-sm hover:-translate-y-1 gap-2">
                <PhoneCall className="w-5 h-5" /> Call Now
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Cards */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 glassmorphism p-6 rounded-3xl shadow-xl w-72 border border-white/50"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-secondary/10 p-3 rounded-full text-secondary">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <div className="text-lg md:text-xl font-bold text-primary">5,000+</div>
              <div className="text-sm text-text font-medium">Happy Patients</div>
            </div>
          </div>
          <div className="h-px bg-primary/5 my-4 w-full"></div>
          <div className="flex items-center gap-4">
            <div className="bg-accent/10 p-3 rounded-full text-accent">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <div className="text-lg md:text-xl font-bold text-primary">15+</div>
              <div className="text-sm text-text font-medium">Years Experience</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TrustBar() {
  const metrics = [
    { label: "Patients Treated", value: "5000+" },
    { label: "Years Experience", value: "15+" },
    { label: "Google Reviews", value: "4.9/5" },
    { label: "Specialist Doctors", value: "12+" },
  ];

  return (
    <section className="bg-primary text-white py-12 relative z-20 -mt-12 mx-4 sm:mx-8 lg:mx-auto max-w-7xl rounded-3xl shadow-2xl">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-8">
        {metrics.map((metric, idx) => (
          <div key={idx} className="text-center border-r border-white/10 last:border-0">
            <div className="text-xl md:text-3xl font-serif font-bold text-secondary mb-2">{metric.value}</div>
            <div className="text-xs md:text-base text-white/80 font-medium">{metric.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ServicesSection() {
  const services = [
    { title: "Dental Implants", desc: "Permanent, natural-looking replacement for missing teeth using advanced 3D planning.", icon: Shield },
    { title: "Smile Makeover", desc: "Comprehensive cosmetic treatments to achieve your perfect, confident smile.", icon: Star },
    { title: "Teeth Whitening", desc: "Professional, safe, and effective teeth whitening for a dazzling bright smile.", icon: Activity },
    { title: "Orthodontics", desc: "Clear aligners and modern braces for perfectly straight teeth at any age.", icon: CheckCircle },
    { title: "Root Canal", desc: "Pain-free endodontic therapy using the latest microscopic technology.", icon: Award },
    { title: "Pediatric Dentistry", desc: "Gentle, compassionate dental care tailored specifically for children.", icon: Users },
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp} className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-serif text-primary mb-4">Premium Dental Services</h2>
          <p className="text-text max-w-2xl mx-auto text-sm md:text-base">We offer comprehensive dental care using state-of-the-art technology to ensure your comfort and the best possible results.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeUp} transition={{ delay: idx * 0.1 }}
              className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-primary/5 hover:border-secondary/20 hover:-translate-y-1 flex flex-col h-full"
            >
              <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary mb-6 group-hover:scale-110 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-primary mb-3">{service.title}</h3>
              <p className="text-text mb-8 leading-relaxed flex-grow">{service.desc}</p>
              
              <div className="flex flex-col gap-3 mt-auto">
                <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="w-full bg-primary text-white py-3 rounded-xl font-bold hover:bg-secondary transition-colors">Book Consultation</button>
                <a href="#" className="inline-flex justify-center items-center text-secondary font-bold hover:text-primary transition-colors">
                  Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DoctorSpotlight() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white">
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            <div className="absolute -bottom-8 -right-8 glassmorphism p-6 rounded-3xl shadow-xl max-w-xs hidden md:block border border-white/50">
              <div className="text-secondary font-bold text-2xl mb-1">BDS, MDS</div>
              <div className="text-sm text-primary font-medium">Madras Dental College Alumni</div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-3xl md:text-5xl font-serif text-primary mb-2">Meet Your Doctor</h2>
            <h3 className="text-2xl text-secondary mb-6 font-medium">Dr. Karthik Rajan</h3>
            <p className="text-text mb-8 text-sm md:text-base leading-relaxed">
              With over 15 years of experience in aesthetic and restorative dentistry, Dr. Karthik is dedicated to providing pain-free, world-class dental care. His approach combines advanced technology with a gentle, patient-first philosophy.
            </p>
            <ul className="space-y-5 mb-10">
              {[
                "Certified Invisalign Provider",
                "Member of Indian Dental Association",
                "Specialist in Full Mouth Reconstruction",
                "Advanced Training in Implantology"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-4 text-primary font-medium text-lg">
                  <div className="bg-secondary/10 p-1 rounded-full"><CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" /></div>
                  {item}
                </li>
              ))}
            </ul>
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Signature_of_John_Hancock.svg" alt="Signature" className="h-12 opacity-60 mix-blend-multiply mb-6" />
            <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="w-full sm:w-auto bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-secondary transition-colors shadow-lg hover:-translate-y-1">
              Book Appointment With Doctor
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function PatientJourney() {
  const steps = [
    { num: "01", title: "Schedule Consultation", desc: "Book an appointment online or via WhatsApp." },
    { num: "02", title: "Meet Specialist", desc: "Comprehensive evaluation and digital 3D scan." },
    { num: "03", title: "Personalized Plan", desc: "Review your custom treatment and pricing." },
    { num: "04", title: "Treatment Begins", desc: "Experience pain-free, world-class dental care." },
    { num: "05", title: "Smile Transformation", desc: "Walk out with a healthier, more confident smile." },
  ];
  return (
    <section className="py-24 bg-background border-y border-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-primary mb-4">Your Journey to a Perfect Smile</h2>
          <p className="text-text text-sm md:text-base max-w-2xl mx-auto">We've designed a seamless, anxiety-free process to ensure you get the best possible results.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {steps.map((step, idx) => (
             <motion.div key={idx} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} transition={{delay: idx*0.1}} viewport={{once: true}} className="relative group bg-white p-6 rounded-3xl shadow-sm border border-primary/5">
                <div className="text-5xl font-serif font-bold text-secondary/20 mb-4 group-hover:text-secondary/40 transition-colors">{step.num}</div>
                <h4 className="text-lg font-bold text-primary mb-2">{step.title}</h4>
                <p className="text-text text-sm">{step.desc}</p>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BeforeAfterSection() {
  return (
    <section className="py-24 md:py-32 bg-primary text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?q=80&w=2071&auto=format&fit=crop')] opacity-5 object-cover bg-center"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <h2 className="text-3xl md:text-5xl font-serif mb-4">Real Patient Results</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-16 text-sm md:text-base">See the real results of our advanced cosmetic dentistry. Slide to see the before and after transformation.</p>
        </motion.div>
        
        <div className="relative max-w-5xl mx-auto aspect-[16/9] md:aspect-[21/9] rounded-[2rem] overflow-hidden shadow-2xl border border-white/20 group">
          <img src="https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?q=80&w=2071&auto=format&fit=crop" alt="Beautiful Smile After" className="absolute inset-0 w-full h-full object-cover" />
          
          <div className="absolute inset-y-0 left-0 w-[45%] bg-black/40 backdrop-blur-[2px] overflow-hidden border-r-4 border-white">
             <div className="absolute inset-0 flex items-center justify-center">
                <span className="bg-black/50 text-white px-6 py-2 rounded-full font-bold tracking-widest text-sm backdrop-blur-md border border-white/20">BEFORE</span>
             </div>
          </div>
          <div className="absolute inset-y-0 right-0 w-[55%] flex items-center justify-center">
             <span className="bg-white/90 text-primary px-6 py-2 rounded-full font-bold tracking-widest text-sm shadow-xl">AFTER</span>
          </div>
          
          <div className="absolute top-1/2 left-[45%] -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-2xl cursor-ew-resize hover:scale-110 transition-transform">
            <div className="flex gap-1.5">
              <div className="w-1 h-5 bg-primary/30 rounded-full"></div>
              <div className="w-1 h-5 bg-primary/30 rounded-full"></div>
            </div>
          </div>
        </div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mt-12">
          <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="bg-white text-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-secondary hover:text-white transition-colors shadow-xl hover:-translate-y-1">
            Get Similar Results
          </button>
        </motion.div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  const features = [
    { title: "Digital 3D Scanning", desc: "No more messy impressions. We use high-precision digital scanners.", icon: Activity },
    { title: "Pain-Free Procedures", desc: "Advanced anesthesia techniques for a completely comfortable experience.", icon: CheckCircle },
    { title: "Modern Equipment", desc: "State-of-the-art facilities featuring the latest dental technology.", icon: Shield },
    { title: "Transparent Pricing", desc: "Clear, upfront costs with no hidden fees or surprise charges.", icon: Star },
  ];

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:items-center">
          <div className="lg:w-1/3">
            <h2 className="text-3xl md:text-5xl font-serif text-primary mb-6 leading-tight">Why Patients Choose Cura</h2>
            <p className="text-text mb-10 text-sm md:text-base leading-relaxed">We combine luxury hospitality with advanced medical science to redefine what a visit to the dentist feels like.</p>
            <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="bg-primary text-white px-8 py-4 rounded-full hover:bg-secondary transition-colors font-bold shadow-lg hover:-translate-y-1">
              Book Your Visit
            </button>
          </div>
          <div className="lg:w-2/3 grid sm:grid-cols-2 gap-8">
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-primary/5 group"
              >
                <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary mb-6 group-hover:bg-secondary group-hover:text-white transition-colors">
                  <feature.icon className="w-7 h-7" />
                </div>
                <h4 className="text-lg md:text-xl font-bold text-primary mb-3">{feature.title}</h4>
                <p className="text-text leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ClinicGallery() {
  const images = [
    "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop",
  ];

  return (
    <section id="gallery" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-primary mb-4">Tour Our Facility</h2>
          <p className="text-text text-sm md:text-base">Designed for your comfort, privacy, and relaxation.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="h-80 md:h-[600px] rounded-[2rem] overflow-hidden group relative">
            <img src={images[0]} alt="Clinic Reception" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl text-primary font-bold shadow-lg">Reception</div>
          </div>
          <div className="grid grid-rows-2 gap-6 h-[600px]">
            <div className="rounded-[2rem] overflow-hidden group relative">
              <img src={images[1]} alt="Treatment Room" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl text-primary font-bold shadow-lg">Treatment Room</div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="rounded-[2rem] overflow-hidden group relative">
                <img src={images[2]} alt="Equipment" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg text-primary font-bold text-sm shadow-lg">Lab</div>
              </div>
              <div className="rounded-[2rem] overflow-hidden group relative cursor-pointer">
                <img src={images[3]} alt="Lounge" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-primary/40 flex items-center justify-center group-hover:bg-primary/50 transition-colors">
                  <span className="bg-white text-primary px-6 py-3 rounded-full font-bold flex items-center gap-2 shadow-xl hover:scale-105 transition-transform">
                    View Gallery <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const reviews = [
    { name: "Santhosh M.", text: "The absolute best dental experience I've ever had. The clinic feels like a luxury hotel, and Dr. Karthik is incredibly skilled.", stars: 5, img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop" },
    { name: "Priya K.", text: "I was always terrified of the dentist until I found Cura. Completely pain-free root canal and the staff is wonderful.", stars: 5, img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop" },
    { name: "Arvind S.", text: "My smile makeover changed my life. State of the art equipment and true professionalism. Highly recommend!", stars: 5, img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" },
  ];

  return (
    <section id="reviews" className="py-24 md:py-32 bg-background border-t border-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-primary mb-4">Patient Stories</h2>
          <div className="flex items-center justify-center gap-2 text-xl font-bold text-primary bg-white inline-flex px-6 py-2 rounded-full shadow-sm">
            4.9 <Star className="w-5 h-5 fill-secondary text-secondary" /> Rating on Google
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-shadow border border-primary/5 flex flex-col"
            >
              <div className="flex gap-1 text-secondary mb-4">
                {[...Array(review.stars)].map((_, i) => <Star key={i} className="w-5 h-5 fill-secondary" />)}
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                 <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-md font-bold flex items-center gap-1"><CheckCircle className="w-3 h-3"/> Verified Patient</span>
                 <span className="bg-blue-50 text-blue-600 text-xs px-2 py-1 rounded-md font-bold flex items-center gap-1">Google Review</span>
              </div>
              <p className="text-text mb-8 text-sm md:text-base leading-relaxed flex-grow">&quot;{review.text}&quot;</p>
              <div className="flex items-center gap-4 border-t border-primary/5 pt-6 mt-auto">
                <img src={review.img} alt={review.name} className="w-14 h-14 rounded-full object-cover shadow-sm" />
                <div className="font-bold text-primary text-lg">{review.name}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const faqs = [
    { q: "Does a root canal hurt?", a: "Not at all. With our modern anesthesia and precise microscopic techniques, a root canal is as painless as getting a routine filling." },
    { q: "How much do dental implants cost?", a: "Costs vary depending on individual needs. We offer a transparent pricing structure during your initial consultation and provide flexible financing options." },
    { q: "Do you accept dental insurance?", a: "Yes, we work with most major PPO insurance plans. Our front desk team will handle all claims to maximize your benefits." },
    { q: "How fast can I get an appointment?", a: "We typically offer same-week appointments for new patients. For dental emergencies, we guarantee same-day care." },
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-serif text-primary text-center mb-16">Common Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-primary/10 rounded-2xl overflow-hidden transition-all duration-300 hover:border-secondary/30 bg-background/50">
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full px-8 py-6 flex justify-between items-center text-left font-bold text-primary text-lg focus:outline-none"
              >
                <span>{faq.q}</span>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center bg-white shadow-sm transition-transform duration-300 ${openIdx === idx ? "bg-secondary text-white" : "text-secondary"}`}>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openIdx === idx ? "rotate-180" : ""}`} />
                </div>
              </button>
              <div 
                className={`px-8 overflow-hidden transition-all duration-300 ease-in-out ${openIdx === idx ? "max-h-60 pb-6 opacity-100" : "max-h-0 opacity-0"}`}
              >
                <p className="text-text text-sm md:text-base leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ConsultationCTA() {
  return (
    <section className="py-24 relative overflow-hidden mx-4 sm:mx-8 lg:mx-auto max-w-7xl rounded-[3rem] mb-24 shadow-2xl">
      <div className="absolute inset-0 bg-primary"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2070&auto=format&fit=crop')] opacity-10 object-cover bg-center"></div>
      <div className="absolute top-0 right-0 w-[80%] h-full bg-gradient-to-l from-secondary/40 to-transparent blur-3xl"></div>
      
      <div className="relative z-10 px-8 py-16 md:p-20 flex flex-col items-center text-center">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif text-white mb-4 leading-tight">Ready for a Healthier, More Confident Smile?</h2>
        <p className="text-white/90 text-base md:text-xl max-w-2xl mb-8">Schedule your comprehensive consultation today and discover what premium dental care truly feels like.</p>
        
        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl mb-10 text-white font-medium flex items-center gap-3">
           <Clock className="w-5 h-5 text-secondary" /> Limited consultation slots available this week.
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-secondary hover:text-white transition-colors flex justify-center items-center gap-3 shadow-2xl hover:scale-105">
            <Calendar className="w-5 h-5" /> Book Consultation
          </button>
          <button onClick={() => alert('Opening WhatsApp chat with Cura Dental...')} className="bg-[#25D366] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#20bd5a] transition-colors flex justify-center items-center gap-3 shadow-2xl hover:scale-105">
            <MessageCircle className="w-5 h-5" /> WhatsApp Us
          </button>
          <button onClick={() => alert('Initiating phone call to +91 98765 43210...')} className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-primary transition-colors flex justify-center items-center gap-3 shadow-2xl hover:scale-105">
            <PhoneCall className="w-5 h-5" /> Call Now
          </button>
        </div>
      </div>
    </section>
  );
}

function ContactFormSection() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl md:text-5xl font-serif text-primary mb-6">Request Free Consultation</h2>
              <p className="text-text text-sm md:text-base mb-8">Have a question or want to book an appointment? Fill out the form below and our team will get back to you within 24 hours.</p>
              <div className="hidden lg:block">
                <img src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2070&auto=format&fit=crop" alt="Customer Service" className="rounded-[2rem] shadow-xl object-cover h-64 w-full" />
              </div>
            </motion.div>
          </div>
          <div className="lg:w-1/2 w-full">
            <motion.form 
              initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="bg-background p-8 md:p-10 rounded-[2rem] shadow-xl border border-primary/5 flex flex-col gap-6"
              onSubmit={(e) => { e.preventDefault(); alert('Thank you! Your consultation request has been submitted. We will contact you shortly.'); (e.target as HTMLFormElement).reset(); }}
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-primary mb-2">First Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-primary/10 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-primary mb-2">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-primary/10 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all" placeholder="Doe" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-primary mb-2">Email Address</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl border border-primary/10 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-bold text-primary mb-2">Phone Number</label>
                <input type="tel" className="w-full px-4 py-3 rounded-xl border border-primary/10 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all" placeholder="+91 98765 00000" />
              </div>
              <div>
                <label className="block text-sm font-bold text-primary mb-2">Treatment Interest</label>
                <select className="w-full px-4 py-3 rounded-xl border border-primary/10 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all bg-white">
                  <option>Select a treatment...</option>
                  <option>Dental Implants</option>
                  <option>Smile Makeover</option>
                  <option>Teeth Whitening</option>
                  <option>General Checkup</option>
                </select>
              </div>
              <button className="w-full bg-primary text-white py-4 rounded-xl font-bold hover:bg-secondary transition-colors mt-2 shadow-lg hover:shadow-xl hover:-translate-y-1">
                Request Consultation
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}

function LocationSection() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-5xl font-serif text-primary mb-6">Visit Our Clinic</h2>
          <p className="text-text mb-12 text-sm md:text-base">Located in the heart of the medical district, our facility offers complimentary valet parking and a relaxing lounge environment.</p>
          
          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="bg-white p-4 rounded-2xl shadow-sm text-secondary border border-primary/5"><MapPin className="w-8 h-8" /></div>
              <div>
                <div className="font-bold text-primary text-xl mb-2">Address</div>
                <div className="text-text text-sm md:text-base">45 Poes Garden, Teynampet<br/>Chennai, Tamil Nadu 600086</div>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="bg-white p-4 rounded-2xl shadow-sm text-secondary border border-primary/5"><Phone className="w-8 h-8" /></div>
              <div>
                <div className="font-bold text-primary text-xl mb-2">Contact</div>
                <div className="text-text text-sm md:text-base">+91 98765 43210<br/>hello@curadental.in</div>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="bg-white p-4 rounded-2xl shadow-sm text-secondary border border-primary/5"><Clock className="w-8 h-8" /></div>
              <div>
                <div className="font-bold text-primary text-xl mb-2">Hours</div>
                <div className="text-text text-sm md:text-base">Mon - Fri: 8:00 AM - 6:00 PM<br/>Saturday: 9:00 AM - 2:00 PM</div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[500px] lg:h-[600px] bg-gray-200 rounded-[3rem] overflow-hidden relative shadow-2xl border-4 border-white group">
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop')] bg-cover bg-center">
            <div className="absolute inset-0 bg-primary/20 backdrop-blur-sm group-hover:bg-primary/10 transition-colors"></div>
            <div className="relative z-10 bg-white px-8 py-6 rounded-2xl shadow-2xl text-center hover:scale-105 transition-transform cursor-pointer">
              <MapPin className="w-12 h-12 mx-auto mb-4 text-secondary" />
              <div className="font-bold font-serif text-2xl text-primary">Cura Dental</div>
              <div className="text-secondary font-bold mt-2">Get Directions</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-primary pt-24 pb-12 text-white/80 rounded-t-[3rem] mt-12 mb-16 md:mb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="text-3xl font-serif font-bold text-white mb-6">Cura<span className="text-secondary">Dental</span></div>
            <p className="mb-8 text-sm md:text-base leading-relaxed">Elevating dental care through advanced technology, luxury hospitality, and clinical excellence.</p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-white transition-colors font-bold">IG</a>
              <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-white transition-colors font-bold">FB</a>
              <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-white transition-colors font-bold">X</a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-secondary transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-secondary transition-colors">About Clinic</a></li>
              <li><a href="#services" className="hover:text-secondary transition-colors">Treatments</a></li>
              <li><a href="#reviews" className="hover:text-secondary transition-colors">Patient Reviews</a></li>
              <li><a href="#contact" className="hover:text-secondary transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Treatments</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-secondary transition-colors">Dental Implants</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Invisalign</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Porcelain Veneers</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Teeth Whitening</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Root Canal Therapy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Newsletter</h4>
            <p className="mb-6 text-sm md:text-base">Subscribe for oral health tips and clinic updates.</p>
            <div className="flex flex-col gap-3">
              <input type="email" placeholder="Email address" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 w-full outline-none focus:border-secondary transition-colors" />
              <button onClick={(e) => { e.preventDefault(); alert('Successfully subscribed to our newsletter!'); (e.target as HTMLButtonElement).closest('div')?.querySelector('input')?.value && ((e.target as HTMLButtonElement).closest('div')!.querySelector('input')!.value = ''); }} className="bg-secondary text-white px-4 py-3 rounded-xl hover:bg-secondary/80 transition-colors font-bold flex justify-center items-center gap-2">
                Subscribe <Mail className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} Cura Dental Clinic. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
