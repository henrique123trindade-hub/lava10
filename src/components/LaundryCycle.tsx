import React, { useState } from 'react';
import { Sparkles, Wind, Droplets, CheckCircle, RefreshCw, Shirt } from 'lucide-react';

export const LaundryCycle: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(1);

  const stages = [
    {
      id: 0,
      label: 'ROUPA SUJA',
      sublabel: 'Roupas acumuladas da semana',
      icon: Shirt,
      color: 'from-amber-600 to-amber-700',
      badge: 'Passo 1',
      bgLight: 'bg-amber-50',
      textAccent: 'text-amber-800',
      description: 'Traga suas roupas do dia a dia, toalhas, lençóis ou edredons direto para a unidade.',
    },
    {
      id: 1,
      label: 'LAVAGEM',
      sublabel: 'Dosagem automática e água ideal',
      icon: Droplets,
      color: 'from-[#123B8E] to-[#1E4FC7]',
      badge: 'Passo 2',
      bgLight: 'bg-blue-50',
      textAccent: 'text-[#123B8E]',
      description: 'Lavadoras profissionais com sabão e amaciante dosados na medida exata.',
    },
    {
      id: 2,
      label: 'SECAGEM',
      sublabel: 'Temperatura controlada e maciez',
      icon: Wind,
      color: 'from-orange-500 to-amber-500',
      badge: 'Passo 3',
      bgLight: 'bg-orange-50',
      textAccent: 'text-orange-700',
      description: 'Secadoras industriais potentes. Suas roupas saem secas, macias e sem umidade.',
    },
    {
      id: 3,
      label: 'ROUPA LIMPA',
      sublabel: 'Pronta para dobrar e usar',
      icon: Sparkles,
      color: 'from-emerald-600 to-teal-600',
      badge: 'Pronto!',
      bgLight: 'bg-emerald-50',
      textAccent: 'text-emerald-800',
      description: 'Roupas higienizadas, perfumadas e prontas para o guarda-roupa em poucos minutos.',
    },
  ];

  return (
    <section className="py-14 sm:py-20 bg-gradient-to-b from-white to-[#F5F7FA] border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Headline */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-[#F5C400]/20 text-[#111827] mb-3">
            <RefreshCw className="w-3.5 h-3.5 text-[#123B8E]" />
            <span>Lave do seu jeito</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#111827] tracking-tight">
            Mais tempo para você. <br />
            <span className="text-[#123B8E]">Menos tempo com roupa para lavar.</span>
          </h2>
          <p className="mt-2.5 text-gray-600 text-sm sm:text-base">
            Veja a transformação completa das suas roupas no ciclo automatizado da Lava10.
          </p>
        </div>

        {/* Process Flow Cards - Clean 4-column grid on desktop, smooth stacked cards on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stages.map((stage, index) => {
            const Icon = stage.icon;
            const isSelected = activeStage === index;

            return (
              <div
                key={stage.id}
                onClick={() => setActiveStage(index)}
                className={`cursor-pointer rounded-2xl p-5 sm:p-6 transition-all duration-200 border ${
                  isSelected
                    ? 'bg-white shadow-lg shadow-blue-900/5 border-[#123B8E] ring-2 ring-[#123B8E]/20'
                    : 'bg-white/90 hover:bg-white border-gray-200/80 shadow-2xs hover:shadow-sm'
                }`}
              >
                <div className="flex items-center justify-between mb-3.5">
                  <span
                    className={`text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${stage.bgLight} ${stage.textAccent}`}
                  >
                    {stage.badge}
                  </span>
                  {isSelected && (
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                  )}
                </div>

                <div
                  className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${stage.color} text-white flex items-center justify-center mb-3.5 shadow-sm`}
                >
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>

                <h3 className="text-base sm:text-lg font-black text-[#111827] tracking-tight mb-0.5">
                  {stage.label}
                </h3>
                <p className="text-xs font-semibold text-gray-500 mb-2">
                  {stage.sublabel}
                </p>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {stage.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
