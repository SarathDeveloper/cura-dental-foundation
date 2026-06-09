"use client";

import { motion } from "framer-motion";
import { Star, CheckCircle, MessageCircle, ArrowRight } from "lucide-react";

export default function ReviewsPage() {
  const reviews = [
    { name: "Santhosh M.", text: "The absolute best dental experience I've ever had. The clinic feels like a luxury hotel, and Dr. Karthik is incredibly skilled.", stars: 5, img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop" },
    { name: "Priya K.", text: "I was always terrified of the dentist until I found Cura. Completely pain-free root canal and the staff is wonderful.", stars: 5, img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop" },
    { name: "Arvind S.", text: "My smile makeover changed my life. State of the art equipment and true professionalism. Highly recommend!", stars: 5, img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" },
    { name: "Meera R.", text: "The invisalign treatment was seamless. I got exactly the results I was promised without any hidden costs.", stars: 5, img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop" },
    { name: "Rahul V.", text: "Got a dental implant done here. The 3D scanning made the process so fast and the fit is perfect.", stars: 5, img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop" },
    { name: "Anita D.", text: "Took my kids here for pediatric care. The doctor was so patient and made it a fun experience for them.", stars: 5, img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop" },
  ];

  return (
    <div className="pt-24 min-h-screen bg-background">
      <section className="py-20 text-center px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-serif text-primary mb-6"
        >
          Patient Stories
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
          className="text-text max-w-2xl mx-auto text-lg mb-8"
        >
          Don't just take our word for it. Read what our patients have to say about their experience.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }}
          className="flex items-center justify-center gap-2 text-xl font-bold text-primary bg-white inline-flex px-8 py-4 rounded-full shadow-lg border border-primary/5"
        >
          4.9 <Star className="w-6 h-6 fill-secondary text-secondary" /> Average Rating on Google
        </motion.div>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
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

      {/* Before & After Showcase */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif text-primary mb-4">Before & After Showcase</h2>
            <p className="text-text max-w-2xl mx-auto">Real results from our patients. Witness the transformative power of premium dental care.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="group relative rounded-[2rem] overflow-hidden shadow-xl aspect-video">
              <img src="https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?q=80&w=2071&auto=format&fit=crop" alt="Smile Makeover" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/80 to-transparent p-6 pt-20">
                <h3 className="text-white text-xl font-bold mb-2">Complete Smile Makeover</h3>
                <p className="text-white/80 text-sm">Veneers & Whitening - 2 Sessions</p>
              </div>
            </div>
            <div className="group relative rounded-[2rem] overflow-hidden shadow-xl aspect-video">
              <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2070&auto=format&fit=crop" alt="Invisalign Results" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/80 to-transparent p-6 pt-20">
                <h3 className="text-white text-xl font-bold mb-2">Invisalign Treatment</h3>
                <p className="text-white/80 text-sm">Clear Aligners - 14 Months</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leave a Review CTA */}
      <section className="py-24 bg-primary text-center px-4">
        <div className="max-w-3xl mx-auto">
          <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-8">
            <MessageCircle className="w-10 h-10 text-secondary" />
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">Share Your Experience</h2>
          <p className="text-white/80 text-lg mb-10 leading-relaxed">
            Your feedback helps us continue to provide world-class care and helps other patients make informed decisions about their dental health.
          </p>
          <button onClick={() => alert('Redirecting to Google Reviews...')} className="bg-secondary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-primary transition-colors shadow-xl flex justify-center items-center gap-3 mx-auto">
            Leave a Review <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
