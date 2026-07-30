import React from 'react';
import { MessageCircle, PhoneCall, CheckCircle2, X, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { LeadInquiry } from '../types';
import { trackWhatsAppClick, trackPhoneCallClick } from '../lib/analytics';

interface WhatsAppLeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  leadData: LeadInquiry | null;
}

export const WhatsAppLeadModal: React.FC<WhatsAppLeadModalProps> = ({
  isOpen,
  onClose,
  leadData
}) => {
  if (!isOpen || !leadData) return null;

  const phoneNumber = "918882292448";
  const messageText = `Hello Rahul Singh! I just submitted an inquiry on Clickin DMA website:\n\n*Name:* ${leadData.name}\n*Phone:* ${leadData.phone}\n*Service:* ${leadData.serviceSelected || 'Website Inquiry'}\n*Note:* ${leadData.message || 'I would like to discuss my project.'}\n\nPlease get in touch with me!`;
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(messageText)}`;

  const handleOpenWhatsApp = () => {
    trackWhatsAppClick('WhatsApp Lead Confirmation Modal');
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-[100] bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-white border-2 border-emerald-500 rounded-3xl max-w-md w-full shadow-2xl overflow-hidden relative animate-in zoom-in-95 duration-300 text-slate-900">
        
        {/* Top Celebration Header */}
        <div className="bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 text-white p-6 text-center relative overflow-hidden">
          {/* Subtle background glow circle */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-xl pointer-events-none" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full bg-black/20 text-white hover:bg-black/40 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 text-white shadow-lg mb-3">
            <CheckCircle2 className="w-8 h-8 text-white" />
          </div>

          <h3 className="text-xl font-black text-white tracking-tight flex items-center justify-center gap-2">
            Inquiry Sent Successfully!
            <Sparkles className="w-5 h-5 text-emerald-200" />
          </h3>
          <p className="text-xs text-emerald-100 font-medium mt-1">
            We have saved your request & sent a notification to Rahul Singh.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5">
          
          {/* Lead Summary Card */}
          <div className="bg-emerald-50/60 border border-emerald-200 rounded-2xl p-4 space-y-2 text-xs">
            <div className="flex items-center justify-between pb-2 border-b border-emerald-200/60">
              <span className="font-extrabold text-emerald-950 uppercase tracking-wider text-[10px]">Client Details</span>
              <span className="text-[10px] bg-emerald-200/80 font-bold px-2 py-0.5 rounded text-emerald-900">Recorded</span>
            </div>
            
            <div className="grid grid-cols-2 gap-2 text-slate-800 pt-1">
              <div>
                <span className="text-slate-500 font-medium block text-[10px]">Name</span>
                <strong className="text-slate-900 font-bold text-sm block truncate">{leadData.name}</strong>
              </div>
              <div>
                <span className="text-slate-500 font-medium block text-[10px]">Phone</span>
                <strong className="text-slate-900 font-bold text-sm block">{leadData.phone}</strong>
              </div>
            </div>

            <div className="pt-1">
              <span className="text-slate-500 font-medium block text-[10px]">Selected Service / Package</span>
              <span className="text-emerald-800 font-extrabold text-xs bg-white px-2.5 py-1 rounded-lg border border-emerald-200 inline-block mt-0.5">
                {leadData.serviceSelected || 'Website & Lead Growth Inquiry'}
              </span>
            </div>
          </div>

          {/* Action Prompt */}
          <div className="text-center space-y-1">
            <h4 className="text-sm font-black text-slate-900 flex items-center justify-center gap-1.5">
              <span>Start Direct WhatsApp Chat Now</span>
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
            </h4>
            <p className="text-xs text-slate-600 font-medium">
              Click below to chat immediately with <strong>Rahul Singh</strong> (+91 88822 92448) for instant project estimation!
            </p>
          </div>

          {/* Big WhatsApp CTA Button */}
          <button
            onClick={handleOpenWhatsApp}
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-4 px-6 rounded-2xl shadow-xl shadow-emerald-500/25 flex items-center justify-center gap-3 font-black text-base cursor-pointer transition-all hover:scale-[1.02] active:scale-95 group"
          >
            <MessageCircle className="w-6 h-6 text-white fill-white" />
            <span>Connect on WhatsApp Instant</span>
            <ArrowRight className="w-5 h-5 text-emerald-100 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Secondary Direct Phone Call Button */}
          <div className="pt-1 flex items-center justify-between text-xs text-slate-500">
            <span className="flex items-center gap-1 text-slate-600 font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              Direct Agency Line
            </span>
            <a
              href="tel:+918882292448"
              className="text-emerald-700 hover:text-emerald-800 font-black flex items-center gap-1 underline"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              Call +91 88822 92448
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};
