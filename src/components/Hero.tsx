import React, { useState } from 'react';
import { CheckCircle2, Tag, Send, ShieldCheck, PhoneCall, Award } from 'lucide-react';
import confetti from 'canvas-confetti';
import { saveNewLead } from '../lib/leadStorage';
import { LeadInquiry } from '../types';

interface HeroProps {
  onDiscountClick: () => void;
  onLeadSubmitted: (lead: LeadInquiry) => void;
}

export const Hero: React.FC<HeroProps> = ({ onDiscountClick, onLeadSubmitted }) => {
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
        message: message.trim() || 'Hero section lead form submission',
        serviceSelected: 'Starter/Hero Website Lead'
      });

      setIsSubmitting(false);
      setSubmitted(true);
      onLeadSubmitted(createdLead);

      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        console.error(err);
      }
    }, 600);
  };

  return (
    <section className="relative bg-gradient-to-b from-slate-100 via-white to-slate-50 text-slate-900 py-10 sm:py-16 md:py-20 px-4 md:px-8 border-b border-slate-200 overflow-hidden">
      {/* Background glow accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-slate-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-slate-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
        
        {/* Left Hero Details */}
        <div className="lg:col-span-7 space-y-5 sm:space-y-6">
          <div className="inline-flex items-center gap-2 bg-slate-100 border border-slate-300 px-3.5 py-1.5 rounded-full text-xs md:text-sm font-bold text-slate-900">
            <Award className="w-4 h-4 text-slate-700 shrink-0" />
            <span>Rahul Singh • Clickin DMA</span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight tracking-tight">
            Professional Responsive Website Designing <br className="hidden sm:inline" />
            <span className="text-red-600">Starts from ₹3999</span>
          </h1>

          <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-2xl font-normal">
            <strong className="text-slate-900 font-bold">Clickin Digital</strong> (Lead Generation & Marketing Automation Specialist) will help you create a beautiful, high-converting website to impress and engage new customers and scale your business online.
          </p>

          {/* Bullet List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 pt-1 text-xs sm:text-sm text-slate-700">
            {[
              'Responsive Website Design',
              'Dedicated Account Manager (Rahul)',
              'Affordable & Transparent Cost',
              '24/7 Priority Support',
              '100% Satisfaction Guaranteed',
              'One Week Unlimited Revision'
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 shrink-0" />
                <span className="font-semibold text-slate-800">{item}</span>
              </div>
            ))}
          </div>

          {/* Discounts CTA Button */}
          <div className="pt-3 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <button
              onClick={onDiscountClick}
              className="w-full sm:w-auto bg-gradient-to-r from-red-600 via-red-700 to-slate-900 hover:from-red-700 hover:to-slate-950 text-white font-black text-sm sm:text-base px-6 sm:px-8 py-3.5 rounded-xl shadow-md transition-all transform hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2 border border-red-500/40 uppercase tracking-wide"
            >
              <Tag className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              CLICK HERE FOR DISCOUNTS
            </button>

            <a
              href="tel:+918882292448"
              className="w-full sm:w-auto bg-white hover:bg-slate-50 border border-slate-300 text-slate-900 font-bold px-6 py-3.5 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-sm"
            >
              <PhoneCall className="w-4 h-4 text-emerald-600 shrink-0" />
              Direct Call: +91 88822 92448
            </a>
          </div>

          {/* Rating indicator */}
          <div className="pt-1 flex items-center gap-2.5 text-xs text-slate-500">
            <div className="flex text-orange-500 font-bold">
              {'★'.repeat(5)}
            </div>
            <span className="font-medium">Top Rated Web Designing & Digital Marketing Agency • 200+ Indian Businesses Served</span>
          </div>
        </div>

        {/* Right Lead Capture Form Card */}
        <div className="lg:col-span-5">
          <div className="bg-white/95 border-2 border-slate-300 rounded-2xl p-5 sm:p-6 md:p-8 shadow-xl relative overflow-hidden backdrop-blur-md text-slate-900">
            {/* Header tag */}
            <div className="text-center space-y-1.5 mb-5 sm:mb-6">
              <span className="text-slate-900 font-extrabold text-xs uppercase tracking-widest bg-slate-100 px-3.5 py-1 rounded-full border border-slate-300 inline-block">
                Avail discounts Hurry up !
              </span>
              <h2 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 pt-1.5">
                Connect with best developer & web expert near me
              </h2>
              <p className="text-xs text-slate-500 font-medium">
                Get a callback within 15 minutes from Rahul Singh
              </p>
            </div>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-300 rounded-xl p-6 text-center space-y-3">
                <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                  ✓
                </div>
                <h3 className="text-lg font-bold text-slate-900">Inquiry Received Successfully!</h3>
                <p className="text-xs text-slate-700">
                  Thank you <strong>{name}</strong>! Rahul Singh will contact you at <strong>{phone}</strong> shortly with your exclusive discount offer.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setName('');
                    setPhone('');
                    setMessage('');
                  }}
                  className="text-xs text-emerald-700 underline font-semibold pt-2 cursor-pointer"
                >
                  Submit another response
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5" autoComplete="off">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    autoComplete="off"
                    autoCorrect="off"
                    autoCapitalize="off"
                    spellCheck={false}
                    placeholder="Enter Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-slate-50 text-slate-900 font-medium px-3.5 py-2.5 rounded-lg text-xs sm:text-sm border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number *</label>
                  <div className="relative flex items-center">
                    <span className="absolute left-3 text-xs sm:text-sm font-bold text-slate-600 flex items-center gap-1">
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
                      className="w-full bg-slate-50 text-slate-900 font-medium pl-18 pr-3.5 py-2.5 rounded-lg text-xs sm:text-sm border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-500"
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
                    placeholder="Tell us about your requirement or business type..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-slate-50 text-slate-900 font-medium px-3.5 py-2 rounded-lg text-xs sm:text-sm border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-500"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white font-black text-sm sm:text-base py-3 rounded-lg shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider mt-2"
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

            <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-center gap-2 text-[11px] text-slate-500 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>100% Privacy • No Spam Guarantee</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};


