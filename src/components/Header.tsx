import React, { useState } from 'react';
import { Phone, MessageCircle, Sparkles, Tag, ShieldCheck, Award, Menu, X, ArrowRight } from 'lucide-react';

interface HeaderProps {
  onBookCallClick: () => void;
  onDiscountClick: () => void;
  onViewLeadsClick?: () => void;
  leadCount?: number;
}

export const Header: React.FC<HeaderProps> = ({
  onBookCallClick,
  onDiscountClick,
  onViewLeadsClick,
  leadCount = 0
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      {/* Top Announcement Bar */}
      <div className="bg-slate-900 text-white px-4 py-1.5 font-bold flex items-center justify-between gap-2 border-b border-slate-800 text-xs sm:text-sm">
        <div className="mx-auto flex items-center gap-2 tracking-tight font-extrabold text-center">
          <Sparkles className="w-4 h-4 text-emerald-400 animate-pulse shrink-0" />
          <span>OFFER: WEBSITE + LOCAL LEAD GENERATION AUTOMATION @ ₹3,999/-</span>
        </div>
        <button
          onClick={onBookCallClick}
          className="hidden sm:flex bg-emerald-600 hover:bg-emerald-700 text-white px-3.5 py-1 rounded-full text-xs font-black transition-all shadow-sm items-center gap-1 cursor-pointer shrink-0 uppercase tracking-wider"
        >
          <Phone className="w-3 h-3" />
          <span>CALL NOW</span>
        </button>
      </div>

      {/* Main Agency Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4">
        {/* Brand Logo & Name */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-slate-900 text-white font-black text-xl flex items-center justify-center shadow-md group-hover:scale-105 transition-transform shrink-0">
            C
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-black text-xl sm:text-2xl tracking-tight text-slate-900 group-hover:text-emerald-600 transition-colors">
                Clickin DMA
              </span>
              <span className="bg-slate-100 text-slate-800 border border-slate-300 text-[10px] font-extrabold px-1.5 py-0.5 rounded">
                Rahul Singh
              </span>
            </div>
            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest -mt-0.5">
              DIGITAL MARKETING AGENCY
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-bold text-slate-700">
          <a href="#" className="hover:text-emerald-600 transition-colors">Home</a>
          <a href="#services" className="hover:text-emerald-600 transition-colors">Services</a>
          <a href="#portfolio" className="hover:text-emerald-600 transition-colors">Portfolio</a>
          <a href="#packages" className="hover:text-emerald-600 transition-colors">Pricing & Plans</a>
          <a href="#local-areas" className="hover:text-emerald-600 transition-colors">Local Areas</a>
          <a href="#about" className="hover:text-emerald-600 transition-colors">About</a>
          <a href="#contact" className="hover:text-emerald-600 transition-colors">Contact</a>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Admin Leads Icon */}
          {onViewLeadsClick && (
            <button
              onClick={onViewLeadsClick}
              title="Agency Inquiries Portal"
              className="relative p-2 text-slate-600 hover:text-slate-900 bg-slate-100 border border-slate-200 rounded-xl text-xs transition-colors cursor-pointer"
            >
              <ShieldCheck className="w-4 h-4 text-slate-700" />
              {leadCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center shadow-sm">
                  {leadCount}
                </span>
              )}
            </button>
          )}

          {/* Discount CTA Button */}
          <button
            onClick={onDiscountClick}
            className="hidden sm:flex bg-slate-900 hover:bg-slate-800 text-white font-extrabold px-3.5 py-2 rounded-xl text-xs shadow transition-all items-center gap-1.5 cursor-pointer uppercase tracking-wider"
          >
            <Tag className="w-3.5 h-3.5 text-emerald-400" />
            <span>DISCOUNTS</span>
          </button>

          {/* WhatsApp / Direct Call CTA */}
          <a
            href="https://wa.me/918882292448?text=Hi%20Rahul%20Singh%2C%20I%20am%20interested%20in%20Website%20Designing%20%26%20Digital%20Marketing%20services."
            target="_blank"
            rel="noreferrer"
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs shadow-md transition-all flex items-center gap-1.5 cursor-pointer shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span className="hidden xs:inline">WhatsApp</span>
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-slate-900 rounded-lg lg:hidden cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Sub-header Bar for Quick Services */}
      <div className="hidden md:block bg-slate-900 text-slate-200 px-4 py-1.5 text-xs font-semibold border-t border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-slate-300">
            <span className="text-emerald-400 font-extrabold flex items-center gap-1">
              <Award className="w-3.5 h-3.5" />
              West Delhi's Top Rated Agency:
            </span>
            <a href="#services" className="hover:text-emerald-400 transition-colors">Najafgarh</a> •
            <a href="#services" className="hover:text-emerald-400 transition-colors">Dwarka Sector 12</a> •
            <a href="#services" className="hover:text-emerald-400 transition-colors">Uttam Nagar</a> •
            <a href="#services" className="hover:text-emerald-400 transition-colors">Tilak Nagar</a> •
            <a href="#services" className="hover:text-emerald-400 transition-colors">Subhash Nagar</a>
          </div>

          <a href="tel:+918882292448" className="text-emerald-400 font-mono font-extrabold hover:underline">
            📞 Direct Call: +91 88822 92448
          </a>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-3 shadow-xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-2 text-sm font-bold text-slate-800">
            <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-slate-100 hover:text-slate-900">Home</a>
            <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-slate-100 hover:text-slate-900">Services</a>
            <a href="#portfolio" onClick={() => setIsMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-slate-100 hover:text-slate-900">Portfolio</a>
            <a href="#packages" onClick={() => setIsMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-slate-100 hover:text-slate-900">Pricing & Packages (from ₹3,999)</a>
            <a href="#local-areas" onClick={() => setIsMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-slate-100 hover:text-slate-900">Local Area Services</a>
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-slate-100 hover:text-slate-900">About Rahul Singh</a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-slate-100 hover:text-slate-900">Contact Us</a>
          </nav>
          <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-2">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onDiscountClick();
              }}
              className="flex-1 bg-slate-900 text-white font-black py-2.5 rounded-xl text-xs flex items-center justify-center gap-1.5 uppercase"
            >
              <Tag className="w-3.5 h-3.5 text-emerald-400" />
              <span>Get Discount</span>
            </button>
            <a
              href="tel:+918882292448"
              className="flex-1 bg-emerald-600 text-white font-bold py-2.5 rounded-xl text-xs flex items-center justify-center gap-1.5 text-center uppercase"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Rahul</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};


