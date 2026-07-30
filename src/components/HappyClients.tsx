import React from 'react';
import { ArrowRight, Quote } from 'lucide-react';

interface HappyClientsProps {
  onBookCallClick: () => void;
}

export const HappyClients: React.FC<HappyClientsProps> = ({ onBookCallClick }) => {
  const testimonials = [
    {
      id: "t-1",
      name: "Rohit Sharma",
      title: "Business Owner",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
      quote: "Clickin DMA transformed our online presence. Their team is professional, creative and delivers beyond expectations."
    },
    {
      id: "t-2",
      name: "Neha Verma",
      title: "Marketing Head",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
      quote: "Great experience working with Clickin DMA. Their SEO and Ads strategy helped us get quality leads consistently."
    },
    {
      id: "t-3",
      name: "Ankit Mehra",
      title: "Founder",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
      quote: "Highly recommended! Their website design and support is top-notch. Amazing team and great results."
    }
  ];

  return (
    <section className="bg-slate-50/50 py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header matching screenshot */}
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">
            CLIENTS LOVE US
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            What Our Clients Say
          </h2>
        </div>

        {/* 3 Testimonials Grid matching screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-[#f8fafc] border border-slate-200/80 rounded-2xl p-6 shadow-sm flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <Quote className="w-6 h-6 text-slate-300" />
                <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                  "{item.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-10 h-10 rounded-full object-cover border border-slate-200"
                />
                <div>
                  <h4 className="font-extrabold text-slate-900 text-xs sm:text-sm">
                    {item.name}
                  </h4>
                  <p className="text-[11px] text-slate-500 font-medium">
                    {item.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Ready to Grow Your Business CTA Banner matching screenshot */}
        <div className="bg-[#f8fafc] border border-slate-200/80 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              Ready to Grow Your Business?
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm font-medium">
              Let's build something amazing together.
            </p>
          </div>

          <button
            onClick={onBookCallClick}
            className="bg-slate-950 hover:bg-slate-800 text-white font-bold px-6 py-3 rounded-full text-xs sm:text-sm shadow-md transition-all flex items-center gap-2 cursor-pointer group shrink-0"
          >
            <span>Get In Touch</span>
            <div className="w-5 h-5 rounded-full bg-white/20 group-hover:bg-white/30 flex items-center justify-center transition-colors">
              <ArrowRight className="w-3 h-3 text-white" />
            </div>
          </button>
        </div>

      </div>
    </section>
  );
};

