import React from 'react';

export const StatsCounter: React.FC = () => {
  const logos = ['COMPANY 1', 'COMPANY 2', 'COMPANY 3', 'COMPANY 4', 'COMPANY 5', 'COMPANY 6'];
  const stats = [
    { value: '500+', label: 'Happy Clients' },
    { value: '1200+', label: 'Projects Completed' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '8+', label: 'Years Experience' }
  ];

  return (
    <section className="bg-slate-50/50 py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Eyebrow tag */}
        <div className="text-center">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">
            TRUSTED BY BUSINESSES
          </span>
        </div>

        {/* Client Logos Minimal Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-center opacity-60">
          {logos.map((logo, idx) => (
            <div key={idx} className="flex items-center justify-center py-2 text-slate-600 font-bold tracking-widest text-xs border border-slate-200/60 rounded-xl bg-white">
              {logo}
            </div>
          ))}
        </div>

        {/* Stats Grid matching screenshot */}
        <div className="bg-[#f8fafc] border border-slate-200/80 rounded-2xl p-6 sm:p-8 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center shadow-sm">
          {stats.map((st, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                {st.value}
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-600">
                {st.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

