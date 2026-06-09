"use client";

import { Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
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
              <li><Link href="/" className="hover:text-secondary transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-secondary transition-colors">About Clinic</Link></li>
              <li><Link href="/services" className="hover:text-secondary transition-colors">Treatments</Link></li>
              <li><Link href="/reviews" className="hover:text-secondary transition-colors">Patient Reviews</Link></li>
              <li><Link href="/contact" className="hover:text-secondary transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Treatments</h4>
            <ul className="space-y-4">
              <li><Link href="/services" className="hover:text-secondary transition-colors">Dental Implants</Link></li>
              <li><Link href="/services" className="hover:text-secondary transition-colors">Invisalign</Link></li>
              <li><Link href="/services" className="hover:text-secondary transition-colors">Porcelain Veneers</Link></li>
              <li><Link href="/services" className="hover:text-secondary transition-colors">Teeth Whitening</Link></li>
              <li><Link href="/services" className="hover:text-secondary transition-colors">Root Canal Therapy</Link></li>
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
