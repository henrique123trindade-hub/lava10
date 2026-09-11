import React from 'react';
import { business } from '../config/business';
import { MapPin, Clock, Navigation, ExternalLink } from 'lucide-react';
import { UnitImage } from './UnitImage';

export const Locations: React.FC = () => {
  return (
    <section id="unidades" className="py-14 sm:py-20 md:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-10 sm:mb-16 text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-[#123B8E] text-xs font-bold uppercase tracking-wider mb-2 sm:mb-3">
            <span>Onde Estamos</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#111827] tracking-tight">
            Nossas Unidades em Cachoeira do Sul
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-600 leading-relaxed">
            Ambientes climatizados, limpos e equipados para sua conveniência.
          </p>
        </div>

        {/* Units Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-10 sm:mb-16">
          {business.units.map((unit) => {
            const hasRealAddress = Boolean(unit.address && unit.address.trim().length > 0);
            const directionsUrl = unit.mapsUrl || (hasRealAddress ? `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(unit.address + ', ' + unit.city)}` : '');

            return (
              <div
                key={unit.id}
                className="border border-slate-200/90 rounded-2xl overflow-hidden bg-white shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  {/* Real Establishment Photography */}
                  <div className="relative overflow-hidden bg-slate-900 aspect-[4/3] sm:aspect-[16/10]">
                    <UnitImage
                      type={unit.type}
                      alt={`Fachada da ${unit.name} - Lava10 Lavanderia Automática`}
                      className="w-full h-full"
                    />
                  </div>

                  {/* Establishment Info */}
                  <div className="p-5 sm:p-7">
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <h3 className="text-xl sm:text-2xl font-bold text-[#111827]">
                        {unit.name}
                      </h3>
                      <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full shrink-0 ${
                        unit.is24Hours
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-blue-100 text-[#123B8E]'
                      }`}>
                        {unit.is24Hours ? '24 Horas' : '06h às 02h'}
                      </span>
                    </div>

                    <div className="space-y-2.5 text-sm text-gray-600 mb-4 sm:mb-6">
                      <div className="flex items-start gap-2.5">
                        <MapPin className="w-4 h-4 text-[#123B8E] flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold text-gray-900">Endereço: </span>
                          {hasRealAddress ? (
                            <span>{unit.address} &bull; {unit.neighborhood}, {unit.city}</span>
                          ) : (
                            <span className="text-gray-500 italic">
                              Zona Norte &bull; Atendimento 24h
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-2.5">
                        <Clock className="w-4 h-4 text-[#123B8E] flex-shrink-0" />
                        <div>
                          <span className="font-semibold text-gray-900">Horário: </span>
                          <span>{unit.hours}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Bar */}
                <div className="p-5 sm:px-7 sm:pb-7 pt-0 border-t border-gray-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                  {hasRealAddress && directionsUrl ? (
                    <a
                      href={directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#123B8E] text-white text-sm font-medium hover:bg-[#0E2A6D] transition-colors shadow-xs active:scale-98 min-h-[44px]"
                    >
                      <Navigation className="w-4 h-4 text-[#F5C400]" />
                      <span>Como chegar pelo GPS</span>
                      <ExternalLink className="w-3.5 h-3.5 opacity-70 ml-0.5" />
                    </a>
                  ) : (
                    <a
                      href="#mapa"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-700 text-white text-sm font-medium hover:bg-emerald-800 transition-colors shadow-xs active:scale-98 min-h-[44px]"
                    >
                      <Navigation className="w-4 h-4 text-[#F5C400]" />
                      <span>Ver no Mapa</span>
                    </a>
                  )}

                  <span className="text-xs text-gray-500 text-center sm:text-right font-medium">
                    {unit.is24Hours ? 'Autoatendimento 24h todos os dias' : 'Aberto todos os dias'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
