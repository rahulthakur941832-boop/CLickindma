import React from 'react';
import { PRICING_PACKAGES, OPTIONAL_ADDONS } from '../data/mockData';
import { PackageItem } from '../types';
import { 
  Check, 
  Sparkles, 
  ArrowRight, 
  ShieldAlert, 
  FileText, 
  Mail, 
  Palette, 
  PenTool, 
  Image as ImageIcon, 
  CreditCard, 
  Layout, 
  Calendar, 
  Search, 
  MessageSquare, 
  ShieldCheck,
  PlusCircle
} from 'lucide-react';

interface PricingPackagesProps {
  onSelectPackage: (pkg: PackageItem) => void;
}

// Icon mapper for Optional Add-ons
const getAddonIcon = (iconName: string) => {
  const props = { className: "w-4 h-4 text-emerald-600 shrink-0" };
  switch (iconName) {
    case 'FileText': return <FileText {...props} />;
    case 'Mail': return <Mail {...props} />;
    case 'Palette': return <Palette {...props} />;
    case 'PenTool': return <PenTool {...props} />;
    case 'Image': return <ImageIcon {...props} />;
    case 'CreditCard': return <CreditCard {...props} />;
    case 'Layout': return <Layout {...props} />;
    case 'Calendar': return <Calendar {...props} />;
    case 'Search': return <Search {...props} />;
    case 'MessageSquare': return <MessageSquare {...props} />;
    case 'ShieldCheck': return <ShieldCheck {...props} />;
    default: return <PlusCircle {...props} />;
  }
};

export const PricingPackages: React.FC<PricingPackagesProps> = ({ onSelectPackage }) => {
  return (
    <section id="pricing" className="bg-slate-50 text-slate-900 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b border-slate-200">
      
      {/* Background Radial Lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-emerald-100/30 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-slate-200/40 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-900 font-bold text-xs uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Transparent Agency Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Web Development & <span className="text-emerald-600">Digital Packages</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            High-converting websites tailored for Indian businesses & global brands. No hidden renewal tricks, realistic deliverable timelines, and full ongoing support.
          </p>
        </div>

        {/* 4 Equal Height Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-stretch">
          {PRICING_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 relative group ${
                pkg.popular
                  ? 'bg-white border-2 border-emerald-600 shadow-xl md:-translate-y-2'
                  : 'bg-white border border-slate-200 hover:border-emerald-400 shadow-sm hover:shadow-md'
              }`}
            >
              {/* Most Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-600 text-white font-black text-xs px-4 py-1 rounded-full uppercase tracking-widest shadow-md flex items-center gap-1.5 z-20 whitespace-nowrap">
                  <Sparkles className="w-3.5 h-3.5 fill-white" />
                  <span>{pkg.badge || 'Most Popular'}</span>
                </div>
              )}

              {/* Card Main Info */}
              <div className="space-y-6">
                {/* Header info */}
                <div className="text-center space-y-2 border-b border-slate-100 pb-5">
                  <h3 className="text-sm font-extrabold uppercase tracking-widest text-emerald-700">
                    {pkg.name}
                  </h3>
                  
                  <div className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight pt-1">
                    {pkg.price}
                  </div>

                  <p className="text-xs text-slate-500 font-medium min-h-[36px] flex items-center justify-center leading-snug">
                    {pkg.subtitle}
                  </p>
                </div>

                {/* Features List */}
                <ul className="space-y-3 pt-1 text-xs sm:text-sm">
                  {pkg.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-slate-700 font-medium">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="leading-snug">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <div className="pt-8 mt-auto">
                <button
                  onClick={() => onSelectPackage(pkg)}
                  className={`w-full py-3.5 px-5 rounded-xl font-extrabold text-xs sm:text-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider ${
                    pkg.popular
                      ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-md hover:scale-[1.02]'
                      : 'bg-slate-900 hover:bg-emerald-600 hover:text-white text-white shadow-sm hover:scale-[1.02]'
                  }`}
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Optional Add-ons Section */}
        <div className="space-y-8 pt-8">
          <div className="text-center space-y-2 max-w-xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
              Optional <span className="text-emerald-600">Add-ons & Upgrades</span>
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm font-medium">
              Customize your project with standalone modules and specialized integrations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {OPTIONAL_ADDONS.map((addon, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 hover:border-emerald-400 p-4 rounded-xl flex items-center justify-between gap-3 transition-all duration-300 shadow-sm hover:shadow-md group"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2 rounded-lg bg-slate-100 group-hover:bg-emerald-50 transition-colors">
                    {getAddonIcon(addon.icon)}
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-slate-800 truncate">
                    {addon.name}
                  </span>
                </div>
                <span className="bg-slate-100 border border-slate-200 text-slate-900 text-xs font-black px-2.5 py-1 rounded-lg shrink-0">
                  {addon.price}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer Note */}
        <div className="bg-slate-100 border border-slate-200 rounded-2xl p-5 max-w-4xl mx-auto text-center space-y-1">
          <p className="text-xs sm:text-sm text-slate-800 font-bold flex items-center justify-center gap-2">
            <ShieldAlert className="w-4 h-4 text-slate-700 shrink-0 inline-block" />
            <span>
              *Domain, Hosting, Premium Themes, Premium Plugins and Third-party Subscription Charges are not included in the above packages.*
            </span>
          </p>
        </div>

      </div>
    </section>
  );
};
