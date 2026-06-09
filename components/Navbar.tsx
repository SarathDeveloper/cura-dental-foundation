"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 glassmorphism border-b border-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-serif font-bold text-primary">
          Cura<span className="text-secondary">Dental</span>
        </Link>
        <nav className="hidden md:flex gap-8 text-sm font-medium text-text">
          <Link href="/" className="hover:text-secondary transition-colors">Home</Link>
          <Link href="/services" className="hover:text-secondary transition-colors">Services</Link>
          <Link href="/about" className="hover:text-secondary transition-colors">About</Link>
          <Link href="/gallery" className="hover:text-secondary transition-colors">Gallery</Link>
          <Link href="/reviews" className="hover:text-secondary transition-colors">Reviews</Link>
          <Link href="/contact" className="hover:text-secondary transition-colors">Contact</Link>
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
          <Link href="/" onClick={() => setIsOpen(false)} className="block font-medium text-text hover:text-secondary">Home</Link>
          <Link href="/services" onClick={() => setIsOpen(false)} className="block font-medium text-text hover:text-secondary">Services</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="block font-medium text-text hover:text-secondary">About</Link>
          <Link href="/gallery" onClick={() => setIsOpen(false)} className="block font-medium text-text hover:text-secondary">Gallery</Link>
          <Link href="/reviews" onClick={() => setIsOpen(false)} className="block font-medium text-text hover:text-secondary">Reviews</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="block font-medium text-text hover:text-secondary">Contact</Link>
          <button onClick={() => { setIsOpen(false); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }} className="w-full bg-primary text-white px-6 py-3 rounded-full hover:bg-secondary transition-colors font-medium text-sm mt-2 shadow-md">
            Book Now
          </button>
        </motion.div>
      )}
    </header>
  );
}
