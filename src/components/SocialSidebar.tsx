import React from 'react';
import { Instagram, Facebook, Linkedin } from 'lucide-react';

export const SocialSidebar: React.FC = () => {
  return (
    <aside className="fixed left-0 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-2.5 bg-white/90 backdrop-blur-md p-2 rounded-r-2xl border-y border-r border-slate-200 shadow-xl">
      {/* Instagram */}
      <a
        href="https://www.instagram.com/clickin.digitalmarketingagency/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-gradient-to-tr hover:from-purple-600 hover:to-pink-500 text-slate-700 hover:text-white flex items-center justify-center transition-all duration-300 group relative shadow-sm"
      >
        <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
        <span className="absolute left-12 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-xs font-semibold px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-lg border border-slate-700">
          Instagram
        </span>
      </a>

      {/* Facebook */}
      <a
        href="https://www.facebook.com/rahul.ridham.singh/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-blue-600 text-slate-700 hover:text-white flex items-center justify-center transition-all duration-300 group relative shadow-sm"
      >
        <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
        <span className="absolute left-12 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-xs font-semibold px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-lg border border-slate-700">
          Facebook
        </span>
      </a>

      {/* LinkedIn */}
      <a
        href="https://in.linkedin.com/in/rahul-singh-ridham"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-sky-600 text-slate-700 hover:text-white flex items-center justify-center transition-all duration-300 group relative shadow-sm"
      >
        <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
        <span className="absolute left-12 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-xs font-semibold px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-lg border border-slate-700">
          LinkedIn
        </span>
      </a>

      {/* Pinterest */}
      <a
        href="https://in.pinterest.com/clickindmagency/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Pinterest"
        className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-red-600 text-slate-700 hover:text-white flex items-center justify-center transition-all duration-300 group relative shadow-sm"
      >
        {/* Custom SVG icon for Pinterest */}
        <svg className="w-5 h-5 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.367 18.62 0 12.017 0z"/>
        </svg>
        <span className="absolute left-12 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-xs font-semibold px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-lg border border-slate-700">
          Pinterest
        </span>
      </a>
    </aside>
  );
};
