import React from 'react';
import { Search, Bot, Layout, MessageSquare, Zap, Target, TrendingUp, ShoppingBag, ShieldCheck, Sparkles, MapPin, Code2, Cpu } from 'lucide-react';

export const DarkServicesTicker: React.FC = () => {
  const serviceGroup1 = [
    {
      badge: "SEO",
      title: "Search Engine Optimization (SEO)",
      desc: "Top #1 organic Google rankings, technical speed optimization, schema markup & high-converting local backlinks.",
      icon: Search,
      highlight: "#1 Google Ranking",
      color: "border-emerald-500/40 text-emerald-400 bg-emerald-500/10"
    },
    {
      badge: "GEO",
      title: "Generative Engine Optimization (GEO)",
      desc: "Optimize your brand for AI search engines including ChatGPT, Perplexity AI, Google AI Overviews & Gemini.",
      icon: Bot,
      highlight: "AI Search Ready",
      color: "border-purple-500/40 text-purple-400 bg-purple-500/10"
    },
    {
      badge: "LOCAL MAP SEO",
      title: "Google Map Pack & Local Business SEO",
      desc: "Rank in the top 3 Google Map Local Pack for 'Website Designer Near Me' and local area keywords across Delhi NCR.",
      icon: MapPin,
      highlight: "Map Pack #1",
      color: "border-blue-500/40 text-blue-400 bg-blue-500/10"
    },
    {
      badge: "WEB DESIGN",
      title: "Website Designing & Development",
      desc: "High-converting ₹3,999 landing pages & ₹8,000 corporate business websites engineered for speed & mobile perfection.",
      icon: Layout,
      highlight: "Custom Web Dev",
      color: "border-emerald-500/40 text-emerald-400 bg-emerald-500/10"
    },
    {
      badge: "AUTOMATION",
      title: "WhatsApp Lead Automation",
      desc: "Instant lead capture, direct WhatsApp chat popups, automated CRM logging & instant Gmail notifications.",
      icon: MessageSquare,
      highlight: "Instant Chat",
      color: "border-green-500/40 text-green-400 bg-green-500/10"
    }
  ];

  const serviceGroup2 = [
    {
      badge: "GOOGLE ADS",
      title: "PPC & Google Ads Management",
      desc: "High-ROI Google Search & Google Maps Call Ads targeting buyers in Najafgarh, Dwarka, Uttam Nagar & West Delhi.",
      icon: Target,
      highlight: "High ROAS Leads",
      color: "border-red-500/40 text-red-400 bg-red-500/10"
    },
    {
      badge: "META ADS",
      title: "Facebook & Instagram Marketing",
      desc: "Laser-targeted lead funnels, video ads & social branding campaigns that drive continuous sales inquiries.",
      icon: TrendingUp,
      highlight: "Social Scale",
      color: "border-pink-500/40 text-pink-400 bg-pink-500/10"
    },
    {
      badge: "E-COMMERCE",
      title: "E-Commerce Stores & Payment Gateways",
      desc: "Full online store setups with Razorpay, Cash on Delivery, product catalogs & automated WhatsApp order alerts.",
      icon: ShoppingBag,
      highlight: "Online Sales",
      color: "border-orange-500/40 text-orange-400 bg-orange-500/10"
    },
    {
      badge: "CRO",
      title: "Conversion Rate Optimization (CRO)",
      desc: "Turn passive website visitors into paying clients with strategic direct-response copywriting & lightning <1s load times.",
      icon: Zap,
      highlight: "Max Conversions",
      color: "border-teal-500/40 text-teal-400 bg-teal-500/10"
    }
  ];

  const serviceGroup3 = [
    {
      badge: "UI/UX",
      title: "Modern UI/UX & Responsive Engineering",
      desc: "Bespoke, accessible design layouts with dark/light themes, micro-interactions, and flawless desktop & mobile rendering.",
      icon: Code2,
      highlight: "Ultra Responsive",
      color: "border-cyan-500/40 text-cyan-400 bg-cyan-500/10"
    },
    {
      badge: "AI AUTOMATION",
      title: "AI Workflows & Smart CRM",
      desc: "Connect your website directly to Google Sheets, Gmail, and instant WhatsApp alerts so zero client leads are ever lost.",
      icon: Cpu,
      highlight: "Zero Lead Loss",
      color: "border-teal-400/40 text-teal-300 bg-teal-400/10"
    },
    {
      badge: "SCHEMA & SEO",
      title: "JSON-LD Structured Data & Content",
      desc: "Rich snippet optimization so Google search displays your star ratings, pricing, FAQ schema & founder details.",
      icon: Sparkles,
      highlight: "Rich Snippets",
      color: "border-emerald-500/40 text-emerald-400 bg-emerald-500/10"
    },
    {
      badge: "BOOKING SYSTEM",
      title: "Online Appointment Booking",
      desc: "Automated booking portals for doctors, consultants, fitness studios & salons with payment advance integration.",
      icon: ShieldCheck,
      highlight: "24/7 Bookings",
      color: "border-indigo-500/40 text-indigo-400 bg-indigo-500/10"
    }
  ];

  // Tripled for endless vertical scrolling
  const col1Items = [...serviceGroup1, ...serviceGroup1, ...serviceGroup1];
  const col2Items = [...serviceGroup2, ...serviceGroup2, ...serviceGroup2];
  const col3Items = [...serviceGroup3, ...serviceGroup3, ...serviceGroup3];

  return (
    <section className="bg-slate-950 text-white py-20 px-4 md:px-8 border-t border-b border-slate-800 relative overflow-hidden select-none">
      
      {/* Background Decorative Tech Grid & Ambient Radial Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.04] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        
        {/* Section Title Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-slate-900 border border-emerald-500/40 px-4 py-1.5 rounded-full text-xs font-black text-emerald-400 uppercase tracking-widest shadow-lg shadow-emerald-500/10">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span>SEO • GEO • WEB DESIGN • GOOGLE ADS • LOCAL MAP PACK</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight tracking-tight">
            Full-Spectrum Digital & <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-300 to-emerald-400">Search Engineering</span>
          </h2>
          
          <p className="text-slate-400 text-sm md:text-base font-medium max-w-2xl mx-auto leading-relaxed">
            Our specialized services continuously move your business to the top of Google Search, AI Search Engines (ChatGPT, Gemini, Perplexity), and Google Maps with high-converting web architecture.
          </p>
        </div>

        {/* Highlight Keyword Badges Row */}
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto pt-2">
          {["SEO Optimization", "GEO (AI Search)", "Website Designing", "Local SEO Najafgarh", "Dwarka Web Dev", "Google Ads", "Meta Ads", "WhatsApp Automation", "E-Commerce Stores", "Custom Portals", "Google Maps #1"].map((kw, i) => (
            <span
              key={i}
              className="bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-emerald-500 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm transition-colors cursor-default"
            >
              🔥 {kw}
            </span>
          ))}
        </div>

        {/* Vertical Moving Ticker Container (Bottom-to-Top Scrolling) */}
        <div className="relative h-[460px] md:h-[520px] overflow-hidden rounded-3xl bg-slate-900/60 border border-slate-800 backdrop-blur-xl p-4 md:p-6 shadow-2xl">
          
          {/* Top & Bottom Gradient Mask Overlays */}
          <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-slate-950 via-slate-950/80 to-transparent z-20 pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent z-20 pointer-events-none" />

          {/* 3-Column Vertical Ticker Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-full">
            
            {/* Column 1 - Scrolling Bottom to Top */}
            <div className="overflow-hidden relative h-full">
              <div className="flex flex-col gap-5 animate-ticker-up">
                {col1Items.map((item, idx) => {
                  const IconComp = item.icon;
                  return (
                    <div
                      key={idx}
                      className="bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-emerald-500/50 rounded-2xl p-5 transition-all shadow-lg text-left space-y-3 shrink-0"
                    >
                      <div className="flex items-center justify-between">
                        <span className={`text-[10px] font-black tracking-widest uppercase px-2.5 py-1 rounded-md border ${item.color}`}>
                          {item.badge}
                        </span>
                        <span className="text-[11px] font-bold text-emerald-400/90 bg-emerald-400/10 px-2 py-0.5 rounded">
                          {item.highlight}
                        </span>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="p-2.5 rounded-xl bg-slate-800 border border-slate-700 text-emerald-400 shrink-0">
                          <IconComp className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-extrabold text-slate-100 text-sm leading-snug">
                            {item.title}
                          </h4>
                          <p className="text-xs text-slate-400 font-medium leading-relaxed mt-1">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Column 2 - Scrolling Bottom to Top (Slow Speed offset) */}
            <div className="overflow-hidden relative h-full hidden md:block">
              <div className="flex flex-col gap-5 animate-ticker-up-slow">
                {col2Items.map((item, idx) => {
                  const IconComp = item.icon;
                  return (
                    <div
                      key={idx}
                      className="bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-emerald-500/50 rounded-2xl p-5 transition-all shadow-lg text-left space-y-3 shrink-0"
                    >
                      <div className="flex items-center justify-between">
                        <span className={`text-[10px] font-black tracking-widest uppercase px-2.5 py-1 rounded-md border ${item.color}`}>
                          {item.badge}
                        </span>
                        <span className="text-[11px] font-bold text-emerald-400/90 bg-emerald-400/10 px-2 py-0.5 rounded">
                          {item.highlight}
                        </span>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="p-2.5 rounded-xl bg-slate-800 border border-slate-700 text-emerald-400 shrink-0">
                          <IconComp className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-extrabold text-slate-100 text-sm leading-snug">
                            {item.title}
                          </h4>
                          <p className="text-xs text-slate-400 font-medium leading-relaxed mt-1">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Column 3 - Scrolling Bottom to Top (Standard Speed) */}
            <div className="overflow-hidden relative h-full hidden lg:block">
              <div className="flex flex-col gap-5 animate-ticker-up">
                {col3Items.map((item, idx) => {
                  const IconComp = item.icon;
                  return (
                    <div
                      key={idx}
                      className="bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-emerald-500/50 rounded-2xl p-5 transition-all shadow-lg text-left space-y-3 shrink-0"
                    >
                      <div className="flex items-center justify-between">
                        <span className={`text-[10px] font-black tracking-widest uppercase px-2.5 py-1 rounded-md border ${item.color}`}>
                          {item.badge}
                        </span>
                        <span className="text-[11px] font-bold text-emerald-400/90 bg-emerald-400/10 px-2 py-0.5 rounded">
                          {item.highlight}
                        </span>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="p-2.5 rounded-xl bg-slate-800 border border-slate-700 text-emerald-400 shrink-0">
                          <IconComp className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-extrabold text-slate-100 text-sm leading-snug">
                            {item.title}
                          </h4>
                          <p className="text-xs text-slate-400 font-medium leading-relaxed mt-1">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
