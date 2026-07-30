import React from 'react';
import { ArrowRight, MessageSquareCode } from 'lucide-react';

interface DiscussIdeaProps {
  onGetInTouchClick: () => void;
}

export const DiscussIdea: React.FC<DiscussIdeaProps> = ({ onGetInTouchClick }) => {
  return (
    <section className="bg-slate-100 text-slate-900 py-12 px-4 md:px-8 border-b border-slate-200">
      <div className="max-w-6xl mx-auto bg-slate-900 text-white border border-slate-800 rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
        <div className="space-y-2 text-center md:text-left">
          <div className="inline-flex items-center gap-2 text-emerald-400 font-black text-xs uppercase tracking-wider bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            <MessageSquareCode className="w-4 h-4 text-emerald-400" />
            <span>Got a Custom Project?</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-black text-white">
            Discuss Your Idea
          </h2>
          <p className="text-slate-300 text-sm md:text-base font-medium max-w-xl">
            Our Experts (Rahul Singh & Team) are ready to transform your ideas into valuable business results.
          </p>
        </div>

        <div>
          <button
            onClick={onGetInTouchClick}
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-black text-base px-8 py-3.5 rounded-xl shadow-lg transition-all transform hover:scale-105 flex items-center gap-2 cursor-pointer uppercase tracking-wide border border-emerald-500"
          >
            <span>GET IN TOUCH</span>
            <ArrowRight className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
};
