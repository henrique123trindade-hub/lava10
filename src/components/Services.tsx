import React from 'react';
import { business } from '../config/business';
import { ArrowRight } from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-20 md:py-24 bg-[#F8FAFC] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/70 border border-blue-200/70 text-[#123B8E] text-xs font-bold uppercase tracking-wider mb-3">
              <span>Nossos Serviços</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight">
              O que você encontra na Lava10
            </h2>
            <p className="mt-3 text-base text-gray-600 leading-relaxed">
              Equipamentos profissionais para cada necessidade de lavagem e secagem.
            </p>
          </div>

          <a
            href="#unidades"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#123B8E] hover:underline self-start md:self-auto"
          >
            <span>Ver horários e unidades</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Clean Service Blocks - 4 horizontal/grid sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {business.services.map((service) => (
            <div
              key={service.id}
              className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-[#123B8E]/30 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#123B8E] block mb-2">
                  {service.badge || 'Lava10'}
                </span>
                <h3 className="text-xl font-bold text-[#111827] mb-3">
                  {service.name}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6 pt-4 border-t border-gray-100 text-xs text-gray-600">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#123B8E] font-bold">&bull;</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-gray-100 text-xs text-gray-500">
                {service.price ? (
                  <div className="flex items-baseline justify-between">
                    <span>A partir de</span>
                    <span className="text-lg font-bold text-[#123B8E]">{service.price}</span>
                  </div>
                ) : (
                  <span>{service.priceNotice || 'Valor disponível no totem da unidade'}</span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
