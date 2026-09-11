import React, { useState } from 'react';
import { business } from '../config/business';
import { ChevronDown } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="duvidas" className="py-20 md:py-24 bg-[#F8FAFC] border-b border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/70 border border-blue-200/70 text-[#123B8E] text-xs font-bold uppercase tracking-wider mb-3">
            <span>Tire suas Dúvidas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight">
            Perguntas Frequentes
          </h2>
          <p className="mt-3 text-base text-gray-600 leading-relaxed">
            Tudo o que você precisa saber antes de ir até a Lava10.
          </p>
        </div>

        {/* Minimalist Accordion List */}
        <div className="divide-y divide-slate-100 border border-slate-200/80 bg-white rounded-2xl shadow-2xs px-6 sm:px-8">
          {business.faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={faq.id} className="py-5">
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between text-left gap-4 focus:outline-hidden group cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-[#111827] group-hover:text-[#123B8E] transition-colors">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-400 flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#123B8E]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="pt-3 pr-8 text-sm text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
