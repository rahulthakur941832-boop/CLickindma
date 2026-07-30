import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

interface FooterProps {
  onGetInTouchClick: () => void;
  onViewLeadsClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onGetInTouchClick, onViewLeadsClick }) => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Main 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Col 1: Brand & Bio */}
          <div className="space-y-4">
            <h3 className="font-extrabold text-xl text-white">Clickin DMA</h3>
            <p className="text-xs text-slate-400 leading-relaxed font-normal">
              Digital solutions that drive real results. We help businesses build strong online presence and convert visitors into loyal customers.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.facebook.com/rahul.ridham.singh/"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/clickin.digitalmarketingagency/"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://in.linkedin.com/in/rahul-singh-ridham"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-bold text-sm text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-xs text-slate-400 font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              <li>
                <button onClick={onViewLeadsClick} className="hover:text-white transition-colors text-left cursor-pointer">
                  Agency Inquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="space-y-3">
            <h4 className="font-bold text-sm text-white uppercase tracking-wider">Services</h4>
            <ul className="space-y-2 text-xs text-slate-400 font-medium">
              <li><a href="#services" className="hover:text-white transition-colors">Website Design</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">SEO Optimization</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Google Ads</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Social Media Marketing</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">E-Commerce Solutions</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Analytics & Reporting</a></li>
            </ul>
          </div>

          {/* Col 4: Contact Us */}
          <div className="space-y-3">
            <h4 className="font-bold text-sm text-white uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-3 text-xs text-slate-400 font-medium">
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                <a href="mailto:clickindma@gmail.com" className="hover:text-white transition-colors">
                  clickindma@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                <a href="tel:+918882292448" className="hover:text-white transition-colors">
                  +91 88822 92448
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <span>Dwarka, Delhi NCR, India</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 text-center text-xs text-slate-500 font-medium">
          © 2025 Clickin DMA. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

