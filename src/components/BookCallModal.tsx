import React, { useState } from 'react';
import { X, Calendar, Clock, Check, PhoneCall } from 'lucide-react';
import confetti from 'canvas-confetti';
import { saveNewLead } from '../lib/leadStorage';
import { PackageItem, LeadInquiry } from '../types';

interface BookCallModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPackage?: PackageItem | null;
  onLeadSubmitted: (lead: LeadInquiry) => void;
}

export const BookCallModal: React.FC<BookCallModalProps> = ({
  isOpen,
  onClose,
  selectedPackage,
  onLeadSubmitted
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [preferredTime, setPreferredTime] = useState('Morning (10 AM - 1 PM)');
  const [note, setNote] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [booked, setBooked] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const createdLead = saveNewLead({
        name: name.trim(),
        phone: phone.trim(),
        message: `Free Call Consultation requested for ${preferredTime}. Note: ${note || 'None'}`,
        serviceSelected: selectedPackage ? `Package: ${selectedPackage.name}` : 'Free Consultation Call'
      });

      setIsSubmitting(false);
      setBooked(true);
      onLeadSubmitted(createdLead);

      try {
        confetti({
          particleCount: 90,
          spread: 70,
          origin: { y: 0.5 }
        });
      } catch (err) {
        console.error(err);
      }
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-white border border-slate-200 rounded-3xl max-w-md w-full p-6 md:p-8 space-y-6 relative shadow-2xl animate-in zoom-in-95 duration-200 text-slate-900">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-slate-100 text-slate-600 hover:text-slate-900 p-2 rounded-full cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center space-y-2">
          <div className="w-14 h-14 bg-slate-100 border border-slate-300 rounded-2xl flex items-center justify-center mx-auto text-slate-800">
            <Calendar className="w-7 h-7" />
          </div>
          <span className="text-xs font-bold text-slate-900 uppercase tracking-widest bg-slate-100 px-3 py-1 rounded-full border border-slate-300 inline-block">
            {selectedPackage ? selectedPackage.name : 'BOOK FREE APPOINTMENT'}
          </span>
          <h3 className="text-2xl font-black text-slate-900">
            Schedule a Free Call
          </h3>
          <p className="text-xs text-slate-600 font-medium">
            Talk directly with <strong>Rahul Singh</strong> (Senior Web Developer & Marketing Automation Specialist).
          </p>
        </div>

        {booked ? (
          <div className="bg-emerald-50 border border-emerald-300 rounded-2xl p-6 text-center space-y-3">
            <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto font-black text-xl">
              <Check className="w-6 h-6 stroke-[3]" />
            </div>
            <h4 className="font-bold text-slate-900 text-base">
              Call Appointment Confirmed!
            </h4>
            <p className="text-xs text-slate-800 font-medium">
              Rahul Singh will call <strong>{phone}</strong> during <strong>{preferredTime}</strong>.
            </p>
            <button
              onClick={onClose}
              className="bg-slate-900 text-white font-bold text-xs px-6 py-2.5 rounded-xl cursor-pointer hover:bg-slate-800"
            >
              Done
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
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-white text-slate-900 font-medium px-4 py-3 rounded-xl text-sm border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-500"
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
                  placeholder="Mobile Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-white text-slate-900 font-medium pl-18 pr-4 py-3 rounded-xl text-sm border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-emerald-600" />
                Preferred Time Slot
              </label>
              <select
                value={preferredTime}
                onChange={(e) => setPreferredTime(e.target.value)}
                className="w-full bg-slate-50 text-slate-900 font-medium px-4 py-3 rounded-xl text-sm border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-500"
              >
                <option value="Morning (10 AM - 1 PM)">Morning (10 AM - 1 PM)</option>
                <option value="Afternoon (1 PM - 5 PM)">Afternoon (1 PM - 5 PM)</option>
                <option value="Evening (5 PM - 9 PM)">Evening (5 PM - 9 PM)</option>
                <option value="Urgent / Right Away">Urgent / Right Away</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Additional Project Details (Optional)</label>
              <textarea
                rows={2}
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck={false}
                placeholder="Business website, e-commerce store, lead automation..."
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className="w-full bg-white text-slate-900 font-medium px-4 py-2.5 rounded-xl text-sm border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-500"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-slate-900 hover:bg-slate-800 text-white font-black text-sm py-3.5 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider"
            >
              {isSubmitting ? (
                <span>Booking Call...</span>
              ) : (
                <>
                  <PhoneCall className="w-4 h-4" />
                  <span>CONFIRM FREE CALL BOOKING</span>
                </>
              )}
            </button>
          </form>
        )}

      </div>
    </div>
  );
};
