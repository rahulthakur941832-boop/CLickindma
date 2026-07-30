import React from 'react';
import { Award, MapPin, Building2, Star } from 'lucide-react';

export const ClientLogoSlider: React.FC = () => {
  const clientLogos = [
    { name: "Yancure (www.yancure.com)", location: "Healthcare & Wellness", rating: "5.0 ★" },
    { name: "Doctor Yog (www.doctoryog.com)", location: "Medical & Tele-Consultation", rating: "5.0 ★" },
    { name: "GI Holidays (www.giholidays.in)", location: "Tours & Travel", rating: "5.0 ★" },
    { name: "ShopEasyMart (www.shopeasymart.in)", location: "E-Commerce Superstore", rating: "5.0 ★" },
    { name: "Pulse Vaid (www.pulsevaid.com)", location: "Ayurvedic Healthcare", rating: "5.0 ★" },
    { name: "Techno Solutions (www.techno-solutions.tech)", location: "IT & Digital Services", rating: "5.0 ★" },
    { name: "Anzac Safety Canada", location: "Global Client", rating: "5.0 ★" },
    { name: "Business Summits India", location: "Delhi NCR", rating: "5.0 ★" },
    { name: "Retro Constructions Australia", location: "Global Client", rating: "5.0 ★" }
  ];

  // Tripled list for endless seamless infinite scroll loop
  const seamlessList = [...clientLogos, ...clientLogos, ...clientLogos];

  return (
    <div className="bg-slate-100 border-y border-slate-200 py-3 sm:py-4 overflow-hidden select-none relative shadow-xs">
      
      <div className="max-w-7xl mx-auto px-4 mb-2.5 flex items-center justify-between text-xs text-slate-800 font-extrabold uppercase tracking-wider relative z-20">
        <span className="flex items-center gap-1.5 text-slate-900">
          <Award className="w-4 h-4 text-emerald-600" />
          <span>Trusted By 200+ Businesses Across Delhi NCR & Globally</span>
        </span>
        <span className="hidden sm:flex items-center gap-1 text-slate-600 font-bold normal-case text-xs">
          <MapPin className="w-3.5 h-3.5 text-emerald-600" />
          Najafgarh • Dwarka • Uttam Nagar • Tilak Nagar • Subhash Nagar
        </span>
      </div>

      {/* Gently Moving Infinite Marquee Slider (Left-to-Right, 40% size on mobile) */}
      <div className="relative w-full overflow-hidden flex items-center py-1 max-sm:h-8">
        
        {/* Left & Right Gradient Fade Masks */}
        <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-slate-100 to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-slate-100 to-transparent z-20 pointer-events-none" />

        <div className="flex items-center gap-2 sm:gap-4 animate-marquee-right whitespace-nowrap max-sm:scale-[0.4] max-sm:origin-left">
          {seamlessList.map((logo, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-3 bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-400 px-4 py-2 rounded-xl text-slate-800 transition-colors shadow-xs shrink-0"
            >
              <div className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-300 flex items-center justify-center text-emerald-700 font-black text-xs shrink-0">
                {logo.name.charAt(0)}
              </div>
              <div>
                <div className="text-xs font-black text-slate-900 flex items-center gap-1.5">
                  <span>{logo.name}</span>
                  <span className="text-[10px] text-slate-800 font-black bg-slate-100 px-1.5 py-0.2 rounded border border-slate-200">
                    {logo.rating}
                  </span>
                </div>
                <div className="text-[10px] text-slate-500 font-semibold flex items-center gap-1">
                  <Building2 className="w-2.5 h-2.5 text-slate-600" />
                  <span>{logo.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
