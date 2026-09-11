import React from 'react';
import { business } from '../config/business';

export const Tips: React.FC = () => {
  return (
    <section id="dicas" className="py-20 md:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Section Introduction */}
          <div className="lg:col-span-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-[#123B8E] text-xs font-bold uppercase tracking-wider mb-3">
              <span>Guia Prático</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight mb-4">
              Dicas para uma lavagem perfeita
            </h2>
            <p className="text-base text-gray-600 leading-relaxed mb-6">
              Pequenos cuidados garantem que suas roupas fiquem impecavelmente limpas, cheirosas e preservadas por muito mais tempo.
            </p>
            <div className="p-4 rounded-xl bg-blue-50/80 border border-blue-200/60 text-xs text-[#123B8E] leading-relaxed">
              <strong>Sabão e amaciante já inclusos:</strong> você não precisa se preocupar em levar produtos de limpeza para a Lava10.
            </div>
          </div>

          {/* Editorial Clean List with Card Groupings */}
          <div className="lg:col-span-8">
            <div className="space-y-4">
              {business.tips.map((tip, idx) => (
                <div
                  key={tip.id}
                  className="p-5 rounded-xl bg-[#F8FAFC] border border-slate-200/80 shadow-2xs flex items-start gap-4 hover:border-[#123B8E]/30 transition-colors"
                >
                  <span className="text-xs font-bold text-[#123B8E] bg-white border border-blue-200 w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-2xs">
                    {idx + 1}
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-[#111827] mb-1">
                      {tip.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {tip.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
