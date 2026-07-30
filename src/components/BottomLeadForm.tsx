import React, { useState } from 'react';
import { Send, Sparkles, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';
import { saveNewLead } from '../lib/leadStorage';
import { LeadInquiry } from '../types';

interface BottomLeadFormProps {
  onLeadSubmitted: (lead: LeadInquiry) => void;
}

export const BottomLeadForm: React.FC<BottomLeadFormProps> = ({ onLeadSubmitted }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const createdLead = saveNewLead({
        name: name.trim(),
        phone: phone.trim(),
        message: message.trim() || 'Bottom lead form inquiry',
        serviceSelected: 'Heavy Discount Lead'
      });

      setIsSubmitting(false);
      setSubmitted(true);
      onLeadSubmitted(createdLead);

      try {
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.8 }
        });
      } catch (err) {
        console.error(err);
      }
    }, 600);
  };

  return (
    <section className="bg-white text-slate-900 py-16 px-4 md:px-8 border-b border-amber-200/80">
      <div className="max-w-3xl mx-auto space-y-8">
        
        {/* Title */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-900 border border-amber-300 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>Limited Time Special Offer</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-black text-slate-900">
            Contact Us For Heavy discounts HURRY !
          </h2>
          <p className="text-slate-600 text-xs md:text-sm font-medium">
            Fill out the quick inquiry form below and get an instant discount code + custom proposal from Rahul Singh.
          </p>
        </div>

        {/* Form */}
        <div className="bg-slate-50 border border-amber-300 rounded-2xl p-6 md:p-8 shadow-sm">
          {submitted ? (
            <div className="bg-emerald-50 border border-emerald-300 rounded-xl p-8 text-center space-y-4">
              <div className="w-14 h-14 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                ✓
              </div>
              <h3 className="text-xl font-bold text-slate-900">Your Discount Claimed!</h3>
              <p className="text-xs md:text-sm text-slate-800 font-medium">
                Thank you <strong>{name}</strong>! We have locked in your heavy discount rate. Rahul Singh will reach out at <strong>{phone}</strong> shortly.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setName('');
                  setPhone('');
                  setMessage('');
                }}
                className="text-xs text-emerald-800 underline font-semibold pt-2 cursor-pointer"
              >
                Submit another inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" autoComplete="off">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  autoComplete="off"
                  autoCorrect="off"
                  autoCapitalize="off"
                  spellCheck={false}
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-white text-slate-900 font-medium px-4 py-3 rounded-lg text-sm border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number *</label>
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
                    placeholder="Phone No."
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-white text-slate-900 font-medium pl-18 pr-4 py-3 rounded-lg text-sm border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Comment or Message</label>
                <textarea
                  rows={3}
                  autoComplete="off"
                  autoCorrect="off"
                  autoCapitalize="off"
                  spellCheck={false}
                  placeholder="Comment or Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-white text-slate-900 font-medium px-4 py-2.5 rounded-lg text-sm border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-500"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-black text-base py-3.5 rounded-lg shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider mt-2"
              >
                {isSubmitting ? (
                  <span>Submitting...</span>
                ) : (
                  <>
                    <span>SUBMIT</span>
                    <Send className="w-4 h-4 fill-white text-white" />
                  </>
                )}
              </button>
            </form>
          )}

          <div className="mt-4 pt-3 border-t border-slate-200 text-center text-[11px] text-slate-500 font-medium flex items-center justify-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Clickin Digital • Official Response within 15 Minutes</span>
          </div>
        </div>

      </div>
    </section>
  );
};
