import React, { useState } from 'react';
import { ArrowDown, Sparkles, Wind, Droplets, CheckCircle, RefreshCw, Shirt } from 'lucide-react';

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
    <section className="py-20 bg-gradient-to-b from-white to-[#F5F7FA] border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Headline */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-[#F5C400]/20 text-[#111827] mb-4">
            <RefreshCw className="w-3.5 h-3.5 text-[#123B8E]" />
            <span>Lave do seu jeito</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight">
            Mais tempo para você. <br />
            <span className="text-[#123B8E]">Menos tempo com roupa para lavar.</span>
          </h2>
          <p className="mt-3 text-gray-600 text-base">
            Veja a transformação completa das suas roupas no ciclo automatizado da Lava10.
          </p>
        </div>

        {/* Process Flow Cards - Desktop Row & Mobile Stack */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 lg:gap-6 relative items-center">
          
          {stages.map((stage, index) => {
            const Icon = stage.icon;
            const isSelected = activeStage === index;

            return (
              <React.Fragment key={stage.id}>
                <div
                  onClick={() => setActiveStage(index)}
                  className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 border ${
                    isSelected
                      ? 'bg-white shadow-xl shadow-blue-900/10 border-[#1E4FC7] ring-2 ring-[#1E4FC7]/20 scale-102'
                      : 'bg-white/80 hover:bg-white border-gray-200/80 shadow-sm hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
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
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stage.color} text-white flex items-center justify-center mb-4 shadow-md`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-black text-[#111827] tracking-tight mb-1">
                    {stage.label}
                  </h3>
                  <p className="text-xs font-semibold text-gray-500 mb-2">
                    {stage.sublabel}
                  </p>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {stage.description}
                  </p>
                </div>

                {/* Arrow indicator between steps (desktop only) */}
                {index < stages.length - 1 && (
                  <div className="hidden md:flex justify-center -mx-3 z-10 pointer-events-none">
                    <div className="w-6 h-6 rounded-full bg-blue-100/80 text-[#123B8E] flex items-center justify-center font-bold text-xs">
                      &rarr;
                    </div>
                  </div>
                )}

                {/* Arrow indicator (mobile only) */}
                {index < stages.length - 1 && (
                  <div className="flex md:hidden justify-center my-1 text-gray-400">
                    <ArrowDown className="w-5 h-5 text-blue-400" />
                  </div>
                )}
              </React.Fragment>
            );
          })}

        </div>

      </div>
    </section>
  );
};
