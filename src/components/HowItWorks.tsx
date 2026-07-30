import React from 'react';
import { Calendar, Layout, RefreshCw, ArrowRight } from 'lucide-react';

interface HowItWorksProps {
  onGetInTouchClick: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onGetInTouchClick }) => {
  const steps = [
    {
      num: '01',
      icon: Calendar,
      title: 'Book Free Appointment',
      desc: 'Get started by booking your free consultation with expert website developer and Marketing Automation Specialist (Rahul Singh).'
    },
    {
      num: '02',
      icon: Layout,
      title: 'Get Website Designed',
      desc: 'Once you finalize the requirement, We will start designing your website and automated lead workflows within a week.'
    },
    {
      num: '03',
      icon: RefreshCw,
      title: '1 Week unlimited revisions',
      desc: 'You can request unlimited revisions and modifications to change design, copy, or content until you are 100% satisfied.'
    }
  ];

  return (
    <section className="bg-white text-slate-900 py-16 px-4 md:px-8 border-b border-slate-200">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900">
            How It Works ?
          </h2>
          <p className="text-slate-600 text-sm max-w-xl mx-auto font-medium">
            Simple, hassle-free 3-step process to get your website and lead automation live.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => {
            const IconComp = step.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200 hover:border-emerald-400 rounded-2xl p-8 text-center space-y-4 relative shadow-sm hover:shadow-md group transition-all"
              >
                <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center justify-center mx-auto group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                  <IconComp className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900">
                  {step.title}
                </h3>
                <p className="text-xs md:text-sm text-slate-600 font-medium leading-relaxed">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center pt-4">
          <button
            onClick={onGetInTouchClick}
            className="bg-slate-900 hover:bg-slate-800 text-white font-black text-base px-10 py-4 rounded-xl shadow-md transition-all transform hover:scale-105 inline-flex items-center gap-2 cursor-pointer border border-slate-800 uppercase tracking-wider"
          >
            <span>GET IN TOUCH</span>
            <ArrowRight className="w-5 h-5 text-emerald-400" />
          </button>
        </div>
      </div>
    </section>
  );
};
