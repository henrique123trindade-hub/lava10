import React from 'react';
import { business } from '../config/business';
import { Zap, Sparkles, Clock, Check } from 'lucide-react';

export const Benefits: React.FC = () => {
  const benefits = [
    {
      title: 'Rápido',
      description: 'Lave e seque suas roupas em poucos minutos com ciclos profissionais de alta eficiência.',
    },
    {
      title: 'Prático',
      description: 'Você coloca suas roupas, escolhe o ciclo e pronto. Sem trabalho braçal ou sujeira.',
    },
    {
      title: 'Automático',
      description: 'Todo o processo foi pensado para ser simples, com sabão e amaciante dosados automaticamente.',
    },
    {
      title: 'Qualidade',
      description: 'Equipamentos profissionais para uma lavagem profunda, preservando o tecido das suas peças.',
    },
    {
      title: 'Flexibilidade',
      description: 'Unidades com horários ampliados, incluindo atendimento 24 horas na filial da Zona Norte.',
    },
    {
      title: 'Perto de você',
      description: `Localização de fácil acesso em ${business.city} para encaixar perfeitamente na sua rotina.`,
    },
  ];

  return (
    <section id="beneficios" className="py-20 md:py-24 bg-[#F8FAFC] border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Editorial Image Block */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-md bg-white border border-slate-200/60 aspect-[16/10] sm:aspect-[3/4]">
              <img
                src="https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=700&q=75"
                alt="Roupas limpas e dobradas em ambiente moderno de lavanderia"
                width={600}
                height={800}
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent flex items-end p-6">
                <div className="text-white">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#F5C400]">
                    Autoatendimento Descomplicado
                  </p>
                  <p className="text-lg font-bold mt-1 leading-snug">
                    Mais tempo livre para o que realmente importa.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Editorial Information List */}
          <div className="lg:col-span-7">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/70 border border-blue-200/70 text-[#123B8E] text-xs font-bold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5 text-[#123B8E]" />
                <span>Por que a Lava10</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight mb-4">
                Vantagens de lavar com a gente
              </h2>
              <p className="text-base text-gray-600 mb-10 leading-relaxed">
                Desenvolvemos um espaço limpo, seguro e moderno para você cuidar das suas roupas sem perder tempo.
              </p>

              {/* 2-column clean editorial grid of points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
                {benefits.map((item, index) => (
                  <div key={index} className="flex flex-col bg-white p-5 rounded-xl border border-slate-200/70 shadow-2xs">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#123B8E]" />
                      <h3 className="text-base font-bold text-[#111827]">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
