import React from 'react';
import { ArrowRight } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Separe suas roupas',
      description: 'Traga suas roupas do dia a dia. Você não precisa trazer sabão nem amaciante.',
    },
    {
      number: '02',
      title: 'Escolha a máquina',
      description: 'Coloque as peças na lavadora ou secadora disponível de acordo com a sua necessidade.',
    },
    {
      number: '03',
      title: 'Faça o pagamento',
      description: 'Selecione a máquina no totem de autoatendimento e pague via cartão ou PIX.',
    },
    {
      number: '04',
      title: 'Lave e seque',
      description: 'Inicie o ciclo e aguarde. Em poucos minutos suas roupas estão limpas, secas e cheirosas.',
    },
  ];

  return (
    <section id="como-funciona" className="py-20 md:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16 text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-[#123B8E] text-xs font-bold uppercase tracking-wider mb-3">
            <span>Passo a Passo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight">
            Como funciona a Lava10
          </h2>
          <p className="mt-3 text-base text-gray-600 leading-relaxed">
            Processo 100% autônomo, rápido e sem burocracia em quatro etapas simples.
          </p>
        </div>

        {/* Horizontal Sequence on Desktop / Vertical on Mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative flex flex-col justify-start bg-[#F8FAFC] rounded-2xl p-6 border border-slate-200/80 shadow-2xs hover:border-[#123B8E]/40 transition-colors"
            >
              {/* Top accent line */}
              <div className="w-10 h-1 bg-[#123B8E] rounded-full mb-6" />

              {/* Large Numeral */}
              <span className="text-4xl sm:text-5xl font-extrabold text-blue-900/20 font-display mb-3">
                {step.number}
              </span>

              {/* Step Title */}
              <h3 className="text-lg font-bold text-[#111827] mb-2">
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Subtle CTA link */}
        <div className="mt-14 pt-8 border-t border-slate-200/80 flex items-center justify-between flex-wrap gap-4">
          <p className="text-sm text-gray-600">
            Dúvidas sobre o funcionamento? Visite qualquer unidade ou fale conosco.
          </p>
          <a
            href="#unidades"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#123B8E] hover:underline"
          >
            <span>Ver unidades disponíveis</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
