import React, { useState } from 'react';
import { X, Tag, Sparkles, Check, Send } from 'lucide-react';
import confetti from 'canvas-confetti';
import { saveNewLead } from '../lib/leadStorage';
import { LeadInquiry } from '../types';

interface DiscountModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLeadSubmitted: (lead: LeadInquiry) => void;
}

export const DiscountModal: React.FC<DiscountModalProps> = ({
  isOpen,
  onClose,
  onLeadSubmitted
}) => {
  const [claimedDiscount, setClaimedDiscount] = useState<string>('20% OFF');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [claimed, setClaimed] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const createdLead = saveNewLead({
        name: name.trim(),
        phone: phone.trim(),
        message: `Claimed Special Offer: ${claimedDiscount}`,
        serviceSelected: `Discount Offer (${claimedDiscount})`
      });

      setIsSubmitting(false);
      setClaimed(true);
      onLeadSubmitted(createdLead);

      try {
        confetti({
          particleCount: 100,
          spread: 90,
          origin: { y: 0.5 }
        });
      } catch (err) {
        console.error(err);
      }
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-white border-2 border-slate-300 rounded-3xl max-w-md w-full p-6 md:p-8 space-y-6 relative shadow-2xl animate-in zoom-in-95 duration-200 text-slate-900">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-slate-100 text-slate-600 hover:text-slate-900 p-2 rounded-full cursor-pointer transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center space-y-2">
          <div className="w-14 h-14 bg-slate-100 border border-slate-300 rounded-2xl flex items-center justify-center mx-auto text-slate-800">
            <Tag className="w-7 h-7" />
          </div>
          <span className="text-xs font-bold text-slate-900 uppercase tracking-widest bg-slate-100 px-3 py-1 rounded-full border border-slate-300 inline-block">
            CLICKIN DIGITAL EXCLUSIVE
          </span>
          <h3 className="text-2xl font-black text-slate-900">
            Unlock Special Discount!
          </h3>
          <p className="text-xs text-slate-600 font-medium">
            Get up to ₹2,000 extra off on Website & Lead Automation packages today.
          </p>
        </div>

        {/* Discount selector badges */}
        <div className="grid grid-cols-2 gap-2 text-center">
          {[
            { discount: '₹500 OFF', sub: 'Landing Page' },
            { discount: '₹1,000 OFF', sub: 'Professional' },
            { discount: '₹1,500 OFF', sub: 'Booking Website' },
            { discount: '₹2,000 OFF', sub: 'E-Commerce' }
          ].map((item, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setClaimedDiscount(item.discount)}
              className={`p-3 rounded-xl border transition-all text-xs cursor-pointer ${
                claimedDiscount === item.discount
                  ? 'bg-slate-900 text-white font-black border-slate-900 shadow-sm'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300 font-semibold'
              }`}
            >
              <div className="text-sm font-black">{item.discount}</div>
              <div className="text-[10px] opacity-80">{item.sub}</div>
            </button>
          ))}
        </div>

        {claimed ? (
          <div className="bg-emerald-50 border border-emerald-300 rounded-2xl p-6 text-center space-y-3">
            <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto font-black text-xl">
              <Check className="w-6 h-6 stroke-[3]" />
            </div>
            <h4 className="font-bold text-slate-900 text-base">
              Coupon Code Locked!
            </h4>
            <p className="text-xs text-slate-800 font-medium">
              Coupon <strong>{claimedDiscount}</strong> saved for <strong>{phone}</strong>. Rahul Singh will contact you to apply this discount.
            </p>
            <button
              onClick={onClose}
              className="bg-slate-900 text-white font-bold text-xs px-6 py-2.5 rounded-xl cursor-pointer hover:bg-slate-800"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4" autoComplete="off">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Your Name *</label>
              <input
                type="text"
                required
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck={false}
                placeholder="Enter Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-white text-slate-900 font-medium px-4 py-3 rounded-xl text-sm border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Mobile Number (for WhatsApp coupon) *</label>
              <div className="relative flex items-center">
                <span className="absolute left-3 text-sm font-bold text-slate-600 flex items-center gap-1">
                  🇮🇳 +91
                </span>
                <input
                  type="tel"
                  required
                  autoComplete="off"
                  autoCorrect="off"
                  autoCapitalize="off"
                  spellCheck={false}
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-white text-slate-900 font-medium pl-18 pr-4 py-3 rounded-xl text-sm border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-500"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-slate-900 hover:bg-slate-800 text-white font-black text-sm py-3.5 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider"
            >
              {isSubmitting ? (
                <span>Locking Discount...</span>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span>CLAIM {claimedDiscount} NOW</span>
                  <Send className="w-4 h-4 fill-white text-white" />
                </>
              )}
            </button>
          </form>
        )}

      </div>
    </div>
  );
};
