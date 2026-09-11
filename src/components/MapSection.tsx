import React, { useState, useEffect, useRef } from 'react';
import { business } from '../config/business';
import { MapPin, ExternalLink, Navigation, Clock } from 'lucide-react';

export const MapSection: React.FC = () => {
  const matriz = business.units[0];
  const filial = business.units[1];

  // Matriz Google Maps URLs
  const matrizQuery = encodeURIComponent(`${matriz.address}, Centro, ${business.city} - ${business.state}`);
  const matrizEmbedUrl = `https://maps.google.com/maps?q=${matrizQuery}&t=&z=16&ie=UTF8&iwloc=&output=embed`;
  const matrizExternalUrl = matriz.mapsUrl || `https://www.google.com/maps/search/?api=1&query=${matrizQuery}`;

  // Filial Google Maps URLs
  const filialQueryText = filial?.address 
    ? `${filial.address}, Zona Norte, ${business.city} - ${business.state}`
    : `Zona Norte, ${business.city} - ${business.state}`;
  const filialQuery = encodeURIComponent(filialQueryText);
  const filialEmbedUrl = `https://maps.google.com/maps?q=${filialQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
  const filialExternalUrl = filial?.mapsUrl || `https://www.google.com/maps/search/?api=1&query=${filialQuery}`;

  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoadMap, setShouldLoadMap] = useState(false);

  useEffect(() => {
    // Native IntersectionObserver for ultra-fast performance (lazy loads maps within 300px of viewport)
    if (!('IntersectionObserver' in window)) {
      setShouldLoadMap(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShouldLoadMap(true);
          observer.disconnect();
        }
      },
      { rootMargin: '300px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="mapa" className="py-20 md:py-24 bg-[#F8FAFC] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-[#123B8E] text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Localização no Mapa</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight">
            Nossas Unidades no Google Maps
          </h2>
          <p className="mt-2 text-base text-gray-600 leading-relaxed">
            Trace sua rota para a Matriz Centro ou para a Filial Zona Norte.
          </p>
        </div>

        {/* 2-Column Maps Grid (Both Units Together) */}
        <div ref={containerRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card 1: Matriz Centro */}
          <div className="bg-white rounded-2xl border border-slate-200/80 shadow-2xs overflow-hidden flex flex-col justify-between">
            {/* Header */}
            <div className="p-5 sm:p-6 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
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
                  <p className="text-xs text-gray-500 mt-0.5 flex items-center gap-1.5">
                    <span>{matriz.address}</span>
                    <span>&bull;</span>
                    <span className="inline-flex items-center gap-1 text-gray-600">
                      <Clock className="w-3 h-3 text-[#123B8E]" />
                      06h às 02h
                    </span>
                  </p>
                </div>
              </div>

              <a
                href={matrizExternalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg bg-gray-100 text-gray-800 text-xs font-semibold hover:bg-[#123B8E] hover:text-white transition-colors self-start sm:self-auto shrink-0 shadow-2xs"
              >
                <span>Abrir no Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Map Embed */}
            <div className="h-72 sm:h-80 w-full relative bg-gray-50 flex items-center justify-center">
              {shouldLoadMap ? (
                <iframe
                  title="Localização da Lava10 Matriz no Google Maps"
                  src={matrizEmbedUrl}
                  className="w-full h-full border-0 animate-in fade-in duration-300"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              ) : (
                <div className="flex flex-col items-center justify-center p-6 text-center">
                  <Navigation className="w-8 h-8 text-[#123B8E] mb-2 animate-pulse" />
                  <p className="text-xs font-medium text-gray-500 mb-3">
                    Carregando mapa da Matriz...
                  </p>
                  <button
                    type="button"
                    onClick={() => setShouldLoadMap(true)}
                    className="px-4 py-1.5 rounded-lg bg-white border border-gray-200 text-xs font-semibold text-[#123B8E] hover:bg-blue-50 transition-colors cursor-pointer"
                  >
                    Visualizar mapa
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Card 2: Filial Zona Norte */}
          <div className="bg-white rounded-2xl border border-slate-200/80 shadow-2xs overflow-hidden flex flex-col justify-between">
            {/* Header */}
            <div className="p-5 sm:p-6 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
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
                  <p className="text-xs text-gray-500 mt-0.5 flex items-center gap-1.5">
                    <span>{filial?.address ? `${filial.address} • ` : ''}Zona Norte, Cachoeira do Sul</span>
                    <span>&bull;</span>
                    <span className="inline-flex items-center gap-1 text-emerald-700 font-medium">
                      <Clock className="w-3 h-3 text-emerald-600" />
                      Aberto 24h
                    </span>
                  </p>
                </div>
              </div>

              <a
                href={filialExternalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg bg-gray-100 text-gray-800 text-xs font-semibold hover:bg-emerald-700 hover:text-white transition-colors self-start sm:self-auto shrink-0 shadow-2xs"
              >
                <span>Abrir no Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Map Embed */}
            <div className="h-72 sm:h-80 w-full relative bg-gray-50 flex items-center justify-center">
              {shouldLoadMap ? (
                <iframe
                  title="Localização da Lava10 Filial Zona Norte no Google Maps"
                  src={filialEmbedUrl}
                  className="w-full h-full border-0 animate-in fade-in duration-300"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              ) : (
                <div className="flex flex-col items-center justify-center p-6 text-center">
                  <Navigation className="w-8 h-8 text-emerald-600 mb-2 animate-pulse" />
                  <p className="text-xs font-medium text-gray-500 mb-3">
                    Carregando mapa da Filial...
                  </p>
                  <button
                    type="button"
                    onClick={() => setShouldLoadMap(true)}
                    className="px-4 py-1.5 rounded-lg bg-white border border-gray-200 text-xs font-semibold text-emerald-700 hover:bg-emerald-50 transition-colors cursor-pointer"
                  >
                    Visualizar mapa
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
