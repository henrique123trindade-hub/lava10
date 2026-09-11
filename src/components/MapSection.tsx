import React from 'react';
import { business } from '../config/business';
import { MapPin, ExternalLink, Navigation, Clock, Compass } from 'lucide-react';

export const MapSection: React.FC = () => {
  const matriz = business.units[0];
  const filial = business.units[1];

  // Matriz Google Maps URLs
  const matrizQuery = encodeURIComponent(`${matriz.address}, Centro, ${business.city} - ${business.state}`);
  const matrizEmbedUrl = `https://maps.google.com/maps?q=${matrizQuery}&t=&z=16&ie=UTF8&iwloc=&output=embed`;
  const matrizExternalUrl = matriz.mapsUrl || `https://www.google.com/maps/search/?api=1&query=${matrizQuery}`;
  const matrizDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${matrizQuery}`;

  // Filial Google Maps URLs
  const filialQueryText = filial?.address 
    ? `${filial.address}, Zona Norte, ${business.city} - ${business.state}`
    : `Zona Norte, ${business.city} - ${business.state}`;
  const filialQuery = encodeURIComponent(filialQueryText);
  const filialEmbedUrl = `https://maps.google.com/maps?q=${filialQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
  const filialExternalUrl = filial?.mapsUrl || `https://www.google.com/maps/search/?api=1&query=${filialQuery}`;
  const filialDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${filialQuery}`;

  return (
    <section id="mapa" className="py-14 sm:py-20 md:py-24 bg-[#F8FAFC] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-8 sm:mb-12 text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-[#123B8E] text-xs font-bold uppercase tracking-wider mb-2 sm:mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Localização no Mapa</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#111827] tracking-tight">
            Nossas Unidades no Google Maps
          </h2>
          <p className="mt-1.5 sm:mt-2 text-sm sm:text-base text-gray-600 leading-relaxed">
            Localize e trace sua rota direto pelo celular para a Matriz Centro ou Filial Zona Norte.
          </p>
        </div>

        {/* 2-Column Maps Grid (Loaded concurrently without delay) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          
          {/* Card 1: Matriz Centro */}
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden flex flex-col justify-between">
            {/* Header */}
            <div className="p-4 sm:p-5 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#123B8E] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-base font-bold text-[#111827]">
                      Lava10 Matriz &bull; Centro
                    </h4>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-100 text-[#123B8E]">
                      Principal
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mt-0.5 flex flex-wrap items-center gap-x-2 gap-y-0.5">
                    <span>{matriz.address}</span>
                    <span className="text-gray-300 hidden sm:inline">&bull;</span>
                    <span className="inline-flex items-center gap-1 text-gray-700 font-medium">
                      <Clock className="w-3 h-3 text-[#123B8E]" />
                      06h às 02h
                    </span>
                  </p>
                </div>
              </div>

              {/* Action Buttons for Mobile & Desktop */}
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <a
                  href={matrizDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 sm:py-2 rounded-lg bg-[#123B8E] text-white text-xs font-semibold hover:bg-[#0E2A6D] transition-colors shadow-xs active:scale-98"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#F5C400]" />
                  <span>Como Chegar</span>
                </a>
                <a
                  href={matrizExternalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center p-2.5 sm:p-2 rounded-lg bg-gray-100 text-gray-700 text-xs font-semibold hover:bg-gray-200 transition-colors"
                  title="Abrir no app Google Maps"
                  aria-label="Abrir no app Google Maps"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Instant Map Embed - Loaded Eagerly with zero delay */}
            <div className="h-64 sm:h-72 md:h-80 w-full relative bg-slate-100">
              <iframe
                title="Localização da Lava10 Matriz Centro no Google Maps"
                src={matrizEmbedUrl}
                className="w-full h-full border-0"
                loading="eager"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Mobile Footer helper */}
            <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[11px] text-gray-500">
              <span className="flex items-center gap-1">
                <Compass className="w-3 h-3 text-[#123B8E]" />
                Rua Andrade Neves, 1620
              </span>
              <a
                href={matrizDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#123B8E] hover:underline"
              >
                Abrir GPS &rarr;
              </a>
            </div>
          </div>

          {/* Card 2: Filial Zona Norte */}
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden flex flex-col justify-between">
            {/* Header */}
            <div className="p-4 sm:p-5 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-base font-bold text-[#111827]">
                      Lava10 Filial &bull; Zona Norte
                    </h4>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                      24 Horas
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mt-0.5 flex flex-wrap items-center gap-x-2 gap-y-0.5">
                    <span>{filial?.address || 'Zona Norte, Cachoeira do Sul'}</span>
                    <span className="text-gray-300 hidden sm:inline">&bull;</span>
                    <span className="inline-flex items-center gap-1 text-emerald-700 font-semibold">
                      <Clock className="w-3 h-3 text-emerald-600" />
                      Autoatendimento 24h
                    </span>
                  </p>
                </div>
              </div>

              {/* Action Buttons for Mobile & Desktop */}
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <a
                  href={filialDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 sm:py-2 rounded-lg bg-emerald-700 text-white text-xs font-semibold hover:bg-emerald-800 transition-colors shadow-xs active:scale-98"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#F5C400]" />
                  <span>Como Chegar</span>
                </a>
                <a
                  href={filialExternalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center p-2.5 sm:p-2 rounded-lg bg-gray-100 text-gray-700 text-xs font-semibold hover:bg-gray-200 transition-colors"
                  title="Abrir no app Google Maps"
                  aria-label="Abrir no app Google Maps"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Instant Map Embed - Loaded Eagerly with zero delay */}
            <div className="h-64 sm:h-72 md:h-80 w-full relative bg-slate-100">
              <iframe
                title="Localização da Lava10 Filial Zona Norte no Google Maps"
                src={filialEmbedUrl}
                className="w-full h-full border-0"
                loading="eager"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Mobile Footer helper */}
            <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[11px] text-gray-500">
              <span className="flex items-center gap-1 text-emerald-700 font-medium">
                <Clock className="w-3 h-3 text-emerald-600" />
                Aberta 24 Horas sem parar
              </span>
              <a
                href={filialDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-emerald-700 hover:underline"
              >
                Abrir GPS &rarr;
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
