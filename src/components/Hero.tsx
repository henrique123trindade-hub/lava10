import React from 'react';
import { ArrowRight, MapPin, Sparkles, Clock } from 'lucide-react';
import { business } from '../config/business';
import { UnitImage } from './UnitImage';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-36 md:pb-24 bg-white border-b border-slate-200/80 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* Left: Editorial Copy */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left order-2 lg:order-1">
            
            {/* Location & Status Marker */}
            <div className="flex flex-wrap items-center gap-2 mb-3 sm:mb-4">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-[#123B8E] text-xs font-bold uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5 text-[#123B8E]" />
                <span>{business.city} - {business.state}</span>
              </div>
              <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200/60 text-emerald-700 text-xs font-bold">
                <Clock className="w-3 h-3 text-emerald-600" />
                <span>Filial 24h & Matriz até 02h</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#111827] tracking-tight leading-[1.15] mb-4 sm:mb-6">
              Roupa limpa. <br />
              <span className="text-[#123B8E]">Sem complicação.</span>
            </h1>

            {/* Short Subheadline */}
            <p className="text-base sm:text-xl text-gray-600 font-normal leading-relaxed max-w-lg mb-6 sm:mb-8">
              Lave e seque suas roupas de forma rápida, prática e automática em Cachoeira do Sul. Sabão e amaciante já inclusos.
            </p>

            {/* Clean CTAs for Mobile & Desktop */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-6 sm:mb-10">
              <a
                href="#unidades"
                id="hero-cta-unidades"
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 sm:py-4 rounded-xl bg-[#123B8E] text-white text-base font-semibold hover:bg-[#0E2A6D] transition-colors text-center shadow-sm min-h-[48px] active:scale-98"
              >
                Encontrar uma unidade
              </a>

              <a
                href="#como-funciona"
                id="hero-cta-como-funciona"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-3.5 rounded-xl border border-gray-200 sm:border-transparent text-base font-semibold text-gray-700 hover:text-[#123B8E] hover:bg-slate-50 transition-colors text-center min-h-[48px]"
              >
                <span>Como funciona</span>
                <ArrowRight className="w-4 h-4 text-gray-400 ml-0.5" />
              </a>
            </div>

            {/* Quick highlight bar */}
            <div className="pt-4 sm:pt-6 border-t border-gray-100 grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-3 text-xs text-gray-600">
              <div className="bg-slate-50 sm:bg-transparent p-2 sm:p-0 rounded-lg">
                <span className="font-bold text-gray-900 block sm:inline">Matriz Centro:</span> 06h às 02h
              </div>
              <div className="bg-slate-50 sm:bg-transparent p-2 sm:p-0 rounded-lg">
                <span className="font-bold text-gray-900 block sm:inline">Zona Norte:</span> 24 Horas
              </div>
              <div className="col-span-2 sm:col-span-1 text-[#123B8E] font-medium flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-[#F5C400]" />
                <span>Sabão e amaciante dosados na hora</span>
              </div>
            </div>

          </div>

          {/* Right: High-Quality Real Laundromat Photography - Fachada Principal */}
          <div className="lg:col-span-6 relative order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-lg sm:shadow-xl border border-slate-200 aspect-[4/3] w-full max-w-lg lg:max-w-none mx-auto">
              <UnitImage
                type="principal"
                alt="Foto oficial da Fachada Principal da Lava10 Lavanderia Autoatendimento"
                className="w-full h-full"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
