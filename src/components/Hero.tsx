import React from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import { business } from '../config/business';
import { UnitImage } from './UnitImage';
import { useCustomPhotos } from '../context/CustomPhotosContext';

export const Hero: React.FC = () => {
  const { matrizPhoto } = useCustomPhotos();

  return (
    <section
      id="hero"
      className="relative pt-28 pb-20 md:pt-36 md:pb-24 bg-white border-b border-slate-200/80 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Editorial Copy */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            
            {/* Subtle Location Marker */}
            <div className="flex items-center gap-1.5 text-xs font-semibold tracking-wider text-gray-500 uppercase mb-4">
              <MapPin className="w-3.5 h-3.5 text-[#123B8E]" />
              <span>{business.city} - {business.state}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#111827] tracking-tight leading-[1.1] mb-6">
              Roupa limpa. <br />
              <span className="text-[#123B8E]">Sem complicação.</span>
            </h1>

            {/* Short Subheadline */}
            <p className="text-lg sm:text-xl text-gray-600 font-normal leading-relaxed max-w-lg mb-8">
              Lave e seque suas roupas de forma rápida, prática e automática.
            </p>

            {/* Clean CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <a
                href="#unidades"
                id="hero-cta-unidades"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg bg-[#123B8E] text-white text-base font-semibold hover:bg-[#0E2A6D] transition-colors text-center shadow-xs"
              >
                Encontrar uma unidade
              </a>

              <a
                href="#como-funciona"
                id="hero-cta-como-funciona"
                className="inline-flex items-center justify-center gap-1 px-5 py-3.5 text-base font-semibold text-gray-700 hover:text-[#123B8E] transition-colors text-center"
              >
                <span>Como funciona</span>
                <ArrowRight className="w-4 h-4 text-gray-400 ml-0.5" />
              </a>
            </div>

            {/* Subtle, real business details */}
            <div className="pt-6 border-t border-gray-100 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-gray-500">
              <div>
                <span className="font-semibold text-gray-900">Matriz Centro:</span> 06h às 02h
              </div>
              <div className="hidden sm:inline text-gray-300">&bull;</div>
              <div>
                <span className="font-semibold text-gray-900">Filial Zona Norte:</span> 24 horas
              </div>
              <div className="hidden sm:inline text-gray-300">&bull;</div>
              <div className="text-[#123B8E] font-medium">
                Sabão e amaciante já inclusos
              </div>
            </div>

          </div>

          {/* Right: High-Quality Real Laundromat Photography with Mobile Optimization */}
          <div className="lg:col-span-6 relative">
            <div className={`relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 transition-all duration-300 ${
              matrizPhoto
                ? 'aspect-[4/5] sm:aspect-square lg:aspect-[4/5] xl:aspect-square min-h-[380px] sm:min-h-[440px]'
                : 'aspect-4/3 sm:aspect-1/1 lg:aspect-4/5 xl:aspect-1/1 min-h-[360px] sm:min-h-[440px]'
            }`}>
              <UnitImage
                type="matriz"
                alt="Fachada oficial da Lava10 Matriz na Rua Andrade Neves, 1620, Centro de Cachoeira do Sul"
                className="w-full h-full"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
