import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, Sparkles, Gift, ArrowRight, ShieldCheck, X, Search, Zap, HelpCircle } from 'lucide-react';
import { trackWhatsAppClick, trackPhoneCallClick } from '../lib/analytics';

interface OfferItem {
  id: string;
  badge: string;
  title: string;
  sub: string;
  icon: string;
  whatsappMessage: string;
}

const OFFERS: OfferItem[] = [
  {
    id: 'free-hosting',
    badge: 'Limited Offer #1',
    title: 'Claim Free Hosting Setup',
    sub: 'Included with all custom website builds!',
    icon: 'Gift',
    whatsappMessage: 'Hi Rahul, I want to claim the FREE Hosting Setup offer for my website!'
  },
  {
    id: 'free-landing-page',
    badge: 'Popular Deal #2',
    title: 'Get Free Landing Page Consultation',
    sub: 'Get wireframe & strategy before ordering',
    icon: 'Sparkles',
    whatsappMessage: 'Hi Rahul, I want a FREE Landing Page Consultation & Wireframe for my business.'
  },
  {
    id: 'free-seo-audit',
    badge: 'High-Value Offer #3',
    title: 'Free SEO Ranking Audit (Worth ₹5,000)',
    sub: 'Instant report on Google rank opportunities',
    icon: 'Search',
    whatsappMessage: 'Hi Rahul, please send me a FREE SEO Audit Report for my website/business!'
  },
  {
    id: 'free-ssl-domain',
    badge: 'Security Perk #4',
    title: 'Free SSL Certificate & Security Setup',
    sub: 'Keep your website 100% safe & trusted',
    icon: 'ShieldCheck',
    whatsappMessage: 'Hi Rahul, I need information on the Free SSL & Security setup offer.'
  },
  {
    id: 'free-speed-opt',
    badge: 'Performance Perk #5',
    title: 'Free Speed Optimization Audit',
    sub: 'Lightning 90+ Mobile Speed Guarantee',
    icon: 'Zap',
    whatsappMessage: 'Hi Rahul, I want a FREE Speed Optimization Audit for my website.'
  }
];

export const FloatingContact: React.FC = () => {
  const [currentOfferIndex, setCurrentOfferIndex] = useState(0);
  const [isOfferVisible, setIsOfferVisible] = useState(true);
  const [isAdviceWidgetOpen, setIsAdviceWidgetOpen] = useState(false);
  const [pulseKey, setPulseKey] = useState(0);

  // Rotate offer every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentOfferIndex((prevIndex) => (prevIndex + 1) % OFFERS.length);
      setPulseKey((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const activeOffer = OFFERS[currentOfferIndex];

  const getOfferIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles': return <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />;
      case 'Search': return <Search className="w-4 h-4 text-emerald-600 shrink-0" />;
      case 'ShieldCheck': return <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />;
      case 'Zap': return <Zap className="w-4 h-4 text-emerald-600 shrink-0" />;
      default: return <Gift className="w-4 h-4 text-emerald-600 shrink-0" />;
    }
  };

  return (
    <div className="fixed bottom-5 right-4 sm:right-6 z-50 flex flex-col items-end gap-3 select-none">

      {/* Recommendation Panel Drawer / Popup */}
      {isAdviceWidgetOpen && (
        <div className="w-[310px] sm:w-[350px] bg-white/95 backdrop-blur-xl border border-slate-200 rounded-2xl shadow-2xl p-5 text-slate-900 space-y-4 animate-in fade-in slide-in-from-bottom-5 duration-300 relative">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-slate-100 text-slate-800 border border-slate-200">
                <HelpCircle className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <h4 className="text-sm font-black text-slate-900 flex items-center gap-1.5">
                  Growth Recommendation Desk
                </h4>
                <p className="text-[11px] text-slate-600 font-medium">Instant Website & Growth Advice</p>
              </div>
            </div>
            <button
              onClick={() => setIsAdviceWidgetOpen(false)}
              className="p-1 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-slate-700 leading-relaxed font-medium">
            Select your goal below to get immediate package suggestions and claim instant agency discounts:
          </p>

          <div className="space-y-2 text-xs">
            <a
              href={`https://wa.me/918882292448?text=${encodeURIComponent("Hi Rahul, I need a high-converting Landing Page (₹3,999) for my new startup.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-left p-2.5 rounded-xl bg-slate-50 hover:bg-emerald-50 border border-slate-200 hover:border-emerald-300 transition-all font-bold text-slate-800 hover:text-emerald-900 flex items-center justify-between group"
            >
              <span>🚀 Landing Page for Startup (₹3,999)</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-700" />
            </a>

            <a
              href={`https://wa.me/918882292448?text=${encodeURIComponent("Hi Rahul, I want to build a 5-Page Professional Website (₹8,000) for my business.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-left p-2.5 rounded-xl bg-slate-50 hover:bg-emerald-50 border border-slate-200 hover:border-emerald-300 transition-all font-bold text-slate-800 hover:text-emerald-900 flex items-center justify-between group"
            >
              <span>⭐ Professional Website (₹8,000)</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-700" />
            </a>

            <a
              href={`https://wa.me/918882292448?text=${encodeURIComponent("Hi Rahul, I need a Booking / E-Commerce Website with Razorpay payment gateway.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-left p-2.5 rounded-xl bg-slate-50 hover:bg-emerald-50 border border-slate-200 hover:border-emerald-300 transition-all font-bold text-slate-800 hover:text-emerald-900 flex items-center justify-between group"
            >
              <span>🛒 Booking / E-Commerce Website</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-700" />
            </a>

            <a
              href={`https://wa.me/918882292448?text=${encodeURIComponent("Hi Rahul, please analyze my existing website for a Free SEO & Speed Audit.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-left p-2.5 rounded-xl bg-slate-50 hover:bg-emerald-50 border border-slate-200 hover:border-emerald-300 transition-all font-bold text-slate-800 hover:text-emerald-900 flex items-center justify-between group"
            >
              <span>🔍 Free SEO & Speed Ranking Audit</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-700" />
            </a>
          </div>

          <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-600 font-medium">
            <span>Direct WhatsApp Helpline</span>
            <span className="font-extrabold text-slate-900">+91 88822 92448</span>
          </div>
        </div>
      )}

      {/* Dynamic 3-Second Rotating Offer Popup Bubble */}
      {isOfferVisible && (
        <div className="relative group max-w-[280px] sm:max-w-[320px]">
          <a
            href={`https://wa.me/918882292448?text=${encodeURIComponent(activeOffer.whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white/95 backdrop-blur-md border border-slate-200 hover:border-emerald-500 p-3.5 rounded-2xl shadow-xl transition-all duration-300 relative overflow-hidden group hover:scale-[1.02]"
          >
            {/* Animated 3-second top border countdown line */}
            <div
              key={`line-${currentOfferIndex}`}
              className="absolute top-0 left-0 h-0.5 bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-500 w-full animate-[shrink_3s_linear_infinite]"
            />

            <div className="flex items-start gap-3">
              <div className="p-2 bg-emerald-50 border border-emerald-200 rounded-xl shrink-0 mt-0.5 text-emerald-800">
                {getOfferIcon(activeOffer.icon)}
              </div>
              <div className="space-y-0.5 min-w-0 flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-wider text-emerald-900 bg-emerald-100 px-2 py-0.5 rounded-md border border-emerald-200">
                    {activeOffer.badge}
                  </span>
                  <span className="text-[10px] text-slate-500 font-medium">Auto Updates (3s)</span>
                </div>
                <h5 className="text-xs font-black text-slate-900 truncate pt-1">
                  {activeOffer.title}
                </h5>
                <p className="text-[11px] text-slate-600 leading-snug font-medium">
                  {activeOffer.sub}
                </p>
                <div className="pt-1.5 flex items-center gap-1 text-[11px] font-bold text-emerald-700 group-hover:underline">
                  <span>Tap to Claim on WhatsApp</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </div>
          </a>

          {/* Close offer notification button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsOfferVisible(false);
            }}
            className="absolute -top-2 -left-2 bg-slate-100 border border-slate-300 text-slate-600 hover:text-slate-900 rounded-full p-1 shadow-md transition-colors"
            title="Dismiss notification"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Two Call-To-Action Floating Buttons Row (WhatsApp + Direct Call / AI Assistant) */}
      <div className="flex items-center gap-3">

        {/* Growth Recommendation Trigger Button */}
        <button
          onClick={() => setIsAdviceWidgetOpen(!isAdviceWidgetOpen)}
          className="bg-white hover:bg-slate-50 text-slate-900 border border-slate-300 hover:border-slate-400 px-3.5 py-2.5 rounded-full shadow-lg flex items-center gap-2 text-xs font-black cursor-pointer transition-all hover:scale-105 group"
        >
          <HelpCircle className="w-4 h-4 text-emerald-600" />
          <span className="hidden sm:inline">Growth Advice</span>
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
        </button>

        {/* CTA 1: Direct Phone Call Button */}
        <a
          href="tel:+918882292448"
          onClick={() => trackPhoneCallClick('Floating Call Button')}
          aria-label="Call Now"
          className="h-12 px-4 bg-white hover:bg-slate-900 hover:text-white border border-slate-300 text-slate-900 rounded-full flex items-center justify-center gap-2 shadow-lg transition-all duration-300 hover:scale-105 group cursor-pointer"
        >
          <Phone className="w-4 h-4 text-emerald-600 group-hover:text-white fill-current" />
          <span className="text-xs font-black tracking-wide hidden sm:inline">+91 88822 92448</span>
          <span className="text-xs font-black tracking-wide sm:hidden">Call</span>
        </a>

        {/* CTA 2: Primary WhatsApp Floating Button */}
        <a
          key={`wa-${pulseKey}`}
          href={`https://wa.me/918882292448?text=${encodeURIComponent(activeOffer.whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsAppClick('Floating Bubble Button')}
          aria-label="Chat on WhatsApp"
          className="w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-[0_0_25px_rgba(16,185,129,0.4)] transition-all duration-300 hover:scale-110 relative group cursor-pointer"
        >
          <MessageCircle className="w-7 h-7 fill-white stroke-emerald-600" />

          {/* Pulse Ripple Effect */}
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-ping" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white" />

          {/* Hover Tooltip */}
          <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl border border-slate-700">
            WhatsApp Rahul Singh (+91 88822 92448)
          </span>
        </a>

      </div>

    </div>
  );
};
