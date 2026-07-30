import React from 'react';
import {
  Globe,
  Share2,
  Search,
  Target,
  Megaphone,
  Star,
  Palette,
  Video,
  Mail,
  MessageSquare,
  FileText,
  Shield,
  Sparkles,
  Workflow,
  Zap,
  Database,
  BarChart3,
  Users,
  Wrench,
  ArrowRight
} from 'lucide-react';

interface ServicesSlidersProps {
  onExploreClick: () => void;
}

interface ServiceItem {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  color: string;
}

const DIGITAL_MARKETING_SERVICES: ServiceItem[] = [
  { id: 'web-design', name: 'Website Designing', icon: Globe, color: '#1CC7C1' },
  { id: 'smm', name: 'Social Media Marketing', icon: Share2, color: '#E94B9C' },
  { id: 'seo', name: 'SEO & Google My Business', icon: Search, color: '#00C896' },
  { id: 'ads', name: 'Paid Advertisement', icon: Target, color: '#FF6B35' },
  { id: 'lead-gen', name: 'Lead Generation', icon: Megaphone, color: '#667EEA' },
  { id: 'influencer', name: 'Influencer Marketing', icon: Star, color: '#E94B9C' },
  { id: 'branding', name: 'Branding & Logo Design', icon: Palette, color: '#3B82F6' },
  { id: 'video-ads', name: 'Video Ads & Shoots', icon: Video, color: '#EF4444' },
  { id: 'email', name: 'Email Marketing', icon: Mail, color: '#0EA5E9' },
  { id: 'whatsapp', name: 'WhatsApp Marketing', icon: MessageSquare, color: '#1CC7C1' },
  { id: 'content', name: 'Content Writing', icon: FileText, color: '#3BB6E0' },
  { id: 'orm', name: 'Online Reputation Management', icon: Shield, color: '#06B6D4' }
];

const AUTOMATION_SERVICES: ServiceItem[] = [
  { id: 'ai-chatbots', name: 'Smart Chatbots', icon: MessageSquare, color: '#8B5CF6' },
  { id: 'ai-campaigns', name: 'Smart Campaigns', icon: Zap, color: '#EC4899' },
  { id: 'workflow', name: 'Workflow Automation', icon: Workflow, color: '#8B5CF6' },
  { id: 'lead-nurture', name: 'Smart Lead Nurturing', icon: Zap, color: '#6366F1' },
  { id: 'crm', name: 'CRM Automation', icon: Database, color: '#10B981' },
  { id: 'analytics', name: 'Predictive Analytics', icon: BarChart3, color: '#06B6D4' },
  { id: 'ai-support', name: 'Automated Customer Support', icon: Users, color: '#6366F1' },
  { id: 'custom-ai', name: 'Custom Software Integrations', icon: Wrench, color: '#F97316' }
];

export const ServicesSliders: React.FC<ServicesSlidersProps> = ({ onExploreClick }) => {
  // Triplicating lists for seamless infinite looping marquee
  const digitalLoop = [...DIGITAL_MARKETING_SERVICES, ...DIGITAL_MARKETING_SERVICES, ...DIGITAL_MARKETING_SERVICES];
  const aiLoop = [...AUTOMATION_SERVICES, ...AUTOMATION_SERVICES, ...AUTOMATION_SERVICES, ...AUTOMATION_SERVICES];

  return (
    <section className="relative bg-slate-50 text-slate-900 py-20 overflow-hidden border-y border-slate-200">
      {/* Background Radial Glow Effects */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-slate-200/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-slate-200/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 space-y-16">
        
        {/* SLIDER 1: Digital Marketing Services */}
        <div className="space-y-8">
          {/* Header 1 */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                Digital Marketing Services
              </h2>
              <p className="text-slate-600 text-sm md:text-base mt-1 font-medium">
                Full-spectrum marketing solutions for your brand
              </p>
            </div>
            <button
              onClick={onExploreClick}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-300 hover:border-slate-500 bg-white hover:bg-slate-50 text-slate-900 font-bold text-xs md:text-sm transition-all group shrink-0 self-start md:self-auto shadow-sm"
            >
              <span>View All Digital Services</span>
              <ArrowRight className="w-4 h-4 text-emerald-600 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Slider 1 Continuous Scroll Container (Left to Right, 40% size on mobile) */}
          <div className="relative w-full overflow-hidden group max-sm:h-12">
            {/* Side fading masks */}
            <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

            {/* Marquee Track: Left-to-Right */}
            <div className="flex gap-3 sm:gap-6 w-max animate-marquee-right group-hover:[animation-play-state:paused] py-1 sm:py-2 max-sm:scale-[0.4] max-sm:origin-left">
              {digitalLoop.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={`digital-${item.id}-${idx}`}
                    className="flex items-center gap-4 bg-white/90 backdrop-blur-md border border-slate-200 hover:border-slate-400 rounded-2xl p-4 px-6 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 cursor-pointer shrink-0"
                    onClick={onExploreClick}
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-inner"
                      style={{ backgroundColor: `${item.color}15`, color: item.color }}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="font-bold text-slate-800 text-sm md:text-base whitespace-nowrap tracking-wide">
                      {item.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* SLIDER 2: Automation Solutions */}
        <div className="space-y-8">
          {/* Header 2 */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                Smart Automation Solutions
              </h2>
              <p className="text-slate-600 text-sm md:text-base mt-1 font-medium">
                Cutting-edge automation technologies for your business
              </p>
            </div>
            <button
              onClick={onExploreClick}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-300 hover:border-slate-500 bg-white hover:bg-slate-50 text-slate-900 font-bold text-xs md:text-sm transition-all group shrink-0 self-start md:self-auto shadow-sm"
            >
              <span>Explore Automation Solutions</span>
              <ArrowRight className="w-4 h-4 text-emerald-600 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Slider 2 Continuous Scroll Container (Left to Right, 40% size on mobile) */}
          <div className="relative w-full overflow-hidden group max-sm:h-12">
            {/* Side fading masks */}
            <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

            {/* Marquee Track: Left-to-Right */}
            <div className="flex gap-3 sm:gap-6 w-max animate-marquee-right group-hover:[animation-play-state:paused] py-1 sm:py-2 max-sm:scale-[0.4] max-sm:origin-left">
              {aiLoop.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={`ai-${item.id}-${idx}`}
                    className="flex items-center gap-4 bg-white/90 backdrop-blur-md border border-slate-200 hover:border-slate-400 rounded-2xl p-4 px-6 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 cursor-pointer shrink-0"
                    onClick={onExploreClick}
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-inner"
                      style={{ backgroundColor: `${item.color}15`, color: item.color }}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="font-bold text-slate-800 text-sm md:text-base whitespace-nowrap tracking-wide">
                      {item.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
