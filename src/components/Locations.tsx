import React from 'react';
import { business } from '../config/business';
import { MapPin, Clock, Navigation, ExternalLink } from 'lucide-react';
import { UnitImage } from './UnitImage';
import { useCustomPhotos } from '../context/CustomPhotosContext';

export const Locations: React.FC = () => {
  const { matrizPhoto, filialPhoto } = useCustomPhotos();

  return (
    <section id="unidades" className="py-20 md:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16 text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-[#123B8E] text-xs font-bold uppercase tracking-wider mb-3">
            <span>Onde Estamos</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight">
            Nossas Unidades em Cachoeira do Sul
          </h2>
          <p className="mt-3 text-base text-gray-600 leading-relaxed">
            Ambientes climatizados, limpos e equipados para sua conveniência.
          </p>
        </div>

        {/* Units Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {business.units.map((unit) => {
            const hasRealAddress = Boolean(unit.address && unit.address.trim().length > 0);
            const directionsUrl = unit.mapsUrl || (hasRealAddress ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(unit.address + ', ' + unit.city)}` : '');
            const isMatriz = unit.type === 'matriz';
            const hasCustomPhoto = isMatriz ? Boolean(matrizPhoto) : Boolean(filialPhoto);

            return (
              <div
                key={unit.id}
                className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  {/* Real Establishment Photography with Mobile Optimization */}
                  <div className={`relative overflow-hidden bg-slate-900 transition-all duration-300 ${
                    hasCustomPhoto
                      ? 'aspect-[4/5] sm:aspect-16/10'
                      : 'aspect-4/3 sm:aspect-16/10'
                  }`}>
                    <UnitImage
                      type={unit.type}
                      alt={`Fachada da ${unit.name} - Lava10 Lavanderia Automática`}
                      className="w-full h-full"
                    />
                  </div>

                  {/* Establishment Info */}
                  <div className="p-6 sm:p-8">
                    <h3 className="text-2xl font-bold text-[#111827] mb-4">
                      {unit.name}
                    </h3>

                    <div className="space-y-3 text-sm text-gray-600 mb-6">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-4 h-4 text-[#123B8E] flex-shrink-0 mt-1" />
                        <div>
                          <span className="font-semibold text-gray-900">Endereço: </span>
                          {hasRealAddress ? (
                            <span>{unit.address} &bull; {unit.neighborhood}, {unit.city}</span>
                          ) : (
                            <span className="text-gray-500 italic">
                              Zona Norte &bull; Endereço em breve (consulte pelo WhatsApp ou Instagram)
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
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
                <div className="p-6 sm:px-8 sm:pb-8 pt-0 border-t border-gray-100 flex items-center justify-between">
                  {hasRealAddress && directionsUrl ? (
                    <a
                      href={directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#123B8E] text-white text-sm font-medium hover:bg-[#0E2A6D] transition-colors"
                    >
                      <Navigation className="w-4 h-4 text-[#F5C400]" />
                      <span>Como chegar</span>
                      <ExternalLink className="w-3.5 h-3.5 opacity-70 ml-0.5" />
                    </a>
                  ) : (
                    <a
                      href={business.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gray-100 text-gray-700 text-sm font-medium hover:bg-gray-200 transition-colors"
                    >
                      <span>Consultar no Instagram</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  <span className="text-xs text-gray-400">
                    {unit.is24Hours ? '24h todos os dias' : 'Todos os dias'}
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
