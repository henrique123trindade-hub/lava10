import React from 'react';
import { business } from '../config/business';
import { Instagram, ExternalLink } from 'lucide-react';

export const InstagramSection: React.FC = () => {
  return (
    <section id="instagram" className="py-20 md:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#F8FAFC] border border-slate-200/80 rounded-3xl p-8 sm:p-12 text-center shadow-2xs">
          {/* Subtle Icon Mark */}
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center mx-auto mb-5 shadow-sm">
            <Instagram className="w-7 h-7" />
          </div>

          {/* Section Heading */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-[#123B8E] text-xs font-bold uppercase tracking-wider mb-3">
            <span>Redes Sociais &bull; {business.instagramHandle}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight mb-3">
            Siga a Lava10 no Instagram
          </h2>

          {/* Short Description */}
          <p className="text-base text-gray-600 max-w-lg mx-auto mb-8 leading-relaxed">
            Acompanhe novidades, dicas práticas de lavagem e avisos importantes de funcionamento das nossas unidades.
          </p>

          {/* Direct Link Button */}
          <a
            href={business.instagram}
            target="_blank"
            rel="noopener noreferrer"
            id="btn-instagram-perfil"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-[#123B8E] text-white text-sm font-semibold hover:bg-[#0E2A6D] transition-colors shadow-xs"
          >
            <Instagram className="w-4 h-4 text-[#F5C400]" />
            <span>Acessar {business.instagramHandle}</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-70 ml-1" />
          </a>
        </div>

      </div>
    </section>
  );
};
