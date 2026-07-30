import React, { useState } from 'react';
import { SHOWCASE_PROJECTS } from '../data/mockData';
import { ShowcaseProject } from '../types';
import { 
  ExternalLink, 
  Eye, 
  Globe, 
  Smartphone, 
  Monitor, 
  Tablet, 
  QrCode, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  X, 
  Phone, 
  MessageSquare, 
  Copy, 
  Check,
  Lock,
  Zap,
  MousePointerClick
} from 'lucide-react';

interface ProjectShowcaseProps {
  onContactClick: () => void;
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ onContactClick }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<ShowcaseProject | null>(null);
  const [previewDevice, setPreviewDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [qrProject, setQrProject] = useState<ShowcaseProject | null>(null);
  const [copiedDomain, setCopiedDomain] = useState<string | null>(null);

  const filteredProjects = activeCategory === 'all'
    ? SHOWCASE_PROJECTS
    : SHOWCASE_PROJECTS.filter(p => p.category === activeCategory);

  const handleCopyDomain = (domain: string) => {
    navigator.clipboard.writeText(domain);
    setCopiedDomain(domain);
    setTimeout(() => setCopiedDomain(null), 2000);
  };

  const getDeviceWidth = () => {
    switch (previewDevice) {
      case 'mobile': return 'max-w-[380px] h-[600px]';
      case 'tablet': return 'max-w-[768px] h-[650px]';
      default: return 'w-full h-[650px]';
    }
  };

  return (
    <section id="portfolio" className="bg-slate-50 text-slate-900 py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b border-slate-200">
      
      {/* Background Radial Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-emerald-100/40 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-slate-200/50 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        
        {/* Header Section */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-900 font-extrabold text-xs uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Verified Live Clients Showcase</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Websites Built & Managed By <span className="text-emerald-600">Clickin DMA</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed">
            Real live client websites built by <strong>Rahul Singh & Team</strong>. Click on any website to inspect the interactive live preview, view speed performance, or scan QR code to test directly on your mobile!
          </p>
        </div>

        {/* Live Domains Quick Highlights Ticker Bar */}
        <div className="bg-slate-900 text-white p-4 rounded-2xl shadow-xl border border-slate-800 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-2 text-xs font-bold text-slate-300">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-emerald-400 font-extrabold uppercase tracking-wide">6 Featured Live Client Websites:</span>
            </div>
            <div className="flex items-center gap-4 text-slate-400 text-[11px]">
              <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> 100% SSL Secured</span>
              <span className="flex items-center gap-1"><Zap className="w-3.5 h-3.5 text-amber-400" /> Sub-Second Load Speed</span>
              <span className="flex items-center gap-1"><Smartphone className="w-3.5 h-3.5 text-emerald-400" /> Mobile Responsive</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 pt-1">
            {[
              { domain: 'www.yancure.com', name: 'Yancure Care' },
              { domain: 'www.doctoryog.com', name: 'Doctor Yog' },
              { domain: 'www.giholidays.in', name: 'GI Holidays' },
              { domain: 'www.shopeasymart.in', name: 'ShopEasyMart' },
              { domain: 'www.pulsevaid.com', name: 'Pulse Vaid' },
              { domain: 'www.techno-solutions.tech', name: 'Techno Solutions' },
            ].map((item, idx) => (
              <a
                key={idx}
                href={`https://${item.domain}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-emerald-300 border border-slate-700 hover:border-emerald-500/50 px-3 py-1.5 rounded-xl text-xs font-mono font-bold flex items-center gap-1.5 transition-all shadow-sm group"
              >
                <Globe className="w-3.5 h-3.5 text-emerald-400 group-hover:rotate-12 transition-transform" />
                <span>{item.domain}</span>
                <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-emerald-400" />
              </a>
            ))}
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'local-business', label: 'Healthcare & Local Clinics' },
            { id: 'website', label: 'Travel & Business Websites' },
            { id: 'e-commerce', label: 'E-Commerce Stores' },
            { id: 'automation', label: 'Lead Portals' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer ${
                activeCategory === tab.id
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const projectUrl = project.fullUrl || project.url || `https://${project.domain}`;
            const displayDomain = project.domain || (project.url ? new URL(project.url).hostname : `${project.id}.com`);

            return (
              <div
                key={project.id}
                className="bg-white border border-slate-200 hover:border-emerald-500/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
              >
                {/* Browser Mockup Top Bar */}
                <div className="bg-slate-900 px-4 py-2.5 border-b border-slate-800 flex items-center justify-between gap-2 select-none">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  </div>

                  <div className="flex-1 max-w-[200px] sm:max-w-[230px] bg-slate-800 border border-slate-700 px-3 py-1 rounded-full flex items-center gap-1.5 text-[11px] text-slate-300 font-mono truncate">
                    <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
                    <span className="truncate">{displayDomain}</span>
                  </div>

                  <button
                    onClick={() => handleCopyDomain(displayDomain)}
                    title="Copy Domain Name"
                    className="p-1 text-slate-400 hover:text-emerald-400 transition-colors cursor-pointer"
                  >
                    {copiedDomain === displayDomain ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                {/* Image Showcase Container with Auto-scroll effect */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-100 group/img">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (project.image.includes('lh3.googleusercontent.com/d/')) {
                        const id = project.image.split('lh3.googleusercontent.com/d/')[1];
                        target.src = `https://drive.google.com/uc?export=view&id=${id}`;
                      }
                    }}
                    className="w-full h-auto object-top transition-transform duration-[6000ms] ease-in-out group-hover/img:-translate-y-[calc(100%-16rem)] sm:group-hover/img:-translate-y-[calc(100%-18rem)]"
                  />

                  {/* Verified Live Badge Overlay */}
                  {project.verifiedBadge && (
                    <div className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-md text-emerald-400 border border-emerald-500/40 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider flex items-center gap-1.5 shadow-md">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>LIVE CLIENT WEB</span>
                    </div>
                  )}

                  {/* Industry Badge */}
                  {project.clientIndustry && (
                    <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md text-slate-900 border border-slate-200 px-2.5 py-1 rounded-full text-[10px] font-extrabold shadow-md">
                      {project.clientIndustry}
                    </div>
                  )}

                  {/* Hover Actions Overlay */}
                  <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px] opacity-0 group-hover/img:opacity-100 transition-opacity flex flex-col items-center justify-center p-4 gap-2.5 pointer-events-none">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-xl font-black text-xs flex items-center gap-2 shadow-lg pointer-events-auto cursor-pointer transform hover:scale-105 transition-all"
                    >
                      <Eye className="w-4 h-4 text-white" />
                      <span>Interactive Live Preview</span>
                    </button>

                    <a
                      href={projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white hover:bg-slate-100 text-slate-900 px-4 py-2 rounded-xl font-bold text-xs flex items-center gap-1.5 shadow-md pointer-events-auto cursor-pointer transition-all"
                    >
                      <Globe className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Visit Live Website</span>
                      <ExternalLink className="w-3 h-3 text-slate-500" />
                    </a>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-[11px] text-slate-500 font-bold">
                      <span className="text-emerald-700 font-mono font-black">{displayDomain}</span>
                      {project.deliveryTime && (
                        <span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded border border-slate-200">
                          {project.deliveryTime}
                        </span>
                      )}
                    </div>

                    <h3 className="font-extrabold text-slate-900 text-base group-hover:text-emerald-700 transition-colors leading-snug">
                      {project.title}
                    </h3>

                    <p className="text-xs text-slate-600 font-medium leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  {/* Action Buttons Bar */}
                  <div className="pt-3 border-t border-slate-100 space-y-3">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] bg-slate-100 text-slate-700 border border-slate-200 px-2 py-0.5 rounded-md font-semibold"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="grid grid-cols-3 gap-1.5 pt-1">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-[11px] font-bold flex items-center justify-center gap-1 transition-colors cursor-pointer"
                        title="Interactive View"
                      >
                        <Eye className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Preview</span>
                      </button>

                      <a
                        href={projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-[11px] font-bold flex items-center justify-center gap-1 transition-colors cursor-pointer"
                        title="Visit Live URL"
                      >
                        <Globe className="w-3.5 h-3.5" />
                        <span>Live Site</span>
                      </a>

                      <button
                        onClick={() => setQrProject(project)}
                        className="py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 rounded-lg text-[11px] font-bold flex items-center justify-center gap-1 transition-colors cursor-pointer"
                        title="Scan QR Code"
                      >
                        <QrCode className="w-3.5 h-3.5 text-slate-700" />
                        <span>QR Code</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Banner below Portfolio */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-emerald-400 text-xs font-black uppercase tracking-wider bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
              Custom Web Development & Lead Generation
            </span>
            <h3 className="text-2xl sm:text-3xl font-black">
              Want a High-Converting Website Like These?
            </h3>
            <p className="text-slate-300 text-sm font-medium max-w-xl">
              Get your custom website designed & launched in 24–48 hours with free WhatsApp lead automation setup starting @ ₹3,999/- flat.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onContactClick}
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-black px-6 py-3.5 rounded-xl text-xs sm:text-sm transition-all shadow-lg hover:scale-105 flex items-center gap-2 cursor-pointer uppercase tracking-wider"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="https://wa.me/918882292448?text=Hi%20Rahul!%20I%20saw%20your%20live%20portfolio%20websites%20(Yancure,%20DoctorYog,%20etc).%20I%20want%20a%20website%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 font-bold px-5 py-3.5 rounded-xl text-xs sm:text-sm transition-all flex items-center gap-2 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Rahul</span>
            </a>
          </div>
        </div>

      </div>

      {/* Interactive Live Browser Preview Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-5xl w-full max-h-[92vh] overflow-hidden flex flex-col shadow-2xl relative text-white">
            
            {/* Modal Header Browser Controls Bar */}
            <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <button onClick={() => setSelectedProject(null)} className="w-3 h-3 rounded-full bg-red-500 hover:opacity-80 cursor-pointer" title="Close" />
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                </div>
                <div className="hidden sm:flex items-center gap-2 text-xs font-bold text-slate-300">
                  <Globe className="w-4 h-4 text-emerald-400" />
                  <span>{selectedProject.title}</span>
                </div>
              </div>

              {/* URL Bar */}
              <div className="flex-1 max-w-lg bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-full flex items-center justify-between text-xs font-mono text-slate-300">
                <div className="flex items-center gap-1.5 truncate">
                  <Lock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="truncate">{selectedProject.fullUrl || selectedProject.url || `https://${selectedProject.domain}`}</span>
                </div>
                <a
                  href={selectedProject.fullUrl || selectedProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1 text-slate-400 hover:text-emerald-400 transition-colors"
                  title="Open in New Window"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Viewport Device Toggles */}
              <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800">
                <button
                  onClick={() => setPreviewDevice('desktop')}
                  className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                    previewDevice === 'desktop' ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:text-slate-200'
                  }`}
                  title="Desktop View"
                >
                  <Monitor className="w-4 h-4" />
                </button>

                <button
                  onClick={() => setPreviewDevice('tablet')}
                  className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                    previewDevice === 'tablet' ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:text-slate-200'
                  }`}
                  title="Tablet View"
                >
                  <Tablet className="w-4 h-4" />
                </button>

                <button
                  onClick={() => setPreviewDevice('mobile')}
                  className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                    previewDevice === 'mobile' ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:text-slate-200'
                  }`}
                  title="Mobile View"
                >
                  <Smartphone className="w-4 h-4" />
                </button>
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                className="p-1.5 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-xl cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body: Embedded Viewport Frame */}
            <div className="flex-1 bg-slate-950 p-4 overflow-y-auto flex flex-col items-center justify-center relative">
              <div className={`transition-all duration-300 bg-white rounded-xl overflow-hidden shadow-2xl relative ${getDeviceWidth()}`}>
                <iframe
                  src={selectedProject.fullUrl || selectedProject.url}
                  title={selectedProject.title}
                  className="w-full h-full border-0"
                  sandbox="allow-scripts allow-same-origin allow-forms"
                />
              </div>

              {/* Notice Banner */}
              <div className="mt-3 text-center text-xs text-slate-400 font-medium flex items-center justify-center gap-2">
                <span>Direct Live Link: </span>
                <a
                  href={selectedProject.fullUrl || selectedProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 font-mono font-bold hover:underline flex items-center gap-1"
                >
                  <span>{selectedProject.domain || selectedProject.url}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Modal Footer CTAs */}
            <div className="bg-slate-950 px-6 py-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs text-slate-300 font-bold">
                  Verified Client Web Project built by Clickin DMA
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={`https://wa.me/918882292448?text=${encodeURIComponent(
                    `Hi Rahul! I reviewed your project ${selectedProject.domain || selectedProject.title}. I want a similar high-converting website.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-black flex items-center gap-1.5 cursor-pointer shadow-md"
                >
                  <MessageSquare className="w-4 h-4 text-white" />
                  <span>Get A Website Like This (@ ₹3,999)</span>
                </a>

                <a
                  href={selectedProject.fullUrl || selectedProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-bold flex items-center gap-1.5"
                >
                  <span>Open Full Website</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* QR Code Scan Modal */}
      {qrProject && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white border border-slate-200 rounded-3xl max-w-sm w-full p-6 space-y-5 text-center shadow-2xl relative text-slate-900">
            <button
              onClick={() => setQrProject(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-900 p-1.5 rounded-full hover:bg-slate-100 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1">
              <span className="text-[10px] font-black uppercase tracking-widest text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                Scan & Test On Mobile
              </span>
              <h3 className="text-lg font-black text-slate-900 pt-1">
                {qrProject.domain || qrProject.title}
              </h3>
              <p className="text-xs text-slate-500 font-medium">
                Point your smartphone camera to immediately open the live website!
              </p>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl inline-block shadow-inner">
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(
                  qrProject.fullUrl || qrProject.url || `https://${qrProject.domain}`
                )}`}
                alt={`QR Code for ${qrProject.domain}`}
                className="w-48 h-48 mx-auto rounded-lg"
              />
            </div>

            <div className="space-y-2">
              <a
                href={qrProject.fullUrl || qrProject.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-black text-xs transition-colors"
              >
                Open {qrProject.domain}
              </a>
              <button
                onClick={() => setQrProject(null)}
                className="text-xs text-slate-500 hover:text-slate-900 font-bold cursor-pointer"
              >
                Close QR Window
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
