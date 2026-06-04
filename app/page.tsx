"use client";

import { useEffect, useRef, useState } from "react";
import {
  Phone,
  MapPin,
  Clock,
  Star,
  ChevronRight,
  Shield,
  Zap,
  Heart,
  CheckCircle,
  Calendar,
  Smile,
  Activity,
  Sparkles,
  Scissors,
  Stethoscope,
  Sun,
  Users,
  Award,
  Menu,
  X,
  ArrowRight,
  Share2,
  Mail,
  MessageSquare,
} from "lucide-react";

/* ─────────────────────────────────────────────
   Tiny animation hook – IntersectionObserver
───────────────────────────────────────────── */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

/* ─────────────────────────────────────────────
   Counter animation hook
───────────────────────────────────────────── */
function useCounter(target: number, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

/* ─────────────────────────────────────────────
   NAV
───────────────────────────────────────────── */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["Services", "About", "Gallery", "Testimonials", "Contact"];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#67D0C8] to-[#2D4B73] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
            <Smile className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="font-bold text-[#2D4B73] leading-none text-[15px] tracking-tight">
              Cura Dental
            </p>
            <p className="text-[10px] text-[#67D0C8] tracking-widest uppercase font-medium">
              Foundation
            </p>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-sm font-medium text-[#2D4B73]/70 hover:text-[#67D0C8] transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#67D0C8] after:transition-all hover:after:w-full"
            >
              {l}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="tel:04428344470"
          className="hidden md:flex items-center gap-2 bg-[#67D0C8] hover:bg-[#2D4B73] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-300 shadow-md hover:shadow-xl"
        >
          <Phone className="w-4 h-4" />
          044 2834 4470
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-[#2D4B73]"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="text-[#2D4B73] font-medium"
            >
              {l}
            </a>
          ))}
          <a
            href="tel:04428344470"
            className="flex items-center gap-2 bg-[#67D0C8] text-white text-sm font-semibold px-5 py-2.5 rounded-full w-fit"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>
        </div>
      )}
    </header>
  );
}

/* ─────────────────────────────────────────────
   HERO
───────────────────────────────────────────── */
function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-20 md:pt-0"
      style={{
        background:
          "linear-gradient(135deg, #f0fffe 0%, #e8f9f8 40%, #dff4f7 100%)",
      }}
    >
      {/* Decorative blobs */}
      <div className="absolute top-[-80px] right-[-80px] w-[500px] h-[500px] rounded-full opacity-20 blur-3xl bg-[#67D0C8]" />
      <div className="absolute bottom-[-100px] left-[-60px] w-[400px] h-[400px] rounded-full opacity-10 blur-3xl bg-[#2D4B73]" />

      {/* Floating tooth SVG accent */}
      <svg
        className="absolute top-32 right-[38%] opacity-10 animate-pulse"
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="none"
      >
        <path
          d="M30 5C20 5 10 12 10 22c0 8 4 14 8 20 2 3 4 8 6 13h12c2-5 4-10 6-13 4-6 8-12 8-20 0-10-10-17-20-17z"
          fill="#67D0C8"
        />
      </svg>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 md:gap-16 items-center pt-16 md:pt-28 pb-12 md:pb-20">
        {/* Left */}
        <div className="space-y-6 md:space-y-8">
          {/* Pill badge */}
          {/* <div className="inline-flex items-center gap-2 bg-[#67D0C8]/15 text-[#2D4B73] text-xs font-semibold px-4 py-1.5 rounded-full border border-[#67D0C8]/30">
            <span className="w-2 h-2 rounded-full bg-[#67D0C8] animate-pulse" />
            Now Accepting New Patients
          </div> */}

          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#2D4B73] leading-[1.1] tracking-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Expert Dental
            <span
              className="block"
              style={{
                background: "linear-gradient(90deg,#67D0C8,#2D4B73)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Care in T. Nagar,
            </span>
            Chennai
          </h1>

          <p className="text-[#2D4B73]/65 text-base sm:text-lg leading-relaxed max-w-md">
            Advanced Dental Implants, Cosmetic Dentistry and Family Dental Care
            under one roof — delivered with compassion since day one.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
            <a
              href="tel:04428344470"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#2D4B73] hover:bg-[#1a3050] text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto flex items-center justify-center gap-2 border-2 border-[#67D0C8] text-[#2D4B73] hover:bg-[#67D0C8] hover:text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-300"
            >
              <Calendar className="w-4 h-4" />
              Book Appointment
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-3 pt-2">
            {[
              { icon: <Zap className="w-4 h-4" />, label: "Advanced Dental Care" },
              { icon: <Users className="w-4 h-4" />, label: "Experienced Team" },
              { icon: <Shield className="w-4 h-4" />, label: "Modern Equipment" },
            ].map(({ icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 bg-white/70 backdrop-blur-sm border border-[#67D0C8]/30 text-[#2D4B73] text-xs font-medium px-4 py-2 rounded-full shadow-sm"
              >
                <span className="text-[#67D0C8]">{icon}</span>
                {label}
              </div>
            ))}
          </div>
        </div>

        {/* Right – Clinic image card */}
        <div className="relative hidden md:block">
          {/* Main image placeholder */}
          <div
            className="relative rounded-3xl overflow-hidden shadow-2xl"
            style={{ aspectRatio: "4/5" }}
          >
            <img
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80"
              alt="Modern dental clinic"
              className="w-full h-full object-cover"
            />
            {/* Overlay tint */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#2D4B73]/40 to-transparent" />
          </div>

          {/* Floating stat card */}
          <div className="absolute -bottom-6 -left-8 bg-white rounded-2xl shadow-xl p-5 w-48">
            <p className="text-3xl font-extrabold text-[#67D0C8]">1000+</p>
            <p className="text-[#2D4B73] text-sm font-medium">Happy Patients</p>
            <div className="flex gap-0.5 mt-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>

          {/* Floating badge */}
          <div className="absolute -top-4 -right-4 bg-[#67D0C8] text-white rounded-2xl shadow-xl p-4 text-center w-28">
            <Award className="w-6 h-6 mx-auto mb-1" />
            <p className="text-xs font-bold leading-tight">Trusted Clinic Chennai</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   STATS
───────────────────────────────────────────── */
function Stats() {
  const { ref, visible } = useReveal();
  const patients = useCounter(1000, 1800, visible);

  const stats = [
    { value: `${patients}+`, label: "Happy Patients", icon: <Heart className="w-7 h-7" /> },
    { value: "100%", label: "Advanced Technology", icon: <Zap className="w-7 h-7" /> },
    { value: "6+", label: "Dental Specialties", icon: <Stethoscope className="w-7 h-7" /> },
    { value: "★ 5.0", label: "Patient-Focused Care", icon: <Star className="w-7 h-7" /> },
  ];

  return (
    <section
      ref={ref}
      className="py-12 md:py-20 relative"
      style={{
        background: "linear-gradient(135deg, #2D4B73 0%, #1a3050 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(({ value, label, icon }, i) => (
            <div
              key={label}
              className="text-center"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(30px)",
                transition: `all 0.6s ease ${i * 0.15}s`,
              }}
            >
              <div className="w-14 h-14 rounded-2xl bg-[#67D0C8]/20 border border-[#67D0C8]/30 flex items-center justify-center mx-auto mb-4 text-[#67D0C8]">
                {icon}
              </div>
              <p className="text-4xl font-extrabold text-white mb-1">{value}</p>
              <p className="text-[#67D0C8]/80 text-sm font-medium">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   ABOUT
───────────────────────────────────────────── */
function About() {
  const { ref, visible } = useReveal();

  const points = [
    "State-of-the-art digital X-rays & 3D imaging",
    "Painless procedures with modern anaesthesia",
    "Child-friendly & senior-accessible facility",
    "Transparent pricing, no hidden costs",
  ];

  return (
    <section id="about" ref={ref} className="py-16 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 md:gap-20 items-center">
        {/* Images mosaic */}
        <div
          className="relative"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(-40px)",
            transition: "all 0.8s ease",
          }}
        >
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1629909615957-be38d48fbbe4?w=400&q=80"
              alt="Dental consultation"
              className="rounded-2xl h-52 w-full object-cover shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=400&q=80"
              alt="Clinic interior"
              className="rounded-2xl h-52 w-full object-cover shadow-lg mt-10"
            />
            <img
              src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=400&q=80"
              alt="Dental equipment"
              className="rounded-2xl h-44 w-full object-cover shadow-lg -mt-4"
            />
            <img
              src="https://images.unsplash.com/photo-1581595219315-a187dd40c322?w=400&q=80"
              alt="Patient care"
              className="rounded-2xl h-44 w-full object-cover shadow-lg mt-6"
            />
          </div>
          {/* Badge */}
          <div className="absolute -right-6 top-1/2 -translate-y-1/2 bg-gradient-to-br from-[#67D0C8] to-[#2D4B73] text-white rounded-2xl p-5 shadow-2xl text-center w-32">
            <p className="text-2xl font-extrabold">T.Nagar</p>
            <p className="text-xs opacity-80 mt-1">Chennai's Trusted Clinic</p>
          </div>
        </div>

        {/* Text */}
        <div
          className="space-y-6"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(40px)",
            transition: "all 0.8s ease 0.2s",
          }}
        >
          <p className="text-[#67D0C8] text-sm font-bold tracking-widest uppercase">
            About Us
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#2D4B73] leading-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Caring for Smiles
            <br />
            <span className="text-[#67D0C8]">Since Day One</span>
          </h2>
          <p className="text-[#2D4B73]/65 leading-relaxed">
            Cura Dental Foundation is Chennai&apos;s premier dental clinic nestled in the heart
            of T. Nagar. Our team of experienced dentists combines clinical excellence with
            genuine compassion to deliver a dental experience unlike any other — because
            every patient deserves a healthy, confident smile.
          </p>
          <p className="text-[#2D4B73]/65 leading-relaxed">
            From routine check-ups to advanced implant surgeries, we offer a complete
            spectrum of dental services under one roof, ensuring continuity of care and
            lasting results you can be proud of.
          </p>
          <ul className="space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-[#2D4B73]/80 text-xs sm:text-sm">
                <CheckCircle className="w-5 h-5 text-[#67D0C8] flex-shrink-0 mt-0.5" />
                {p}
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#2D4B73] hover:bg-[#67D0C8] text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-300 shadow-md"
          >
            Meet Our Team <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   SERVICES
───────────────────────────────────────────── */
const services = [
  {
    icon: <Activity className="w-7 h-7" />,
    title: "Dental Implants",
    desc: "Permanent, natural-looking tooth replacements using cutting-edge titanium implant technology for a lifetime of confident smiles.",
    tag: "Most Popular",
  },
  {
    icon: <Zap className="w-7 h-7" />,
    title: "Root Canal Treatment",
    desc: "Painless, precision root canal procedures to save your natural tooth and eliminate infection with minimal discomfort.",
    tag: "",
  },
  {
    icon: <Sparkles className="w-7 h-7" />,
    title: "Cosmetic Dentistry",
    desc: "Smile makeovers through veneers, bonding, and smile design — transforming your confidence inside and out.",
    tag: "Trending",
  },
  {
    icon: <Sun className="w-7 h-7" />,
    title: "Teeth Whitening",
    desc: "Professional-grade whitening treatments for a radiant, bright smile in just one appointment.",
    tag: "",
  },
  {
    icon: <Scissors className="w-7 h-7" />,
    title: "Oral Surgery",
    desc: "Expert oral and maxillofacial surgical procedures performed with utmost care in a sterile, modern environment.",
    tag: "",
  },
  {
    icon: <Stethoscope className="w-7 h-7" />,
    title: "General Dentistry",
    desc: "Comprehensive routine dental care — cleanings, fillings, extractions, and preventive treatments for all ages.",
    tag: "",
  },
];

function Services() {
  const { ref, visible } = useReveal();

  return (
    <section
      id="services"
      ref={ref}
      className="py-16 md:py-28"
      style={{ background: "linear-gradient(180deg,#f0fffe 0%,#ffffff 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#67D0C8] text-sm font-bold tracking-widest uppercase mb-3">
            What We Offer
          </p>
          <h2
            className="text-4xl md:text-5xl font-extrabold text-[#2D4B73]"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Our Dental Services
          </h2>
          <p className="text-[#2D4B73]/55 mt-3 md:mt-4 max-w-xl mx-auto text-sm sm:text-base">
            Comprehensive care tailored to your unique smile — from prevention to transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-7">
          {services.map(({ icon, title, desc, tag }, i) => (
            <div
              key={title}
              className="group relative bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-400 overflow-hidden"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(40px)",
                transition: `all 0.6s ease ${i * 0.1}s`,
              }}
            >
              {/* Hover gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#67D0C8]/5 to-[#2D4B73]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

              {tag && (
                <span className="absolute top-5 right-5 bg-[#67D0C8]/15 text-[#67D0C8] text-[10px] font-bold px-2.5 py-1 rounded-full border border-[#67D0C8]/30">
                  {tag}
                </span>
              )}

              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#67D0C8] to-[#2D4B73] flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                {icon}
              </div>

              <h3 className="text-base md:text-lg lg:text-xl font-bold text-[#2D4B73] mb-3">{title}</h3>
              <p className="text-[#2D4B73]/60 text-xs sm:text-sm leading-relaxed">{desc}</p>

              <div className="flex items-center gap-1 mt-6 text-[#67D0C8] text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Learn More <ChevronRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   WHY CHOOSE US
───────────────────────────────────────────── */
function WhyUs() {
  const { ref, visible } = useReveal();

  const reasons = [
    { icon: <Award className="w-6 h-6" />, title: "Experienced Dentists", desc: "Years of specialized expertise across all dental disciplines." },
    { icon: <Zap className="w-6 h-6" />, title: "Modern Equipment", desc: "Latest dental tech for accurate diagnosis and comfortable treatment." },
    { icon: <Heart className="w-6 h-6" />, title: "Comfortable Environment", desc: "Relaxing interiors designed to ease dental anxiety." },
    { icon: <CheckCircle className="w-6 h-6" />, title: "Personalized Plans", desc: "Treatment plans built around your specific dental needs and goals." },
    { icon: <Shield className="w-6 h-6" />, title: "Affordable Care", desc: "Premium dental care at fair, transparent prices for every family." },
    { icon: <Clock className="w-6 h-6" />, title: "Minimal Wait Time", desc: "Efficient scheduling so you spend less time waiting, more time smiling." },
  ];

  return (
    <section
      ref={ref}
      className="py-16 md:py-28 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg,#2D4B73 0%,#1a3050 100%)" }}
    >
      {/* Decorative circle */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#67D0C8]/10 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-[#67D0C8]/5 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <p className="text-[#67D0C8] text-sm font-bold tracking-widest uppercase mb-3">
            Why Cura
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Why Choose Us?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {reasons.map(({ icon, title, desc }, i) => (
            <div
              key={title}
              className="group flex gap-5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-7 transition-all duration-300"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(30px)",
                transition: `all 0.6s ease ${i * 0.1}s`,
              }}
            >
              <div className="w-12 h-12 rounded-xl bg-[#67D0C8]/20 border border-[#67D0C8]/30 flex items-center justify-center text-[#67D0C8] flex-shrink-0 group-hover:bg-[#67D0C8] group-hover:text-white transition-all duration-300">
                {icon}
              </div>
              <div>
                <h3 className="text-white font-bold mb-1.5">{title}</h3>
                <p className="text-white/55 text-xs md:text-xs sm:text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   GALLERY
───────────────────────────────────────────── */
const galleryImages = [
  { src: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&q=80", alt: "Clinic lobby", span: "col-span-2 row-span-2" },
  { src: "https://images.unsplash.com/photo-1629909615957-be38d48fbbe4?w=400&q=80", alt: "Consultation room", span: "" },
  { src: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=400&q=80", alt: "Dental equipment", span: "" },
  { src: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=400&q=80", alt: "Treatment chair", span: "" },
  { src: "https://images.unsplash.com/photo-1581595219315-a187dd40c322?w=400&q=80", alt: "Patient care", span: "" },
];

function Gallery() {
  const { ref, visible } = useReveal();

  return (
    <section id="gallery" ref={ref} className="py-16 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#67D0C8] text-sm font-bold tracking-widest uppercase mb-3">
            Our Clinic
          </p>
          <h2
            className="text-4xl md:text-5xl font-extrabold text-[#2D4B73]"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            A Look Inside
          </h2>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4"
          style={{ gridAutoRows: "auto" }}
        >
          {galleryImages.map(({ src, alt, span }, i) => (
            <div
              key={i}
              className={`relative rounded-2xl overflow-hidden group ${span}`}
              style={{
                aspectRatio: i === 0 ? "4/3" : "1/1",
                opacity: visible ? 1 : 0,
                transform: visible ? "scale(1)" : "scale(0.95)",
                transition: `all 0.6s ease ${i * 0.1}s`,
              }}
            >
              <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D4B73]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                <p className="text-white text-sm font-medium">{alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   TESTIMONIALS
───────────────────────────────────────────── */
const testimonials = [
  {
    name: "Priya R.",
    location: "T. Nagar, Chennai",
    text: "The staff was warm and welcoming, and the wait time was minimal. I felt completely at ease throughout my treatment. Highly recommend Cura!",
    rating: 5,
  },
  {
    name: "Arun M.",
    location: "Nungambakkam, Chennai",
    text: "Best dentist and best service. Atmosphere is good. The clinic uses the latest equipment and the doctor was very thorough and reassuring.",
    rating: 5,
  },
  {
    name: "Kavitha S.",
    location: "Anna Nagar, Chennai",
    text: "Got my dental implants done here and I couldn't be happier. Professional, painless, and the results look completely natural. Worth every rupee!",
    rating: 5,
  },
];

function Testimonials() {
  const { ref, visible } = useReveal();

  return (
    <section
      id="testimonials"
      ref={ref}
      className="py-16 md:py-28"
      style={{ background: "linear-gradient(180deg,#f0fffe,#e8f9f8)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#67D0C8] text-sm font-bold tracking-widest uppercase mb-3">
            Patient Stories
          </p>
          <h2
            className="text-4xl md:text-5xl font-extrabold text-[#2D4B73]"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            What Our Patients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map(({ name, location, text, rating }, i) => (
            <div
              key={name}
              className="bg-white rounded-2xl md:rounded-3xl p-5 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-400 hover:-translate-y-1 relative"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(40px)",
                transition: `all 0.6s ease ${i * 0.15}s`,
              }}
            >
              {/* Quote mark */}
              <div className="absolute top-7 right-8 text-[#67D0C8]/15 text-7xl font-serif leading-none select-none">
                "
              </div>

              <div className="flex gap-1 mb-5">
                {[...Array(rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-[#2D4B73]/75 leading-relaxed text-xs sm:text-sm mb-5 md:mb-7 relative z-10">
                "{text}"
              </p>

              <div className="flex items-center gap-3 border-t border-gray-100 pt-5">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#67D0C8] to-[#2D4B73] flex items-center justify-center text-white font-bold text-sm">
                  {name[0]}
                </div>
                <div>
                  <p className="font-bold text-[#2D4B73] text-xs sm:text-sm">{name}</p>
                  <p className="text-[#2D4B73]/45 text-[10px] sm:text-xs">{location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   APPOINTMENT CTA
───────────────────────────────────────────── */
function AppointmentCTA() {
  return (
    <section className="py-16 md:py-28 relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #67D0C8 0%, #2D4B73 100%)",
        }}
      />
      {/* Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

        <div className="max-w-4xl mx-auto px-6 text-center relative">
        <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-6">
          <Calendar className="w-8 h-8 text-white" />
        </div>
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Schedule Your Dental
          <br />
          Consultation Today
        </h2>
          <p className="text-white/80 text-base sm:text-lg mb-8 md:mb-10 max-w-xl mx-auto">
          Don&apos;t wait for pain to act. Early dental care saves you from complex
          treatments — and your smile deserves expert attention now.
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
          <a
            href="tel:04428344470"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-[#2D4B73] font-bold px-8 py-4 rounded-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
          >
            <Phone className="w-5 h-5" />
            Call 044 2834 4470
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto flex items-center justify-center gap-2 border-2 border-white text-white font-bold px-8 py-4 rounded-full hover:bg-white hover:text-[#2D4B73] transition-all duration-300"
          >
            <MapPin className="w-5 h-5" />
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   CONTACT
───────────────────────────────────────────── */
function Contact() {
  const { ref, visible } = useReveal();

  return (
    <section id="contact" ref={ref} className="py-16 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#67D0C8] text-sm font-bold tracking-widest uppercase mb-3">
            Find Us
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#2D4B73]"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Visit Our Clinic
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Info */}
          <div
            className="space-y-6"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-30px)",
              transition: "all 0.7s ease",
            }}
          >
            {[
              {
                icon: <MapPin className="w-6 h-6 text-[#67D0C8]" />,
                label: "Address",
                value: "17/5 Tilak Street, T. Nagar,\nChennai – 600 017",
              },
              {
                icon: <Phone className="w-6 h-6 text-[#67D0C8]" />,
                label: "Phone",
                value: "044 2834 4470",
              },
              {
                icon: <Clock className="w-6 h-6 text-[#67D0C8]" />,
                label: "Business Hours",
                value:
                  "Mon – Sat: 9:00 AM – 8:00 PM\nSunday: 10:00 AM – 2:00 PM",
              },
            ].map(({ icon, label, value }) => (
              <div
                key={label}
                className="flex gap-5 p-6 rounded-2xl bg-[#f0fffe] border border-[#67D0C8]/20 hover:border-[#67D0C8] transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-[#67D0C8]/15 flex items-center justify-center flex-shrink-0">
                  {icon}
                </div>
                <div>
                  <p className="text-[10px] md:text-xs font-bold text-[#67D0C8] uppercase tracking-widest mb-1">
                    {label}
                  </p>
                  <p className="text-[#2D4B73] font-medium whitespace-pre-line text-xs md:text-sm leading-relaxed">
                    {value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Map placeholder */}
          <div
            className="rounded-2xl md:rounded-3xl overflow-hidden shadow-lg md:shadow-xl border border-gray-100"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(30px)",
              transition: "all 0.7s ease 0.2s",
            }}
          >
            <iframe
              title="Cura Dental Foundation Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.8223!2d80.2352!3d13.0351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sTilak+Street+T+Nagar+Chennai!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="280"
              loading="lazy"
              className="border-0"
              style={{ filter: "saturate(1.1)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   FOOTER
───────────────────────────────────────────── */
function Footer() {
  const quickLinks = ["Services", "About", "Gallery", "Testimonials", "Contact"];

  return (
    <footer
      className="pt-12 md:pt-20 pb-8"
      style={{ background: "linear-gradient(135deg,#1a3050 0%,#2D4B73 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 md:gap-12 mb-12 md:mb-16">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#67D0C8] to-white/20 flex items-center justify-center">
                <Smile className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-extrabold text-white text-base sm:text-lg tracking-tight">
                  Cura Dental Foundation
                </p>
                <p className="text-[#67D0C8] text-xs tracking-widest uppercase">
                  Teeth For All
                </p>
              </div>
            </div>
            <p className="text-white/50 text-xs sm:text-sm leading-relaxed max-w-xs">
              Delivering premium dental care with compassion and cutting-edge
              technology in the heart of T. Nagar, Chennai.
            </p>
            <div className="flex gap-3">
              {[Share2, Mail, MessageSquare].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#67D0C8] flex items-center justify-center text-white/70 hover:text-white transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-bold mb-4 md:mb-5 text-xs md:text-sm uppercase tracking-widest">
              Quick Links
            </h4>
            <ul className="space-y-2 md:space-y-3">
              {quickLinks.map((l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase()}`}
                    className="text-white/55 hover:text-[#67D0C8] text-sm transition-colors flex items-center gap-2"
                  >
                    <ChevronRight className="w-3 h-3" />
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4 md:mb-5 text-xs md:text-sm uppercase tracking-widest">
              Contact
            </h4>
            <ul className="space-y-3 md:space-y-4">
              <li className="flex gap-3 text-white/55 text-xs md:text-sm">
                <MapPin className="w-4 h-4 text-[#67D0C8] flex-shrink-0 mt-0.5" />
                17/5 Tilak Street, T. Nagar, Chennai – 600 017
              </li>
              <li className="flex gap-3 text-white/55 text-xs md:text-sm">
                <Phone className="w-4 h-4 text-[#67D0C8] flex-shrink-0" />
                044 2834 4470
              </li>
              <li className="flex gap-3 text-white/55 text-xs md:text-sm">
                <Clock className="w-4 h-4 text-[#67D0C8] flex-shrink-0 mt-0.5" />
                Mon–Sat: 9 AM – 8 PM<br />Sun: 10 AM – 2 PM
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 md:pt-8 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4 text-white/35 text-[10px] sm:text-xs text-center md:text-left">
          <p>© {new Date().getFullYear()} Cura Dental Foundation. All rights reserved.</p>
          <p>Designed with ♥ for smiles in Chennai</p>
        </div>
      </div>
    </footer>
  );
}

/* ─────────────────────────────────────────────
   PAGE (default export)
───────────────────────────────────────────── */
export default function HomePage() {
  return (
    <>
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&display=swap');
        html { scroll-behavior: smooth; }
        * { box-sizing: border-box; }
      `}</style>

      <Nav />
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <WhyUs />
        <Gallery />
        <Testimonials />
        <AppointmentCTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
