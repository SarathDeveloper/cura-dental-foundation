"use client";

import { MessageCircle, PhoneCall, Calendar } from "lucide-react";

export default function FloatingCTAs() {
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
